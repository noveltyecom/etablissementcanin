/**
 * ============================================================
 *  FICHIER PRINCIPAL À MODIFIER (VS Code)
 *  Ouvrez ce fichier pour changer noms, disponibilité et photos.
 *  Enregistrez (Ctrl+S) puis actualisez le site (F5).
 * ============================================================
 *
 *  name      → Nom affiché du chiot
 *  available → true  = Disponible  |  false = Réservé
 *  photos    → Chemins vers VOS images sur votre PC :
 *              1) Copiez vos photos dans le dossier : images/puppies/
 *              2) Utilisez le même nom que ci-dessous (ex: TCK-001-1.jpg)
 *              3) Formats acceptés : .jpg .jpeg .png .webp
 *
 *  Si le fichier local n'existe pas encore, le site affiche
 *  automatiquement une photo teckel de secours (photoFallbacks).
 */

window.PUPPIES_CATALOG = [
  {
    id: "TCK-001",
    name: "Nala",
    available: true,
    coat: "Teckel Arlequin Poil Long",
    sex: "Femelle",
    age: "3 mois",
    breed: "Teckel",
    photos: [
      "images/puppies/TCK-001-1.jpg",
      "images/puppies/TCK-001-2.jpg",
      "images/puppies/TCK-001-1.jpg",
    ],
    photoFallbacks: [
      "https://images.unsplash.com/photo-1615751072490-30068363fb49?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: "TCK-002",
    name: "Rocky",
    available: true,
    coat: "Teckel Nain Poils Courts",
    sex: "Mâle",
    age: "4 mois",
    breed: "Teckel",
    photos: [
      "images/puppies/TECK-P-D8.jpg",
      "images/puppies/TECK-P-D9.jpg",
      "images/puppies/TECK-P-D7.jpg",
    ],
    photoFallbacks: [
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1518717758536-85f2901b5180?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: "TCK-003",
    name: "Luna",
    available: false,
    coat: "Teckel Poil Long",
    sex: "Femelle",
    age: "2 mois",
    breed: "Teckel",
    photos: [
      "images/puppies/TECK-PL1.jpg",
      "images/puppies/TECK-PL2.jpg",
      "images/puppies/TECK-PL3.jpg",
    ],
    photoFallbacks: [
      "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1615751072490-30068363fb49?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: "TCK-004",
    name: "Milo",
    available: true,
    coat: "Teckel Standard",
    sex: "Mâle",
    age: "5 mois",
    breed: "Teckel",
    photos: [
      "images/puppies/TECK-STD1.jpg",
      "images/puppies/TECK-STD2.jpg",
      "images/puppies/TECK-STD1.jpg",
    ],
    photoFallbacks: [
      "https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1615751072490-30068363fb49?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: "TCK-005",
    name: "Bella",
    available: true,
    coat: "Teckel Standard Poil Court",
    sex: "Femelle",
    age: "3 mois",
    breed: "Teckel",
    photos: [
      "images/puppies/TECK-PD1.jpg",
      "images/puppies/TECK-PD2.jpg",
      "images/puppies/TECK-PD3.jpg",
    ],
    photoFallbacks: [
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1518717758536-85f2901b5180?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: "TCK-006",
    name: "Oscar",
    available: true,
    coat: "Teckel Miniature",
    sex: "Mâle",
    age: "2 mois",
    breed: "Teckel",
    photos: [
      "images/puppies/TECKAL1.jpg",
      "images/puppies/TECKAL2.jpg",
      "images/puppies/TECKAL2.jpg",
    ],
    photoFallbacks: [
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: "TCK-007",
    name: "Sally",
    available: false,
    coat: "Teckel Poil Dur",
    sex: "Femelle",
    age: "4 mois",
    breed: "Teckel",
    photos: [
      "images/puppies/TECKNPD1.jpg",
      "images/puppies/TECKNPD2.jpg",
      "images/puppies/TECKNPD1.jpg",
    ],
    photoFallbacks: [
      "https://images.unsplash.com/photo-1518717758536-85f2901b5180?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1615751072490-30068363fb49?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: "TCK-008",
    name: "Toby",
    available: true,
    coat: "Teckel Chocolat",
    sex: "Mâle",
    age: "3 mois",
    breed: "Teckel",
    photos: [
      "images/puppies/TECK-CH1.jpg",
      "images/puppies/TECK-CH2.jpg",
      "images/puppies/TECK-CH3.jpg",
    ],
    photoFallbacks: [
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=900&q=80",
    ],
  },
];
