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
