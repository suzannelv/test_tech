// fonction pour le menu de sidebar

function toggleArrow(openArrowId, closeArrowId, titleSelector) {
  const openArrow = document.getElementById(openArrowId);
  const closeArrow = document.getElementById(closeArrowId);
  const titleEl = document.querySelector(titleSelector);
  titleEl.classList.toggle("text-black");
  openArrow.classList.toggle("d-none");
  closeArrow.classList.toggle("d-none");
}






