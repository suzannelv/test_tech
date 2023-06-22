// fonction pour le menu de sidebar

function toggleArrow(open, close, title) {
  const openArrow = document.getElementById(open);
  const closeArrow = document.getElementById(close);
  const titleEl = document.querySelector(title);
  titleEl.classList.toggle("text-black");
  openArrow.classList.toggle("d-none");
  closeArrow.classList.toggle("d-none");

}






