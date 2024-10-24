
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

