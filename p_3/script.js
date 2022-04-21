var itemDel = $('.del'),
    trash = $('.trash'),
    self = '';

itemDel.on('dragstart', function(e){
  e.originalEvent.dataTransfer.effectAllowed = 'copy';
  e.originalEvent.dataTransfer.dropEffect = 'copy';
  e.originalEvent.dataTransfer.setData(null, null);  // Hack
  trash.addClass('active');
  $(this).addClass('dragged');
  self = $(this);
  self.addClass('deletavel');
});

itemDel.on('dragend', function(e){
   trash.removeClass('active');
  self.remove();
  
  
});
    
trash.on('dragover', function(e){
    trash.addClass('opened');
  
});

trash.on('dragleave', function(e){
    trash.removeClass('opened');
});

trash.on('drop', function(e){
    trash.removeClass('active');
});




$(document).ready(function(){
    $("p").hide();
    $("#show").click(function(){
      $("p").show();
    });
  });