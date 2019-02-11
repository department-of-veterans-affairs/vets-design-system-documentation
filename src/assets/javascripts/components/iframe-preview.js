
  var $iframe =  document.getElementsByClassName("responsive-iframe");
  var $iframe_box = document.getElementsByClassName("iframe__preview");

  var resizeFrame = function(frame, box){
    var display_width = frame[0].getAttribute('data-width');
    var viewable_width = box[0].getBoundingClientRect().width;

    if ( viewable_width < display_width ) {
      var scale = viewable_width / display_width;
      frame[0].style.transform = "scale("+ viewable_width / display_width +")";
      frame[0].style.width = display_width + "px";
    }

    else {
      frame[0].removeAttribute('style');
      frame[0].style.width = display_width + "px";
    }
  }

  if ($iframe.length) {
    resizeFrame($iframe, $iframe_box);
  }

  var preview_button = document.getElementsByClassName("sg-responsive-preview__size-button");

  for (var i = 0; i < preview_button.length; i++){
    preview_button[i].onclick = function(e) {
        var new_size = e.target.getAttribute('data-size');
        var frame = e.target.parentNode.parentNode.querySelectorAll('.responsive-iframe');
        var box = e.target.parentNode.parentNode.querySelectorAll('.iframe__preview');
        var all_buttons = e.target.parentNode.querySelectorAll('.sg-responsive-preview__size-button');

        for (var i = 0; i < all_buttons.length; i++){
          all_buttons[i].classList.remove('is-current');
        }

        e.target.classList.add('is-current');

        frame[0].setAttribute('data-width', new_size);
        resizeFrame(frame, box);
    };
  }

  window.onresize = function(event) {
    if ($iframe.length) {
      resizeFrame($iframe, $iframe_box);
    }
  };

