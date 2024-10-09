// Loading the DOM
$(document).ready(function () {
  let questArt = $("#popUp-Art");

  // When the button clicked, show modal
  questArt.click(function (e) {
    viewDialog();
  });


  // When the menu button is clicked, open options
  const menuHeader = $(".nav-menu");
  menuHeader.click(function (e) {
    viewMenu();
  });
});



function createDialog() {
  return `
  <dialog id="dialogPopUp">
    <img class="close-popUp" id="close-popUp" src="https://img.icons8.com/ios/30/delete-sign--v1.png" alt="delete-sign--v1"/>
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
  return `<div id="overlay"></div>`;
}

function viewDialog() {
  // Selected the tag span (empty)
  const dialogSpan = $("#infoArt-pop-up");
  
  dialogSpan.append(createOverlay()).append(createDialog());

  // Display the popup
  const dialogPopUp = $("#dialogPopUp");
  const overlay = $("#overlay");

  const closePopUp = $("#close-popUp");

  dialogPopUp.fadeIn();
  overlay.fadeIn();

  // closes the pop up when clicking on the overlay
  overlay.click(function () {
    dialogPopUp.fadeOut(function () {
      dialogPopUp.remove();
    });
    overlay.fadeOut(function () {
      overlay.remove();
    });
  });

  closePopUp.click(function() {
    dialogPopUp.fadeOut(function () {
      dialogPopUp.remove();
    });
    overlay.fadeOut(function () {
      overlay.remove();
    });
  })
}

// Create menu in header
function createMenu() {
  return `
  <nav id="menu-list">
    <ul class="menu-row">
      <li class="item-menu-burguer">
        <a href="https://tinyurl.com/2m6uh3dt" target="_blank">
          <img class="icon-picture-menu"
           src="https://tinyurl.com/ynnz2en4" alt="linkedin" />
        </a>
      </li>

      <li class="item-menu-burguer">
        <a href="https://tinyurl.com/k3jjaeey" target="_blank">
          <img class="icon-picture-menu"
           src="https://tinyurl.com/4sbvb8wn" alt="instagram" />
        </a>
      </li>
 
      <li class="item-menu-burguer">
        <a href="https://tinyurl.com/3xwb8phu" target="_blank">
          <img class="icon-picture-menu"
           src="https://img.icons8.com/ios-filled/50/whatsapp--v1.png" alt="whatsapp--v1"/>
        </a>
      </li>
    </ul>
  </nav> `;
}

function viewMenu() {
  const menuContainer = $("#menu-container");
  const menuItems = $("#menu-list")
  const overlay = $("#overlay");

  // If the menu already exists, remove it (close it)
  if (menuItems.length > 0) {
    menuItems.hide("fold", {horizFirst: false}, 1000, function () {
      $(this).remove();
      $("#overlay").remove();
      console.log(menuItems.length)
    });
  } else {

    // Add the menu if it is not present
    menuContainer.append(createMenu(),createOverlay());
    menuItems.show("fold", 1000)
    
  }
}





