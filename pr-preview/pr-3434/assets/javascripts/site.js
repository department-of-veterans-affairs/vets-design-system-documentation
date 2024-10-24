window.getBreakpointData = function() {
  return JSON.parse(window.getComputedStyle(document.documentElement, ':before').content.replace(/^['"]|\\|['"]$/g, ''));
};
/*!
  * Simple-Jekyll-Search v1.7.2 (https://github.com/christian-fei/Simple-Jekyll-Search)
  * Copyright 2015-2018, Christian Fei
  * Licensed under the MIT License.
  */

(function(){
/* globals ActiveXObject:false */

'use strict'

var _$JSONLoader_2 = {
  load: load
}

function load (location, callback) {
  var xhr = getXHR()
  xhr.open('GET', location, true)
  xhr.onreadystatechange = createStateChangeListener(xhr, callback)
  xhr.send()
}

function createStateChangeListener (xhr, callback) {
  return function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      try {
        callback(null, JSON.parse(xhr.responseText))
      } catch (err) {
        callback(err, null)
      }
    }
  }
}

function getXHR () {
  return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP')
}

'use strict'

var _$OptionsValidator_3 = function OptionsValidator (params) {
  if (!validateParams(params)) {
    throw new Error('-- OptionsValidator: required options missing')
  }

  if (!(this instanceof OptionsValidator)) {
    return new OptionsValidator(params)
  }

  var requiredOptions = params.required

  this.getRequiredOptions = function () {
    return requiredOptions
  }

  this.validate = function (parameters) {
    var errors = []
    requiredOptions.forEach(function (requiredOptionName) {
      if (typeof parameters[requiredOptionName] === 'undefined') {
        errors.push(requiredOptionName)
      }
    })
    return errors
  }

  function validateParams (params) {
    if (!params) {
      return false
    }
    return typeof params.required !== 'undefined' && params.required instanceof Array
  }
}

'use strict';

function fuzzysearch (needle, haystack) {
  var tlen = haystack.length;
  var qlen = needle.length;
  if (qlen > tlen) {
    return false;
  }
  if (qlen === tlen) {
    return needle === haystack;
  }
  outer: for (var i = 0, j = 0; i < qlen; i++) {
    var nch = needle.charCodeAt(i);
    while (j < tlen) {
      if (haystack.charCodeAt(j++) === nch) {
        continue outer;
      }
    }
    return false;
  }
  return true;
}

var _$fuzzysearch_1 = fuzzysearch;

'use strict'

/* removed: var _$fuzzysearch_1 = require('fuzzysearch') */;

var _$FuzzySearchStrategy_5 = new FuzzySearchStrategy()

function FuzzySearchStrategy () {
  this.matches = function (string, crit) {
    return _$fuzzysearch_1(crit.toLowerCase(), string.toLowerCase())
  }
}

'use strict'

var _$LiteralSearchStrategy_6 = new LiteralSearchStrategy()

function LiteralSearchStrategy () {
  this.matches = function (str, crit) {
    if (!str) return false

    str = str.trim().toLowerCase()
    crit = crit.trim().toLowerCase()

    return crit.split(' ').filter(function (word) {
      return str.indexOf(word) >= 0
    }).length === crit.split(' ').length
  }
}

'use strict'

var _$Repository_4 = {
  put: put,
  clear: clear,
  search: search,
  setOptions: setOptions
}

/* removed: var _$FuzzySearchStrategy_5 = require('./SearchStrategies/FuzzySearchStrategy') */;
/* removed: var _$LiteralSearchStrategy_6 = require('./SearchStrategies/LiteralSearchStrategy') */;

function NoSort () {
  return 0
}

var data = []
var opt = {}

opt.fuzzy = false
opt.limit = 10
opt.searchStrategy = opt.fuzzy ? _$FuzzySearchStrategy_5 : _$LiteralSearchStrategy_6
opt.sort = NoSort

function put (data) {
  if (isObject(data)) {
    return addObject(data)
  }
  if (isArray(data)) {
    return addArray(data)
  }
  return undefined
}
function clear () {
  data.length = 0
  return data
}

function isObject (obj) {
  return Boolean(obj) && Object.prototype.toString.call(obj) === '[object Object]'
}

function isArray (obj) {
  return Boolean(obj) && Object.prototype.toString.call(obj) === '[object Array]'
}

function addObject (_data) {
  data.push(_data)
  return data
}

function addArray (_data) {
  var added = []
  clear()
  for (var i = 0, len = _data.length; i < len; i++) {
    if (isObject(_data[i])) {
      added.push(addObject(_data[i]))
    }
  }
  return added
}

function search (crit) {
  if (!crit) {
    return []
  }
  return findMatches(data, crit, opt.searchStrategy, opt).sort(opt.sort)
}

function setOptions (_opt) {
  opt = _opt || {}

  opt.fuzzy = _opt.fuzzy || false
  opt.limit = _opt.limit || 10
  opt.searchStrategy = _opt.fuzzy ? _$FuzzySearchStrategy_5 : _$LiteralSearchStrategy_6
  opt.sort = _opt.sort || NoSort
}

function findMatches (data, crit, strategy, opt) {
  var matches = []
  for (var i = 0; i < data.length && matches.length < opt.limit; i++) {
    var match = findMatchesInObject(data[i], crit, strategy, opt)
    if (match) {
      matches.push(match)
    }
  }
  return matches
}

function findMatchesInObject (obj, crit, strategy, opt) {
  for (var key in obj) {
    if (!isExcluded(obj[key], opt.exclude) && strategy.matches(obj[key], crit)) {
      return obj
    }
  }
}

function isExcluded (term, excludedTerms) {
  var excluded = false
  excludedTerms = excludedTerms || []
  for (var i = 0, len = excludedTerms.length; i < len; i++) {
    var excludedTerm = excludedTerms[i]
    if (!excluded && new RegExp(term).test(excludedTerm)) {
      excluded = true
    }
  }
  return excluded
}

'use strict'

var _$Templater_7 = {
  compile: compile,
  setOptions: __setOptions_7
}

var options = {}
options.pattern = /\{(.*?)\}/g
options.template = ''
options.middleware = function () {}

function __setOptions_7 (_options) {
  options.pattern = _options.pattern || options.pattern
  options.template = _options.template || options.template
  if (typeof _options.middleware === 'function') {
    options.middleware = _options.middleware
  }
}

function compile (data) {
  return options.template.replace(options.pattern, function (match, prop) {
    var value = options.middleware(prop, data[prop], options.template)
    if (typeof value !== 'undefined') {
      return value
    }
    return data[prop] || match
  })
}

'use strict'

var _$utils_9 = {
  merge: merge,
  isJSON: isJSON
}

function merge (defaultParams, mergeParams) {
  var mergedOptions = {}
  for (var option in defaultParams) {
    mergedOptions[option] = defaultParams[option]
    if (typeof mergeParams[option] !== 'undefined') {
      mergedOptions[option] = mergeParams[option]
    }
  }
  return mergedOptions
}

function isJSON (json) {
  try {
    if (json instanceof Object && JSON.parse(JSON.stringify(json))) {
      return true
    }
    return false
  } catch (err) {
    return false
  }
}

var _$src_8 = {};
(function (window) {
  'use strict'

  var options = {
    searchInput: null,
    resultsContainer: null,
    json: [],
    success: Function.prototype,
    searchResultTemplate: '<li><a href="{url}"><h2 class="vads-u-margin-y--0 vads-u-font-size--md vads-u-display--inline-block vads-u-text-decoration--underline vads-u-color--link-default">{title}</h2> <span class="vads-u-font-size--sm">in {section}</span><span class="site-search-results__url vads-u-color--green">http://design.va.gov{url}</span><div class="vads-u-font-size--base">{description}</div></a></li>',
    templateMiddleware: Function.prototype,
    sortMiddleware: function () {
      return 0
    },
    noResultsText: '<li class="vads-u-padding--2 vads-u-color--gray"><em>No results found</em></li>',
    limit: 10,
    fuzzy: false,
    exclude: []
  }

  var requiredOptions = ['searchInput', 'resultsContainer', 'json']

  /* removed: var _$Templater_7 = require('./Templater') */;
  /* removed: var _$Repository_4 = require('./Repository') */;
  /* removed: var _$JSONLoader_2 = require('./JSONLoader') */;
  var optionsValidator = _$OptionsValidator_3({
    required: requiredOptions
  })
  /* removed: var _$utils_9 = require('./utils') */;

  window.SimpleJekyllSearch = function (_options) {
    var errors = optionsValidator.validate(_options)
    if (errors.length > 0) {
      throwError('You must specify the following required options: ' + requiredOptions)
    }

    options = _$utils_9.merge(options, _options)

    _$Templater_7.setOptions({
      template: options.searchResultTemplate,
      middleware: options.templateMiddleware
    })

    _$Repository_4.setOptions({
      fuzzy: options.fuzzy,
      limit: options.limit,
      sort: options.sortMiddleware
    })

    if (_$utils_9.isJSON(options.json)) {
      initWithJSON(options.json)
    } else {
      initWithURL(options.json)
    }

    return {
      search: search
    }
  }

  function initWithJSON (json) {
    options.success(json)
    _$Repository_4.put(json)
    registerInput()
  }

  function initWithURL (url) {
    _$JSONLoader_2.load(url, function (err, json) {
      if (err) {
        throwError('failed to get JSON (' + url + ')')
      }
      initWithJSON(json)
    })
  }

  function emptyResultsContainer () {
    options.resultsContainer.innerHTML = ''
  }

  function appendToResultsContainer (text) {
    options.resultsContainer.innerHTML += text
  }

  function registerInput () {
    options.searchInput.addEventListener('keyup', function (e) {
      if (isWhitelistedKey(e.which)) {
        emptyResultsContainer()
        search(e.target.value)
      }
    })
  }

  function search (query) {
    if (isValidQuery(query)) {
      emptyResultsContainer()
      render(_$Repository_4.search(query), query)
    }
  }

  function render (results, query) {
    var len = results.length
    if (len === 0) {
      return appendToResultsContainer(options.noResultsText)
    }
    for (var i = 0; i < len; i++) {
      results[i].query = query
      appendToResultsContainer(_$Templater_7.compile(results[i]))
    }
  }

  function isValidQuery (query) {
    return query && query.length > 0
  }

  function isWhitelistedKey (key) {
    return [13, 16, 20, 37, 38, 39, 40, 91].indexOf(key) === -1
  }

  function throwError (message) {
    throw new Error('SimpleJekyllSearch --- ' + message)
  }
})(window)

}());


var anchor = document.querySelectorAll(".site-l-content-wrapper--styleguide > h2, .site-l-content-wrapper--styleguide > h3, .site-l-content-wrapper--styleguide > h4");
var has_anchor_class = "has-anchor";

for (var i = 0; i < anchor.length; i++) {
  var anchor_link = anchor[i].getAttribute('id');
  var el_str = '<a class="site-heading-anchor" href="#'+ anchor_link +'" aria-hidden="true"><i class="fas fa-link"></i></a>';
  var temp = document.createElement('div');
  temp.innerHTML = el_str;
  var htmlObject = temp.firstChild;
  if (anchor_link) {
    anchor[i].classList.add(has_anchor_class);
    anchor[i].appendChild(htmlObject);
  }
}


const showSnippetButton = document.getElementsByClassName('site-code-snippet__button');

if (showSnippetButton.length) {
  original_text = showSnippetButton[0].innerHTML;
}

for (var i = 0; i < showSnippetButton.length; i++) {
  showSnippetButton[i].addEventListener("click", function(e) {
    if (this.innerHTML == original_text) {
      this.innerHTML = '<span class="fas fa-minus vads-u-margin-right--0p5"></span> Hide HTML';
    }
    else {
      this.innerHTML = original_text;
    }
  });
}

var close_mobile_nav_button = document.getElementById("close_mobile_nav_button"),
    open_mobile_nav_button = document.getElementById("open-mobile-nav-button"),
    mobile_nav = document.getElementById("mobile-nav"),
    overlay = document.createElement("div");
    nav_open_class = "nav-is-open",
    visible_class = "is-visible",
    overlay_class = "site-overlay";


function removeElementsByClass(className){
  var elements = document.getElementsByClassName(className);
  while(elements.length > 0){
      elements[0].parentNode.removeChild(elements[0]);
  }
}

close_mobile_nav_button.addEventListener("click", function(e) {
  document.body.classList.remove(nav_open_class);
  mobile_nav.classList.remove(visible_class);
  open_mobile_nav_button.focus();
  removeElementsByClass(overlay_class);
});

open_mobile_nav_button.addEventListener("click", function(e) {
  document.body.classList.add(nav_open_class);
  mobile_nav.classList.add(visible_class);
  close_mobile_nav_button.focus();
  document.body.insertBefore(overlay, mobile_nav);
  overlay.classList.add(overlay_class);

  setTimeout(function(){
    overlay.classList.add(visible_class);
  }, 100);

})

  var $iframe =  document.getElementsByClassName("responsive-iframe");
  var $iframe_box = document.getElementsByClassName("iframe__preview");

  var resizeFrame = function(frame, box){
    var display_width = frame.getAttribute('data-width');
    var viewable_width = box.getBoundingClientRect().width;

    if ( viewable_width < display_width ) {
      var scale = viewable_width / display_width;
      frame.style.transform = "scale("+ viewable_width / display_width +")";
      frame.style.width = display_width + "px";
    }

    else {
      frame.removeAttribute('style');
      frame.style.width = display_width + "px";
    }
  }

  if ($iframe.length) {
    for (var i = 0; i < $iframe.length; i++){
      resizeFrame($iframe[i], $iframe_box[i]);
    }
  }

  var preview_button = document.getElementsByClassName("sg-responsive-preview__size-button");

  for (var i = 0; i < preview_button.length; i++){
    preview_button[i].onclick = function(e) {
        var new_size = this.getAttribute('data-size');
        var frame = this.parentNode.parentNode.querySelectorAll('.responsive-iframe');
        var box = this.parentNode.parentNode.querySelectorAll('.iframe__preview');
        var all_buttons = this.parentNode.querySelectorAll('.sg-responsive-preview__size-button');

        for (var i = 0; i < all_buttons.length; i++){
          all_buttons[i].classList.remove('is-current');
        }

        e.target.classList.add('is-current');

        frame[0].setAttribute('data-width', new_size);
        resizeFrame(frame[0], box[0]);
    };
  }

  window.onresize = function(event) {
    if ($iframe.length) {
      resizeFrame($iframe, $iframe_box);
    }
  };


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
  SimpleJekyllSearch({
    searchInput: desktop_search_input,
    resultsContainer: desktop_results_container,
    json: '/search.json'
  });
}

var searchOnMobile = function() {
  SimpleJekyllSearch({
    searchInput: mobile_search_input,
    resultsContainer: mobile_results_container,
    json: '/search.json'
  });
}

// Function for search results page
var searchOnResultsPage = function() {
  var searchTerm = getQueryVariable('query');
  var searchTermEncoded = htmlEncode(searchTerm);
  // Put the value of the query on the page
  if (typeof searchTerm != "undefined"){
    desktop_search_input.value = searchTermEncoded;
    mobile_search_input.value = searchTermEncoded;
    document.getElementById('query-term').innerText = searchTermEncoded;
  }
  SimpleJekyllSearch({
    searchInput: desktop_search_input,
    resultsContainer: results_page_container,
    json: '/search.json'
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
  setTimeout(function(){ searchFunctions(); }, 35);
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

/**
 * Sanitize and encode all HTML in a user-submitted string
 * https://portswigger.net/web-security/cross-site-scripting/preventing
 * @param  {String} str  The user-submitted string
 * @return {String} str  The sanitized string
 */
 function htmlEncode(str){
  return String(str).replace(/[^\w. ]/gi, function(c){
     return '&#'+c.charCodeAt(0)+';';
  });
}









