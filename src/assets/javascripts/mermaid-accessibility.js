// Mermaid Charts with Accessibility Support
(function() {
  'use strict';

  // Get VADS spacing values from CSS custom properties for consistency
  function getVADSSpacing() {
    const rootStyles = getComputedStyle(document.documentElement);
    const nodeSpacing = parseInt(rootStyles.getPropertyValue('--mermaid-node-spacing')) || 16;
    const rankSpacing = parseInt(rootStyles.getPropertyValue('--mermaid-rank-spacing')) || 24;
    
    return { nodeSpacing, rankSpacing };
  }

  // Configuration constants
  const VADS_SPACING = getVADSSpacing();
  const MERMAID_CONFIG = {
    startOnLoad: true,
    theme: 'base',
    flowchart: {
      nodeSpacing: VADS_SPACING.nodeSpacing, // Uses --vads-spacing-2 (16px) for consistent node spacing
      rankSpacing: VADS_SPACING.rankSpacing, // Uses --vads-spacing-3 (24px) for consistent rank spacing
      curve: 'basis',
      padding: 10
    },
    accessibility: {
      enabled: true
    }
  };

  const KEYS = {
    ENTER: 'Enter',
    SPACE: ' ',
    ARROW_RIGHT: 'ArrowRight',
    ARROW_LEFT: 'ArrowLeft',
    ARROW_DOWN: 'ArrowDown',
    ARROW_UP: 'ArrowUp',
    TAB: 'Tab'
  };

  // Helper function to calculate node center
  function getNodeCenter(node) {
    const rect = node.getBoundingClientRect();
    return {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    };
  }

  // Calculate distance between nodes based on direction
  function calculateDirectionalDistance(currentCenter, candidateCenter, direction) {
    const dx = Math.abs(candidateCenter.x - currentCenter.x);
    const dy = Math.abs(candidateCenter.y - currentCenter.y);
    
    switch(direction) {
      case 'right':
      case 'left':
        return dx + dy * 2; // Favor horizontal alignment
      case 'up':
      case 'down':
        return dy + dx * 2; // Favor vertical alignment
      default:
        return dx + dy;
    }
  }

  // Check if candidate node is in valid direction
  function isValidDirection(currentCenter, candidateCenter, direction) {
    switch(direction) {
      case 'right': return candidateCenter.x > currentCenter.x;
      case 'left': return candidateCenter.x < currentCenter.x;
      case 'down': return candidateCenter.y > currentCenter.y;
      case 'up': return candidateCenter.y < currentCenter.y;
      default: return false;
    }
  }

  // Find the closest node in a given direction
  function findClosestNodeInDirection(currentNode, allNodes, direction) {
    const currentCenter = getNodeCenter(currentNode);
    
    return allNodes.reduce((closest, candidateNode) => {
      if (candidateNode === currentNode) return closest;
      
      const candidateCenter = getNodeCenter(candidateNode);
      
      if (!isValidDirection(currentCenter, candidateCenter, direction)) {
        return closest;
      }
      
      const distance = calculateDirectionalDistance(currentCenter, candidateCenter, direction);
      
      return (!closest || distance < closest.distance) 
        ? { node: candidateNode, distance }
        : closest;
    }, null)?.node || null;
  }

  // Announce selection for screen readers
  function announceSelection(node) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = `Selected: ${node.getAttribute('aria-label')}`;
    
    document.body.appendChild(announcement);
    setTimeout(() => document.body.removeChild(announcement), 1000);
  }

  // Update tab index using roving tabindex pattern
  function updateTabIndex(allNodes, focusedNode) {
    allNodes.forEach(node => node.setAttribute('tabindex', '-1'));
    focusedNode.setAttribute('tabindex', '0');
  }

  // Extract flowchart connections from the mermaid graph
  function buildFlowchartNavigationMap(chart) {
    const connections = new Map();
    const reverseConnections = new Map();
    const nodes = Array.from(chart.querySelectorAll('g.node'));
    
    // Simple algorithm: build connections based on node positions and types
    nodes.forEach((node, index) => {
      const nodeCenter = getNodeCenter(node);
      const nodeType = getNodeType(node);
      const nodeId = node.id || `node-${index}`;
      
      // Set a unique ID if it doesn't exist
      if (!node.id) {
        node.id = nodeId;
      }
      
      // Find logical connections based on flowchart patterns
      const connectedNodes = [];
      
      if (nodeType === 'question') {
        // Questions typically connect to multiple answers below them
        const answersBelow = nodes.filter(otherNode => {
          if (otherNode === node) return false;
          const otherCenter = getNodeCenter(otherNode);
          const otherType = getNodeType(otherNode);
          
          return otherType === 'answer' && 
                 otherCenter.y > nodeCenter.y && // Below the question
                 Math.abs(otherCenter.y - nodeCenter.y) < 200; // Within reasonable distance
        });
        
        // Sort by horizontal position (left to right)
        answersBelow.sort((a, b) => getNodeCenter(a).x - getNodeCenter(b).x);
        connectedNodes.push(...answersBelow.map(n => n.id));
        
      } else if (nodeType === 'answer') {
        // Answers connect to next questions or results below them
        const nextSteps = nodes.filter(otherNode => {
          if (otherNode === node) return false;
          const otherCenter = getNodeCenter(otherNode);
          
          return otherCenter.y > nodeCenter.y && // Below the answer
                 Math.abs(otherCenter.x - nodeCenter.x) < 150; // Vertically aligned
        });
        
        // Find the closest one below
        if (nextSteps.length > 0) {
          const closest = nextSteps.reduce((closest, current) => {
            const closestDistance = Math.abs(getNodeCenter(closest).y - nodeCenter.y);
            const currentDistance = Math.abs(getNodeCenter(current).y - nodeCenter.y);
            return currentDistance < closestDistance ? current : closest;
          });
          connectedNodes.push(closest.id);
        }
      }
      
      connections.set(nodeId, connectedNodes);
      
      // Build reverse connections
      connectedNodes.forEach(connectedId => {
        if (!reverseConnections.has(connectedId)) {
          reverseConnections.set(connectedId, []);
        }
        reverseConnections.get(connectedId).push(nodeId);
      });
    });
    
    return { connections, reverseConnections };
  }

  // Find sibling nodes (alternative answers to the same question)
  function findSiblingNodes(currentNode, allNodes, navigationMap) {
    const currentId = currentNode.id;
    const siblings = [];
    
    // Find all nodes that share the same parent (reverse connection)
    for (const [nodeId, parents] of navigationMap.reverseConnections.entries()) {
      if (nodeId === currentId) continue;
      
      // Check if they share any common parents
      const currentParents = navigationMap.reverseConnections.get(currentId) || [];
      const sharedParents = parents.filter(parent => currentParents.includes(parent));
      
      if (sharedParents.length > 0) {
        const siblingNode = Array.from(allNodes).find(node => node.id === nodeId);
        if (siblingNode) {
          siblings.push(siblingNode);
        }
      }
    }
    
    return siblings;
  }

  // Enhanced navigation that follows flowchart logic
  function findNextNodeInFlow(currentNode, allNodes, direction, navigationMap) {
    const currentId = currentNode.id || currentNode.getAttribute('data-id');
    
    switch(direction) {
      case 'down': // Follow the primary flow (next step)
      case 'right':
        // Look for connected nodes in the flow direction
        if (navigationMap.connections.has(currentId)) {
          const nextNodeId = navigationMap.connections.get(currentId)[0];
          return Array.from(allNodes).find(node => 
            (node.id === nextNodeId || node.getAttribute('data-id') === nextNodeId)
          );
        }
        // Fallback to spatial navigation
        return findClosestNodeInDirection(currentNode, allNodes, 'down');
        
      case 'up': // Go back in the flow (previous step)
      case 'left':
        // Look for parent nodes in the reverse flow
        if (navigationMap.reverseConnections.has(currentId)) {
          const prevNodeId = navigationMap.reverseConnections.get(currentId)[0];
          return Array.from(allNodes).find(node => 
            (node.id === prevNodeId || node.getAttribute('data-id') === prevNodeId)
          );
        }
        // Fallback to spatial navigation
        return findClosestNodeInDirection(currentNode, allNodes, 'up');
        
      default:
        return findClosestNodeInDirection(currentNode, allNodes, direction);
    }
  }

  // Determine if nodes are decision/question nodes vs answer/result nodes
  function getNodeType(node) {
    const text = node.textContent.toLowerCase();
    const shapes = node.querySelectorAll('polygon, circle, rect, path');
    
    // Check for question indicators
    if (text.includes('?') || text.includes('does it') || text.includes('is it')) {
      return 'question';
    }
    
    // Check for answer indicators  
    if (text.includes('yes') || text.includes('no') || text.includes('make it')) {
      return 'answer';
    }
    
    // Check shape type (diamonds are usually questions in flowcharts)
    const shape = shapes[0];
    if (shape && shape.tagName === 'polygon') {
      // Diamond shapes typically indicate decision points
      return 'question';
    }
    
    return 'step';
  }

  // Enhanced keyboard navigation with flow awareness
  function handleKeyDownEnhanced(e, nodes, navigationMap) {
    const currentNode = e.target.closest('g.node');
    if (!currentNode) return;

    const allNodesArray = Array.from(nodes);
    const currentNodeType = getNodeType(currentNode);

    switch(e.key) {
      case KEYS.ENTER:
      case KEYS.SPACE:
        e.preventDefault();
        announceSelection(currentNode);
        break;

      case KEYS.ARROW_DOWN:
        e.preventDefault();
        // For questions, go to first answer option
        // For answers, go to next question or result
        const nextNode = findNextNodeInFlow(currentNode, allNodesArray, 'down', navigationMap);
        if (nextNode) {
          updateTabIndex(nodes, nextNode);
          nextNode.focus();
          announceFlowNavigation(currentNode, nextNode, 'next');
        }
        break;

      case KEYS.ARROW_UP:
        e.preventDefault();
        // Go back to previous step in the flow
        const prevNode = findNextNodeInFlow(currentNode, allNodesArray, 'up', navigationMap);
        if (prevNode) {
          updateTabIndex(nodes, prevNode);
          prevNode.focus();
          announceFlowNavigation(currentNode, prevNode, 'previous');
        }
        break;

      case KEYS.ARROW_RIGHT:
        e.preventDefault();
        // Find sibling nodes (alternative answers) or spatial navigation
        const siblings = findSiblingNodes(currentNode, allNodesArray, navigationMap);
        if (siblings.length > 0) {
          // Find the sibling to the right
          const currentCenter = getNodeCenter(currentNode);
          const rightSibling = siblings.find(sibling => {
            const siblingCenter = getNodeCenter(sibling);
            return siblingCenter.x > currentCenter.x;
          });
          
          if (rightSibling) {
            updateTabIndex(nodes, rightSibling);
            rightSibling.focus();
            announceFlowNavigation(currentNode, rightSibling, 'alternative');
            break;
          }
        }
        
        // Fallback to spatial navigation
        const rightNode = findClosestNodeInDirection(currentNode, allNodesArray, 'right');
        if (rightNode) {
          updateTabIndex(nodes, rightNode);
          rightNode.focus();
        }
        break;

      case KEYS.ARROW_LEFT:
        e.preventDefault();
        // Find sibling nodes (alternative answers) or spatial navigation
        const leftSiblings = findSiblingNodes(currentNode, allNodesArray, navigationMap);
        if (leftSiblings.length > 0) {
          // Find the sibling to the left
          const currentCenter = getNodeCenter(currentNode);
          const leftSibling = leftSiblings.find(sibling => {
            const siblingCenter = getNodeCenter(sibling);
            return siblingCenter.x < currentCenter.x;
          });
          
          if (leftSibling) {
            updateTabIndex(nodes, leftSibling);
            leftSibling.focus();
            announceFlowNavigation(currentNode, leftSibling, 'alternative');
            break;
          }
        }
        
        // Fallback to spatial navigation
        const leftNode = findClosestNodeInDirection(currentNode, allNodesArray, 'left');
        if (leftNode) {
          updateTabIndex(nodes, leftNode);
          leftNode.focus();
        }
        break;

      case KEYS.TAB:
        e.preventDefault();
        // Sequential navigation through all nodes (fallback)
        const currentIndex = allNodesArray.indexOf(currentNode);
        const nextIndex = e.shiftKey 
          ? (currentIndex === 0 ? allNodesArray.length - 1 : currentIndex - 1)
          : (currentIndex + 1) % allNodesArray.length;
        
        updateTabIndex(nodes, allNodesArray[nextIndex]);
        allNodesArray[nextIndex].focus();
        break;
    }
  }

  // Announce flow-aware navigation for screen readers
  function announceFlowNavigation(fromNode, toNode, direction) {
    const fromText = fromNode.getAttribute('aria-label');
    const toText = toNode.getAttribute('aria-label');
    const toType = getNodeType(toNode);
    
    let message = '';
    switch(direction) {
      case 'next':
        message = `Moving to ${toType}: ${toText}`;
        break;
      case 'previous':
        message = `Going back to ${toType}: ${toText}`;
        break;
      case 'alternative':
        message = `Alternative option: ${toText}`;
        break;
      default:
        message = `Selected: ${toText}`;
    }
    
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    setTimeout(() => document.body.removeChild(announcement), 1000);
  }

  // Set up accessibility for a single chart
  function setupChartAccessibility(chart) {
    const nodes = chart.querySelectorAll('g.node');
    if (nodes.length === 0) return;

    // Build navigation map for flowchart-aware navigation
    const navigationMap = buildFlowchartNavigationMap(chart);

    nodes.forEach((node, index) => {
      // Set up ARIA attributes
      node.setAttribute('tabindex', index === 0 ? '0' : '-1');
      node.setAttribute('role', 'button');
      
      // Extract and enhance aria-label with node type
      const textElement = node.querySelector('foreignObject, text');
      if (textElement) {
        const nodeText = textElement.textContent.trim();
        const nodeType = getNodeType(node);
        const enhancedLabel = `${nodeType}: ${nodeText}`;
        node.setAttribute('aria-label', enhancedLabel);
      }

      // Add enhanced keyboard event listener
      node.addEventListener('keydown', e => handleKeyDownEnhanced(e, nodes, navigationMap));
      
      // Add helpful instruction on focus
      node.addEventListener('focus', () => {
        const nodeType = getNodeType(node);
        if (nodeType === 'question') {
          node.setAttribute('aria-describedby', 'flowchart-question-help');
        } else if (nodeType === 'answer') {
          node.setAttribute('aria-describedby', 'flowchart-answer-help');
        }
      });
    });

    // Add navigation instructions
    addNavigationInstructions(chart);
  }

  // Add helpful navigation instructions
  function addNavigationInstructions(chart) {
    const instructions = document.createElement('div');
    instructions.innerHTML = `
      <div id="flowchart-question-help" class="sr-only">
        Decision point. Use Down arrow to proceed to answer options, Left and Right arrows to explore alternatives.
      </div>
      <div id="flowchart-answer-help" class="sr-only">
        Answer option. Use Down arrow to proceed to next step, Up arrow to return to previous question, Left and Right arrows for alternative answers.
      </div>
      <div id="flowchart-navigation-help" class="sr-only">
        Flowchart navigation: Use arrow keys to follow the decision flow, Tab to navigate sequentially, Enter or Space to announce current selection.
      </div>
    `;
    chart.appendChild(instructions);
  }

  // Initialize Mermaid and set up accessibility
  function initializeMermaid() {
    mermaid.initialize(MERMAID_CONFIG);
    
    mermaid.run().then(() => {
      document.querySelectorAll('.mermaid').forEach(setupChartAccessibility);
    });
  }

  // Start when DOM is ready
  document.addEventListener('DOMContentLoaded', initializeMermaid);
})();