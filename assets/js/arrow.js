
function toggleArrow() {
  const openArrow = document.getElementById("arrow-open");
  const closeArrow = document.getElementById("arrow-close");
  const titleEl = document.querySelector(".toggle-title")
  titleEl.classList.toggle("text-black")
  openArrow.classList.toggle("d-none");
  closeArrow.classList.toggle("d-none");
}





