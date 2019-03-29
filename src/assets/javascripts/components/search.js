var viewportIsWide = window.getBreakpointData().applied.indexOf('nav-width') !== -1;

var searchOnDesktop = function() {
  SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '{{ site.baseurl }}/search.json'
  });
}

var searchOnMobile = function() {
  SimpleJekyllSearch({
    searchInput: document.getElementById('mobile-search-input'),
    resultsContainer: document.getElementById('mobile-results-container'),
    json: '{{ site.baseurl }}/search.json'
  });
}

if (viewportIsWide) {
  searchOnDesktop();
}
else {
  searchOnMobile();
}


window.onresize = function(event) {
  var viewportIsWide = window.getBreakpointData().applied.indexOf('nav-width') !== -1;
  if (viewportIsWide) {
    searchOnDesktop();
  }
  else {
    searchOnMobile();
  }
};

// Toggle Mobile search

var toggle_mobile_nav_button = document.getElementById("toggle-mobile-search"),
    mobile_search_container = document.getElementById("mobile-search-container"),
    mobile_search_input = document.getElementById("mobile-search-input");
    visible_class = "is-visible";

toggle_mobile_nav_button.addEventListener("click", function(e) {
  if (mobile_search_container.classList.contains("is-visible")) {
    mobile_search_container.classList.remove(visible_class);
    toggle_mobile_nav_button.focus();
  }
  else {
    mobile_search_container.classList.add(visible_class);
    mobile_search_input.focus();
  }
});
