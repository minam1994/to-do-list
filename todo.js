// jQuery


$("ul.todo").on("click", "span", function(event){
    $(this).parent().fadeOut(1000, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var newTodo = $(this).val();
        $(this).val("");
        $("ul.todo").append("<li><span><i class='far fa-times-circle'></i></span> "+newTodo+"</li>");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});

// jQuery UI

$(".todo").sortable({ connectWith: ".done"});
$(".done").sortable();

var d = new Date(); 

var month = d.getUTCMonth() + 1;
var day = d.getUTCDate();
var year = d.getUTCFullYear();
var newDate = day + "." + month + "." + year + ".";

$(".date").text(newDate);

