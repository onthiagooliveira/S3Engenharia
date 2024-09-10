// Show a element that is hidden with in CSS when one button is clicked.
let openModal = $("#modal-art");
let favDialog = $('#favDialog');
let hiddenArtInforation = $('#home-cards-info-art');

openModal.on("click", function (event) {
  favDialog.show();
  hiddenArtInforation.hide()
  
});
