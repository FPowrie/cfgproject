$(document).ready(function() {
  $("#datepicker").datepicker();
});



$(document).ready(function(){
    $("#button1").click(function(){
        $("#replacement").toggle();
        $("#form1").toggle();
        $(".explanation").toggle();
    });
});

$(document).ready(function(){
    $("#offerride").click(function(){
        $("#liftq").show();
    });
});

$(document).ready(function(){
    $("#needride").click(function(){
        $("#liftq").hide();
    });
});
