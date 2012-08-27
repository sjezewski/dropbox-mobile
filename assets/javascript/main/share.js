function focusOnLink() {
	var link = x$('#modal-box #mw_share_link')[0];
  if (link !== undefined) {
    link.selectionStart = 0;
    link.selectionEnd = link.value.length;
  }
}

function linkPrompt() {
	var root = x$("#shmodal-title");
	var link = x$('#mw_link_prompt_container')[0];
	var title = root.find("#shmodal-title-text");
	title.before(link.innerHTML);

  x$(link).on(
      'touchend',
      function() {
        window.setTimeout(focusOnLink, 100);
      }
  );

	focusOnLink();
}

window.addEventListener(
  'load',
  function() {

    x$("body.mw_file_preview").each(
      function(b) {
        
				window.addEventListener(
					'DOMNodeInserted',
					function(e) {						
						if(e.target.id == "shmodal-title") {
						  setTimeout(linkPrompt,150);
						}						
					}
				);
        setTimeout(linkPrompt,150);

      }
    );

  }
);