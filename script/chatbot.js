// Variables de elementos DOM
const chatbotBtn = document.getElementById("chatbot-btn");
const chatbotWindow = document.getElementById("chatbot-window");
const chatbotMessages = document.getElementById("chatbot-messages");
const chatbotInput = document.getElementById("chatbot-input");
const chatbotSendBtn = document.getElementById("chatbot-send-btn");

// Respuestas predefinidas
const responses = {
    "bienvenida": "¡Bienvenido! Soy Nymbot 🤖, tu asistente virtual. ¿En qué puedo ayudarte?",
    "hola": "¡Hola, soy Nymbot 🤖! ¿Cómo puedo ayudarte hoy?",
    "¿cómo estás?": "Estoy bien, gracias por preguntar. ¿Y tú?",
    "adiós": "¡Hasta luego! Que tengas un buen día.",
    "¿qué haces?": "Estoy aquí para ayudarte con cualquier duda que tengas.",
    "gracias": "¡De nada! Si necesitas algo más, no dudes en preguntar.",
    "¿cuál es tu nombre?": "Me llamo Nymbot, un placer conocerte.",
    "¿dónde estás?": "Estoy en la nube, siempre disponible para ayudarte.",
    "default": "Lo siento, no entiendo lo que dices. ¿Podrías reformular?",
    "¿puedes ayudarme?": "¡Claro! ¿En qué te puedo ayudar?",
    "¿qué hora es?": () => `La hora actual es: ${new Date().toLocaleTimeString()}`,
    "¿qué día es hoy?": () => `Hoy es: ${new Date().toLocaleDateString()}`,
    "¿qué servicios ofreces?": "Ofrecemos soluciones de multinube, servicios cloud (AWS) e inteligencia artificial.",
    "¿qué es AWS?": "AWS (Amazon Web Services) es una plataforma de servicios en la nube proporcionada por Amazon.",
    "¿quién eres?": "Soy Nymbot, un asistente virtual programado para responder tus preguntas y ayudarte.",
    "¿puedes darme información sobre la carretera austral?": "Claro, la Carretera Austral es una famosa ruta en Chile que atraviesa paisajes impresionantes de la Patagonia.",
    "¿cuáles son tus colores favoritos?": "Mis colores favoritos son el morado y el negro, muy elegantes, ¿verdad?",
    "¿cómo está el clima?": "Lo siento, no puedo verificar el clima en este momento. Pero te puedo ayudar con otras preguntas.",
    "dime un chiste": "¿Por qué el libro de matemáticas estaba triste? Porque tenía demasiados problemas.",
    "¿puedes contarme un dato curioso?": "Claro, ¿sabías que las arañas no son insectos? Son arácnidos, ¡y pueden tener hasta 8 ojos!",
    "¿cuál es el significado de la vida?": "¡Esa es una gran pregunta! Tal vez es encontrar la felicidad, el amor y aprender constantemente.",
    "¿qué es la inteligencia artificial?": "La inteligencia artificial es la simulación de procesos de inteligencia humana por máquinas, como el aprendizaje y la resolución de problemas.",
    "¿qué puedo hacer si no me entiendes?": "Si no entiendo lo que dices, trata de reformular tu pregunta o usar palabras diferentes.",
    "ayuda": "¡Estoy aquí para ayudarte! Solo dime qué necesitas.",
    "¿tienes alguna recomendación de libro?": "Te recomiendo 'Sapiens: De animales a dioses' de Yuval Noah Harari, es muy interesante.",
    "¿me puedes ayudar con Angular?": "¡Por supuesto! Soy experto en Angular, ¿qué necesitas saber?"
};


// Variable para asegurarse de que el mensaje de bienvenida solo se muestre una vez
let isWelcomeMessageShown = false;

// Función para mostrar mensajes en el chat
function displayMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender);
    messageElement.textContent = message;
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Desplazar al último mensaje
}

// Función para obtener la respuesta del chatbot
function getChatbotResponse(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();
    return responses[lowerCaseMessage] || responses["default"];
}

// Función para enviar mensaje (desde el input o el botón)
function sendMessage(event) {
    if (event.key === "Enter" || event.type === "click") {
        const userMessage = chatbotInput.value.trim();
        if (userMessage === "") return;

        // Mostrar mensaje del usuario
        displayMessage(userMessage, "user");

        // Obtener y mostrar respuesta del chatbot
        const botResponse = getChatbotResponse(userMessage);
        displayMessage(botResponse, "bot");

        // Limpiar campo de entrada
        chatbotInput.value = "";
    }
}

// Función para alternar la visibilidad del chatbot
function toggleChatbot() {
    chatbotWindow.classList.toggle("hidden");

    // Si el chat está siendo abierto por primera vez, mostrar el mensaje de bienvenida
    if (!isWelcomeMessageShown) {
        displayMessage(responses["bienvenida"], "bot");
        isWelcomeMessageShown = true; // Marcar que el mensaje de bienvenida ya fue mostrado
    }
}

// Event listeners
chatbotSendBtn.addEventListener("click", sendMessage);
chatbotInput.addEventListener("keypress", sendMessage);
chatbotBtn.addEventListener("click", toggleChatbot);
