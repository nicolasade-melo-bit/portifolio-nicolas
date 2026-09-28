// ============================
// MENU MOBILE
// ============================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Fecha o menu ao clicar em um link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


// ============================
// FORMULÁRIO
// ============================

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        `Obrigado, ${name}! Sua mensagem foi preenchida com sucesso.`
    );

    form.reset();

});
