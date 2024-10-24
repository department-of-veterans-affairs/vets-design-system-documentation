const sideNav = document.querySelector('.site-content__nav');

var navHeight = function () {
  sideNav.style.height = (window.innerHeight - 60).toString() + "px";
};

navHeight();

window.onresize = function(event) {
  navHeight();
};
