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
    var file = x$(e.target);
    if (file.hasClass('browse-file') ) {
      addMenuButton(file[0]);
    }    
  }
);

window.addEventListener(
  'DOMContentLoaded',
  function(e) {
    x$("#context-mask").on(
      'click',
      function(e) {
        x$(e.target).removeClass("visible");
      } 
    );
  }
);