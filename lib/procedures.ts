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
  },
  {
    title: 'Bypass Gástrico',
    description:
      'Procedimiento mixto restrictivo-malabsortivo, estándar de oro para obesidad severa y diabetes tipo 2.',
    icon: '⚕️',
  },
  {
    title: 'Balón Intragástrico',
    description:
      'Dispositivo endoscópico sin cirugía para pérdida de peso en sobrepeso y obesidad leve a moderada.',
    icon: '🎈',
  },
  {
    title: 'Bipartición de Tránsito Intestinal',
    description:
      'Técnica que combina manga gástrica con derivación intestinal parcial para optimizar resultados metabólicos.',
    icon: '🔄',
  },
  {
    title: 'SADI-S',
    description:
      'Derivación duodeno-ileal de anastomosis simple con manga gástrica para obesidad severa y diabetes.',
    icon: '⚡',
  },
  {
    title: 'Cirugía de Revisión',
    description:
      'Corrección de procedimientos bariátricos previos con resultados insuficientes o complicaciones.',
    icon: '🔧',
  },
  {
    title: 'Cirugía de Conversión',
    description:
      'Conversión de un tipo de cirugía bariátrica a otro para mejorar resultados.',
    icon: '🔀',
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
  },
  {
    title: 'Gastric Bypass',
    description:
      'Combined restrictive-malabsorptive procedure, the gold standard for severe obesity and type 2 diabetes.',
    icon: '⚕️',
  },
  {
    title: 'Intragastric Balloon',
    description:
      'Non-surgical endoscopic device for weight loss in overweight and mild to moderate obesity.',
    icon: '🎈',
  },
  {
    title: 'Intestinal Transit Bipartition',
    description:
      'Technique combining gastric sleeve with partial intestinal bypass to optimize metabolic outcomes.',
    icon: '🔄',
  },
  {
    title: 'SADI-S',
    description:
      'Single-anastomosis duodeno-ileal bypass with sleeve gastrectomy for severe obesity and diabetes.',
    icon: '⚡',
  },
  {
    title: 'Revision Surgery',
    description:
      'Correction of prior bariatric procedures with insufficient results or complications.',
    icon: '🔧',
  },
  {
    title: 'Conversion Surgery',
    description:
      'Conversion from one type of bariatric surgery to another to improve outcomes.',
    icon: '🔀',
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
  },
  {
    title: 'Apendicectomía Laparoscópica',
    description:
      'Extirpación del apéndice cecal por vía laparoscópica en casos de apendicitis aguda. Permite una recuperación más rápida, menor riesgo de infección de herida y regreso a la actividad normal en pocos días.',
    icon: '⚡',
  },
  {
    title: 'Funduplicatura',
    description:
      'Cirugía antirreflujo laparoscópica (funduplicatura de Nissen) para el tratamiento definitivo de la enfermedad por reflujo gastroesofágico severo. Envuelve el fondo gástrico alrededor del esófago inferior para restaurar la barrera antirreflujo de forma permanente.',
    icon: '🔧',
  },
  {
    title: 'Cirugía para Acalasia',
    description:
      'Miotomía de Heller laparoscópica para trastorno de motilidad esofágica.',
    icon: '🫁',
  },
  {
    title: 'Cirugía de Hernias Ventrales',
    description:
      'Reparación laparoscópica de hernias de la pared abdominal anterior con malla.',
    icon: '🩹',
  },
  {
    title: 'Cirugía de Hernias Inguinales',
    description: 'Hernioplastía inguinal laparoscópica con técnica TEP o TAPP.',
    icon: '🩹',
  },
  {
    title: 'Cirugía por Puerto Único',
    description:
      'Técnica laparoscópica avanzada que realiza el procedimiento a través de una sola incisión, generalmente en el ombligo, para un resultado estético superior.',
    icon: '🔘',
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
  },
  {
    title: 'Laparoscopic Appendectomy',
    description:
      'Laparoscopic removal of the cecal appendix in cases of acute appendicitis. Allows for faster recovery, lower wound infection risk, and return to normal activity within days.',
    icon: '⚡',
  },
  {
    title: 'Fundoplication',
    description:
      'Laparoscopic anti-reflux surgery (Nissen fundoplication) for the definitive treatment of severe gastroesophageal reflux disease. Wraps the gastric fundus around the lower esophagus to permanently restore the anti-reflux barrier.',
    icon: '🔧',
  },
  {
    title: 'Achalasia Surgery',
    description:
      'Laparoscopic Heller myotomy for esophageal motility disorder.',
    icon: '🫁',
  },
  {
    title: 'Ventral Hernia Surgery',
    description:
      'Laparoscopic repair of anterior abdominal wall hernias with mesh.',
    icon: '🩹',
  },
  {
    title: 'Inguinal Hernia Surgery',
    description: 'Laparoscopic inguinal hernioplasty using TEP or TAPP technique.',
    icon: '🩹',
  },
  {
    title: 'Single-Port Surgery',
    description:
      'Advanced laparoscopic technique that performs the procedure through a single incision, usually in the navel, for a superior cosmetic result.',
    icon: '🔘',
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
