// Selected the tag span (empty)
const dialogSpan = $("#infoArt-pop-up");

// Loading the DOM
$(document).ready(function () {
  let questArt = $('#popUp-Art');

  // When the button clicked, show modal
  questArt.click(function(e) {
    viewDialog(); 
  })
});

function createDialog() {
  return `
  <dialog id="dialogPopUp">
    <p class="text-card-span small-font">
        O laudo ART <span class="yellow-font-span">( Anotação de Responsabilidade Técnica)</span> é um 
        documento emitido por um engenheiro habilitado, que formaliza a responsabilidade técnica sobre um 
        projeto, obra ou serviço específico.
      </p>

      <p class="text-card-span">
        Esse documento é obrigatório para atividades que envolvem engenharia, arquitetura,
        e agronomia no Brasil, sendo regulamentado pelo Conselho Regional de Engenharia e Agronomia (CREA).
      </p>

      <br>

      <p class="text-card-span">
        <span class="yellow-font-span">Utilização do Laudo ART: </span>
        <ul class="art-list">
          <li class="text-card-span"><span class="title-services-span">Obras civis: </span>
          construções, reformas e demolições </li>
          <li class="text-card-span"><span class="title-services-span">Projetos de engenharia e arquitetura:</span>
          Estruturais, elétricos e hidráulicos</li>
          <li class="text-card-span"><span class="title-services-span">Laudos técnicos: </span>
          Avaliações de edificações e patologias estruturais</li>
          <li class="text-card-span"><span class="title-services-span">Manutenções e serviços especializados:</span>
          Instalação de equipamentos e gestão de obras</li>
        </ul>
      </p>

  </dialog>`;
}

function createOverlay() {
  return `<div id="overlay"></div>`
}

function viewDialog() {
  dialogSpan.append(createOverlay()).append(createDialog());

  // Display the popup
  const dialogPopUp = $("#dialogPopUp");
  const overlay = $("#overlay");

  dialogPopUp.fadeIn();
  overlay.fadeIn();

  // closes the pop up when clicking on the overlay
  overlay.click(function () {
    dialogPopUp.fadeOut(function() {
      dialogPopUp.remove();
    });
    overlay.fadeOut(function() {
      overlay.remove();
    })
  })
}
