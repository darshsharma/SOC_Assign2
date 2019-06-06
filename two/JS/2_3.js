$(document).ready(function(){
    $("#btn1").click(function() {
      var value = $("#myInput").val().toLowerCase();
         $("#myTable tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
   });
});
