window.getBreakpointData = function() {
  return JSON.parse(window.getComputedStyle(document.documentElement, ':before').content.replace(/^['"]|\\|['"]$/g, ''));
};