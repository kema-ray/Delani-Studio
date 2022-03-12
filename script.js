$(document).ready(function(){

let imagesTotalNumber = ($())
let overlayTotalNumber = ($(".overlay").toArray().length);
for (let overlayNumber = 1; overlayNumber<=overlayTotalNumber;overlayNumber++){
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