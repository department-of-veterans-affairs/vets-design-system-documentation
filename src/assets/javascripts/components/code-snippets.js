const showSnippetButton = document.getElementsByClassName('site-code-snippet__button');

if (showSnippetButton.length) {
  original_text = showSnippetButton[0].innerHTML;
}

for (var i = 0; i < showSnippetButton.length; i++) {
  showSnippetButton[i].addEventListener("click", function(e) {
    if (this.innerHTML == original_text) {
      this.innerHTML = "Hide HTML";
    }
    else {
      this.innerHTML = original_text;
    }
  });
}