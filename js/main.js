console.log("JS chargé");
console.log("clic bouton");

const themeToggle = document.getElementById("themeToggle");
const topBtn = document.getElementById("topBtn");
if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
}
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (navbar && window.scrollY > 50) {
        navbar.classList.add("navbar-scroll");
    } else if (navbar) {
        navbar.classList.remove("navbar-scroll");
    }
});

if (topBtn) {

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    });

    topBtn.addEventListener("click", function () {
        console.log("clic bouton");
        window.scrollTo(0, 0);
    });

}
const counters = document.querySelectorAll(".counter");
console.log(counters);
counters.forEach(counter => {
    const target = parseInt(counter.dataset.target);
    let count = 0;

    const interval = setInterval(() => {
        count++;

        counter.innerText = count;

        if (count >= target) {
            clearInterval(interval);
        }
    }, 20);
});
if(entry.isIntersecting){
    console.log("Fade détecté");
    entry.target.classList.add("show");
}
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            console.log("Fade détecté :", entry.target);
            entry.target.classList.add("show");
        }
    });
});