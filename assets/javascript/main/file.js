function showMenu(elem) {
  var mask = x$("#context-mask");
  mask.addClass('visible');
  mask.setStyle('height', document.body.offsetHeight + 'px');  
  var evt = document.createEvent('MouseEvents');
  evt.initMouseEvent('contextmenu',true,false,window,1,10,10,10,10,false,false,false,false,2,elem);
  elem.dispatchEvent(evt);
}

function addMenuButton(file) {
  var button = document.createElement("div");
  x$(button).attr("class", "mw-menu-button");
  file.appendChild(button);
  button.on(
    'click',
    function(e){  
      setTimeout(function(){showMenu(file)}, 1);
    }
  );      
}

window.addEventListener(
  'DOMNodeInserted',
  function(e) {
    var elem = x$(e.target);
    if (elem.hasClass('browse-file') ) {
      addMenuButton(elem[0]);
    }    
    if (elem[0] !== undefined) {
	    if (elem[0].id == "context-menu") {
        elem.on('click', hideMask);
      }
		  if (elem.hasClass("wit_group")) {
				window.scrollTo(0,1);
			}
    }

  }
);

function hideMask() {
  x$("#context-mask").removeClass("visible");  
}

window.addEventListener(
  'DOMContentLoaded',
  function(e) {
    x$("#context-mask").on('click',hideMask);
  }
);