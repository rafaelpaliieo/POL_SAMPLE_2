function openSidebar() {
  const sideBar = document.querySelector(".side-bar");
  // sideBar.setAttribute("style", "display: block");

  sideBar.classList.add("sidebar-open");
}

function closeSidebar() {
  const sideBar = document.querySelector(".side-bar");
  sideBar.classList.remove("sidebar-open");
}
