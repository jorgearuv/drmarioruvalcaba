import type { DoctorInfo, NavLink, StatItem, TrustBadge } from "@/types";

export const DOCTOR_INFO = {
  name: "Dr. Mario Ruvalcaba",
  title: "Cirujano General y Bariatra Certificado",
  specialties: [
    "Manga Gástrica",
    "Bypass Gástrico",
    "Balón Intragástrico",
    "Cirugía de Mínima Invasión",
  ],
  cedula: "11863807",
  cedulaEspecialidad: "14576281",
  phone: "+529992603030",
  whatsapp: "+529992603030",
  email: "contacto@drmarioruvalcaba.com",
  address: "Calle 17 #182-B por calle 14 y 16, México Oriente",
  city: "Mérida",
  state: "Yucatán",
  country: "México",
  zipCode: "97137",
  googleMapsUrl: "https://maps.google.com/?q=Merida+Yucatan+Mexico",
  latitude: 20.9674,
  longitude: -89.5926,
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
  { label: "Testimonios", href: "/testimonios" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/preguntas-frecuentes" },
  { label: "Contacto", href: "/contacto" },
];

export const STATS = [
  { value: 3000, suffix: "+", label: "Procedimientos exitosos" },
  { value: 98, suffix: "%", label: "Pacientes satisfechos" },
] as const satisfies readonly StatItem[];

export const TRUST_BADGES = [
  { name: "Consejo Mexicano de Cirugía General, A.C.", type: "certification" },
  { name: "Asociación Mexicana de Cirugía General (AMCG)", type: "association" },
  { name: "Asociación Mexicana de Cirugía Endoscópica (AMCE)", type: "association" },
  { name: "Colegio Mexicano de Cirugía para la Obesidad y Enfermedades Metabólicas (CMCOEM)", type: "association" },
] as const satisfies readonly TrustBadge[];

export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola Dr. Ruvalcaba, me gustaría agendar una consulta para cirugía bariátrica."
);

export const WHATSAPP_URL = `https://wa.me/${DOCTOR_INFO.whatsapp.replace(/\+/g, "")}?text=${WHATSAPP_MESSAGE}`;
