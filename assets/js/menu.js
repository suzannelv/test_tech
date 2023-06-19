function generateSidebarContent() {
  return `
    <a href="#"><h3 class="mb-4">Accueil</h3></a>
    <a href="#"><h3 class="mb-4">Mes ordonnances</h3></a>

    <ul class="nav flex-column">
      <li class="d-flex flex-column align-items-start sideBar-item mb-4">
        <div class="d-flex flex-row align-items-center">
          <img src="assets/img/icons/patients.svg" alt="icon connexion">
          <a href="#" class="mx-2"><h3 class="toggle-title me-1">Mes patients</h3></a>

          <a class="btn d-inline-flex align-items-center collapsed"
            href="#"    
            data-bs-toggle="collapse" 
            data-bs-target="#list-collapse" 
            aria-expanded="true" 
            onclick="toggleArrow()">
            <img src="assets/img/icons/arrow-bas.svg" alt="flèche bas" id="arrow-open" class="ps-3">
            <img src="assets/img/icons/arrow-top.svg" alt="flèche top" id="arrow-close" class="d-none ps-3">
          </a>
        </div>

        <div class="collapse" id="list-collapse">
          <ul class="toggle-list text-white py-1">
            <li><a href="#">Tous les patients</a></li>
            <li><a href="#">Patients en attente</a></li>
            <li><a href="#">Patients archivés</a></li>
          </ul>
        </div>
      </li>

      <li class="sideBar-item mb-4">
        <a href="#"><h3>Mes pharmacies</h3></a>
      </li>

      <li class="sideBar-item d-flex flex-row mb-4">
        <a href="#"><h3>Mes documents</h3></a>
        <div>
          <img src="assets/img/icons/arrow-bas.svg" alt="icon flèche" class="mt-2 ms-3 ps-3">
        </div>
      </li>

      <li class="sideBar-item mb-4">
        <a href="#"><h3>Mes Pilbeez</h3></a>
      </li>

      <li class="sideBar-item">
        <a href="#"><h3>Parrainer un cabinet</h3></a>
      </li>
    </ul>

    <div class="tabbar-contact contact">
      <div class="mx-4">
        <img src="assets/img/icons/contact-tel.svg" alt="contact par téléphone">
      </div>
      <div>
        <img src="assets/img/icons/contact-mail.svg" alt="contact par email">
      </div>
    </div>
  `;
}

// insérer le contenu de sidebar dans deux endroits différents
const sideBarMenu = document.querySelector(".sideBar");
sideBarMenu.innerHTML = generateSidebarContent();

const tabbarMenu = document.querySelector(".offcanvas-body");
tabbarMenu.innerHTML = generateSidebarContent();
