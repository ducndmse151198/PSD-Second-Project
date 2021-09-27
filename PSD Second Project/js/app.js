const openBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

if (openBtn) {
  openBtn.addEventListener("click", () => {
    document.querySelector(".menu-list").classList.add("show");
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      document.querySelector(".menu-list").classList.remove("show");
    });
  }
}
