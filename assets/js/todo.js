//Strike-through on to-do with click
$("ul").on("click","li", function(){
    $(this).toggleClass("completed");
});

//Click X to delete to-do
$("ul").on("click",".delete", function(event){
    $(this).parent().slideUp(250,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//add new to-do on Enter
$("input").keypress(function(event){
    if(event.which === 13){
        var newToDo = $(this).val();
        $("ul").append("<li><span class='delete fa fa-trash'></span> " + newToDo + "</li>");
        $(this).val('');
    }
});

$(".fa-plus").click(function(){
   $("input").fadeToggle();
});