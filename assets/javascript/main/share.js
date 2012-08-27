var mw_title = "shmodal-title";

function linkPrompt() {
	var root = x$("#" + mw_title);
	var link = x$('#mw_link_prompt_container')[0];
	var title = root.find("#shmodal-title-text");
	title.before(link.innerHTML);
}

window.addEventListener(
  'load',
  function() {

    x$("body.mw_file_preview").each(
      function(b) {
        
		window.addEventListener(
			'DOMNodeInserted',
			function(e) {						
				if(e.target.id == mw_title) {
				  setTimeout(linkPrompt,1);							
				}						
			}
		);
	    linkPrompt();

      }
    );

  }
);