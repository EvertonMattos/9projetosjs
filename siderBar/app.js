const toogleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toogleBtn.addEventListener("click", () => {
  if (sidebar.classList.contains("show-sidebar")) {
    sidebar.classList.remove("show-sidebar");
  } else {
    sidebar.classList.add("show-sidebar");
  }
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});
