function focusOnLink() {
	var link = x$('#modal-box #mw_share_link')[0];
  if (link !== undefined) {
    link.selectionStart = 0;
    link.selectionEnd = link.value.length;
  }
}

function linkPrompt(root) {
	var link = x$('#mw_link_prompt_container')[0];
	var title = x$(root).find("#shmodal-title-text");
	title.before(link.innerHTML);

  x$(link).on(
      'touchend',
      function() {
        window.setTimeout(focusOnLink, 100);
      }
  );
}

window.addEventListener(
  'load',
  function() {

    x$("body.mw_file_preview").each(
      function(b) {
        
        x$(".freshbutton-blue").on("click", focusOnLink);
				window.addEventListener(
					'DOMNodeInserted',
					function(e) {						
						if(e.target.id == "shmodal-title") {
							linkPrompt(e.target);
						}						
					}
				);
        setTimeout(focusOnLink,150);

      }
    );

  }
);