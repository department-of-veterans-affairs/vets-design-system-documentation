var anchor = document.querySelectorAll(".site-l-content-wrapper--styleguide > h2, .site-l-content-wrapper--styleguide > h3, .site-l-content-wrapper--styleguide > h4");
var has_anchor_class = "has-anchor";

for (var i = 0; i < anchor.length; i++) {
  var anchor_link = anchor[i].getAttribute('id');
  var el_str = '<a class="site-c-heading-anchor" href="#'+ anchor_link +'" aria-hidden="true"><i class="fas fa-link"></i></a>';
  var temp = document.createElement('div');
  temp.innerHTML = el_str;
  var htmlObject = temp.firstChild;
  if (anchor_link) {
    anchor[i].classList.add(has_anchor_class);
    anchor[i].appendChild(htmlObject);
  }
}

