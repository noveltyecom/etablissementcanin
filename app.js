const RESERVATIONS_KEY = "ecc_reservations";
const LANGUAGE_KEY = "ecc_language";

const PAGE_ORDER = [
  "accueil",
  "chiots",
  "transport",
  "kit",
  "about",
  "rules",
  "contact",
];

const translations = {
  fr: {
    brandSubtitle: "Maison d'élevage de teckels",
    navHome: "Accueil",
    navPuppies: "Nos chiots",
    navTransport: "Transport",
    navStarterKit: "Kit de départ",
    navAbout: "À propos",
    navRules: "Réservation & règlement",
    navContact: "Contact",
    adminButton: "Espace éleveur",
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
    aboutTitle: "ETABLISSEMENT CANIN & COMPAGNIE",
    aboutSubtitle:
      "Elevage familial de chiots teckels, sélectionnés pour leur santé, leur caractère et leur beauté.",
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
    transportTitle: "Options de transport pour votre chiot",
    transportIntro:
      "Nous organisons le départ de votre chiot teckel en toute sécurité, dans le respect de son bien-être.",
    transportOption1:
      "Retrait sur place à l'élevage (sur rendez-vous uniquement).",
    transportOption2:
      "Livraison en personne dans certaines zones, à définir ensemble.",
    transportOption3:
      "Conseils pour organiser votre propre transport (train, voiture, avion).",
    transportAdviceTitle: "Conseils pour le voyage",
    transportAdviceText:
      "Avant le départ, nous préparons votre chiot (pause, hydratation, nourriture adaptée) et nous vous donnons toutes les recommandations pour un trajet serein.",
    kitTitle: "Kit de départ de nos chiots",
    kitSubtitle:
      "Chaque chiot part avec un kit complet pour faciliter son arrivée dans votre foyer.",
    kitHealthTitle: "Santé & documents",
    kitHealthText:
      "Carnet de santé à jour, puce électronique, certificats nécessaires et suivi vétérinaire.",
    kitFoodTitle: "Alimentation",
    kitFoodText:
      "Ration de nourriture pour les premiers jours et indications claires sur la transition alimentaire.",
    kitComfortTitle: "Confort & repères",
    kitComfortText:
      "Petite couverture ou jouet portant l’odeur de la fratrie pour rassurer le chiot.",
    rulesTitle: "Réservation & règlement",
    rulesIntro:
      "Pour garantir le sérieux de chaque adoption, nous appliquons quelques règles simples.",
    rule1: "Un entretien préalable est réalisé afin de valider l’adéquation du chiot avec votre mode de vie.",
    rule2: "Un acompte de réservation peut être demandé pour bloquer un chiot.",
    rule3: "Le règlement complet s’effectue selon les modalités convenues ensemble (virement, espèces, etc.).",
    rule4: "Tout chiot réservé reste sous notre responsabilité jusqu’au jour de son départ.",
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
    whatsappLabel: "WhatsApp :",
    emailLabel: "Email :",
    addressLabel: "Adresse :",
    contactFormTitle: "Envoyer un message",
    sendMessage: "Envoyer",
    footerText: "Elevage professionnel de teckels - Qualité, passion et confiance.",
    available: "Disponible",
    reserved: "Réservé",
    selectDefault: "-- Choisir un chiot disponible --",
    reserveSuccess:
      "Demande envoyée avec succès. Nous vous contacterons pour les modalités de paiement. Pour afficher un chiot comme réservé, modifiez available: false dans data/puppies.js puis actualisez.",
    reserveError: "Ce chiot est déjà réservé. Veuillez en choisir un autre.",
    contactSuccess:
      "Message envoyé. Votre application email va s'ouvrir pour finaliser l'envoi.",
    contactError: "Veuillez remplir correctement tous les champs.",
    reviewsTitle: "Avis de nos familles",
    reviewsSubtitle: "Des retours vérifiés de clients satisfaits",
    verifiedLabel: "Vérifié",
    review1Quote:
      "Excellent suivi et une communication au top. Notre teckel est arrivé serein et s’est très vite adapté.",
    review1Name: "Camille R.",
    review1Location: "Heugnes",
    review2Quote:
      "Très pro du premier contact jusqu’au départ. Photos, informations et kit de départ : tout était clair.",
    review2Name: "Julien & Sarah",
    review2Location: "Lyon",
    review3Quote:
      "Réservation simple, transparence totale sur la disponibilité. On recommande ETABLISSEMENT CANIN & COMPAGNIE.",
    review3Name: "Nadia M.",
    review3Location: "Tours",
    depositLawNB:
      "NB : Conformément à la réglementation française applicable aux réservations et aux conditions de notre élevage, lorsqu'un acompte (ou des arrhes) a été versé pour réserver un chiot teckel déterminé et que ce chiot n'est plus disponible au moment de la finalisation (réservation antérieure, indisponibilité du chiot, etc.), l'acompte versé ne pourra pas être remboursé, sauf accord écrit et exprès de l'éleveur.",
    depositLawFormal:
      "Mention légale — Acompte et arrhes : En application du droit français, notamment les règles relatives aux arrhes prévues par le Code civil (engagement confirmé par versement d'une somme à la réservation), les sommes versées à titre d'acompte ou d'arrhes confirment la réservation du chiot désigné. Si le chiot initialement choisi n'est plus disponible après encaissement de l'acompte, pour une cause non imputable à l'acquéreur, l'acompte reste acquis à l'éleveur et ne donne pas lieu à remboursement, sauf stipulation contraire écrite convenue entre les parties.",
  },
  en: {
    brandSubtitle: "Dachshund breeding home",
    navHome: "Home",
    navPuppies: "Our puppies",
    navTransport: "Transport",
    navStarterKit: "Starter kit",
    navAbout: "About us",
    navRules: "Reservation & rules",
    navContact: "Contact",
    adminButton: "Breeder area",
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
    aboutTitle: "ETABLISSEMENT CANIN & COMPAGNIE",
    aboutSubtitle:
      "Family dachshund breeding, focused on health, temperament and beauty.",
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
    transportTitle: "Transport options for your puppy",
    transportIntro:
      "We organize your dachshund puppy’s journey in complete safety, with respect for their wellbeing.",
    transportOption1:
      "Pick-up at the breeding home (by appointment only).",
    transportOption2:
      "Personal delivery in some areas, to be discussed together.",
    transportOption3:
      "Advice to organize your own transport (train, car, plane).",
    transportAdviceTitle: "Travel advice",
    transportAdviceText:
      "Before departure we prepare your puppy (break, water, adapted food) and provide guidelines for a smooth trip.",
    kitTitle: "Our puppy starter kit",
    kitSubtitle:
      "Each puppy leaves with a complete kit to help their arrival in your home.",
    kitHealthTitle: "Health & documents",
    kitHealthText:
      "Health booklet, microchip, required certificates and veterinary follow-up.",
    kitFoodTitle: "Food",
    kitFoodText:
      "Food for the first days and clear instructions about diet transition.",
    kitComfortTitle: "Comfort & familiar scent",
    kitComfortText:
      "Small blanket or toy with the litter’s scent to reassure the puppy.",
    rulesTitle: "Reservation & payment rules",
    rulesIntro:
      "To keep every adoption serious, we apply a few simple rules.",
    rule1: "A short call/meeting ensures the puppy matches your lifestyle.",
    rule2: "A deposit may be requested to reserve a puppy.",
    rule3: "Full payment is made according to the agreed method (bank transfer, cash, etc.).",
    rule4: "Any reserved puppy stays under our responsibility until departure.",
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
    whatsappLabel: "WhatsApp:",
    emailLabel: "Email:",
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
    reviewsTitle: "Reviews from our families",
    reviewsSubtitle: "Verified feedback from satisfied customers",
    verifiedLabel: "Verified",
    review1Quote:
      "Great follow-up and excellent communication. Our dachshund arrived calm and adapted quickly.",
    review1Name: "Camille R.",
    review1Location: "Heugnes",
    review2Quote:
      "Very professional from the first contact to departure. Photos, information and starter kit were clear.",
    review2Name: "Julien & Sarah",
    review2Location: "Lyon",
    review3Quote:
      "Easy reservation and full transparency about availability. We recommend ETABLISSEMENT CANIN & COMPAGNIE.",
    review3Name: "Nadia M.",
    review3Location: "Tours",
    depositLawNB:
      "NB: Under applicable French reservation rules and our breeding terms, when a deposit has been paid for a specific dachshund puppy and that puppy is no longer available at finalization, the deposit is non-refundable unless expressly agreed in writing by the breeder.",
    depositLawFormal:
      "Legal notice — Deposit and earnest money: Under French law, including civil code principles on earnest money, amounts paid to confirm a reservation bind the booking of the selected puppy. If the initially selected puppy is no longer available after deposit payment for reasons not attributable to the buyer, the deposit remains due to the breeder and is not refundable unless otherwise agreed in writing.",
  },
  de: {
    brandSubtitle: "Dackel-Zuchtstätte",
    navHome: "Start",
    navPuppies: "Unsere Welpen",
    navTransport: "Transport",
    navStarterKit: "Starterpaket",
    navAbout: "Über uns",
    navRules: "Reservierung & Regeln",
    navContact: "Kontakt",
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
    transportTitle: "Transportoptionen für Ihren Welpen",
    transportIntro:
      "Wir organisieren die sichere Abreise Ihres Dackelwelpen mit Fokus auf sein Wohlbefinden.",
    transportOption1: "Abholung bei der Zuchtstätte (nur nach Termin).",
    transportOption2:
      "Persönliche Lieferung in bestimmten Regionen nach Absprache.",
    transportOption3:
      "Tipps für Ihren eigenen Transport (Zug, Auto, Flug).",
    transportAdviceTitle: "Reisehinweise",
    transportAdviceText:
      "Vor der Abreise bereiten wir den Welpen optimal vor und geben klare Empfehlungen für eine ruhige Reise.",
    kitTitle: "Unser Starterpaket",
    kitSubtitle:
      "Jeder Welpe erhält ein vollständiges Paket für einen guten Start im neuen Zuhause.",
    kitHealthTitle: "Gesundheit & Unterlagen",
    kitHealthText:
      "Aktuelles Gesundheitsheft, Chip, notwendige Zertifikate und tierärztliche Nachsorge.",
    kitFoodTitle: "Ernährung",
    kitFoodText:
      "Futter für die ersten Tage und klare Hinweise zur Futterumstellung.",
    kitComfortTitle: "Komfort & Orientierung",
    kitComfortText:
      "Kleine Decke oder Spielzeug mit Geruch der Geschwister zur Beruhigung.",
    rulesTitle: "Reservierung & Zahlungsregeln",
    rulesIntro:
      "Für eine seriöse Adoption gelten bei uns einige einfache Regeln.",
    rule1:
      "Ein kurzes Gespräch stellt sicher, dass der Welpe zu Ihrem Lebensstil passt.",
    rule2: "Eine Anzahlung kann zur Reservierung erforderlich sein.",
    rule3:
      "Die vollständige Zahlung erfolgt nach gemeinsam vereinbarten Bedingungen.",
    rule4:
      "Ein reservierter Welpe bleibt bis zur Abreise in unserer Verantwortung.",
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
    whatsappLabel: "WhatsApp:",
    emailLabel: "E-Mail:",
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
    reviewsTitle: "Bewertungen unserer Familien",
    reviewsSubtitle: "Verifizierte Rückmeldungen zufriedener Kunden",
    verifiedLabel: "Verifiziert",
    review1Quote:
      "Hervorragende Betreuung und sehr klare Kommunikation. Unser Dackel hat sich schnell eingelebt.",
    review1Name: "Camille R.",
    review1Location: "Heugnes",
    review2Quote:
      "Vom ersten Kontakt bis zur Abgabe sehr professionell. Alles war transparent und gut erklärt.",
    review2Name: "Julien & Sarah",
    review2Location: "Lyon",
    review3Quote:
      "Einfache Reservierung und klare Verfügbarkeiten. Sehr empfehlenswerte Zuchtstätte.",
    review3Name: "Nadia M.",
    review3Location: "Tours",
    depositLawNB:
      "NB: Gemäß den geltenden französischen Reservierungsregeln und unseren Zuchtbedingungen ist eine Anzahlung bei Nichtverfügbarkeit des reservierten Welpen grundsätzlich nicht erstattungsfähig, sofern nicht schriftlich anders vereinbart.",
    depositLawFormal:
      "Rechtlicher Hinweis — Anzahlung/Arrhes: Nach französischem Recht bestätigt eine gezahlte Anzahlung die Reservierung des ausgewählten Welpen. Ist der ursprünglich gewählte Welpe nach Zahlungseingang nicht mehr verfügbar, bleibt die Anzahlung beim Züchter, sofern nichts anderes schriftlich vereinbart wurde.",
  },
  es: {
    brandSubtitle: "Criadero de teckel",
    navHome: "Inicio",
    navPuppies: "Nuestros cachorros",
    navTransport: "Transporte",
    navStarterKit: "Kit inicial",
    navAbout: "Sobre nosotros",
    navRules: "Reserva y reglas",
    navContact: "Contacto",
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
    transportTitle: "Opciones de transporte para tu cachorro",
    transportIntro:
      "Organizamos la salida de tu teckel con total seguridad y bienestar.",
    transportOption1: "Recogida en el criadero (solo con cita previa).",
    transportOption2:
      "Entrega personal en algunas zonas, según acuerdo.",
    transportOption3:
      "Consejos para organizar tu propio transporte (tren, coche, avión).",
    transportAdviceTitle: "Consejos de viaje",
    transportAdviceText:
      "Antes de la salida preparamos al cachorro y te damos recomendaciones para un viaje tranquilo.",
    kitTitle: "Kit inicial de nuestros cachorros",
    kitSubtitle:
      "Cada cachorro se entrega con un kit completo para facilitar su llegada a casa.",
    kitHealthTitle: "Salud y documentos",
    kitHealthText:
      "Cartilla sanitaria al día, microchip, certificados necesarios y seguimiento veterinario.",
    kitFoodTitle: "Alimentación",
    kitFoodText:
      "Comida para los primeros días e indicaciones claras para la transición.",
    kitComfortTitle: "Comodidad y referencia",
    kitComfortText:
      "Manta o juguete con olor de la camada para tranquilizar al cachorro.",
    rulesTitle: "Reserva y normas de pago",
    rulesIntro:
      "Para mantener adopciones responsables, aplicamos reglas simples.",
    rule1:
      "Realizamos una conversación previa para validar que el cachorro encaja con tu estilo de vida.",
    rule2: "Puede solicitarse una señal para bloquear la reserva.",
    rule3:
      "El pago completo se realiza según las condiciones acordadas juntos.",
    rule4:
      "El cachorro reservado permanece bajo nuestra responsabilidad hasta su salida.",
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
    whatsappLabel: "WhatsApp:",
    emailLabel: "Correo:",
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
    reviewsTitle: "Opiniones de nuestras familias",
    reviewsSubtitle: "Valoraciones verificadas de clientes satisfechos",
    verifiedLabel: "Verificado",
    review1Quote:
      "Seguimiento excelente y gran comunicación. Nuestro teckel se adaptó muy rápido.",
    review1Name: "Camille R.",
    review1Location: "Heugnes",
    review2Quote:
      "Muy profesionales desde el primer contacto. Todo estuvo claro y bien organizado.",
    review2Name: "Julien & Sarah",
    review2Location: "Lyon",
    review3Quote:
      "Reserva sencilla y total transparencia sobre disponibilidad. Muy recomendable.",
    review3Name: "Nadia M.",
    review3Location: "Tours",
    depositLawNB:
      "NB: Según la normativa francesa aplicable y nuestras condiciones, si se pagó un depósito por un cachorro concreto y este ya no está disponible, el depósito no será reembolsable salvo acuerdo escrito del criador.",
    depositLawFormal:
      "Mención legal — Depósito y arras: Conforme al derecho francés, las cantidades abonadas confirman la reserva del cachorro seleccionado. Si el cachorro inicial ya no está disponible tras el pago del depósito, este no será reembolsado salvo pacto escrito en contrario.",
  },
  nl: {
    brandSubtitle: "Teckel fokkerij",
    navHome: "Home",
    navPuppies: "Onze pups",
    navTransport: "Transport",
    navStarterKit: "Startpakket",
    navAbout: "Over ons",
    navRules: "Reservering & regels",
    navContact: "Contact",
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
    transportTitle: "Transportopties voor uw pup",
    transportIntro:
      "Wij organiseren een veilige verplaatsing van uw teckelpup met focus op welzijn.",
    transportOption1: "Afhalen bij de fokkerij (enkel op afspraak).",
    transportOption2:
      "Persoonlijke levering in bepaalde regio's na overleg.",
    transportOption3:
      "Advies voor eigen transport (trein, auto, vliegtuig).",
    transportAdviceTitle: "Reisadvies",
    transportAdviceText:
      "Voor vertrek bereiden wij de pup goed voor en geven we duidelijke reistips mee.",
    kitTitle: "Ons startpakket",
    kitSubtitle:
      "Elke pup vertrekt met een volledig pakket voor een vlotte start thuis.",
    kitHealthTitle: "Gezondheid & documenten",
    kitHealthText:
      "Gezondheidsboekje, chip, nodige certificaten en veterinaire opvolging.",
    kitFoodTitle: "Voeding",
    kitFoodText:
      "Voeding voor de eerste dagen en duidelijke richtlijnen voor overgang.",
    kitComfortTitle: "Comfort & vertrouwde geur",
    kitComfortText:
      "Kleine deken of speeltje met nestgeur om de pup gerust te stellen.",
    rulesTitle: "Reservering & betalingsregels",
    rulesIntro:
      "Voor een serieuze adoptie hanteren wij enkele eenvoudige regels.",
    rule1:
      "Een voorafgaand gesprek bevestigt dat de pup bij uw levensstijl past.",
    rule2: "Een voorschot kan gevraagd worden om een pup te reserveren.",
    rule3:
      "Volledige betaling gebeurt volgens samen afgesproken voorwaarden.",
    rule4:
      "Een gereserveerde pup blijft onder onze verantwoordelijkheid tot vertrek.",
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
    whatsappLabel: "WhatsApp:",
    emailLabel: "E-mail:",
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
    reviewsTitle: "Ervaringen van onze families",
    reviewsSubtitle: "Geverifieerde beoordelingen van tevreden klanten",
    verifiedLabel: "Geverifieerd",
    review1Quote:
      "Uitstekende opvolging en communicatie. Onze teckel voelde zich snel thuis.",
    review1Name: "Camille R.",
    review1Location: "Heugnes",
    review2Quote:
      "Zeer professioneel van eerste contact tot vertrek. Alles was helder uitgelegd.",
    review2Name: "Julien & Sarah",
    review2Location: "Lyon",
    review3Quote:
      "Eenvoudige reservering en volledige transparantie over beschikbaarheid.",
    review3Name: "Nadia M.",
    review3Location: "Tours",
    depositLawNB:
      "NB: Volgens de Franse regels en onze fokvoorwaarden is een aanbetaling niet terugbetaalbaar wanneer de gereserveerde pup niet meer beschikbaar is, tenzij schriftelijk anders overeengekomen.",
    depositLawFormal:
      "Juridische vermelding — Aanbetaling/arrhes: Onder Frans recht bevestigt een betaalde aanbetaling de reservering van de gekozen pup. Is de oorspronkelijk gekozen pup daarna niet meer beschikbaar, dan wordt de aanbetaling niet terugbetaald, behalve bij schriftelijke andersluidende afspraak.",
  },
  pt: {
    brandSubtitle: "Canil de teckel",
    navHome: "Início",
    navPuppies: "Nossos filhotes",
    navTransport: "Transporte",
    navStarterKit: "Kit inicial",
    navAbout: "Sobre nós",
    navRules: "Reserva e regras",
    navContact: "Contato",
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
    transportTitle: "Opções de transporte para seu filhote",
    transportIntro:
      "Organizamos a saída do seu teckel com segurança e respeito ao bem-estar.",
    transportOption1: "Retirada no canil (somente com agendamento).",
    transportOption2:
      "Entrega pessoal em algumas regiões, conforme combinado.",
    transportOption3:
      "Orientação para transporte próprio (trem, carro, avião).",
    transportAdviceTitle: "Dicas de viagem",
    transportAdviceText:
      "Antes da saída preparamos o filhote e passamos recomendações para uma viagem tranquila.",
    kitTitle: "Kit inicial dos nossos filhotes",
    kitSubtitle:
      "Cada filhote sai com um kit completo para facilitar a adaptação ao novo lar.",
    kitHealthTitle: "Saúde e documentos",
    kitHealthText:
      "Carteira de saúde atualizada, microchip, certificados e acompanhamento veterinário.",
    kitFoodTitle: "Alimentação",
    kitFoodText:
      "Ração para os primeiros dias e orientações claras sobre transição alimentar.",
    kitComfortTitle: "Conforto e referência",
    kitComfortText:
      "Manta ou brinquedo com cheiro da ninhada para tranquilizar o filhote.",
    rulesTitle: "Reserva e regras de pagamento",
    rulesIntro:
      "Para garantir adoções responsáveis, aplicamos regras simples.",
    rule1:
      "Fazemos uma conversa prévia para validar a compatibilidade com seu estilo de vida.",
    rule2: "Pode ser solicitado sinal para bloquear a reserva do filhote.",
    rule3:
      "O pagamento integral é realizado conforme condições acordadas entre as partes.",
    rule4:
      "O filhote reservado permanece sob nossa responsabilidade até o dia da saída.",
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
    whatsappLabel: "WhatsApp:",
    emailLabel: "E-mail:",
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
    reviewsTitle: "Avaliações das nossas famílias",
    reviewsSubtitle: "Depoimentos verificados de clientes satisfeitos",
    verifiedLabel: "Verificado",
    review1Quote:
      "Acompanhamento excelente e ótima comunicação. Nosso teckel adaptou-se muito rápido.",
    review1Name: "Camille R.",
    review1Location: "Heugnes",
    review2Quote:
      "Muito profissional do primeiro contato até a entrega. Tudo claro e bem organizado.",
    review2Name: "Julien & Sarah",
    review2Location: "Lyon",
    review3Quote:
      "Reserva simples e total transparência sobre disponibilidade. Recomendo muito.",
    review3Name: "Nadia M.",
    review3Location: "Tours",
    depositLawNB:
      "NB: De acordo com a regulamentação francesa e nossas condições, quando um sinal foi pago para um filhote específico e ele não está mais disponível, o sinal não será reembolsado, salvo acordo escrito do criador.",
    depositLawFormal:
      "Menção legal — Sinal e arras: Nos termos do direito francês, os valores pagos confirmam a reserva do filhote escolhido. Se o filhote inicial não estiver mais disponível após o pagamento do sinal, o valor não será reembolsado, salvo disposição escrita em contrário.",
  },
};

let currentLanguage = localStorage.getItem(LANGUAGE_KEY) || "fr";

function getPuppies() {
  if (!window.PUPPIES_CATALOG || !Array.isArray(window.PUPPIES_CATALOG)) {
    return [];
  }
  return window.PUPPIES_CATALOG.map((puppy) => ({
    ...puppy,
    photos: Array.isArray(puppy.photos) ? [...puppy.photos] : [],
    photoFallbacks: Array.isArray(puppy.photoFallbacks) ? [...puppy.photoFallbacks] : [],
  }));
}

function getPhotoSrc(puppy, index) {
  const local = puppy.photos?.[index];
  const fallback = puppy.photoFallbacks?.[index] || puppy.photoFallbacks?.[0] || "";
  return local || fallback;
}

function buildPuppyImage(className, puppy, index, alt) {
  const src = getPhotoSrc(puppy, index);
  const fallback = puppy.photoFallbacks?.[index] || puppy.photoFallbacks?.[0] || "";
  const safeAlt = alt.replace(/"/g, "&quot;");
  return `<img class="${className}" src="${src}" alt="${safeAlt}" loading="lazy" data-fallback="${fallback}" onerror="if(this.dataset.fallback && this.src !== this.dataset.fallback){this.src=this.dataset.fallback;}" />`;
}

function setLanguage(lang) {
  currentLanguage = translations[lang] ? lang : "fr";
  localStorage.setItem(LANGUAGE_KEY, currentLanguage);
  document.documentElement.lang = currentLanguage;
}

function t(key) {
  const pack = translations[currentLanguage] || {};
  return (
    pack[key] ||
    (translations.en ? translations.en[key] : undefined) ||
    (translations.fr ? translations.fr[key] : undefined) ||
    key
  );
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

  const toThumbs = (puppy) =>
    [0, 1, 2]
      .filter((idx) => getPhotoSrc(puppy, idx))
      .map((idx) => buildPuppyImage("puppy-thumb", puppy, idx, `Photo ${idx + 1}`))
      .join("");

  puppiesGrid.innerHTML = filteredPuppies
    .map(
      (puppy) => `
      <article class="puppy-card">
        ${buildPuppyImage("puppy-photo", puppy, 0, puppy.name)}
        <div class="puppy-thumbs">
          ${toThumbs(puppy)}
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

    saveReservation(reservation);
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
  });
}

function initFilters() {
  const sexFilter = document.getElementById("sexFilter");
  const statusFilter = document.getElementById("statusFilter");
  sexFilter.addEventListener("change", renderPuppies);
  statusFilter.addEventListener("change", renderPuppies);
}

function updatePageProgress(pageId) {
  const bar = document.getElementById("pageProgressBar");
  const index = PAGE_ORDER.indexOf(pageId);
  const progress = index >= 0 ? ((index + 1) / PAGE_ORDER.length) * 100 : 12;
  if (bar) {
    bar.style.width = `${progress}%`;
  }
}

function initPageNavigation() {
  const pageIds = new Set(
    Array.from(document.querySelectorAll("[data-page-id]")).map((node) =>
      node.getAttribute("data-page-id")
    )
  );
  const navLinks = Array.from(document.querySelectorAll("[data-page-target]"));
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.querySelector(".main-nav");

  let lastPageIndex = PAGE_ORDER.indexOf("accueil");

  const showPage = (pageId, updateHash = true) => {
    const targetId = pageIds.has(pageId) ? pageId : "accueil";
    const nextIndex = PAGE_ORDER.indexOf(targetId);
    const directionClass = nextIndex >= lastPageIndex ? "slide-forward" : "slide-back";

    document.querySelectorAll("[data-page-id]").forEach((pageNode) => {
      const isActive = pageNode.getAttribute("data-page-id") === targetId;
      pageNode.classList.remove("slide-forward", "slide-back", "active");
      if (isActive) {
        pageNode.classList.add("active", directionClass);
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("data-page-target") === targetId);
    });

    updatePageProgress(targetId);
    lastPageIndex = nextIndex >= 0 ? nextIndex : 0;

    if (updateHash) {
      window.history.replaceState(null, "", `#${targetId}`);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  document.querySelectorAll("a[data-page-target]").forEach((link) => {
    if (link.closest(".main-nav")) return;
    link.addEventListener("click", (event) => {
      event.preventDefault();
      showPage(link.getAttribute("data-page-target") || "accueil", true);
    });
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("data-page-target") || "accueil";
      showPage(targetId, true);
      if (mainNav) {
        mainNav.classList.remove("open");
      }
      if (menuToggle) {
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  });

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  window.addEventListener("hashchange", () => {
    const hashId = window.location.hash.replace("#", "");
    showPage(hashId || "accueil", false);
  });

  const initialId = window.location.hash.replace("#", "") || "accueil";
  showPage(initialId, false);
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
  localStorage.removeItem("ecc_puppies");
  localStorage.removeItem("ecc_puppies_version");
  setLanguage(currentLanguage);
  applyTranslations();
  initFilterLabels();
  renderPuppies();
  renderPuppySelect();
  initFilters();
  initPageNavigation();
  initReservationForm();
  initContactForm();
  initLanguageSelector();
  document.getElementById("year").textContent = new Date().getFullYear();
}

init();
