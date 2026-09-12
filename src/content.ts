// Única fuente de verdad del negocio. Datos tomados de Google Maps
// (ver /data/place.json y /data/ficha.md) el 12 de septiembre de 2026,
// más el enlace de reserva en TheFork aportado en la ficha de contacto
// del cliente (/data/contacto.json).

export const content = {
  name: 'Rincón 33',
  shortName: 'Rincón 33',
  tagline: 'Restaurante de paellas y arroces en Ciutat Vella, Valencia',
  description:
    'Rincón 33 es un restaurante informal en pleno casco antiguo de Valencia, con una decoración original que le da personalidad propia y una terraza para comer al aire libre. Su especialidad son las paellas y los arroces —del señoret, de tinta de calamar, de marisco—, acompañados de entrantes como las croquetas caseras, el pulpo o las patatas bravas. Un local pequeño pero muy cuidado, con trato cercano y buena mano en cocina, ideal para comer en grupo sin necesidad de reserva.',
  metaDescription:
    'Restaurante en Ciutat Vella, Valencia, especializado en paellas y arroces con producto fresco. Terraza, ambiente informal y trato cercano. Reservas online.',
  keywords: [
    'Rincón 33',
    'Ciutat Vella',
    'Valencia',
    'restaurante',
    'paellas',
    'arroces valencianos',
    'terraza Valencia',
    'restaurante cerca de mí',
  ],
  priceRange: '30 € - 40 €',
  priceRangeDisplay: '30 € – 40 € por persona',
  cuisine: 'Cocina mediterránea y arroces',

  rating: { value: 4.6, count: 2659, countDisplay: '2659 reseñas' },
  highlights: [
    'La paella del señoret y el arroz negro, los platos más celebrados en las reseñas.',
    'Croquetas, pulpo y tataki de atún muy bien valorados como entrantes.',
    'Trato cercano y profesional, con la propia dueña muy pendiente de la sala.',
    'Terraza y ambiente informal en pleno Ciutat Vella, ideal para grupos.',
  ],

  address: {
    streetAddress: 'Carrer de la Corretgeria, 33',
    addressLocality: 'València',
    addressRegion: 'Valencia',
    postalCode: '46001',
    addressCountry: 'ES',
    full: 'C/ de la Corretgeria, 33, Ciutat Vella, 46001 València, Valencia',
  },
  geo: { lat: 39.4753002, lng: -0.3768577 },

  phone: '+34 667 71 78 39',
  phoneDisplay: '667 71 78 39',
  whatsappNumber: '34667717839',
  email: '',

  siteUrl: 'https://samuelfagundez.github.io/rincon-33/',

  social: {
    instagram: '',
    facebook: 'https://www.facebook.com/restaurante.rincon33',
    tiktok: '',
    whatsapp: '',
  },

  hours: [
    { day: 'Lunes', hours: '13:30 – 15:00 y 20:30 – 23:00' },
    { day: 'Martes', hours: 'Cerrado' },
    { day: 'Miércoles', hours: 'Cerrado' },
    { day: 'Jueves', hours: '13:30 – 15:00 y 20:30 – 23:00' },
    { day: 'Viernes', hours: '13:30 – 15:00 y 20:30 – 23:00' },
    { day: 'Sábado', hours: '13:30 – 15:00 y 20:30 – 23:00' },
    { day: 'Domingo', hours: '13:30 – 15:00 y 20:30 – 23:00' },
  ],
  openingHoursSchema: [
    {
      dayOfWeek: ['Monday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '13:30',
      closes: '15:00',
    },
    {
      dayOfWeek: ['Monday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '20:30',
      closes: '23:00',
    },
  ],

  // "credit" = atribución exigida por Google Maps/Places para cada foto
  // (ver /data/ficha.md: "Al publicarlos en la web hay que mostrar la
  // atribución de cada foto"). Se muestra como pie discreto en la galería.
  gallery: [
    {
      src: '/gallery/rincon-33-paella-langostinos.jpg',
      alt: 'Paella de langostinos recién hecha en Rincón 33, Valencia',
      credit: 'Filip Machát',
    },
    {
      src: '/gallery/rincon-33-arroz-negro.jpg',
      alt: 'Arroz negro con langostinos, especialidad de Rincón 33',
      credit: 'Nicolaz David Perez Mesa',
    },
    {
      src: '/gallery/rincon-33-pulpo-crema-calabaza.jpg',
      alt: 'Pulpo a la brasa con crema de calabaza en Rincón 33',
      credit: 'Karishma Sheffield',
    },
    {
      src: '/gallery/rincon-33-comedor-interior.jpg',
      alt: 'Comedor con decoración original de Rincón 33, restaurante en Ciutat Vella',
      credit: 'Rincón 33',
    },
    {
      src: '/gallery/rincon-33-croquetas.jpg',
      alt: 'Croquetas caseras de Rincón 33',
      credit: 'Manuela M.',
    },
    {
      src: '/gallery/rincon-33-patatas-bravas.jpg',
      alt: 'Patatas bravas servidas en Rincón 33',
      credit: 'Paolo Rambotti',
    },
    {
      src: '/gallery/rincon-33-polenta-alioli.jpg',
      alt: 'Polenta con alioli, entrante de la carta de Rincón 33',
      credit: 'Rosana Urtasun',
    },
    {
      src: '/gallery/rincon-33-crema-entrantes.jpg',
      alt: 'Crema de entrantes de la carta de Rincón 33',
      credit: 'Rincón 33',
    },
  ],

  mapEmbedSrc:
    'https://www.google.com/maps?q=' +
    encodeURIComponent('Rincón 33, Carrer de la Corretgeria 33, 46001 València') +
    '&hl=es&z=16&output=embed',
  mapLinkUrl:
    'https://maps.google.com/?cid=14755793596305887370&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA',
}

export function whatsappLink(message: string): string {
  return `https://wa.me/${content.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_CONTACT_MESSAGE =
  '¡Hola! Vengo de la página web de Rincón 33 y tengo una consulta.'
export const WHATSAPP_RESERVE_MESSAGE =
  '¡Hola! Vengo de la página web de Rincón 33 y me gustaría hacer una reserva.'

// Reserva a través de TheFork (enlace aportado por el cliente). Si en el
// futuro se retira, cae automáticamente a WhatsApp.
export const reservationLink = 'https://www.thefork.es/restaurante/rincon-33-r303913'

export function contactHref(): string {
  return whatsappLink(WHATSAPP_CONTACT_MESSAGE)
}

export function reservationHref(): string {
  return reservationLink || whatsappLink(WHATSAPP_RESERVE_MESSAGE)
}
