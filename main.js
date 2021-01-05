// A $( document ).ready() block.
$( document ).ready(function() {
    var DateTime = luxon.DateTime;

    var now = DateTime.local();
    var  date = now.toLocaleString(DateTime.DATETIME_MED)
    console.log(date);
    $("#currentDay").text(date)
      
    function timeupdate(){
     $(".time-block").each(function() {
        
     })   
    }

});  