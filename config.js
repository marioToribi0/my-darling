// ============================================
// 💝 ¡LA PÁGINA MÁS ROMÁNTICA PARA CAROLINE! 💝
// ============================================

const CONFIG = {
    // Nombre de tu San Valentín
    valentineName: "Caroline",

    // Título en la pestaña del navegador
    pageTitle: "Morchii, ¿Quieres ser mi San Valentín? 💖",

    // Emojis flotantes en el fondo
    floatingEmojis: {
        hearts: ['💖', '💗', '💕', '💞', '💓'],  // Puro amor para Caroline
        bears: ['🧸', '🐻']                      // Porque es tan tierna como un osito
    },

    // Preguntas y respuestas
    questions: {
        first: {
            text: "Caroline, ¿te gusto?",                            
            yesBtn: "Obvio 💕",                                               
            noBtn: "No 😢 (pero no puedes elegir esto jiji)",                                                
            secretAnswer: "No me gustas, ¡te amo! 💖💡"           
        },
        second: {
            text: "¿Cuánto me amas?",                            
            startText: "¡Así de infinito! 🎀",                                 
            nextBtn: "Siguiente 💗"                                           
        },
        third: {
            text: "¿Quieres ser mi San Valentín el 14 de febrero de 2025? 🌷", 
            yesBtn: "¡SÍ! 💝",                                            
            noBtn: "No 😭 (mentira, sí quieres)"                                               
        }
    },

    // Mensajes del medidor de amor
    loveMessages: {
        extreme: "¡OMG! ¿Me amas tanto? 🚀💞💖",
        high: "¡Hasta el infinito y más allá, morchi! 💡💗",
        normal: "¡Siempre y para siempre! 🥰🎀"
    },

    // Mensajes de celebración después de decir "¡Sí!"
    celebration: {
        title: "¡Sí! ¡Soy la persona más feliz del mundo! 🎉💖",
        message: "¡Te ganaste 5 beesoo preciosa! 💕",
        emojis: "🎁💖🤗💝💋❤️💕"
    },

    // Esquema de colores (todo bien rosa para Caroline)
    colors: {
        backgroundStart: "#ffdde1",      // Dulce y suave como ella
        backgroundEnd: "#ee9ca7",        // Perfecto para el mood romántico
        buttonBackground: "#ff6b81",     // Botones con mucho love
        buttonHover: "#ff85a2",          // Suavemente encantador
        textColor: "#ff3e6c"              // Brilla como su sonrisa
    },

    // Configuración de animaciones
    animations: {
        floatDuration: "14s",
        floatDistance: "55px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.6
    },

    // Música de fondo
    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://res.cloudinary.com/dsijyazdq/video/upload/v1739414088/Alex_Warren_-_Carry_You_Home_Lyrics_uu3q0y.mp3", // Música perfecta para el momento
        startText: "🎶 Ponle ritmo al amor",
        stopText: "🔇 Shhh, pausa romántica",
        volume: 0.5
    }
};

// No toques nada aquí abajo, que todo fluya con amor 💕
window.VALENTINE_CONFIG = CONFIG;