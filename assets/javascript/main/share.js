function focusOnLink() {
  if (link !== undefined) {
    link.selectionStart = 0;
    link.selectionEnd = link.value.length;
  }
}

window.addEventListener(
  'load',
  function() {

    x$("body.mw_share").each(
      function(b) {
        window.link = x$('#mw_share_link')[0];
        
        x$(".freshbutton-blue").on("click", focusOnLink);
        x$(link).on(
            'touchend',
            function() {
              window.setTimeout(select, 100);
            }
        );
        
        setTimeout(focusOnLink,150);
      }
    );

  }
);