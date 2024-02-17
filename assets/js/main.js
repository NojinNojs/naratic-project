const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector(".nav-list");

menuToggle.addEventListener("click", function () {
  this.classList.toggle("active");
  const icon = this.querySelector("i");

  if (this.classList.contains("active")) {
    icon.classList.remove("fi-br-menu-burger"); // Hamburger class
    icon.classList.add("fi-br-cross"); // X class
  } else {
    icon.classList.remove("fi-br-cross");
    icon.classList.add("fi-br-menu-burger");
  }
});

const sidebar = document.getElementById("sidebar");
const sidebarOpenButton = document.getElementById("sidebar-menu-toggle");
const sidebarCloseButton = document.getElementById("sidebar-close-menu-toggle");

sidebarOpenButton.addEventListener("click", () => {
  sidebar.classList.add("active");
});

sidebarCloseButton.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

const title = document.querySelector(".about-content");
title.classList.add("fade-in");

setTimeout(() => {
  title.classList.remove("fade-in");
}, 1000); // Durasi animasi 1 detik

// Animasi bounce
title.classList.add("bounce");

setTimeout(() => {
  title.classList.remove("bounce");
}, 2000); // Durasi animasi 2 detik