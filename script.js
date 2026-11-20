
/* =====================================
   TIMECRAFT - JAVASCRIPT
===================================== */


/* 1. 3D SAAT HAREKETİ */

const watchScene = document.getElementById("watchScene");
const watchObject = document.getElementById("watchObject");

if (watchScene && watchObject) {

    watchScene.addEventListener("pointermove", function(event) {

        if (event.pointerType === "touch") return;

        const rect = watchScene.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = ((x - centerX) / centerX) * 15;
        const rotateX = ((centerY - y) / centerY) * 15;

        watchObject.style.transform =
            `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });

    watchScene.addEventListener("pointerleave", function() {

        watchObject.style.transform =
            "rotateX(0deg) rotateY(0deg)";

    });

}


/* 2. SCROLL ANİMASYONU */

const revealElements = document.querySelectorAll(
    ".story, .watch-design, .exploded, .mechanism, .collection"
);

const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});

revealElements.forEach(function(element) {

    element.classList.add("reveal");

    observer.observe(element);

});


/* 3. GÖRSEL YÜKLENME KONTROLÜ */

document.querySelectorAll("img").forEach(function(image) {

    image.addEventListener("error", function() {

        console.error("Görsel yüklenemedi: " + image.src);

    });

});


/* 4. SAYFA YÜKLENDİ */

window.addEventListener("load", function() {

    console.log("TIMECRAFT başarıyla yüklendi!");

    if (watchScene && watchObject) {
        console.log("3D saat sistemi aktif!");
    }

});
