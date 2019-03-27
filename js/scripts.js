//Back End stuff
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
$(window).onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Front End stuff
$(document).ready(function() {
  $("form#formOne").submit(function(event) {

    var yourNameInput = $("input#yourName").val();
    var reasonInput = $("input#reason").val();
    var dateInput = $("input#date").val();
    var timeInput = $("input#time").val();

    $(".yourName").text(yourNameInput);
    $(".reason").text(reasonInput);
    $(".date").text(dateInput);
    $(".time").text(timeInput);



    // $('#myModal').on('shown.bs.modal'), function() {
    // $('#myInput').trigger('focus');


    });
    event.preventDefault();
  });
});
