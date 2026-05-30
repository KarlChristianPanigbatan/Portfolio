document.addEventListener("DOMContentLoaded", function () {


 /*==================HAMBURGER=============*/ 
const toggle = document.getElementById("mobile-menu");
const menu = document.querySelector(".nav-menu");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

/* ================= EMAILJS ================= */
emailjs.init("xcNQ5c9Sulk8rAWYs");

const form = document.getElementById("contact-form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            emailjs.sendForm(
                "service_2sjbu15",
                "template_o415qrd",
                this
            )
            .then(() => {
                alert("Message sent successfully!");
                this.reset();
            })
            .catch((error) => {
                alert("Failed to send message.");
                console.log(error);
            });
        });
    }

    /* ================= LIGHTBOX ================= */
const images = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox-close");

    if (images.length && lightbox && lightboxImg && closeBtn) {

        images.forEach(img => {
            img.addEventListener("click", () => {
                lightbox.style.display = "flex";
                lightboxImg.src = img.dataset.image;
            });
        });

        closeBtn.addEventListener("click", () => {
            lightbox.style.display = "none";
        });

        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) {
                lightbox.style.display = "none";
            }
        });
    }

});