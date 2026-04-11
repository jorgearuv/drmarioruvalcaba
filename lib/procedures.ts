import type { Locale } from '@/i18n/routing'
import { Procedure, SubProcedure } from '@/types'

// =============================================================================
// PROCEDURES — Spanish
// =============================================================================
const PROCEDURES_ES: Procedure[] = [
  // ---------------------------------------------------------------------------
  // 1. Manga Gástrica
  // ---------------------------------------------------------------------------
  {
    slug: 'manga-gastrica-merida',
    imagePath: '/images/procedures/manga-gastrica.webp',
    title: 'Manga Gástrica',
    shortTitle: 'Manga Gástrica',
    metaTitle:
      'Manga Gástrica en Mérida | Dr. Mario Ruvalcaba - Cirujano Bariátrico',
    metaDescription:
      'Manga gástrica en Mérida con el Dr. Mario Ruvalcaba. Pierde hasta el 70% de tu exceso de peso con cirugía laparoscópica segura. Agenda tu valoración hoy.',
    heroHeadline: 'Manga Gástrica en Mérida',
    heroSubheadline:
      'Transforma tu vida con el procedimiento bariátrico más realizado en el mundo. Resultados comprobados, recuperación rápida y acompañamiento integral.',
    description:
      'La manga gástrica (gastrectomía vertical en manga) reduce el tamaño del estómago entre un 75% y 85%, limitando la cantidad de alimento que puedes ingerir y disminuyendo la producción de grelina, la hormona del hambre. Es el procedimiento bariátrico más solicitado a nivel mundial por su efectividad y seguridad.',
    longDescription:
      'La gastrectomía vertical en manga es una intervención quirúrgica que consiste en extirpar aproximadamente el 80% del estómago, transformándolo en un tubo delgado con forma de manga o plátano. Al reducir drásticamente la capacidad gástrica, el paciente experimenta saciedad temprana con porciones pequeñas de alimento. Además, al eliminar el fondo gástrico —principal productor de grelina— se reduce significativamente la sensación de hambre, facilitando la adherencia a un plan alimentario saludable a largo plazo.\n\nEl Dr. Mario Ruvalcaba realiza este procedimiento por vía laparoscópica, utilizando entre 4 y 5 incisiones milimétricas que minimizan el dolor postoperatorio, el riesgo de infección y el tiempo de recuperación. Los pacientes suelen perder entre el 60% y el 70% de su exceso de peso durante los primeros 12 a 18 meses. La cirugía no solo promueve la pérdida de peso sostenida, sino que también contribuye a la mejoría o resolución de enfermedades asociadas a la obesidad como diabetes mellitus tipo 2, hipertensión arterial, apnea obstructiva del sueño, dislipidemia y enfermedad por reflujo gastroesofágico. Cada paciente recibe un plan multidisciplinario personalizado que incluye seguimiento nutricional, psicológico y médico para garantizar resultados óptimos y duraderos.',
    benefits: [
      {
        title: 'Pérdida de peso significativa',
        description:
          'Pierde entre el 60% y el 70% de tu exceso de peso en los primeros 12 a 18 meses, con resultados sostenidos a largo plazo gracias a la reducción hormonal del apetito.',
        icon: '📉',
      },
      {
        title: 'Mejora de comorbilidades',
        description:
          'Resolución o mejoría de diabetes tipo 2, hipertensión, apnea del sueño, dislipidemia y enfermedades articulares asociadas al exceso de peso.',
        icon: '❤️',
      },
      {
        title: 'Procedimiento mínimamente invasivo',
        description:
          'Cirugía laparoscópica con incisiones de 3 a 12 mm que reducen el dolor, las complicaciones y dejan cicatrices prácticamente imperceptibles.',
        icon: '🔬',
      },
      {
        title: 'Recuperación rápida',
        description:
          'La mayoría de los pacientes regresan a sus actividades cotidianas en 1 a 2 semanas y a la actividad física completa en 4 a 6 semanas.',
        icon: '⚡',
      },
    ],
    candidates: [
      'Personas con un Índice de Masa Corporal (IMC) igual o mayor a 35 con comorbilidades asociadas, o IMC igual o mayor a 40 sin comorbilidades.',
      'Pacientes que han intentado métodos convencionales de pérdida de peso (dieta, ejercicio, medicamentos) sin lograr resultados sostenidos durante al menos 6 meses.',
      'Personas diagnosticadas con enfermedades relacionadas con la obesidad como diabetes tipo 2, hipertensión arterial, apnea del sueño o enfermedad articular degenerativa.',
      'Adultos entre 18 y 65 años con disposición a comprometerse con cambios permanentes en su estilo de vida, alimentación y seguimiento médico postquirúrgico.',
      'Pacientes que no presenten contraindicaciones quirúrgicas graves ni trastornos alimentarios activos no controlados, y que cuenten con valoración psicológica favorable.',
    ],
    recovery: [
      {
        period: 'Primera semana',
        description:
          'Dieta líquida clara exclusiva (agua, caldo desgrasado, gelatina sin azúcar, suero oral). Reposo relativo en casa con caminatas cortas para prevenir trombosis. Se manejan molestias leves con analgésicos orales. Control de heridas quirúrgicas a los 7 días.',
      },
      {
        period: '2-4 semanas',
        description:
          'Transición gradual a líquidos completos y alimentos en puré (licuados de proteína, papillas, yogur sin azúcar). Inicio de suplementación vitamínica y de proteína. Se retoman actividades laborales sedentarias. Seguimiento nutricional presencial o virtual.',
      },
      {
        period: '1-3 meses',
        description:
          'Incorporación progresiva de alimentos blandos y sólidos en porciones controladas. Inicio de ejercicio cardiovascular moderado (caminata, bicicleta estática, natación). Los pacientes suelen haber perdido entre el 30% y el 40% de su exceso de peso en este período.',
      },
      {
        period: '6-12 meses',
        description:
          'Alimentación variada con énfasis en proteínas, vegetales y buena hidratación. Actividad física regular sin restricciones. Pérdida del 60% al 70% del exceso de peso. Seguimiento trimestral con estudios de laboratorio para monitorear niveles nutricionales y metabólicos.',
      },
    ],
    costRange: '',
    duration: '1 - 1.5 horas',
    hospitalStay: '1 - 2 noches',
    icon: '🩺',
    faq: [
      {
        question: '¿La manga gástrica es reversible?',
        answer:
          'No, la manga gástrica es un procedimiento irreversible ya que se extirpa aproximadamente el 80% del estómago de forma permanente. Sin embargo, en casos específicos puede convertirse a un bypass gástrico o a una derivación biliopancreática si el paciente lo requiere. Es fundamental que antes de la cirugía el paciente comprenda la naturaleza definitiva del procedimiento y esté comprometido con los cambios de estilo de vida necesarios.',
      },
      {
        question: '¿Cuánto peso puedo esperar perder con la manga gástrica?',
        answer:
          'En promedio, los pacientes pierden entre el 60% y el 70% de su exceso de peso durante los primeros 12 a 18 meses posteriores a la cirugía. Por ejemplo, si un paciente tiene 40 kg de exceso de peso, puede esperar perder entre 24 y 28 kg. Los resultados varían según la adherencia al plan nutricional, la actividad física y el seguimiento médico. El Dr. Ruvalcaba y su equipo multidisciplinario diseñan un plan personalizado para maximizar los resultados de cada paciente.',
      },
      {
        question: '¿Cuáles son los riesgos de la manga gástrica?',
        answer:
          'Como toda cirugía, la manga gástrica conlleva riesgos, aunque su tasa de complicaciones es baja (entre el 1% y el 3%). Los riesgos más comunes incluyen sangrado de la línea de grapas, fuga o fístula gástrica, estenosis (estrechamiento), reflujo gastroesofágico y deficiencias nutricionales a largo plazo. El Dr. Ruvalcaba utiliza técnicas avanzadas de sellado y refuerzo de la línea de grapas para minimizar estas complicaciones, y cada paciente recibe un protocolo de seguimiento riguroso.',
      },
      {
        question:
          '¿Puedo tomar alcohol o bebidas carbonatadas después de la manga gástrica?',
        answer:
          'Se recomienda evitar las bebidas carbonatadas de forma permanente, ya que el gas puede generar distensión gástrica, molestias y dilatación del remanente gástrico con el tiempo. En cuanto al alcohol, debe evitarse al menos durante los primeros 6 meses y posteriormente consumirse con extrema moderación. Tras la cirugía, el cuerpo absorbe el alcohol de manera más rápida e intensa, lo que aumenta el riesgo de intoxicación y de desarrollar dependencia.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 2. Bypass Gástrico
  // ---------------------------------------------------------------------------
  {
    slug: 'bypass-gastrico-merida',
    imagePath: '/images/procedures/bypass-gastrico.webp',
    title: 'Bypass Gástrico',
    shortTitle: 'Bypass Gástrico',
    metaTitle:
      'Bypass Gástrico en Mérida | Dr. Mario Ruvalcaba - Cirujano Bariátrico',
    metaDescription:
      'Bypass gástrico en Y de Roux en Mérida. Procedimiento bariátrico de referencia para obesidad severa y diabetes tipo 2. Consulta con el Dr. Ruvalcaba.',
    heroHeadline: 'Bypass Gástrico en Mérida',
    heroSubheadline:
      'El estándar de oro en cirugía bariátrica. Resultados excepcionales para la obesidad severa y la resolución de diabetes tipo 2 con técnica laparoscópica avanzada.',
    description:
      'El bypass gástrico en Y de Roux combina la restricción del tamaño del estómago con una derivación intestinal que modifica la absorción de nutrientes y genera potentes cambios hormonales. Es considerado el procedimiento de referencia (gold standard) para pacientes con obesidad severa y enfermedades metabólicas.',
    longDescription:
      'El bypass gástrico en Y de Roux es un procedimiento restrictivo e hipoabsortivo que consiste en crear un estómago más pequeño (reservorio) a partir de la porción superior del estómago, el cual se conecta directamente a un segmento del intestino delgado (asa alimentaria), derivando la mayor parte del estómago, el duodeno y la primera porción del yeyuno. Esta configuración limita la cantidad de alimento que el paciente puede ingerir, reduce la absorción calórica y, crucialmente, provoca cambios hormonales profundos —incluyendo el aumento de GLP-1, PYY y la reducción de grelina— que mejoran la sensibilidad a la insulina y contribuyen a la resolución de la diabetes tipo 2 en hasta el 80% de los casos.\n\nEl Dr. Mario Ruvalcaba realiza el bypass gástrico por vía laparoscópica con técnica depurada gracias a sus maestros de talla internacional. Los pacientes pueden esperar perder entre el 70% y el 80% de su exceso de peso en los primeros 18 a 24 meses. Este procedimiento es particularmente efectivo para pacientes con IMC superior a 45, diabetes tipo 2 de difícil control, síndrome metabólico y enfermedad por reflujo gastroesofágico severo. El seguimiento postoperatorio incluye suplementación vitamínica de por vida (hierro, calcio, vitamina B12, vitaminas liposolubles), control nutricional periódico y monitoreo de laboratorio para prevenir deficiencias nutricionales.\n\n* Para mantener un control metabólico y una perdida de peso a lo largo del tiempo el seguimiento multidisciplinario es lo más importante.',
    benefits: [
      {
        title: 'Mayor pérdida de peso',
        description:
          'Pérdida promedio del 70% al 80% del exceso de peso en 18 a 24 meses, siendo uno de los procedimientos bariátricos con mejores resultados a largo plazo.',
        icon: '🏋️',
      },
      {
        title: 'Resolución de diabetes tipo 2',
        description:
          'Hasta el 80% de los pacientes logran remisión completa de la diabetes tipo 2 gracias a los potentes cambios hormonales y metabólicos que produce el bypass gástrico.',
        icon: '🩺',
      },
      {
        title: 'Efecto antirreflujo',
        description:
          'Eliminación del reflujo gastroesofágico al desviar el flujo biliar y ácido lejos del esófago, siendo la opción ideal para pacientes obesos con ERGE severo.',
        icon: '🛡️',
      },
      {
        title: 'Cambios hormonales favorables',
        description:
          'Incremento significativo de hormonas de saciedad (GLP-1, PYY) y reducción de grelina, lo que disminuye el apetito y mejora el metabolismo de la glucosa de forma sostenida.',
        icon: '🧬',
      },
    ],
    candidates: [
      'Pacientes con Índice de Masa Corporal (IMC) igual o mayor a 40, o IMC igual o mayor a 35 con comorbilidades metabólicas severas como diabetes tipo 2 descontrolada.',
      'Personas con diabetes mellitus tipo 2 de difícil control farmacológico que podrían beneficiarse de los efectos metabólicos del bypass, incluso con IMC entre 30 y 35 (cirugía metabólica).',
      'Pacientes con enfermedad por reflujo gastroesofágico (ERGE) severo asociado a obesidad, ya que el bypass gástrico es el procedimiento bariátrico que mejor controla el reflujo.',
      'Personas con antecedente de manga gástrica previa que requieren un procedimiento de revisión por recuperación de peso o reflujo intratable.',
      'Adultos motivados que comprenden la necesidad de suplementación vitamínica de por vida y seguimiento nutricional estricto como parte integral del tratamiento.',
    ],
    recovery: [
      {
        period: 'Primera semana',
        description:
          'Dieta líquida clara estricta con hidratación fraccionada (sorbos pequeños y frecuentes). Reposo en casa con deambulación temprana para prevenir tromboembolismo. Manejo del dolor con analgésicos orales. Revisión de heridas y tolerancia oral a los 7 días.',
      },
      {
        period: '2-4 semanas',
        description:
          'Progresión a líquidos completos y purés ricos en proteína. Inicio de suplementación vitamínica obligatoria (multivitamínico, hierro, calcio con vitamina D, vitamina B12). Reincorporación gradual a actividades laborales de baja exigencia física.',
      },
      {
        period: '1-3 meses',
        description:
          'Introducción progresiva de alimentos sólidos blandos, priorizando proteínas magras. Inicio de actividad física moderada supervisada. Es fundamental aprender a identificar y evitar el síndrome de dumping, que ocurre al consumir azúcares simples o comidas copiosas.',
      },
      {
        period: '6-12 meses',
        description:
          'Alimentación equilibrada y variada sin restricciones mayores, manteniendo la prioridad en proteínas y evitando azúcares concentrados. Actividad física regular. Controles de laboratorio trimestrales para detectar deficiencias de hierro, B12, calcio y vitaminas liposolubles. Pérdida esperada del 70% al 80% del exceso de peso.',
      },
    ],
    costRange: '',
    duration: '2 - 3 horas',
    hospitalStay: '2 - 3 noches',
    icon: '💜',
    faq: [
      {
        question:
          '¿Cuál es la diferencia entre el bypass gástrico y la manga gástrica?',
        answer:
          'La manga gástrica es un procedimiento puramente restrictivo que reduce el tamaño del estómago, mientras que el bypass gástrico combina restricción con derivación intestinal, lo que genera cambios hormonales y metabólicos más pronunciados. El bypass gástrico ofrece mayor pérdida de peso (70-80% vs. 60-70% del exceso), mayor tasa de resolución de diabetes (hasta 80%) y es superior para controlar el reflujo gastroesofágico. Sin embargo, requiere suplementación vitamínica de por vida y tiene un seguimiento nutricional más estricto. El Dr. Ruvalcaba evalúa cada caso individualmente para recomendar el procedimiento más adecuado.',
      },
      {
        question: '¿Qué es el síndrome de dumping?',
        answer:
          'El síndrome de dumping es un efecto secundario que puede ocurrir después del bypass gástrico cuando se consumen alimentos con alto contenido de azúcares simples o grasas. Se presenta como una sensación de mareo, náuseas, sudoración, taquicardia, cólicos abdominales y diarrea, generalmente entre 10 y 30 minutos después de comer. Aunque puede ser incómodo, el dumping actúa como un mecanismo de retroalimentación negativa que ayuda a los pacientes a evitar alimentos poco saludables. Se previene siguiendo las recomendaciones nutricionales y evitando dulces, refrescos y comidas procesadas.',
      },
      {
        question:
          '¿Necesitaré tomar vitaminas toda la vida después del bypass?',
        answer:
          'Sí, la suplementación vitamínica y mineral es obligatoria de por vida tras el bypass gástrico. Al derivar una porción del intestino delgado, se reduce la superficie de absorción de nutrientes esenciales. Los suplementos básicos incluyen: multivitamínico con minerales (diario), citrato de calcio con vitamina D (1,200-1,500 mg/día), vitamina B12 (sublingual o inyectable mensual), hierro elemental (45-60 mg/día, especialmente en mujeres premenopáusicas) y, en algunos casos, vitaminas liposolubles (A, D, E, K). Los controles de laboratorio periódicos permiten ajustar las dosis según las necesidades individuales.',
      },
      {
        question: '¿El bypass gástrico es reversible?',
        answer:
          'Técnicamente, el bypass gástrico puede revertirse quirúrgicamente, ya que el estómago excluido se preserva dentro del abdomen. Sin embargo, la reversión es un procedimiento complejo con riesgos significativos y rara vez se realiza. En la práctica, el bypass gástrico se considera un procedimiento permanente. Lo que sí es posible y más frecuente es la revisión del bypass —ajustar el tamaño de la bolsa gástrica o la longitud del asa intestinal— en pacientes que experimentan recuperación de peso o complicaciones a largo plazo. El Dr. Ruvalcaba también realiza cirugías de revisión bariátrica.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 3. Balón Intragástrico
  // ---------------------------------------------------------------------------
  {
    slug: 'balon-intragastrico',
    imagePath: '/images/procedures/balon-intragastrico.webp',
    title: 'Balón Intragástrico',
    shortTitle: 'Balón Gástrico',
    metaTitle:
      'Balón Intragástrico en Mérida | Dr. Mario Ruvalcaba - Tratamiento sin Cirugía',
    metaDescription:
      'Balón intragástrico en Mérida: pierde peso sin cirugía. Procedimiento ambulatorio de 20 minutos. Ideal para IMC 27-35. Consulta al Dr. Ruvalcaba.',
    heroHeadline: 'Balón Intragástrico en Mérida',
    heroSubheadline:
      'Pierde peso de forma efectiva sin cirugía. Un procedimiento ambulatorio, rápido y seguro que te ayuda a transformar tus hábitos alimenticios.',
    description:
      'El balón intragástrico es un dispositivo de silicón que se coloca dentro del estómago por vía endoscópica, sin necesidad de incisiones ni cirugía. Ocupa espacio en el estómago, generando saciedad temprana y ayudando al paciente a reducir sus porciones y adoptar hábitos alimenticios saludables.',
    longDescription:
      'El balón intragástrico consiste en una esfera de silicón grado médico que se introduce desinflada por vía oral mediante un endoscopio flexible y, una vez dentro del estómago, se llena con solución salina estéril teñida con azul de metileno (entre 400 y 700 ml según el modelo). El balón ocupa aproximadamente un tercio del volumen gástrico, lo que induce una sensación de plenitud y saciedad con cantidades menores de alimento. No requiere incisiones y el procedimiento completo dura entre 20 y 30 minutos bajo sedación ligera (en la mayoría de los casos). El paciente regresa a casa el mismo día.\n\nEl balón permanece en el estómago durante 6 a 12 meses (dependiendo del tipo de dispositivo) y se retira por vía endoscópica de manera similar a como fue colocado. Durante este período, el paciente trabaja con un equipo multidisciplinario —nutriólogo, psicólogo y médico bariátra— para reeducar sus hábitos alimenticios y establecer una rutina de actividad física. La pérdida de peso esperada es del 10% al 15% del peso corporal total (o entre el 30% y el 40% del exceso de peso). El balón intragástrico es ideal para pacientes con sobrepeso u obesidad grado I (IMC entre 27 y 35) que no califican o no desean someterse a cirugía bariátrica, así como para pacientes con obesidad severa como terapia puente antes de un procedimiento quirúrgico definitivo.',
    benefits: [
      {
        title: 'Sin cirugía ni incisiones',
        description:
          'Procedimiento endoscópico que no requiere cortes, suturas ni grapas. Se coloca y retira por vía oral bajo sedación ligera, eliminando los riesgos asociados a la cirugía.',
        icon: '✨',
      },
      {
        title: 'Procedimiento ambulatorio',
        description:
          'Duración de solo 20 a 30 minutos con alta el mismo día. No necesitas hospitalización ni reposo prolongado, pudiendo reincorporarte a tus actividades en 2 a 3 días.',
        icon: '🕐',
      },
      {
        title: 'Reeducación de hábitos',
        description:
          'El balón funciona como una herramienta terapéutica que te enseña a comer porciones adecuadas y a reconocer las señales de saciedad, favoreciendo cambios de hábito duraderos.',
        icon: '🍎',
      },
      {
        title: 'Totalmente reversible',
        description:
          'El balón se retira de forma sencilla por endoscopia al completar el tratamiento (6 a 12 meses), sin dejar modificaciones permanentes en tu anatomía digestiva.',
        icon: '🔄',
      },
    ],
    candidates: [
      'Personas con sobrepeso u obesidad grado I (IMC entre 27 y 35) que no han logrado resultados suficientes con dieta y ejercicio convencionales.',
      'Pacientes que desean perder peso sin someterse a una cirugía bariátrica, ya sea por preferencia personal, condiciones médicas o porque no cumplen los criterios para cirugía.',
      'Personas con obesidad severa (IMC mayor a 40 o 50) que necesitan perder peso de forma previa a una cirugía bariátrica o de otro tipo para reducir el riesgo quirúrgico (terapia puente).',
      'Adultos motivados que estén dispuestos a participar activamente en un programa multidisciplinario de cambio de hábitos alimenticios y actividad física durante los meses que dure el tratamiento.',
      'Pacientes que no presenten contraindicaciones endoscópicas como cirugías gástricas previas, hernias hiatales grandes, úlceras activas o trastornos de la coagulación no controlados.',
    ],
    recovery: [
      {
        period: 'Primera semana',
        description:
          'Los primeros 3 a 5 días son los más intensos en cuanto a adaptación: náuseas, vómitos y cólicos abdominales son frecuentes mientras el estómago se adapta al balón. Se manejan con medicamentos antieméticos y antiespasmódicos. Dieta líquida clara exclusiva. Hidratación constante en sorbos pequeños.',
      },
      {
        period: '2-4 semanas',
        description:
          'Las molestias disminuyen significativamente conforme el cuerpo se adapta. Transición a líquidos completos y luego a alimentos en puré. Inicio formal del programa nutricional con planificación de comidas, registro alimentario y educación sobre porciones adecuadas.',
      },
      {
        period: '1-3 meses',
        description:
          'Alimentación regular con porciones controladas. El paciente aprende a identificar señales de saciedad y hambre verdadera. Inicio o intensificación de la rutina de ejercicio. La pérdida de peso suele ser más acelerada en esta etapa, alcanzando el 5% al 8% del peso corporal total.',
      },
      {
        period: '6-12 meses',
        description:
          'Fase de consolidación de hábitos antes del retiro del balón. El paciente debe haber incorporado un estilo de vida saludable sostenible. Pérdida total esperada del 10% al 15% del peso corporal. Al retirar el balón por endoscopia, el seguimiento nutricional continúa para prevenir la recuperación de peso.',
      },
    ],
    costRange: '',
    duration: '20 - 30 minutos',
    hospitalStay: 'Ambulatorio (mismo día)',
    icon: '⭕',
    faq: [
      {
        question: '¿Es doloroso el procedimiento del balón intragástrico?',
        answer:
          'La colocación del balón se realiza bajo sedación intravenosa, por lo que el paciente no experimenta dolor ni molestias durante el procedimiento. En los primeros 3 a 5 días posteriores es normal presentar náuseas, sensación de pesantez estomacal, cólicos y en algunos casos vómitos, como parte del proceso de adaptación del estómago al balón. Estas molestias se controlan eficazmente con medicamentos antieméticos, antiespasmódicos y protectores gástricos que se prescriben desde el día de la colocación.',
      },
      {
        question: '¿Cuánto peso puedo perder con el balón intragástrico?',
        answer:
          'La pérdida de peso promedio con el balón intragástrico es del 10% al 15% del peso corporal total, lo que equivale a entre el 30% y el 40% del exceso de peso. Por ejemplo, una persona de 100 kg puede esperar perder entre 10 y 15 kg. Los resultados dependen en gran medida del compromiso del paciente con el programa nutricional y de actividad física. Pacientes altamente comprometidos pueden alcanzar pérdidas superiores al 15%. Es importante entender que el balón es una herramienta que facilita el cambio de hábitos, no un sustituto de ellos.',
      },
      {
        question: '¿Qué pasa si el balón se desinfla dentro del estómago?',
        answer:
          'Los balones intragástricos modernos están rellenos de solución salina teñida con azul de metileno, un colorante seguro que actúa como sistema de alerta. Si el balón se perfora o desinfla, el azul de metileno se libera en el estómago y se absorbe, tiñendo la orina de color azul o verdoso. Si el paciente nota este cambio en la orina, debe contactar inmediatamente al Dr. Ruvalcaba para programar la extracción endoscópica del balón desinflado y evitar que migre hacia el intestino. Aunque la desinflación espontánea es poco frecuente (menos del 1%), es importante conocer esta señal de alerta.',
      },
      {
        question: '¿El balón intragástrico es mejor que la cirugía bariátrica?',
        answer:
          'No es mejor ni peor: son tratamientos diferentes para perfiles de pacientes distintos. El balón intragástrico es ideal para sobrepeso y obesidad leve a moderada (IMC 27-35), no requiere cirugía, es reversible y ofrece una pérdida de peso más modesta (10-15% del peso total). La cirugía bariátrica (manga gástrica o bypass) está indicada para obesidad severa (IMC mayor a 35-40), ofrece resultados más dramáticos (60-80% del exceso de peso) y es permanente. El Dr. Ruvalcaba evalúa cada caso de forma integral para recomendar la opción que ofrezca los mejores resultados según las necesidades y objetivos del paciente.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 4. Cirugía de Mínima Invasión
  // ---------------------------------------------------------------------------
  {
    slug: 'cirugia-minima-invasion',
    imagePath: '/images/procedures/cirugia-minima-invasion.webp',
    title: 'Cirugía de Mínima Invasión',
    shortTitle: 'Mínima Invasión',
    metaTitle:
      'Cirugía de Mínima Invasión en Mérida | Dr. Mario Ruvalcaba - Cirugía Laparoscópica',
    metaDescription:
      'Cirugía laparoscópica en Mérida: vesícula, hernias, apéndice y más. Menos dolor, menos cicatrices, recuperación rápida. Dr. Mario Ruvalcaba, cirujano experto.',
    heroHeadline: 'Cirugía de Mínima Invasión en Mérida',
    heroSubheadline:
      'Soluciones quirúrgicas avanzadas con la menor invasión posible. Menos dolor, cicatrices casi invisibles y una recuperación notablemente más rápida.',
    description:
      'La cirugía de mínima invasión utiliza técnicas laparoscópicas avanzadas para tratar diversas patologías abdominales a través de incisiones de 3 a 12 mm. Incluye colecistectomía (vesícula biliar), reparación de hernias, apendicectomía y funduplicatura para reflujo, entre otros procedimientos.',
    longDescription:
      'La cirugía laparoscópica o de mínima invasión representa uno de los avances más significativos de la cirugía moderna. A diferencia de la cirugía abierta tradicional que requiere incisiones grandes (10-20 cm), la laparoscopia permite realizar los mismos procedimientos a través de 3 a 4 pequeñas incisiones (3-12 mm) mediante las cuales se introduce una cámara de alta definición y los instrumentos quirúrgicos especializados. Esto se traduce en menos trauma tisular, menor dolor postoperatorio, menor riesgo de infección de herida y de hernias incisionales, mejor resultado estético y una recuperación significativamente más rápida.\n\nEl Dr. Mario Ruvalcaba cuenta con amplia experiencia en cirugía laparoscópica general y de pared abdominal. Entre los procedimientos que realiza con mayor frecuencia se encuentran: la colecistectomía laparoscópica (extirpación de la vesícula biliar por cálculos o pólipos), la reparación laparoscópica de hernias inguinales, umbilicales, incisionales y de la pared abdominal con o sin colocación de malla, la apendicectomía laparoscópica (extirpación del apéndice en apendicitis aguda) y la funduplicatura de Nissen laparoscópica para el tratamiento definitivo de la enfermedad por reflujo gastroesofágico severo que no responde al tratamiento médico. Cada procedimiento se planifica de manera individualizada, priorizando la seguridad del paciente y la excelencia en los resultados.\n\nAlgunos de estos procedimientos también pueden realizarse mediante Cirugía por Puerto Único, una técnica laparoscópica avanzada que utiliza una sola incisión —generalmente en el ombligo— para lograr un resultado estético superior con cicatrices prácticamente invisibles.',
    benefits: [
      {
        title: 'Menos dolor postoperatorio',
        description:
          'Las incisiones de 3 a 12 mm causan significativamente menos trauma en los tejidos que la cirugía abierta, reduciendo la necesidad de analgésicos fuertes y el dolor durante la recuperación.',
        icon: '💪',
      },
      {
        title: 'Cicatrices mínimas',
        description:
          'Las pequeñas incisiones de la laparoscopia dejan cicatrices prácticamente imperceptibles que se desvanecen con el tiempo, ofreciendo un resultado estético muy superior a la cirugía abierta.',
        icon: '✂️',
      },
      {
        title: 'Recuperación acelerada',
        description:
          'Los pacientes suelen regresar a sus actividades cotidianas en 3 a 7 días, comparado con 2 a 6 semanas que requiere la cirugía abierta convencional para los mismos procedimientos.',
        icon: '🚀',
      },
      {
        title: 'Menor riesgo de complicaciones',
        description:
          'La técnica laparoscópica reduce la incidencia de infecciones de herida quirúrgica, hernias incisionales, adherencias y complicaciones pulmonares asociadas al reposo prolongado en cama.',
        icon: '🛡️',
      },
    ],
    candidates: [
      'Pacientes con cálculos biliares (colelitiasis) sintomáticos, pólipos vesiculares o colecistitis crónica que requieran extirpación de la vesícula biliar.',
      'Personas con hernias inguinales, umbilicales, epigástricas o incisionales que causen dolor, molestias o riesgo de encarcelamiento o estrangulación.',
      'Pacientes con apendicitis aguda que requieran extirpación quirúrgica urgente o programada del apéndice cecal.',
      'Personas con enfermedad por reflujo gastroesofágico (ERGE) severo que no responde adecuadamente al tratamiento con medicamentos inhibidores de bomba de protones y requieren corrección quirúrgica.',
      'Adultos y adolescentes con patología abdominal susceptible de abordaje laparoscópico, en quienes la evaluación prequirúrgica confirme que son candidatos seguros para anestesia general.',
    ],
    recovery: [
      {
        period: 'Primera semana',
        description:
          'Según el procedimiento realizado, el paciente puede irse a casa el mismo día o al día siguiente. Reposo relativo con caminatas cortas desde el primer día. Dieta horas después de tu cirugía, líquida o blanda según el tipo de cirugía. Manejo del dolor con analgésicos orales. Cuidado de las pequeñas incisiones manteniéndolas limpias y secas.',
      },
      {
        period: '2-4 semanas',
        description:
          'La mayoría de los pacientes se reincorporan a actividades laborales y cotidianas entre los 5 y 14 días dependiendo de la complejidad del procedimiento. Alimentación regular sin restricciones significativas. Evitar levantar objetos pesados (más de 5 kg) y realizar ejercicio intenso.',
      },
      {
        period: '1-3 meses',
        description:
          'Recuperación prácticamente completa. Reincorporación gradual a actividad física intensa y ejercicio con pesas. En caso de reparación de hernia con malla, se consolida la integración del material protésico. Revisión médica de seguimiento para verificar la cicatrización adecuada.',
      },
      {
        period: '6-12 meses',
        description:
          'Recuperación total sin restricciones. Las cicatrices se desvanecen progresivamente hasta ser casi imperceptibles. En el caso de funduplicatura, los síntomas de reflujo deben haberse resuelto completamente. Seguimiento anual de rutina según el procedimiento realizado.',
      },
    ],
    costRange: '',
    duration: '30 min - 2 horas',
    hospitalStay: 'Ambulatorio - 1 noche',
    icon: '✨',
    faq: [
      {
        question: '¿Cuándo es necesario operar la vesícula biliar?',
        answer:
          'La colecistectomía (extirpación de la vesícula) está indicada cuando existen cálculos biliares que producen síntomas como dolor en la parte superior derecha del abdomen (cólico biliar), náuseas, vómitos, intolerancia a alimentos grasos o cuando hay complicaciones como colecistitis aguda (inflamación), coledocolitiasis (cálculos en el conducto biliar) o pancreatitis biliar. También se recomienda en presencia de pólipos vesiculares mayores a 10 mm por riesgo de malignidad. Los cálculos biliares no se disuelven con medicamentos ni tratamientos alternativos; la cirugía laparoscópica es el tratamiento definitivo y seguro.',
      },
      {
        question: '¿La cirugía laparoscópica deja cicatrices?',
        answer:
          'Sí, pero son mínimas. La cirugía laparoscópica se realiza a través de 3 a 4 incisiones de entre 3 y 12 mm, que generan cicatrices muy pequeñas comparadas con las incisiones de 10 a 20 cm de la cirugía abierta. Con el tiempo, estas marcas se vuelven prácticamente invisibles. El Dr. Ruvalcaba utiliza técnicas de cierre cosmético y, cuando es posible, coloca las incisiones en zonas poco visibles (como el ombligo) para optimizar el resultado estético.',
      },
      {
        question:
          '¿Cuánto tiempo después de la cirugía puedo regresar al trabajo?',
        answer:
          'El tiempo varía según el procedimiento y el tipo de actividad laboral. Para trabajos de oficina o actividades sedentarias, la mayoría de los pacientes pueden reincorporarse en 5 a 7 días tras una colecistectomía o apendicectomía. Para reparación de hernias, puede requerirse de 7 a 14 días dependiendo del tamaño y ubicación de la hernia. Para trabajos que implican esfuerzo físico moderado a intenso, se recomienda esperar de 3 a 4 semanas. El Dr. Ruvalcaba proporciona incapacidades médicas personalizadas según las necesidades de cada paciente.',
      },
      {
        question: '¿Qué tipos de hernia pueden repararse por laparoscopia?',
        answer:
          'Prácticamente todas las hernias de la pared abdominal pueden repararse por vía laparoscópica: hernias inguinales (directas e indirectas), hernias umbilicales, hernias epigástricas, hernias incisionales (que aparecen en cicatrices de cirugías previas) y hernias de Spiegel, entre otras. La reparación laparoscópica suele incluir la colocación de una malla protésica que refuerza la pared abdominal y reduce significativamente la tasa de recurrencia (de un 10-15% sin malla a menos del 2% con malla). Esta técnica es especialmente ventajosa en hernias bilaterales o recurrentes.',
      },
    ],
  },
  // ---------------------------------------------------------------------------
  // 5. Cirugía para Diástasis de Rectos
  // ---------------------------------------------------------------------------
  {
    slug: 'cirugia-diastasis-rectos',
    imagePath: '/images/procedures/diastasis-rectos.webp',
    title: 'Cirugía para Diástasis de Rectos',
    shortTitle: 'Diástasis de Rectos',
    metaTitle:
      'Cirugía para Diástasis de Rectos en Mérida | Dr. Mario Ruvalcaba',
    metaDescription:
      'Reparación quirúrgica de diástasis de rectos en Mérida. Técnica laparoscópica para restaurar la pared abdominal. Consulta con el Dr. Mario Ruvalcaba.',
    heroHeadline: 'Cirugía para Diástasis de Rectos en Mérida',
    heroSubheadline:
      'Restaura la funcionalidad y apariencia de tu pared abdominal con técnicas quirúrgicas de mínima invasión. Resultados efectivos y recuperación optimizada.',
    description:
      'La diástasis de rectos es la separación de los músculos rectos del abdomen, frecuente después del embarazo o en casos de obesidad. La reparación quirúrgica restaura la integridad de la pared abdominal, mejorando tanto la función como la apariencia del abdomen.',
    longDescription:
      'La diástasis de rectos abdominales consiste en la separación anormal de los dos músculos rectos del abdomen a lo largo de la línea alba (línea media del abdomen). Esta condición es especialmente frecuente en mujeres después de uno o múltiples embarazos, aunque también puede presentarse en hombres con obesidad abdominal significativa o tras pérdida masiva de peso. La separación muscular provoca un abultamiento visible en la línea media del abdomen, debilidad de la pared abdominal, dolor lumbar, dificultad para realizar actividades físicas y, en algunos casos, hernias asociadas.\n\nCuando los ejercicios de rehabilitación y fisioterapia no logran corregir la diástasis, la reparación quirúrgica es el tratamiento definitivo. El Dr. Mario Ruvalcaba realiza la reparación mediante técnica laparoscópica o abierta según la severidad del caso, aproximando los músculos rectos a su posición anatómica y reforzando la línea alba. En casos seleccionados, puede combinarse con la colocación de malla para mayor soporte. El procedimiento restaura la funcionalidad de la musculatura abdominal, mejora la postura, alivia el dolor lumbar asociado y devuelve un contorno abdominal más firme y natural.',
    benefits: [
      {
        title: 'Restauración funcional',
        description:
          'Devuelve la integridad y fuerza a la pared abdominal, mejorando la postura, la estabilidad del core y la capacidad para realizar actividades físicas sin molestias.',
        icon: '💪',
      },
      {
        title: 'Mejora estética del abdomen',
        description:
          'Corrige el abultamiento visible de la línea media abdominal, logrando un contorno más firme, plano y natural.',
        icon: '✨',
      },
      {
        title: 'Alivio de dolor lumbar',
        description:
          'Al restaurar el soporte muscular anterior, se reduce significativamente el dolor de espalda baja asociado a la debilidad de la pared abdominal.',
        icon: '🛡️',
      },
      {
        title: 'Técnica mínimamente invasiva',
        description:
          'En casos seleccionados, se realiza por vía laparoscópica con incisiones pequeñas, lo que reduce el dolor postoperatorio y acelera la recuperación.',
        icon: '🔬',
      },
    ],
    candidates: [
      'Mujeres con separación de los músculos rectos del abdomen persistente después de uno o más embarazos, que no mejora con ejercicios de rehabilitación.',
      'Personas con diástasis de rectos que presentan síntomas como dolor lumbar crónico, debilidad abdominal funcional o hernias asociadas.',
      'Pacientes post-bariátricos o con pérdida masiva de peso que presentan diástasis de rectos con exceso de piel abdominal.',
      'Hombres con diástasis de rectos secundaria a obesidad abdominal que persiste tras la pérdida de peso.',
      'Adultos que han completado al menos 6 meses de rehabilitación física sin mejoría significativa y desean una solución definitiva.',
    ],
    recovery: [
      {
        period: 'Primera semana',
        description:
          'Reposo relativo con deambulación temprana. Uso de faja abdominal compresiva las 24 horas. Manejo del dolor con analgésicos orales. Evitar esfuerzos abdominales y levantar objetos pesados.',
      },
      {
        period: '2-4 semanas',
        description:
          'Continuar con faja abdominal. Reincorporación gradual a actividades cotidianas y laborales sedentarias. Evitar ejercicios abdominales directos y cargar más de 5 kg.',
      },
      {
        period: '1-3 meses',
        description:
          'Retiro progresivo de la faja abdominal según indicación médica. Inicio de ejercicios suaves de fortalecimiento del core bajo supervisión. Actividad física moderada permitida.',
      },
      {
        period: '3-6 meses',
        description:
          'Recuperación completa. Reincorporación a actividad física sin restricciones. Los resultados finales en cuanto a contorno y firmeza abdominal se aprecian plenamente a los 3 a 6 meses.',
      },
    ],
    costRange: '',
    duration: '1.5 - 2.5 horas',
    hospitalStay: '1 noche',
    icon: '🏋️',
    faq: [
      {
        question: '¿Cómo sé si tengo diástasis de rectos?',
        answer:
          'La diástasis de rectos se manifiesta como un abultamiento o cresta visible en la línea media del abdomen al realizar esfuerzo abdominal (como al incorporarse estando acostado). Puede acompañarse de debilidad abdominal, dolor lumbar y sensación de flacidez. El diagnóstico se confirma mediante exploración física y, en algunos casos, ultrasonido de pared abdominal. Una separación mayor a 2 cm entre los músculos rectos se considera diástasis significativa. El Dr. Ruvalcaba realiza una evaluación completa para determinar el grado de separación y la mejor opción de tratamiento.',
      },
      {
        question: '¿Los ejercicios pueden corregir la diástasis de rectos?',
        answer:
          'En casos leves (separación menor a 2-3 cm), un programa de ejercicios específicos de rehabilitación del suelo pélvico y core profundo, guiado por un fisioterapeuta especializado, puede mejorar significativamente la condición. Sin embargo, en diástasis moderadas a severas (mayor a 3 cm) o cuando hay hernias asociadas, los ejercicios por sí solos no logran cerrar la separación y la reparación quirúrgica es necesaria para restaurar la integridad de la pared abdominal.',
      },
      {
        question: '¿Se puede combinar con abdominoplastía?',
        answer:
          'Sí, en pacientes que además de la diástasis de rectos presentan exceso de piel y tejido graso abdominal (frecuente después del embarazo o pérdida masiva de peso), la reparación de la diástasis puede combinarse con una abdominoplastía en un solo tiempo quirúrgico. Esto permite corregir tanto la separación muscular como el exceso de piel, obteniendo un resultado funcional y estético integral. El Dr. Ruvalcaba trabaja en conjunto con cirujanos plásticos cuando se requiere este abordaje combinado.',
      },
      {
        question: '¿La diástasis de rectos puede regresar después de la cirugía?',
        answer:
          'La recurrencia después de una reparación quirúrgica adecuada es poco frecuente (menos del 5%). Los factores que pueden aumentar el riesgo de recurrencia incluyen un nuevo embarazo, ganancia significativa de peso y la realización de esfuerzos abdominales intensos antes de completar la recuperación. Por ello, se recomienda esperar al menos 12 meses antes de un nuevo embarazo y seguir las indicaciones de recuperación al pie de la letra.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 6. Cirugías de Urgencias 24/7
  // ---------------------------------------------------------------------------
  {
    slug: 'cirugias-urgencias',
    imagePath: '/images/procedures/cirugias-urgencias.webp',
    title: 'Cirugías de Urgencias 24/7',
    shortTitle: 'Urgencias 24/7',
    metaTitle:
      'Cirugías de Urgencias 24/7 en Mérida | Dr. Mario Ruvalcaba',
    metaDescription:
      'Atención quirúrgica de urgencias las 24 horas en Mérida. Apendicitis, vesícula, hernias complicadas y más. Dr. Mario Ruvalcaba, cirujano general certificado.',
    heroHeadline: 'Cirugías de Urgencias 24/7 en Mérida',
    heroSubheadline:
      'Atención quirúrgica de emergencia disponible las 24 horas del día, los 7 días de la semana. Respuesta rápida y experiencia comprobada cuando más lo necesitas.',
    description:
      'Atención quirúrgica de emergencia disponible las 24 horas. El Dr. Ruvalcaba atiende urgencias como apendicitis aguda, colecistitis, hernias complicadas, obstrucción intestinal y otras emergencias abdominales con rapidez y experiencia.',
    longDescription:
      'Las urgencias quirúrgicas abdominales requieren atención inmediata por un cirujano experimentado para evitar complicaciones graves. El Dr. Mario Ruvalcaba ofrece disponibilidad las 24 horas del día, los 7 días de la semana, para atender emergencias quirúrgicas en Mérida, Yucatán. Entre las urgencias que atiende con mayor frecuencia se encuentran: apendicitis aguda, colecistitis aguda (inflamación de la vesícula biliar), hernias inguinales o ventrales encarceladas o estranguladas, obstrucción intestinal, úlceras perforadas y abscesos intraabdominales.\n\nCada minuto cuenta en una emergencia quirúrgica. El Dr. Ruvalcaba prioriza el diagnóstico rápido y preciso, utilizando los recursos de imagen y laboratorio disponibles en los hospitales donde opera para tomar decisiones quirúrgicas oportunas. Siempre que las condiciones del paciente lo permiten, se prefiere el abordaje laparoscópico (mínima invasión) incluso en contexto de urgencia, lo que se traduce en menor dolor postoperatorio, menor riesgo de infección y una recuperación más rápida. La combinación de experiencia, disponibilidad inmediata y técnica quirúrgica depurada garantiza la mejor atención posible en el momento más crítico.',
    benefits: [
      {
        title: 'Disponibilidad 24/7',
        description:
          'Atención quirúrgica de emergencia disponible a cualquier hora del día o la noche, los 365 días del año. Tiempo de respuesta rápido para evaluación y decisión quirúrgica.',
        icon: '🕐',
      },
      {
        title: 'Diagnóstico rápido y preciso',
        description:
          'Evaluación clínica experta complementada con estudios de laboratorio e imagen para un diagnóstico certero y toma de decisiones quirúrgicas oportunas.',
        icon: '⚡',
      },
      {
        title: 'Mínima invasión en urgencias',
        description:
          'Siempre que es posible, se utiliza técnica laparoscópica incluso en cirugías de urgencia, reduciendo el trauma quirúrgico y acelerando la recuperación del paciente.',
        icon: '🔬',
      },
      {
        title: 'Experiencia comprobada',
        description:
          'Cirujano general certificado con amplia experiencia en el manejo de emergencias quirúrgicas abdominales complejas.',
        icon: '🛡️',
      },
    ],
    candidates: [
      'Pacientes con dolor abdominal agudo severo que requiere evaluación quirúrgica urgente.',
      'Personas con diagnóstico o sospecha de apendicitis aguda que necesitan apendicectomía de emergencia.',
      'Pacientes con colecistitis aguda (inflamación de vesícula) que no responde a tratamiento médico y requiere cirugía.',
      'Personas con hernias inguinales o ventrales encarceladas o estranguladas que representan una emergencia quirúrgica.',
      'Pacientes con obstrucción intestinal, úlceras perforadas u otras emergencias abdominales que requieren intervención quirúrgica inmediata.',
    ],
    recovery: [
      {
        period: 'Hospitalización',
        description:
          'Según la complejidad de la urgencia, la estancia hospitalaria varía de 1 a 5 días. Monitoreo estrecho de signos vitales, control del dolor y vigilancia de la evolución postquirúrgica. Inicio temprano de deambulación.',
      },
      {
        period: 'Primera semana en casa',
        description:
          'Reposo relativo con caminatas cortas. Dieta progresiva según el tipo de cirugía realizada. Manejo del dolor con medicamentos orales. Cuidado de heridas quirúrgicas y signos de alarma.',
      },
      {
        period: '2-4 semanas',
        description:
          'Reincorporación gradual a actividades cotidianas según la evolución. Seguimiento en consultorio para revisión de heridas y valoración de la recuperación. Evitar esfuerzos físicos intensos.',
      },
      {
        period: '1-3 meses',
        description:
          'Recuperación completa en la mayoría de los casos. Retorno a la actividad física normal. Seguimiento final para asegurar la resolución completa de la patología que motivó la urgencia.',
      },
    ],
    costRange: '',
    duration: '30 min - 3 horas',
    hospitalStay: '1 - 5 noches',
    icon: '🚑',
    faq: [
      {
        question: '¿Cómo contacto al Dr. Ruvalcaba en caso de urgencia?',
        answer:
          'En caso de emergencia quirúrgica, puede comunicarse directamente al número de WhatsApp o teléfono del consultorio, disponible las 24 horas. También puede acudir directamente al área de urgencias de los hospitales donde el Dr. Ruvalcaba tiene privilegios quirúrgicos en Mérida. Se recomienda llamar primero para coordinar la atención y reducir tiempos de espera.',
      },
      {
        question: '¿Qué señales indican que necesito una cirugía de urgencia?',
        answer:
          'Los signos de alarma que requieren evaluación quirúrgica urgente incluyen: dolor abdominal severo y progresivo, especialmente si se acompaña de fiebre, vómitos persistentes, distensión abdominal, ausencia de evacuaciones o gases, o si el abdomen se siente rígido al tacto. También son señales de alarma el enrojecimiento, dolor intenso o crecimiento súbito de una hernia conocida. Ante cualquiera de estos síntomas, busque atención médica de emergencia de inmediato.',
      },
      {
        question: '¿Se puede hacer cirugía laparoscópica en urgencias?',
        answer:
          'Sí, en la mayoría de las urgencias abdominales se puede y se prefiere utilizar la técnica laparoscópica siempre que las condiciones del paciente lo permitan. La apendicectomía y colecistectomía de urgencia se realizan de forma rutinaria por laparoscopia. Incluso en casos de hernias complicadas y algunas obstrucciones intestinales, el abordaje laparoscópico es factible. Las ventajas incluyen mejor visualización de la cavidad abdominal, menor dolor, menor riesgo de infección de herida y recuperación más rápida.',
      },
      {
        question: '¿Qué hospitales atiende el Dr. Ruvalcaba para urgencias?',
        answer:
          'El Dr. Mario Ruvalcaba cuenta con privilegios quirúrgicos en hospitales de primer nivel en Mérida, Yucatán, equipados con quirófanos disponibles las 24 horas, equipo de laparoscopia, unidad de cuidados intensivos y servicios de apoyo diagnóstico completos. Durante la consulta inicial o al momento de la urgencia, se coordina la atención en el hospital más conveniente según la ubicación del paciente y la disponibilidad.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 7. Cirugía Bariátrica y Metabólica (Hub)
  // ---------------------------------------------------------------------------
  {
    slug: 'cirugia-bariatrica-metabolica',
    title: 'Cirugía Bariátrica y Metabólica',
    shortTitle: 'Cirugía Bariátrica',
    metaTitle: 'Cirugía Bariátrica y Metabólica en Mérida | Dr. Mario Ruvalcaba',
    metaDescription: 'Procedimientos bariátricos y metabólicos en Mérida con el Dr. Mario Ruvalcaba: manga gástrica, bypass gástrico, bipartición de tránsito intestinal, SADI-S y más. Agenda tu valoración hoy.',
    heroHeadline: 'Cirugía Bariátrica y Metabólica en Mérida',
    heroSubheadline: 'Tratamiento quirúrgico especializado de la obesidad y enfermedades metabólicas. Técnicas laparoscópicas de vanguardia con acompañamiento multidisciplinario integral.',
    description: 'La cirugía bariátrica y metabólica comprende un conjunto de procedimientos quirúrgicos que modifican el aparato digestivo para lograr pérdida de peso sostenida y mejorar o resolver enfermedades asociadas a la obesidad como diabetes tipo 2, hipertensión y síndrome metabólico.',
    longDescription: 'La cirugía bariátrica y metabólica en Mérida es la intervención más efectiva y duradera para tratar la obesidad severa y sus complicaciones. A diferencia de las dietas y los medicamentos, estos procedimientos producen cambios anatómicos y hormonales permanentes en la regulación del apetito, la saciedad y el metabolismo de la glucosa. Según la OMS, más de 650 millones de adultos viven con obesidad a nivel mundial; en México, la prevalencia supera el 36% en población adulta. Los estudios a largo plazo reportan pérdidas del exceso de peso superiores al 60% mantenidas a 10 años, con tasas de remisión de diabetes tipo 2 entre el 60% y el 90% según el procedimiento elegido.\n\nEl Dr. Mario Ruvalcaba, especialista en cirugía bariátrica en Mérida, ofrece una cartera completa de procedimientos realizados por vía laparoscópica de mínima invasión: manga gástrica, bypass gástrico en Y de Roux, balón intragástrico, bipartición de tránsito intestinal, SADI-S y cirugías de revisión y conversión. Cada cirugía se realiza con técnica depurada, equipo de última generación y bajo protocolos de seguridad internacionales reconocidos por la IFSO.\n\nEl Dr. Ruvalcaba cuenta con certificación del Consejo Mexicano de Cirugía General, es miembro activo de la IFSO (International Federation for the Surgery of Obesity) y tiene más de 5 años de experiencia dedicados a la cirugía bariátrica y metabólica en Mérida, Yucatán. Opera en los hospitales de mayor prestigio de la ciudad, con quirófanos equipados para laparoscopia avanzada y unidades de cuidados intensivos. Su equipo multidisciplinario —nutriólogo, psicólogo, internista y cirujano— garantiza la evaluación integral y el seguimiento personalizado que cada paciente necesita.\n\nLos resultados son transformadores: pérdida del 60% al 95% del exceso de peso según el procedimiento, con mejoría o remisión de la diabetes tipo 2, hipertensión, apnea del sueño y síndrome metabólico en la mayoría de los pacientes. La recuperación postoperatoria es rápida gracias al abordaje laparoscópico, con reincorporación a actividades en 1 a 2 semanas. Si luchas contra la obesidad y sus complicaciones, la cirugía bariátrica y metabólica puede cambiar tu vida. Agenda tu valoración hoy.',
    benefits: [
      {
        title: 'Pérdida de Peso Sostenida',
        description: 'Los procedimientos bariátricos logran pérdidas del exceso de peso superiores al 60% mantenidas a largo plazo, superando a cualquier tratamiento médico o dietético.',
        icon: '📉',
      },
      {
        title: 'Remisión de Enfermedades Metabólicas',
        description: 'Tasas de remisión de diabetes tipo 2 entre el 60% y el 90%, con mejoría significativa de hipertensión, dislipidemia y apnea del sueño.',
        icon: '🩸',
      },
      {
        title: 'Técnicas Laparoscópicas',
        description: 'Todos los procedimientos se realizan por mínima invasión, con recuperación rápida, menor dolor postoperatorio y cicatrices prácticamente imperceptibles.',
        icon: '🔬',
      },
      {
        title: 'Atención Multidisciplinaria',
        description: 'Protocolo completo con nutriólogo, psicólogo, internista y cirujano bariátrico para garantizar la seguridad y los mejores resultados a largo plazo.',
        icon: '👨‍⚕️',
      },
    ],
    candidates: [
      'Personas con IMC ≥ 40, o IMC ≥ 35 con comorbilidades como diabetes tipo 2, hipertensión, apnea del sueño o enfermedad articular.',
      'Pacientes que han intentado métodos convencionales de pérdida de peso sin resultados sostenidos durante al menos 6 meses.',
      'Adultos entre 18 y 65 años con disposición a comprometerse con cambios permanentes de estilo de vida y seguimiento médico postquirúrgico.',
      'Personas con diabetes tipo 2 mal controlada e IMC entre 30 y 34.9 que pueden beneficiarse de cirugía metabólica.',
      'Pacientes sin contraindicaciones quirúrgicas graves y con evaluación multidisciplinaria favorable.',
    ],
    recovery: [
      {
        period: 'Primera semana',
        description: 'Internamiento hospitalario de 1 a 3 noches según el procedimiento. Dieta líquida estricta. Movilización temprana desde el primer día para prevenir complicaciones.',
      },
      {
        period: '2–4 semanas',
        description: 'Transición gradual a dieta líquida completa y purés proteicos. Inicio de suplementación vitamínica. Reincorporación a actividades sedentarias.',
      },
      {
        period: '1–3 meses',
        description: 'Incorporación progresiva de alimentos blandos y sólidos. Inicio de actividad física moderada. Seguimiento nutricional y ajuste de medicamentos metabólicos.',
      },
      {
        period: '6–12 meses',
        description: 'Pérdida del 60% o más del exceso de peso según el procedimiento. Seguimiento trimestral con laboratorios para monitorear niveles nutricionales y metabólicos.',
      },
    ],
    costRange: '',
    duration: 'Variable',
    hospitalStay: '1 - 3 noches',
    icon: '⚕️',
    faq: [
      {
        question: '¿Cómo sé qué procedimiento bariátrico es el mejor para mí?',
        answer: 'La selección del procedimiento depende del IMC, las enfermedades asociadas, el historial médico y quirúrgico, y los objetivos de cada paciente. El Dr. Ruvalcaba realiza una evaluación multidisciplinaria completa para recomendar la opción más adecuada. En términos generales: la manga gástrica es la primera opción para la mayoría; el bypass gástrico es preferido cuando hay reflujo severo o diabetes de larga evolución; la bipartición y el SADI-S se reservan para obesidad severa o cuando se requiere mayor potencia metabólica.',
      },
      {
        question: '¿Cuánto peso puedo perder con cirugía bariátrica?',
        answer: 'Los resultados varían según el procedimiento: la manga gástrica logra pérdidas del 60-70% del exceso de peso; el bypass gástrico, del 70-80%; la bipartición de tránsito intestinal y el SADI-S superan el 80-95%. El seguimiento nutricional y el compromiso con los cambios de estilo de vida son determinantes para mantener los resultados a largo plazo.',
      },
      {
        question: '¿La cirugía bariátrica es segura?',
        answer: 'En manos de un cirujano bariátrico certificado y con la infraestructura hospitalaria adecuada, la cirugía bariátrica laparoscópica tiene tasas de complicaciones menores al 3%, comparables a las de una colecistectomía. La evaluación preoperatoria rigurosa y el protocolo multidisciplinario minimizan los riesgos y optimizan la seguridad del procedimiento.',
      },
      {
        question: '¿Necesito tomar suplementos de por vida?',
        answer: 'Sí. Todos los procedimientos bariátricos requieren suplementación vitamínica de por vida, aunque las dosis y tipos varían según el procedimiento. La manga gástrica requiere suplementos básicos (multivitamínico, calcio, vitamina D, B12 y proteína). El bypass y los procedimientos malabsortivos como el SADI-S requieren suplementación más intensiva. El seguimiento nutricional periódico garantiza que los niveles se mantengan dentro de rangos óptimos.',
      },
      {
        question: '¿Cuánto cuesta la cirugía bariátrica en Mérida?',
        answer: 'El costo varía según el procedimiento específico, el hospital donde se realiza y los estudios preoperatorios requeridos. El Dr. Ruvalcaba ofrece una valoración inicial para determinar el procedimiento más adecuado y proporcionar un presupuesto personalizado. Algunos seguros de gastos médicos cubren parte o la totalidad del procedimiento cuando existen indicaciones médicas documentadas. Comunícate con el consultorio para obtener información detallada sobre costos y opciones de financiamiento.',
      },
      {
        question: '¿Cuánto tiempo dura la cirugía bariátrica?',
        answer: 'El tiempo varía según el procedimiento: la manga gástrica dura entre 1 y 1.5 horas; el bypass gástrico entre 2 y 3 horas; la bipartición de tránsito intestinal y el SADI-S entre 2.5 y 3.5 horas. Las cirugías de revisión y conversión pueden requerir de 2 a 4 horas según la complejidad. Todos los procedimientos se realizan bajo anestesia general en quirófano hospitalario.',
      },
      {
        question: '¿Cuándo puedo regresar al trabajo después de la cirugía bariátrica?',
        answer: 'Para trabajos sedentarios o de oficina, la mayoría de los pacientes se reincorporan entre los 10 y 14 días postoperatorios. Para trabajos que implican esfuerzo físico moderado o intenso, se recomienda esperar entre 4 y 6 semanas. El Dr. Ruvalcaba proporciona un certificado médico de incapacidad personalizado según el procedimiento realizado y el tipo de actividad laboral de cada paciente.',
      },
    ],
    relevantSpecialty: 'Bariatric Surgery',
    bodyLocation: 'Stomach, Digestive System',
    imagePath: '/images/procedures/cirugia-bariatrica-metabolica.webp',
    preparation: 'Ayuno de 8 horas previo a la cirugía. Se requiere evaluación médica preoperatoria completa incluyendo análisis de sangre, valoración nutricional y psicológica, y en algunos casos estudios de imagen o endoscopía.',
  },

  // ---------------------------------------------------------------------------
  // 8. Bipartición de Tránsito Intestinal
  // ---------------------------------------------------------------------------
  {
    slug: 'biparticion-transito-intestinal',
    title: 'Bipartición de Tránsito Intestinal',
    shortTitle: 'Bipartición Intestinal',
    metaTitle: 'Bipartición de Tránsito Intestinal en Mérida | Dr. Mario Ruvalcaba',
    metaDescription: 'Bipartición intestinal en Mérida. Dr. Mario Ruvalcaba. Tratamiento metabólico para diabetes tipo 2 y obesidad. Remisión >85%. Agenda tu valoración hoy.',
    heroHeadline: 'Bipartición de Tránsito Intestinal en Mérida',
    heroSubheadline: 'Procedimiento metabólico de vanguardia que combina los beneficios restrictivos de la manga gástrica con una potente modulación hormonal intestinal para el control de la diabetes tipo 2 y la obesidad.',
    description: 'La bipartición de tránsito intestinal (BTI) combina la gastrectomía vertical en manga con una anastomosis ileoyeyunal que crea un circuito intestinal paralelo, estimulando la liberación de hormonas como el GLP-1 para mejorar el control glucémico sin generar malabsorción severa.',
    longDescription: 'La bipartición de tránsito intestinal (BTI) es un procedimiento quirúrgico metabólico innovador que combina la gastrectomía vertical en manga con una derivación parcial del intestino delgado. A diferencia del bypass gástrico tradicional, esta técnica no excluye ningún segmento intestinal, sino que crea un circuito paralelo que permite el contacto precoz de los alimentos con el íleon distal. Esto estimula la liberación de hormonas intestinales como el GLP-1 y el péptido YY, que mejoran el control glucémico de forma significativa y sostenida. La BTI está especialmente indicada en pacientes con diabetes tipo 2 mal controlada e IMC entre 30 y 35 kg/m², situación en la que la cirugía metabólica supera en efectividad a cualquier tratamiento médico disponible. En Mérida y Yucatán, la prevalencia de diabetes tipo 2 asociada a obesidad hace de este procedimiento una herramienta terapéutica de alto impacto poblacional.\n\nEl Dr. Mario Ruvalcaba realiza la bipartición de tránsito intestinal en Mérida por vía laparoscópica de mínima invasión, utilizando 4 a 5 puertos de trabajo. El procedimiento consiste en realizar primero la gastrectomía vertical en manga y luego construir la anastomosis ileoyeyunal que crea el circuito intestinal paralelo. La cirugía dura entre 2 y 3 horas bajo anestesia general y requiere internamiento de 2 a 3 noches. La técnica laparoscópica minimiza el dolor postoperatorio, el riesgo de infección de herida y acelera la recuperación en comparación con el abordaje abierto.\n\nEspecialista en bipartición de tránsito intestinal en Yucatán, el Dr. Ruvalcaba cuenta con certificación del Consejo Mexicano de Cirugía General, membresía activa en la IFSO y más de 5 años de experiencia en procedimientos bariátricos y metabólicos complejos. Opera en los hospitales de mayor nivel de Mérida, con infraestructura quirúrgica de vanguardia. Su equipo multidisciplinario —nutriólogo, psicólogo e internista— acompaña al paciente desde la evaluación preoperatoria hasta el seguimiento a largo plazo, garantizando los mejores resultados posibles.\n\nLos estudios clínicos reportan tasas de remisión de diabetes tipo 2 superiores al 85% al primer año, con pérdida del 60% al 75% del exceso de peso. Adicionalmente, se observa mejoría significativa de la hipertensión arterial, dislipidemia y síndrome metabólico en la mayoría de los pacientes. La mayoría se reincorpora a actividades laborales sedentarias entre los días 10 y 14, y a actividad física plena entre las 4 y 6 semanas. Si tienes diabetes tipo 2 y obesidad, la BTI puede ofrecerte la solución definitiva que los medicamentos no han logrado. Agenda tu valoración hoy.',
    benefits: [
      {
        title: 'Control de Diabetes Tipo 2',
        description: 'Tasas de remisión superiores al 85% al primer año, incluso en pacientes con IMC menor a 35, mediante potente modulación hormonal intestinal.',
        icon: '🩸',
      },
      {
        title: 'Pérdida de Peso Efectiva',
        description: 'Pérdida del 60% al 75% del exceso de peso en los primeros 12 a 18 meses, combinando restricción gástrica y cambios hormonales.',
        icon: '📉',
      },
      {
        title: 'Sin Malabsorción Severa',
        description: 'A diferencia del bypass, no excluye ningún segmento intestinal, reduciendo el riesgo de deficiencias nutricionales graves.',
        icon: '🧬',
      },
      {
        title: 'Mínima Invasión',
        description: 'Técnica laparoscópica con recuperación más rápida, menor dolor postoperatorio y cicatrices prácticamente imperceptibles.',
        icon: '🔬',
      },
    ],
    candidates: [
      'Pacientes con IMC ≥ 35 con diabetes tipo 2, síndrome metabólico o enfermedades asociadas a la obesidad.',
      'Personas con IMC 30–34.9 con diabetes tipo 2 mal controlada a pesar de tratamiento médico óptimo (indicación metabólica).',
      'Pacientes que ya se realizaron una manga gástrica y presentan reganancia de peso o diabetes persistente que pueden beneficiarse de una conversión a BTI.',
      'Adultos con evaluación multidisciplinaria favorable (nutricional, psicológica y médica) y compromiso con los cambios de estilo de vida.',
      'Pacientes sin contraindicaciones para anestesia general ni cirugía abdominal mayor previa que comprometa la viabilidad del procedimiento.',
    ],
    recovery: [
      {
        period: 'Primera semana',
        description: 'Dieta líquida clara exclusiva. Internamiento de 2 a 3 noches en hospital. Movilización temprana desde el primer día postoperatorio para prevenir complicaciones tromboembólicas. Manejo del dolor con analgésicos intravenosos y orales.',
      },
      {
        period: '2–4 semanas',
        description: 'Transición a dieta líquida completa y posteriormente papillas proteicas. Inicio de suplementación vitamínica y de proteína. Reincorporación a actividades cotidianas sedentarias alrededor del día 10 a 14. Seguimiento nutricional presencial o virtual.',
      },
      {
        period: '1–3 meses',
        description: 'Incorporación progresiva de alimentos blandos y sólidos. Inicio de actividad física moderada. Ajuste de medicamentos para diabetes, generalmente con reducción o suspensión supervisada de hipoglucemiantes. Pérdida esperada del 30% al 45% del exceso de peso.',
      },
      {
        period: '6–12 meses',
        description: 'Alimentación variada con énfasis en proteínas y vegetales. Actividad física regular sin restricciones. Pérdida del 60% al 75% del exceso de peso. Control glucémico estable. Seguimiento trimestral con laboratorios para monitorear niveles nutricionales y metabólicos.',
      },
    ],
    costRange: '',
    duration: '2 - 3 horas',
    hospitalStay: '2 - 3 noches',
    icon: '🔀',
    faq: [
      {
        question: '¿En qué se diferencia la bipartición de tránsito del bypass gástrico?',
        answer: 'La principal diferencia es que en la bipartición de tránsito intestinal no se excluye ningún segmento del intestino delgado: el alimento puede pasar tanto por el circuito normal como por el nuevo circuito ileoyeyunal. Esto permite aprovechar los potentes efectos hormonales del íleon distal sin generar la malabsorción que puede presentarse en el bypass gástrico. Además, la bipartición conserva el píloro, lo que reduce el síndrome de dumping.',
      },
      {
        question: '¿Puedo dejar de tomar medicamentos para la diabetes después de la cirugía?',
        answer: 'En la mayoría de los casos, sí. Las tasas de remisión de diabetes tipo 2 con la bipartición de tránsito intestinal superan el 85% al primer año. Sin embargo, la reducción o suspensión de medicamentos siempre debe realizarse de manera gradual y bajo supervisión médica estricta, monitoreando regularmente la glucosa en sangre.',
      },
      {
        question: '¿Cuánto tiempo tarda la recuperación completa?',
        answer: 'La mayoría de los pacientes se reincorporan a actividades laborales sedentarias entre los 10 y 14 días. La recuperación funcional completa, incluyendo actividad física sin restricciones, se logra generalmente entre las 4 y 6 semanas. La adaptación intestinal al nuevo tránsito puede tomar de 2 a 3 meses, período en el que se ajusta gradualmente la dieta según la tolerancia del paciente.',
      },
      {
        question: '¿Qué suplementos necesito tomar de por vida?',
        answer: 'Dado que la bipartición de tránsito modifica parcialmente la absorción de nutrientes, se recomienda suplementación de por vida con multivitamínico con hierro, calcio con vitamina D, vitamina B12 y proteína. Las dosis específicas se determinan según los resultados de laboratorio en cada control. El seguimiento nutricional periódico garantiza que los niveles se mantengan dentro de rangos óptimos.',
      },
      {
        question: '¿Cuánto cuesta la bipartición de tránsito intestinal en Mérida?',
        answer: 'El costo del procedimiento varía según el hospital, los estudios preoperatorios y las necesidades individuales de cada paciente. El Dr. Ruvalcaba ofrece una valoración inicial para determinar la indicación, personalizar el plan de tratamiento y proporcionar un presupuesto detallado. Algunos seguros de gastos médicos mayores cubren procedimientos metabólicos cuando existe indicación médica documentada como diabetes tipo 2 refractaria.',
      },
      {
        question: '¿Cuánto tiempo dura la cirugía de bipartición de tránsito intestinal?',
        answer: 'La bipartición de tránsito intestinal dura entre 2 y 3 horas bajo anestesia general en quirófano hospitalario. El procedimiento laparoscópico combina la gastrectomía en manga con la construcción de la anastomosis ileoyeyunal. El internamiento hospitalario es de 2 a 3 noches para monitoreo postoperatorio.',
      },
      {
        question: '¿Cuándo puedo regresar al trabajo después de la BTI?',
        answer: 'Los pacientes con actividades sedentarias o de oficina suelen reincorporarse entre los días 10 y 14 postoperatorios. Para actividades que implican esfuerzo físico moderado, se recomienda esperar de 4 a 6 semanas. El Dr. Ruvalcaba proporciona un certificado de incapacidad médica personalizado según el tipo de trabajo y la evolución de cada paciente.',
      },
    ],
    relevantSpecialty: 'Bariatric Surgery',
    bodyLocation: 'Small Intestine, Stomach',
    imagePath: '/images/procedures/biparticion-transito-intestinal.webp',
    preparation: 'Ayuno de 8 horas previo a la cirugía. Se requiere evaluación preoperatoria completa con análisis de sangre, valoración nutricional, psicológica y médica. En pacientes diabéticos, se ajustan los medicamentos hipoglucemiantes antes del procedimiento.',
  },

  // ---------------------------------------------------------------------------
  // 9. SADI-S
  // ---------------------------------------------------------------------------
  {
    slug: 'sadi-s',
    title: 'SADI-S',
    shortTitle: 'SADI-S',
    metaTitle: 'SADI-S en Mérida | Dr. Mario Ruvalcaba - Cirujano Bariátrico',
    metaDescription: 'SADI-S en Mérida con el Dr. Mario Ruvalcaba. El procedimiento bariátrico con mayor potencia de pérdida de peso para pacientes con obesidad severa. Agenda tu valoración.',
    heroHeadline: 'SADI-S en Mérida',
    heroSubheadline: 'El procedimiento bariátrico con mayor potencia de pérdida de peso, indicado para pacientes con obesidad severa que requieren resultados máximos con una sola anastomosis intestinal.',
    description: 'El SADI-S (Single Anastomosis Duodeno-Ileal con Sleeve) combina la gastrectomía vertical en manga con una única anastomosis duodeno-ileal, generando malabsorción controlada de grasas y carbohidratos con tasas de pérdida del exceso de peso superiores al 95% a dos años.',
    longDescription: 'El SADI-S (Single Anastomosis Duodeno-Ileal con Sleeve) es la evolución más potente de la cirugía bariátrica, indicada para pacientes con obesidad severa (IMC ≥ 50) o cuando se requiere el máximo impacto metabólico. Combina la gastrectomía vertical en manga con una única anastomosis duodeno-ileal, generando malabsorción controlada de grasas y carbohidratos y estimulando de forma intensa la producción de hormonas intestinales reguladoras del apetito y el metabolismo. La IFSO reconoce al SADI-S como procedimiento bariátrico estándar desde 2018. A diferencia del duodenal switch clásico que requiere dos anastomosis, el SADI-S simplifica la técnica con una sola unión, reduciendo el tiempo quirúrgico y los riesgos asociados. El especialista en SADI-S en Mérida ofrece el procedimiento con la experiencia y tecnología necesarias para sus complejos requerimientos.\n\nEl Dr. Mario Ruvalcaba realiza el SADI-S en Mérida por vía laparoscópica de mínima invasión. El procedimiento consiste en dividir el duodeno justo después del píloro y conectarlo directamente con el íleon distal, a aproximadamente 250 a 300 cm de la válvula ileocecal. Esto genera un canal alimentario corto que limita la absorción de calorías y grasas. La cirugía dura entre 2.5 y 3.5 horas bajo anestesia general y requiere internamiento de 2 a 3 noches para monitoreo estrecho. Gracias al abordaje laparoscópico, el dolor postoperatorio es significativamente menor que en cirugía abierta y la recuperación funcional es más rápida.\n\nCirujano bariátrico certificado en Mérida, Yucatán, el Dr. Ruvalcaba cuenta con certificación del Consejo Mexicano de Cirugía General, es miembro activo de la IFSO y acumula más de 5 años de experiencia en procedimientos bariátricos complejos. Opera exclusivamente en hospitales de primer nivel de Mérida, con quirófanos equipados para laparoscopia avanzada. Cada paciente recibe evaluación y seguimiento multidisciplinario —nutriólogo, psicólogo, internista— durante todo el proceso, lo que resulta determinante para el éxito a largo plazo.\n\nLas tasas de pérdida del exceso de peso con SADI-S superan el 80% a los 2 años, con remisión de diabetes tipo 2 en más del 90% de los casos. La mayoría de los pacientes se reincorpora a actividades laborales sedentarias entre los 10 y 14 días y a actividad física plena entre las 4 y 6 semanas. La suplementación vitamínica de por vida es obligatoria y fundamental para mantener niveles nutricionales óptimos. Si tienes obesidad severa y buscas el máximo resultado bariátrico disponible, el SADI-S es tu opción. Agenda tu valoración hoy.',
    benefits: [
      {
        title: 'Máxima Pérdida de Peso',
        description: 'Pérdida de más del 80% del exceso de peso, siendo la opción más potente para pacientes con obesidad severa (IMC > 50).',
        icon: '🏆',
      },
      {
        title: 'Remisión de Diabetes',
        description: 'Tasas de remisión de diabetes tipo 2 superiores al 90%, siendo el procedimiento con mayor impacto metabólico disponible actualmente.',
        icon: '💉',
      },
      {
        title: 'Una Sola Anastomosis',
        description: 'Técnica simplificada respecto al duodenal switch clásico: una sola unión intestinal reduce la complejidad quirúrgica y el tiempo operatorio.',
        icon: '🔗',
      },
      {
        title: 'Resultados Sostenidos',
        description: 'Los resultados a largo plazo del SADI-S son superiores a los de la manga gástrica o el bypass, con menores tasas de reganancia de peso.',
        icon: '⚡',
      },
    ],
    candidates: [
      'Pacientes con IMC igual o mayor a 50 kg/m² (obesidad severa) que requieren la mayor potencia de pérdida de peso disponible.',
      'Personas con IMC ≥ 40 con múltiples comorbilidades metabólicas severas como diabetes tipo 2 descontrolada, hipertensión refractaria o apnea del sueño grave.',
      'Pacientes que han tenido falla de pérdida de peso o reganancia significativa tras una manga gástrica previa y son candidatos a cirugía de revisión.',
      'Adultos con evaluación multidisciplinaria completa y compromiso absoluto con la suplementación nutricional de por vida y el seguimiento médico.',
      'Pacientes sin antecedentes de enfermedad inflamatoria intestinal, síndrome de intestino corto o cirugías previas que comprometan la viabilidad del segmento ileal.',
    ],
    recovery: [
      {
        period: 'Primera semana',
        description: 'Internamiento hospitalario de 2 a 3 noches. Dieta líquida estricta. Movilización temprana obligatoria. Monitoreo estrecho de heridas, tolerancia oral y signos vitales.',
      },
      {
        period: '2–4 semanas',
        description: 'Progresión a líquidos completos y purés proteicos. Inicio de suplementación vitamínica intensiva (multivitamínico, calcio, vitamina D, vitaminas liposolubles A, E y K, vitamina B12). El equipo nutricional establece el plan dietético personalizado de transición.',
      },
      {
        period: '1–3 meses',
        description: 'Adaptación intestinal al nuevo tránsito. Posibles cambios en el hábito intestinal que se regulan con la dieta. Inicio gradual de actividad física. Los médicos ajustan los medicamentos metabólicos según respuesta clínica y de laboratorio.',
      },
      {
        period: '6–12 meses',
        description: 'Pérdida de más del 60% del exceso de peso. Resolución de comorbilidades metabólicas en la mayoría de los pacientes. Seguimiento cada 3 meses con panel de laboratorio completo que incluye vitaminas liposolubles, minerales y proteínas para ajustar la suplementación de por vida.',
      },
    ],
    costRange: '',
    duration: '2.5 - 3.5 horas',
    hospitalStay: '2 - 3 noches',
    icon: '⚙️',
    faq: [
      {
        question: '¿El SADI-S es lo mismo que el duodenal switch?',
        answer: 'Son procedimientos similares pero con diferencias importantes. El duodenal switch clásico requiere dos anastomosis intestinales, mientras que el SADI-S utiliza una sola anastomosis duodeno-ileal. Esto simplifica técnicamente el procedimiento, reduce el tiempo quirúrgico y las complicaciones potenciales, manteniendo resultados metabólicos similares o superiores. La IFSO reconoce al SADI-S como un procedimiento estándar validado desde 2018.',
      },
      {
        question: '¿Qué cambios en el hábito intestinal debo esperar?',
        answer: 'Es común presentar deposiciones más frecuentes (2 a 4 veces al día) y de consistencia más blanda, especialmente durante los primeros meses. El consumo de grasas en exceso puede generar deposiciones malolientes o urgencia defecatoria. Con el tiempo y la adaptación adecuada de la dieta, estos síntomas se moderan significativamente.',
      },
      {
        question: '¿Puedo realizarme el SADI-S si ya tengo una manga gástrica?',
        answer: 'Sí, es una de las indicaciones más frecuentes del SADI-S como cirugía de revisión. Cuando un paciente con manga gástrica no logra la pérdida de peso esperada o presenta reganancia significativa, el SADI-S permite agregar el componente malabsortivo sin necesidad de modificar el estómago ya operado, añadiendo la anastomosis duodeno-ileal sobre la manga existente.',
      },
      {
        question: '¿La suplementación es realmente de por vida?',
        answer: 'Sí, es un requisito no negociable. El SADI-S genera malabsorción de grasas, y con ellas, de las vitaminas liposolubles A, D, E y K, además de calcio, hierro y vitamina B12. Sin suplementación adecuada y monitoreo regular, pueden desarrollarse deficiencias severas. Los pacientes que siguen el protocolo de suplementación mantienen excelentes niveles nutricionales a largo plazo.',
      },
      {
        question: '¿Cuánto cuesta el SADI-S en Mérida?',
        answer: 'El costo varía según el hospital y los estudios preoperatorios requeridos. Por tratarse de un procedimiento bariátrico de mayor complejidad técnica, el Dr. Ruvalcaba ofrece una valoración individual para determinar la indicación y proporcionar un presupuesto detallado. Algunos seguros de gastos médicos mayores cubren el procedimiento cuando existen indicaciones médicas documentadas de obesidad severa o diabetes tipo 2 refractaria.',
      },
      {
        question: '¿Cuánto tiempo dura la cirugía SADI-S?',
        answer: 'El SADI-S dura entre 2.5 y 3.5 horas bajo anestesia general en quirófano hospitalario. Por ser un procedimiento bariátrico complejo que combina la gastrectomía en manga con la anastomosis duodeno-ileal, requiere mayor tiempo quirúrgico que la manga gástrica o el bypass. El internamiento postoperatorio es de 2 a 3 noches.',
      },
      {
        question: '¿Cuándo puedo regresar al trabajo después del SADI-S?',
        answer: 'Los pacientes con trabajo sedentario o de oficina suelen reincorporarse entre los días 10 y 14 postoperatorios. Para actividades físicas moderadas o intensas, se recomienda esperar de 4 a 6 semanas. La adaptación intestinal al nuevo tránsito puede tardar de 2 a 3 meses, período durante el cual el plan alimentario se ajusta gradualmente.',
      },
    ],
    relevantSpecialty: 'Bariatric Surgery',
    bodyLocation: 'Small Intestine, Duodenum',
    imagePath: '/images/procedures/sadi-s.webp',
    preparation: 'Ayuno de 8 horas previo a la cirugía. Se requiere evaluación preoperatoria completa con análisis de sangre incluyendo vitaminas liposolubles, valoración nutricional, psicológica y médica. En pacientes con diabetes, ajuste supervisado de medicamentos hipoglucemiantes.',
  },

  // ---------------------------------------------------------------------------
  // 10. Cirugía de Revisión Bariátrica
  // ---------------------------------------------------------------------------
  {
    slug: 'cirugia-revision-bariatrica',
    title: 'Cirugía de Revisión Bariátrica',
    shortTitle: 'Revisión Bariátrica',
    metaTitle: 'Cirugía de Revisión Bariátrica en Mérida | Dr. Mario Ruvalcaba',
    metaDescription: 'Cirugía de revisión bariátrica en Mérida con el Dr. Mario Ruvalcaba. Soluciones para reganancia de peso o complicaciones. Agenda tu valoración hoy.',
    heroHeadline: 'Cirugía de Revisión Bariátrica en Mérida',
    heroSubheadline: 'Soluciones quirúrgicas especializadas para pacientes que no obtuvieron los resultados esperados o presentaron complicaciones tras una cirugía bariátrica previa.',
    description: 'La cirugía de revisión bariátrica comprende procedimientos dirigidos a pacientes con reganancia de peso, pérdida de peso insuficiente o complicaciones anatómicas o metabólicas relacionadas con su cirugía bariátrica original.',
    longDescription: 'La cirugía de revisión bariátrica está indicada para pacientes que, tras una cirugía bariátrica previa, presentan reganancia de peso significativa, pérdida de peso insuficiente, complicaciones anatómicas como estenosis, fístulas o dilatación de bolsa, o complicaciones metabólicas no resueltas. Se estima que entre el 20% y el 30% de los pacientes bariátricos experimenta algún grado de reganancia de peso a los 5 años, lo que convierte a la cirugía de revisión en una necesidad creciente. En Mérida, el Dr. Ruvalcaba atiende casos provenientes de toda la región sureste de México que requieren soluciones bariátricas complejas y especializadas.\n\nEl Dr. Mario Ruvalcaba realiza la cirugía de revisión bariátrica en Mérida por vía laparoscópica en la mayoría de los casos, aprovechando la experiencia en cirugía bariátrica compleja para navegar la anatomía previamente modificada. Las revisiones más frecuentes incluyen: conversión de manga gástrica a bypass gástrico en Y de Roux o SADI-S por reganancia de peso o reflujo gastroesofágico severo, revisión de bypass gástrico por dilatación de bolsa o anastomosis, corrección de estenosis o fístulas residuales y conversión de banda gástrica ajustable a procedimiento definitivo. Cada caso requiere planificación individualizada con endoscopía, serie esofagogastroduodenal y estudios metabólicos completos. La duración varía entre 2 y 4 horas bajo anestesia general.\n\nEspecialista en cirugía bariátrica compleja en Yucatán, el Dr. Ruvalcaba cuenta con certificación del Consejo Mexicano de Cirugía General, membresía en la IFSO y más de 5 años de experiencia en procedimientos de revisión. Opera en hospitales de primer nivel de Mérida con infraestructura adecuada para cirugía de alta complejidad. Su equipo multidisciplinario realiza la evaluación preoperatoria integral y el seguimiento postoperatorio estrecho que estas intervenciones requieren.\n\nLos resultados de la cirugía de revisión son generalmente muy satisfactorios cuando la indicación es correcta y la planificación es adecuada: reinicio de la pérdida de peso, resolución del reflujo y mejoría del control metabólico. La recuperación es similar a la cirugía bariátrica primaria, con reincorporación laboral en 10 a 14 días para actividades sedentarias. Si tu cirugía bariátrica previa no logró los resultados esperados, existe una solución. Agenda tu valoración hoy.',
    benefits: [
      {
        title: 'Solución Personalizada',
        description: 'Cada revisión se diseña según la anatomía quirúrgica previa y las necesidades específicas del paciente, no existe un abordaje único.',
        icon: '🎯',
      },
      {
        title: 'Recuperación de Resultados',
        description: 'Permite retomar la pérdida de peso en pacientes con reganancia o pérdida insuficiente, adaptando el procedimiento a la historia clínica individual.',
        icon: '📉',
      },
      {
        title: 'Corrección de Complicaciones',
        description: 'Resuelve complicaciones tardías de cirugías previas como reflujo severo, estenosis, fístulas crónicas o dilatación de bolsa gástrica.',
        icon: '🩺',
      },
      {
        title: 'Abordaje Mínimamente Invasivo',
        description: 'La mayoría de las revisiones pueden realizarse por laparoscopia, incluso en pacientes con cirugías previas, gracias a la experiencia en cirugía de revisión.',
        icon: '🔬',
      },
    ],
    candidates: [
      'Pacientes con reganancia de peso significativa (más del 50% del peso perdido) tras manga gástrica, bypass gástrico u otro procedimiento bariátrico previo.',
      'Personas con pérdida de peso insuficiente (menos del 50% del exceso de peso a los 18 meses) a pesar de cumplir con las indicaciones dietéticas y de actividad física.',
      'Pacientes con reflujo gastroesofágico severo o esofagitis tras manga gástrica que no responden al tratamiento médico y requieren conversión a bypass gástrico.',
      'Personas con complicaciones anatómicas como estenosis de la manga o la anastomosis, fístulas crónicas, dilatación de la bolsa gástrica o migración de banda ajustable.',
      'Pacientes con evaluación preoperatoria completa (endoscopía, estudio de tránsito, laboratorios) que confirme la indicación y viabilidad de la revisión quirúrgica.',
    ],
    recovery: [
      {
        period: 'Primera semana',
        description: 'Similar a la cirugía bariátrica primaria, aunque puede requerir mayor vigilancia según la complejidad de la revisión realizada. Dieta líquida estricta. Internamiento de 2 a 3 noches.',
      },
      {
        period: '2–4 semanas',
        description: 'Progresión dietética según el nuevo procedimiento realizado. Evaluación nutricional obligatoria para ajustar suplementación según la nueva anatomía.',
      },
      {
        period: '1–3 meses',
        description: 'Adaptación al nuevo procedimiento. Los pacientes revisados suelen notar mejoría en los síntomas previos desde las primeras semanas. Se monitorean la tolerancia dietética y los parámetros metabólicos.',
      },
      {
        period: '6–12 meses',
        description: 'Evaluación de resultados mediante laboratorios y, cuando está indicado, endoscopía de control. La pérdida de peso se reinicia o se corrige la complicación original. El seguimiento a largo plazo es esencial para consolidar los resultados.',
      },
    ],
    costRange: '',
    duration: '2 - 4 horas',
    hospitalStay: '2 - 3 noches',
    icon: '🔃',
    faq: [
      {
        question: '¿Por qué falla una cirugía bariátrica?',
        answer: 'Las causas más frecuentes de fracaso bariátrico son: dilatación progresiva de la manga gástrica o de la bolsa del bypass, modificaciones en los hábitos alimentarios con retorno a patrones calóricos elevados, alteraciones hormonales o metabólicas subyacentes no resueltas, y en algunos casos, factores técnicos de la cirugía original.',
      },
      {
        question: '¿Es más riesgosa la cirugía de revisión que la cirugía primaria?',
        answer: 'En general sí, aunque el riesgo depende del tipo de revisión y de la experiencia del cirujano. Los tejidos previamente operados presentan mayor fibrosis y adherencias, lo que incrementa la dificultad técnica. Sin embargo, en manos de un cirujano bariátrico experimentado y con planificación preoperatoria adecuada, las tasas de complicaciones son aceptables.',
      },
      {
        question: '¿Cuánto tiempo debo esperar entre mi cirugía original y una revisión?',
        answer: 'En general se recomienda esperar al menos 12 a 18 meses desde la cirugía primaria para permitir la estabilización del peso y la cicatrización completa de los tejidos, salvo en casos de complicaciones que requieran intervención urgente.',
      },
      {
        question: '¿Qué estudios necesito para ser evaluado para una cirugía de revisión?',
        answer: 'La evaluación incluye endoscopía digestiva alta, estudios de imagen (serie esofagogastroduodenal con contraste), panel de laboratorio completo con vitaminas y nutrientes, valoración nutricional y psicológica, y en algunos casos pH-metría o manometría esofágica.',
      },
      {
        question: '¿Cuánto cuesta la cirugía de revisión bariátrica en Mérida?',
        answer: 'El costo varía según el tipo de revisión, el hospital y la complejidad del caso. Por ser un procedimiento especializado, el Dr. Ruvalcaba realiza una valoración inicial para determinar la indicación quirúrgica y proporcionar un presupuesto personalizado. Se recomienda consultar con tu aseguradora, ya que algunos seguros de gastos médicos cubren revisiones con indicación médica documentada.',
      },
      {
        question: '¿Cuánto tiempo dura la cirugía de revisión bariátrica?',
        answer: 'La duración varía entre 2 y 4 horas según el tipo de revisión y la complejidad de la anatomía previa. Las conversiones simples como manga a bypass pueden realizarse en 2 a 3 horas. Las revisiones por fístulas o estenosis complejas pueden requerir más tiempo. En todos los casos se realiza bajo anestesia general con internamiento de 2 a 3 noches.',
      },
      {
        question: '¿Cuándo puedo regresar al trabajo tras la cirugía de revisión bariátrica?',
        answer: 'De forma similar a la cirugía bariátrica primaria, los pacientes con actividades sedentarias se reincorporan entre los días 10 y 14 postoperatorios. Para trabajos físicos, se recomienda esperar de 4 a 6 semanas. El Dr. Ruvalcaba proporciona el certificado de incapacidad médica necesario según la evolución de cada caso.',
      },
    ],
    relevantSpecialty: 'Bariatric Surgery',
    bodyLocation: 'Stomach, Digestive System',
    imagePath: '/images/procedures/cirugia-revision-bariatrica.webp',
    preparation: 'Ayuno de 8 horas previo a la cirugía. Se requiere evaluación preoperatoria con endoscopía digestiva alta, serie esofagogastroduodenal, análisis de sangre completos con vitaminas, y valoración nutricional y psicológica.',
  },

  // ---------------------------------------------------------------------------
  // 11. Cirugía de Conversión Bariátrica
  // ---------------------------------------------------------------------------
  {
    slug: 'cirugia-conversion-bariatrica',
    title: 'Cirugía de Conversión Bariátrica',
    shortTitle: 'Conversión Bariátrica',
    metaTitle: 'Cirugía de Conversión Bariátrica en Mérida | Dr. Mario Ruvalcaba',
    metaDescription: 'Cirugía de conversión bariátrica en Mérida con el Dr. Mario Ruvalcaba. Cambia tu procedimiento previo por uno más efectivo para tus necesidades. Agenda tu valoración hoy.',
    heroHeadline: 'Cirugía de Conversión Bariátrica en Mérida',
    heroSubheadline: 'Transformación de un procedimiento bariátrico previo a otro más efectivo o más adecuado para las necesidades actuales del paciente, con el respaldo de un equipo especializado en cirugía bariátrica compleja.',
    description: 'La cirugía de conversión bariátrica transforma un procedimiento bariátrico existente en otro diferente para mejorar resultados de pérdida de peso, tratar complicaciones o adaptar la cirugía a las necesidades metabólicas actuales del paciente.',
    longDescription: 'La cirugía de conversión bariátrica consiste en transformar un procedimiento bariátrico existente en otro diferente, para mejorar los resultados de pérdida de peso, tratar complicaciones generadas por la cirugía original o adaptar el procedimiento a las necesidades metabólicas actuales. Es uno de los campos más exigentes de la cirugía bariátrica en Mérida, ya que requiere trabajar sobre anatomía previamente modificada con adherencias y cicatrices que aumentan la complejidad técnica. Las conversiones más frecuentes incluyen: manga gástrica a bypass gástrico en Y de Roux (especialmente por reflujo gastroesofágico severo), manga gástrica a SADI-S o bipartición de tránsito intestinal (por reganancia de peso), balón intragástrico a manga gástrica, y banda gástrica ajustable a procedimiento definitivo. En Yucatán, el cirujano bariátrico con mayor experiencia en conversiones opera en Mérida con protocolos de seguridad internacionales.\n\nEl Dr. Mario Ruvalcaba realiza las conversiones bariátricas por vía laparoscópica de mínima invasión en la gran mayoría de los casos. Cada conversión requiere planificación quirúrgica individualizada basada en la anatomía creada por el procedimiento previo, el historial clínico del paciente y los objetivos terapéuticos específicos. La planificación incluye endoscopía digestiva alta, serie esofagogastroduodenal y análisis metabólicos completos. La duración de la cirugía varía entre 2 y 4 horas bajo anestesia general, con internamiento de 2 a 3 noches. La conversión de manga a bypass es la más frecuente y resolverá el reflujo gastroesofágico severo en más del 90% de los casos.\n\nCon certificación del Consejo Mexicano de Cirugía General, membresía en la IFSO y más de 5 años de experiencia en cirugía bariátrica compleja en Mérida, el Dr. Ruvalcaba es el especialista en conversión bariátrica en Yucatán de referencia en el sureste mexicano. Su equipo multidisciplinario garantiza la evaluación integral y el acompañamiento necesario antes y después del procedimiento.\n\nLos resultados post-conversión son generalmente excelentes: resolución del reflujo, reinicio de la pérdida de peso y mejoría del control metabólico. La recuperación es similar a la cirugía primaria, con reincorporación laboral en 10 a 14 días para actividades sedentarias. Si tu procedimiento bariátrico previo no cumplió tus expectativas o te generó complicaciones, existe una solución. Agenda tu valoración hoy.',
    benefits: [
      {
        title: 'Mayor Efectividad',
        description: 'Permite alcanzar resultados metabólicos y de pérdida de peso que el procedimiento original no pudo lograr, adaptando la cirugía a las necesidades actuales.',
        icon: '⬆️',
      },
      {
        title: 'Resolución de Complicaciones',
        description: 'La conversión a bypass resuelve definitivamente el reflujo gastroesofágico severo secundario a manga gástrica, una de las indicaciones más frecuentes.',
        icon: '🩺',
      },
      {
        title: 'Abordaje Laparoscópico',
        description: 'La mayoría de las conversiones se realizan por mínima invasión, aprovechando la anatomía previa para optimizar la seguridad del procedimiento.',
        icon: '🔬',
      },
      {
        title: 'Plan a Medida',
        description: 'El procedimiento de conversión se selecciona según el historial quirúrgico, las comorbilidades y los objetivos específicos de cada paciente.',
        icon: '🎯',
      },
    ],
    candidates: [
      'Pacientes con manga gástrica que desarrollaron enfermedad por reflujo gastroesofágico (ERGE) severo que no responde al tratamiento con inhibidores de bomba de protones.',
      'Personas con manga gástrica y reganancia de peso significativa que desean incrementar el componente metabólico mediante conversión a bypass gástrico o SADI-S.',
      'Pacientes con banda gástrica ajustable con complicaciones (deslizamiento, erosión, intolerancia) que requieren remoción y conversión a un procedimiento definitivo.',
      'Pacientes con pérdida de peso insuficiente tras cualquier procedimiento bariátrico que, tras evaluación multidisciplinaria, son candidatos a un procedimiento más potente.',
      'Adultos con anatomía favorable documentada por estudios endoscópicos y radiológicos, sin contraindicaciones para una cirugía abdominal mayor de mayor complejidad.',
    ],
    recovery: [
      {
        period: 'Primera semana',
        description: 'Internamiento de 2 a 3 noches según el tipo de conversión realizada. Dieta líquida estricta. El equipo monitorea especialmente la anastomosis nueva y la tolerancia oral. Movilización temprana desde las primeras horas postoperatorias.',
      },
      {
        period: '2–4 semanas',
        description: 'Progresión dietética según el nuevo procedimiento: si se convirtió a bypass, sigue el protocolo de bypass; si fue a SADI-S, sigue ese protocolo. Ajuste de suplementación vitamínica según la nueva anatomía.',
      },
      {
        period: '1–3 meses',
        description: 'Adaptación a la nueva anatomía. Los pacientes convertidos a bypass por ERGE suelen notar resolución o mejoría significativa del reflujo desde las primeras semanas. Seguimiento nutricional y médico estrecho.',
      },
      {
        period: '6–12 meses',
        description: 'Evaluación integral de resultados: pérdida de peso, resolución de comorbilidades, tolerancia dietética y niveles nutricionales. Endoscopía de control cuando esté indicada. Seguimiento regular para consolidar los resultados a largo plazo.',
      },
    ],
    costRange: '',
    duration: '2 - 4 horas',
    hospitalStay: '2 - 3 noches',
    icon: '🔄',
    faq: [
      {
        question: '¿La conversión de manga a bypass siempre resuelve el reflujo?',
        answer: 'En la gran mayoría de los casos, sí. El bypass gástrico en Y de Roux crea una bolsa gástrica pequeña prácticamente libre de producción ácida y desvía el contenido intestinal lejos del esófago, eliminando el sustrato del reflujo patológico. Los estudios reportan resolución del reflujo en más del 90% de los pacientes convertidos por esta indicación.',
      },
      {
        question: '¿Es posible la conversión por laparoscopia si ya tuve una cirugía previa?',
        answer: 'En la mayoría de los casos sí, aunque depende de las adherencias formadas y la anatomía específica del paciente. El Dr. Ruvalcaba evalúa la viabilidad del abordaje laparoscópico en cada caso. En casos seleccionados con adherencias extensas puede requerirse conversión a cirugía abierta para garantizar la seguridad.',
      },
      {
        question: '¿Cuánto tiempo después de la manga puedo convertirme a bypass?',
        answer: 'Se recomienda esperar al menos 12 a 18 meses desde la manga gástrica para que los tejidos estén completamente cicatrizados. Sin embargo, en casos de reflujo severo con esofagitis grado C o D, Barrett esofágico o síntomas que comprometan significativamente la calidad de vida, la conversión puede indicarse antes.',
      },
      {
        question: '¿Necesitaré suplementos diferentes tras la conversión?',
        answer: 'Sí, los requerimientos de suplementación cambian según el nuevo procedimiento. Si se convierte a bypass gástrico, será necesaria la suplementación de por vida con multivitamínico con hierro, calcio con vitamina D, vitamina B12 y proteína. Si la conversión es a SADI-S, se agregan las vitaminas liposolubles. El equipo nutricional ajustará el protocolo de suplementación al nuevo procedimiento.',
      },
      {
        question: '¿Cuánto cuesta la cirugía de conversión bariátrica en Mérida?',
        answer: 'El costo depende del tipo de conversión, el hospital y la complejidad de la anatomía previa. El Dr. Ruvalcaba realiza una valoración inicial para determinar la estrategia quirúrgica óptima y proporcionar un presupuesto detallado. Algunos seguros de gastos médicos cubren conversiones con indicación médica documentada. Comunícate con el consultorio para obtener información sobre costos y opciones de financiamiento.',
      },
      {
        question: '¿Cuánto tiempo dura la cirugía de conversión bariátrica?',
        answer: 'Las conversiones bariátricas requieren entre 2 y 4 horas dependiendo del tipo de conversión y la complejidad de la anatomía previa. La conversión de manga a bypass suele durar entre 2 y 3 horas. Las conversiones a SADI-S o bipartición pueden requerir hasta 3.5 horas. Todas se realizan bajo anestesia general con internamiento de 2 a 3 noches.',
      },
      {
        question: '¿Cuándo puedo regresar al trabajo tras la conversión bariátrica?',
        answer: 'Para actividades sedentarias, la mayoría de los pacientes se reincorporan entre los días 10 y 14 postoperatorios. Para trabajo físico moderado, se recomienda esperar de 4 a 6 semanas. La adaptación a la nueva anatomía y los cambios dietéticos pueden requerir algunos meses de seguimiento nutricional antes de sentirse completamente recuperado.',
      },
    ],
    relevantSpecialty: 'Bariatric Surgery',
    bodyLocation: 'Stomach, Digestive System',
    imagePath: '/images/procedures/cirugia-conversion-bariatrica.webp',
    preparation: 'Ayuno de 8 horas previo a la cirugía. Se requiere evaluación preoperatoria con endoscopía digestiva alta, serie esofagogastroduodenal, análisis de sangre completos con vitaminas y minerales, y valoración nutricional y psicológica.',
  },

  // ---------------------------------------------------------------------------
  // 12. Colecistectomía Laparoscópica
  // ---------------------------------------------------------------------------
  {
    slug: 'colecistectomia-laparoscopica',
    title: 'Colecistectomía Laparoscópica',
    shortTitle: 'Colecistectomía Laparoscópica',
    metaTitle: 'Colecistectomía Laparoscópica en Mérida | Dr. Mario Ruvalcaba',
    metaDescription: 'Colecistectomía laparoscópica en Mérida. Dr. Mario Ruvalcaba. Extirpación de vesícula por cálculos o colecistitis. Alta el mismo día. Agenda tu valoración hoy.',
    heroHeadline: 'Colecistectomía Laparoscópica en Mérida',
    heroSubheadline: 'Extirpación de la vesícula biliar por vía laparoscópica para el tratamiento definitivo de cálculos biliares, colecistitis y pólipos vesiculares. Procedimiento ambulatorio con recuperación en 5 a 7 días.',
    description: 'La colecistectomía laparoscópica es la extirpación quirúrgica de la vesícula biliar mediante técnica de mínima invasión. Es el procedimiento laparoscópico más realizado en el mundo y el tratamiento de elección para la colelitiasis sintomática, la colecistitis aguda y crónica y los pólipos vesiculares mayores de 10 mm.',
    longDescription: 'La colecistectomía laparoscópica en Mérida es el procedimiento más frecuente en cirugía general. La colelitiasis —cálculos biliares— afecta al 14% de la población adulta en México y es más prevalente en mujeres de 30 a 60 años. El tratamiento de elección es la extirpación quirúrgica de la vesícula biliar, ya que los cálculos no desaparecen con medicamentos y tienden a generar complicaciones progresivas como colecistitis aguda, pancreatitis biliar e ictericia obstructiva si no se tratan. La técnica laparoscópica ha reemplazado casi completamente a la cirugía abierta por sus ventajas comprobadas en dolor, infección de herida y tiempo de recuperación.\n\nEl Dr. Mario Ruvalcaba realiza la colecistectomía laparoscópica en Mérida a través de 3 a 4 pequeñas incisiones de entre 5 y 12 mm bajo anestesia general. La cirugía dura entre 45 minutos y 1.5 horas: se introduce una cámara de alta definición y los instrumentos quirúrgicos para identificar, clipar y extirpar la vesícula biliar con precisión, extrayéndola dentro de una bolsa endoscópica. En la gran mayoría de los casos el paciente se va a casa el mismo día o al día siguiente, con mínimo dolor manejable con analgésicos orales.\n\nCirujano general certificado en Mérida, Yucatán, el Dr. Ruvalcaba es miembro del Consejo Mexicano de Cirugía General y cuenta con más de 5 años de experiencia en colecistectomía laparoscópica y cirugía de la vía biliar. Opera en los hospitales de mayor nivel de Mérida, con equipos de laparoscopia de última generación y disponibilidad para procedimientos de urgencia las 24 horas. El especialista en colecistectomía laparoscópica en Yucatán garantiza seguridad, precisión y atención personalizada en cada caso.\n\nLos resultados son excelentes: resolución completa y definitiva de los cólicos biliares, la inflamación y el riesgo de complicaciones. Los pacientes se reincorporan a actividades sedentarias en 5 a 7 días y a actividad física completa en 2 a 3 semanas. La ausencia de vesícula no genera limitaciones dietéticas permanentes en la inmensa mayoría de los pacientes. No postergues el tratamiento: los cálculos biliares sintomáticos deben operarse de manera electiva antes de que ocurra una complicación. Agenda tu valoración hoy.',
    benefits: [
      {
        title: 'Procedimiento Ambulatorio',
        description: 'La mayoría de los pacientes se van a casa el mismo día o a las 24 horas, sin necesidad de internamiento prolongado.',
        icon: '🏠',
      },
      {
        title: 'Recuperación Rápida',
        description: 'Regreso a actividades cotidianas en 5 a 7 días y a la actividad laboral completa en 1 a 2 semanas.',
        icon: '⚡',
      },
      {
        title: 'Cicatrices Mínimas',
        description: '3 a 4 incisiones de 5 a 12 mm que se vuelven prácticamente imperceptibles con el tiempo.',
        icon: '✂️',
      },
      {
        title: 'Tratamiento Definitivo',
        description: 'Elimina la fuente de los cólicos biliares, la inflamación y el riesgo de complicaciones como pancreatitis o ictericia obstructiva.',
        icon: '🎯',
      },
    ],
    candidates: [
      'Pacientes con cálculos biliares (colelitiasis) que producen síntomas como cólico biliar, náuseas, vómito o intolerancia a alimentos grasos.',
      'Personas con colecistitis aguda (inflamación aguda de la vesícula) o colecistitis crónica con episodios recurrentes de dolor.',
      'Pacientes con pólipos vesiculares mayores de 10 mm por riesgo de malignidad, o entre 6 y 9 mm con factores de riesgo adicionales.',
      'Personas que han presentado pancreatitis aguda de origen biliar o coledocolitiasis (cálculos en el conducto biliar) resuelta.',
      'Pacientes con vesícula en porcelana (calcificación de la pared vesicular) o con antecedente de cirugías abdominales previas que no contraindiquen el abordaje laparoscópico.',
    ],
    recovery: [
      {
        period: 'Día del procedimiento',
        description: 'El paciente ingresa en ayuno, se realiza la cirugía bajo anestesia general (45 minutos a 1.5 horas), y se observa en recuperación de 2 a 4 horas. La mayoría inicia líquidos orales pocas horas después y se va a casa el mismo día o a la mañana siguiente.',
      },
      {
        period: 'Primera semana',
        description: 'Dieta blanda y de fácil digestión los primeros días: caldos, gelatina, pollo, verduras cocidas. Manejo del dolor con analgésicos orales. Cuidado de las pequeñas heridas. Caminatas cortas desde el primer día para prevenir trombosis.',
      },
      {
        period: '2–4 semanas',
        description: 'Reincorporación a actividades laborales sedentarias entre los 5 y 10 días. Alimentación prácticamente sin restricciones, aunque se recomienda moderar las grasas las primeras 2 semanas. Evitar levantar objetos pesados (más de 5 kg).',
      },
      {
        period: '1–3 meses',
        description: 'Recuperación completa sin restricciones. Los pacientes con trabajos físicos pueden reincorporarse entre las 3 y 4 semanas. Alimentación completamente libre. La ausencia de vesícula no genera ninguna limitación dietética permanente en la inmensa mayoría de los pacientes.',
      },
    ],
    costRange: '',
    duration: '45 min - 1.5 horas',
    hospitalStay: 'Ambulatorio - 1 noche',
    icon: '🫁',
    faq: [
      {
        question: '¿Puedo vivir sin vesícula biliar?',
        answer: 'Sí, perfectamente. La vesícula biliar almacena la bilis producida por el hígado, pero no es un órgano indispensable. Después de la colecistectomía, la bilis fluye directamente desde el hígado al intestino delgado de manera continua. La mayoría de los pacientes no experimenta ninguna limitación dietética permanente.',
      },
      {
        question: '¿Por qué no se pueden disolver los cálculos con medicamentos?',
        answer: 'Los medicamentos para disolver cálculos biliares solo funcionan en cálculos muy pequeños, de colesterol puro y con vesícula funcionante, lo que representa menos del 15% de los casos. El tratamiento es prolongado, costoso, y los cálculos reaparecen en el 50% de los pacientes al suspender el medicamento. La colecistectomía laparoscópica es rápida, segura y definitiva.',
      },
      {
        question: '¿Cuándo debo operarme de urgencia?',
        answer: 'La colecistectomía de urgencia está indicada en colecistitis aguda severa, pancreatitis biliar aguda grave o coledocolitiasis con obstrucción de la vía biliar e ictericia. Si presenta dolor intenso en la parte superior derecha del abdomen con fiebre, náuseas severas o coloración amarilla de piel y ojos, debe buscar atención de emergencia.',
      },
      {
        question: '¿La cirugía puede realizarse si tengo infección activa de la vesícula?',
        answer: 'Sí, de hecho la colecistitis aguda es una indicación frecuente de colecistectomía. En estos casos, el procedimiento se realiza idealmente en las primeras 72 horas desde el inicio de los síntomas. Si el paciente llega con más tiempo de evolución o con complicaciones severas, puede requerirse drenaje percutáneo previo para enfriar el proceso inflamatorio antes de la cirugía definitiva.',
      },
      {
        question: '¿Cuánto cuesta la colecistectomía laparoscópica en Mérida?',
        answer: 'El costo varía según el hospital y si el procedimiento es electivo o de urgencia. El Dr. Ruvalcaba ofrece consulta inicial para evaluar el caso y proporcionar un presupuesto detallado. La mayoría de los seguros de gastos médicos cubre la colecistectomía laparoscópica cuando está indicada. Comunícate con el consultorio para obtener información sobre costos y verificar tu cobertura.',
      },
      {
        question: '¿Cuánto tiempo dura la colecistectomía laparoscópica?',
        answer: 'La colecistectomía laparoscópica dura entre 45 minutos y 1.5 horas bajo anestesia general. En casos de colecistitis aguda con inflamación severa o adherencias, puede requerir tiempo adicional. La gran mayoría de los pacientes puede irse a casa el mismo día o a la mañana siguiente.',
      },
      {
        question: '¿Cuándo puedo regresar al trabajo después de la colecistectomía?',
        answer: 'Los pacientes con trabajo de oficina o sedentario suelen reincorporarse entre los 5 y 7 días posteriores a la cirugía. Para trabajos físicos moderados, se recomiendan 2 semanas. Para trabajo físico intenso, entre 3 y 4 semanas. El Dr. Ruvalcaba proporciona el certificado médico de incapacidad según las necesidades laborales de cada paciente.',
      },
    ],
    relevantSpecialty: 'General Surgery',
    bodyLocation: 'Gallbladder',
    imagePath: '/images/procedures/colecistectomia-laparoscopica.webp',
    preparation: 'Ayuno de 8 horas previo a la cirugía. Se requieren análisis de sangre, ultrasonido de hígado y vías biliares y valoración preoperatoria básica. En pacientes con coledocolitiasis, puede ser necesaria una colangiografía intraoperatoria o CPRE previa.',
  },

  // ---------------------------------------------------------------------------
  // 13. Apendicectomía Laparoscópica
  // ---------------------------------------------------------------------------
  {
    slug: 'apendicectomia-laparoscopica',
    title: 'Apendicectomía Laparoscópica',
    shortTitle: 'Apendicectomía Laparoscópica',
    metaTitle: 'Apendicectomía Laparoscópica en Mérida | Dr. Mario Ruvalcaba',
    metaDescription: 'Apendicectomía laparoscópica en Mérida con el Dr. Mario Ruvalcaba. Extirpación del apéndice en apendicitis aguda. Alta en 24 h. Agenda tu valoración hoy.',
    heroHeadline: 'Apendicectomía Laparoscópica en Mérida',
    heroSubheadline: 'Extirpación del apéndice cecal por vía laparoscópica en casos de apendicitis aguda. Recuperación más rápida, menor dolor y menor riesgo de infección de herida comparado con la cirugía abierta.',
    description: 'La apendicectomía laparoscópica es la extirpación quirúrgica del apéndice cecal mediante técnica de mínima invasión. Es el tratamiento de elección para la apendicitis aguda con ventajas comprobadas sobre la técnica abierta: menor dolor, menor infección de herida y recuperación más rápida.',
    longDescription: 'La apendicectomía laparoscópica en Mérida es el tratamiento de elección para la apendicitis aguda, la emergencia quirúrgica abdominal más frecuente a nivel mundial. La apendicitis afecta aproximadamente al 7% de la población a lo largo de su vida, con mayor incidencia en personas de 10 a 30 años, aunque puede presentarse a cualquier edad. Si no se trata, la inflamación del apéndice progresa a perforación, peritonitis y sepsis abdominal en pocas horas, lo que convierte a la apendicectomía de urgencia en un procedimiento que salva vidas. La técnica laparoscópica ha demostrado ventajas comprobadas sobre la técnica abierta: menor dolor postoperatorio, reducción del 50% en la tasa de infección de herida quirúrgica (especialmente importante en apendicitis perforada), recuperación más rápida y mejor resultado estético.\n\nEl Dr. Mario Ruvalcaba realiza la apendicectomía laparoscópica en Mérida a través de 1 incisión umbilical de menos de 1 cm que es prácticamente imperceptible a la semana de la cirugía. Bajo anestesia general, el procedimiento dura entre 30 minutos y 1 hora: se introduce la cámara y los instrumentos para identificar, ligar y seccionar el apéndice inflamado, extrayéndolo dentro de una bolsa endoscópica. En casos de apendicitis perforada o peritonitis, la laparoscopia permite además limpiar eficazmente la cavidad abdominal para reducir el riesgo de abscesos y colecciones residuales.\n\nCirujano general certificado en Mérida, Yucatán, el Dr. Ruvalcaba está disponible las 24 horas del día para atender urgencias quirúrgicas abdominales con la rapidez que la apendicitis requiere. Cuenta con certificación del Consejo Mexicano de Cirugía General, más de 5 años de experiencia y privilegios quirúrgicos en los principales hospitales de Mérida, equipados para laparoscopia avanzada y manejo de urgencias complejas. La combinación de técnica depurada y disponibilidad inmediata garantiza la mejor atención en el momento crítico.\n\nLos resultados son excelentes: alta hospitalaria en 24 a 48 horas en casos no complicados, reincorporación a actividades en 5 a 7 días y cicatriz prácticamente invisible. Incluso en apendicitis complicada con perforación, la laparoscopia ofrece mejores resultados que la cirugía abierta. Si presentas dolor abdominal en el lado derecho inferior con fiebre y náuseas, busca atención médica urgente. Agenda tu valoración hoy o acude de urgencia.',
    benefits: [
      {
        title: 'Recuperación Rápida',
        description: 'Alta hospitalaria en 24 a 48 horas y reincorporación a actividades normales en 5 a 7 días, incluso en casos con perforación.',
        icon: '🚀',
      },
      {
        title: 'Menor Infección de Herida',
        description: 'La técnica laparoscópica reduce significativamente la tasa de infección de herida quirúrgica, especialmente en apendicitis complicada.',
        icon: '🛡️',
      },
      {
        title: 'Diagnóstico Intraoperatorio',
        description: 'Permite explorar toda la cavidad abdominal para descartar otras patologías, útil especialmente en casos de diagnóstico dudoso.',
        icon: '🔍',
      },
      {
        title: 'Mínimas Cicatrices',
        description: '1 pequeña incisión a través de la cicatriz umbilical resultando en una herida prácticamente imperceptible comparada con la incisión de McBurney de la cirugía abierta.',
        icon: '✂️',
      },
    ],
    candidates: [
      'Pacientes con diagnóstico de apendicitis aguda confirmado clínica o por imagen (ultrasonido o tomografía computada).',
      'Personas con apendicitis perforada o con plastron apendicular que requieran exploración y limpieza de la cavidad abdominal.',
      'Pacientes con cuadro clínico sugestivo de apendicitis aguda en quien la laparoscopia permite confirmar el diagnóstico y realizar el tratamiento en el mismo acto quirúrgico.',
      'Adultos y adolescentes con apendicitis aguda no complicada en quienes se considera la cirugía laparoscópica como tratamiento de elección.',
      'Pacientes sin contraindicaciones para anestesia general. En mujeres en edad fértil, la laparoscopia es especialmente preferida para descartar patología ginecológica asociada.',
    ],
    recovery: [
      {
        period: 'Primeras 24–48 horas',
        description: 'Internamiento hospitalario. Inicio de líquidos orales pocas horas después de la cirugía. Movilización temprana. Manejo del dolor con analgésicos intravenosos y posteriormente orales. En casos no complicados, el alta se otorga en 24 horas; en apendicitis perforada puede requerirse 48 a 72 horas.',
      },
      {
        period: 'Primera semana',
        description: 'Dieta blanda los primeros días progresando a alimentación libre según tolerancia. Manejo del dolor con analgésicos orales. Cuidado de las pequeñas heridas. Reposo relativo con caminatas frecuentes.',
      },
      {
        period: '2–4 semanas',
        description: 'Reincorporación a actividades cotidianas y laborales sedentarias entre los 5 y 10 días. Alimentación libre sin restricciones. Evitar actividad física intensa y levantamiento de peso por 2 a 3 semanas.',
      },
      {
        period: '1–3 meses',
        description: 'Recuperación total. En casos de apendicitis complicada con perforación, se verifica la ausencia de colecciones residuales con estudios de imagen si existen síntomas. Reincorporación completa a actividad deportiva sin restricciones.',
      },
    ],
    costRange: '',
    duration: '30 min - 1 hora',
    hospitalStay: '1 - 2 noches',
    icon: '⚡',
    faq: [
      {
        question: '¿Cómo sé si tengo apendicitis?',
        answer: 'Los síntomas clásicos incluyen dolor que comienza en el ombligo y migra a la fosa ilíaca derecha (parte inferior derecha del abdomen), acompañado de náuseas, pérdida de apetito, fiebre leve y dolor que se intensifica con el movimiento. Ante la sospecha de apendicitis, se debe buscar atención médica de urgencia inmediatamente.',
      },
      {
        question: '¿Puede tratarse la apendicitis con antibióticos sin cirugía?',
        answer: 'En casos seleccionados de apendicitis aguda no complicada, el tratamiento antibiótico ha mostrado eficacia a corto plazo en algunos estudios. Sin embargo, la tasa de recurrencia a 5 años es significativa (25–30%), y existe riesgo de que una nueva crisis sea con apendicitis complicada. La cirugía laparoscópica sigue siendo el tratamiento de elección por ser definitivo, seguro y con recuperación rápida.',
      },
      {
        question: '¿Qué pasa si el apéndice se perfora antes de llegar al quirófano?',
        answer: 'La perforación del apéndice genera peritonitis localizada o difusa, lo que complica el manejo pero no cambia fundamentalmente el tratamiento: cirugía de urgencia para extirpar el apéndice y limpiar la cavidad abdominal. En casos de perforación, la laparoscopia permite irrigar eficazmente el abdomen, aunque puede requerir hospitalización más prolongada (2 a 4 días) y antibióticos intravenosos por mayor tiempo.',
      },
      {
        question: '¿Es necesario hacer reposo absoluto después de la apendicectomía?',
        answer: 'No, al contrario: la movilización temprana (caminar desde el primer día postoperatorio) es fundamental para prevenir complicaciones como trombosis venosa profunda y acelerar la recuperación. Se recomienda reposo relativo los primeros días, evitando actividades de impacto e intensidad alta, pero las caminatas y actividades cotidianas suaves se inician desde el primer o segundo día.',
      },
      {
        question: '¿Cuánto cuesta la apendicectomía laparoscópica en Mérida?',
        answer: 'El costo varía según si la cirugía es de urgencia o programada, el hospital y la complejidad del caso. El Dr. Ruvalcaba coordina la atención de urgencia directamente al momento de la emergencia. La mayoría de los seguros de gastos médicos mayores cubre la apendicectomía de urgencia. Comunícate con el consultorio para información sobre presupuesto en casos electivos.',
      },
      {
        question: '¿Cuánto tiempo dura la apendicectomía laparoscópica?',
        answer: 'En casos no complicados, la apendicectomía laparoscópica dura entre 30 y 60 minutos bajo anestesia general. En casos de apendicitis perforada con peritonitis, puede requerirse hasta 1.5 horas por la limpieza de la cavidad abdominal. El alta hospitalaria se otorga en 24 horas en casos simples y en 48 a 72 horas en casos complicados.',
      },
      {
        question: '¿Cuándo puedo regresar al trabajo tras la apendicectomía laparoscópica?',
        answer: 'Para actividades de oficina o sedentarias, la mayoría regresa entre los días 5 y 7 postoperatorios. Para trabajo físico moderado, se recomiendan de 2 a 3 semanas. En casos de apendicitis perforada con mayor complejidad, puede requerirse reposo adicional. El Dr. Ruvalcaba expide el certificado de incapacidad médica según la evolución de cada caso.',
      },
    ],
    relevantSpecialty: 'General Surgery',
    bodyLocation: 'Appendix, Abdomen',
    imagePath: '/images/procedures/apendicectomia-laparoscopica.webp',
    preparation: 'Ayuno previo a la cirugía (mínimo 6 horas en urgencias si el tiempo lo permite). Se requieren análisis de sangre básicos y ultrasonido o tomografía abdominal para confirmar el diagnóstico. En urgencia, la preparación se realiza de forma expedita para no retrasar la intervención.',
  },

  // ---------------------------------------------------------------------------
  // 14. Funduplicatura Laparoscópica (Anti-Reflujo)
  // ---------------------------------------------------------------------------
  {
    slug: 'funduplicatura-antirreflujo',
    title: 'Funduplicatura Laparoscópica (Anti-Reflujo)',
    shortTitle: 'Funduplicatura',
    metaTitle: 'Funduplicatura Antirreflujo en Mérida | Dr. Mario Ruvalcaba',
    metaDescription: 'Funduplicatura laparoscópica en Mérida con el Dr. Mario Ruvalcaba. Corrección definitiva del reflujo gastroesofágico severo. Elimina el reflujo en >90%. Agenda tu valoración hoy.',
    heroHeadline: 'Funduplicatura Laparoscópica en Mérida',
    heroSubheadline: 'Corrección quirúrgica definitiva de la enfermedad por reflujo gastroesofágico severo y la hernia hiatal que no responden al tratamiento con medicamentos. Elimina el reflujo de forma permanente.',
    description: 'La funduplicatura laparoscópica es una cirugía antirreflujo que envuelve el fondo del estómago alrededor del esófago inferior para reconstruir el esfínter esofágico y eliminar el reflujo gastroesofágico severo de forma permanente en más del 90% de los pacientes.',
    longDescription: 'La funduplicatura laparoscópica antirreflujo en Mérida es la solución quirúrgica definitiva para la enfermedad por reflujo gastroesofágico (ERGE) severa que no responde a medicamentos. La ERGE afecta al 10-20% de la población adulta, y en casos severos puede progresar a esofagitis erosiva, esófago de Barrett y, en última instancia, cáncer de esófago. El fundamento del procedimiento es envolver el fondo del estómago alrededor del esófago inferior para reconstruir el esfínter esofágico inferior, la barrera natural que impide el reflujo. La técnica más frecuente es la funduplicatura de Nissen (360°); en casos seleccionados se utiliza la variante de Toupet (270°) para reducir el riesgo de disfagia postoperatoria. La cirugía también corrige la hernia hiatal cuando está presente, resolviendo el defecto anatómico subyacente.\n\nEl Dr. Mario Ruvalcaba realiza la funduplicatura laparoscópica en Mérida a través de 4 a 5 pequeñas incisiones bajo anestesia general. La cirugía dura entre 1.5 y 2.5 horas. La indicación requiere confirmación objetiva de ERGE mediante pH-metría de 24 horas y/o manometría esofágica, endoscopía digestiva alta y en algunos casos serie esofagogastroduodenal. El alta hospitalaria se otorga al día siguiente o a las 48 horas con dieta líquida inicial.\n\nEspecialista en cirugía antirreflujo en Yucatán, el Dr. Ruvalcaba cuenta con certificación del Consejo Mexicano de Cirugía General y más de 5 años de experiencia en cirugía esofagogástrica laparoscópica. Opera en los principales hospitales de Mérida con infraestructura de vanguardia. Su protocolo incluye evaluación funcional completa del esófago antes de la cirugía para seleccionar la técnica más adecuada y garantizar los mejores resultados para cada paciente.\n\nMás del 90% de los pacientes logra la eliminación completa del reflujo tras la funduplicatura, con resolución de los síntomas, mejoría de la esofagitis y posibilidad de suspender los inhibidores de bomba de protones. La recuperación funcional completa se alcanza entre 4 y 8 semanas. Si tienes reflujo severo que los medicamentos no controlan, existe una solución permanente. Agenda tu valoración hoy.',
    benefits: [
      {
        title: 'Solución Definitiva',
        description: 'Elimina el reflujo gastroesofágico de manera permanente en más del 90% de los pacientes, evitando la dependencia de medicamentos de por vida.',
        icon: '🎯',
      },
      {
        title: 'Prevención de Complicaciones',
        description: 'Detiene la progresión de la esofagitis, reduce el riesgo de esófago de Barrett y sus complicaciones, y mejora la calidad de vida de forma integral.',
        icon: '🩺',
      },
      {
        title: 'Independencia de Medicamentos',
        description: 'La gran mayoría de los pacientes puede suspender los inhibidores de bomba de protones después de la cirugía.',
        icon: '💊',
      },
      {
        title: 'Mínima Invasión',
        description: 'Abordaje laparoscópico con recuperación de 1 a 2 semanas, sin la morbilidad de la cirugía abierta convencional.',
        icon: '🔬',
      },
    ],
    candidates: [
      'Pacientes con ERGE severa confirmada por pH-metría de 24 horas y/o manometría esofágica, con síntomas que no se controlan adecuadamente con inhibidores de bomba de protones.',
      'Personas con esofagitis grado C o D (Los Ángeles), esófago de Barrett o estenosis péptica que requieren corrección definitiva del reflujo.',
      'Pacientes con hernia hiatal por deslizamiento o paraesofágica que contribuye al reflujo y causa síntomas como pirosis, regurgitación, disfagia o síntomas respiratorios.',
      'Personas que prefieren una solución quirúrgica definitiva sobre la dependencia de medicamentos a largo plazo, tras evaluación apropiada que confirme que son candidatos adecuados.',
      'Pacientes con reflujo laringofaríngeo o manifestaciones extraesofágicas del reflujo (tos crónica, ronquera, asma, erosión dental) refractarias al tratamiento médico.',
    ],
    recovery: [
      {
        period: 'Primera semana',
        description: 'Dieta líquida estricta los primeros 7 días para permitir la cicatrización de la reparación y la adaptación a la nueva anatomía. Puede haber disfagia (dificultad para tragar) temporal, especialmente para sólidos. El paciente regresa a casa al día siguiente o a las 48 horas.',
      },
      {
        period: '2–4 semanas',
        description: 'Progresión gradual a dieta blanda y posteriormente a alimentos sólidos. La disfagia se va resolviendo progresivamente. Se recomienda comer despacio, masticar bien y evitar boladas grandes de comida. Reincorporación a actividades sedentarias alrededor del día 10.',
      },
      {
        period: '1–3 meses',
        description: 'Adaptación completa a la nueva anatomía. La mayoría de los pacientes puede consumir todos los alimentos normalmente. Los síntomas de reflujo deben estar completamente resueltos. En este período se realiza la endoscopía de control para verificar la cicatrización esofágica.',
      },
      {
        period: '6–12 meses',
        description: 'Recuperación total. Seguimiento para confirmar la ausencia de recurrencia del reflujo y la resolución de la esofagitis o el Barrett cuando estaba presente. Los pacientes con Barrett requieren seguimiento endoscópico periódico posterior.',
      },
    ],
    costRange: '',
    duration: '1.5 - 2.5 horas',
    hospitalStay: '1 - 2 noches',
    icon: '🔧',
    faq: [
      {
        question: '¿Cuándo está indicada la cirugía antirreflujo y no los medicamentos?',
        answer: 'La cirugía está indicada cuando el reflujo es severo y no se controla adecuadamente con dosis óptimas de inhibidores de bomba de protones, cuando el paciente no desea tomar medicación de por vida, cuando hay complicaciones del reflujo (esofagitis severa, Barrett, estenosis), cuando hay hernia hiatal voluminosa, o cuando el reflujo genera manifestaciones extraesofágicas (tos, ronquera, asma).',
      },
      {
        question: '¿Qué es la disfagia postoperatoria y cuánto dura?',
        answer: 'La disfagia (dificultad para tragar) es el efecto secundario más común tras la funduplicatura y se presenta en grado variable en la mayoría de los pacientes durante las primeras 4 a 8 semanas. Es causada por el edema e inflamación postoperatorios y por la adaptación a la nueva anatomía. En la gran mayoría de los casos se resuelve espontáneamente entre la 4ª y la 8ª semana con la dieta adecuada.',
      },
      {
        question: '¿La funduplicatura puede realizarse si tengo hernia hiatal grande?',
        answer: 'Sí, de hecho la reparación de la hernia hiatal es parte integral del procedimiento antirreflujo. En hernias paraesofágicas grandes (tipo III y IV), la cirugía se programa electivamente para reparar el defecto y reposicionar el estómago en el abdomen, combinando la reparación crural con la funduplicatura.',
      },
      {
        question: '¿El reflujo puede volver a aparecer después de la cirugía?',
        answer: 'La tasa de recurrencia del reflujo a 10 años es del 10 al 15%, generalmente por relajación progresiva de la funduplicatura o por herniación recurrente. Sin embargo, la gran mayoría de los pacientes mantiene excelentes resultados a largo plazo, con más del 85% reportando satisfacción completa a los 10 años de la cirugía.',
      },
      {
        question: '¿Cuánto cuesta la funduplicatura laparoscópica en Mérida?',
        answer: 'El costo varía según el hospital y los estudios preoperatorios requeridos (pH-metría, manometría, endoscopía). El Dr. Ruvalcaba proporciona un presupuesto detallado durante la consulta inicial. Muchos seguros de gastos médicos cubren la funduplicatura cuando existe indicación médica documentada con estudios funcionales esofágicos. Consulta con tu aseguradora y el consultorio para más información.',
      },
      {
        question: '¿Cuánto tiempo dura la funduplicatura laparoscópica?',
        answer: 'La funduplicatura laparoscópica dura entre 1.5 y 2.5 horas bajo anestesia general. En casos que incluyen reparación de hernia hiatal grande, puede requerir tiempo adicional. El alta hospitalaria se otorga al día siguiente o a las 48 horas con dieta líquida estricta durante los primeros 7 días.',
      },
      {
        question: '¿Cuándo puedo regresar al trabajo después de la funduplicatura?',
        answer: 'Los pacientes con trabajo sedentario o de oficina suelen reincorporarse alrededor del día 10 postoperatorio. La restricción más importante durante las primeras 2 semanas es dietética: dieta líquida y luego blanda para permitir la cicatrización. Para trabajos físicos, se recomiendan de 3 a 4 semanas de reposo. La disfagia temporal se resuelve progresivamente entre la 4ª y 8ª semana.',
      },
    ],
    relevantSpecialty: 'Gastroenterology',
    bodyLocation: 'Esophagus, Stomach',
    imagePath: '/images/procedures/funduplicatura-antirreflujo.webp',
    preparation: 'Ayuno de 8 horas previo a la cirugía. Se requiere evaluación preoperatoria con pH-metría esofágica de 24 horas, manometría esofágica de alta resolución, endoscopía digestiva alta y análisis de sangre. En algunos casos, serie esofagogastroduodenal con contraste.',
  },

  // ---------------------------------------------------------------------------
  // 15. Cirugía para Acalasia (Miotomía de Heller)
  // ---------------------------------------------------------------------------
  {
    slug: 'cirugia-acalasia',
    title: 'Cirugía para Acalasia (Miotomía de Heller)',
    shortTitle: 'Cirugía para Acalasia',
    metaTitle: 'Cirugía para Acalasia en Mérida | Dr. Mario Ruvalcaba - Miotomía de Heller',
    metaDescription: 'Miotomía de Heller laparoscópica en Mérida con el Dr. Mario Ruvalcaba. Tratamiento definitivo de acalasia con resolución de disfagia en >90%. Agenda tu valoración hoy.',
    heroHeadline: 'Cirugía para Acalasia en Mérida',
    heroSubheadline: 'Miotomía de Heller laparoscópica para el tratamiento definitivo de la acalasia, el trastorno de motilidad esofágica que impide el paso normal de los alimentos al estómago.',
    description: 'La miotomía de Heller laparoscópica es el procedimiento quirúrgico de referencia para la acalasia. Consiste en una incisión longitudinal precisa en las fibras musculares del esfínter esofágico inferior, eliminando el obstáculo al paso de los alimentos con resolución de la disfagia en más del 90% de los pacientes.',
    longDescription: 'La acalasia es un trastorno motor del esófago de causa desconocida (posiblemente autoinmune) caracterizado por la incapacidad del esfínter esofágico inferior para relajarse durante la deglución y por la ausencia de peristaltismo esofágico normal. Esto impide el paso adecuado de los alimentos al estómago, generando disfagia progresiva para sólidos y líquidos, regurgitación de alimentos no digeridos, dolor torácico y pérdida de peso. Su incidencia es de 1 a 2 casos por cada 100,000 habitantes al año, con mayor frecuencia entre los 25 y 60 años. Sin tratamiento, la acalasia progresa y puede producir megaesófago con deterioro nutricional severo. En Mérida, el especialista en cirugía para acalasia en Yucatán ofrece el tratamiento laparoscópico definitivo de referencia.\n\nEl Dr. Mario Ruvalcaba realiza la miotomía de Heller laparoscópica en Mérida, el procedimiento quirúrgico de referencia para la acalasia. Bajo anestesia general y a través de 4 a 5 pequeñas incisiones, se realiza una incisión longitudinal precisa en las fibras musculares del esfínter esofágico inferior sin perforar la mucosa subyacente, eliminando el obstáculo al paso de los alimentos. El procedimiento se complementa con una funduplicatura parcial de Dor (anterior, 180°) para prevenir el reflujo gastroesofágico que podría surgir al liberar el esfínter. La cirugía dura entre 1.5 y 2.5 horas con alta hospitalaria a las 24-48 horas.\n\nCon certificación del Consejo Mexicano de Cirugía General y más de 5 años de experiencia en cirugía esofágica laparoscópica en Mérida, el Dr. Ruvalcaba realiza la evaluación funcional completa preoperatoria con manometría de alta resolución y endoscopía digestiva para clasificar correctamente la acalasia y seleccionar la técnica más adecuada. Opera en hospitales de primer nivel de Mérida, Yucatán, con los recursos diagnósticos y terapéuticos necesarios para el manejo de patología esofágica compleja.\n\nLos estudios a largo plazo reportan resolución de la disfagia en más del 90% de los pacientes tras la miotomía de Heller laparoscópica, con tasas de éxito superiores al 85% a los 10 años. La mejoría es generalmente notable desde las primeras horas postoperatorias. La mayoría de los pacientes se reincorpora a sus actividades en 7 a 10 días. Si tienes dificultad para tragar que no cede con otros tratamientos, la cirugía laparoscópica puede ofrecerte la solución definitiva. Agenda tu valoración hoy.',
    benefits: [
      {
        title: 'Resolución de la Disfagia',
        description: 'Más del 90% de los pacientes logra deglución normal tras la miotomía, con resultados sostenidos a largo plazo en la gran mayoría.',
        icon: '🍽️',
      },
      {
        title: 'Tratamiento Definitivo',
        description: 'A diferencia de las dilataciones neumáticas o la toxina botulínica, la miotomía ofrece resultados más duraderos sin necesidad de repetir el procedimiento.',
        icon: '🎯',
      },
      {
        title: 'Protección Anti-Reflujo',
        description: 'La funduplicatura de Dor incluida en el procedimiento previene el reflujo gastroesofágico que podría surgir tras la liberación del esfínter.',
        icon: '🛡️',
      },
      {
        title: 'Mínima Invasión',
        description: 'Abordaje laparoscópico que permite una recuperación rápida, con alta hospitalaria en 24 a 48 horas y reincorporación laboral en 1 a 2 semanas.',
        icon: '🔬',
      },
    ],
    candidates: [
      'Pacientes con diagnóstico confirmado de acalasia por manometría esofágica de alta resolución (presión elevada del esfínter esofágico inferior con aperistalsis esofágica).',
      'Personas con disfagia progresiva para sólidos y líquidos con pérdida de peso asociada.',
      'Pacientes que no respondieron satisfactoriamente o tienen recurrencia tras tratamientos endoscópicos previos (dilatación neumática o toxina botulínica).',
      'Adultos jóvenes o de mediana edad en quienes se prefiere un tratamiento de mayor durabilidad para evitar repetición de procedimientos.',
      'Pacientes con acalasia tipo I o II (según clasificación de Chicago) sin megaesófago severo que aún permite la cirugía laparoscópica como primera opción.',
    ],
    recovery: [
      {
        period: 'Primera semana',
        description: 'Dieta líquida completa los primeros 5 a 7 días para permitir la cicatrización de la miotomía. Alta hospitalaria a las 24 a 48 horas. La mejoría de la disfagia es notable desde las primeras horas o días postoperatorios.',
      },
      {
        period: '2–4 semanas',
        description: 'Progresión a dieta blanda y posteriormente a alimentos sólidos según tolerancia. La mayoría de los pacientes nota mejoría significativa en la deglución en este período. Reincorporación a actividades laborales sedentarias alrededor del día 7 a 10.',
      },
      {
        period: '1–3 meses',
        description: 'Adaptación completa con deglución normal en la gran mayoría de los pacientes. Se recomienda comer despacio y masticar bien de manera habitual. Seguimiento con manometría y/o serie esofagogastroduodenal de control según criterio del médico tratante.',
      },
      {
        period: '6–12 meses',
        description: 'Recuperación total. Evaluación de resultados a largo plazo. En caso de síntomas residuales o recurrencia, se valoran opciones de manejo adicional. Los pacientes con megaesófago previo pueden requerir seguimiento más estrecho.',
      },
    ],
    costRange: '',
    duration: '1.5 - 2.5 horas',
    hospitalStay: '1 - 2 noches',
    icon: '🫁',
    faq: [
      {
        question: '¿Cómo se diagnostica la acalasia?',
        answer: 'El diagnóstico de acalasia se confirma mediante manometría esofágica de alta resolución, que mide la presión y los patrones de motilidad del esófago y el esfínter inferior. Complementariamente se realizan endoscopía digestiva alta para descartar otras causas de disfagia y serie esofagogastroduodenal con contraste para evaluar el grado de dilatación esofágica y el patrón de vaciamiento.',
      },
      {
        question: '¿Cuál es la diferencia entre la miotomía de Heller y las dilataciones neumáticas?',
        answer: 'Las dilataciones neumáticas son un tratamiento endoscópico menos invasivo pero con mayor tasa de recurrencia (40–50% a 5 años) y riesgo de perforación. La miotomía de Heller laparoscópica ofrece mayor durabilidad (más del 80% de éxito a 10 años) con una recuperación rápida. En pacientes jóvenes y en aquellos que no responden a las dilataciones, la miotomía es la opción preferida.',
      },
      {
        question: '¿La acalasia puede reaparecer después de la cirugía?',
        answer: 'La miotomía de Heller ofrece resultados excelentes a largo plazo, con tasas de éxito superiores al 85% a los 10 años. Sin embargo, en un porcentaje menor de pacientes puede haber síntomas residuales o recurrencia tardía por fibrosis en el sitio de la miotomía. En estos casos se valoran opciones como dilatación neumática, toxina botulínica o en casos seleccionados, una nueva intervención.',
      },
      {
        question: '¿Existe alguna alternativa a la cirugía para tratar la acalasia?',
        answer: 'Sí. Las principales alternativas son: inyección de toxina botulínica (efecto temporal de 6 a 12 meses), dilatación neumática endoscópica (buena eficacia a corto plazo pero con mayor recurrencia) y POEM (miotomía endoscópica per-oral), una técnica endoscópica avanzada que logra resultados similares a la cirugía laparoscópica pero sin incisiones externas.',
      },
      {
        question: '¿Cuánto cuesta la cirugía para acalasia (miotomía de Heller) en Mérida?',
        answer: 'El costo varía según el hospital y los estudios preoperatorios especializados requeridos (manometría esofágica, endoscopía, serie radiológica). El Dr. Ruvalcaba proporciona un presupuesto detallado durante la consulta inicial. Algunos seguros de gastos médicos cubren el procedimiento cuando existe diagnóstico confirmado de acalasia. Comunícate con el consultorio para información sobre costos y cobertura.',
      },
      {
        question: '¿Cuánto tiempo dura la miotomía de Heller laparoscópica?',
        answer: 'La miotomía de Heller laparoscópica con funduplicatura de Dor dura entre 1.5 y 2.5 horas bajo anestesia general. El procedimiento requiere precisión técnica especial para realizar la incisión muscular sin perforar la mucosa esofágica. El alta hospitalaria se otorga a las 24-48 horas con dieta líquida durante los primeros 5 a 7 días.',
      },
      {
        question: '¿Cuándo puedo regresar al trabajo después de la cirugía para acalasia?',
        answer: 'Los pacientes con trabajo sedentario suelen reincorporarse entre los días 7 y 10 postoperatorios. La mejoría de la disfagia es generalmente notable desde los primeros días. Para trabajos físicos se recomiendan 2 a 3 semanas de reposo. La adaptación completa a la nueva anatomía y la normalización de la deglución se logran entre las 4 y 8 semanas.',
      },
    ],
    relevantSpecialty: 'Gastroenterology',
    bodyLocation: 'Esophagus',
    imagePath: '/images/procedures/cirugia-acalasia.webp',
    preparation: 'Ayuno de 8 horas previo a la cirugía. Se requiere evaluación preoperatoria con manometría esofágica de alta resolución, endoscopía digestiva alta y serie esofagogastroduodenal con contraste. En pacientes con desnutrición severa, puede requerirse soporte nutricional previo.',
  },

  // ---------------------------------------------------------------------------
  // 16. Cirugía de Hernias Ventrales
  // ---------------------------------------------------------------------------
  {
    slug: 'cirugia-hernias-ventrales',
    title: 'Cirugía de Hernias Ventrales',
    shortTitle: 'Hernias Ventrales',
    metaTitle: 'Cirugía de Hernias Ventrales en Mérida | Dr. Mario Ruvalcaba',
    metaDescription: 'Cirugía laparoscópica de hernias umbilicales, epigástricas e incisionales en Mérida. Dr. Mario Ruvalcaba. Recurrencia <2%. Agenda tu valoración hoy.',
    heroHeadline: 'Cirugía de Hernias Ventrales en Mérida',
    heroSubheadline: 'Reparación laparoscópica de hernias umbilicales, epigástricas e incisionales con malla protésica. Menor dolor, recuperación más rápida y tasas de recurrencia significativamente menores que la cirugía abierta.',
    description: 'Las hernias ventrales (umbilical, epigástrica e incisional) se reparan por laparoscopia colocando una malla protésica en la cara interna de la pared abdominal. Esta técnica intraperitoneal (IPOM) logra tasas de recurrencia menores al 2% con recuperación en 1 a 2 semanas.',
    longDescription: 'La cirugía de hernias ventrales en Mérida abarca la reparación de los defectos de la pared abdominal anterior, incluyendo la hernia umbilical (en el ombligo), la hernia epigástrica (entre ombligo y esternón) y la hernia incisional (en una cicatriz quirúrgica previa). Las hernias ventrales afectan al 10-15% de la población y son más frecuentes en personas con obesidad, antecedentes de cirugías abdominales o esfuerzo físico intenso. Si no se tratan, las hernias crecen progresivamente y pueden complicarse con encarcelamiento o estrangulación intestinal, situaciones que requieren cirugía de urgencia con mayor riesgo. La cirugía laparoscópica de hernias ventrales en Yucatán ofrece ventajas claras sobre el abordaje abierto: menor dolor, recuperación más rápida y tasas de recurrencia significativamente menores.\n\nEl Dr. Mario Ruvalcaba realiza la cirugía de hernias ventrales en Mérida por técnica laparoscópica IPOM (Intraperitoneal Onlay Mesh) a través de 3 a 4 pequeñas incisiones alejadas del defecto herniario. Bajo anestesia general, se reduce el contenido herniado, se identifica el defecto y se coloca una malla protésica de última generación en la cara interna de la pared abdominal. La cirugía dura entre 1 y 3 horas dependiendo del tamaño y número de hernias. El alta hospitalaria se otorga al día siguiente con recuperación funcional en 1 a 2 semanas. La técnica laparoscópica logra tasas de recurrencia menores al 2%, frente al 10-15% de la reparación abierta sin malla.\n\nCirujano general certificado en Mérida, Yucatán, el Dr. Ruvalcaba cuenta con certificación del Consejo Mexicano de Cirugía General y más de 5 años de experiencia en cirugía laparoscópica de la pared abdominal. Opera en los hospitales de mayor nivel de Mérida con mallas protésicas de última generación de triple capa con barrera antiadherente, seleccionadas según las características de cada hernia. Su protocolo incluye la reparación simultánea de múltiples defectos cuando es posible en un solo tiempo quirúrgico.\n\nLos resultados son excelentes: tasas de recurrencia menores al 2%, dolor postoperatorio mínimo manejado con analgésicos orales y reincorporación a actividades cotidianas en 7 a 14 días. Las hernias incisionales complejas y las recurrentes son especialmente favorecidas por el abordaje laparoscópico, que accede a planos no disecados previamente. No esperes a que tu hernia se complique. Agenda tu valoración hoy.',
    benefits: [
      {
        title: 'Mínima Recurrencia',
        description: 'La malla protésica reduce la tasa de recurrencia a menos del 2%, comparada con el 10–15% de la reparación abierta sin refuerzo.',
        icon: '📉',
      },
      {
        title: 'Menor Dolor',
        description: 'El abordaje laparoscópico evita la disección muscular extensa, resultando en significativamente menos dolor postoperatorio.',
        icon: '💪',
      },
      {
        title: 'Alta Temprana',
        description: 'La mayoría de los pacientes regresa a casa al día siguiente con recuperación funcional completa en 1 a 2 semanas.',
        icon: '🏠',
      },
      {
        title: 'Ideal para Hernias Complejas',
        description: 'Especialmente ventajosa en hernias incisionales grandes, hernias recurrentes o en pacientes con múltiples hernias simultáneas.',
        icon: '🎯',
      },
    ],
    candidates: [
      'Pacientes con hernia umbilical sintomática (dolor, molestia al esfuerzo, protrusión visible) de cualquier tamaño.',
      'Personas con hernia incisional (en cicatriz de cirugía previa) que cause síntomas o presente riesgo de encarcelamiento.',
      'Pacientes con hernia epigástrica sintomática o con riesgo de complicación por contenido graso o intestinal.',
      'Personas con hernias ventrales recurrentes tras cirugía previa que requieren refuerzo con malla para reducir el riesgo de nueva recurrencia.',
      'Adultos con múltiples defectos herniarios de la pared abdominal que pueden abordarse simultáneamente mediante laparoscopia con una sola intervención.',
    ],
    recovery: [
      {
        period: 'Primera semana',
        description: 'Alta hospitalaria al día siguiente o a las 48 horas. Dolor moderado manejable con analgésicos orales. Es normal sentir molestia a nivel de la malla durante las primeras semanas. Caminatas suaves desde el primer día. Evitar levantar objetos mayores a 3 kg.',
      },
      {
        period: '2–4 semanas',
        description: 'Reincorporación a actividades laborales sedentarias entre los 7 y 14 días. Alimentación libre. Evitar esfuerzos abdominales, levantamiento de peso y ejercicio de impacto. La molestia a nivel de la malla va disminuyendo progresivamente.',
      },
      {
        period: '1–3 meses',
        description: 'Recuperación funcional. La malla se integra a los tejidos de la pared abdominal en este período. Inicio gradual de ejercicio cardiovascular moderado. Para trabajos con carga física, se recomienda esperar 4 a 6 semanas.',
      },
      {
        period: '3–6 meses',
        description: 'Integración completa de la malla. Actividad física sin restricciones, incluyendo ejercicio con pesas y actividades de impacto. La pared abdominal queda reforzada de manera permanente.',
      },
    ],
    costRange: '',
    duration: '1 - 3 horas',
    hospitalStay: '1 - 2 noches',
    icon: '🩹',
    faq: [
      {
        question: '¿Siempre se necesita malla para reparar una hernia ventral?',
        answer: 'En hernias umbilicales pequeñas (menores de 1 cm) puede realizarse cierre primario sin malla con buenos resultados. Sin embargo, para hernias de 1 cm o más, la reparación con malla ofrece tasas de recurrencia significativamente menores (menos del 2% vs más del 10% sin malla). En hernias incisionales, la malla es prácticamente siempre necesaria.',
      },
      {
        question: '¿La malla puede generar complicaciones a largo plazo?',
        answer: 'Las mallas modernas utilizadas en la cirugía laparoscópica de hernias ventrales tienen excelentes perfiles de seguridad a largo plazo. Las complicaciones son infrecuentes e incluyen infección de malla (menos del 1%), seroma (acumulación de líquido) en las primeras semanas que generalmente se reabsorbe solo, y raramente dolor crónico.',
      },
      {
        question: '¿Qué pasa si no opero la hernia?',
        answer: 'Las hernias ventrales no desaparecen solas y tienden a crecer con el tiempo. La principal complicación es el encarcelamiento: el contenido herniario queda atrapado en el defecto y no puede reducirse manualmente. Si se compromete el flujo sanguíneo del intestino herniado (estrangulación), se trata de una urgencia quirúrgica que eleva significativamente el riesgo de la cirugía.',
      },
      {
        question: '¿Puedo hacer ejercicio después de la cirugía de hernia?',
        answer: 'Sí, pero de manera progresiva. Las caminatas se inician desde el primer día. El ejercicio cardiovascular moderado puede iniciarse entre las 2 y 4 semanas. El ejercicio con pesas, abdominales y actividades de alto impacto deben esperar entre 6 y 8 semanas para permitir la integración completa de la malla a los tejidos.',
      },
      {
        question: '¿Cuánto cuesta la cirugía de hernias ventrales en Mérida?',
        answer: 'El costo varía según el tamaño y número de hernias, el tipo de malla utilizada y el hospital. El Dr. Ruvalcaba ofrece consulta inicial para evaluar el caso y proporcionar un presupuesto detallado. La mayoría de los seguros de gastos médicos cubre la cirugía de hernias ventrales sintomáticas. Comunícate con el consultorio para información sobre costos y verificar tu cobertura.',
      },
      {
        question: '¿Cuánto tiempo dura la cirugía de hernias ventrales?',
        answer: 'La cirugía laparoscópica de hernias ventrales dura entre 1 y 3 horas dependiendo del tamaño del defecto, el número de hernias y la complejidad. Las hernias umbilicales simples se resuelven en 1 hora; las hernias incisionales grandes o múltiples pueden requerir hasta 3 horas. Todas se realizan bajo anestesia general con internamiento de 1 a 2 noches.',
      },
      {
        question: '¿Cuándo puedo regresar al trabajo después de la cirugía de hernias ventrales?',
        answer: 'Para trabajos sedentarios o de oficina, la reincorporación es entre los días 7 y 14 postoperatorios. Para trabajo físico moderado, de 4 a 6 semanas. Para trabajo físico intenso, se recomienda esperar de 6 a 8 semanas hasta la integración completa de la malla. El Dr. Ruvalcaba proporciona el certificado de incapacidad según las necesidades de cada paciente.',
      },
    ],
    relevantSpecialty: 'General Surgery',
    bodyLocation: 'Abdominal Wall',
    imagePath: '/images/procedures/cirugia-hernias-ventrales.webp',
    preparation: 'Ayuno de 8 horas previo a la cirugía. Se requieren análisis de sangre, ultrasonido de pared abdominal para caracterizar el defecto herniario y valoración preoperatoria básica. En hernias incisionales complejas, puede ser necesaria tomografía de pared abdominal para planificar la reparación.',
  },

  // ---------------------------------------------------------------------------
  // 17. Cirugía de Hernias Inguinales
  // ---------------------------------------------------------------------------
  {
    slug: 'cirugia-hernias-inguinales',
    title: 'Cirugía de Hernias Inguinales',
    shortTitle: 'Hernias Inguinales',
    metaTitle: 'Hernioplastía Inguinal Laparoscópica en Mérida | Dr. Mario Ruvalcaba',
    metaDescription: 'Hernioplastía inguinal laparoscópica TEP/TAPP en Mérida con el Dr. Mario Ruvalcaba. Recurrencia <2%. Alta el mismo día. Agenda tu valoración hoy.',
    heroHeadline: 'Hernioplastía Inguinal Laparoscópica en Mérida',
    heroSubheadline: 'Reparación laparoscópica de hernias inguinales con técnica TEP o TAPP. Menor dolor, recuperación más rápida que la cirugía abierta y ventaja significativa en hernias bilaterales y recurrentes.',
    description: 'La hernioplastía inguinal laparoscópica mediante técnica TEP o TAPP coloca una malla protésica en el espacio preperitoneal cubriendo el defecto herniario desde el interior, con recuperación en 5 a 7 días y tasas de recurrencia menores al 2%.',
    longDescription: 'La hernioplastía inguinal laparoscópica en Mérida es el tratamiento de elección para la hernia inguinal, la más frecuente de todos los tipos de hernia abdominal. La hernia inguinal afecta aproximadamente al 27% de los hombres y al 3% de las mujeres a lo largo de su vida. Se manifiesta como un bulto en la ingle acompañado de dolor o molestia al toser, hacer esfuerzo o estar de pie por tiempo prolongado. Sin tratamiento, la hernia crece progresivamente y puede complicarse con encarcelamiento o estrangulación intestinal, situación que requiere cirugía de urgencia con mayor riesgo. El cirujano de hernias inguinales en Mérida ofrece la técnica laparoscópica más avanzada con resultados superiores a la cirugía abierta convencional.\n\nEl Dr. Mario Ruvalcaba realiza la hernioplastía inguinal laparoscópica en Mérida mediante técnica TEP (Totally Extraperitoneal) o TAPP (Transabdominal Preperitoneal), seleccionando la más adecuada según la anatomía y antecedentes de cada paciente. Ambas técnicas colocan una malla protésica en el espacio preperitoneal cubriendo el defecto herniario desde el interior. La cirugía dura entre 1 y 1.5 horas bajo anestesia general y es ambulatoria en la mayoría de los casos: el paciente regresa a casa el mismo día. La técnica laparoscópica es especialmente ventajosa en hernias bilaterales, permitiendo reparar ambas ingles con las mismas 3 incisiones sin necesidad de dos cirugías separadas.\n\nEspecialista en hernias inguinales en Yucatán, el Dr. Ruvalcaba cuenta con certificación del Consejo Mexicano de Cirugía General y más de 5 años de experiencia en hernioplastía laparoscópica con técnicas TEP y TAPP. Opera en hospitales de primer nivel de Mérida con mallas protésicas de última generación para espacio preperitoneal. Las hernias recurrentes tras cirugía abierta previa son especialmente favorecidas por el abordaje laparoscópico, que accede a planos no disecados anteriormente.\n\nLos resultados son excelentes: reincorporación a actividades sedentarias en 5 a 7 días, tasas de recurrencia menores al 2% y prácticamente sin dolor crónico en el sitio operado. Comparado con la reparación abierta de Lichtenstein, la técnica laparoscópica ofrece menor dolor postoperatorio, especialmente en las primeras 2 semanas. No dejes tu hernia sin tratamiento. Agenda tu valoración hoy.',
    benefits: [
      {
        title: 'Ambulatorio',
        description: 'Procedimiento de corta estancia: el paciente regresa a casa el mismo día de la cirugía en la mayoría de los casos.',
        icon: '🏠',
      },
      {
        title: 'Recuperación Rápida',
        description: 'Reincorporación a actividades sedentarias en 5 a 7 días, significativamente más rápido que la cirugía abierta convencional.',
        icon: '⚡',
      },
      {
        title: 'Ideal para Hernias Bilaterales',
        description: 'Permite reparar ambas hernias inguinales a través de las mismas 3 incisiones, sin necesidad de dos cirugías separadas.',
        icon: '🎯',
      },
      {
        title: 'Baja Tasa de Recurrencia',
        description: 'La malla en posición preperitoneal reduce la tasa de recurrencia a menos del 2%, con excelentes resultados a largo plazo.',
        icon: '📉',
      },
    ],
    candidates: [
      'Pacientes con hernia inguinal directa o indirecta sintomática (dolor, molestia, bulto en la ingle) confirmada por examen físico y/o ultrasonido.',
      'Personas con hernia inguinal bilateral (ambas ingles) en quienes el abordaje laparoscópico permite reparar ambos defectos en un solo tiempo quirúrgico.',
      'Pacientes con hernia inguinal recurrente tras cirugía abierta previa, en quienes el abordaje laparoscópico accede a planos no disecados previamente.',
      'Personas con hernia inguinal asociada a hernia femoral o hernia contralateral que pueden tratarse simultáneamente por laparoscopia.',
      'Adultos activos o con trabajos físicos que requieren la recuperación más rápida posible para reincorporarse a sus actividades.',
    ],
    recovery: [
      {
        period: 'Día del procedimiento',
        description: 'Alta el mismo día en la mayoría de los pacientes. Inicio de líquidos y dieta blanda pocas horas después de la cirugía. Dolor leve a moderado manejable con analgésicos orales. Se pueden iniciar caminatas cortas el mismo día.',
      },
      {
        period: 'Primera semana',
        description: 'Retorno a actividades cotidianas ligeras en 2 a 3 días. Manejo del dolor con ibuprofeno o paracetamol. Evitar levantar objetos pesados (más de 5 kg) y esfuerzos que aumenten la presión abdominal.',
      },
      {
        period: '2–4 semanas',
        description: 'Reincorporación a trabajos sedentarios o de oficina en 5 a 7 días. Para trabajos con carga moderada, entre los 14 y 21 días. La molestia en la región inguinal va desapareciendo progresivamente.',
      },
      {
        period: '1–3 meses',
        description: 'Recuperación total. Integración completa de la malla a los tejidos. Actividad física sin restricciones, incluyendo trabajo físico pesado y deportes de contacto o de impacto, a partir de las 4 a 6 semanas según indicación médica.',
      },
    ],
    costRange: '',
    duration: '1 - 1.5 horas',
    hospitalStay: 'Ambulatorio',
    icon: '🩹',
    faq: [
      {
        question: '¿Cuál es la diferencia entre TEP y TAPP?',
        answer: 'Ambas son técnicas laparoscópicas que colocan la malla en el espacio preperitoneal. En el TEP se trabaja en el espacio preperitoneal sin entrar a la cavidad abdominal. El TAPP entra primero a la cavidad abdominal y luego accede al espacio preperitoneal, permitiendo explorar el abdomen simultáneamente. El Dr. Ruvalcaba selecciona la técnica más adecuada según la anatomía y antecedentes de cada paciente.',
      },
      {
        question: '¿Pueden operarse las dos hernias al mismo tiempo?',
        answer: 'Sí, y esta es una de las grandes ventajas de la cirugía laparoscópica sobre la abierta. En hernias inguinales bilaterales, el abordaje laparoscópico permite reparar ambos defectos a través de las mismas 3 incisiones, sin necesidad de dos cirugías separadas, con el mismo tiempo de recuperación que una sola hernia.',
      },
      {
        question: '¿Qué actividades debo evitar tras la cirugía?',
        answer: 'Durante las primeras 2 semanas: evitar levantar objetos de más de 5 kg, hacer ejercicio intenso y actividades que aumenten la presión abdominal. Entre las 2 y 4 semanas pueden reanudarse actividades moderadas. A partir de las 4 a 6 semanas, la mayoría de los pacientes puede retomar actividad física completa, incluyendo deportes y trabajo físico.',
      },
      {
        question: '¿La hernia inguinal puede volver a aparecer después de la cirugía?',
        answer: 'Con la técnica laparoscópica y malla protésica, la tasa de recurrencia es menor al 2% a largo plazo, comparada con el 10–15% de la reparación abierta sin malla. La integración adecuada de la malla a los tejidos, que ocurre en las primeras 6 a 8 semanas, es fundamental para el resultado a largo plazo.',
      },
      {
        question: '¿Cuánto cuesta la hernioplastía inguinal laparoscópica en Mérida?',
        answer: 'El costo varía según si la hernia es unilateral o bilateral, el tipo de malla y el hospital. La reparación bilateral laparoscópica, que resuelve ambas ingles en un solo procedimiento, suele ser más costo-efectiva que dos cirugías separadas. El Dr. Ruvalcaba proporciona un presupuesto detallado durante la consulta. La mayoría de los seguros de gastos médicos cubre la hernioplastía inguinal sintomática.',
      },
      {
        question: '¿Cuánto tiempo dura la hernioplastía inguinal laparoscópica?',
        answer: 'La hernioplastía inguinal laparoscópica unilateral dura entre 1 y 1.5 horas bajo anestesia general. En hernias bilaterales, el tiempo es solo ligeramente mayor (1.5 a 2 horas) ya que se reparan ambas a través de las mismas incisiones. Es un procedimiento ambulatorio: el paciente regresa a casa el mismo día en la mayoría de los casos.',
      },
      {
        question: '¿Cuándo puedo regresar al trabajo después de la hernioplastía inguinal?',
        answer: 'Para actividades sedentarias o de oficina, la reincorporación es en 5 a 7 días. Para trabajo físico moderado, entre los días 14 y 21. Para trabajo físico intenso, se recomiendan de 4 a 6 semanas. La integración de la malla ocurre en las primeras 6 a 8 semanas, período en que se debe evitar el esfuerzo inguinal excesivo.',
      },
    ],
    relevantSpecialty: 'General Surgery',
    bodyLocation: 'Inguinal Region',
    imagePath: '/images/procedures/cirugia-hernias-inguinales.webp',
    preparation: 'Ayuno de 8 horas previo a la cirugía. Se requieren análisis de sangre y valoración preoperatoria básica. El ultrasonido inguinal puede ser útil en casos dudosos para confirmar el diagnóstico. Para hernias bilaterales, la evaluación de ambas ingles se realiza durante la consulta preoperatoria.',
  },

  // ---------------------------------------------------------------------------
  // 18. Cirugía por Puerto Único
  // ---------------------------------------------------------------------------
  {
    slug: 'cirugia-puerto-unico',
    title: 'Cirugía por Puerto Único',
    shortTitle: 'Puerto Único',
    metaTitle: 'Cirugía por Puerto Único en Mérida | Dr. Mario Ruvalcaba - SILS',
    metaDescription: 'Cirugía por puerto único (SILS) en Mérida con el Dr. Mario Ruvalcaba. Una sola incisión umbilical, cicatriz invisible. Vesícula, apéndice y más. Agenda tu valoración hoy.',
    heroHeadline: 'Cirugía por Puerto Único en Mérida',
    heroSubheadline: 'Técnica laparoscópica avanzada que realiza el procedimiento quirúrgico a través de una sola incisión oculta en el ombligo. Resultado estético superior con cicatriz prácticamente invisible.',
    description: 'La cirugía por puerto único (SILS) realiza el procedimiento completo a través de una sola incisión de 2 a 3 cm oculta dentro del ombligo, ofreciendo los mismos resultados quirúrgicos de la laparoscopia convencional con el beneficio de una cicatriz prácticamente invisible.',
    longDescription: 'La cirugía por puerto único (SILS: Single Incision Laparoscopic Surgery) en Mérida representa el máximo nivel estético alcanzable en cirugía de mínima invasión. A diferencia de la laparoscopia convencional que utiliza 3 a 4 incisiones distribuidas en el abdomen, la técnica SILS realiza el procedimiento completo a través de una sola incisión de 2 a 3 cm oculta dentro del ombligo, aprovechando el pliegue natural de la piel para esconder completamente la cicatriz. El resultado: una cirugía sin marcas visibles. Esta técnica está especialmente indicada para pacientes que priorizan el resultado estético y desean combinar la seguridad y efectividad de la laparoscopia con la ventaja cosmética de una cicatriz prácticamente invisible. La cirugía por puerto único en Yucatán está disponible para procedimientos seleccionados en manos del Dr. Ruvalcaba.\n\nEl Dr. Mario Ruvalcaba aplica la técnica SILS en Mérida utilizando un dispositivo de acceso especial que permite introducir simultáneamente la cámara de alta definición y los instrumentos quirúrgicos a través de la única incisión umbilical. Los procedimientos más frecuentes incluyen colecistectomía (vesícula biliar), apendicectomía (apéndice) y reparación de hernias umbilicales de tamaño adecuado. La cirugía se realiza bajo anestesia general con duración similar a la laparoscopia convencional (45 minutos a 2 horas). El alta hospitalaria es el mismo día en la mayoría de los casos.\n\nCirujano laparoscópico avanzado en Mérida, Yucatán, el Dr. Ruvalcaba cuenta con certificación del Consejo Mexicano de Cirugía General y entrenamiento específico en técnicas de acceso único. La técnica SILS requiere mayor destreza quirúrgica que la laparoscopia estándar por las limitaciones de triangulación de instrumentos en un espacio reducido, pero en manos expertas ofrece los mismos resultados de seguridad y eficacia con el beneficio estético adicional. No todos los pacientes son candidatos: el IMC, los antecedentes quirúrgicos y la anatomía individual determinan la viabilidad.\n\nEl resultado estético es notable: la cicatriz queda completamente oculta dentro del ombligo y es prácticamente imperceptible pocas semanas después de la cirugía, incluso en comparación con las pequeñas cicatrices de la laparoscopia convencional. La recuperación es similar: reincorporación en 5 a 7 días para actividades cotidianas. Si buscas la mejor opción estética para tu cirugía laparoscópica, el puerto único es tu solución. Agenda tu valoración hoy.',
    benefits: [
      {
        title: 'Cicatriz Invisible',
        description: 'La incisión se realiza dentro del ombligo, quedando completamente oculta en el pliegue natural de la piel. Sin marcas visibles.',
        icon: '✨',
      },
      {
        title: 'Mismos Resultados Quirúrgicos',
        description: 'Eficacia y seguridad comparables a la laparoscopia convencional, con la ventaja estética de la incisión única.',
        icon: '🎯',
      },
      {
        title: 'Menos Trauma',
        description: 'Una sola incisión en lugar de 3 a 4, lo que puede traducirse en menos dolor postoperatorio en procedimientos seleccionados.',
        icon: '💪',
      },
      {
        title: 'Alta Temprana',
        description: 'Procedimiento ambulatorio en la mayoría de los casos, con regreso a casa el mismo día o a las 24 horas.',
        icon: '🏠',
      },
    ],
    candidates: [
      'Pacientes con colelitiasis (cálculos biliares) que requieren colecistectomía y dan alta prioridad al resultado estético con cicatriz invisible.',
      'Personas con apendicitis aguda no complicada candidatas a apendicectomía laparoscópica con preferencia por el abordaje de incisión única.',
      'Pacientes con hernia umbilical de tamaño pequeño a moderado que se benefician de la reparación simultánea con el acceso umbilical.',
      'Adultos con IMC adecuado (generalmente menor a 40) sin cirugías abdominales previas extensas que puedan dificultar la técnica.',
      'Pacientes que, tras ser informados de las ventajas y limitaciones del puerto único, expresan preferencia por este abordaje frente a la laparoscopia convencional.',
    ],
    recovery: [
      {
        period: 'Primera semana',
        description: 'Alta el mismo día o a las 24 horas. Dolor leve a moderado en la zona umbilical, manejable con analgésicos orales. Cuidado de la incisión umbilical manteniéndola limpia y seca. Caminatas desde el primer día. Dieta libre o blanda según el procedimiento realizado.',
      },
      {
        period: '2–4 semanas',
        description: 'Reincorporación a actividades cotidianas y laborales sedentarias entre los 5 y 10 días. La cicatriz umbilical cicatriza rápidamente y se vuelve prácticamente invisible en pocas semanas. Evitar levantar objetos pesados por 2 a 3 semanas.',
      },
      {
        period: '1–3 meses',
        description: 'Recuperación completa sin restricciones. La cicatriz umbilical queda completamente oculta dentro del pliegue natural del ombligo. Los resultados estéticos suelen ser notables desde las primeras semanas.',
      },
      {
        period: '3–6 meses',
        description: 'Resultado estético definitivo: sin cicatrices visibles. Actividad física completa sin restricciones. Seguimiento médico de rutina según el procedimiento realizado.',
      },
    ],
    costRange: '',
    duration: '45 min - 2 horas',
    hospitalStay: 'Ambulatorio - 1 noche',
    icon: '🔘',
    faq: [
      {
        question: '¿La cirugía por puerto único es igual de segura que la laparoscopia convencional?',
        answer: 'Sí, en manos de un cirujano con entrenamiento específico en la técnica, el puerto único ofrece resultados de seguridad y eficacia comparables a la laparoscopia convencional para los procedimientos en que está indicado. La curva de aprendizaje es más exigente por las limitaciones de la triangulación de instrumentos en espacio reducido.',
      },
      {
        question: '¿En qué procedimientos puede aplicarse el puerto único?',
        answer: 'Los más frecuentes son colecistectomía laparoscópica (extirpación de vesícula), apendicectomía laparoscópica, reparación de hernia umbilical y algunos procedimientos de bariátrica y ginecología. No todos los procedimientos laparoscópicos son adaptables al puerto único: la viabilidad depende de la anatomía del paciente, el IMC, los antecedentes quirúrgicos y la complejidad esperada.',
      },
      {
        question: '¿El resultado estético es realmente diferente al de la laparoscopia convencional?',
        answer: 'Sí, de manera notable. La laparoscopia convencional deja 3 a 4 cicatrices pequeñas (5–12 mm) distribuidas en el abdomen. El puerto único deja una sola cicatriz dentro del ombligo, completamente oculta en el pliegue natural de la piel, siendo prácticamente imperceptible. Es el abordaje quirúrgico con mejor resultado estético disponible actualmente para estos procedimientos.',
      },
      {
        question: '¿Cómo sé si soy candidato al puerto único o a la laparoscopia convencional?',
        answer: 'El Dr. Ruvalcaba realiza una evaluación individualizada que considera el tipo de procedimiento necesario, el IMC del paciente, las cirugías abdominales previas, la anatomía y la complejidad esperada. En algunos casos, la laparoscopia convencional puede ser más segura o más adecuada técnicamente. La decisión final se toma durante la consulta preoperatoria.',
      },
      {
        question: '¿Cuánto cuesta la cirugía por puerto único en Mérida?',
        answer: 'El costo es similar a la laparoscopia convencional con una pequeña diferencia por el dispositivo de acceso especial. El Dr. Ruvalcaba proporciona un presupuesto detallado durante la consulta. Algunos seguros de gastos médicos cubren el procedimiento cuando la indicación quirúrgica está bien documentada. Comunícate con el consultorio para obtener información de costos.',
      },
      {
        question: '¿Cuánto tiempo dura la cirugía por puerto único?',
        answer: 'La duración es similar a la laparoscopia convencional: entre 45 minutos y 2 horas según el procedimiento. La colecistectomía por puerto único dura 45-75 minutos; la apendicectomía entre 30 y 60 minutos; la reparación de hernia umbilical entre 1 y 1.5 horas. Todos los procedimientos se realizan bajo anestesia general con alta el mismo día.',
      },
      {
        question: '¿Cuándo puedo regresar al trabajo tras la cirugía por puerto único?',
        answer: 'La recuperación es comparable a la laparoscopia convencional: para actividades sedentarias, entre los días 5 y 7 postoperatorios. Para actividades físicas moderadas, entre 2 y 3 semanas. La cicatriz umbilical cicatriza rápidamente y se vuelve prácticamente invisible en pocas semanas.',
      },
    ],
    relevantSpecialty: 'General Surgery',
    bodyLocation: 'Abdomen',
    imagePath: '/images/procedures/cirugia-puerto-unico.webp',
    preparation: 'Ayuno de 8 horas previo a la cirugía. Los estudios preoperatorios varían según el procedimiento específico a realizar. Para colecistectomía: ultrasonido y análisis de sangre. Para apendicectomía: ultrasonido o tomografía. Para hernia umbilical: exploración física y en algunos casos ultrasonido de pared abdominal.',
  },
]

// =============================================================================
// PROCEDURES — English
// =============================================================================
const PROCEDURES_EN: Procedure[] = [
  // ---------------------------------------------------------------------------
  // 1. Gastric Sleeve
  // ---------------------------------------------------------------------------
  {
    slug: 'manga-gastrica-merida',
    imagePath: '/images/procedures/manga-gastrica.webp',
    title: 'Gastric Sleeve',
    shortTitle: 'Gastric Sleeve',
    metaTitle:
      'Gastric Sleeve in Merida | Dr. Mario Ruvalcaba - Bariatric Surgeon',
    metaDescription:
      'Gastric sleeve surgery in Merida with Dr. Mario Ruvalcaba. Lose up to 70% of your excess weight with safe laparoscopic surgery. Schedule your consultation today.',
    heroHeadline: 'Gastric Sleeve in Merida',
    heroSubheadline:
      'Transform your life with the most widely performed bariatric procedure in the world. Proven results, fast recovery, and comprehensive support.',
    description:
      'The gastric sleeve (vertical sleeve gastrectomy) reduces the size of the stomach by 75% to 85%, limiting food intake and decreasing the production of ghrelin, the hunger hormone. It is the most requested bariatric procedure worldwide due to its effectiveness and safety.',
    longDescription:
      'Vertical sleeve gastrectomy is a surgical procedure that removes approximately 80% of the stomach, reshaping it into a thin, sleeve-shaped tube. By drastically reducing gastric capacity, patients experience early satiety with small portions of food. Additionally, by removing the gastric fundus — the primary producer of ghrelin — the sensation of hunger is significantly reduced, making it easier to adhere to a healthy long-term eating plan.\n\nDr. Mario Ruvalcaba performs this procedure laparoscopically, using 4 to 5 small incisions that minimize postoperative pain, infection risk, and recovery time. Patients typically lose between 60% and 70% of their excess weight during the first 12 to 18 months. The surgery not only promotes sustained weight loss but also contributes to the improvement or resolution of obesity-related conditions such as type 2 diabetes mellitus, high blood pressure, obstructive sleep apnea, dyslipidemia, and gastroesophageal reflux disease. Each patient receives a personalized multidisciplinary plan that includes nutritional, psychological, and medical follow-up to ensure optimal and lasting results.',
    benefits: [
      {
        title: 'Significant weight loss',
        description:
          'Lose between 60% and 70% of your excess weight in the first 12 to 18 months, with sustained long-term results thanks to hormonal appetite reduction.',
        icon: '📉',
      },
      {
        title: 'Improvement of comorbidities',
        description:
          'Resolution or improvement of type 2 diabetes, hypertension, sleep apnea, dyslipidemia, and joint diseases associated with excess weight.',
        icon: '❤️',
      },
      {
        title: 'Minimally invasive procedure',
        description:
          'Laparoscopic surgery with 3 to 12 mm incisions that reduce pain, complications, and leave virtually imperceptible scars.',
        icon: '🔬',
      },
      {
        title: 'Fast recovery',
        description:
          'Most patients return to daily activities within 1 to 2 weeks and to full physical activity within 4 to 6 weeks.',
        icon: '⚡',
      },
    ],
    candidates: [
      'Individuals with a Body Mass Index (BMI) of 35 or higher with associated comorbidities, or a BMI of 40 or higher without comorbidities.',
      'Patients who have tried conventional weight loss methods (diet, exercise, medications) without achieving sustained results for at least 6 months.',
      'Individuals diagnosed with obesity-related conditions such as type 2 diabetes, high blood pressure, sleep apnea, or degenerative joint disease.',
      'Adults between 18 and 65 years of age willing to commit to permanent lifestyle changes, dietary adjustments, and postoperative medical follow-up.',
      'Patients without serious surgical contraindications or uncontrolled active eating disorders, and who have received a favorable psychological evaluation.',
    ],
    recovery: [
      {
        period: 'First week',
        description:
          'Clear liquid diet only (water, fat-free broth, sugar-free gelatin, oral rehydration solution). Relative rest at home with short walks to prevent thrombosis. Mild discomfort managed with oral analgesics. Surgical wound check at 7 days.',
      },
      {
        period: '2-4 weeks',
        description:
          'Gradual transition to full liquids and pureed foods (protein shakes, soft purees, sugar-free yogurt). Beginning of vitamin and protein supplementation. Sedentary work activities may resume. In-person or virtual nutritional follow-up.',
      },
      {
        period: '1-3 months',
        description:
          'Progressive introduction of soft and solid foods in controlled portions. Start of moderate cardiovascular exercise (walking, stationary bike, swimming). Patients typically have lost 30% to 40% of their excess weight by this point.',
      },
      {
        period: '6-12 months',
        description:
          'Varied diet emphasizing proteins, vegetables, and proper hydration. Regular physical activity without restrictions. Loss of 60% to 70% of excess weight. Quarterly follow-up with lab work to monitor nutritional and metabolic levels.',
      },
    ],
    costRange: '',
    duration: '1 - 1.5 hours',
    hospitalStay: '1 - 2 nights',
    icon: '🩺',
    faq: [
      {
        question: 'Is gastric sleeve surgery reversible?',
        answer:
          'No, gastric sleeve surgery is an irreversible procedure because approximately 80% of the stomach is permanently removed. However, in specific cases it can be converted to a gastric bypass or biliopancreatic diversion if the patient requires it. It is essential that the patient understands the permanent nature of the procedure before surgery and is committed to the necessary lifestyle changes.',
      },
      {
        question: 'How much weight can I expect to lose with gastric sleeve surgery?',
        answer:
          'On average, patients lose between 60% and 70% of their excess weight during the first 12 to 18 months after surgery. For example, if a patient has 40 kg (88 lbs) of excess weight, they can expect to lose between 24 and 28 kg (53 to 62 lbs). Results vary depending on adherence to the nutritional plan, physical activity, and medical follow-up. Dr. Ruvalcaba and his multidisciplinary team design a personalized plan to maximize each patient\'s results.',
      },
      {
        question: 'What are the risks of gastric sleeve surgery?',
        answer:
          'As with any surgery, gastric sleeve carries risks, although the complication rate is low (between 1% and 3%). The most common risks include staple line bleeding, gastric leak or fistula, stenosis (narrowing), gastroesophageal reflux, and long-term nutritional deficiencies. Dr. Ruvalcaba uses advanced staple line sealing and reinforcement techniques to minimize these complications, and each patient receives a rigorous follow-up protocol.',
      },
      {
        question:
          'Can I drink alcohol or carbonated beverages after gastric sleeve surgery?',
        answer:
          'Carbonated beverages should be permanently avoided, as the gas can cause gastric distension, discomfort, and dilation of the remaining stomach over time. As for alcohol, it should be avoided for at least the first 6 months and subsequently consumed with extreme moderation. After surgery, the body absorbs alcohol more quickly and intensely, increasing the risk of intoxication and developing dependence.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 2. Gastric Bypass
  // ---------------------------------------------------------------------------
  {
    slug: 'bypass-gastrico-merida',
    imagePath: '/images/procedures/bypass-gastrico.webp',
    title: 'Gastric Bypass',
    shortTitle: 'Gastric Bypass',
    metaTitle:
      'Gastric Bypass in Merida | Dr. Mario Ruvalcaba - Bariatric Surgeon',
    metaDescription:
      'Roux-en-Y gastric bypass in Merida. The gold standard bariatric procedure for severe obesity and type 2 diabetes. Consult with Dr. Ruvalcaba.',
    heroHeadline: 'Gastric Bypass in Merida',
    heroSubheadline:
      'The gold standard in bariatric surgery. Exceptional results for severe obesity and type 2 diabetes resolution with advanced laparoscopic technique.',
    description:
      'Roux-en-Y gastric bypass combines stomach size restriction with an intestinal bypass that modifies nutrient absorption and produces powerful hormonal changes. It is considered the gold standard procedure for patients with severe obesity and metabolic diseases.',
    longDescription:
      'Roux-en-Y gastric bypass is a restrictive and malabsorptive procedure that involves creating a smaller stomach pouch from the upper portion of the stomach, which is then connected directly to a segment of the small intestine (alimentary limb), bypassing most of the stomach, the duodenum, and the first portion of the jejunum. This configuration limits the amount of food the patient can eat, reduces caloric absorption, and crucially triggers profound hormonal changes — including increased GLP-1, PYY, and reduced ghrelin — that improve insulin sensitivity and contribute to type 2 diabetes resolution in up to 80% of cases.\n\nDr. Mario Ruvalcaba performs gastric bypass laparoscopically with refined technique developed under world-class mentors. Patients can expect to lose between 70% and 80% of their excess weight in the first 18 to 24 months. This procedure is particularly effective for patients with a BMI above 45, poorly controlled type 2 diabetes, metabolic syndrome, and severe gastroesophageal reflux disease. Postoperative follow-up includes lifelong vitamin supplementation (iron, calcium, vitamin B12, fat-soluble vitamins), periodic nutritional monitoring, and laboratory testing to prevent nutritional deficiencies.\n\n* To maintain metabolic control and sustained weight loss over time, multidisciplinary follow-up is the most important factor.',
    benefits: [
      {
        title: 'Greater weight loss',
        description:
          'Average loss of 70% to 80% of excess weight in 18 to 24 months, making it one of the bariatric procedures with the best long-term results.',
        icon: '🏋️',
      },
      {
        title: 'Type 2 diabetes resolution',
        description:
          'Up to 80% of patients achieve complete remission of type 2 diabetes thanks to the powerful hormonal and metabolic changes produced by gastric bypass.',
        icon: '🩺',
      },
      {
        title: 'Anti-reflux effect',
        description:
          'Elimination of gastroesophageal reflux by diverting bile and acid flow away from the esophagus, making it the ideal option for obese patients with severe GERD.',
        icon: '🛡️',
      },
      {
        title: 'Favorable hormonal changes',
        description:
          'Significant increase in satiety hormones (GLP-1, PYY) and reduction of ghrelin, which decreases appetite and improves glucose metabolism on a sustained basis.',
        icon: '🧬',
      },
    ],
    candidates: [
      'Patients with a Body Mass Index (BMI) of 40 or higher, or a BMI of 35 or higher with severe metabolic comorbidities such as uncontrolled type 2 diabetes.',
      'Individuals with poorly controlled type 2 diabetes who could benefit from the metabolic effects of bypass, even with a BMI between 30 and 35 (metabolic surgery).',
      'Patients with severe gastroesophageal reflux disease (GERD) associated with obesity, as gastric bypass is the bariatric procedure that best controls reflux.',
      'Individuals with a prior gastric sleeve who require a revision procedure due to weight regain or intractable reflux.',
      'Motivated adults who understand the need for lifelong vitamin supplementation and strict nutritional follow-up as an integral part of treatment.',
    ],
    recovery: [
      {
        period: 'First week',
        description:
          'Strict clear liquid diet with fractionated hydration (small, frequent sips). Rest at home with early ambulation to prevent thromboembolism. Pain management with oral analgesics. Wound check and oral tolerance assessment at 7 days.',
      },
      {
        period: '2-4 weeks',
        description:
          'Progression to full liquids and protein-rich purees. Start of mandatory vitamin supplementation (multivitamin, iron, calcium with vitamin D, vitamin B12). Gradual return to low-demand work activities.',
      },
      {
        period: '1-3 months',
        description:
          'Progressive introduction of soft solid foods, prioritizing lean proteins. Start of supervised moderate physical activity. It is essential to learn to identify and avoid dumping syndrome, which occurs when consuming simple sugars or large meals.',
      },
      {
        period: '6-12 months',
        description:
          'Balanced and varied diet without major restrictions, maintaining protein priority and avoiding concentrated sugars. Regular physical activity. Quarterly lab tests to detect iron, B12, calcium, and fat-soluble vitamin deficiencies. Expected loss of 70% to 80% of excess weight.',
      },
    ],
    costRange: '',
    duration: '2 - 3 hours',
    hospitalStay: '2 - 3 nights',
    icon: '💜',
    faq: [
      {
        question:
          'What is the difference between gastric bypass and gastric sleeve?',
        answer:
          'Gastric sleeve is a purely restrictive procedure that reduces the size of the stomach, while gastric bypass combines restriction with intestinal bypass, producing more pronounced hormonal and metabolic changes. Gastric bypass offers greater weight loss (70-80% vs. 60-70% of excess weight), a higher diabetes resolution rate (up to 80%), and is superior for controlling gastroesophageal reflux. However, it requires lifelong vitamin supplementation and stricter nutritional follow-up. Dr. Ruvalcaba evaluates each case individually to recommend the most appropriate procedure.',
      },
      {
        question: 'What is dumping syndrome?',
        answer:
          'Dumping syndrome is a side effect that can occur after gastric bypass when consuming foods high in simple sugars or fats. It presents as dizziness, nausea, sweating, rapid heartbeat, abdominal cramps, and diarrhea, usually within 10 to 30 minutes after eating. Although uncomfortable, dumping acts as a negative feedback mechanism that helps patients avoid unhealthy foods. It is prevented by following nutritional recommendations and avoiding sweets, sodas, and processed foods.',
      },
      {
        question:
          'Will I need to take vitamins for life after gastric bypass?',
        answer:
          'Yes, lifelong vitamin and mineral supplementation is mandatory after gastric bypass. By bypassing a portion of the small intestine, the surface area for absorbing essential nutrients is reduced. Basic supplements include: daily multivitamin with minerals, calcium citrate with vitamin D (1,200-1,500 mg/day), vitamin B12 (sublingual or monthly injection), elemental iron (45-60 mg/day, especially for premenopausal women), and in some cases, fat-soluble vitamins (A, D, E, K). Periodic lab tests allow dose adjustments based on individual needs.',
      },
      {
        question: 'Is gastric bypass reversible?',
        answer:
          'Technically, gastric bypass can be surgically reversed since the excluded stomach is preserved within the abdomen. However, reversal is a complex procedure with significant risks and is rarely performed. In practice, gastric bypass is considered a permanent procedure. What is possible and more common is bypass revision — adjusting the size of the gastric pouch or the length of the intestinal limb — in patients who experience weight regain or long-term complications. Dr. Ruvalcaba also performs bariatric revision surgeries.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 3. Intragastric Balloon
  // ---------------------------------------------------------------------------
  {
    slug: 'balon-intragastrico',
    imagePath: '/images/procedures/balon-intragastrico.webp',
    title: 'Intragastric Balloon',
    shortTitle: 'Gastric Balloon',
    metaTitle:
      'Intragastric Balloon in Merida | Dr. Mario Ruvalcaba - Non-Surgical Treatment',
    metaDescription:
      'Intragastric balloon in Merida: lose weight without surgery. 20-minute outpatient procedure. Ideal for BMI 27-35. Consult with Dr. Ruvalcaba.',
    heroHeadline: 'Intragastric Balloon in Merida',
    heroSubheadline:
      'Lose weight effectively without surgery. A quick, safe outpatient procedure that helps you transform your eating habits.',
    description:
      'The intragastric balloon is a silicone device placed inside the stomach endoscopically, without the need for incisions or surgery. It occupies space in the stomach, producing early satiety and helping the patient reduce portion sizes and adopt healthy eating habits.',
    longDescription:
      'The intragastric balloon consists of a medical-grade silicone sphere that is inserted deflated through the mouth using a flexible endoscope and, once inside the stomach, is filled with sterile saline solution tinted with methylene blue (between 400 and 700 ml depending on the model). The balloon occupies approximately one-third of the gastric volume, inducing a feeling of fullness and satiety with smaller amounts of food. It requires no incisions and the entire procedure takes 20 to 30 minutes under light sedation (in most cases). The patient goes home the same day.\n\nThe balloon remains in the stomach for 6 to 12 months (depending on the type of device) and is removed endoscopically in a manner similar to placement. During this period, the patient works with a multidisciplinary team — nutritionist, psychologist, and bariatric physician — to retrain eating habits and establish a physical activity routine. Expected weight loss is 10% to 15% of total body weight (or 30% to 40% of excess weight). The intragastric balloon is ideal for patients with overweight or grade I obesity (BMI between 27 and 35) who do not qualify for or do not wish to undergo bariatric surgery, as well as for patients with severe obesity as a bridge therapy before a definitive surgical procedure.',
    benefits: [
      {
        title: 'No surgery or incisions',
        description:
          'An endoscopic procedure that requires no cuts, sutures, or staples. Placed and removed orally under light sedation, eliminating the risks associated with surgery.',
        icon: '✨',
      },
      {
        title: 'Outpatient procedure',
        description:
          'Takes only 20 to 30 minutes with same-day discharge. No hospitalization or extended rest needed — you can return to your activities in 2 to 3 days.',
        icon: '🕐',
      },
      {
        title: 'Habit retraining',
        description:
          'The balloon acts as a therapeutic tool that teaches you to eat appropriate portions and recognize satiety signals, fostering lasting habit changes.',
        icon: '🍎',
      },
      {
        title: 'Fully reversible',
        description:
          'The balloon is easily removed via endoscopy at the end of treatment (6 to 12 months), leaving no permanent changes to your digestive anatomy.',
        icon: '🔄',
      },
    ],
    candidates: [
      'Individuals with overweight or grade I obesity (BMI between 27 and 35) who have not achieved sufficient results with conventional diet and exercise.',
      'Patients who wish to lose weight without undergoing bariatric surgery, whether due to personal preference, medical conditions, or because they do not meet surgical criteria.',
      'Individuals with severe obesity (BMI above 40 or 50) who need to lose weight prior to bariatric or other surgery to reduce surgical risk (bridge therapy).',
      'Motivated adults willing to actively participate in a multidisciplinary program of dietary habit change and physical activity throughout the treatment period.',
      'Patients without endoscopic contraindications such as prior gastric surgery, large hiatal hernias, active ulcers, or uncontrolled coagulation disorders.',
    ],
    recovery: [
      {
        period: 'First week',
        description:
          'The first 3 to 5 days are the most intense in terms of adaptation: nausea, vomiting, and abdominal cramps are common as the stomach adjusts to the balloon. These are managed with antiemetic and antispasmodic medications. Clear liquid diet only. Constant hydration in small sips.',
      },
      {
        period: '2-4 weeks',
        description:
          'Discomfort decreases significantly as the body adapts. Transition to full liquids and then pureed foods. Formal start of the nutritional program with meal planning, food tracking, and education on appropriate portions.',
      },
      {
        period: '1-3 months',
        description:
          'Regular eating with controlled portions. The patient learns to identify signals of true satiety and hunger. Start or intensification of exercise routine. Weight loss is usually most accelerated during this phase, reaching 5% to 8% of total body weight.',
      },
      {
        period: '6-12 months',
        description:
          'Habit consolidation phase before balloon removal. The patient should have adopted a sustainable healthy lifestyle. Expected total loss of 10% to 15% of body weight. Upon endoscopic balloon removal, nutritional follow-up continues to prevent weight regain.',
      },
    ],
    costRange: '',
    duration: '20 - 30 minutes',
    hospitalStay: 'Outpatient (same day)',
    icon: '⭕',
    faq: [
      {
        question: 'Is the intragastric balloon procedure painful?',
        answer:
          'Balloon placement is performed under intravenous sedation, so the patient does not experience pain or discomfort during the procedure. In the first 3 to 5 days afterward, it is normal to experience nausea, a feeling of stomach heaviness, cramps, and in some cases vomiting, as part of the stomach\'s adaptation to the balloon. These symptoms are effectively controlled with antiemetic, antispasmodic, and gastric protectant medications prescribed from the day of placement.',
      },
      {
        question: 'How much weight can I lose with an intragastric balloon?',
        answer:
          'Average weight loss with the intragastric balloon is 10% to 15% of total body weight, equivalent to 30% to 40% of excess weight. For example, a person weighing 220 lbs (100 kg) can expect to lose 22 to 33 lbs (10 to 15 kg). Results largely depend on the patient\'s commitment to the nutritional and physical activity program. Highly committed patients can achieve losses exceeding 15%. It is important to understand that the balloon is a tool that facilitates habit change, not a substitute for it.',
      },
      {
        question: 'What happens if the balloon deflates inside the stomach?',
        answer:
          'Modern intragastric balloons are filled with saline solution tinted with methylene blue, a safe dye that acts as an alert system. If the balloon punctures or deflates, the methylene blue is released into the stomach and absorbed, turning the urine blue or greenish. If the patient notices this change in urine color, they should immediately contact Dr. Ruvalcaba to schedule endoscopic removal of the deflated balloon and prevent it from migrating into the intestine. Although spontaneous deflation is rare (less than 1%), it is important to know this warning sign.',
      },
      {
        question: 'Is the intragastric balloon better than bariatric surgery?',
        answer:
          'It is neither better nor worse — they are different treatments for different patient profiles. The intragastric balloon is ideal for overweight and mild to moderate obesity (BMI 27-35), requires no surgery, is reversible, and offers more modest weight loss (10-15% of total weight). Bariatric surgery (gastric sleeve or bypass) is indicated for severe obesity (BMI above 35-40), offers more dramatic results (60-80% of excess weight), and is permanent. Dr. Ruvalcaba evaluates each case comprehensively to recommend the option that offers the best results based on the patient\'s needs and goals.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 4. Minimally Invasive Surgery
  // ---------------------------------------------------------------------------
  {
    slug: 'cirugia-minima-invasion',
    imagePath: '/images/procedures/cirugia-minima-invasion.webp',
    title: 'Minimally Invasive Surgery',
    shortTitle: 'Minimally Invasive',
    metaTitle:
      'Minimally Invasive Surgery in Merida | Dr. Mario Ruvalcaba - Laparoscopic Surgery',
    metaDescription:
      'Laparoscopic surgery in Merida: gallbladder, hernias, appendix, and more. Less pain, fewer scars, faster recovery. Dr. Mario Ruvalcaba, expert surgeon.',
    heroHeadline: 'Minimally Invasive Surgery in Merida',
    heroSubheadline:
      'Advanced surgical solutions with minimal invasion. Less pain, nearly invisible scars, and a remarkably faster recovery.',
    description:
      'Minimally invasive surgery uses advanced laparoscopic techniques to treat various abdominal conditions through 3 to 12 mm incisions. It includes cholecystectomy (gallbladder), hernia repair, appendectomy, and fundoplication for reflux, among other procedures.',
    longDescription:
      'Laparoscopic or minimally invasive surgery represents one of the most significant advances in modern surgery. Unlike traditional open surgery that requires large incisions (10-20 cm), laparoscopy allows the same procedures to be performed through 3 to 4 small incisions (3-12 mm) through which a high-definition camera and specialized surgical instruments are inserted. This translates into less tissue trauma, reduced postoperative pain, lower risk of wound infection and incisional hernias, better cosmetic results, and a significantly faster recovery.\n\nDr. Mario Ruvalcaba has extensive experience in general laparoscopic surgery and abdominal wall surgery. Among the procedures he most frequently performs are: laparoscopic cholecystectomy (gallbladder removal for gallstones or polyps), laparoscopic repair of inguinal, umbilical, incisional, and abdominal wall hernias with or without mesh placement, laparoscopic appendectomy (appendix removal in acute appendicitis), and laparoscopic Nissen fundoplication for the definitive treatment of severe gastroesophageal reflux disease that does not respond to medical therapy. Each procedure is planned on an individual basis, prioritizing patient safety and excellence in outcomes.\n\nSome of these procedures can also be performed using Single-Port Surgery, an advanced laparoscopic technique that uses a single incision — usually in the navel — to achieve a superior cosmetic result with virtually invisible scars.',
    benefits: [
      {
        title: 'Less postoperative pain',
        description:
          'The 3 to 12 mm incisions cause significantly less tissue trauma than open surgery, reducing the need for strong analgesics and pain during recovery.',
        icon: '💪',
      },
      {
        title: 'Minimal scarring',
        description:
          'The small laparoscopic incisions leave nearly imperceptible scars that fade over time, offering a far superior cosmetic result compared to open surgery.',
        icon: '✂️',
      },
      {
        title: 'Accelerated recovery',
        description:
          'Patients typically return to daily activities within 3 to 7 days, compared to 2 to 6 weeks required by conventional open surgery for the same procedures.',
        icon: '🚀',
      },
      {
        title: 'Lower risk of complications',
        description:
          'Laparoscopic technique reduces the incidence of surgical wound infections, incisional hernias, adhesions, and pulmonary complications associated with prolonged bed rest.',
        icon: '🛡️',
      },
    ],
    candidates: [
      'Patients with symptomatic gallstones (cholelithiasis), gallbladder polyps, or chronic cholecystitis requiring gallbladder removal.',
      'Individuals with inguinal, umbilical, epigastric, or incisional hernias causing pain, discomfort, or risk of incarceration or strangulation.',
      'Patients with acute appendicitis requiring urgent or scheduled surgical removal of the cecal appendix.',
      'Individuals with severe gastroesophageal reflux disease (GERD) that does not respond adequately to proton pump inhibitor medications and requires surgical correction.',
      'Adults and adolescents with abdominal conditions amenable to laparoscopic approach, in whom preoperative evaluation confirms they are safe candidates for general anesthesia.',
    ],
    recovery: [
      {
        period: 'First week',
        description:
          'Depending on the procedure performed, the patient may go home the same day or the next day. Relative rest with short walks from day one. Diet may resume hours after surgery, liquid or soft depending on the type of surgery. Pain managed with oral analgesics. Care of small incisions by keeping them clean and dry.',
      },
      {
        period: '2-4 weeks',
        description:
          'Most patients return to work and daily activities between 5 and 14 days depending on the complexity of the procedure. Regular diet without significant restrictions. Avoid lifting heavy objects (over 5 kg / 11 lbs) and intense exercise.',
      },
      {
        period: '1-3 months',
        description:
          'Nearly complete recovery. Gradual return to intense physical activity and weight training. In the case of hernia repair with mesh, the prosthetic material integrates and consolidates. Follow-up medical appointment to verify proper healing.',
      },
      {
        period: '6-12 months',
        description:
          'Full recovery without restrictions. Scars progressively fade to become nearly invisible. In the case of fundoplication, reflux symptoms should have completely resolved. Routine annual follow-up depending on the procedure performed.',
      },
    ],
    costRange: '',
    duration: '30 min - 2 hours',
    hospitalStay: 'Outpatient - 1 night',
    icon: '✨',
    faq: [
      {
        question: 'When is gallbladder surgery necessary?',
        answer:
          'Cholecystectomy (gallbladder removal) is indicated when gallstones cause symptoms such as pain in the upper right abdomen (biliary colic), nausea, vomiting, intolerance to fatty foods, or when complications arise such as acute cholecystitis (inflammation), choledocholithiasis (stones in the bile duct), or biliary pancreatitis. It is also recommended for gallbladder polyps larger than 10 mm due to malignancy risk. Gallstones do not dissolve with medications or alternative treatments; laparoscopic surgery is the definitive and safe treatment.',
      },
      {
        question: 'Does laparoscopic surgery leave scars?',
        answer:
          'Yes, but they are minimal. Laparoscopic surgery is performed through 3 to 4 incisions between 3 and 12 mm, producing very small scars compared to the 10 to 20 cm incisions of open surgery. Over time, these marks become virtually invisible. Dr. Ruvalcaba uses cosmetic closure techniques and, when possible, places incisions in less visible areas (such as the navel) to optimize the cosmetic result.',
      },
      {
        question:
          'How long after surgery can I return to work?',
        answer:
          'The time varies depending on the procedure and type of work. For office jobs or sedentary activities, most patients can return within 5 to 7 days after a cholecystectomy or appendectomy. For hernia repair, 7 to 14 days may be required depending on the size and location of the hernia. For jobs involving moderate to intense physical effort, it is recommended to wait 3 to 4 weeks. Dr. Ruvalcaba provides personalized medical leave according to each patient\'s needs.',
      },
      {
        question: 'What types of hernias can be repaired laparoscopically?',
        answer:
          'Virtually all abdominal wall hernias can be repaired laparoscopically: inguinal hernias (direct and indirect), umbilical hernias, epigastric hernias, incisional hernias (appearing at previous surgical scars), and Spigelian hernias, among others. Laparoscopic repair usually includes placement of a prosthetic mesh that reinforces the abdominal wall and significantly reduces the recurrence rate (from 10-15% without mesh to less than 2% with mesh). This technique is especially advantageous for bilateral or recurrent hernias.',
      },
    ],
  },
  // ---------------------------------------------------------------------------
  // 5. Diastasis Recti Surgery
  // ---------------------------------------------------------------------------
  {
    slug: 'cirugia-diastasis-rectos',
    imagePath: '/images/procedures/diastasis-rectos.webp',
    title: 'Diastasis Recti Surgery',
    shortTitle: 'Diastasis Recti',
    metaTitle:
      'Diastasis Recti Surgery in Merida | Dr. Mario Ruvalcaba',
    metaDescription:
      'Surgical repair of diastasis recti in Merida. Laparoscopic technique to restore the abdominal wall. Consult with Dr. Mario Ruvalcaba.',
    heroHeadline: 'Diastasis Recti Surgery in Merida',
    heroSubheadline:
      'Restore the function and appearance of your abdominal wall with minimally invasive surgical techniques. Effective results and optimized recovery.',
    description:
      'Diastasis recti is the separation of the rectus abdominis muscles, common after pregnancy or in cases of obesity. Surgical repair restores the integrity of the abdominal wall, improving both function and appearance of the abdomen.',
    longDescription:
      'Diastasis recti consists of the abnormal separation of the two rectus abdominis muscles along the linea alba (the midline of the abdomen). This condition is especially common in women after one or multiple pregnancies, although it can also occur in men with significant abdominal obesity or after massive weight loss. The muscle separation causes a visible bulge along the abdominal midline, abdominal wall weakness, lower back pain, difficulty performing physical activities, and in some cases, associated hernias.\n\nWhen rehabilitation exercises and physical therapy fail to correct the diastasis, surgical repair is the definitive treatment. Dr. Mario Ruvalcaba performs the repair using laparoscopic or open technique depending on the severity of the case, bringing the rectus muscles back to their anatomical position and reinforcing the linea alba. In selected cases, mesh placement may be combined for additional support. The procedure restores abdominal muscle function, improves posture, relieves associated lower back pain, and restores a firmer, more natural abdominal contour.',
    benefits: [
      {
        title: 'Functional restoration',
        description:
          'Restores integrity and strength to the abdominal wall, improving posture, core stability, and the ability to perform physical activities without discomfort.',
        icon: '💪',
      },
      {
        title: 'Cosmetic abdominal improvement',
        description:
          'Corrects the visible midline abdominal bulge, achieving a firmer, flatter, and more natural contour.',
        icon: '✨',
      },
      {
        title: 'Lower back pain relief',
        description:
          'By restoring anterior muscular support, lower back pain associated with abdominal wall weakness is significantly reduced.',
        icon: '🛡️',
      },
      {
        title: 'Minimally invasive technique',
        description:
          'In selected cases, performed laparoscopically with small incisions, reducing postoperative pain and accelerating recovery.',
        icon: '🔬',
      },
    ],
    candidates: [
      'Women with persistent rectus abdominis muscle separation after one or more pregnancies that does not improve with rehabilitation exercises.',
      'Individuals with diastasis recti presenting symptoms such as chronic lower back pain, functional abdominal weakness, or associated hernias.',
      'Post-bariatric patients or those with massive weight loss who have diastasis recti with excess abdominal skin.',
      'Men with diastasis recti secondary to abdominal obesity that persists after weight loss.',
      'Adults who have completed at least 6 months of physical rehabilitation without significant improvement and desire a definitive solution.',
    ],
    recovery: [
      {
        period: 'First week',
        description:
          'Relative rest with early ambulation. Use of compressive abdominal binder 24 hours a day. Pain managed with oral analgesics. Avoid abdominal strain and lifting heavy objects.',
      },
      {
        period: '2-4 weeks',
        description:
          'Continue with abdominal binder. Gradual return to daily and sedentary work activities. Avoid direct abdominal exercises and lifting more than 5 kg (11 lbs).',
      },
      {
        period: '1-3 months',
        description:
          'Progressive removal of abdominal binder as directed by the physician. Start of gentle supervised core strengthening exercises. Moderate physical activity permitted.',
      },
      {
        period: '3-6 months',
        description:
          'Complete recovery. Return to physical activity without restrictions. Final results in terms of abdominal contour and firmness are fully appreciated at 3 to 6 months.',
      },
    ],
    costRange: '',
    duration: '1.5 - 2.5 hours',
    hospitalStay: '1 night',
    icon: '🏋️',
    faq: [
      {
        question: 'How do I know if I have diastasis recti?',
        answer:
          'Diastasis recti presents as a visible bulge or ridge along the abdominal midline when performing abdominal effort (such as when sitting up from a lying position). It may be accompanied by abdominal weakness, lower back pain, and a feeling of laxity. The diagnosis is confirmed through physical examination and, in some cases, abdominal wall ultrasound. A separation greater than 2 cm between the rectus muscles is considered significant diastasis. Dr. Ruvalcaba performs a comprehensive evaluation to determine the degree of separation and the best treatment option.',
      },
      {
        question: 'Can exercises correct diastasis recti?',
        answer:
          'In mild cases (separation less than 2-3 cm), a specific exercise program for pelvic floor and deep core rehabilitation, guided by a specialized physical therapist, can significantly improve the condition. However, in moderate to severe diastasis (greater than 3 cm) or when associated hernias are present, exercises alone cannot close the separation, and surgical repair is necessary to restore abdominal wall integrity.',
      },
      {
        question: 'Can it be combined with a tummy tuck?',
        answer:
          'Yes, in patients who have excess skin and fatty tissue in addition to diastasis recti (common after pregnancy or massive weight loss), the diastasis repair can be combined with an abdominoplasty in a single surgical session. This allows correction of both the muscle separation and excess skin, achieving a comprehensive functional and cosmetic result. Dr. Ruvalcaba works in conjunction with plastic surgeons when this combined approach is required.',
      },
      {
        question: 'Can diastasis recti return after surgery?',
        answer:
          'Recurrence after proper surgical repair is uncommon (less than 5%). Factors that may increase the risk of recurrence include a new pregnancy, significant weight gain, and performing intense abdominal exertion before completing recovery. For this reason, it is recommended to wait at least 12 months before a new pregnancy and to follow recovery instructions carefully.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 6. Emergency Surgery 24/7
  // ---------------------------------------------------------------------------
  {
    slug: 'cirugias-urgencias',
    imagePath: '/images/procedures/cirugias-urgencias.webp',
    title: 'Emergency Surgery 24/7',
    shortTitle: 'Emergency 24/7',
    metaTitle:
      'Emergency Surgery 24/7 in Merida | Dr. Mario Ruvalcaba',
    metaDescription:
      '24-hour emergency surgical care in Merida. Appendicitis, gallbladder, complicated hernias, and more. Dr. Mario Ruvalcaba, board-certified general surgeon.',
    heroHeadline: 'Emergency Surgery 24/7 in Merida',
    heroSubheadline:
      'Emergency surgical care available 24 hours a day, 7 days a week. Rapid response and proven experience when you need it most.',
    description:
      'Emergency surgical care available 24 hours a day. Dr. Ruvalcaba handles emergencies such as acute appendicitis, cholecystitis, complicated hernias, bowel obstruction, and other abdominal emergencies with speed and expertise.',
    longDescription:
      'Abdominal surgical emergencies require immediate attention from an experienced surgeon to prevent serious complications. Dr. Mario Ruvalcaba offers 24/7 availability to handle surgical emergencies in Merida, Yucatan. Among the emergencies he most frequently treats are: acute appendicitis, acute cholecystitis (gallbladder inflammation), incarcerated or strangulated inguinal or ventral hernias, bowel obstruction, perforated ulcers, and intra-abdominal abscesses.\n\nEvery minute counts in a surgical emergency. Dr. Ruvalcaba prioritizes rapid and accurate diagnosis, using the imaging and laboratory resources available at the hospitals where he operates to make timely surgical decisions. Whenever patient conditions allow, the laparoscopic (minimally invasive) approach is preferred even in emergency settings, resulting in less postoperative pain, lower infection risk, and faster recovery. The combination of experience, immediate availability, and refined surgical technique ensures the best possible care at the most critical moment.',
    benefits: [
      {
        title: '24/7 availability',
        description:
          'Emergency surgical care available at any hour of the day or night, 365 days a year. Rapid response time for evaluation and surgical decision-making.',
        icon: '🕐',
      },
      {
        title: 'Rapid and accurate diagnosis',
        description:
          'Expert clinical evaluation complemented by laboratory and imaging studies for an accurate diagnosis and timely surgical decision-making.',
        icon: '⚡',
      },
      {
        title: 'Minimally invasive in emergencies',
        description:
          'Whenever possible, laparoscopic technique is used even in emergency surgeries, reducing surgical trauma and accelerating patient recovery.',
        icon: '🔬',
      },
      {
        title: 'Proven experience',
        description:
          'Board-certified general surgeon with extensive experience managing complex abdominal surgical emergencies.',
        icon: '🛡️',
      },
    ],
    candidates: [
      'Patients with severe acute abdominal pain requiring urgent surgical evaluation.',
      'Individuals diagnosed with or suspected of having acute appendicitis requiring emergency appendectomy.',
      'Patients with acute cholecystitis (gallbladder inflammation) unresponsive to medical treatment and requiring surgery.',
      'Individuals with incarcerated or strangulated inguinal or ventral hernias representing a surgical emergency.',
      'Patients with bowel obstruction, perforated ulcers, or other abdominal emergencies requiring immediate surgical intervention.',
    ],
    recovery: [
      {
        period: 'Hospitalization',
        description:
          'Depending on the complexity of the emergency, hospital stay ranges from 1 to 5 days. Close monitoring of vital signs, pain control, and postoperative progress surveillance. Early ambulation is encouraged.',
      },
      {
        period: 'First week at home',
        description:
          'Relative rest with short walks. Progressive diet depending on the type of surgery performed. Pain managed with oral medications. Surgical wound care and awareness of warning signs.',
      },
      {
        period: '2-4 weeks',
        description:
          'Gradual return to daily activities depending on progress. Office follow-up for wound check and recovery assessment. Avoid intense physical exertion.',
      },
      {
        period: '1-3 months',
        description:
          'Complete recovery in most cases. Return to normal physical activity. Final follow-up to ensure complete resolution of the condition that prompted the emergency.',
      },
    ],
    costRange: '',
    duration: '30 min - 3 hours',
    hospitalStay: '1 - 5 nights',
    icon: '🚑',
    faq: [
      {
        question: 'How do I contact Dr. Ruvalcaba in an emergency?',
        answer:
          'In a surgical emergency, you can reach out directly via the WhatsApp number or office phone, available 24 hours a day. You may also go directly to the emergency department of the hospitals where Dr. Ruvalcaba has surgical privileges in Merida. It is recommended to call first to coordinate care and reduce wait times.',
      },
      {
        question: 'What signs indicate I need emergency surgery?',
        answer:
          'Warning signs that require urgent surgical evaluation include: severe and progressive abdominal pain, especially if accompanied by fever, persistent vomiting, abdominal distension, absence of bowel movements or gas, or if the abdomen feels rigid to the touch. Redness, intense pain, or sudden growth of a known hernia are also warning signs. If you experience any of these symptoms, seek emergency medical care immediately.',
      },
      {
        question: 'Can laparoscopic surgery be performed in emergencies?',
        answer:
          'Yes, in most abdominal emergencies, laparoscopic technique can be and is preferred whenever patient conditions allow. Emergency appendectomy and cholecystectomy are routinely performed laparoscopically. Even in cases of complicated hernias and some bowel obstructions, the laparoscopic approach is feasible. Advantages include better visualization of the abdominal cavity, less pain, lower wound infection risk, and faster recovery.',
      },
      {
        question: 'Which hospitals does Dr. Ruvalcaba attend for emergencies?',
        answer:
          'Dr. Mario Ruvalcaba has surgical privileges at top-tier hospitals in Merida, Yucatan, equipped with 24-hour operating rooms, laparoscopic equipment, intensive care units, and comprehensive diagnostic support services. During the initial consultation or at the time of the emergency, care is coordinated at the most convenient hospital based on the patient\'s location and availability.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 7. Bariatric and Metabolic Surgery (Hub)
  // ---------------------------------------------------------------------------
  {
    slug: 'cirugia-bariatrica-metabolica',
    title: 'Bariatric and Metabolic Surgery',
    shortTitle: 'Bariatric Surgery',
    metaTitle: 'Bariatric and Metabolic Surgery in Merida | Dr. Mario Ruvalcaba',
    metaDescription: 'Bariatric and metabolic procedures in Merida with Dr. Mario Ruvalcaba: gastric sleeve, bypass, SADI-S and more. Certified bariatric surgeon. Schedule your consultation today.',
    heroHeadline: 'Bariatric and Metabolic Surgery in Merida',
    heroSubheadline: 'Specialized surgical treatment of obesity and metabolic diseases. State-of-the-art laparoscopic techniques with comprehensive multidisciplinary support.',
    description: 'Bariatric and metabolic surgery encompasses a set of surgical procedures that modify the digestive tract to achieve sustained weight loss and improve or resolve obesity-associated diseases such as type 2 diabetes, hypertension, and metabolic syndrome.',
    longDescription: 'Bariatric and metabolic surgery in Merida is the most effective and lasting intervention for the treatment of severe obesity and its complications. Unlike diets and medications, bariatric procedures produce permanent anatomical and hormonal changes that modify appetite regulation, satiety, and glucose metabolism. According to the WHO, over 650 million adults worldwide live with obesity; in Mexico, adult prevalence exceeds 36%. Long-term studies report excess weight loss of more than 60% maintained at 10 years, with type 2 diabetes remission rates between 60% and 90% depending on the procedure.\n\nDr. Mario Ruvalcaba, bariatric surgery specialist in Merida, offers a complete portfolio of laparoscopic procedures: gastric sleeve, Roux-en-Y gastric bypass, intragastric balloon, intestinal transit bipartition, SADI-S, and revision and conversion surgeries. All procedures are performed using minimally invasive laparoscopic technique with internationally recognized safety protocols endorsed by the IFSO.\n\nDr. Ruvalcaba is certified by the Mexican Council of General Surgery, is an active IFSO member, and has more than 5 years of experience dedicated to bariatric and metabolic surgery in Merida, Yucatan. He operates at the most prestigious hospitals in the city, equipped with advanced laparoscopic operating rooms and intensive care units. His multidisciplinary team — nutritionist, psychologist, internist, and surgeon — ensures comprehensive evaluation and personalized long-term follow-up for each patient.\n\nThe results are transformative: 60% to 95% excess weight loss depending on the procedure, with improvement or remission of type 2 diabetes, hypertension, sleep apnea, and metabolic syndrome in the majority of patients. Laparoscopic technique enables fast postoperative recovery with return to activities in 1 to 2 weeks. If you are struggling with obesity and its complications, bariatric and metabolic surgery can change your life. Schedule your consultation today.',
    benefits: [
      {
        title: 'Sustained Weight Loss',
        description: 'Bariatric procedures achieve excess weight loss of more than 60% maintained long-term, surpassing any medical or dietary treatment.',
        icon: '📉',
      },
      {
        title: 'Remission of Metabolic Diseases',
        description: 'Type 2 diabetes remission rates between 60% and 90%, with significant improvement in hypertension, dyslipidemia, and sleep apnea.',
        icon: '🩸',
      },
      {
        title: 'Laparoscopic Techniques',
        description: 'All procedures are performed minimally invasively, with fast recovery, less postoperative pain, and virtually imperceptible scars.',
        icon: '🔬',
      },
      {
        title: 'Multidisciplinary Care',
        description: 'Complete protocol with nutritionist, psychologist, internist, and bariatric surgeon to ensure safety and the best long-term results.',
        icon: '👨‍⚕️',
      },
    ],
    candidates: [
      'Individuals with BMI ≥ 40, or BMI ≥ 35 with comorbidities such as type 2 diabetes, hypertension, sleep apnea, or joint disease.',
      'Patients who have tried conventional weight loss methods without sustained results for at least 6 months.',
      'Adults between 18 and 65 years of age willing to commit to permanent lifestyle changes and postoperative medical follow-up.',
      'Individuals with poorly controlled type 2 diabetes and BMI between 30 and 34.9 who may benefit from metabolic surgery.',
      'Patients without serious surgical contraindications and with a favorable multidisciplinary evaluation.',
    ],
    recovery: [
      {
        period: 'First week',
        description: 'Hospital stay of 1 to 3 nights depending on the procedure. Strict liquid diet. Early mobilization from the first day to prevent complications.',
      },
      {
        period: '2–4 weeks',
        description: 'Gradual transition to full liquids and protein purees. Start of vitamin supplementation. Return to sedentary activities.',
      },
      {
        period: '1–3 months',
        description: 'Progressive introduction of soft and solid foods. Start of moderate physical activity. Nutritional follow-up and adjustment of metabolic medications.',
      },
      {
        period: '6–12 months',
        description: 'Loss of 60% or more of excess weight depending on the procedure. Quarterly follow-up with lab work to monitor nutritional and metabolic levels.',
      },
    ],
    costRange: '',
    duration: 'Variable',
    hospitalStay: '1 - 3 nights',
    icon: '⚕️',
    faq: [
      {
        question: 'How do I know which bariatric procedure is best for me?',
        answer: 'Procedure selection depends on BMI, associated diseases, medical and surgical history, and each patient\'s goals. Dr. Ruvalcaba performs a complete multidisciplinary evaluation to recommend the most appropriate option. In general terms: gastric sleeve is the first choice for most patients; gastric bypass is preferred when there is severe reflux or long-standing diabetes; bipartition and SADI-S are reserved for severe obesity or when greater metabolic potency is required.',
      },
      {
        question: 'How much weight can I lose with bariatric surgery?',
        answer: 'Results vary by procedure: gastric sleeve achieves 60–70% excess weight loss; gastric bypass, 70–80%; intestinal transit bipartition and SADI-S exceed 80–95%. Nutritional follow-up and commitment to lifestyle changes are key to maintaining long-term results.',
      },
      {
        question: 'Is bariatric surgery safe?',
        answer: 'In the hands of a certified bariatric surgeon with the appropriate hospital infrastructure, laparoscopic bariatric surgery has complication rates below 3%, comparable to those of a cholecystectomy. Rigorous preoperative evaluation and the multidisciplinary protocol minimize risks and optimize procedural safety.',
      },
      {
        question: 'Do I need to take supplements for life?',
        answer: 'Yes. All bariatric procedures require lifelong vitamin supplementation, although doses and types vary by procedure. Gastric sleeve requires basic supplements (multivitamin, calcium, vitamin D, B12, and protein). Bypass and malabsorptive procedures like SADI-S require more intensive supplementation. Periodic nutritional follow-up ensures levels remain within optimal ranges.',
      },
      {
        question: 'How much does bariatric surgery cost in Merida?',
        answer: 'The cost varies depending on the specific procedure, hospital, and required preoperative studies. Dr. Ruvalcaba offers an initial evaluation to determine the most appropriate procedure and provide a personalized quote. Some medical insurance plans cover part or all of the cost when documented medical indications are present. Contact the office for detailed information on costs and financing options.',
      },
      {
        question: 'How long does bariatric surgery take?',
        answer: 'Duration varies by procedure: gastric sleeve takes 1 to 1.5 hours; gastric bypass takes 2 to 3 hours; intestinal transit bipartition and SADI-S take 2.5 to 3.5 hours. Revision and conversion surgeries may require 2 to 4 hours depending on complexity. All procedures are performed under general anesthesia in a hospital operating room.',
      },
      {
        question: 'When can I return to work after bariatric surgery?',
        answer: 'For sedentary or office work, most patients return between days 10 and 14 postoperatively. For moderate or intense physical work, it is recommended to wait 4 to 6 weeks. Dr. Ruvalcaba provides a personalized medical leave certificate based on the procedure performed and each patient\'s type of work.',
      },
    ],
    relevantSpecialty: 'Bariatric Surgery',
    bodyLocation: 'Stomach, Digestive System',
    imagePath: '/images/procedures/cirugia-bariatrica-metabolica.webp',
    preparation: 'Fasting for 8 hours prior to surgery. A complete preoperative medical evaluation is required, including blood tests, nutritional and psychological assessment, and in some cases imaging studies or endoscopy.',
  },

  // ---------------------------------------------------------------------------
  // 8. Intestinal Transit Bipartition
  // ---------------------------------------------------------------------------
  {
    slug: 'biparticion-transito-intestinal',
    title: 'Intestinal Transit Bipartition',
    shortTitle: 'Intestinal Bipartition',
    metaTitle: 'Intestinal Transit Bipartition in Merida | Dr. Mario Ruvalcaba',
    metaDescription: 'Intestinal transit bipartition in Merida with Dr. Mario Ruvalcaba. Metabolic procedure for diabetes type 2 and obesity. Remission >85%. Schedule your consultation today.',
    heroHeadline: 'Intestinal Transit Bipartition in Merida',
    heroSubheadline: 'Cutting-edge metabolic procedure that combines the restrictive benefits of the gastric sleeve with powerful intestinal hormonal modulation for the control of type 2 diabetes and obesity.',
    description: 'Intestinal transit bipartition (ITB) combines vertical sleeve gastrectomy with an ileojejenal anastomosis that creates a parallel intestinal circuit, stimulating the release of hormones like GLP-1 to improve glycemic control without generating severe malabsorption.',
    longDescription: 'Intestinal transit bipartition (ITB) is an innovative metabolic surgical procedure that combines vertical sleeve gastrectomy with a partial small bowel bypass. Unlike traditional gastric bypass, this technique does not exclude any intestinal segment; instead, it creates a parallel circuit that allows early contact of food with the distal ileum, stimulating the release of intestinal hormones such as GLP-1 and peptide YY, which significantly improve glycemic control on a sustained basis. ITB is especially indicated for patients with poorly controlled type 2 diabetes and BMI between 30 and 35 kg/m², where hormonal mechanisms outweigh the importance of pure caloric restriction. The bariatric and metabolic surgery specialist in Merida offers ITB as a cutting-edge solution for metabolic disease management in Yucatan.\n\nDr. Mario Ruvalcaba performs intestinal transit bipartition in Merida using laparoscopic minimally invasive technique with 4 to 5 working ports. The procedure combines vertical sleeve gastrectomy with construction of an ileojejenal anastomosis creating the parallel intestinal circuit. Surgery lasts 2 to 3 hours under general anesthesia, requiring 2 to 3 nights of hospital stay. The laparoscopic approach minimizes postoperative pain, wound infection risk, and accelerates recovery compared to open surgery.\n\nCertified by the Mexican Council of General Surgery and an active IFSO member with more than 5 years of experience in complex bariatric and metabolic procedures in Merida, Yucatan, Dr. Ruvalcaba provides comprehensive multidisciplinary evaluation and follow-up for every ITB patient. His team — nutritionist, psychologist, and internist — accompanies patients from preoperative assessment through long-term monitoring, which is critical for sustained success.\n\nClinical studies report type 2 diabetes remission rates exceeding 85% at one year, with 60% to 75% excess weight loss. Additionally, significant improvement in hypertension, dyslipidemia, and metabolic syndrome is observed in most patients. Most patients return to sedentary work activities between days 10 and 14, and to full physical activity within 4 to 6 weeks. If you have type 2 diabetes and obesity, ITB may offer the definitive solution that medications have not achieved. Schedule your consultation today.',
    benefits: [
      {
        title: 'Type 2 Diabetes Control',
        description: 'Remission rates exceeding 85% at one year, even in patients with BMI below 35, through powerful intestinal hormonal modulation.',
        icon: '🩸',
      },
      {
        title: 'Effective Weight Loss',
        description: 'Loss of 60% to 75% of excess weight in the first 12 to 18 months, combining gastric restriction and hormonal changes.',
        icon: '📉',
      },
      {
        title: 'No Severe Malabsorption',
        description: 'Unlike bypass, no intestinal segment is excluded, reducing the risk of serious nutritional deficiencies.',
        icon: '🧬',
      },
      {
        title: 'Minimally Invasive',
        description: 'Laparoscopic technique with faster recovery, less postoperative pain, and virtually imperceptible scars.',
        icon: '🔬',
      },
    ],
    candidates: [
      'Patients with BMI ≥ 35 with type 2 diabetes, metabolic syndrome, or obesity-associated diseases.',
      'Individuals with BMI 30–34.9 with poorly controlled type 2 diabetes despite optimal medical treatment (metabolic indication).',
      'Patients who previously underwent gastric sleeve and have weight regain or persistent diabetes who may benefit from conversion to ITB.',
      'Adults with favorable multidisciplinary evaluation (nutritional, psychological, and medical) and commitment to lifestyle changes.',
      'Patients without contraindications for general anesthesia or prior major abdominal surgery that compromises procedural viability.',
    ],
    recovery: [
      {
        period: 'First week',
        description: 'Strict clear liquid diet. Hospital stay of 2 to 3 nights. Early mobilization from the first postoperative day to prevent thromboembolic complications. Pain management with intravenous and oral analgesics.',
      },
      {
        period: '2–4 weeks',
        description: 'Transition to full liquids and then protein purees. Start of vitamin and protein supplementation. Return to sedentary daily activities around days 10 to 14. In-person or virtual nutritional follow-up.',
      },
      {
        period: '1–3 months',
        description: 'Progressive introduction of soft and solid foods. Start of moderate physical activity. Adjustment of diabetes medications, generally with supervised reduction or discontinuation of hypoglycemic agents. Expected loss of 30% to 45% of excess weight.',
      },
      {
        period: '6–12 months',
        description: 'Varied diet with emphasis on proteins and vegetables. Regular physical activity without restrictions. Loss of 60% to 75% of excess weight. Stable glycemic control. Quarterly follow-up with lab work to monitor nutritional and metabolic levels.',
      },
    ],
    costRange: '',
    duration: '2 - 3 hours',
    hospitalStay: '2 - 3 nights',
    icon: '🔀',
    faq: [
      {
        question: 'How does intestinal transit bipartition differ from gastric bypass?',
        answer: 'The main difference is that in intestinal transit bipartition, no segment of the small bowel is excluded: food can pass through both the normal circuit and the new ileojejenal circuit. This leverages the potent hormonal effects of the distal ileum without generating the malabsorption that can occur with gastric bypass. In addition, bipartition preserves the pylorus, which reduces dumping syndrome.',
      },
      {
        question: 'Can I stop taking diabetes medications after surgery?',
        answer: 'In most cases, yes. Type 2 diabetes remission rates with intestinal transit bipartition exceed 85% at one year. However, reduction or discontinuation of medications must always be done gradually and under strict medical supervision, with regular blood glucose monitoring.',
      },
      {
        question: 'How long does full recovery take?',
        answer: 'Most patients return to sedentary work activities between days 10 and 14. Full functional recovery, including unrestricted physical activity, is generally achieved between 4 and 6 weeks. Intestinal adaptation to the new transit may take 2 to 3 months, during which the diet is gradually adjusted according to each patient\'s tolerance.',
      },
      {
        question: 'What supplements do I need to take for life?',
        answer: 'Since intestinal transit bipartition partially modifies nutrient absorption, lifelong supplementation is recommended with a multivitamin with iron, calcium with vitamin D, vitamin B12, and protein. Specific doses are determined based on lab results at each follow-up visit. Periodic nutritional monitoring ensures levels remain within optimal ranges.',
      },
      {
        question: 'How much does intestinal transit bipartition cost in Merida?',
        answer: 'The cost varies based on the hospital and individual preoperative requirements. Dr. Ruvalcaba offers an initial evaluation to confirm the indication and provide a detailed quote. Some medical insurance plans cover metabolic procedures when there is documented medical indication such as refractory type 2 diabetes. Contact the office for information on costs and insurance coverage.',
      },
      {
        question: 'How long does intestinal transit bipartition surgery take?',
        answer: 'Intestinal transit bipartition takes 2 to 3 hours under general anesthesia in a hospital operating room. The laparoscopic procedure combines sleeve gastrectomy with construction of the ileojejenal anastomosis. Hospital stay is 2 to 3 nights for postoperative monitoring.',
      },
      {
        question: 'When can I return to work after intestinal transit bipartition?',
        answer: 'Patients with sedentary or office work typically return between days 10 and 14 postoperatively. For moderately physical activities, waiting 4 to 6 weeks is recommended. Dr. Ruvalcaba provides a personalized medical leave certificate based on the type of work and each patient\'s recovery progress.',
      },
    ],
    relevantSpecialty: 'Bariatric Surgery',
    bodyLocation: 'Small Intestine, Stomach',
    imagePath: '/images/procedures/biparticion-transito-intestinal.webp',
    preparation: 'Fasting for 8 hours prior to surgery. A complete preoperative evaluation is required, including blood work, nutritional, psychological, and medical assessment. In diabetic patients, hypoglycemic medications are adjusted prior to the procedure.',
  },

  // ---------------------------------------------------------------------------
  // 9. SADI-S
  // ---------------------------------------------------------------------------
  {
    slug: 'sadi-s',
    title: 'SADI-S',
    shortTitle: 'SADI-S',
    metaTitle: 'SADI-S in Merida | Dr. Mario Ruvalcaba - Bariatric Surgeon',
    metaDescription: 'SADI-S in Merida with Dr. Mario Ruvalcaba. The bariatric procedure with the greatest weight loss potency for patients with severe obesity. Schedule your evaluation.',
    heroHeadline: 'SADI-S in Merida',
    heroSubheadline: 'The bariatric procedure with the greatest weight loss potency, indicated for patients with severe obesity who require maximum results with a single intestinal anastomosis.',
    description: 'SADI-S (Single Anastomosis Duodeno-Ileal with Sleeve) combines vertical sleeve gastrectomy with a single duodeno-ileal anastomosis, generating controlled malabsorption of fats and carbohydrates with excess weight loss rates exceeding 95% at two years.',
    longDescription: 'SADI-S (Single Anastomosis Duodeno-Ileal with Sleeve) is the most powerful bariatric procedure available, indicated for patients with severe obesity (BMI ≥ 50) or when maximum metabolic impact is required. It combines vertical sleeve gastrectomy with a single duodeno-ileal anastomosis, generating controlled malabsorption of fats and carbohydrates and intensely stimulating intestinal hormone production that regulates appetite and metabolism. The IFSO has recognized SADI-S as a standard bariatric procedure since 2018. Unlike the classic duodenal switch that requires two anastomoses, SADI-S simplifies the technique with a single intestinal connection, reducing operative time and associated risks. The bariatric surgery specialist in Merida offers SADI-S with the experience and technology this complex procedure demands.\n\nDr. Mario Ruvalcaba performs SADI-S in Merida using laparoscopic minimally invasive technique. The procedure involves dividing the duodenum just past the pylorus and connecting it directly to the distal ileum, approximately 250 to 300 cm from the ileocecal valve, creating a short alimentary channel that limits calorie and fat absorption. Surgery lasts 2.5 to 3.5 hours under general anesthesia with 2 to 3 nights of hospital stay for close monitoring. The laparoscopic approach significantly reduces postoperative pain and enables faster functional recovery compared to open surgery.\n\nBoard-certified bariatric surgeon in Merida, Yucatan, Dr. Ruvalcaba holds certification from the Mexican Council of General Surgery, is an active IFSO member, and has more than 5 years of experience in complex bariatric procedures. He operates exclusively at top-tier hospitals in Merida with advanced laparoscopic infrastructure. Every patient receives multidisciplinary evaluation and follow-up — nutritionist, psychologist, internist — throughout the entire process, which is a determining factor for long-term success.\n\nReported excess weight loss rates with SADI-S exceed 80% at 2 years, with type 2 diabetes remission in more than 90% of cases. Most patients return to sedentary work activities between days 10 and 14, and to full physical activity within 4 to 6 weeks. Lifelong vitamin supplementation is mandatory and essential to maintain optimal nutritional levels. If you have severe obesity and seek the most powerful bariatric result available, SADI-S is your option. Schedule your consultation today.',
    benefits: [
      {
        title: 'Maximum Weight Loss',
        description: 'Loss of more than 80% of excess weight, being the most potent option for patients with severe obesity (BMI > 50).',
        icon: '🏆',
      },
      {
        title: 'Diabetes Remission',
        description: 'Type 2 diabetes remission rates exceeding 90%, making it the procedure with the greatest metabolic impact currently available.',
        icon: '💉',
      },
      {
        title: 'Single Anastomosis',
        description: 'Simplified technique compared to the classic duodenal switch: a single intestinal connection reduces surgical complexity and operative time.',
        icon: '🔗',
      },
      {
        title: 'Sustained Results',
        description: 'Long-term results of SADI-S are superior to those of gastric sleeve or bypass, with lower rates of weight regain.',
        icon: '⚡',
      },
    ],
    candidates: [
      'Patients with BMI equal to or greater than 50 kg/m² (severe obesity) who require the greatest available weight loss potency.',
      'Individuals with BMI ≥ 40 with multiple severe metabolic comorbidities such as uncontrolled type 2 diabetes, refractory hypertension, or severe sleep apnea.',
      'Patients who experienced weight loss failure or significant regain after a prior gastric sleeve and are candidates for revision surgery.',
      'Adults with complete multidisciplinary evaluation and absolute commitment to lifelong nutritional supplementation and medical follow-up.',
      'Patients without history of inflammatory bowel disease, short bowel syndrome, or prior surgeries that compromise the viability of the ileal segment.',
    ],
    recovery: [
      {
        period: 'First week',
        description: 'Hospital stay of 2 to 3 nights. Strict liquid diet. Mandatory early mobilization. Close monitoring of wounds, oral tolerance, and vital signs.',
      },
      {
        period: '2–4 weeks',
        description: 'Progression to full liquids and protein purees. Start of intensive vitamin supplementation (multivitamin, calcium, vitamin D, fat-soluble vitamins A, E and K, vitamin B12). The nutritional team establishes the personalized dietary transition plan.',
      },
      {
        period: '1–3 months',
        description: 'Intestinal adaptation to the new transit. Possible changes in bowel habits that are regulated with diet. Gradual start of physical activity. Physicians adjust metabolic medications based on clinical and laboratory response.',
      },
      {
        period: '6–12 months',
        description: 'Loss of more than 60% of excess weight. Resolution of metabolic comorbidities in most patients. Follow-up every 3 months with complete lab panel including fat-soluble vitamins, minerals, and proteins to adjust lifelong supplementation.',
      },
    ],
    costRange: '',
    duration: '2.5 - 3.5 hours',
    hospitalStay: '2 - 3 nights',
    icon: '⚙️',
    faq: [
      {
        question: 'Is SADI-S the same as duodenal switch?',
        answer: 'They are similar procedures but with important differences. The classic duodenal switch requires two intestinal anastomoses, while SADI-S uses a single duodeno-ileal anastomosis. This technically simplifies the procedure, reduces operative time and potential complications, while maintaining similar or superior metabolic results. The IFSO has recognized SADI-S as a validated standard procedure since 2018.',
      },
      {
        question: 'What changes in bowel habits should I expect?',
        answer: 'It is common to have more frequent bowel movements (2 to 4 times per day) and softer consistency, especially during the first months. Excessive fat intake may cause malodorous stools or fecal urgency. Over time and with proper dietary adaptation, these symptoms moderate significantly.',
      },
      {
        question: 'Can I have SADI-S if I already have a gastric sleeve?',
        answer: 'Yes, this is one of the most frequent indications for SADI-S as revision surgery. When a gastric sleeve patient does not achieve expected weight loss or has significant regain, SADI-S allows adding the malabsorptive component without modifying the already-operated stomach, adding the duodeno-ileal anastomosis onto the existing sleeve.',
      },
      {
        question: 'Is lifelong supplementation truly mandatory?',
        answer: 'Yes, it is a non-negotiable requirement. SADI-S generates fat malabsorption, and with it, malabsorption of fat-soluble vitamins A, D, E, and K, as well as calcium, iron, and vitamin B12. Without adequate supplementation and regular monitoring, severe deficiencies can develop. Patients who follow the supplementation protocol maintain excellent nutritional levels long-term.',
      },
      {
        question: 'How much does SADI-S cost in Merida?',
        answer: 'The cost varies based on the hospital and required preoperative studies. As a more technically complex bariatric procedure, Dr. Ruvalcaba offers an individualized evaluation to determine the indication and provide a detailed quote. Some major medical insurance plans cover the procedure when there is documented indication of severe obesity or refractory type 2 diabetes.',
      },
      {
        question: 'How long does SADI-S surgery take?',
        answer: 'SADI-S takes between 2.5 and 3.5 hours under general anesthesia in a hospital operating room. As a complex bariatric procedure combining sleeve gastrectomy with a duodeno-ileal anastomosis, it requires more operative time than gastric sleeve or bypass. Postoperative hospital stay is 2 to 3 nights.',
      },
      {
        question: 'When can I return to work after SADI-S?',
        answer: 'Patients with sedentary work typically return between days 10 and 14 postoperatively. For moderate or intense physical activities, waiting 4 to 6 weeks is recommended. Intestinal adaptation to the new transit may take 2 to 3 months, during which the dietary plan is gradually adjusted.',
      },
    ],
    relevantSpecialty: 'Bariatric Surgery',
    bodyLocation: 'Small Intestine, Duodenum',
    imagePath: '/images/procedures/sadi-s.webp',
    preparation: 'Fasting for 8 hours prior to surgery. A complete preoperative evaluation is required, including blood work with fat-soluble vitamins, nutritional, psychological, and medical assessment. In diabetic patients, hypoglycemic medications are adjusted under medical supervision prior to the procedure.',
  },

  // ---------------------------------------------------------------------------
  // 10. Bariatric Revision Surgery
  // ---------------------------------------------------------------------------
  {
    slug: 'cirugia-revision-bariatrica',
    title: 'Bariatric Revision Surgery',
    shortTitle: 'Bariatric Revision',
    metaTitle: 'Bariatric Revision Surgery in Merida | Dr. Mario Ruvalcaba',
    metaDescription: 'Bariatric revision surgery in Merida with Dr. Mario Ruvalcaba. Solutions for weight regain or complications after prior bariatric surgery. Schedule your consultation today.',
    heroHeadline: 'Bariatric Revision Surgery in Merida',
    heroSubheadline: 'Specialized surgical solutions for patients who did not obtain expected results or experienced complications following prior bariatric surgery.',
    description: 'Bariatric revision surgery encompasses procedures aimed at patients with weight regain, insufficient weight loss, or anatomical or metabolic complications related to their original bariatric surgery.',
    longDescription: 'Bariatric revision surgery in Merida is indicated for patients who, following prior weight loss surgery, present with significant weight regain, insufficient weight loss, anatomical complications such as stenosis, fistulas, or pouch dilation, or unresolved metabolic complications. It is estimated that 20% to 30% of bariatric patients experience some degree of weight regain within 5 years, making revision surgery a growing necessity. Dr. Ruvalcaba attends cases from across southeastern Mexico requiring complex and specialized bariatric solutions, positioning Merida as the regional reference center for bariatric revision surgery in Yucatan.\n\nDr. Mario Ruvalcaba performs bariatric revision surgery in Merida laparoscopically in the majority of cases, leveraging his experience in complex bariatric surgery to navigate previously modified anatomy. The most frequent revisions include: conversion of gastric sleeve to Roux-en-Y gastric bypass or SADI-S for weight regain or severe gastroesophageal reflux, revision of gastric bypass for pouch or anastomosis dilation, correction of stenoses or residual fistulas, and conversion of adjustable gastric band to a definitive procedure. Each case requires individualized planning with endoscopy, upper GI series, and complete metabolic studies. Surgery duration varies between 2 and 4 hours under general anesthesia.\n\nCertified bariatric surgeon in Merida, Yucatan, Dr. Ruvalcaba holds certification from the Mexican Council of General Surgery, IFSO membership, and more than 5 years of experience in revision bariatric procedures. He operates at first-level hospitals in Merida with infrastructure appropriate for high-complexity surgery. His multidisciplinary team performs comprehensive preoperative evaluation and close postoperative follow-up that these interventions require.\n\nRevision surgery results are generally very satisfying when the indication is correct and planning is adequate: resumption of weight loss, reflux resolution, and improvement in metabolic control. Recovery is similar to primary bariatric surgery, with return to work for sedentary activities in 10 to 14 days. If your prior bariatric surgery did not achieve the expected results, a solution exists. Schedule your consultation today.',
    benefits: [
      {
        title: 'Personalized Solution',
        description: 'Each revision is designed according to prior surgical anatomy and the patient\'s specific needs — there is no single approach.',
        icon: '🎯',
      },
      {
        title: 'Recovery of Results',
        description: 'Allows resuming weight loss in patients with regain or insufficient loss, adapting the procedure to the individual clinical history.',
        icon: '📉',
      },
      {
        title: 'Complication Correction',
        description: 'Resolves late complications of prior surgeries such as severe reflux, stenosis, chronic fistulas, or gastric pouch dilation.',
        icon: '🩺',
      },
      {
        title: 'Minimally Invasive Approach',
        description: 'Most revisions can be performed laparoscopically, even in patients with prior surgeries, thanks to experience in revision surgery.',
        icon: '🔬',
      },
    ],
    candidates: [
      'Patients with significant weight regain (more than 50% of weight lost) after gastric sleeve, gastric bypass, or other prior bariatric procedure.',
      'Individuals with insufficient weight loss (less than 50% of excess weight at 18 months) despite following dietary and physical activity recommendations.',
      'Patients with severe gastroesophageal reflux or esophagitis after gastric sleeve who do not respond to medical treatment and require conversion to gastric bypass.',
      'Individuals with anatomical complications such as sleeve or anastomosis stenosis, chronic fistulas, gastric pouch dilation, or adjustable band migration.',
      'Patients with complete preoperative evaluation (endoscopy, transit study, lab work) confirming the indication and viability of surgical revision.',
    ],
    recovery: [
      {
        period: 'First week',
        description: 'Similar to primary bariatric surgery, although it may require greater surveillance depending on the complexity of the revision performed. Strict liquid diet. Hospital stay of 2 to 3 nights.',
      },
      {
        period: '2–4 weeks',
        description: 'Dietary progression according to the new procedure performed. Mandatory nutritional evaluation to adjust supplementation according to the new anatomy.',
      },
      {
        period: '1–3 months',
        description: 'Adaptation to the new procedure. Revised patients typically notice improvement in prior symptoms within the first weeks. Dietary tolerance and metabolic parameters are monitored.',
      },
      {
        period: '6–12 months',
        description: 'Evaluation of results through lab work and, when indicated, control endoscopy. Weight loss resumes or the original complication is corrected. Long-term follow-up is essential to consolidate results.',
      },
    ],
    costRange: '',
    duration: '2 - 4 hours',
    hospitalStay: '2 - 3 nights',
    icon: '🔃',
    faq: [
      {
        question: 'Why does bariatric surgery fail?',
        answer: 'The most frequent causes of bariatric failure are: progressive dilation of the gastric sleeve or bypass pouch, changes in eating habits with return to high-calorie patterns, unresolved underlying hormonal or metabolic alterations, and in some cases, technical factors from the original surgery.',
      },
      {
        question: 'Is revision surgery riskier than primary surgery?',
        answer: 'Generally yes, although the risk depends on the type of revision and the surgeon\'s experience. Previously operated tissues have greater fibrosis and adhesions, which increases technical difficulty. However, in the hands of an experienced bariatric surgeon with adequate preoperative planning, complication rates are acceptable.',
      },
      {
        question: 'How long should I wait between my original surgery and a revision?',
        answer: 'In general, it is recommended to wait at least 12 to 18 months from the primary surgery to allow weight stabilization and complete tissue healing, except in cases of complications requiring urgent intervention.',
      },
      {
        question: 'What studies do I need to be evaluated for revision surgery?',
        answer: 'The evaluation includes upper digestive endoscopy, imaging studies (upper GI series with contrast), complete lab panel with vitamins and nutrients, nutritional and psychological assessment, and in some cases pH-metry or esophageal manometry.',
      },
      {
        question: 'How much does bariatric revision surgery cost in Merida?',
        answer: 'The cost varies based on the type of revision, hospital, and complexity of each case. As a specialized procedure, Dr. Ruvalcaba conducts an initial evaluation to determine the surgical indication and provide a personalized quote. Some medical insurance plans cover revisions with documented medical indication. Contact the office for information on costs and insurance verification.',
      },
      {
        question: 'How long does bariatric revision surgery take?',
        answer: 'Duration varies from 2 to 4 hours depending on the type of revision and the complexity of prior anatomy. Simple conversions such as sleeve to bypass typically take 2 to 3 hours. Revisions for complex fistulas or stenoses may require more time. All procedures are performed under general anesthesia with 2 to 3 nights of hospital stay.',
      },
      {
        question: 'When can I return to work after bariatric revision surgery?',
        answer: 'Similar to primary bariatric surgery, patients with sedentary activities typically return between days 10 and 14 postoperatively. For physical work, waiting 4 to 6 weeks is recommended. Dr. Ruvalcaba provides the necessary medical leave certificate based on each case\'s recovery progress.',
      },
    ],
    relevantSpecialty: 'Bariatric Surgery',
    bodyLocation: 'Stomach, Digestive System',
    imagePath: '/images/procedures/cirugia-revision-bariatrica.webp',
    preparation: 'Fasting for 8 hours prior to surgery. A preoperative evaluation is required including upper digestive endoscopy, upper GI series, complete blood work with vitamins, and nutritional and psychological assessment.',
  },

  // ---------------------------------------------------------------------------
  // 11. Bariatric Conversion Surgery
  // ---------------------------------------------------------------------------
  {
    slug: 'cirugia-conversion-bariatrica',
    title: 'Bariatric Conversion Surgery',
    shortTitle: 'Bariatric Conversion',
    metaTitle: 'Bariatric Conversion Surgery in Merida | Dr. Mario Ruvalcaba',
    metaDescription: 'Bariatric conversion surgery in Merida with Dr. Mario Ruvalcaba. Transform your prior procedure for better results or complication relief. Schedule your consultation today.',
    heroHeadline: 'Bariatric Conversion Surgery in Merida',
    heroSubheadline: 'Transformation of a prior bariatric procedure to a more effective or more appropriate one for the patient\'s current needs, backed by a team specialized in complex bariatric surgery.',
    description: 'Bariatric conversion surgery transforms an existing bariatric procedure into a different one to improve weight loss results, treat complications, or adapt the surgery to the patient\'s current metabolic needs.',
    longDescription: 'Bariatric conversion surgery in Merida consists of transforming an existing bariatric procedure into a different one, to improve weight loss results, treat complications from the original surgery, or adapt the procedure to the patient\'s current metabolic needs. It is one of the most demanding fields of bariatric surgery, as it requires working on previously modified anatomy with adhesions and scar tissue that increase technical complexity. The most frequent conversions include: gastric sleeve to Roux-en-Y gastric bypass (especially for severe gastroesophageal reflux), gastric sleeve to SADI-S or intestinal transit bipartition (for weight regain), intragastric balloon to gastric sleeve, and adjustable gastric band to a definitive procedure. The bariatric conversion specialist in Yucatan operates in Merida with internationally recognized safety protocols.\n\nDr. Mario Ruvalcaba performs bariatric conversions in Merida laparoscopically in the vast majority of cases. Each conversion requires individualized surgical planning based on the anatomy created by the prior procedure, the patient\'s clinical history, and specific therapeutic objectives. Planning includes upper digestive endoscopy, upper GI series, and complete metabolic studies. Surgery duration varies from 2 to 4 hours under general anesthesia, with 2 to 3 nights of hospital stay. Sleeve-to-bypass conversion is the most frequent and resolves severe gastroesophageal reflux in more than 90% of cases.\n\nCertified by the Mexican Council of General Surgery, active IFSO member, and with more than 5 years of experience in complex bariatric surgery in Merida, Dr. Ruvalcaba is the bariatric conversion specialist in Yucatan serving the entire southeastern Mexico region. His multidisciplinary team ensures comprehensive evaluation and the necessary support before and after the procedure.\n\nPost-conversion results are generally excellent: reflux resolution, resumption of weight loss, and improvement in metabolic control. Recovery is similar to primary bariatric surgery, with return to sedentary work in 10 to 14 days. If your prior bariatric procedure did not meet your expectations or caused complications, a solution exists. Schedule your consultation today.',
    benefits: [
      {
        title: 'Greater Effectiveness',
        description: 'Allows achieving metabolic and weight loss results that the original procedure could not achieve, adapting the surgery to current needs.',
        icon: '⬆️',
      },
      {
        title: 'Resolution of Complications',
        description: 'Conversion to bypass definitively resolves severe gastroesophageal reflux disease secondary to gastric sleeve, one of the most frequent indications.',
        icon: '🩺',
      },
      {
        title: 'Laparoscopic Approach',
        description: 'Most conversions are performed minimally invasively, leveraging prior anatomy to optimize procedural safety.',
        icon: '🔬',
      },
      {
        title: 'Tailored Plan',
        description: 'The conversion procedure is selected based on the surgical history, comorbidities, and specific objectives of each patient.',
        icon: '🎯',
      },
    ],
    candidates: [
      'Patients with gastric sleeve who developed severe gastroesophageal reflux disease (GERD) that does not respond to treatment with proton pump inhibitors.',
      'Individuals with gastric sleeve and significant weight regain who wish to increase the metabolic component through conversion to gastric bypass or SADI-S.',
      'Patients with adjustable gastric band with complications (slippage, erosion, intolerance) requiring removal and conversion to a definitive procedure.',
      'Patients with insufficient weight loss after any bariatric procedure who, after multidisciplinary evaluation, are candidates for a more potent procedure.',
      'Adults with favorable anatomy documented by endoscopic and radiological studies, without contraindications for a more complex major abdominal surgery.',
    ],
    recovery: [
      {
        period: 'First week',
        description: 'Hospital stay of 2 to 3 nights depending on the type of conversion performed. Strict liquid diet. The team closely monitors the new anastomosis and oral tolerance. Early mobilization from the first postoperative hours.',
      },
      {
        period: '2–4 weeks',
        description: 'Dietary progression according to the new procedure: if converted to bypass, follow the bypass protocol; if to SADI-S, follow that protocol. Vitamin supplementation adjusted according to the new anatomy.',
      },
      {
        period: '1–3 months',
        description: 'Adaptation to the new anatomy. Patients converted to bypass for GERD typically notice resolution or significant improvement of reflux within the first weeks. Close nutritional and medical follow-up.',
      },
      {
        period: '6–12 months',
        description: 'Comprehensive evaluation of results: weight loss, comorbidity resolution, dietary tolerance, and nutritional levels. Control endoscopy when indicated. Regular follow-up to consolidate long-term results.',
      },
    ],
    costRange: '',
    duration: '2 - 4 hours',
    hospitalStay: '2 - 3 nights',
    icon: '🔄',
    faq: [
      {
        question: 'Does sleeve-to-bypass conversion always resolve reflux?',
        answer: 'In the vast majority of cases, yes. Roux-en-Y gastric bypass creates a small gastric pouch virtually free of acid production and diverts intestinal content away from the esophagus, eliminating the substrate for pathological reflux. Studies report reflux resolution in more than 90% of patients converted for this indication.',
      },
      {
        question: 'Is laparoscopic conversion possible if I already had prior surgery?',
        answer: 'In most cases yes, although it depends on the adhesions formed and the patient\'s specific anatomy. Dr. Ruvalcaba evaluates the viability of the laparoscopic approach in each case. In selected cases with extensive adhesions, conversion to open surgery may be required to ensure safety.',
      },
      {
        question: 'How long after my sleeve can I convert to bypass?',
        answer: 'It is generally recommended to wait at least 12 to 18 months from gastric sleeve surgery so that tissues are completely healed. However, in cases of severe reflux with grade C or D esophagitis, Barrett\'s esophagus, or symptoms that significantly compromise quality of life, conversion may be indicated sooner.',
      },
      {
        question: 'Will I need different supplements after conversion?',
        answer: 'Yes, supplementation requirements change depending on the new procedure. If converted to gastric bypass, lifelong supplementation will be required with a multivitamin with iron, calcium with vitamin D, vitamin B12, and protein. If the conversion is to SADI-S, fat-soluble vitamins are added. The nutritional team will adjust the supplementation protocol to the new procedure.',
      },
      {
        question: 'How much does bariatric conversion surgery cost in Merida?',
        answer: 'The cost depends on the type of conversion, hospital, and complexity of prior anatomy. Dr. Ruvalcaba conducts an initial evaluation to determine the optimal surgical strategy and provide a detailed quote. Some medical insurance plans cover conversions with documented medical indication. Contact the office for information on costs and financing options.',
      },
      {
        question: 'How long does bariatric conversion surgery take?',
        answer: 'Bariatric conversions require 2 to 4 hours depending on the conversion type and the complexity of prior anatomy. Sleeve-to-bypass conversion typically takes 2 to 3 hours. Conversions to SADI-S or bipartition may require up to 3.5 hours. All procedures are performed under general anesthesia with 2 to 3 nights of hospital stay.',
      },
      {
        question: 'When can I return to work after bariatric conversion surgery?',
        answer: 'For sedentary activities, most patients return between days 10 and 14 postoperatively. For moderate physical work, waiting 4 to 6 weeks is recommended. Adaptation to the new anatomy and dietary changes may require several months of nutritional follow-up before feeling fully recovered.',
      },
    ],
    relevantSpecialty: 'Bariatric Surgery',
    bodyLocation: 'Stomach, Digestive System',
    imagePath: '/images/procedures/cirugia-conversion-bariatrica.webp',
    preparation: 'Fasting for 8 hours prior to surgery. A preoperative evaluation is required including upper digestive endoscopy, upper GI series, complete blood work with vitamins and minerals, and nutritional and psychological assessment.',
  },

  // ---------------------------------------------------------------------------
  // 12. Laparoscopic Cholecystectomy
  // ---------------------------------------------------------------------------
  {
    slug: 'colecistectomia-laparoscopica',
    title: 'Laparoscopic Cholecystectomy',
    shortTitle: 'Laparoscopic Cholecystectomy',
    metaTitle: 'Laparoscopic Cholecystectomy in Merida | Dr. Mario Ruvalcaba',
    metaDescription: 'Laparoscopic cholecystectomy in Merida with Dr. Mario Ruvalcaba. Gallbladder removal for gallstones or cholecystitis. Same-day discharge. Schedule your consultation today.',
    heroHeadline: 'Laparoscopic Cholecystectomy in Merida',
    heroSubheadline: 'Laparoscopic removal of the gallbladder for the definitive treatment of gallstones, cholecystitis, and gallbladder polyps. Outpatient procedure with recovery in 5 to 7 days.',
    description: 'Laparoscopic cholecystectomy is the surgical removal of the gallbladder using minimally invasive technique. It is the most performed laparoscopic procedure in the world and the treatment of choice for symptomatic cholelithiasis, acute and chronic cholecystitis, and gallbladder polyps larger than 10 mm.',
    longDescription: 'Laparoscopic cholecystectomy in Merida is the most frequently performed procedure in general surgery. Cholelithiasis — gallstones — affects 14% of the adult population in Mexico and is more prevalent in women aged 30 to 60. The treatment of choice is surgical removal of the gallbladder, as gallstones do not respond to medications and tend to generate progressive complications such as acute cholecystitis, biliary pancreatitis, and obstructive jaundice if left untreated. Laparoscopic technique has almost entirely replaced open surgery due to its proven advantages in pain reduction, wound infection rate, and recovery time.\n\nDr. Mario Ruvalcaba performs laparoscopic cholecystectomy in Merida through 3 to 4 small incisions of 5 to 12 mm under general anesthesia. Surgery lasts 45 minutes to 1.5 hours: a high-definition camera and surgical instruments are introduced to identify, clip, and remove the gallbladder with precision, extracting it inside an endoscopic bag. In the vast majority of cases the patient goes home the same day or the following morning, with minimal pain manageable with oral analgesics.\n\nBoard-certified general surgeon in Merida, Yucatan, Dr. Ruvalcaba is a member of the Mexican Council of General Surgery and has more than 5 years of experience in laparoscopic cholecystectomy and biliary tract surgery. He operates at top-level hospitals in Merida with state-of-the-art laparoscopic equipment and 24-hour availability for emergency procedures. The laparoscopic cholecystectomy specialist in Yucatan ensures safety, precision, and personalized care in every case.\n\nThe results are excellent: complete and permanent resolution of biliary colic, inflammation, and the risk of complications. Patients return to sedentary activities in 5 to 7 days and to full physical activity in 2 to 3 weeks. The absence of the gallbladder does not cause permanent dietary limitations in the vast majority of patients. Do not delay treatment: symptomatic gallstones should be operated on electively before a complication occurs. Schedule your consultation today.',
    benefits: [
      {
        title: 'Outpatient Procedure',
        description: 'Most patients go home the same day or within 24 hours, with no need for prolonged hospitalization.',
        icon: '🏠',
      },
      {
        title: 'Fast Recovery',
        description: 'Return to daily activities in 5 to 7 days and full work activity in 1 to 2 weeks.',
        icon: '⚡',
      },
      {
        title: 'Minimal Scars',
        description: '3 to 4 incisions of 5 to 12 mm that become virtually imperceptible over time.',
        icon: '✂️',
      },
      {
        title: 'Definitive Treatment',
        description: 'Eliminates the source of biliary colic, inflammation, and the risk of complications such as pancreatitis or obstructive jaundice.',
        icon: '🎯',
      },
    ],
    candidates: [
      'Patients with gallstones (cholelithiasis) causing symptoms such as biliary colic, nausea, vomiting, or intolerance to fatty foods.',
      'Individuals with acute cholecystitis (acute gallbladder inflammation) or chronic cholecystitis with recurrent episodes of pain.',
      'Patients with gallbladder polyps larger than 10 mm due to malignancy risk, or between 6 and 9 mm with additional risk factors.',
      'Individuals who have experienced acute biliary-origin pancreatitis or resolved choledocholithiasis (stones in the bile duct).',
      'Patients with porcelain gallbladder (calcification of the gallbladder wall) or with prior abdominal surgeries that do not contraindicate the laparoscopic approach.',
    ],
    recovery: [
      {
        period: 'Day of procedure',
        description: 'The patient arrives fasting, surgery is performed under general anesthesia (45 minutes to 1.5 hours), and is observed in recovery for 2 to 4 hours. Most patients start oral liquids a few hours later and go home the same day or the following morning.',
      },
      {
        period: 'First week',
        description: 'Soft and easy-to-digest diet the first days: broths, gelatin, chicken, cooked vegetables. Pain management with oral analgesics. Care of the small wounds. Short walks from the first day to prevent thrombosis.',
      },
      {
        period: '2–4 weeks',
        description: 'Return to sedentary work activities between days 5 and 10. Diet virtually without restrictions, although it is recommended to moderate fat intake for the first 2 weeks. Avoid lifting heavy objects (more than 5 kg).',
      },
      {
        period: '1–3 months',
        description: 'Complete recovery without restrictions. Patients with physical jobs can return between weeks 3 and 4. Completely unrestricted diet. The absence of the gallbladder does not generate any permanent dietary limitation in the vast majority of patients.',
      },
    ],
    costRange: '',
    duration: '45 min - 1.5 hours',
    hospitalStay: 'Outpatient - 1 night',
    icon: '🫁',
    faq: [
      {
        question: 'Can I live without a gallbladder?',
        answer: 'Yes, perfectly. The gallbladder stores bile produced by the liver, but is not an indispensable organ. After cholecystectomy, bile flows continuously and directly from the liver to the small intestine. Most patients do not experience any permanent dietary limitation.',
      },
      {
        question: 'Why can\'t gallstones be dissolved with medications?',
        answer: 'Medications to dissolve gallstones only work on very small stones, made of pure cholesterol and with a functioning gallbladder, which represents less than 15% of cases. Treatment is prolonged, costly, and stones recur in 50% of patients upon stopping the medication. Laparoscopic cholecystectomy is fast, safe, and definitive.',
      },
      {
        question: 'When do I need emergency surgery?',
        answer: 'Emergency cholecystectomy is indicated in severe acute cholecystitis, severe acute biliary pancreatitis, or choledocholithiasis with bile duct obstruction and jaundice. If you experience intense pain in the upper right abdomen with fever, severe nausea, or yellowing of the skin and eyes, seek emergency care.',
      },
      {
        question: 'Can surgery be performed if I have an active gallbladder infection?',
        answer: 'Yes, in fact acute cholecystitis is a frequent indication for cholecystectomy. In these cases, the procedure is ideally performed within the first 72 hours from symptom onset. If the patient arrives with longer evolution or severe complications, percutaneous drainage may be required beforehand to reduce inflammation before definitive surgery.',
      },
      {
        question: 'How much does laparoscopic cholecystectomy cost in Merida?',
        answer: 'The cost varies based on the hospital and whether the procedure is elective or emergency. Dr. Ruvalcaba offers an initial consultation to evaluate the case and provide a detailed quote. Most medical insurance plans cover laparoscopic cholecystectomy when indicated. Contact the office for information on costs and to verify your coverage.',
      },
      {
        question: 'How long does laparoscopic cholecystectomy take?',
        answer: 'Laparoscopic cholecystectomy takes 45 minutes to 1.5 hours under general anesthesia. In cases of acute cholecystitis with severe inflammation or adhesions, additional time may be needed. The vast majority of patients can go home the same day or the following morning.',
      },
      {
        question: 'When can I return to work after cholecystectomy?',
        answer: 'Patients with office or sedentary work typically return within 5 to 7 days after surgery. For moderate physical work, 2 weeks is recommended. For intense physical work, 3 to 4 weeks. Dr. Ruvalcaba provides a medical leave certificate based on each patient\'s work requirements.',
      },
    ],
    relevantSpecialty: 'General Surgery',
    bodyLocation: 'Gallbladder',
    imagePath: '/images/procedures/colecistectomia-laparoscopica.webp',
    preparation: 'Fasting for 8 hours prior to surgery. Blood tests, liver and biliary tract ultrasound, and basic preoperative evaluation are required. In patients with choledocholithiasis, intraoperative cholangiography or prior ERCP may be necessary.',
  },

  // ---------------------------------------------------------------------------
  // 13. Laparoscopic Appendectomy
  // ---------------------------------------------------------------------------
  {
    slug: 'apendicectomia-laparoscopica',
    title: 'Laparoscopic Appendectomy',
    shortTitle: 'Laparoscopic Appendectomy',
    metaTitle: 'Laparoscopic Appendectomy in Merida | Dr. Mario Ruvalcaba',
    metaDescription: 'Laparoscopic appendectomy in Merida with Dr. Mario Ruvalcaba. Appendix removal for acute appendicitis. Discharge in 24 h. Schedule your consultation today.',
    heroHeadline: 'Laparoscopic Appendectomy in Merida',
    heroSubheadline: 'Laparoscopic removal of the cecal appendix in cases of acute appendicitis. Faster recovery, less pain, and lower wound infection risk compared to open surgery.',
    description: 'Laparoscopic appendectomy is the surgical removal of the cecal appendix using minimally invasive technique. It is the treatment of choice for acute appendicitis with proven advantages over open technique: less pain, lower wound infection rate, and faster recovery.',
    longDescription: 'Laparoscopic appendectomy in Merida is the treatment of choice for acute appendicitis, the most frequent abdominal surgical emergency worldwide. Appendicitis affects approximately 7% of the population throughout their lifetime, with the highest incidence between ages 10 and 30, although it can occur at any age. If untreated, appendix inflammation progresses to perforation, peritonitis, and abdominal sepsis within hours, making emergency appendectomy a life-saving procedure. Laparoscopic technique has proven clear advantages over open surgery: less postoperative pain, a 50% reduction in surgical wound infection rates (especially important in perforated appendicitis), faster recovery, and better cosmetic results.\n\nDr. Mario Ruvalcaba performs laparoscopic appendectomy in Merida through 1 umbilical incision of less than 1 cm that is practically imperceptible within one week of surgery. Under general anesthesia, the procedure takes 30 minutes to 1 hour: the camera and instruments are introduced to identify, ligate, and section the inflamed appendix, extracting it inside an endoscopic bag. In cases of perforated appendicitis or peritonitis, laparoscopy also allows effectively cleaning the abdominal cavity to reduce the risk of abscesses and residual collections.\n\nBoard-certified general surgeon in Merida, Yucatan, Dr. Ruvalcaba is available 24 hours a day to handle abdominal surgical emergencies with the speed that appendicitis demands. He holds certification from the Mexican Council of General Surgery, more than 5 years of experience, and surgical privileges at the leading hospitals in Merida, equipped for advanced laparoscopy and complex emergency management. The combination of refined technique and immediate availability ensures the best care at the critical moment.\n\nThe results are excellent: hospital discharge in 24 to 48 hours in uncomplicated cases, return to activities in 5 to 7 days, and a virtually invisible scar. Even in complicated appendicitis with perforation, laparoscopy offers better outcomes than open surgery. If you have abdominal pain in the lower right side with fever and nausea, seek urgent medical attention. Schedule your consultation today or go directly to the emergency room.',
    benefits: [
      {
        title: 'Fast Recovery',
        description: 'Hospital discharge in 24 to 48 hours and return to normal activities in 5 to 7 days, even in cases with perforation.',
        icon: '🚀',
      },
      {
        title: 'Lower Wound Infection',
        description: 'The laparoscopic technique significantly reduces the rate of surgical wound infection, especially in complicated appendicitis.',
        icon: '🛡️',
      },
      {
        title: 'Intraoperative Diagnosis',
        description: 'Allows exploration of the entire abdominal cavity to rule out other pathologies, especially useful in cases of doubtful diagnosis.',
        icon: '🔍',
      },
      {
        title: 'Minimal Scars',
        description: '1 small incision through the umbilical scar resulting in a virtually imperceptible wound compared to the McBurney incision of open surgery.',
        icon: '✂️',
      },
    ],
    candidates: [
      'Patients with a diagnosis of acute appendicitis confirmed clinically or by imaging (ultrasound or computed tomography).',
      'Individuals with perforated appendicitis or appendiceal plastron requiring exploration and cleaning of the abdominal cavity.',
      'Patients with a clinical picture suggestive of acute appendicitis in whom laparoscopy allows confirming the diagnosis and performing treatment in the same surgical act.',
      'Adults and adolescents with uncomplicated acute appendicitis in whom laparoscopic surgery is considered the treatment of choice.',
      'Patients without contraindications to general anesthesia. In women of childbearing age, laparoscopy is especially preferred to rule out associated gynecological pathology.',
    ],
    recovery: [
      {
        period: 'First 24–48 hours',
        description: 'Hospital stay. Start of oral liquids a few hours after surgery. Early mobilization. Pain management with intravenous and then oral analgesics. In uncomplicated cases, discharge is given in 24 hours; in perforated appendicitis, 48 to 72 hours may be required.',
      },
      {
        period: 'First week',
        description: 'Soft diet the first days progressing to unrestricted eating according to tolerance. Pain management with oral analgesics. Care of the small wounds. Relative rest with frequent short walks.',
      },
      {
        period: '2–4 weeks',
        description: 'Return to daily and sedentary work activities between days 5 and 10. Unrestricted diet. Avoid intense physical activity and weight lifting for 2 to 3 weeks.',
      },
      {
        period: '1–3 months',
        description: 'Full recovery. In cases of complicated appendicitis with perforation, absence of residual collections is verified with imaging studies if symptoms exist. Full return to sports activities without restrictions.',
      },
    ],
    costRange: '',
    duration: '30 min - 1 hour',
    hospitalStay: '1 - 2 nights',
    icon: '⚡',
    faq: [
      {
        question: 'How do I know if I have appendicitis?',
        answer: 'Classic symptoms include pain that starts at the navel and migrates to the right lower quadrant (lower right abdomen), accompanied by nausea, loss of appetite, mild fever, and pain that intensifies with movement. At the suspicion of appendicitis, emergency medical care should be sought immediately.',
      },
      {
        question: 'Can appendicitis be treated with antibiotics without surgery?',
        answer: 'In selected cases of uncomplicated acute appendicitis, antibiotic treatment has shown short-term efficacy in some studies. However, the 5-year recurrence rate is significant (25–30%), and there is a risk that a new episode may involve complicated appendicitis. Laparoscopic surgery remains the treatment of choice as it is definitive, safe, and has fast recovery.',
      },
      {
        question: 'What happens if the appendix perforates before reaching the operating room?',
        answer: 'Appendix perforation causes localized or diffuse peritonitis, which complicates management but does not fundamentally change the treatment: emergency surgery to remove the appendix and clean the abdominal cavity. In perforation cases, laparoscopy allows effective abdominal irrigation, although it may require longer hospitalization (2 to 4 days) and intravenous antibiotics for a longer period.',
      },
      {
        question: 'Is complete bed rest necessary after appendectomy?',
        answer: 'No, on the contrary: early mobilization (walking from the first postoperative day) is essential to prevent complications such as deep vein thrombosis and accelerate recovery. Relative rest is recommended the first days, avoiding high-impact and high-intensity activities, but short walks and gentle daily activities begin from the first or second day.',
      },
      {
        question: 'How much does laparoscopic appendectomy cost in Merida?',
        answer: 'The cost varies based on whether surgery is emergency or scheduled, the hospital, and the complexity of the case. Dr. Ruvalcaba coordinates emergency care directly at the time of the emergency. Most major medical insurance plans cover emergency appendectomy. Contact the office for information on elective case costs.',
      },
      {
        question: 'How long does laparoscopic appendectomy take?',
        answer: 'In uncomplicated cases, laparoscopic appendectomy takes 30 to 60 minutes under general anesthesia. In cases of perforated appendicitis with peritonitis, up to 1.5 hours may be required for abdominal cavity cleaning. Hospital discharge is given in 24 hours for simple cases and 48 to 72 hours for complicated cases.',
      },
      {
        question: 'When can I return to work after laparoscopic appendectomy?',
        answer: 'For office or sedentary work, most patients return between days 5 and 7 postoperatively. For moderate physical work, 2 to 3 weeks is recommended. In cases of perforated appendicitis with greater complexity, additional rest may be required. Dr. Ruvalcaba issues a medical leave certificate based on each case\'s recovery.',
      },
    ],
    relevantSpecialty: 'General Surgery',
    bodyLocation: 'Appendix, Abdomen',
    imagePath: '/images/procedures/apendicectomia-laparoscopica.webp',
    preparation: 'Fasting prior to surgery (minimum 6 hours in emergencies if time allows). Basic blood tests and abdominal ultrasound or CT scan are required to confirm the diagnosis. In emergency situations, preparation is carried out quickly to avoid delaying the intervention.',
  },

  // ---------------------------------------------------------------------------
  // 14. Laparoscopic Fundoplication (Anti-Reflux)
  // ---------------------------------------------------------------------------
  {
    slug: 'funduplicatura-antirreflujo',
    title: 'Laparoscopic Fundoplication (Anti-Reflux)',
    shortTitle: 'Fundoplication',
    metaTitle: 'Anti-Reflux Fundoplication in Merida | Dr. Mario Ruvalcaba',
    metaDescription: 'Laparoscopic fundoplication in Merida with Dr. Mario Ruvalcaba. Definitive correction of severe GERD and hiatal hernia. Eliminates reflux in >90%. Schedule your consultation today.',
    heroHeadline: 'Laparoscopic Fundoplication in Merida',
    heroSubheadline: 'Definitive surgical correction of severe gastroesophageal reflux disease and hiatal hernia that do not respond to medication treatment. Permanently eliminates reflux.',
    description: 'Laparoscopic fundoplication is an anti-reflux surgery that wraps the gastric fundus around the lower esophagus to reconstruct the esophageal sphincter and permanently eliminate severe gastroesophageal reflux in more than 90% of patients.',
    longDescription: 'Laparoscopic anti-reflux fundoplication in Merida is the definitive surgical solution for severe gastroesophageal reflux disease (GERD) that does not respond to medications. GERD affects 10-20% of the adult population, and in severe cases can progress to erosive esophagitis, Barrett\'s esophagus, and ultimately esophageal cancer. The procedure wraps the gastric fundus around the lower esophagus to reconstruct the lower esophageal sphincter, the natural barrier that prevents reflux. The most common technique is Nissen fundoplication (360° wrap); in selected cases, Toupet fundoplication (270°) is used to reduce the risk of postoperative dysphagia. The surgery also corrects the hiatal hernia when present, resolving the underlying anatomical defect. Anti-reflux surgery specialist in Merida offers this proven laparoscopic treatment for patients throughout Yucatan.\n\nDr. Mario Ruvalcaba performs laparoscopic fundoplication in Merida through 4 to 5 small incisions under general anesthesia. Surgery lasts 1.5 to 2.5 hours. The indication requires objective confirmation of GERD through 24-hour pH-metry and/or esophageal manometry, upper digestive endoscopy, and in some cases upper GI series. Hospital discharge is given the following day or within 48 hours with an initial liquid diet.\n\nCertified by the Mexican Council of General Surgery with more than 5 years of experience in laparoscopic esophagogastric surgery in Merida, Dr. Ruvalcaba performs complete functional esophageal evaluation before surgery to correctly classify GERD and select the most appropriate technique. He operates at the leading hospitals in Merida, Yucatan, with the diagnostic and therapeutic resources needed for complex esophageal pathology management.\n\nMore than 90% of patients achieve complete reflux elimination after fundoplication, with symptom resolution, esophagitis improvement, and the possibility of discontinuing proton pump inhibitors. Full functional recovery is achieved within 4 to 8 weeks. If you have severe reflux that medications cannot control, a permanent solution exists. Schedule your consultation today.',
    benefits: [
      {
        title: 'Definitive Solution',
        description: 'Permanently eliminates gastroesophageal reflux in more than 90% of patients, avoiding lifelong medication dependence.',
        icon: '🎯',
      },
      {
        title: 'Prevention of Complications',
        description: 'Stops the progression of esophagitis, reduces the risk of Barrett\'s esophagus and its complications, and improves quality of life comprehensively.',
        icon: '🩺',
      },
      {
        title: 'Medication Independence',
        description: 'The vast majority of patients can discontinue proton pump inhibitors after surgery.',
        icon: '💊',
      },
      {
        title: 'Minimally Invasive',
        description: 'Laparoscopic approach with 1 to 2 week recovery, without the morbidity of conventional open surgery.',
        icon: '🔬',
      },
    ],
    candidates: [
      'Patients with severe GERD confirmed by 24-hour pH-metry and/or esophageal manometry, with symptoms not adequately controlled with proton pump inhibitors.',
      'Individuals with grade C or D esophagitis (Los Angeles), Barrett\'s esophagus, or peptic stricture requiring definitive reflux correction.',
      'Patients with sliding or paraesophageal hiatal hernia contributing to reflux and causing symptoms such as heartburn, regurgitation, dysphagia, or respiratory symptoms.',
      'Individuals who prefer a definitive surgical solution over long-term medication dependence, after appropriate evaluation confirming they are suitable candidates.',
      'Patients with laryngopharyngeal reflux or extraesophageal reflux manifestations (chronic cough, hoarseness, asthma, dental erosion) refractory to medical treatment.',
    ],
    recovery: [
      {
        period: 'First week',
        description: 'Strict liquid diet for the first 7 days to allow healing of the repair and adaptation to the new anatomy. There may be temporary dysphagia (difficulty swallowing), especially for solids. The patient returns home the following day or within 48 hours.',
      },
      {
        period: '2–4 weeks',
        description: 'Gradual progression to soft diet and then solid foods. Dysphagia gradually resolves. It is recommended to eat slowly, chew well, and avoid large bites. Return to sedentary activities around day 10.',
      },
      {
        period: '1–3 months',
        description: 'Complete adaptation to the new anatomy. Most patients can eat all foods normally. Reflux symptoms should be completely resolved. During this period, a control endoscopy is performed to verify esophageal healing.',
      },
      {
        period: '6–12 months',
        description: 'Full recovery. Follow-up to confirm absence of reflux recurrence and resolution of esophagitis or Barrett\'s when present. Patients with Barrett\'s require subsequent periodic endoscopic surveillance.',
      },
    ],
    costRange: '',
    duration: '1.5 - 2.5 hours',
    hospitalStay: '1 - 2 nights',
    icon: '🔧',
    faq: [
      {
        question: 'When is anti-reflux surgery indicated instead of medications?',
        answer: 'Surgery is indicated when reflux is severe and not adequately controlled with optimal doses of proton pump inhibitors, when the patient does not wish to take lifelong medication, when reflux complications are present (severe esophagitis, Barrett\'s, stricture), when there is a large hiatal hernia, or when reflux generates extraesophageal manifestations (cough, hoarseness, asthma).',
      },
      {
        question: 'What is postoperative dysphagia and how long does it last?',
        answer: 'Dysphagia (difficulty swallowing) is the most common side effect after fundoplication and occurs to varying degrees in most patients during the first 4 to 8 weeks. It is caused by postoperative edema and inflammation and by adaptation to the new anatomy. In the vast majority of cases it resolves spontaneously between weeks 4 and 8 with an appropriate diet.',
      },
      {
        question: 'Can fundoplication be performed if I have a large hiatal hernia?',
        answer: 'Yes, in fact hiatal hernia repair is an integral part of the anti-reflux procedure. In large paraesophageal hernias (type III and IV), surgery is scheduled electively to repair the defect and reposition the stomach in the abdomen, combining crural repair with fundoplication.',
      },
      {
        question: 'Can reflux return after surgery?',
        answer: 'The reflux recurrence rate at 10 years is 10 to 15%, generally due to progressive relaxation of the fundoplication or recurrent herniation. However, the vast majority of patients maintain excellent long-term results, with more than 85% reporting complete satisfaction at 10 years after surgery.',
      },
      {
        question: 'How much does laparoscopic fundoplication cost in Merida?',
        answer: 'The cost varies based on the hospital and required preoperative studies (pH-metry, manometry, endoscopy). Dr. Ruvalcaba provides a detailed quote during the initial consultation. Many medical insurance plans cover fundoplication when there is documented medical indication with esophageal functional studies. Consult with your insurer and the office for more information.',
      },
      {
        question: 'How long does laparoscopic fundoplication take?',
        answer: 'Laparoscopic fundoplication takes 1.5 to 2.5 hours under general anesthesia. In cases that include large hiatal hernia repair, additional time may be required. Hospital discharge is given the following day or within 48 hours, with strict liquid diet for the first 7 days.',
      },
      {
        question: 'When can I return to work after fundoplication?',
        answer: 'Patients with sedentary or office work typically return around day 10 postoperatively. The most important restriction during the first 2 weeks is dietary: liquid then soft diet to allow healing. For physical work, 3 to 4 weeks of rest is recommended. Temporary dysphagia gradually resolves between weeks 4 and 8.',
      },
    ],
    relevantSpecialty: 'Gastroenterology',
    bodyLocation: 'Esophagus, Stomach',
    imagePath: '/images/procedures/funduplicatura-antirreflujo.webp',
    preparation: 'Fasting for 8 hours prior to surgery. A preoperative evaluation is required including 24-hour esophageal pH-metry, high-resolution esophageal manometry, upper digestive endoscopy, and blood tests. In some cases, upper GI series with contrast is also needed.',
  },

  // ---------------------------------------------------------------------------
  // 15. Achalasia Surgery (Heller Myotomy)
  // ---------------------------------------------------------------------------
  {
    slug: 'cirugia-acalasia',
    title: 'Achalasia Surgery (Heller Myotomy)',
    shortTitle: 'Achalasia Surgery',
    metaTitle: 'Achalasia Surgery in Merida | Dr. Mario Ruvalcaba - Heller Myotomy',
    metaDescription: 'Laparoscopic Heller myotomy in Merida with Dr. Mario Ruvalcaba. Definitive achalasia treatment with dysphagia resolution in >90% of patients. Schedule your consultation today.',
    heroHeadline: 'Achalasia Surgery in Merida',
    heroSubheadline: 'Laparoscopic Heller myotomy for the definitive treatment of achalasia, the esophageal motility disorder that prevents normal passage of food into the stomach.',
    description: 'Laparoscopic Heller myotomy is the reference surgical procedure for achalasia. It consists of a precise longitudinal incision in the muscle fibers of the lower esophageal sphincter, eliminating the obstacle to food passage with dysphagia resolution in more than 90% of patients.',
    longDescription: 'Achalasia is an esophageal motor disorder of unknown cause (possibly autoimmune) characterized by the inability of the lower esophageal sphincter to relax during swallowing and by the absence of normal esophageal peristalsis. This prevents adequate passage of food into the stomach, causing progressive dysphagia for solids and liquids, regurgitation of undigested food, chest pain, and weight loss. Its incidence is 1 to 2 cases per 100,000 inhabitants per year, most frequently between ages 25 and 60. Without treatment, achalasia progresses and may produce megaesophagus with severe nutritional deterioration. In Merida, the achalasia surgery specialist in Yucatan offers the definitive reference laparoscopic treatment.\n\nDr. Mario Ruvalcaba performs laparoscopic Heller myotomy in Merida, the reference surgical procedure for achalasia. Under general anesthesia and through 4 to 5 small incisions, a precise longitudinal incision is made in the muscle fibers of the lower esophageal sphincter without perforating the underlying mucosa, eliminating the obstacle to food passage. The procedure is complemented with a Dor partial fundoplication (anterior, 180°) to prevent gastroesophageal reflux that might arise upon releasing the sphincter. Surgery lasts 1.5 to 2.5 hours with hospital discharge at 24-48 hours.\n\nWith certification from the Mexican Council of General Surgery and more than 5 years of experience in laparoscopic esophageal surgery in Merida, Dr. Ruvalcaba performs complete preoperative functional evaluation with high-resolution manometry and upper digestive endoscopy to correctly classify achalasia and select the most appropriate technique. He operates at first-level hospitals in Merida, Yucatan, with the diagnostic and therapeutic resources needed for complex esophageal pathology management.\n\nLong-term studies report dysphagia resolution in more than 90% of patients after laparoscopic Heller myotomy, with success rates exceeding 85% at 10 years. Improvement is generally notable from the first postoperative hours. Most patients return to their activities within 7 to 10 days. If you have difficulty swallowing that does not respond to other treatments, laparoscopic surgery may offer the definitive solution. Schedule your consultation today.',
    benefits: [
      {
        title: 'Dysphagia Resolution',
        description: 'More than 90% of patients achieve normal swallowing after myotomy, with sustained long-term results in the vast majority.',
        icon: '🍽️',
      },
      {
        title: 'Definitive Treatment',
        description: 'Unlike pneumatic dilations or botulinum toxin, myotomy offers more durable results without the need to repeat the procedure.',
        icon: '🎯',
      },
      {
        title: 'Anti-Reflux Protection',
        description: 'The Dor fundoplication included in the procedure prevents gastroesophageal reflux that might arise after releasing the sphincter.',
        icon: '🛡️',
      },
      {
        title: 'Minimally Invasive',
        description: 'Laparoscopic approach allowing fast recovery, with hospital discharge in 24 to 48 hours and return to work in 1 to 2 weeks.',
        icon: '🔬',
      },
    ],
    candidates: [
      'Patients with confirmed achalasia diagnosis by high-resolution esophageal manometry (elevated lower esophageal sphincter pressure with esophageal aperistalsis).',
      'Individuals with progressive dysphagia for solids and liquids with associated weight loss.',
      'Patients who did not respond satisfactorily or have recurrence after prior endoscopic treatments (pneumatic dilation or botulinum toxin).',
      'Young or middle-aged adults in whom a more durable treatment is preferred to avoid repeated procedures.',
      'Patients with type I or II achalasia (Chicago classification) without severe megaesophagus that still allows laparoscopic surgery as first option.',
    ],
    recovery: [
      {
        period: 'First week',
        description: 'Full liquid diet for the first 5 to 7 days to allow myotomy healing. Hospital discharge at 24 to 48 hours. Improvement in dysphagia is notable from the first hours or days postoperatively.',
      },
      {
        period: '2–4 weeks',
        description: 'Progression to soft diet and then solid foods according to tolerance. Most patients notice significant improvement in swallowing during this period. Return to sedentary work activities around days 7 to 10.',
      },
      {
        period: '1–3 months',
        description: 'Complete adaptation with normal swallowing in the vast majority of patients. It is recommended to eat slowly and chew well as a habitual practice. Follow-up with manometry and/or upper GI series as indicated by the treating physician.',
      },
      {
        period: '6–12 months',
        description: 'Full recovery. Long-term results evaluation. In case of residual symptoms or recurrence, additional management options are assessed. Patients with prior megaesophagus may require closer follow-up.',
      },
    ],
    costRange: '',
    duration: '1.5 - 2.5 hours',
    hospitalStay: '1 - 2 nights',
    icon: '🫁',
    faq: [
      {
        question: 'How is achalasia diagnosed?',
        answer: 'The diagnosis of achalasia is confirmed by high-resolution esophageal manometry, which measures pressure and motility patterns of the esophagus and lower sphincter. Complementarily, upper digestive endoscopy is performed to rule out other causes of dysphagia, and upper GI series with contrast to evaluate the degree of esophageal dilation and emptying pattern.',
      },
      {
        question: 'What is the difference between Heller myotomy and pneumatic dilations?',
        answer: 'Pneumatic dilations are a less invasive endoscopic treatment but with higher recurrence rates (40–50% at 5 years) and perforation risk. Laparoscopic Heller myotomy offers greater durability (more than 80% success at 10 years) with fast recovery. In young patients and those who do not respond to dilations, myotomy is the preferred option.',
      },
      {
        question: 'Can achalasia recur after surgery?',
        answer: 'Heller myotomy offers excellent long-term results, with success rates exceeding 85% at 10 years. However, in a smaller percentage of patients, residual symptoms or late recurrence due to fibrosis at the myotomy site may occur. In these cases, options such as pneumatic dilation, botulinum toxin, or in selected cases a new intervention are assessed.',
      },
      {
        question: 'Is there any alternative to surgery to treat achalasia?',
        answer: 'Yes. The main alternatives are: botulinum toxin injection (temporary effect of 6 to 12 months), endoscopic pneumatic dilation (good short-term efficacy but higher recurrence), and POEM (per-oral endoscopic myotomy), an advanced endoscopic technique that achieves results similar to laparoscopic surgery but without external incisions.',
      },
      {
        question: 'How much does achalasia surgery (Heller myotomy) cost in Merida?',
        answer: 'The cost varies based on the hospital and required specialized preoperative studies (esophageal manometry, endoscopy, radiological series). Dr. Ruvalcaba provides a detailed quote during the initial consultation. Some medical insurance plans cover the procedure when there is confirmed achalasia diagnosis. Contact the office for information on costs and coverage.',
      },
      {
        question: 'How long does laparoscopic Heller myotomy take?',
        answer: 'Laparoscopic Heller myotomy with Dor fundoplication takes 1.5 to 2.5 hours under general anesthesia. The procedure requires special technical precision to make the muscle incision without perforating the esophageal mucosa. Hospital discharge is given at 24-48 hours with a liquid diet for the first 5 to 7 days.',
      },
      {
        question: 'When can I return to work after achalasia surgery?',
        answer: 'Patients with sedentary work typically return between days 7 and 10 postoperatively. Improvement in dysphagia is generally notable from the first days. For physical work, 2 to 3 weeks of rest is recommended. Complete adaptation to the new anatomy and normalization of swallowing are achieved between 4 and 8 weeks.',
      },
    ],
    relevantSpecialty: 'Gastroenterology',
    bodyLocation: 'Esophagus',
    imagePath: '/images/procedures/cirugia-acalasia.webp',
    preparation: 'Fasting for 8 hours prior to surgery. A preoperative evaluation is required including high-resolution esophageal manometry, upper digestive endoscopy, and upper GI series with contrast. In patients with severe malnutrition, nutritional support may be required prior to surgery.',
  },

  // ---------------------------------------------------------------------------
  // 16. Ventral Hernia Surgery
  // ---------------------------------------------------------------------------
  {
    slug: 'cirugia-hernias-ventrales',
    title: 'Ventral Hernia Surgery',
    shortTitle: 'Ventral Hernias',
    metaTitle: 'Ventral Hernia Surgery in Merida | Dr. Mario Ruvalcaba',
    metaDescription: 'Laparoscopic ventral hernia surgery in Merida with Dr. Mario Ruvalcaba. Umbilical, epigastric, incisional. Recurrence <2%. Schedule your consultation today.',
    heroHeadline: 'Ventral Hernia Surgery in Merida',
    heroSubheadline: 'Laparoscopic repair of umbilical, epigastric, and incisional hernias with prosthetic mesh. Less pain, faster recovery, and significantly lower recurrence rates than open surgery.',
    description: 'Ventral hernias (umbilical, epigastric, and incisional) are repaired laparoscopically by placing a prosthetic mesh on the inner surface of the abdominal wall. This intraperitoneal technique (IPOM) achieves recurrence rates below 2% with recovery in 1 to 2 weeks.',
    longDescription: 'Ventral hernia surgery in Merida addresses defects of the anterior abdominal wall, including umbilical hernia (at the navel), epigastric hernia (between navel and sternum), and incisional hernia (at a prior surgical scar). Ventral hernias affect 10-15% of the population and are more frequent in people with obesity, prior abdominal surgeries, or intense physical exertion. If left untreated, hernias grow progressively and can complicate with bowel incarceration or strangulation, situations requiring emergency surgery with higher risk. Laparoscopic ventral hernia surgery in Yucatan offers clear advantages over open surgery: less pain, faster recovery, and significantly lower recurrence rates.\n\nDr. Mario Ruvalcaba performs ventral hernia surgery in Merida using laparoscopic IPOM (Intraperitoneal Onlay Mesh) technique through 3 to 4 small incisions away from the hernia defect. Under general anesthesia, the herniated content is reduced, the defect is identified, and a state-of-the-art prosthetic mesh is placed on the inner surface of the abdominal wall to reinforce it. Surgery lasts 1 to 3 hours depending on the size and number of hernias. Hospital discharge is given the following day with functional recovery in 1 to 2 weeks. Laparoscopic technique achieves recurrence rates below 2%, compared to 10-15% with open repair without mesh.\n\nBoard-certified general surgeon in Merida, Yucatan, Dr. Ruvalcaba holds certification from the Mexican Council of General Surgery and more than 5 years of experience in laparoscopic abdominal wall surgery. He operates at the leading hospitals in Merida with state-of-the-art triple-layer anti-adhesion barrier prosthetic meshes, selected based on each hernia\'s characteristics. His protocol includes simultaneous repair of multiple defects when possible in a single surgical session.\n\nThe results are excellent: recurrence rates below 2%, minimal postoperative pain managed with oral analgesics, and return to daily activities in 7 to 14 days. Complex incisional hernias and recurrent hernias are especially favored by the laparoscopic approach, which accesses previously undissected planes. Do not wait for your hernia to become complicated. Schedule your consultation today.',
    benefits: [
      {
        title: 'Minimal Recurrence',
        description: 'Prosthetic mesh reduces the recurrence rate to less than 2%, compared to 10–15% with open repair without reinforcement.',
        icon: '📉',
      },
      {
        title: 'Less Pain',
        description: 'The laparoscopic approach avoids extensive muscle dissection, resulting in significantly less postoperative pain.',
        icon: '💪',
      },
      {
        title: 'Early Discharge',
        description: 'Most patients return home the following day with complete functional recovery in 1 to 2 weeks.',
        icon: '🏠',
      },
      {
        title: 'Ideal for Complex Hernias',
        description: 'Especially advantageous for large incisional hernias, recurrent hernias, or patients with multiple simultaneous hernias.',
        icon: '🎯',
      },
    ],
    candidates: [
      'Patients with symptomatic umbilical hernia (pain, discomfort with exertion, visible protrusion) of any size.',
      'Individuals with incisional hernia (at a prior surgical scar) causing symptoms or presenting incarceration risk.',
      'Patients with symptomatic epigastric hernia or with complication risk due to fatty or intestinal content.',
      'Individuals with recurrent ventral hernias after prior surgery requiring mesh reinforcement to reduce risk of new recurrence.',
      'Adults with multiple abdominal wall hernia defects that can be addressed simultaneously by laparoscopy in a single intervention.',
    ],
    recovery: [
      {
        period: 'First week',
        description: 'Hospital discharge the following day or at 48 hours. Moderate pain manageable with oral analgesics. It is normal to feel discomfort at the mesh level during the first weeks. Gentle walks from the first day. Avoid lifting objects over 3 kg.',
      },
      {
        period: '2–4 weeks',
        description: 'Return to sedentary work activities between days 7 and 14. Unrestricted diet. Avoid abdominal strain, weight lifting, and impact exercise. Discomfort at the mesh level gradually decreases.',
      },
      {
        period: '1–3 months',
        description: 'Functional recovery. The mesh integrates into the abdominal wall tissues during this period. Gradual start of moderate cardiovascular exercise. For physically demanding work, it is recommended to wait 4 to 6 weeks.',
      },
      {
        period: '3–6 months',
        description: 'Complete mesh integration. Unrestricted physical activity, including weight training and high-impact activities. The abdominal wall is permanently reinforced.',
      },
    ],
    costRange: '',
    duration: '1 - 3 hours',
    hospitalStay: '1 - 2 nights',
    icon: '🩹',
    faq: [
      {
        question: 'Is mesh always needed to repair a ventral hernia?',
        answer: 'In small umbilical hernias (less than 1 cm), primary closure without mesh can be performed with good results. However, for hernias of 1 cm or more, mesh repair offers significantly lower recurrence rates (less than 2% vs more than 10% without mesh). In incisional hernias, mesh is practically always necessary.',
      },
      {
        question: 'Can mesh generate long-term complications?',
        answer: 'Modern meshes used in laparoscopic ventral hernia surgery have excellent long-term safety profiles. Complications are infrequent and include mesh infection (less than 1%), seroma (fluid accumulation) in the first weeks that generally reabsorbs on its own, and rarely chronic pain.',
      },
      {
        question: 'What happens if I don\'t have the hernia operated?',
        answer: 'Ventral hernias do not disappear on their own and tend to grow over time. The main complication is incarceration: the hernial content becomes trapped in the defect and cannot be manually reduced. If blood flow to the herniated intestine is compromised (strangulation), this is a surgical emergency that significantly increases the risk of surgery.',
      },
      {
        question: 'Can I exercise after hernia surgery?',
        answer: 'Yes, but progressively. Short walks begin from the first day. Moderate cardiovascular exercise can begin between 2 and 4 weeks. Weight training, abdominal exercises, and high-impact activities should wait 6 to 8 weeks to allow complete mesh integration into the tissues.',
      },
      {
        question: 'How much does ventral hernia surgery cost in Merida?',
        answer: 'The cost varies based on the size and number of hernias, the type of mesh used, and the hospital. Dr. Ruvalcaba offers an initial consultation to evaluate the case and provide a detailed quote. Most medical insurance plans cover symptomatic ventral hernia surgery. Contact the office for information on costs and to verify your coverage.',
      },
      {
        question: 'How long does ventral hernia surgery take?',
        answer: 'Laparoscopic ventral hernia surgery takes 1 to 3 hours depending on the defect size, number of hernias, and complexity. Simple umbilical hernias are resolved in 1 hour; large or multiple incisional hernias may require up to 3 hours. All procedures are performed under general anesthesia with 1 to 2 nights of hospital stay.',
      },
      {
        question: 'When can I return to work after ventral hernia surgery?',
        answer: 'For sedentary or office work, return is between days 7 and 14 postoperatively. For moderate physical work, 4 to 6 weeks. For intense physical work, 6 to 8 weeks are recommended until complete mesh integration. Dr. Ruvalcaba provides a leave certificate based on each patient\'s needs.',
      },
    ],
    relevantSpecialty: 'General Surgery',
    bodyLocation: 'Abdominal Wall',
    imagePath: '/images/procedures/cirugia-hernias-ventrales.webp',
    preparation: 'Fasting for 8 hours prior to surgery. Blood tests and abdominal wall ultrasound to characterize the hernia defect are required, along with basic preoperative evaluation. For complex incisional hernias, abdominal CT scan may be necessary to plan the repair.',
  },

  // ---------------------------------------------------------------------------
  // 17. Inguinal Hernia Surgery
  // ---------------------------------------------------------------------------
  {
    slug: 'cirugia-hernias-inguinales',
    title: 'Inguinal Hernia Surgery',
    shortTitle: 'Inguinal Hernias',
    metaTitle: 'Laparoscopic Inguinal Hernioplasty in Merida | Dr. Mario Ruvalcaba',
    metaDescription: 'Laparoscopic inguinal hernioplasty TEP/TAPP in Merida with Dr. Mario Ruvalcaba. Recurrence <2%. Same-day discharge. Schedule your consultation today.',
    heroHeadline: 'Laparoscopic Inguinal Hernioplasty in Merida',
    heroSubheadline: 'Laparoscopic repair of inguinal hernias using TEP or TAPP technique. Less pain, faster recovery than open surgery, and significant advantage for bilateral and recurrent hernias.',
    description: 'Laparoscopic inguinal hernioplasty using TEP or TAPP technique places a prosthetic mesh in the preperitoneal space covering the hernia defect from the inside, with recovery in 5 to 7 days and recurrence rates below 2%.',
    longDescription: 'Laparoscopic inguinal hernioplasty in Merida is the treatment of choice for inguinal hernia, the most frequent of all types of abdominal hernia. Inguinal hernia affects approximately 27% of men and 3% of women throughout their lifetime. It presents as a bulge in the groin with pain or discomfort when coughing, straining, or standing for prolonged periods. Without treatment, the hernia grows progressively and can complicate with bowel incarceration or strangulation, requiring emergency surgery with higher risk. The inguinal hernia surgeon in Merida offers the most advanced laparoscopic technique with superior results compared to conventional open surgery.\n\nDr. Mario Ruvalcaba performs laparoscopic inguinal hernioplasty in Merida using TEP (Totally Extraperitoneal) or TAPP (Transabdominal Preperitoneal) technique, selecting the most appropriate based on each patient\'s anatomy and history. Both techniques place a prosthetic mesh in the preperitoneal space covering the hernia defect from the inside. Surgery lasts 1 to 1.5 hours under general anesthesia and is outpatient in most cases: the patient goes home the same day. The laparoscopic technique is especially advantageous for bilateral hernias, allowing repair of both groins through the same 3 incisions without the need for two separate surgeries.\n\nInguinal hernia specialist in Yucatan, Dr. Ruvalcaba holds certification from the Mexican Council of General Surgery and more than 5 years of experience in laparoscopic hernioplasty with TEP and TAPP techniques. He operates at first-level hospitals in Merida with state-of-the-art preperitoneal space prosthetic meshes. Recurrent hernias after prior open surgery are especially favored by the laparoscopic approach, which accesses previously undissected planes.\n\nThe results are excellent: return to sedentary activities in 5 to 7 days, recurrence rates below 2%, and virtually no chronic pain at the operated site. Compared to open Lichtenstein repair, laparoscopic technique offers less postoperative pain, especially in the first 2 weeks. Do not leave your hernia untreated. Schedule your consultation today.',
    benefits: [
      {
        title: 'Outpatient',
        description: 'Short-stay procedure: the patient returns home the same day of surgery in most cases.',
        icon: '🏠',
      },
      {
        title: 'Fast Recovery',
        description: 'Return to sedentary activities in 5 to 7 days, significantly faster than conventional open surgery.',
        icon: '⚡',
      },
      {
        title: 'Ideal for Bilateral Hernias',
        description: 'Allows repairing both inguinal hernias through the same 3 incisions, with no need for two separate surgeries.',
        icon: '🎯',
      },
      {
        title: 'Low Recurrence Rate',
        description: 'Mesh in preperitoneal position reduces the recurrence rate to less than 2%, with excellent long-term results.',
        icon: '📉',
      },
    ],
    candidates: [
      'Patients with symptomatic direct or indirect inguinal hernia (pain, discomfort, groin bulge) confirmed by physical examination and/or ultrasound.',
      'Individuals with bilateral inguinal hernia (both groins) in whom the laparoscopic approach allows repairing both defects in a single surgical session.',
      'Patients with recurrent inguinal hernia after prior open surgery, in whom the laparoscopic approach accesses previously undissected planes.',
      'Individuals with inguinal hernia associated with femoral hernia or contralateral hernia that can be treated simultaneously by laparoscopy.',
      'Active adults or those with physical jobs who require the fastest possible recovery to return to their activities.',
    ],
    recovery: [
      {
        period: 'Day of procedure',
        description: 'Discharge the same day in most patients. Start of liquids and soft diet a few hours after surgery. Mild to moderate pain manageable with oral analgesics. Short walks can begin the same day.',
      },
      {
        period: 'First week',
        description: 'Return to light daily activities in 2 to 3 days. Pain management with ibuprofen or acetaminophen. Avoid lifting heavy objects (more than 5 kg) and straining that increases abdominal pressure.',
      },
      {
        period: '2–4 weeks',
        description: 'Return to sedentary or office work in 5 to 7 days. For moderate load work, between days 14 and 21. Discomfort in the inguinal region gradually disappears.',
      },
      {
        period: '1–3 months',
        description: 'Full recovery. Complete mesh integration into tissues. Unrestricted physical activity, including heavy physical work and contact or impact sports, starting from 4 to 6 weeks as medically indicated.',
      },
    ],
    costRange: '',
    duration: '1 - 1.5 hours',
    hospitalStay: 'Outpatient',
    icon: '🩹',
    faq: [
      {
        question: 'What is the difference between TEP and TAPP?',
        answer: 'Both are laparoscopic techniques that place the mesh in the preperitoneal space. In TEP, work is done in the preperitoneal space without entering the abdominal cavity. TAPP first enters the abdominal cavity and then accesses the preperitoneal space, allowing simultaneous abdominal exploration. Dr. Ruvalcaba selects the most appropriate technique based on each patient\'s anatomy and history.',
      },
      {
        question: 'Can both hernias be operated at the same time?',
        answer: 'Yes, and this is one of the great advantages of laparoscopic surgery over open surgery. In bilateral inguinal hernias, the laparoscopic approach allows repairing both defects through the same 3 incisions, with no need for two separate surgeries, with the same recovery time as a single hernia.',
      },
      {
        question: 'What activities should I avoid after surgery?',
        answer: 'During the first 2 weeks: avoid lifting objects over 5 kg, intense exercise, and activities that increase abdominal pressure. Between weeks 2 and 4, moderate activities can be resumed. From weeks 4 to 6 onward, most patients can resume full physical activity, including sports and physical work.',
      },
      {
        question: 'Can the inguinal hernia recur after surgery?',
        answer: 'With laparoscopic technique and prosthetic mesh, the long-term recurrence rate is less than 2%, compared to 10–15% with open repair without mesh. Proper mesh integration into tissues, which occurs in the first 6 to 8 weeks, is fundamental for long-term outcomes.',
      },
      {
        question: 'How much does laparoscopic inguinal hernioplasty cost in Merida?',
        answer: 'The cost varies based on whether the hernia is unilateral or bilateral, the type of mesh, and the hospital. Laparoscopic bilateral repair, which resolves both groins in a single procedure, is often more cost-effective than two separate surgeries. Dr. Ruvalcaba provides a detailed quote during the consultation. Most medical insurance plans cover symptomatic inguinal hernioplasty.',
      },
      {
        question: 'How long does laparoscopic inguinal hernioplasty take?',
        answer: 'Unilateral laparoscopic inguinal hernioplasty takes 1 to 1.5 hours under general anesthesia. For bilateral hernias, time is only slightly longer (1.5 to 2 hours) as both sides are repaired through the same incisions. It is an outpatient procedure: the patient goes home the same day in most cases.',
      },
      {
        question: 'When can I return to work after inguinal hernioplasty?',
        answer: 'For sedentary or office activities, return is in 5 to 7 days. For moderate physical work, between days 14 and 21. For intense physical work, 4 to 6 weeks is recommended. Mesh integration occurs in the first 6 to 8 weeks, during which excessive inguinal strain should be avoided.',
      },
    ],
    relevantSpecialty: 'General Surgery',
    bodyLocation: 'Inguinal Region',
    imagePath: '/images/procedures/cirugia-hernias-inguinales.webp',
    preparation: 'Fasting for 8 hours prior to surgery. Blood tests and basic preoperative evaluation are required. Inguinal ultrasound may be useful in doubtful cases to confirm the diagnosis. For bilateral hernias, evaluation of both groins is performed during the preoperative consultation.',
  },

  // ---------------------------------------------------------------------------
  // 18. Single-Port Surgery
  // ---------------------------------------------------------------------------
  {
    slug: 'cirugia-puerto-unico',
    title: 'Single-Port Surgery',
    shortTitle: 'Single-Port',
    metaTitle: 'Single-Port Surgery in Merida | Dr. Mario Ruvalcaba - SILS',
    metaDescription: 'Single-port surgery (SILS) in Merida with Dr. Mario Ruvalcaba. Single umbilical incision, virtually invisible scar. Gallbladder, appendix and more. Schedule your consultation today.',
    heroHeadline: 'Single-Port Surgery in Merida',
    heroSubheadline: 'Advanced laparoscopic technique that performs the surgical procedure through a single incision hidden in the navel. Superior cosmetic result with a virtually invisible scar.',
    description: 'Single-port surgery (SILS) performs the complete procedure through a single 2 to 3 cm incision hidden inside the navel, offering the same surgical results as conventional laparoscopy with the benefit of a virtually invisible scar.',
    longDescription: 'Single-port surgery (SILS: Single Incision Laparoscopic Surgery) in Merida represents the highest cosmetic standard achievable in minimally invasive surgery. Unlike conventional laparoscopy that uses 3 to 4 incisions distributed across the abdomen, the SILS technique performs the complete procedure through a single 2 to 3 cm incision hidden inside the navel, taking advantage of the natural skin fold to completely conceal the scar. The result: surgery without visible marks. This technique is especially indicated for patients who prioritize cosmetic outcome and want to combine the safety and effectiveness of laparoscopy with the cosmetic advantage of a virtually invisible scar. Single-port surgery in Yucatan is available for selected procedures in Dr. Ruvalcaba\'s expert hands.\n\nDr. Mario Ruvalcaba applies the SILS technique in Merida using a special access device that allows simultaneously introducing a high-definition camera and surgical instruments through the single umbilical incision. The most frequent procedures include cholecystectomy (gallbladder), appendectomy (appendix), and repair of appropriately sized umbilical hernias. Surgery is performed under general anesthesia with duration similar to conventional laparoscopy (45 minutes to 2 hours). Hospital discharge is the same day in most cases.\n\nAdvanced laparoscopic surgeon in Merida, Yucatan, Dr. Ruvalcaba holds certification from the Mexican Council of General Surgery and specific training in single-access techniques. The SILS technique requires greater surgical skill than standard laparoscopy due to instrument triangulation limitations in a reduced space, but in expert hands offers the same safety and efficacy results with the additional cosmetic benefit. Not all patients are candidates: BMI, surgical history, and individual anatomy determine viability.\n\nThe cosmetic result is remarkable: the scar is completely hidden inside the navel and is virtually imperceptible weeks after surgery, even compared to the small scars of conventional laparoscopy. Recovery is similar: return to daily activities in 5 to 7 days. If you are looking for the best cosmetic option for your laparoscopic surgery, single-port surgery is your solution. Schedule your consultation today.',
    benefits: [
      {
        title: 'Invisible Scar',
        description: 'The incision is made inside the navel, remaining completely hidden in the natural skin fold. No visible marks.',
        icon: '✨',
      },
      {
        title: 'Same Surgical Results',
        description: 'Efficacy and safety comparable to conventional laparoscopy, with the cosmetic advantage of a single incision.',
        icon: '🎯',
      },
      {
        title: 'Less Trauma',
        description: 'A single incision instead of 3 to 4, which may translate into less postoperative pain in selected procedures.',
        icon: '💪',
      },
      {
        title: 'Early Discharge',
        description: 'Outpatient procedure in most cases, with return home the same day or within 24 hours.',
        icon: '🏠',
      },
    ],
    candidates: [
      'Patients with cholelithiasis (gallstones) requiring cholecystectomy who place high priority on cosmetic results with an invisible scar.',
      'Individuals with uncomplicated acute appendicitis who are candidates for laparoscopic appendectomy and prefer the single-incision approach.',
      'Patients with small to moderately sized umbilical hernia who benefit from simultaneous repair through the umbilical access.',
      'Adults with appropriate BMI (generally below 40) without extensive prior abdominal surgeries that may complicate the technique.',
      'Patients who, after being informed of the advantages and limitations of single-port surgery, express preference for this approach over conventional laparoscopy.',
    ],
    recovery: [
      {
        period: 'First week',
        description: 'Discharge the same day or within 24 hours. Mild to moderate pain in the umbilical area, manageable with oral analgesics. Care of the umbilical incision keeping it clean and dry. Walks from the first day. Free or soft diet depending on the procedure performed.',
      },
      {
        period: '2–4 weeks',
        description: 'Return to daily and sedentary work activities between days 5 and 10. The umbilical scar heals quickly and becomes virtually invisible within a few weeks. Avoid lifting heavy objects for 2 to 3 weeks.',
      },
      {
        period: '1–3 months',
        description: 'Complete recovery without restrictions. The umbilical scar remains completely hidden inside the natural fold of the navel. Cosmetic results are typically notable from the first weeks.',
      },
      {
        period: '3–6 months',
        description: 'Definitive cosmetic result: no visible scars. Full physical activity without restrictions. Routine medical follow-up according to the procedure performed.',
      },
    ],
    costRange: '',
    duration: '45 min - 2 hours',
    hospitalStay: 'Outpatient - 1 night',
    icon: '🔘',
    faq: [
      {
        question: 'Is single-port surgery as safe as conventional laparoscopy?',
        answer: 'Yes, in the hands of a surgeon with specific training in the technique, single-port surgery offers safety and efficacy results comparable to conventional laparoscopy for the procedures in which it is indicated. The learning curve is more demanding due to the limitations of instrument triangulation in a reduced space.',
      },
      {
        question: 'In which procedures can single-port surgery be applied?',
        answer: 'The most frequent are laparoscopic cholecystectomy (gallbladder removal), laparoscopic appendectomy, umbilical hernia repair, and some bariatric and gynecological procedures. Not all laparoscopic procedures are adaptable to single-port: viability depends on the patient\'s anatomy, BMI, surgical history, and expected complexity.',
      },
      {
        question: 'Is the cosmetic result really different from conventional laparoscopy?',
        answer: 'Yes, notably. Conventional laparoscopy leaves 3 to 4 small scars (5–12 mm) distributed across the abdomen. Single-port surgery leaves a single scar inside the navel, completely hidden in the natural skin fold, being virtually imperceptible. It is the surgical approach with the best cosmetic result currently available for these procedures.',
      },
      {
        question: 'How do I know if I am a candidate for single-port or conventional laparoscopy?',
        answer: 'Dr. Ruvalcaba performs an individualized evaluation that considers the type of procedure needed, the patient\'s BMI, prior abdominal surgeries, anatomy, and expected complexity. In some cases, conventional laparoscopy may be safer or more technically appropriate. The final decision is made during the preoperative consultation.',
      },
      {
        question: 'How much does single-port surgery cost in Merida?',
        answer: 'The cost is similar to conventional laparoscopy with a small difference for the special access device. Dr. Ruvalcaba provides a detailed quote during the consultation. Some medical insurance plans cover the procedure when the surgical indication is well documented. Contact the office for cost information.',
      },
      {
        question: 'How long does single-port surgery take?',
        answer: 'Duration is similar to conventional laparoscopy: 45 minutes to 2 hours depending on the procedure. Single-port cholecystectomy takes 45-75 minutes; appendectomy takes 30 to 60 minutes; umbilical hernia repair takes 1 to 1.5 hours. All procedures are performed under general anesthesia with same-day discharge.',
      },
      {
        question: 'When can I return to work after single-port surgery?',
        answer: 'Recovery is comparable to conventional laparoscopy: for sedentary activities, between days 5 and 7 postoperatively. For moderate physical activities, 2 to 3 weeks. The umbilical scar heals quickly and becomes virtually invisible within a few weeks.',
      },
    ],
    relevantSpecialty: 'General Surgery',
    bodyLocation: 'Abdomen',
    imagePath: '/images/procedures/cirugia-puerto-unico.webp',
    preparation: 'Fasting for 8 hours prior to surgery. Preoperative studies vary by the specific procedure to be performed. For cholecystectomy: ultrasound and blood tests. For appendectomy: ultrasound or CT scan. For umbilical hernia: physical examination and in some cases abdominal wall ultrasound.',
  },
]

// =============================================================================
// PROCEDURES — Locale map
// =============================================================================
const PROCEDURES_BY_LOCALE: Record<Locale, Procedure[]> = {
  es: PROCEDURES_ES,
  en: PROCEDURES_EN,
}

export function getProcedures(locale: Locale = 'es'): Procedure[] {
  return PROCEDURES_BY_LOCALE[locale]
}

export function getProcedureBySlug(
  slug: string,
  locale: Locale = 'es',
): Procedure | undefined {
  return getProcedures(locale).find((p) => p.slug === slug)
}

// =============================================================================
// BARIATRIC SUB-PROCEDURES — Spanish
// =============================================================================
const BARIATRIC_SUB_PROCEDURES_ES: SubProcedure[] = [
  {
    title: 'Manga Gástrica',
    description:
      'Reducción del 80% del estómago para limitar la ingesta y disminuir la hormona del hambre.',
    icon: '🔬',
    slug: '/manga-gastrica-merida',
  },
  {
    title: 'Bypass Gástrico',
    description:
      'Procedimiento mixto restrictivo-malabsortivo, estándar de oro para obesidad severa y diabetes tipo 2.',
    icon: '⚕️',
    slug: '/bypass-gastrico-merida',
  },
  {
    title: 'Balón Intragástrico',
    description:
      'Dispositivo endoscópico sin cirugía para pérdida de peso en sobrepeso y obesidad leve a moderada.',
    icon: '🎈',
    slug: '/balon-intragastrico',
  },
  {
    title: 'Bipartición de Tránsito Intestinal',
    description:
      'Técnica que combina manga gástrica con derivación intestinal parcial para optimizar resultados metabólicos.',
    icon: '🔄',
    slug: '/biparticion-transito-intestinal',
  },
  {
    title: 'SADI-S',
    description:
      'Derivación duodeno-ileal de anastomosis simple con manga gástrica para obesidad severa y diabetes.',
    icon: '⚡',
    slug: '/sadi-s',
  },
  {
    title: 'Cirugía de Revisión',
    description:
      'Corrección de procedimientos bariátricos previos con resultados insuficientes o complicaciones.',
    icon: '🔧',
    slug: '/cirugia-revision-bariatrica',
  },
  {
    title: 'Cirugía de Conversión',
    description:
      'Conversión de un tipo de cirugía bariátrica a otro para mejorar resultados.',
    icon: '🔀',
    slug: '/cirugia-conversion-bariatrica',
  },
]

// =============================================================================
// BARIATRIC SUB-PROCEDURES — English
// =============================================================================
const BARIATRIC_SUB_PROCEDURES_EN: SubProcedure[] = [
  {
    title: 'Gastric Sleeve',
    description:
      '80% stomach reduction to limit food intake and decrease the hunger hormone.',
    icon: '🔬',
    slug: '/manga-gastrica-merida',
  },
  {
    title: 'Gastric Bypass',
    description:
      'Combined restrictive-malabsorptive procedure, the gold standard for severe obesity and type 2 diabetes.',
    icon: '⚕️',
    slug: '/bypass-gastrico-merida',
  },
  {
    title: 'Intragastric Balloon',
    description:
      'Non-surgical endoscopic device for weight loss in overweight and mild to moderate obesity.',
    icon: '🎈',
    slug: '/balon-intragastrico',
  },
  {
    title: 'Intestinal Transit Bipartition',
    description:
      'Technique combining gastric sleeve with partial intestinal bypass to optimize metabolic outcomes.',
    icon: '🔄',
    slug: '/biparticion-transito-intestinal',
  },
  {
    title: 'SADI-S',
    description:
      'Single-anastomosis duodeno-ileal bypass with sleeve gastrectomy for severe obesity and diabetes.',
    icon: '⚡',
    slug: '/sadi-s',
  },
  {
    title: 'Revision Surgery',
    description:
      'Correction of prior bariatric procedures with insufficient results or complications.',
    icon: '🔧',
    slug: '/cirugia-revision-bariatrica',
  },
  {
    title: 'Conversion Surgery',
    description:
      'Conversion from one type of bariatric surgery to another to improve outcomes.',
    icon: '🔀',
    slug: '/cirugia-conversion-bariatrica',
  },
]

// =============================================================================
// BARIATRIC SUB-PROCEDURES — Locale map
// =============================================================================
const BARIATRIC_SUB_PROCEDURES_BY_LOCALE: Record<Locale, SubProcedure[]> = {
  es: BARIATRIC_SUB_PROCEDURES_ES,
  en: BARIATRIC_SUB_PROCEDURES_EN,
}

export function getBariatricSubProcedures(
  locale: Locale = 'es',
): SubProcedure[] {
  return BARIATRIC_SUB_PROCEDURES_BY_LOCALE[locale]
}

// =============================================================================
// SUB-PROCEDURES (Minimally Invasive Surgery) — Spanish
// =============================================================================
const SUB_PROCEDURES_ES: SubProcedure[] = [
  {
    title: 'Colecistectomía Laparoscópica',
    description:
      'Extirpación de la vesícula biliar mediante laparoscopia para tratar cálculos biliares, pólipos vesiculares y colecistitis. Procedimiento ambulatorio con recuperación en 5 a 7 días y mínimo dolor postoperatorio.',
    icon: '🫁',
    slug: '/colecistectomia-laparoscopica',
  },
  {
    title: 'Apendicectomía Laparoscópica',
    description:
      'Extirpación del apéndice cecal por vía laparoscópica en casos de apendicitis aguda. Permite una recuperación más rápida, menor riesgo de infección de herida y regreso a la actividad normal en pocos días.',
    icon: '⚡',
    slug: '/apendicectomia-laparoscopica',
  },
  {
    title: 'Funduplicatura',
    description:
      'Cirugía antirreflujo laparoscópica (funduplicatura de Nissen) para el tratamiento definitivo de la enfermedad por reflujo gastroesofágico severo. Envuelve el fondo gástrico alrededor del esófago inferior para restaurar la barrera antirreflujo de forma permanente.',
    icon: '🔧',
    slug: '/funduplicatura-antirreflujo',
  },
  {
    title: 'Cirugía para Acalasia',
    description:
      'Miotomía de Heller laparoscópica para trastorno de motilidad esofágica.',
    icon: '🫁',
    slug: '/cirugia-acalasia',
  },
  {
    title: 'Cirugía de Hernias Ventrales',
    description:
      'Reparación laparoscópica de hernias de la pared abdominal anterior con malla.',
    icon: '🩹',
    slug: '/cirugia-hernias-ventrales',
  },
  {
    title: 'Cirugía de Hernias Inguinales',
    description: 'Hernioplastía inguinal laparoscópica con técnica TEP o TAPP.',
    icon: '🩹',
    slug: '/cirugia-hernias-inguinales',
  },
  {
    title: 'Cirugía por Puerto Único',
    description:
      'Técnica laparoscópica avanzada que realiza el procedimiento a través de una sola incisión, generalmente en el ombligo, para un resultado estético superior.',
    icon: '🔘',
    slug: '/cirugia-puerto-unico',
  },
]

// =============================================================================
// SUB-PROCEDURES (Minimally Invasive Surgery) — English
// =============================================================================
const SUB_PROCEDURES_EN: SubProcedure[] = [
  {
    title: 'Laparoscopic Cholecystectomy',
    description:
      'Gallbladder removal via laparoscopy to treat gallstones, gallbladder polyps, and cholecystitis. Outpatient procedure with recovery in 5 to 7 days and minimal postoperative pain.',
    icon: '🫁',
    slug: '/colecistectomia-laparoscopica',
  },
  {
    title: 'Laparoscopic Appendectomy',
    description:
      'Laparoscopic removal of the cecal appendix in cases of acute appendicitis. Allows for faster recovery, lower wound infection risk, and return to normal activity within days.',
    icon: '⚡',
    slug: '/apendicectomia-laparoscopica',
  },
  {
    title: 'Fundoplication',
    description:
      'Laparoscopic anti-reflux surgery (Nissen fundoplication) for the definitive treatment of severe gastroesophageal reflux disease. Wraps the gastric fundus around the lower esophagus to permanently restore the anti-reflux barrier.',
    icon: '🔧',
    slug: '/funduplicatura-antirreflujo',
  },
  {
    title: 'Achalasia Surgery',
    description:
      'Laparoscopic Heller myotomy for esophageal motility disorder.',
    icon: '🫁',
    slug: '/cirugia-acalasia',
  },
  {
    title: 'Ventral Hernia Surgery',
    description:
      'Laparoscopic repair of anterior abdominal wall hernias with mesh.',
    icon: '🩹',
    slug: '/cirugia-hernias-ventrales',
  },
  {
    title: 'Inguinal Hernia Surgery',
    description: 'Laparoscopic inguinal hernioplasty using TEP or TAPP technique.',
    icon: '🩹',
    slug: '/cirugia-hernias-inguinales',
  },
  {
    title: 'Single-Port Surgery',
    description:
      'Advanced laparoscopic technique that performs the procedure through a single incision, usually in the navel, for a superior cosmetic result.',
    icon: '🔘',
    slug: '/cirugia-puerto-unico',
  },
]

// =============================================================================
// SUB-PROCEDURES — Locale map
// =============================================================================
const SUB_PROCEDURES_BY_LOCALE: Record<Locale, SubProcedure[]> = {
  es: SUB_PROCEDURES_ES,
  en: SUB_PROCEDURES_EN,
}

export function getSubProcedures(locale: Locale = 'es'): SubProcedure[] {
  return SUB_PROCEDURES_BY_LOCALE[locale]
}
