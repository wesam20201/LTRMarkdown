$(document).ready(function () {
  var $textarea = $('#textbox textarea');
  var $output = $('#output');

  // Render markdown content initially and on input
  function renderMarkdown() {
    var markdownText = $textarea.val();
    var html = marked.parse(markdownText);
    $output.html(html);
  }

  // Initial render
  renderMarkdown();

  // On input update the preview
  $textarea.on('input', function () {
    renderMarkdown();
  });

  // Auto grow textarea height
  $textarea.autogrow();
});
