const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => panel.addEventListener("click", togglePanelClass));

function togglePanelClass(e) {
  e.currentTarget.classList.toggle("panel-active");
}
