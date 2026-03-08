import type { Locale } from "@/i18n/routing";
import type { FAQItem } from "@/types";

const FAQ_ITEMS_ES: FAQItem[] = [
  {
    question: "¿Qué es la cirugía bariátrica y para quién está indicada?",
    answer:
      "La cirugía bariátrica es un conjunto de procedimientos quirúrgicos diseñados para ayudar a perder peso de forma significativa y sostenida. Está indicada para personas con un Índice de Masa Corporal (IMC) igual o superior a 35, o a partir de 30 si existen enfermedades asociadas como diabetes, hipertensión o apnea del sueño. El Dr. Mario Ruvalcaba realiza una evaluación integral para determinar si eres candidato ideal.",
    category: "general",
  },
  {
    question:
      "¿Cuál es la diferencia entre la manga gástrica y el bypass gástrico?",
    answer:
      "La manga gástrica reduce el tamaño del estómago en aproximadamente un 80%, limitando la cantidad de alimento que puedes ingerir. El bypass gástrico, además de reducir el estómago, modifica el recorrido intestinal para disminuir la absorción de calorías. Ambas son altamente efectivas, pero la elección depende de tu historial médico, IMC y objetivos de salud. En tu consulta, el Dr. Ruvalcaba te explicará cuál opción es la más adecuada para ti.",
    category: "procedimientos",
  },
  {
    question: "¿Qué es el balón intragástrico y cómo funciona?",
    answer:
      "El balón intragástrico es un dispositivo de silicona que se coloca en el estómago mediante endoscopía, sin necesidad de cirugía. Ocupa espacio en el estómago y genera una sensación de saciedad temprana, ayudándote a comer menos. Es una opción ideal para pacientes que buscan perder entre 15 y 25 kilogramos o como preparación previa a una cirugía bariátrica mayor.",
    category: "procedimientos",
  },
  {
    question: "¿Cuánto tiempo dura la cirugía de manga gástrica?",
    answer:
      "La manga gástrica por laparoscopía generalmente toma entre 45 y 90 minutos. Se realiza bajo anestesia general y requiere una estancia hospitalaria de 1 a 2 noches. El Dr. Mario Ruvalcaba utiliza técnicas de mínima invasión que permiten incisiones más pequeñas y una recuperación más rápida.",
    category: "procedimientos",
  },
  {
    question: "¿Es segura la cirugía bariátrica?",
    answer:
      "Sí, la cirugía bariátrica es un procedimiento seguro cuando es realizada por un cirujano certificado y con experiencia. Como toda cirugía, conlleva riesgos mínimos que se minimizan con una evaluación preoperatoria completa. El Dr. Ruvalcaba cuenta con certificación del Consejo Mexicano de Cirugía General y opera en hospitales con los más altos estándares de calidad en Mérida, Yucatán.",
    category: "general",
  },
  {
    question: "¿Cuánto peso puedo esperar perder después de la cirugía?",
    answer:
      "Los resultados varían según el procedimiento y el compromiso del paciente. Con la manga gástrica, los pacientes suelen perder entre el 60% y 70% de su exceso de peso en el primer año. Con el bypass gástrico, la pérdida puede alcanzar el 70% a 80% del exceso de peso. El seguimiento nutricional y la actividad física son fundamentales para alcanzar y mantener los mejores resultados.",
    category: "general",
  },
  {
    question: "¿Cómo es la recuperación después de una cirugía bariátrica?",
    answer:
      "La mayoría de los pacientes pueden caminar el mismo día de la cirugía y regresan a sus actividades cotidianas en 1 a 2 semanas. Durante las primeras semanas seguirás una dieta líquida que progresará gradualmente a alimentos sólidos. El Dr. Ruvalcaba y su equipo de nutrición te acompañan en cada etapa para asegurar una recuperación óptima y sin complicaciones.",
    category: "recuperación",
  },
  {
    question: "¿Cuándo podré regresar al trabajo después de la cirugía?",
    answer:
      "La mayoría de los pacientes con trabajos de oficina pueden reincorporarse en 7 a 10 días. Para actividades que requieren esfuerzo físico moderado, se recomienda esperar de 3 a 4 semanas. El ejercicio intenso puede retomarse después de 6 semanas, siempre con autorización médica. Tu cirujano te dará indicaciones personalizadas según tu tipo de procedimiento.",
    category: "recuperación",
  },
  {
    question: "¿Qué dieta debo seguir después de la cirugía bariátrica?",
    answer:
      "Después de la cirugía seguirás un plan alimenticio en fases: líquidos claros, líquidos completos, purés, alimentos blandos y finalmente alimentación regular. Este proceso dura aproximadamente 6 a 8 semanas. Nuestro equipo de nutrición diseñará un plan personalizado para ti, asegurando que recibas todos los nutrientes necesarios mientras pierdes peso de forma saludable.",
    category: "recuperación",
  },
  {
    question: "¿Cuánto cuesta la cirugía bariátrica en Mérida, Yucatán?",
    answer:
      "El costo de la cirugía bariátrica en Mérida es considerablemente más accesible que en Estados Unidos o Canadá, manteniendo estándares de calidad internacionales. El precio incluye honorarios del cirujano, anestesiólogo, hospital, estudios preoperatorios y seguimiento postoperatorio. Contáctanos para obtener una cotización personalizada según el procedimiento que necesites.",
    category: "costos",
  },
  {
    question: "¿La cirugía bariátrica cubre el seguro médico?",
    answer:
      "Algunos seguros médicos en México cubren parcial o totalmente la cirugía bariátrica cuando existe una indicación médica justificada. Es importante consultar con tu aseguradora las condiciones de cobertura. Nuestro equipo administrativo puede ayudarte con los trámites necesarios y ofrecemos facilidades de pago para que el costo no sea un obstáculo para mejorar tu salud.",
    category: "costos",
  },
  {
    question:
      "¿Qué estudios previos necesito antes de la cirugía bariátrica?",
    answer:
      "Antes de la cirugía se requiere un perfil completo de laboratorio, electrocardiograma, radiografía de tórax, ultrasonido abdominal y endoscopía digestiva. También es necesaria una valoración por nutriología, psicología y, en algunos casos, cardiología o neumología. Estos estudios pueden realizarse en tu ciudad de origen o directamente en Mérida antes del procedimiento.",
    category: "general",
  },
];

const FAQ_ITEMS_EN: FAQItem[] = [
  {
    question: "What is bariatric surgery and who is it for?",
    answer:
      "Bariatric surgery is a group of surgical procedures designed to help achieve significant and sustained weight loss. It is indicated for individuals with a Body Mass Index (BMI) of 35 or higher, or starting at 30 if obesity-related comorbidities such as diabetes, hypertension, or sleep apnea are present. Dr. Mario Ruvalcaba performs a comprehensive evaluation to determine whether you are an ideal candidate.",
    category: "general",
  },
  {
    question:
      "What is the difference between gastric sleeve and gastric bypass?",
    answer:
      "Gastric sleeve surgery reduces the size of the stomach by approximately 80%, limiting the amount of food you can consume. Gastric bypass, in addition to reducing the stomach, reroutes the intestinal tract to decrease calorie absorption. Both procedures are highly effective, but the choice depends on your medical history, BMI, and health goals. During your consultation, Dr. Ruvalcaba will explain which option is most suitable for you.",
    category: "procedimientos",
  },
  {
    question: "What is the intragastric balloon and how does it work?",
    answer:
      "The intragastric balloon is a silicone device placed inside the stomach via endoscopy, without the need for surgery. It occupies space in the stomach and creates a feeling of early satiety, helping you eat less. It is an ideal option for patients looking to lose between 15 and 25 kilograms, or as a preparatory step before a major bariatric procedure.",
    category: "procedimientos",
  },
  {
    question: "How long does gastric sleeve surgery take?",
    answer:
      "Laparoscopic gastric sleeve surgery generally takes between 45 and 90 minutes. It is performed under general anesthesia and requires a hospital stay of 1 to 2 nights. Dr. Mario Ruvalcaba uses minimally invasive techniques that allow for smaller incisions and a faster recovery.",
    category: "procedimientos",
  },
  {
    question: "Is bariatric surgery safe?",
    answer:
      "Yes, bariatric surgery is a safe procedure when performed by a board-certified and experienced surgeon. As with any surgery, it carries minimal risks that are mitigated through a thorough preoperative evaluation. Dr. Ruvalcaba holds certification from the Mexican Board of General Surgery and operates in hospitals that meet the highest quality standards in Merida, Yucatan.",
    category: "general",
  },
  {
    question: "How much weight can I expect to lose after surgery?",
    answer:
      "Results vary depending on the procedure and the patient's commitment. With gastric sleeve surgery, patients typically lose between 60% and 70% of their excess weight within the first year. With gastric bypass, weight loss can reach 70% to 80% of excess weight. Nutritional follow-up and physical activity are essential to achieving and maintaining optimal results.",
    category: "general",
  },
  {
    question: "What is recovery like after bariatric surgery?",
    answer:
      "Most patients are able to walk on the same day as surgery and return to their daily activities within 1 to 2 weeks. During the first few weeks, you will follow a liquid diet that gradually progresses to solid foods. Dr. Ruvalcaba and his nutrition team guide you through every stage to ensure an optimal, complication-free recovery.",
    category: "recuperación",
  },
  {
    question: "When can I return to work after surgery?",
    answer:
      "Most patients with desk jobs can return to work within 7 to 10 days. For activities requiring moderate physical effort, it is recommended to wait 3 to 4 weeks. Intense exercise can be resumed after 6 weeks, always with medical clearance. Your surgeon will provide personalized guidelines based on your specific procedure.",
    category: "recuperación",
  },
  {
    question: "What diet should I follow after bariatric surgery?",
    answer:
      "After surgery, you will follow a phased dietary plan: clear liquids, full liquids, purées, soft foods, and finally a regular diet. This process takes approximately 6 to 8 weeks. Our nutrition team will design a personalized plan for you, ensuring you receive all essential nutrients while losing weight in a healthy manner.",
    category: "recuperación",
  },
  {
    question: "How much does bariatric surgery cost in Merida, Yucatan?",
    answer:
      "The cost of bariatric surgery in Merida is considerably more affordable than in the United States or Canada, while maintaining international quality standards. The price includes surgeon fees, anesthesiologist fees, hospital costs, preoperative studies, and postoperative follow-up. Contact us to receive a personalized quote based on the procedure you need.",
    category: "costos",
  },
  {
    question: "Does health insurance cover bariatric surgery?",
    answer:
      "Some health insurance plans in Mexico partially or fully cover bariatric surgery when there is a justified medical indication. It is important to check with your insurance provider regarding coverage conditions. Our administrative team can assist you with the necessary paperwork, and we offer flexible payment options so that cost is not a barrier to improving your health.",
    category: "costos",
  },
  {
    question: "What preoperative tests do I need before bariatric surgery?",
    answer:
      "Before surgery, a complete laboratory panel, electrocardiogram, chest X-ray, abdominal ultrasound, and digestive endoscopy are required. An evaluation by a nutritionist and psychologist is also necessary, and in some cases, a cardiology or pulmonology assessment may be needed. These tests can be completed in your home city or directly in Merida prior to the procedure.",
    category: "general",
  },
];

const FAQ_ITEMS_BY_LOCALE: Record<Locale, FAQItem[]> = {
  es: FAQ_ITEMS_ES,
  en: FAQ_ITEMS_EN,
};

export function getFAQItems(locale: Locale = "es"): FAQItem[] {
  return FAQ_ITEMS_BY_LOCALE[locale];
}
