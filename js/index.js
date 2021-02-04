const getById = (elementId) => document.getElementById(elementId);

const openMenu = () => {};

const closeMenu = () => {};

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.create({
    start: "top -80",
    end: 99999,
    toggleClass: { className: "scrolled", targets: "#app-header" },
  });

  getById("hamburger-icon-container").addEventListener("click", (ev) => {
    const menu = getById("mobile-menu-container");
    menu.style.left = "0";
  });

  getById("close-icon-container").addEventListener("click", (ev) => {
    const menu = getById("mobile-menu-container");
    menu.style.left = "100vw";
  });
});
