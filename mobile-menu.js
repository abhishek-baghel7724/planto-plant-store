const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

if (menuToggle && siteNav) {
  const dropdown = siteNav.querySelector(".dropdown");
  const dropdownLink = dropdown?.querySelector(":scope > a");

  function closeMenu() {
    menuToggle.setAttribute("aria-expanded", "false");
    siteNav.classList.remove("open");
    dropdown?.classList.remove("submenu-open");
    dropdownLink?.setAttribute("aria-expanded", "false");
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    siteNav.classList.toggle("open", !isOpen);

    if (isOpen) {
      dropdown?.classList.remove("submenu-open");
      dropdownLink?.setAttribute("aria-expanded", "false");
    }
  });

  dropdownLink?.addEventListener("click", (event) => {
    if (window.matchMedia("(max-width: 800px)").matches) {
      event.preventDefault();
      const isOpen = dropdown.classList.toggle("submenu-open");
      dropdownLink.setAttribute("aria-expanded", String(isOpen));
    }
  });

  siteNav.addEventListener("click", (event) => {
    const clickedLink = event.target.closest("a");

    if (clickedLink && !clickedLink.matches(".dropdown > a")) {
      closeMenu();
    }
  });
}