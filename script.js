document.addEventListener("DOMContentLoaded", function () {
    // Navbar transparente al hacer scroll
    window.addEventListener("scroll", function () {
        const navbar = document.getElementById("navbar");
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    

    // Scroll suave al hacer clic en un enlace del navbar
    document.querySelectorAll(".nav-links a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Mostrar mensaje de bienvenida al abrir el chatbot
    const chatbotWindow = document.getElementById("chatbot-window");
    let chatbotOpened = false; 

    window.toggleChatbot = function () {
        chatbotWindow.classList.toggle("hidden");

        if (!chatbotOpened) {
            const messages = document.getElementById("chatbot-messages");
            const welcomeMessage = document.createElement("div");
            welcomeMessage.classList.add("message", "bot-message");
            welcomeMessage.innerText = "¡Hola! Soy Nymbot 🤖. ¿En qué puedo ayudarte hoy?";
            messages.appendChild(welcomeMessage);
            chatbotOpened = true; 
        }
    };
});

// document.addEventListener("DOMContentLoaded", function () {
//     const track = document.querySelector(".carousel-track");
//     const testimonials = document.querySelectorAll(".testimonial-card");
//     const dotsContainer = document.querySelector(".carousel-dots");
//     const total = testimonials.length;
//     const visibleCards = 3;
//     let index = 0;

//     // Crear puntos dinámicamente
//     for (let i = 0; i < Math.ceil(total / visibleCards); i++) {
//         let dot = document.createElement("button");
//         if (i === 0) dot.classList.add("active");
//         dot.addEventListener("click", function () {
//             index = i;
//             updateCarousel();
//         });
//         dotsContainer.appendChild(dot);
//     }
//     const dots = document.querySelectorAll(".carousel-dots button");

//     function updateCarousel() {
//         track.style.transform = `translateX(-${index * 33.33}%)`;
//         dots.forEach((dot, i) => {
//             dot.classList.toggle("active", i === index);
//         });
//     }

//     // Cambio automático cada 5 segundos
//     setInterval(function () {
//         index = (index + 1) % Math.ceil(total / visibleCards);
//         updateCarousel();
//     }, 5000);
// });

function calculateSavings() {
    let cost = document.getElementById("cost-input").value;
    let savings = cost * 0.4; // Supongamos un 40% de reducción
    document.getElementById("savings-result").innerText = "Podrías ahorrar hasta $" + savings + " al mes con AWS.";
}

window.onscroll = function() {
    let button = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block"; // Mostrar el botón
    } else {
        button.style.display = "none"; // Ocultar el botón
    }
};

// Función para hacer scroll al principio
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    }
}
