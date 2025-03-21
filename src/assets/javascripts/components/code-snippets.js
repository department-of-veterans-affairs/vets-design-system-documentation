const showSnippetButton = document.getElementsByClassName('site-code-snippet__button');

if (showSnippetButton.length) {
  original_text = showSnippetButton[0].innerHTML;
}

for (var i = 0; i < showSnippetButton.length; i++) {
  showSnippetButton[i].addEventListener("click", function (e) {
    if (this.innerHTML == original_text) {
      this.innerHTML = '<span class="fas fa-minus vads-u-margin-right--0p5"></span> Hide HTML';
    }
    else {
      this.innerHTML = original_text;
    }
  });
}

// allow markdown code blocks ``` to be copied to clipboard via va-button
document.addEventListener('DOMContentLoaded', function () {
  const codeBlocks = document.querySelectorAll('pre.highlight');

  codeBlocks.forEach(function (codeBlock) {
    // Create container for proper button positioning
    const container = document.createElement('div');
    container.className = 'highlight-container';

    // Create wrapper div copy button
    const copyButtonWrapper = document.createElement('div');

    // Create VA button
    const copyButton = document.createElement('va-button');
    copyButton.setAttribute('secondary', '');
    copyButton.setAttribute('text', 'Copy');
    copyButton.className = 'copy-button';

    copyButtonWrapper.appendChild(copyButton);

    // Wrap code block
    codeBlock.parentNode.insertBefore(container, codeBlock);
    container.appendChild(codeBlock);
    container.appendChild(copyButtonWrapper);

    // Add click handler
    copyButton.addEventListener('click', async function () {
      try {
        const code = codeBlock.textContent;
        await navigator.clipboard.writeText(code);

        // Show success state
        copyButton.setAttribute('text', 'Copied!');
        setTimeout(() => {
          copyButton.setAttribute('text', 'Copy');
        }, 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
        copyButton.setAttribute('text', 'Error');
      }
    });
  });
});