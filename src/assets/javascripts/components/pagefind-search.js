// Pagefind search implementation for VA Design System
// Replaces Simple-Jekyll-Search with Pagefind

// Wait for Pagefind to be available
function waitForPagefind(callback) {
  if (typeof PagefindUI !== 'undefined') {
    callback();
  } else {
    setTimeout(function() { waitForPagefind(callback); }, 50);
  }
}

// Initialize search when DOM and Pagefind are ready
function initializeSearch() {
  waitForPagefind(function() {
    setupPagefindSearch();
  });
}

function setupPagefindSearch() {
  const resultsPageContainer = document.getElementById('results-page');
  const desktopResultsContainer = document.getElementById('results-container');
  const mobileResultsContainer = document.getElementById('mobile-results-container');

  if (resultsPageContainer) {
    // Results page setup
    setupResultsPage(resultsPageContainer);
  } else {
    // Main site inline search setup
    if (desktopResultsContainer) {
      setupInlineSearch(desktopResultsContainer, 'search-input');
    }
    if (mobileResultsContainer) {
      setupInlineSearch(mobileResultsContainer, 'mobile-search-input');
    }
  }

  // Setup mobile search toggle (keep existing functionality)
  setupMobileSearchToggle();
}

function setupResultsPage(container) {
  const queryTerm = getQueryVariable('query');
  
  if (queryTerm) {
    // Update page title and input values
    const queryTermElement = document.getElementById('query-term');
    const desktopInput = document.getElementById('search-input');
    const mobileInput = document.getElementById('mobile-search-input');
    
    if (queryTermElement) queryTermElement.innerText = htmlEncode(queryTerm);
    if (desktopInput) desktopInput.value = htmlEncode(queryTerm);
    if (mobileInput) mobileInput.value = htmlEncode(queryTerm);

    // Initialize Pagefind UI for results page
    new PagefindUI({
      element: container,
      showImages: false,
      showSubResults: true,
      excerptLength: 15,
      resetStyles: false,
      bundlePath: "/pagefind/"
    });

    // Auto-search with the query parameter
    setTimeout(function() {
      const pagefindInput = container.querySelector('.pagefind-ui__search-input');
      if (pagefindInput) {
        pagefindInput.value = queryTerm;
        pagefindInput.dispatchEvent(new Event('input'));
      }
    }, 100);
  }
}

function setupInlineSearch(container, inputId) {
  // Create a simplified UI that integrates with existing design
  const existingInput = document.getElementById(inputId);
  
  if (!existingInput) return;

  // Initialize Pagefind UI (hidden by default)
  const pagefindUI = new PagefindUI({
    element: container,
    showImages: false,
    showSubResults: false,
    excerptLength: 10,
    resetStyles: true,
    bundlePath: "/pagefind/"
  });

  // Hide the Pagefind input and use existing input
  setTimeout(function() {
    const pagefindInput = container.querySelector('.pagefind-ui__search-input');
    if (pagefindInput) {
      pagefindInput.style.display = 'none';
    }
  }, 100);

  // Connect existing input to Pagefind
  existingInput.addEventListener('input', function(e) {
    const pagefindInput = container.querySelector('.pagefind-ui__search-input');
    if (pagefindInput) {
      pagefindInput.value = e.target.value;
      pagefindInput.dispatchEvent(new Event('input'));
    }
  });
}

function setupMobileSearchToggle() {
  const toggleButton = document.getElementById("toggle-mobile-search");
  const mobileSearchContainer = document.getElementById("mobile-search-container");
  const mobileSearchInput = document.getElementById("mobile-search-input");
  const visibleClass = "is-visible";

  if (toggleButton && mobileSearchContainer) {
    toggleButton.addEventListener("click", function(e) {
      if (mobileSearchContainer.classList.contains("is-visible")) {
        mobileSearchContainer.classList.remove(visibleClass);
        toggleButton.focus();
      } else {
        mobileSearchContainer.classList.add(visibleClass);
        if (mobileSearchInput) mobileSearchInput.focus();
      }
    });
  }
}

// Helper functions
function getQueryVariable(variable) {
  const query = window.location.search.substring(1);
  const vars = query.split('&');
  
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=');
    if (pair[0] === variable) {
      return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
    }
  }
}

function htmlEncode(str) {
  return String(str).replace(/[^\w. ]/gi, function(c){
    return '&#'+c.charCodeAt(0)+';';
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeSearch);
} else {
  initializeSearch();
}