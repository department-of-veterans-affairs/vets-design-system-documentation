
var close_mobile_nav_button = document.getElementById("close_mobile_nav_button"),
    open_mobile_nav_button = document.getElementById("open-mobile-nav-button"),
    mobile_nav = document.getElementById("mobile-nav"),
    visible_class = "is-visible";

close_mobile_nav_button.addEventListener("click", function(e) {
  mobile_nav.classList.remove(visible_class);
  open_mobile_nav_button.focus()
});

open_mobile_nav_button.addEventListener("click", function(e) {
  mobile_nav.classList.add(visible_class);
  close_mobile_nav_button.focus();
})