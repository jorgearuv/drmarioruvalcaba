import type { DoctorInfo, NavLink, TrustBadge } from "@/types";

export const DOCTOR_INFO = {
  name: "Dr. Mario Ruvalcaba",
  title: "Cirujano General y Bariátra Certificado",
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
  email: "cirujanomarioruvalcaba@gmail.com",
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
    facebook: "https://www.facebook.com/profile.php?id=61575118417070",
    instagram: "https://www.instagram.com/drmarioruvalcaba",
    tiktok: "https://www.tiktok.com/@cirujanomarioruvalcaba",
    doctoralia: "https://www.doctoralia.com.mx/jose-mario-ruvalcaba-vallarta/cirujano-general/yucatan",
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
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/preguntas-frecuentes" },
  { label: "Contacto", href: "/contacto" },
];

export const HERO_TRUST_SIGNALS = [
  {
    type: "doctoralia" as const,
    value: "5.0",
    label: "en Doctoralia",
    sublabel: "23 opiniones verificadas",
    href: DOCTOR_INFO.socialMedia.doctoralia,
  },
  {
    type: "certification" as const,
    value: "Certificado",
    label: "Consejo Mexicano de",
    sublabel: "Cirugía General",
  },
  {
    type: "experience" as const,
    value: "+5 años",
    label: "Experiencia en",
    sublabel: "Cirugía Bariátrica",
  },
] as const;

export const TRUST_BADGES = [
  { name: "Consejo Mexicano de Cirugía General, A.C.", abbreviation: "CMCG", type: "certification", logoPath: "/images/logos/cmcg.webp" },
  { name: "International Federation for the Surgery of Obesity and Metabolic Disorders (IFSO)", abbreviation: "IFSO", type: "association", logoPath: "/images/logos/ifso.webp" },
  { name: "Asociación Mexicana de Cirugía General (AMCG)", abbreviation: "AMCG", type: "association", logoPath: "/images/logos/amcg.webp" },
  { name: "Asociación Mexicana de Cirugía Endoscópica (AMCE)", abbreviation: "AMCE", type: "association", logoPath: "/images/logos/amce.webp" },
  { name: "Colegio Mexicano de Cirugía para la Obesidad y Enfermedades Metabólicas (CMCOEM)", abbreviation: "CMCOEM", type: "association", logoPath: "/images/logos/cmcoem.webp" },
] as const satisfies readonly TrustBadge[];

export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola Dr. Ruvalcaba, me gustaría agendar una consulta para cirugía bariátrica."
);

export const WHATSAPP_URL = `https://wa.me/${DOCTOR_INFO.whatsapp.replace(/\+/g, "")}?text=${WHATSAPP_MESSAGE}`;