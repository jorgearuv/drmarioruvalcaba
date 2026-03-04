import { Procedure, SubProcedure } from '@/types'

export const PROCEDURES: Procedure[] = [
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
      'El balón intragástrico consiste en una esfera de silicón grado médico que se introduce desinflada por vía oral mediante un endoscopio flexible y, una vez dentro del estómago, se llena con solución salina estéril teñida con azul de metileno (entre 400 y 700 ml según el modelo). El balón ocupa aproximadamente un tercio del volumen gástrico, lo que induce una sensación de plenitud y saciedad con cantidades menores de alimento. No requiere incisiones y el procedimiento completo dura entre 20 y 30 minutos bajo sedación ligera (en la mayoría de los casos). El paciente regresa a casa el mismo día.\n\nEl balón permanece en el estómago durante 6 a 12 meses (dependiendo del tipo de dispositivo) y se retira por vía endoscópica de manera similar a como fue colocado. Durante este período, el paciente trabaja con un equipo multidisciplinario —nutriólogo, psicólogo y médico bariatra— para reeducar sus hábitos alimenticios y establecer una rutina de actividad física. La pérdida de peso esperada es del 10% al 15% del peso corporal total (o entre el 30% y el 40% del exceso de peso). El balón intragástrico es ideal para pacientes con sobrepeso u obesidad grado I (IMC entre 27 y 35) que no califican o no desean someterse a cirugía bariátrica, así como para pacientes con obesidad severa como terapia puente antes de un procedimiento quirúrgico definitivo.',
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
]

// ---------------------------------------------------------------------------
// Sub-procedimientos bariátricos
// ---------------------------------------------------------------------------
export const BARIATRIC_SUB_PROCEDURES: SubProcedure[] = [
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

// ---------------------------------------------------------------------------
// Sub-procedimientos (Cirugía de Mínima Invasión)
// ---------------------------------------------------------------------------
export const SUB_PROCEDURES: SubProcedure[] = [
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

// ---------------------------------------------------------------------------
// Helper
// ---------------------------------------------------------------------------
export function getProcedureBySlug(slug: string): Procedure | undefined {
  return PROCEDURES.find(procedure => procedure.slug === slug)
}
