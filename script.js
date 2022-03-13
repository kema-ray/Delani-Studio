$(document).ready(function(){

    $( "#design" ).click(function() {
        $( "#design" ).slideDown('1500').hide('1000');
        $("#design").show('1500');
        $( ".information" ).toggle();
      });

      $( "#development" ).click(function() {
        $( "#development" ).slideDown('1500').hide('1000');
        $("#development").show('1500');
        $( ".information1" ).toggle();
      });

      $( "#product" ).click(function() {
        $( "#product" ).slideDown('1500').hide('1000');
        $("#product").show('1500');
        $( ".information2" ).toggle();
      });



let overlayTotalNumber = ($(".overlay").toArray().length);
for (let overlayNumber = 1; overlayNumber <= overlayTotalNumber;overlayNumber++){
    $(`#overlay${overlayNumber}`).mouseover(function() {
        $(`#overlay${overlayNumber}>img`).addClass("overlay-effect");
        $(`#work-overlay${overlayNumber}`).toggle();
    })
    .mouseout(function(){
        $(`#overlay${overlayNumber}>img`).removeClass("overlay-effect");
        $(`#work-overlay${overlayNumber}`).toggle();
    });
}
});