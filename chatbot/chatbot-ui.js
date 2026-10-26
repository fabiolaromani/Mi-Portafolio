

(function () {
    "use strict";

    if (document.getElementById("chatbot-portafolio")) return;

    const contenedor = document.createElement("div");
    contenedor.id = "chatbot-portafolio";

    contenedor.innerHTML = `
        <!-- BOTÓN DEL ROBOT -->
        <button type="button"
            class="chatbot-boton-avatar animate-float animate-pulse-glow"
            id="chatbot-abrir"
            aria-label="Abrir asistente académico"
            aria-expanded="false"
            aria-controls="chatbot-ventana">

            <span class="chatbot-anillo"></span>

            <svg class="chatbot-robot" viewBox="0 0 200 200"
                fill="none" aria-hidden="true">
                <path d="M100 30V20" stroke="#7dd3fc" stroke-width="5"
                    stroke-linecap="round"/>
                <circle cx="100" cy="16" r="7" fill="#38bdf8"/>
                <rect x="42" y="43" width="116" height="94" rx="43"
                    fill="#7dd3fc" stroke="#ffffff" stroke-width="3"/>
                <rect x="53" y="53" width="94" height="73" rx="34"
                    fill="#f0f9ff"/>
                <rect x="62" y="72" width="29" height="28" rx="12"
                    fill="#0c4a6e"/>
                <rect x="109" y="72" width="29" height="28" rx="12"
                    fill="#0c4a6e"/>
                <circle cx="78" cy="82" r="5" fill="#38bdf8"/>
                <circle cx="125" cy="82" r="5" fill="#38bdf8"/>
                <path d="M83 107Q100 121 117 107"
                    stroke="#0284c7" stroke-width="4"
                    stroke-linecap="round"/>
                <rect x="28" y="75" width="13" height="36" rx="6"
                    fill="#38bdf8"/>
                <rect x="159" y="75" width="13" height="36" rx="6"
                    fill="#38bdf8"/>
                <rect x="70" y="140" width="60" height="30" rx="11"
                    fill="#0284c7" stroke="#7dd3fc" stroke-width="2"/>
                <text x="100" y="160" font-family="Arial,sans-serif"
                    font-size="15" font-weight="bold"
                    fill="#ffffff" text-anchor="middle">AI</text>
                <path d="M78 174L69 184M122 174L131 184"
                    stroke="#7dd3fc" stroke-width="6"
                    stroke-linecap="round"/>
            </svg>

            <span class="chatbot-etiqueta">¡Hablemos!</span>
        </button>

        <!-- VENTANA DEL CHAT -->
        <section class="chatbot-ventana chatbot-oculto"
            id="chatbot-ventana"
            role="dialog"
            aria-label="Asistente académico"
            aria-modal="false">

            <header class="chatbot-cabecera">
                <div class="chatbot-identidad">
                    <div class="chatbot-avatar">
                        <svg viewBox="0 0 100 100" aria-hidden="true">
                            <rect x="20" y="23" width="60" height="49"
                                rx="21" fill="#7dd3fc"
                                stroke="#fff" stroke-width="2"/>
                            <rect x="28" y="30" width="44" height="34"
                                rx="15" fill="#f0f9ff"/>
                            <circle cx="39" cy="43" r="5" fill="#075985"/>
                            <circle cx="61" cy="43" r="5" fill="#075985"/>
                            <path d="M41 53Q50 61 59 53"
                                stroke="#0284c7" stroke-width="2.5"
                                stroke-linecap="round" fill="none"/>
                            <path d="M50 23V15"
                                stroke="#7dd3fc" stroke-width="3"/>
                            <circle cx="50" cy="12" r="4" fill="#38bdf8"/>
                        </svg>
                    </div>

                    <div class="chatbot-titulos">
                        <h2 class="chatbot-titulo">Asistente académico</h2>
                        <p class="chatbot-estado">Tu guía del portafolio</p>
                    </div>
                </div>

                <button type="button" class="chatbot-cerrar"
                    id="chatbot-cerrar" aria-label="Cerrar chat">×</button>
            </header>

            <div class="chatbot-bienvenida">
                <span class="chatbot-bienvenida-icono">✦</span>
                <div>
                    <strong>¡Hola! Bienvenido/a</strong>
                    <p>¿Qué te gustaría descubrir hoy?</p>
                </div>
            </div>

            <div class="chatbot-mensajes" id="chatbot-mensajes"
                role="log" aria-live="polite"
                aria-relevant="additions"></div>

            <div class="chatbot-sugerencias" id="chatbot-sugerencias">
                <span class="chatbot-sugerencias-titulo">PREGUNTAS RÁPIDAS</span>
                <button type="button" class="chatbot-sugerencia">
                    🎓 Ver unidades
                </button>
                <button type="button" class="chatbot-sugerencia">
                    📚 Buscar semanas
                </button>
                <button type="button" class="chatbot-sugerencia">
                    💻 Ver trabajos
                </button>
            </div>

            <form class="chatbot-formulario" id="chatbot-formulario">
                <input type="text" class="chatbot-entrada"
                    id="chatbot-entrada"
                    placeholder="Escribe tu consulta..."
                    aria-label="Escribe tu consulta"
                    maxlength="300" autocomplete="off" required>

                <button type="submit" class="chatbot-enviar"
                    aria-label="Enviar mensaje">
                    <svg viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round"
                        aria-hidden="true">
                        <path d="M22 2L11 13"/>
                        <path d="M22 2L15 22L11 13L2 9L22 2"/>
                    </svg>
                </button>
            </form>

            <div class="chatbot-pie">✦ Asistente de tu portafolio académico</div>
        </section>
    `;

    document.body.appendChild(contenedor);

    const botonAbrir = document.getElementById("chatbot-abrir");
    const botonCerrar = document.getElementById("chatbot-cerrar");
    const ventana = document.getElementById("chatbot-ventana");
    const mensajes = document.getElementById("chatbot-mensajes");
    const formulario = document.getElementById("chatbot-formulario");
    const entrada = document.getElementById("chatbot-entrada");
    const sugerencias = document.getElementById("chatbot-sugerencias");

    let saludoMostrado = false;

    function mostrarMensaje(texto, tipo) {
        const mensaje = document.createElement("div");
        mensaje.classList.add("chatbot-mensaje");
        mensaje.classList.add(
            tipo === "usuario"
                ? "chatbot-mensaje-usuario"
                : "chatbot-mensaje-bot"
        );

        mensaje.textContent = texto;
        mensajes.appendChild(mensaje);
        mensajes.scrollTop = mensajes.scrollHeight;
    }

    function mostrarSaludo() {
        if (saludoMostrado) return;
        saludoMostrado = true;

        mostrarMensaje(
            "¡Hola! 👋 Soy tu asistente académico. Puedo orientarte por las unidades, semanas y trabajos de este portafolio. ¡Pregúntame lo que quieras explorar!",
            "bot"
        );
    }

    function procesarPregunta(pregunta) {
        mostrarMensaje(pregunta, "usuario");

        let respuesta;

        if (
            typeof window.ChatbotPortafolio === "object" &&
            typeof window.ChatbotPortafolio.responder === "function"
        ) {
            try {
                respuesta = window.ChatbotPortafolio.responder(pregunta);
            } catch (error) {
                respuesta = "No pude procesar esa consulta. Inténtalo nuevamente.";
                console.error("Error del chatbot:", error);
            }
        } else {
            respuesta =
                "Mis respuestas todavía no están disponibles. Comprueba que chatbot.js se haya cargado correctamente.";
        }

        if (typeof respuesta !== "string" || !respuesta.trim()) {
            respuesta = "No encontré una respuesta para esa consulta. Prueba con otra pregunta.";
        }

        mostrarMensaje(respuesta, "bot");
    }

    function abrirChat() {
        ventana.classList.remove("chatbot-oculto");
        botonAbrir.setAttribute("aria-expanded", "true");
        mostrarSaludo();
        entrada.focus();
    }

    function cerrarChat() {
        ventana.classList.add("chatbot-oculto");
        botonAbrir.setAttribute("aria-expanded", "false");
        botonAbrir.focus();
    }

    botonAbrir.addEventListener("click", abrirChat);
    botonCerrar.addEventListener("click", cerrarChat);

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();
        const pregunta = entrada.value.trim();
        if (!pregunta) return;

        procesarPregunta(pregunta);
        entrada.value = "";
        entrada.focus();
    });

    sugerencias.addEventListener("click", function (evento) {
        const boton = evento.target.closest("button");
        if (!boton) return;

        const texto = boton.textContent.toLowerCase();
        let pregunta = "";

        if (texto.includes("unidades")) {
            pregunta = "¿Cómo puedo encontrar las unidades?";
        } else if (texto.includes("semanas")) {
            pregunta = "¿Dónde encuentro las semanas?";
        } else if (texto.includes("trabajos")) {
            pregunta = "¿Dónde puedo ver los trabajos?";
        }

        if (pregunta) procesarPregunta(pregunta);
    });

    document.addEventListener("keydown", function (evento) {
        if (
            evento.key === "Escape" &&
            !ventana.classList.contains("chatbot-oculto")
        ) {
            cerrarChat();
        }
    });
})();
