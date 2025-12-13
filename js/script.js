// =======================================================
// script.js — Manejo de idiomas, formulario WhatsApp,
// distritos, modo oscuro/claro, animaciones GSAP
// y carrusel personalizado.
// =======================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ----------------------------------------------------
     TRADUCCIONES (Sistema de internacionalización ES/EN)
     ----------------------------------------------------
     - Maneja todos los textos en español e inglés.
     - Usa data-i18n, data-i18n-placeholder o IDs que
       empiezan con "t-" para reemplazar contenido.
     - Guarda el idioma en localStorage.
  -----------------------------------------------------*/
  const translations = {
    es: {
      "meta_title": "Entrena Conmigo - Miguel Loco Seminario",

      "t-hero-title": "Miguel Loco Seminario",
      "t-hero-sub": "Entrena con la experiencia de un exfutbolista profesional y entrenador con Licencia Pro FIFA–CONMEBOL.",
      "t-hero-btn": "Entrena conmigo",

      "t-sobremi-title": "Sobre mí",
      "t-sobremi-text1": "Soy Miguel “Loco” Seminario, exfutbolista profesional y entrenador. Mi trabajo es maximizar tu rendimiento.",
      "t-sobremi-text2": "Mi método combina técnica individual, trabajo de potencia y preparación mental para competir con consistencia.",

      "t-servicios-title": "Entrenamientos",
      "t-servicios-sub": "Técnica, potencia y definición con sesiones enfocadas al rendimiento.",
      "t-serv1-title": "⚽ Técnica y Control",
      "t-serv1-desc": "Mejora dominio del balón, pase y remate con ejercicios progresivos.",
      "t-serv2-title": "🔥 Potencia y Velocidad",
      "t-serv2-desc": "Trabajo de fuerza y rapidez para ganar diferencia en el campo.",
      "t-serv3-title": "🎯 Definición y Juego con Neurociencia",
      "t-serv3-desc": "Lectura de juego y toma de decisiones rápidas basadas en neurociencia.",
      "t-serv4-title": "⚽ Coordinación y Agilidad",
      "t-serv4-desc": "Mejora reacción, cambios de ritmo y movimientos rápidos.",
      "t-serv5-title": "🔥 Circuito de Motricidad y Conducción",
      "t-serv5-desc": "Mejora la motricidad, agilidad, técnica en velocidad y finalización.",
      "t-serv6-title": "🎯 Control y Definición",
      "t-serv6-desc": "Desmarques, control orientado y definición bajo presión.",

      "t-form-title": "Contáctame",
      "t-form-sub": "Completa tus datos y te contacto por WhatsApp.",
      "t-form-nombre": "Tu nombre",
      "t-form-distrito": "Selecciona tu distrito",
      "t-form-objetivo": "¿Qué quieres mejorar?",
      "t-form-btn": "Enviar por WhatsApp",

      "t-footer-copy": "© 2025 Entrena Conmigo - Miguel \"Loco\" Seminario",

      "topbar_theme_label": "Tema",
      "topbar_theme": "Modo",

      "t-sobremi-profesion": "Exfutbolista profesional y entrenador de fútbol",
      "t-sobremi-intro": "Soy un exfutbolista peruano reconocido por mi garra, técnica y pasión dentro del campo. A lo largo de mi carrera defendí la camiseta de importantes clubes del Perú y del extranjero, además de representar con orgullo a la selección nacional, convirtiéndome en un referente del fútbol peruano. Tras mi etapa como jugador, continué vinculado al fútbol como director técnico en diversos equipos del país.",
      "t-sobremi-final": "Hoy, con esa misma entrega, comparto mi experiencia formando a nuevas generaciones de jugadores, impulsando la disciplina, la mentalidad ganadora y los valores deportivos que construyen verdaderos campeones.",

      "t-form-objetivo": "¿Qué quieres mejorar?",
      "t-obj-tecnica-control": "Técnica y Control",
      "t-obj-potencia-velocidad": "Potencia y Velocidad",
      "t-obj-definicion-neuro": "Definición y Juego con Neurociencia",
      "t-obj-coordinacion-agilidad": "Coordinación y Agilidad",
      "t-obj-circuito-motricidad": "Circuito de Motricidad y Conducción",
      "t-obj-control-definicion": "Control y Definición"
    },
    en: {
      "meta_title": "Train With Me - Miguel Loco Seminario",

      "t-hero-title": "Miguel Loco Seminario",
      "t-hero-sub": "Train with the experience of a former professional footballer and a coach with a FIFA–CONMEBOL Pro License.",
      "t-hero-btn": "Train with me",

      "t-sobremi-title": "About me",
      "t-sobremi-text1": "I’m Miguel “Loco” Seminario, former professional football player and coach. My job is to maximize your performance.",
      "t-sobremi-text2": "My method combines individual technique, power training and mental preparation to help you compete with consistency.",


      "t-servicios-title": "Training Sessions",
      "t-servicios-sub": "Technique, power and finishing with performance-focused sessions.",
      "t-serv1-title": "⚽ Technique & Ball Control",
      "t-serv1-desc": "Improve ball control, passing and shooting through progressive drills.",
      "t-serv2-title": "🔥 Power & Speed",
      "t-serv2-desc": "Strength and acceleration work to gain an edge on the field.",
      "t-serv3-title": "🎯 Finishing & Game Intelligence",
      "t-serv3-desc": "Game reading and fast decision-making based on neuroscience.",
      "t-serv4-title": "⚽ Coordination & Agility",
      "t-serv4-desc": "Improve reaction, quick movements and change of pace.",
      "t-serv5-title": "🔥 Motor Skills & Dribbling Circuit",
      "t-serv5-desc": "Enhance motor coordination, agility, speed technique and finishing.",
      "t-serv6-title": "🎯 Control & Finishing",
      "t-serv6-desc": "Movement off the ball, oriented control and finishing under pressure.",

      "t-form-title": "Contact Me",
      "t-form-sub": "Fill out your info and I'll reach you on WhatsApp.",
      "t-form-nombre": "Your name",
      "t-form-distrito": "Select your district",
      "t-form-objetivo": "What do you want to improve?",
      "t-form-btn": "Send via WhatsApp",

      "t-footer-copy": "© 2025 Train With Me - Miguel \"Loco\" Seminario",

      "topbar_theme_label": "Theme",
      "topbar_theme": "Mode",

      "t-trayectoria-jugador-title": "Professional Playing Career",
      "t-tray-jugador-sel": "Peruvian National Team",
      "t-trayectoria-tecnico-title": "Head Coaching Career",
      "t-tray-tecnico-chapi-cat": "Second Division",
      "t-tray-tecnico-america-cat": "Second Division",
      "t-tray-tecnico-pena-cat": "Second Division",
      "t-tray-tecnico-utc-cat": "Second Division",
      "t-tray-tecnico-est-cat": "First Division",
      "t-tray-tecnico-leon-cat": "Peru Cup",

      "t-sobremi-profesion": "Former professional footballer and football coach",
      "t-sobremi-intro": "I'm a former Peruvian footballer recognized for my grit, technique and passion on the field. Throughout my career, I defended the colors of important clubs in Peru and abroad, and proudly represented the national team, becoming a reference in Peruvian football. After my playing career, I remained linked to the game as a head coach for several teams in the country.",
      "t-sobremi-final": "Today, with the same dedication, I share my experience by training new generations of players, promoting discipline, a winning mindset and the sporting values that build true champions.",

      "t-form-objetivo": "What do you want to improve?",
      "t-obj-tecnica-control": "Technique and Control",
      "t-obj-potencia-velocidad": "Power and Speed",
      "t-obj-definicion-neuro": "Finishing and Neuroscience-Based Play",
      "t-obj-coordinacion-agilidad": "Coordination and Agility",
      "t-obj-circuito-motricidad": "Motor Skills and Dribbling Circuit",
      "t-obj-control-definicion": "Control and Finishing"

    }

  };

  // Determina el idioma inicial: localStorage > navegador > español
  let lang = localStorage.getItem('site-lang') ||
    ((navigator.language && navigator.language.startsWith('en')) ? 'en' : 'es');

  // Función que actualiza todos los textos traducibles
  function applyTranslations() {

    // Elementos con data-i18n (texto interno)
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key] !== undefined) {
        el.textContent = translations[lang][key];
      }
    });

    // Elementos cuyo id empieza con t- (compatibilidad)
    document.querySelectorAll('[id^="t-"]').forEach(el => {
      const key = el.id;

      if (translations[lang] && translations[lang][key] !== undefined) {

        // Si es input o textarea, se usa placeholder en vez de text
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = translations[lang][key];
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });

    // Elementos con placeholder traducible
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang] && translations[lang][key] !== undefined) {
        el.placeholder = translations[lang][key];
      }
    });

    // Actualiza placeholder del select
    const opt = document.getElementById('opt-placeholder');
    if (opt && translations[lang]) {
      opt.textContent = translations[lang]['t-form-distrito-placeholder'];
    }

    // Cambia el título de la pestaña del navegador
    document.title = translations[lang]['meta_title'] || document.title;

    // Marca visual del idioma activo
    document.getElementById('btn-es').classList.toggle('active-lang', lang === 'es');
    document.getElementById('btn-en').classList.toggle('active-lang', lang === 'en');

    // Guardar idioma
    localStorage.setItem('site-lang', lang);
  }

  // Listeners de botones de idioma
  const btnEs = document.getElementById('btn-es');
  const btnEn = document.getElementById('btn-en');

  if (btnEs) btnEs.addEventListener('click', () => { lang = 'es'; applyTranslations(); });
  if (btnEn) btnEn.addEventListener('click', () => { lang = 'en'; applyTranslations(); });

  // Aplica el idioma apenas carga la página
  applyTranslations();



  /* =====================================================
    DISTRITOS — Autocompletar con <datalist>
    ===================================================== */
  const distritos = [
    "Ancón",
    "Ate",
    "Barranco",
    "Breña",
    "Carabayllo",
    "Cercado de Lima",
    "Chaclacayo",
    "Chorrillos",
    "Cieneguilla",
    "Comas",
    "El Agustino",
    "Independencia",
    "Jesús María",
    "La Molina",
    "La Victoria",
    "Lince",
    "Los Olivos",
    "Lurigancho–Chosica",
    "Lurín",
    "Magdalena del Mar",
    "Miraflores",
    "Pachacámac",
    "Pucusana",
    "Pueblo Libre",
    "Puente Piedra",
    "Punta Hermosa",
    "Punta Negra",
    "Rímac",
    "San Bartolo",
    "San Borja",
    "San Isidro",
    "San Juan de Lurigancho",
    "San Juan de Miraflores",
    "San Luis",
    "San Martín de Porres",
    "San Miguel",
    "Santa Anita",
    "Santa María del Mar",
    "Santa Rosa",
    "Santiago de Surco",
    "Surquillo",
    "Villa El Salvador",
    "Villa María del Triunfo"
  ];




  const dataList = document.getElementById('listaDistritos');

  if (dataList) {
    distritos.forEach(d => {
      const option = document.createElement('option');
      option.value = d;
      dataList.appendChild(option);
    });
  }




  /* ----------------------------------------------------
     FORMULARIO → WhatsApp
     ----------------------------------------------------
     - Valida campos.
     - Genera un mensaje diferente según idioma.
     - Abre WhatsApp con el texto.
  ----------------------------------------------------- */
  const form = document.getElementById('leadForm');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Obtiene valores
      const nombre = (document.getElementById('nombre') || {}).value || '';
      const distrito = (document.getElementById('distrito') || {}).value || '';
      const objetivoSelect = document.getElementById("objetivo");
      const objetivo = objetivoSelect.options[objetivoSelect.selectedIndex].textContent;

      // Validación básica
      if (!nombre || !distrito || !objetivo) {
        alert(lang === 'es' ? 'Por favor completa todos los campos.' : 'Please complete all fields.');
        return;
      }

      // Mensaje dinámico según idioma
      const mensaje = lang === 'es'
        ? `Hola Miguel, soy ${nombre}. Vivo en ${distrito} y quiero mejorar ${objetivo.toLowerCase()}.`
        : `Hi Miguel, I'm ${nombre}. I live in ${distrito} and I want to improve ${objetivo.toLowerCase()}.`;

      // Redirige a WhatsApp
      const url = `https://wa.me/51993925765?text=${encodeURIComponent(mensaje)}`;
      window.location.href = url;
    });
  }



  /* ----------------------------------------------------
     MODO OSCURO / CLARO
     ----------------------------------------------------
     - Guarda preferencia en localStorage.
     - Detecta preferencia del sistema operativo.
     - Cambia ícono dinámicamente.
  ----------------------------------------------------- */
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');

  const saved = localStorage.getItem('theme-mode');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  function applyTheme(mode) {
    if (mode === 'light') {
      document.documentElement.classList.add('light');
      themeIcon.className = 'bi bi-sun-fill';
      localStorage.setItem('theme-mode', 'light');
    } else {
      document.documentElement.classList.remove('light');
      themeIcon.className = 'bi bi-moon-fill';
      localStorage.setItem('theme-mode', 'dark');
    }
  }

  // Aplica tema inicial
  applyTheme(saved || (prefersDark ? 'dark' : 'light'));

  // Listener botón del switch
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isLight = document.documentElement.classList.contains('light');
      applyTheme(isLight ? 'dark' : 'light');
    });
  }



  /* ----------------------------------------------------
     ANIMACIONES GSAP (si GSAP está cargado)
     ----------------------------------------------------
     - Animaciones del hero
     - Animaciones de servicios
     - Animación sobre mí
     - Carrusel
     - Formulario
  ----------------------------------------------------- */
  if (window.gsap) {
    gsap.registerPlugin(ScrollTrigger);

    // Animación hero
    gsap.from('.hero-content h1', { y: 30, opacity: 0, duration: 0.9, ease: 'power3.out' });
    gsap.from('.hero-content p', { y: 20, opacity: 0, duration: 0.9, delay: 0.12, ease: 'power3.out' });
    gsap.from('.btn-cta', { scale: 0.95, opacity: 0, duration: 0.8, delay: 0.22 });

    // Servicios con stagger
    gsap.utils.toArray('.servicio-card').forEach((card, i) => {
      gsap.from(card, {
        y: 30, opacity: 0, duration: 0.7, delay: i * 0.12,
        scrollTrigger: { trigger: card, start: 'top 85%' }
      });
    });

    // Sobre mí
    gsap.from('.foto-entrenador', {
      x: -30, opacity: 0, duration: 0.9,
      scrollTrigger: { trigger: '.foto-entrenador', start: 'top 85%' }
    });

    gsap.from('#sobre-mi .titulo-seccion, #sobre-mi p', {
      x: 30, opacity: 0, duration: 0.9, stagger: 0.12,
      scrollTrigger: { trigger: '#sobre-mi', start: 'top 80%' }
    });



    // Formulario
    gsap.from('.formulario', {
      y: 30, opacity: 0, duration: 0.9,
      scrollTrigger: { trigger: '.formulario', start: 'top 90%' }
    });
  }



  /* ----------------------------------------------------
     CARRUSEL BOOTSTRAP (Secundario)
     ---------------------------------------------------- */
  const car = document.querySelector('#carouselClubs');
  if (car) {
    new bootstrap.Carousel(car, { interval: 4000, ride: 'carousel' });
  }
});





/* =====================================================
   CARRUSEL PERSONALIZADO (tu carrusel manual)
   =====================================================
   - Controla items que se centran al deslizarse.
   - Funciona con botones prev/next.
   - Tiene autoplay de 3 segundos.
======================================================*/

let index = 0; // Índice del item centrado

const track = document.getElementById("track");
const items = document.querySelectorAll(".item");
const total = items.length;

// Actualiza la posición del carrusel
function updateCarousel() {

  // Se calcula el ancho total del item + margen
  const itemWidth = items[0].offsetWidth + 60;

  // Ancho visible del contenedor
  const containerWidth = document.querySelector(".carousel-container").offsetWidth;

  /* 
     Se calcula cuánto mover el track para que
     el item actual quede centrado.
  */
  const moveX = -index * itemWidth + (containerWidth / 2 - itemWidth / 2);

  track.style.transform = `translateX(${moveX}px)`;

  // Marca visual del item centrado
  items.forEach(i => i.classList.remove("center"));
  items[index].classList.add("center");
}

// Avanza
function nextItem() {
  index = (index + 1) % total;
  updateCarousel();
}

// Retrocede
function prevItem() {
  index = (index - 1 + total) % total;
  updateCarousel();
}

// Inicializa posición
updateCarousel();

// Botones
document.getElementById("nextBtn").onclick = () => {
  nextItem();
  restartAutoPlay();
};

document.getElementById("prevBtn").onclick = () => {
  prevItem();
  restartAutoPlay();
};

// Recalcula cuando cambia el tamaño de pantalla
window.addEventListener("resize", updateCarousel);

/* ----------------------------------------------------
   AUTO PLAY — Avanza el carrusel cada 3 segundos
----------------------------------------------------- */
let autoPlay = setInterval(nextItem, 3000);

// Reinicia el autoplay cuando el usuario toca un botón
function restartAutoPlay() {
  clearInterval(autoPlay);
  autoPlay = setInterval(nextItem, 3000);
}








/* =====================================================
   CARRUSEL PERSONALIZADO (tu carrusel manual)
   =====================================================
   - Controla items que se centran al deslizarse.
   - Funciona con botones prev/next.
   - Tiene autoplay de 3 segundos.
======================================================*/

let index2 = 0; // Índice del item centrado

const track2 = document.getElementById("track2");
const items2 = document.querySelectorAll(".item-2");
const total2 = items2.length;

// Actualiza la posición del carrusel
function updateCarousel2() {

  // Se calcula el ancho total del item + margen
  const itemWidth2 = items2[0].offsetWidth + 60;

  // Ancho visible del contenedor
  const containerWidth2 = document.querySelector(".carousel-container-2").offsetWidth;

  /* 
     Se calcula cuánto mover el track para que
     el item actual quede centrado.
  */
  const moveX2 = -index2 * itemWidth2 + (containerWidth2 / 2 - itemWidth2 / 2);

  track2.style.transform = `translateX(${moveX2}px)`;

  // Marca visual del item centrado
  items2.forEach(i => i.classList.remove("center"));
  items2[index2].classList.add("center");
}

// Avanza
function nextItem2() {
  index2 = (index2 + 1) % total2;
  updateCarousel2();
}

// Retrocede
function prevItem2() {
  index2 = (index2 - 1 + total2) % total2;
  updateCarousel2();
}

// Inicializa posición
updateCarousel2();

// Botones
document.getElementById("nextBtn2").onclick = () => {
  nextItem2();
  restartAutoPlay2();
};

document.getElementById("prevBtn2").onclick = () => {
  prevItem2();
  restartAutoPlay2();
};

// Recalcula cuando cambia el tamaño de pantalla
window.addEventListener("resize", updateCarousel2);

/* ----------------------------------------------------
   AUTO PLAY — Avanza el carrusel cada 3 segundos
----------------------------------------------------- */
let autoPlay2 = setInterval(nextItem2, 3000);

// Reinicia el autoplay cuando el usuario toca un botón
function restartAutoPlay2() {
  clearInterval(autoPlay2);
  autoPlay2 = setInterval(nextItem2, 3000);
}