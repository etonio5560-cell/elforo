// Internacionalización
const i18n = {
  es: {
    nav_about: "Sobre",
    nav_packages: "Paquetes",
    nav_destinations: "Destinos",
    nav_booking: "Reservar",
    nav_contact: "Contacto",
    nav_reviews: "Reseñas",
    about_title: "Sobre Nosotros",
    about_text1: "Somos líderes en turismo inclusivo: diseñamos experiencias accesibles para personas con cualquier condición.",
    about_text2: "Nuestro compromiso es garantizar comodidad, seguridad y diversión para todos, sin excepciones.",
    about_fact1: "Vehículos adaptados y guías especializados.",
    about_fact2: "Alojamiento con accesibilidad universal.",
    about_fact3: "Actividades sensoriales y culturales inclusivas.",
    packages_title: "Nuestros Paquetes",
    destinations_title: "Destinos Destacados",
    booking_title: "Reservar Paquete",
    booking_pkg_label: "Selecciona un paquete:",
    booking_date_label: "Fecha de viaje:",
    booking_guests_label: "Número de personas:",
    booking_btn: "Confirmar Reserva",
    contact_title: "Contacto",
    contact_btn: "Enviar",
    contact_info: "Tel: +54 2622 123456 | Email: info@turismoinclusivo.com",
    reviews_title: "Reseñas",
    rev1: "Excelente atención y accesibilidad total.",
    rev2: "Experiencia inolvidable, guías muy profesionales.",
    rev3: "Nos hicieron sentir seguros y cómodos."
  },
  en: {
    nav_about: "About",
    nav_packages: "Packages",
    nav_destinations: "Destinations",
    nav_booking: "Book",
    nav_contact: "Contact",
    nav_reviews: "Reviews",
    about_title: "About Us",
    about_text1: "We lead inclusive tourism: we design accessible experiences for people of all abilities.",
    about_text2: "Our commitment is comfort, safety and fun for everyone, without exceptions.",
    about_fact1: "Adapted vehicles and specialized guides.",
    about_fact2: "Universal accessibility accommodations.",
    about_fact3: "Inclusive sensory and cultural activities.",
    packages_title: "Our Packages",
    destinations_title: "Featured Destinations",
    booking_title: "Book a Package",
    booking_pkg_label: "Select a package:",
    booking_date_label: "Travel date:",
    booking_guests_label: "Number of guests:",
    booking_btn: "Confirm Booking",
    contact_title: "Contact",
    contact_btn: "Send",
    contact_info: "Phone: +54 2622 123456 | Email: info@turismoinclusivo.com",
    reviews_title: "Reviews",
    rev1: "Excellent care and total accessibility.",
    rev2: "Unforgettable experience, very professional guides.",
    rev3: "Made us feel safe and comfortable."
  }
};

// Datos de paquetes inclusivos
const packages = [
  {
    id: 1,
    name: { es: "Tour Urbano Adaptado", en: "Accessible City Tour" },
    desc: {
      es: "Recorrido por la ciudad con movilidad reducida y audioguía adaptada.",
      en: "City tour with wheelchair access and adapted audio guide."
    },
    img: "/img/Lombardia.jpg",
    price: 80
  },
  {
    id: 2,
    name: { es: "Aventura Sensorial", en: "Sensory Adventure" },
    desc: {
      es: "Experiencia en la naturaleza con actividades táctiles y sensoriales.",
      en: "Nature experience with tactile and sensory activities."
    },
    img: "img/tour.sensorial.jpg",
    price: 120
  },
  {
    id: 3,
    name: { es: "Escapada Cultural", en: "Cultural Getaway" },
    desc: {
      es: "Visitas a museos con guías en lengua de señas.",
      en: "Museum visits with sign language guides."
    },
    img: "img/museo.jpg",
    price: 100
  }
];

// Datos de destinos
const destinations = [
  {
    id: 1,
    name: { es: "Playa Accesible", en: "Accessible Beach" },
    desc: {
      es: "Pasarelas y sillas anfibias para disfrutar del mar.",
      en: "Boardwalks and amphibious wheelchairs to enjoy the sea."
    },
    img: "img/playa.jpg"
  },
  {
    id: 2,
    name: { es: "Montaña Inclusiva", en: "Inclusive Mountain" },
    desc: {
      es: "Senderos adaptados y miradores accesibles.",
      en: "Adapted trails and accessible lookouts."
    },
    img: "img/montaña.jpg"
  },
  {
    id: 3,
    name: { es: "Ruta Gastronómica", en: "Gourmet Route" },
    desc: {
      es: "Menús en braille y menús audio-guía.",
      en: "Braille menus and audio-guide menus."
    },
    img: "img/gourmet.jpg"
  }
];

let lang = document.documentElement.getAttribute("data-lang") || "es";

// Localizar textos
function localize() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.innerText = i18n[lang][key] || key;
  });
}

// Render tarjetas
function renderCards(items, containerId, showPrice = false) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.img}" alt="${item.name[lang]}">
      <div class="card-body">
        <h3>${item.name[lang]}</h3>
        <p>${item.desc[lang]}</p>
        ${showPrice ? `<div class="price">$${item.price}</div>` : ""}
      </div>`;
    container.appendChild(card);
  });
}

// Poblar select de paquetes
function populatePackageSelect() {
  const select = document.getElementById("pkgSelect");
  select.innerHTML = "";
  packages.forEach(pkg => {
    const opt = document.createElement("option");
    opt.value = pkg.id;
    opt.innerText = `${pkg.name[lang]} – $${pkg.price}`;
    select.appendChild(opt);
  });
}

// Modo oscuro
document.getElementById("darkToggle").addEventListener("click", () => {
  const root = document.documentElement;
  const isDark = root.getAttribute("data-theme") === "dark";
  root.setAttribute("data-theme", isDark ? "light" : "dark");
});

// Cambio de idioma
document.getElementById("langSelect").addEventListener("change", e => {
  lang = e.target.value;
  document.documentElement.setAttribute("data-lang", lang);
  localize();
  renderCards(packages, "packagesGrid", true);
  renderCards(destinations, "destinationsGrid");
  populatePackageSelect();
});

// Formulario de reserva
document.getElementById("bookingForm").addEventListener("submit", e => {
  e.preventDefault();
  alert(
    lang === "es"
      ? "Reserva confirmada. ¡Nos vemos pronto!"
      : "Booking confirmed. See you soon!"
  );
  e.target.reset();
});

// Formulario de contacto
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert(
    lang === "es"
      ? "Mensaje enviado. Te contactaremos pronto."
      : "Message sent. We'll be in touch soon."
  );
  e.target.reset();
});

// Observer para animaciones
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);
document.querySelectorAll("section").forEach(sec => observer.observe(sec));

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  localize();
  renderCards(packages, "packagesGrid", true);
  renderCards(destinations, "destinationsGrid");
  populatePackageSelect();
});