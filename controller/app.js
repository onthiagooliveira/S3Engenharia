// Show a element that is hidden with in CSS when one button is clicked.
let showModal = $("#modal-art");
let closeModal = $(".close-icon");
let favDialog = $("#favDialog");
let cardQuestion = $("#home-cards-info-art");

// Quando o botão de mostrar é clicado
showModal.on("click", function () {
  favDialog.slideToggle('fast'); // Mostra o favDialog
  console.log(`A caixa de pergunta está inativa`);
});

