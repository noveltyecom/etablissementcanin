const PUPPIES_KEY = "ecc_puppies";
const RESERVATIONS_KEY = "ecc_reservations";
const LANGUAGE_KEY = "ecc_language";
const PUPPIES_VERSION_KEY = "ecc_puppies_version";
const PUPPIES_VERSION = "3";

const defaultPuppies = [
  {
    id: "TCK-001",
    name: "Nala",
    coat: "Teckel Poil Court",
    sex: "Femelle",
    age: "3 mois",
    breed: "Teckel",
    available: true,
    photos: [
      "https://source.unsplash.com/900x600/?dachshund,puppy&sig=1",
      "https://source.unsplash.com/900x600/?dachshund,small&sig=101",
      "https://source.unsplash.com/900x600/?dachshund,portrait&sig=201",
    ],
  },
  {
    id: "TCK-002",
    name: "Rocky",
    coat: "Teckel Nain",
    sex: "Mâle",
    age: "4 mois",
    breed: "Teckel",
    available: true,
    photos: [
      "https://source.unsplash.com/900x600/?dachshund,dog&sig=2",
      "https://source.unsplash.com/900x600/?dachshund,black&sig=102",
      "https://source.unsplash.com/900x600/?dachshund,face&sig=202",
    ],
  },
  {
    id: "TCK-003",
    name: "Luna",
    coat: "Teckel Poil Long",
    sex: "Femelle",
    age: "2 mois",
    breed: "Teckel",
    available: false,
    photos: [
      "https://source.unsplash.com/900x600/?dachshund,longhair&sig=3",
      "https://source.unsplash.com/900x600/?longhaired,dachshund&sig=103",
      "https://source.unsplash.com/900x600/?dachshund,puppy,sleeping&sig=203",
    ],
  },
  {
    id: "TCK-004",
    name: "Milo",
    coat: "Teckel Standard",
    sex: "Mâle",
    age: "5 mois",
    breed: "Teckel",
    available: true,
    photos: [
      "https://source.unsplash.com/900x600/?dachshund,brown&sig=4",
      "https://source.unsplash.com/900x600/?dachshund,outdoor&sig=104",
      "https://source.unsplash.com/900x600/?dachshund,smooth&sig=204",
    ],
  },
  {
    id: "TCK-005",
    name: "Bella",
    coat: "Teckel Arlequin",
    sex: "Femelle",
    age: "3 mois",
    breed: "Teckel",
    available: true,
    photos: [
      "https://source.unsplash.com/900x600/?dapple,dachshund&sig=5",
      "https://source.unsplash.com/900x600/?dachshund,merle&sig=105",
      "https://source.unsplash.com/900x600/?dachshund,closeup&sig=205",
    ],
  },
  {
    id: "TCK-006",
    name: "Oscar",
    coat: "Teckel Miniature",
    sex: "Mâle",
    age: "2 mois",
    breed: "Teckel",
    available: true,
    photos: [
      "https://source.unsplash.com/900x600/?miniature,dachshund&sig=6",
      "https://source.unsplash.com/900x600/?tiny,dachshund&sig=106",
      "https://source.unsplash.com/900x600/?dachshund,mini&sig=206",
    ],
  },
  {
    id: "TCK-007",
    name: "Sally",
    coat: "Teckel Poil Dur",
    sex: "Femelle",
    age: "4 mois",
    breed: "Teckel",
    available: false,
    photos: [
      "https://source.unsplash.com/900x600/?wirehaired,dachshund&sig=7",
      "https://source.unsplash.com/900x600/?dachshund,wirehair&sig=107",
      "https://source.unsplash.com/900x600/?dachshund,playful&sig=207",
    ],
  },
  {
    id: "TCK-008",
    name: "Toby",
    coat: "Teckel Chocolat",
    sex: "Mâle",
    age: "3 mois",
    breed: "Teckel",
    available: true,
    photos: [
      "https://source.unsplash.com/900x600/?chocolate,dachshund&sig=8",
      "https://source.unsplash.com/900x600/?brown,dachshund,puppy&sig=108",
      "https://source.unsplash.com/900x600/?dachshund,ears&sig=208",
    ],
  },
];

const translations = {
  fr: {
    heroTag: "Elevage premium en France",
    heroTitle: "Adoptez votre chiot teckel avec confiance",
    heroDescription:
      "Nous proposons des chiots teckels de différentes lignées, avec suivi vétérinaire, carnet de santé et accompagnement personnalisé.",
    viewPuppies: "Voir les chiots",
    contactUs: "Nous contacter",
    quickInfoTitle: "Pourquoi nous choisir ?",
    quickInfo1: "Chiots suivis et socialisés",
    quickInfo2: "Réservation en ligne simple",
    quickInfo3: "Service client réactif et humain",
    varietiesTitle: "Choisissez votre type de teckel",
    varietiesSubtitle:
      "Nous proposons plusieurs profils de chiots teckels selon la taille, le pelage et le tempérament.",
    variety1Title: "Teckel Standard",
    variety1Text:
      "Format classique, très affectueux et excellent compagnon de famille.",
    variety2Title: "Teckel Nain/Miniature",
    variety2Text:
      "Petit gabarit, vif et joueur, idéal pour un foyer actif.",
    variety3Title: "Poil Court / Long / Dur",
    variety3Text:
      "Différentes textures de pelage pour correspondre à vos préférences.",
    locationLabel: "Localisation :",
    locationValue: "Heugnes, Lyon, France",
    puppiesTitle: "Nos chiots teckels",
    puppiesSubtitle: "Consultez les profils et la disponibilité en temps réel.",
    filterSex: "Filtrer par sexe",
    filterStatus: "Filtrer par statut",
    all: "Tous",
    male: "Mâle",
    female: "Femelle",
    availableCountLabel: "Chiots disponibles :",
    managePhotosTitle: "Gestion des photos des chiots",
    managePhotosSubtitle:
      "Ajoutez une URL photo pour un chiot ou supprimez la dernière photo ajoutée.",
    choosePuppyToManage: "Choisir le chiot à modifier",
    photoUrlLabel: "URL de la photo",
    photoUploadLabel: "Ou importer une photo (ordinateur)",
    photoPlaceholder: "https://...",
    addPhoto: "Ajouter la photo",
    removePhoto: "Supprimer la dernière photo",
    photoAdded: "Photo ajoutée avec succès.",
    photoRemoved: "Dernière photo supprimée avec succès.",
    photoRequired: "Veuillez saisir une URL photo valide.",
    photoMinLimit: "Un chiot doit avoir au moins une photo.",
    choosePuppyError: "Veuillez choisir un chiot.",
    photoTooLarge: "Image trop volumineuse (max 5 MB).",
    reserveTitle: "Réserver un chiot",
    reserveDescription:
      "Sélectionnez un chiot disponible et soumettez votre demande de réservation. Nous vous contacterons rapidement.",
    paymentNote:
      "Modalités de paiement: après validation de la réservation, notre équipe vous contacte par téléphone/email pour finaliser les détails.",
    reservationFormTitle: "Formulaire de réservation",
    fullName: "Nom complet",
    email: "Email",
    phone: "Téléphone",
    choosePuppy: "Choisir un chiot",
    message: "Message",
    reserveNow: "Réserver maintenant",
    contactTitle: "Contact direct",
    contactSubtitle: "Une question ? Ecrivez-nous ou appelez-nous.",
    phoneLabel: "Téléphone :",
    addressLabel: "Adresse :",
    contactFormTitle: "Envoyer un message",
    sendMessage: "Envoyer",
    footerText: "Elevage professionnel de teckels - Qualité, passion et confiance.",
    available: "Disponible",
    reserved: "Réservé",
    selectDefault: "-- Choisir un chiot disponible --",
    reserveSuccess:
      "Demande envoyée avec succès. Nous vous contacterons pour les modalités de paiement.",
    reserveError: "Ce chiot est déjà réservé. Veuillez en choisir un autre.",
    contactSuccess:
      "Message envoyé. Votre application email va s'ouvrir pour finaliser l'envoi.",
    contactError: "Veuillez remplir correctement tous les champs.",
  },
  en: {
    heroTag: "Premium breeding in France",
    heroTitle: "Adopt your dachshund puppy with confidence",
    heroDescription:
      "We offer dachshund puppies from different lines, with vet follow-up, health booklet and personalized support.",
    viewPuppies: "View puppies",
    contactUs: "Contact us",
    quickInfoTitle: "Why choose us?",
    quickInfo1: "Healthy and socialized puppies",
    quickInfo2: "Simple online reservation",
    quickInfo3: "Friendly, responsive support",
    varietiesTitle: "Choose your dachshund type",
    varietiesSubtitle:
      "We offer several dachshund puppy profiles by size, coat and temperament.",
    variety1Title: "Standard Dachshund",
    variety1Text: "Classic size, very affectionate and great for families.",
    variety2Title: "Miniature Dachshund",
    variety2Text: "Small size, lively and playful, ideal for active homes.",
    variety3Title: "Short / Long / Wire Hair",
    variety3Text:
      "Different coat textures so you can choose your favorite style.",
    locationLabel: "Location:",
    locationValue: "Heugnes, Lyon, France",
    puppiesTitle: "Our dachshund puppies",
    puppiesSubtitle: "Check profiles and real-time availability.",
    filterSex: "Filter by sex",
    filterStatus: "Filter by status",
    all: "All",
    male: "Male",
    female: "Female",
    availableCountLabel: "Available puppies:",
    managePhotosTitle: "Puppy photo management",
    managePhotosSubtitle:
      "Add a photo URL for a puppy or remove the last added photo.",
    choosePuppyToManage: "Choose puppy to edit",
    photoUrlLabel: "Photo URL",
    photoUploadLabel: "Or upload a photo (computer)",
    photoPlaceholder: "https://...",
    addPhoto: "Add photo",
    removePhoto: "Remove last photo",
    photoAdded: "Photo added successfully.",
    photoRemoved: "Last photo removed successfully.",
    photoRequired: "Please enter a valid photo URL.",
    photoMinLimit: "A puppy must keep at least one photo.",
    choosePuppyError: "Please choose a puppy.",
    photoTooLarge: "Image is too large (max 5 MB).",
    reserveTitle: "Reserve a puppy",
    reserveDescription:
      "Select an available puppy and submit your reservation request. We will contact you quickly.",
    paymentNote:
      "Payment terms: after reservation validation, our team contacts you by phone/email to finalize details.",
    reservationFormTitle: "Reservation form",
    fullName: "Full name",
    email: "Email",
    phone: "Phone",
    choosePuppy: "Choose a puppy",
    message: "Message",
    reserveNow: "Reserve now",
    contactTitle: "Direct contact",
    contactSubtitle: "Any question? Write to us or call us.",
    phoneLabel: "Phone:",
    addressLabel: "Address:",
    contactFormTitle: "Send a message",
    sendMessage: "Send",
    footerText: "Professional dachshund breeding - Quality, passion and trust.",
    available: "Available",
    reserved: "Reserved",
    selectDefault: "-- Choose an available puppy --",
    reserveSuccess:
      "Request sent successfully. We will contact you for payment details.",
    reserveError: "This puppy is already reserved. Please choose another one.",
    contactSuccess:
      "Message prepared. Your email app will open to complete sending.",
    contactError: "Please fill all required fields correctly.",
  },
  de: {
    heroTag: "Premium-Zucht in Frankreich",
    heroTitle: "Adoptieren Sie Ihren Dackelwelpen mit Vertrauen",
    heroDescription:
      "Wir bieten Dackelwelpen aus verschiedenen Linien mit tierärztlicher Betreuung, Gesundheitsheft und persönlicher Begleitung.",
    viewPuppies: "Welpen ansehen",
    contactUs: "Kontakt",
    quickInfoTitle: "Warum wir?",
    quickInfo1: "Gesunde und sozialisierte Welpen",
    quickInfo2: "Einfache Online-Reservierung",
    quickInfo3: "Schneller, persönlicher Support",
    locationLabel: "Standort:",
    locationValue: "Heugnes, Lyon, Frankreich",
    puppiesTitle: "Unsere Dackelwelpen",
    puppiesSubtitle: "Profile und Verfügbarkeit in Echtzeit.",
    filterSex: "Nach Geschlecht filtern",
    filterStatus: "Nach Status filtern",
    all: "Alle",
    male: "Männlich",
    female: "Weiblich",
    availableCountLabel: "Verfügbare Welpen:",
    reserveTitle: "Welpen reservieren",
    reserveDescription:
      "Wählen Sie einen verfügbaren Welpen und senden Sie Ihre Reservierungsanfrage.",
    paymentNote:
      "Zahlungsmodalitäten: Nach Bestätigung kontaktieren wir Sie telefonisch oder per E-Mail.",
    reservationFormTitle: "Reservierungsformular",
    fullName: "Vollständiger Name",
    email: "E-Mail",
    phone: "Telefon",
    choosePuppy: "Welpen auswählen",
    message: "Nachricht",
    reserveNow: "Jetzt reservieren",
    contactTitle: "Direkter Kontakt",
    contactSubtitle: "Fragen? Schreiben oder rufen Sie uns an.",
    phoneLabel: "Telefon:",
    addressLabel: "Adresse:",
    contactFormTitle: "Nachricht senden",
    sendMessage: "Senden",
    footerText: "Professionelle Dackelzucht - Qualität, Leidenschaft und Vertrauen.",
    available: "Verfügbar",
    reserved: "Reserviert",
    selectDefault: "-- Verfügbaren Welpen auswählen --",
    reserveSuccess:
      "Anfrage erfolgreich gesendet. Wir kontaktieren Sie zu den Zahlungsdetails.",
    reserveError: "Dieser Welpe ist bereits reserviert. Bitte wählen Sie einen anderen.",
    contactSuccess:
      "Nachricht vorbereitet. Ihre E-Mail-App wird zum Versenden geöffnet.",
    contactError: "Bitte alle Pflichtfelder korrekt ausfüllen.",
  },
  es: {
    heroTag: "Criadero premium en Francia",
    heroTitle: "Adopta tu cachorro teckel con confianza",
    heroDescription:
      "Ofrecemos cachorros teckel de diferentes líneas, con seguimiento veterinario y acompañamiento personalizado.",
    viewPuppies: "Ver cachorros",
    contactUs: "Contactarnos",
    quickInfoTitle: "¿Por qué elegirnos?",
    quickInfo1: "Cachorros sanos y socializados",
    quickInfo2: "Reserva online sencilla",
    quickInfo3: "Atención rápida y cercana",
    locationLabel: "Ubicación:",
    locationValue: "Heugnes, Lyon, Francia",
    puppiesTitle: "Nuestros cachorros teckel",
    puppiesSubtitle: "Consulta perfiles y disponibilidad en tiempo real.",
    filterSex: "Filtrar por sexo",
    filterStatus: "Filtrar por estado",
    all: "Todos",
    male: "Macho",
    female: "Hembra",
    availableCountLabel: "Cachorros disponibles:",
    reserveTitle: "Reservar un cachorro",
    reserveDescription:
      "Selecciona un cachorro disponible y envía tu solicitud de reserva.",
    paymentNote:
      "Modalidades de pago: tras validar la reserva, nuestro equipo te contacta por teléfono/email.",
    reservationFormTitle: "Formulario de reserva",
    fullName: "Nombre completo",
    email: "Correo",
    phone: "Teléfono",
    choosePuppy: "Elegir cachorro",
    message: "Mensaje",
    reserveNow: "Reservar ahora",
    contactTitle: "Contacto directo",
    contactSubtitle: "¿Preguntas? Escríbenos o llámanos.",
    phoneLabel: "Teléfono:",
    addressLabel: "Dirección:",
    contactFormTitle: "Enviar mensaje",
    sendMessage: "Enviar",
    footerText: "Criadero profesional de teckel - Calidad, pasión y confianza.",
    available: "Disponible",
    reserved: "Reservado",
    selectDefault: "-- Elegir un cachorro disponible --",
    reserveSuccess:
      "Solicitud enviada con éxito. Te contactaremos para los detalles de pago.",
    reserveError: "Este cachorro ya está reservado. Elige otro.",
    contactSuccess:
      "Mensaje preparado. Se abrirá tu aplicación de correo para enviarlo.",
    contactError: "Completa correctamente todos los campos obligatorios.",
  },
  nl: {
    heroTag: "Premium fokkerij in Frankrijk",
    heroTitle: "Adopteer uw teckelpup met vertrouwen",
    heroDescription:
      "Wij bieden teckelpups van verschillende lijnen met dierenartsopvolging en persoonlijke begeleiding.",
    viewPuppies: "Bekijk pups",
    contactUs: "Contact",
    quickInfoTitle: "Waarom ons kiezen?",
    quickInfo1: "Gezonde en gesocialiseerde pups",
    quickInfo2: "Eenvoudige online reservering",
    quickInfo3: "Snelle en vriendelijke service",
    locationLabel: "Locatie:",
    locationValue: "Heugnes, Lyon, Frankrijk",
    puppiesTitle: "Onze teckelpups",
    puppiesSubtitle: "Bekijk profielen en realtime beschikbaarheid.",
    filterSex: "Filter op geslacht",
    filterStatus: "Filter op status",
    all: "Alle",
    male: "Reu",
    female: "Teef",
    availableCountLabel: "Beschikbare pups:",
    reserveTitle: "Pup reserveren",
    reserveDescription:
      "Selecteer een beschikbare pup en verstuur uw reserveringsaanvraag.",
    paymentNote:
      "Betaling: na bevestiging nemen wij contact op via telefoon/e-mail.",
    reservationFormTitle: "Reserveringsformulier",
    fullName: "Volledige naam",
    email: "E-mail",
    phone: "Telefoon",
    choosePuppy: "Kies een pup",
    message: "Bericht",
    reserveNow: "Nu reserveren",
    contactTitle: "Direct contact",
    contactSubtitle: "Vragen? Schrijf of bel ons.",
    phoneLabel: "Telefoon:",
    addressLabel: "Adres:",
    contactFormTitle: "Bericht versturen",
    sendMessage: "Versturen",
    footerText: "Professionele teckelfokkerij - Kwaliteit, passie en vertrouwen.",
    available: "Beschikbaar",
    reserved: "Gereserveerd",
    selectDefault: "-- Kies een beschikbare pup --",
    reserveSuccess:
      "Aanvraag succesvol verzonden. Wij nemen contact op over de betaling.",
    reserveError: "Deze pup is al gereserveerd. Kies een andere.",
    contactSuccess:
      "Bericht voorbereid. Uw e-mailapp wordt geopend om te verzenden.",
    contactError: "Vul alle verplichte velden correct in.",
  },
  pt: {
    heroTag: "Canil premium na França",
    heroTitle: "Adote seu filhote teckel com confiança",
    heroDescription:
      "Oferecemos filhotes teckel de diferentes linhagens, com acompanhamento veterinário e suporte personalizado.",
    viewPuppies: "Ver filhotes",
    contactUs: "Contactar",
    quickInfoTitle: "Por que nos escolher?",
    quickInfo1: "Filhotes saudáveis e socializados",
    quickInfo2: "Reserva online simples",
    quickInfo3: "Atendimento rápido e humano",
    locationLabel: "Localização:",
    locationValue: "Heugnes, Lyon, França",
    puppiesTitle: "Nossos filhotes teckel",
    puppiesSubtitle: "Veja perfis e disponibilidade em tempo real.",
    filterSex: "Filtrar por sexo",
    filterStatus: "Filtrar por status",
    all: "Todos",
    male: "Macho",
    female: "Fêmea",
    availableCountLabel: "Filhotes disponíveis:",
    reserveTitle: "Reservar um filhote",
    reserveDescription:
      "Selecione um filhote disponível e envie seu pedido de reserva.",
    paymentNote:
      "Condições de pagamento: após validar a reserva, nossa equipe entra em contato por telefone/e-mail.",
    reservationFormTitle: "Formulário de reserva",
    fullName: "Nome completo",
    email: "E-mail",
    phone: "Telefone",
    choosePuppy: "Escolher filhote",
    message: "Mensagem",
    reserveNow: "Reservar agora",
    contactTitle: "Contato direto",
    contactSubtitle: "Tem dúvidas? Escreva ou ligue para nós.",
    phoneLabel: "Telefone:",
    addressLabel: "Endereço:",
    contactFormTitle: "Enviar mensagem",
    sendMessage: "Enviar",
    footerText: "Canil profissional de teckel - Qualidade, paixão e confiança.",
    available: "Disponível",
    reserved: "Reservado",
    selectDefault: "-- Escolha um filhote disponível --",
    reserveSuccess:
      "Pedido enviado com sucesso. Entraremos em contato sobre o pagamento.",
    reserveError: "Este filhote já está reservado. Escolha outro.",
    contactSuccess:
      "Mensagem preparada. Seu app de e-mail será aberto para enviar.",
    contactError: "Preencha todos os campos obrigatórios corretamente.",
  },
};

let currentLanguage = localStorage.getItem(LANGUAGE_KEY) || "fr";

function getPuppies() {
  const version = localStorage.getItem(PUPPIES_VERSION_KEY);
  const stored = localStorage.getItem(PUPPIES_KEY);
  if (!stored || version !== PUPPIES_VERSION) {
    localStorage.setItem(PUPPIES_KEY, JSON.stringify(defaultPuppies));
    localStorage.setItem(PUPPIES_VERSION_KEY, PUPPIES_VERSION);
    return [...defaultPuppies];
  }
  try {
    const parsed = JSON.parse(stored);
    const normalized = parsed.map((item) => ({
      ...item,
      photos:
        Array.isArray(item.photos) && item.photos.length > 0
          ? item.photos
          : item.image
          ? [item.image]
          : [],
    }));

    const isValidTeckelCatalog =
      Array.isArray(parsed) &&
      parsed.length >= 8 &&
      normalized.every(
        (item) =>
          item.breed === "Teckel" &&
          Array.isArray(item.photos) &&
          item.photos.length > 0
      );
    if (!isValidTeckelCatalog) {
      localStorage.setItem(PUPPIES_KEY, JSON.stringify(defaultPuppies));
      localStorage.setItem(PUPPIES_VERSION_KEY, PUPPIES_VERSION);
      return [...defaultPuppies];
    }
    return normalized;
  } catch (_error) {
    localStorage.setItem(PUPPIES_KEY, JSON.stringify(defaultPuppies));
    localStorage.setItem(PUPPIES_VERSION_KEY, PUPPIES_VERSION);
    return [...defaultPuppies];
  }
}

function setPuppies(puppies) {
  localStorage.setItem(PUPPIES_KEY, JSON.stringify(puppies));
}

function setLanguage(lang) {
  currentLanguage = translations[lang] ? lang : "fr";
  localStorage.setItem(LANGUAGE_KEY, currentLanguage);
  document.documentElement.lang = currentLanguage;
}

function t(key) {
  return translations[currentLanguage][key] || translations.fr[key] || key;
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    node.textContent = t(key);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.getAttribute("data-i18n-placeholder");
    node.setAttribute("placeholder", t(key));
  });
}

function renderPuppies() {
  const puppiesGrid = document.getElementById("puppiesGrid");
  const puppies = getPuppies();
  const sexFilter = document.getElementById("sexFilter").value;
  const statusFilter = document.getElementById("statusFilter").value;

  const filteredPuppies = puppies.filter((puppy) => {
    const matchSex = sexFilter === "all" ? true : puppy.sex === sexFilter;
    const matchStatus =
      statusFilter === "all"
        ? true
        : statusFilter === "available"
        ? puppy.available
        : !puppy.available;
    return matchSex && matchStatus;
  });

  const availableCount = puppies.filter((puppy) => puppy.available).length;
  document.getElementById("availableCount").textContent = String(availableCount);

  const toThumbs = (photos) =>
    photos
      .slice(0, 3)
      .map(
        (photo, idx) =>
          `<img class="puppy-thumb" src="${photo}" alt="Photo ${idx + 1}" loading="lazy" />`
      )
      .join("");

  puppiesGrid.innerHTML = filteredPuppies
    .map(
      (puppy) => `
      <article class="puppy-card">
        <img class="puppy-photo" src="${puppy.photos[0]}" alt="${puppy.name}" loading="lazy" />
        <div class="puppy-thumbs">
          ${toThumbs(puppy.photos)}
        </div>
        <div class="puppy-body">
          <h3>${puppy.name}</h3>
          <p class="puppy-meta">
            <span>${puppy.coat}</span>
            <span>${puppy.id}</span>
          </p>
          <p class="puppy-meta">
            <span>${puppy.sex}</span>
            <span>${puppy.age}</span>
          </p>
          <span class="status ${puppy.available ? "available" : "reserved"}">
            ${puppy.available ? t("available") : t("reserved")}
          </span>
        </div>
      </article>
    `
    )
    .join("");
}

function renderPuppySelect() {
  const select = document.getElementById("puppySelect");
  const puppies = getPuppies();
  const availablePuppies = puppies.filter((puppy) => puppy.available);

  select.innerHTML = `
    <option value="">${t("selectDefault")}</option>
    ${availablePuppies
      .map(
        (puppy) =>
          `<option value="${puppy.id}">${puppy.name} - ${puppy.coat} (${puppy.id})</option>`
      )
      .join("")}
  `;
}

function renderPhotoManagerPuppySelect() {
  const select = document.getElementById("photoPuppySelect");
  const puppies = getPuppies();
  select.innerHTML = `
    <option value="">${t("choosePuppy")}</option>
    ${puppies.map((puppy) => `<option value="${puppy.id}">${puppy.name} (${puppy.id})</option>`).join("")}
  `;
}

function saveReservation(reservation) {
  const existing = JSON.parse(localStorage.getItem(RESERVATIONS_KEY) || "[]");
  existing.push({
    ...reservation,
    createdAt: new Date().toISOString(),
  });
  localStorage.setItem(RESERVATIONS_KEY, JSON.stringify(existing));
}

function initReservationForm() {
  const form = document.getElementById("reservationForm");
  const feedback = document.getElementById("reservationFeedback");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const reservation = Object.fromEntries(formData.entries());
    const puppies = getPuppies();
    const puppy = puppies.find((item) => item.id === reservation.puppyId);

    if (!puppy || !puppy.available) {
      feedback.textContent = t("reserveError");
      feedback.className = "feedback error";
      renderPuppySelect();
      return;
    }

    puppy.available = false;
    setPuppies(puppies);
    saveReservation(reservation);
    renderPuppies();
    renderPuppySelect();
    form.reset();
    feedback.textContent = t("reserveSuccess");
    feedback.className = "feedback ok";
  });
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("contactFeedback");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    if (!data.name || !data.email || !data.message) {
      feedback.textContent = t("contactError");
      feedback.className = "feedback error";
      return;
    }

    const subject = encodeURIComponent(`Nouveau message - ${data.name}`);
    const body = encodeURIComponent(
      `Nom: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    );
    window.location.href = `mailto:etablissementcanincomp@proton.me?subject=${subject}&body=${body}`;

    feedback.textContent = t("contactSuccess");
    feedback.className = "feedback ok";
    form.reset();
  });
}

function initLanguageSelector() {
  const languageSelect = document.getElementById("languageSelect");
  languageSelect.value = currentLanguage;
  languageSelect.addEventListener("change", (event) => {
    setLanguage(event.target.value);
    applyTranslations();
    initFilterLabels();
    renderPuppies();
    renderPuppySelect();
    renderPhotoManagerPuppySelect();
  });
}

function initFilters() {
  const sexFilter = document.getElementById("sexFilter");
  const statusFilter = document.getElementById("statusFilter");
  sexFilter.addEventListener("change", renderPuppies);
  statusFilter.addEventListener("change", renderPuppies);
}

function initPhotoManager() {
  const form = document.getElementById("photoManagerForm");
  const removeBtn = document.getElementById("removePhotoBtn");
  const feedback = document.getElementById("photoManagerFeedback");
  const urlInput = document.getElementById("photoUrlInput");
  const fileInput = document.getElementById("photoFileInput");
  const preview = document.getElementById("photoPreview");
  const puppySelect = document.getElementById("photoPuppySelect");
  let uploadedPhotoDataUrl = "";

  const MAX_UPLOAD_SIZE = 5 * 1024 * 1024;

  const setFeedback = (message, ok) => {
    feedback.textContent = message;
    feedback.className = ok ? "feedback ok" : "feedback error";
  };

  const setPreview = (src) => {
    if (!src) {
      preview.style.display = "none";
      preview.removeAttribute("src");
      return;
    }
    preview.src = src;
    preview.style.display = "block";
  };

  const fileToDataUrl = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result));
      reader.onerror = () => reject(new Error("read_error"));
      reader.readAsDataURL(file);
    });

  fileInput.addEventListener("change", async () => {
    const file = fileInput.files && fileInput.files[0];
    uploadedPhotoDataUrl = "";
    if (!file) {
      setPreview("");
      return;
    }
    if (file.size > MAX_UPLOAD_SIZE) {
      fileInput.value = "";
      setPreview("");
      setFeedback(t("photoTooLarge"), false);
      return;
    }
    try {
      uploadedPhotoDataUrl = await fileToDataUrl(file);
      setPreview(uploadedPhotoDataUrl);
      setFeedback("", true);
    } catch (_error) {
      setPreview("");
      setFeedback(t("photoRequired"), false);
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const puppyId = puppySelect.value;
    const photoUrl = urlInput.value.trim();
    const photoSource = uploadedPhotoDataUrl || photoUrl;
    if (!puppyId) {
      setFeedback(t("choosePuppyError"), false);
      return;
    }
    if (!photoSource) {
      setFeedback(t("photoRequired"), false);
      return;
    }
    if (!uploadedPhotoDataUrl && !/^https?:\/\//i.test(photoUrl)) {
      setFeedback(t("photoRequired"), false);
      return;
    }

    const puppies = getPuppies();
    const puppy = puppies.find((item) => item.id === puppyId);
    if (!puppy) {
      setFeedback(t("choosePuppyError"), false);
      return;
    }
    puppy.photos.push(photoSource);
    setPuppies(puppies);
    renderPuppies();
    urlInput.value = "";
    fileInput.value = "";
    uploadedPhotoDataUrl = "";
    setPreview("");
    setFeedback(t("photoAdded"), true);
  });

  removeBtn.addEventListener("click", () => {
    const puppyId = puppySelect.value;
    if (!puppyId) {
      setFeedback(t("choosePuppyError"), false);
      return;
    }
    const puppies = getPuppies();
    const puppy = puppies.find((item) => item.id === puppyId);
    if (!puppy) {
      setFeedback(t("choosePuppyError"), false);
      return;
    }
    if (puppy.photos.length <= 1) {
      setFeedback(t("photoMinLimit"), false);
      return;
    }
    puppy.photos.pop();
    setPuppies(puppies);
    renderPuppies();
    setFeedback(t("photoRemoved"), true);
  });
}

function initFilterLabels() {
  const sexFilter = document.getElementById("sexFilter");
  const statusFilter = document.getElementById("statusFilter");
  sexFilter.options[0].textContent = t("all");
  sexFilter.options[1].textContent = t("male");
  sexFilter.options[2].textContent = t("female");
  statusFilter.options[0].textContent = t("all");
  statusFilter.options[1].textContent = t("available");
  statusFilter.options[2].textContent = t("reserved");
}

function init() {
  setLanguage(currentLanguage);
  applyTranslations();
  initFilterLabels();
  renderPuppies();
  renderPuppySelect();
  renderPhotoManagerPuppySelect();
  initFilters();
  initPhotoManager();
  initReservationForm();
  initContactForm();
  initLanguageSelector();
  document.getElementById("year").textContent = new Date().getFullYear();
}

init();
