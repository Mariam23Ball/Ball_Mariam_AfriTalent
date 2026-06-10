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
const fadeElements = document.querySelectorAll(".fade-in");



const filterButtons = document.querySelectorAll(".filter-btn");
const freelancerCards = document.querySelectorAll(".freelancer-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        const filter = button.dataset.filter;

        freelancerCards.forEach(card => {

            if (filter === "all" || card.dataset.category === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });
});
const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(e) {

        e.preventDefault();

        let valid = true;

        document.getElementById("nomError").innerText = "";
        document.getElementById("prenomError").innerText = "";
        document.getElementById("emailError").innerText = "";
        document.getElementById("sujetError").innerText = "";
        document.getElementById("messageError").innerText = "";

        const nom = document.getElementById("nom").value.trim();
        const prenom = document.getElementById("prenom").value.trim();
        const email = document.getElementById("email").value.trim();
        const sujet = document.getElementById("sujet").value;
        const message = document.getElementById("message").value.trim();

        if(nom === ""){
            document.getElementById("nomError").innerText = "Nom obligatoire";
            valid = false;
        }

        if(prenom === ""){
            document.getElementById("prenomError").innerText = "Prénom obligatoire";
            valid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailRegex.test(email)){
            document.getElementById("emailError").innerText = "Email invalide";
            valid = false;
        }

        if(sujet === ""){
            document.getElementById("sujetError").innerText = "Choisissez un sujet";
            valid = false;
        }

        if(message.length < 20){
            document.getElementById("messageError").innerText =
            "Le message doit contenir au moins 20 caractères";
            valid = false;
        }

        if(valid){
            document.getElementById("successMessage").classList.remove("d-none");
            contactForm.reset();
        }

    });

}