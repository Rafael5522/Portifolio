// 1. Efeito Máquina de Escrever no Header
const typewriterElement = document.getElementById("typewriter");
const textToType = "Olá, sou Rafael_"; // O underline dá um toque terminal/hacker
let index = 0;

function typeWriter() {
    if (index < textToType.length) {
        typewriterElement.innerHTML += textToType.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Velocidade da digitação (100ms)
    }
}

// Inicia a digitação quando a página carrega
window.onload = () => {
    typeWriter();
};

// 2. Efeito Scroll Reveal (Revelar ao rolar a página)
// Seleciona todas as seções que têm a classe 'hidden'
const hiddenElements = document.querySelectorAll('.hidden');

// Cria um observador para ver quando o elemento entra na tela
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1 // O efeito dispara quando 10% do elemento aparece na tela
});

// Aplica o observador a cada elemento oculto
hiddenElements.forEach((el) => observer.observe(el));
