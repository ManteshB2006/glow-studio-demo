"use strict";

const menuToggle = document.getElementById("menu-toggle");
const navigation = document.getElementById("navigation");

// Mobile navigation
if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      navigation.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 650) {
      navigation.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    }
  });
}

// Footer year
const yearElement = document.getElementById("current-year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// WhatsApp button — intentionally disabled until the real business number is added.
// Replace the empty string with the approved number, including country code and digits only.
const businessPhone = "";
const whatsappButton = document.getElementById("whatsapp-button");

if (whatsappButton) {
  whatsappButton.addEventListener("click", (event) => {
    event.preventDefault();

    if (!businessPhone) {
      alert("This is a demo website. Add the business owner's approved WhatsApp number in script.js before enabling this button.");
      return;
    }

    const message = "Hello Glow Studio! I'd like to know more about your services.";
    const whatsappURL = `https://wa.me/${businessPhone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  });
}

console.log("Glow Studio demo website loaded.");
