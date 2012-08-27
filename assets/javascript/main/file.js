// Add listeners to trigger action menu

function showMenu(elem) {
  var mask = x$("#context-mask");
  mask.addClass("visible");
  
  var evt = document.createEvent('MouseEvents');
  evt.initMouseEvent('contextmenu',true,false,window,1,10,10,10,10,false,false,false,false,2,elem);
  elem.dispatchEvent(evt);
}

window.addEventListener(
  'DOMNodeInserted',
  function(e) {

    var file = x$(e.target);
    if (file.hasClass('browse-file') ) {
      file.on('click',function(e){showMenu(e.target);});    
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