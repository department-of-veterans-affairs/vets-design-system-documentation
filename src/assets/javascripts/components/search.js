// Running search on Jekyll
/*
 Because of this site's design, we have two search inputs;
 one for desktop sizes and one for mobile sizes.
 SimpleJekyllSearch doesn't easily allow for running searches
 using muliple inputs, so we had to implement it a little
 differently.

*/
// Delcare some variables
var toggle_mobile_nav_button = document.getElementById("toggle-mobile-search"),
    mobile_search_container = document.getElementById("mobile-search-container"),
    mobile_search_input = document.getElementById("mobile-search-input"),
    mobile_results_container = document.getElementById("mobile-results-container"),
    visible_class = "is-visible",
    desktop_search_input = document.getElementById('search-input'),
    desktop_results_container = document.getElementById("results-container"),
    results_page_container = document.getElementById('results-page');

// Get the URL param from the search query
function getQueryVariable(variable) {
var query = window.location.search.substring(1);
var vars = query.split('&');

for (var i = 0; i < vars.length; i++) {
  var pair = vars[i].split('=');

  if (pair[0] === variable) {
    return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
  }
}
}

// SimpleJekyllSearch looks for change events on an inputs,
// so we have to fake it
function triggerEvent(el, type){
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, false, true);
  el.dispatchEvent(e);
}

// Function to read Sass variables from psuedo element
var viewportIsWide = window.getBreakpointData().applied.indexOf('nav-width') !== -1;

// Next two functions are the search functions.
var searchOnDesktop = function() {
  console.log("searching on d");
  SimpleJekyllSearch({
    searchInput: desktop_search_input,
    resultsContainer: desktop_results_container,
    json: '{{ site.baseurl }}/search.json'
  });
}

var searchOnMobile = function() {
  SimpleJekyllSearch({
    searchInput: mobile_search_input,
    resultsContainer: mobile_results_container,
    json: '{{ site.baseurl }}/search.json'
  });
}

// Function for search results page
var searchOnResultsPage = function() {
  var searchTerm = getQueryVariable('query');
  // Put the value of the query on the page
  if (typeof searchTerm != "undefined"){
    desktop_search_input.value = searchTerm;
    mobile_search_input.value = searchTerm;
    document.getElementById('query-term').innerHTML = searchTerm;
  }
  console.log("searching on page");
  SimpleJekyllSearch({
    searchInput: desktop_search_input,
    resultsContainer: results_page_container,
    json: '{{ site.baseurl }}/search.json'
  });
  setTimeout(function(){ triggerEvent(desktop_search_input, 'keyup'); }, 30);
}

var searchFunctions = function() {
  if (viewportIsWide) {
    searchOnDesktop();
  }
  else {
    searchOnMobile();
  }
}

// Determines if displaying results on the search results page first
if (results_page_container !== null) {
  searchOnResultsPage();
  setTimeout(function(){ searchFunctions(); console.log('header search from results page');}, 35);
}
else {
  searchFunctions();
}

// Determine if we should target mobile or desktop search after resize
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

// Prevent results page in IE11
// Search results don't show up on the results page in IE11, so we
// remove the form element in IE11
// TODO: Debug search script so this isn't necessary

var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

if (isIE11) {
  // select element to unwrap
  var el = document.querySelector('.search-form');

  // get the element's parent node
  var parent = el.parentNode;

  // move all children out of the element
  while (el.firstChild) parent.insertBefore(el.firstChild, el);

  // remove the empty element
  parent.removeChild(el);
}








