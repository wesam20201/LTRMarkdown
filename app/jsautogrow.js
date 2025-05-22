(function ($) {
  $.fn.autogrow = function () {
    this.each(function () {
      var $this = $(this);
      var minHeight = $this.height(); // save the initial height

      function resize() {
        $this.height(minHeight); // never go below initial height
        if (this.scrollHeight > minHeight) {
          $this.height(this.scrollHeight);
        }
      }

      $this.on('input', resize);
      resize.call(this);
    });
    return this;
  };
})(jQuery);
