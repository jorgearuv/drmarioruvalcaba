import type { DoctorInfo, NavLink, StatItem, TrustBadge } from "@/types";

export const DOCTOR_INFO = {
  name: "Dr. Mario Ruvalcaba",
  title: "Cirujano Bariátrico Certificado",
  specialties: [
    "Manga Gástrica",
    "Bypass Gástrico",
    "Balón Intragástrico",
    "Cirugía de Mínima Invasión",
  ],
  cedula: "XXXXXXXX",
  phone: "+52XXXXXXXXXX",
  whatsapp: "+52XXXXXXXXXX",
  email: "contacto@drmarioruvalcaba.com",
  address: "Calle 26 No. 199, Col. Altabrisa, Mérida, Yucatán, C.P. 97130",
  city: "Mérida",
  state: "Yucatán",
  country: "México",
  zipCode: "97130",
  googleMapsUrl: "https://maps.google.com/?q=Merida+Yucatan+Mexico",
  siteUrl: "https://drmarioruvalcaba.com",
  socialMedia: {
    facebook: "https://facebook.com/drmarioruvalcaba",
    instagram: "https://instagram.com/drmarioruvalcaba",
    youtube: "https://youtube.com/@drmarioruvalcaba",
    tiktok: "https://tiktok.com/@drmarioruvalcaba",
  },
} as const satisfies DoctorInfo;

export const NAV_LINKS: NavLink[] = [
  { label: "Inicio", href: "/" },
  {
    label: "Procedimientos",
    href: "/procedimientos",
    children: [
      { label: "Manga Gástrica", href: "/manga-gastrica-merida" },
      { label: "Bypass Gástrico", href: "/bypass-gastrico-merida" },
      { label: "Balón Intragástrico", href: "/balon-intragastrico" },
      { label: "Cirugía de Mínima Invasión", href: "/cirugia-minima-invasion" },
    ],
  },
  { label: "Sobre el Doctor", href: "/sobre-el-doctor" },
  { label: "Turismo Médico", href: "/turismo-medico" },
  { label: "Testimonios", href: "/testimonios" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/preguntas-frecuentes" },
  { label: "Contacto", href: "/contacto" },
];

export const STATS = [
  { value: 3000, suffix: "+", label: "Cirugías realizadas" },
  { value: 15, suffix: "+", label: "Años de experiencia" },
  { value: 98, suffix: "%", label: "Pacientes satisfechos" },
  { value: 4, suffix: "", label: "Certificaciones internacionales" },
] as const satisfies readonly StatItem[];

export const TRUST_BADGES = [
  { name: "Hospital Star Médica Mérida", type: "hospital" },
  { name: "Hospital CMQ Mérida", type: "hospital" },
  { name: "Consejo Mexicano de Cirugía General", type: "certification" },
  { name: "IFSO Member", type: "certification" },
  {
    name: "Sociedad Mexicana de Cirugía para la Obesidad",
    type: "association",
  },
  { name: "Colegio de Cirujanos de Yucatán", type: "association" },
] as const satisfies readonly TrustBadge[];

export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola Dr. Ruvalcaba, me gustaría agendar una consulta para cirugía bariátrica."
);

export const WHATSAPP_URL = `https://wa.me/${DOCTOR_INFO.whatsapp.replace(/\+/g, "")}?text=${WHATSAPP_MESSAGE}`;
