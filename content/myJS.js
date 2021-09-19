$(document).ready(function(){
  $("li").mouseover(function(){
		$(this).css('background-color','#FFFFCC');
		$(this).css('color','#8F4E8F');
		$(this).css( 'cursor', 'pointer' );
  });
  $("li").mouseout(function(){
		$(this).css('background-color','#8F4E8F');
		$(this).css('color','#FFFFCC');
  });
  $("li").click(function(){
    var mySelection = $(this).text().replace(/ /g,'') + '.htm';
    $('#content').load('content/' + mySelection);
  });
});
