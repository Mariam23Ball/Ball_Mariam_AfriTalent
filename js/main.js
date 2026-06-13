// verification du chargement du JS
console.log("JS chargé");
console.log("clic bouton");
// gestion du thème sombre et du bouton de retour en haut de la page
const themeToggle = document.getElementById("themeToggle");
const topBtn = document.getElementById("topBtn");
// acttivation/désactivation du mode sombre
// if themeToggle verifie que le bouton existe
// addEventListener("click") exécute une  action lors du clic sur le bouton
// document.body.classList.toggle("dark-mode") ajoute ou supprime la classe "dark-mode" du corps du document pour activer ou désactiver le mode sombre
if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
}
// modification de la barre de navigation lors du défilement et affichage du bouton de retour en haut de la page
// window.addEventListener("scroll") detecte le défilement de la page et exécute une fonction à chaque fois que l'utilisateur fait défiler la page
// querySelector(".navbar") sélectionne l'élément de la barre de navigation
// window.scrollY vérifie la position verticale actuelle du défilement de la page
// classList.add("navbar-scroll") ajoute la classe "navbar-scroll" à la barre de navigation pour appliquer les styles définis dans le CSS lorsque l'utilisateur fait défiler la page de plus de 50 pixels
// classList.remove("navbar-scroll") supprime la classe "navbar-scroll" lorsque l'utilisateur revient en haut de la page
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (navbar && window.scrollY > 50) {
        navbar.classList.add("navbar-scroll");
    } else if (navbar) {
        navbar.classList.remove("navbar-scroll");
    }
});
// gestion du bouton de retour en haut de la page
// window.scrollTo(0, 0) fait défiler la page vers le haut lorsque l'utilisateur clique sur le bouton de retour en haut de la page
// window.scrollTo(0, 0) fait défiler la page vers le haut lorsque l'utilisateur clique sur le bouton de retour en haut de la page
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
// animation des compteurs
// querySelectorAll(".counter") sélectionne tous les éléments avec la classe "counter" et les stocke dans une variable appelée "counters"
// forEach(counter => { ... }) parcourt chaque élément de la variable "counters" et exécute une fonction pour chaque compteur
// parseInt(counter.dataset.target) récupère la valeur cible du compteur à partir de l'attribut de données "data-target" et la convertit en entier
// setInterval(() => { ... }, 20) crée une boucle qui s'exécute toutes les 20 millisecondes pour incrémenter le compteur jusqu'à atteindre la valeur cible
// clearInterval(interval) arrête la boucle lorsque le compteur atteint ou dépasse la valeur cible
// counter.innerText = count; met à jour le texte du compteur avec la valeur actuelle du compteur à chaque incrémentation
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
// selection des éléments à afficher avec un effet de fade-in
// querySelectorAll(".fade-in") sélectionne tous les éléments avec la classe "fade-in" et les stocke dans une variable appelée "fadeElements"
const fadeElements = document.querySelectorAll(".fade-in");


// filttrage des freelances par catégorie
// querySelectorAll(".filter-btn") sélectionne tous les éléments avec la classe "filter-btn" et les stocke dans une variable appelée "filterButtons"
// querySelectorAll(".freelancer-card") sélectionne tous les éléments avec la classe "freelancer-card" et les stocke dans une variable appelée "freelancerCards"
// forEach(button => { ... }) parcourt chaque élément de la variable "filterButtons" et exécute une fonction pour chaque bouton de filtrage
// button.dataset.filter récupère la valeur de l'attribut de données "data-filter" du bouton de filtrage pour déterminer la catégorie à filtrer
// if (filter === "all" || card.dataset.category === filter) vérifie si la catégorie du bouton de filtrage est "all" ou correspond à la catégorie de la carte de freelance
// card.style.display = "block"; affiche la carte de freelance si elle correspond au filtre sélectionné
// card.style.display = "none"; masque la carte de freelance si elle ne correspond pas au filtre sélectionné
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

// validation du formulaire de contact
// getElementById("contactForm") sélectionne l'élément du formulaire de contact avec l'ID "contactForm" et le stocke dans une variable appelée "contactForm"
// addEventListener("submit", function(e) { ... }) ajoute un écouteur d'événements pour l'événement de soumission du formulaire, qui exécute une fonction lorsque le formulaire est soumis
// e.preventDefault() empêche l'envoi du formulaire pour permettre la validation des champs avant l'envoi
// document.getElementById("nomError").innerText = ""; réinitialise les messages d'erreur pour chaque champ du formulaire
// const nom = document.getElementById("nom").value.trim(); récupère la valeur du champ "nom" et supprime les espaces inutiles
// const prenom = document.getElementById("prenom").value.trim(); récupère la valeur du champ "prenom" et supprime les espaces inutiles
// const email = document.getElementById("email").value.trim(); récupère la valeur du champ "email" et supprime les espaces inutiles
// const sujet = document.getElementById("sujet").value; récupère la valeur du champ "sujet"
// const message = document.getElementById("message").value.trim(); récupère la valeur du champ "message" et supprime les espaces inutiles
// if(nom === "") { ... } vérifie si le champ "nom" est vide et affiche un message d'erreur si c'est le cas
// if(prenom === "") { ... } vérifie si le champ "prenom" est vide et affiche un message d'erreur si c'est le cas
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; définit une expression régulière pour valider le format de l'adresse e-mail
// if(!emailRegex.test(email)) { ... } vérifie si le champ "email" correspond au format d'adresse e-mail valide et affiche un message d'erreur si ce n'est pas le cas
// if(sujet === "") { ... } vérifie si le champ "sujet" est vide et affiche un message d'erreur si c'est le cas
// if(message.length < 20) { ... } vérifie si le champ "message" contient au moins 20 caractères et affiche un message d'erreur si ce n'est pas le cas
// if(valid) { ... } vérifie si tous les champs du formulaire sont valides et affiche un message de succès et réinitialise le formulaire si c'est le cas
// document.getElementById("successMessage").classList.remove("d-none"); affiche le message de succès en supprimant la classe "d-none" qui le masque
// contactForm.reset(); réinitialise le formulaire en effaçant les valeurs des champs
const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(e) {
        // empêcher l'envoi du formulaire pour validation
        e.preventDefault();

        let valid = true;
        // réinitialiser les messages d'erreur
        document.getElementById("nomError").innerText = "";
        document.getElementById("prenomError").innerText = "";
        document.getElementById("emailError").innerText = "";
        document.getElementById("sujetError").innerText = "";
        document.getElementById("messageError").innerText = "";
// récupérer les valeurs des champs du formulaire
        const nom = document.getElementById("nom").value.trim();
        const prenom = document.getElementById("prenom").value.trim();
        const email = document.getElementById("email").value.trim();
        const sujet = document.getElementById("sujet").value;
        const message = document.getElementById("message").value.trim();
        // validation  champs du nom, prénom, email, sujet et message
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
        // affichage du message de succès si le formulaire est valide et réinitialisation du formulaire;
        if(valid){
            document.getElementById("successMessage").classList.remove("d-none");
            contactForm.reset();
        }

    });

}