// Mermaid Charts with Accessibility Support
(function() {
  'use strict';

  // Configuration constants
  const MERMAID_CONFIG = {
    startOnLoad: true,
    theme: 'base',
    flowchart: {
      nodeSpacing: 15,
      rankSpacing: 25,
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

  // Handle keyboard navigation
  function handleKeyDown(e, nodes) {
    const currentNode = e.target.closest('g.node');
    if (!currentNode) return;

    const allNodesArray = Array.from(nodes);

    switch(e.key) {
      case KEYS.ENTER:
      case KEYS.SPACE:
        e.preventDefault();
        announceSelection(currentNode);
        break;

      case KEYS.ARROW_RIGHT:
      case KEYS.ARROW_LEFT:
      case KEYS.ARROW_DOWN:
      case KEYS.ARROW_UP:
        e.preventDefault();
        const direction = e.key.replace('Arrow', '').toLowerCase();
        const nextNode = findClosestNodeInDirection(currentNode, allNodesArray, direction);
        if (nextNode) {
          updateTabIndex(nodes, nextNode);
          nextNode.focus();
        }
        break;

      case KEYS.TAB:
        e.preventDefault();
        const currentIndex = allNodesArray.indexOf(currentNode);
        const nextIndex = e.shiftKey 
          ? (currentIndex === 0 ? allNodesArray.length - 1 : currentIndex - 1)
          : (currentIndex + 1) % allNodesArray.length;
        
        updateTabIndex(nodes, allNodesArray[nextIndex]);
        allNodesArray[nextIndex].focus();
        break;
    }
  }

  // Set up accessibility for a single chart
  function setupChartAccessibility(chart) {
    const nodes = chart.querySelectorAll('g.node');
    if (nodes.length === 0) return;

    nodes.forEach((node, index) => {
      // Set up ARIA attributes
      node.setAttribute('tabindex', index === 0 ? '0' : '-1');
      node.setAttribute('role', 'button');
      
      // Extract and set aria-label
      const textElement = node.querySelector('foreignObject, text');
      if (textElement) {
        const nodeText = textElement.textContent.trim();
        node.setAttribute('aria-label', nodeText);
      }

      // Add keyboard event listener
      node.addEventListener('keydown', e => handleKeyDown(e, nodes));
    });
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