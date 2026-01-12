document.addEventListener("DOMContentLoaded", () => {
    
    const intro = document.getElementById("intro");
    if (intro) {
        intro.addEventListener("click", () => {
            intro.style.display = "none";
        });
    }

    const works = document.querySelectorAll(".work");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const closeBtn = document.getElementById("closeBtn");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let images = [];
    let current = 0;

    if (works.length > 0 && lightbox) {
        works.forEach(work => {
            work.addEventListener("click", () => {
                images = work.dataset.images.split(",");
                current = 0;
                updateLightboxImage();
                lightbox.classList.remove("hidden");
            });
        });

        nextBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            current = (current + 1) % images.length;
            updateLightboxImage();
        });

        prevBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            current = (current - 1 + images.length) % images.length;
            updateLightboxImage();
        });

        closeBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            lightbox.classList.add("hidden");
        });

        lightbox.addEventListener("click", () => {
            lightbox.classList.add("hidden");
        });
    }

    function updateLightboxImage() {
        if (images.length > 0) {
            lightboxImg.src = "images/" + images[current].trim();
        }
    }
});


