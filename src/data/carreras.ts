export interface Career {
  key: string;
  title: string;
  category: 'tech' | 'salud' | 'hum' | 'neg';
  categoryLabel: string;
  basePension: number;
  baseMatricula: number;
  years: number;
  description: string;
  tags: string[];
  semesters: Record<string, string[]>;
}

export const careersData: Career[] = [
  // Tecnología e Ingeniería
  {
    key: "sistemas",
    title: "Ingeniería de Sistemas",
    category: "tech",
    categoryLabel: "Tecnología e Ingeniería",
    basePension: 1200,
    baseMatricula: 450,
    years: 5,
    description: "Forma parte de la revolución tecnológica. Especialízate en computación, redes informáticas e infraestructura inteligente.",
    tags: ["Redes", "Base de Datos", "Servidores"],
    semesters: {
      "Ciclo I": ["Introducción a la Ingeniería de Sistemas", "Algoritmos y Estructura de Datos", "Cálculo I", "Matemática Discreta"],
      "Ciclo II": ["Programación Orientada a Objetos", "Álgebra Lineal", "Cálculo II", "Física General"],
      "Ciclo III": ["Estructura de Datos Avanzada", "Base de Datos I", "Arquitectura de Computadoras", "Análisis y Diseño de Sistemas"],
      "Ciclo IV": ["Sistemas Operativos", "Base de Datos II", "Ingeniería de Requerimientos", "Estadística Aplicada"],
      "Ciclo V": ["Redes y Conectividad I", "Administración de Servidores", "Investigación Operativa", "Metodología de la Investigación"],
      "Ciclo VI": ["Redes y Conectividad II", "Seguridad de la Información", "Gestión de Servicios de TI", "Desarrollo de Sistemas de Información"]
    }
  },
  {
    key: "software",
    title: "Ingeniería de Software",
    category: "tech",
    categoryLabel: "Tecnología e Ingeniería",
    basePension: 1150,
    baseMatricula: 450,
    years: 5,
    description: "Domina el ciclo de vida del software. Especialízate en metodologías ágiles de codificación, arquitectura en la nube y desarrollo móvil.",
    tags: ["Programación", "DevOps", "Arquitectura"],
    semesters: {
      "Ciclo I": ["Fundamentos de Programación", "Introducción a la Ingeniería de Software", "Cálculo I", "Álgebra"],
      "Ciclo II": ["Estructuras de Datos", "Programación Web Frontend", "Matemáticas para Computación", "Cálculo II"],
      "Ciclo III": ["Patrones de Diseño de Software", "Programación Backend", "Bases de Datos Relacionales", "Metodologías Ágiles (Scrum)"],
      "Ciclo IV": ["Arquitectura de Software", "Pruebas y Calidad de Software (QA)", "Desarrollo Cloud & Serverless", "Ingeniería Web Completa"],
      "Ciclo V": ["Desarrollo de Aplicaciones Móviles I", "Integración y Entrega Continua (CI/CD)", "Diseño de Interfaces de Usuario (UX/UI)", "Seguridad de Software"],
      "Ciclo VI": ["Desarrollo de Aplicaciones Móviles II", "Arquitecturas Microservicios", "Gestión de Proyectos de Software", "Proyecto de Software I"]
    }
  },
  {
    key: "datos",
    title: "Ciencia de Datos e Inteligencia Artificial",
    category: "tech",
    categoryLabel: "Tecnología e Ingeniería",
    basePension: 1300,
    baseMatricula: 450,
    years: 5,
    description: "Analiza volúmenes de datos masivos. Diseña e implementa redes neuronales artificiales y modelos predictivos inteligentes.",
    tags: ["Big Data", "Machine Learning", "Python"],
    semesters: {
      "Ciclo I": ["Introducción a la IA", "Programación en Python para Datos", "Cálculo I", "Estadística Descriptiva"],
      "Ciclo II": ["Álgebra Lineal Avanzada", "Estructura de Datos y Algoritmos", "Cálculo II", "Estadística Inferencial"],
      "Ciclo III": ["Bases de Datos NoSQL y SQL", "Fundamentos de Machine Learning", "Minería de Datos", "Visualización de Datos"],
      "Ciclo IV": ["Modelos Predictivos", "Redes Neuronales y Deep Learning", "Procesamiento de Lenguaje Natural", "Big Data & MLOps"],
      "Ciclo V": ["Visión Artificial", "Optimización Matemática", "Gobernanza y Ética de Datos", "Arquitectura Big Data"],
      "Ciclo VI": ["Procesamiento en Tiempo Real", "Sistemas de Recomendación", "Proyecto de IA y Datos I", "Seminario de Tesis I"]
    }
  },
  {
    key: "civil",
    title: "Ingeniería Civil",
    category: "tech",
    categoryLabel: "Tecnología e Ingeniería",
    basePension: 1250,
    baseMatricula: 450,
    years: 5,
    description: "Diseña, construye y supervisa infraestructuras sostenibles como edificios, puentes, carreteras y sistemas hidráulicos.",
    tags: ["Estructuras", "Geotecnia", "Construcción"],
    semesters: {
      "Ciclo I": ["Introducción a la Ingeniería Civil", "Dibujo de Ingeniería (CAD)", "Cálculo I", "Química Aplicada"],
      "Ciclo II": ["Topografía General", "Física I", "Cálculo II", "Álgebra Lineal"],
      "Ciclo III": ["Mecánica Vectorial (Estática)", "Geología Aplicada", "Tecnología del Concreto", "Cálculo III"],
      "Ciclo IV": ["Resistencia de Materiales", "Mecánica de Fluidos", "Topografía Automatizada (GIS)", "Dinámica"],
      "Ciclo V": ["Análisis Estructural I", "Mecánica de Suelos I", "Hidrología General", "Ingeniería de Transportes"],
      "Ciclo VI": ["Análisis Estructural II", "Mecánica de Suelos II", "Abastecimiento de Agua y Alcantarillado", "Tecnología de la Construcción"]
    }
  },
  {
    key: "industrial",
    title: "Ingeniería Industrial",
    category: "tech",
    categoryLabel: "Tecnología e Ingeniería",
    basePension: 1100,
    baseMatricula: 450,
    years: 5,
    description: "Optimiza procesos productivos y de servicios de las empresas, mejorando la eficiencia, calidad y rentabilidad industrial.",
    tags: ["Procesos", "Calidad", "Logística"],
    semesters: {
      "Ciclo I": ["Introducción a la Ingeniería Industrial", "Química General", "Cálculo I", "Geometría Descriptiva"],
      "Ciclo II": ["Física I", "Cálculo II", "Álgebra Lineal", "Dibujo Técnico"],
      "Ciclo III": ["Física II", "Termodinámica", "Estadística y Probabilidades", "Contabilidad de Costos"],
      "Ciclo IV": ["Mecánica de Sólidos", "Procesos de Manufactura", "Estadística Aplicada", "Ingeniería Económica"],
      "Ciclo V": ["Investigación de Operaciones I", "Estudio del Trabajo", "Gestión de la Calidad", "Organización y Métodos"],
      "Ciclo VI": ["Investigación de Operaciones II", "Planeamiento y Control de Operaciones", "Seguridad y Salud Ocupacional", "Logística Integrada"]
    }
  },

  // Ciencias de la Salud
  {
    key: "medicina",
    title: "Medicina Humana",
    category: "salud",
    categoryLabel: "Ciencias de la Salud",
    basePension: 2200,
    baseMatricula: 600,
    years: 7,
    description: "Formación clínica integral bajo los más altos estándares científicos. Diagnostica y promueve la salud pública y quirúrgica.",
    tags: ["Clínica", "Cirugía", "Anatomía"],
    semesters: {
      "Ciclo I": ["Biología Celular y Molecular", "Química Médica", "Anatomía Humana I", "Primeros Auxilios"],
      "Ciclo II": ["Histología y Embriología", "Anatomía Humana II", "Fisiología Médica I", "Biofísica"],
      "Ciclo III": ["Fisiología Médica II", "Bioquímica Clínica", "Microbiología y Parasitología", "Psicología Médica"],
      "Ciclo IV": ["Farmacología Básica", "Patología General", "Fisiopatología Humana", "Semióloga Médica"],
      "Ciclo V": ["Farmacología Clínica", "Medicina Preventiva y Salud Pública", "Nutriología Médica", "Epidemiología"],
      "Ciclo VI": ["Medicina Interna I", "Cirugía General I", "Infectología Médica", "Radiología Diagnóstica"]
    }
  },
  {
    key: "odontologia",
    title: "Odontología",
    category: "salud",
    categoryLabel: "Ciencias de la Salud",
    basePension: 1100,
    baseMatricula: 380,
    years: 5,
    description: "Cuida de la salud estomatológica integral y realiza tratamientos restaurativos y maxilofaciales con técnicas de vanguardia.",
    tags: ["Estética", "Cirugía Bucal", "Salud Oral"],
    semesters: {
      "Ciclo I": ["Anatomía Dental", "Histología Humana", "Biología General", "Introducción a la Odontología"],
      "Ciclo II": ["Embriología y Genética", "Fisiología Humana", "Biomateriales Dentales", "Odontopediatría I"],
      "Ciclo III": ["Radiología Odontológica", "Microbiología Oral", "Patología Estomatológica", "Periodoncia I"],
      "Ciclo IV": ["Farmacología Terapéutica", "Operatoria Dental", "Endodoncia I", "Anestesiología Oral"],
      "Ciclo V": ["Prótesis Fija I", "Cirugía Bucal I", "Odontopediatría II", "Ortodoncia I"],
      "Ciclo VI": ["Prótesis Fija II", "Cirugía Bucal II", "Endodoncia II", "Periodoncia II"]
    }
  },
  {
    key: "psicologia",
    title: "Psicología",
    category: "salud",
    categoryLabel: "Ciencias de la Salud",
    basePension: 900,
    baseMatricula: 380,
    years: 5,
    description: "Investiga los procesos cognitivos y el comportamiento humano. Lidera diagnósticos e intervenciones clínicas de salud mental.",
    tags: ["Clínica", "Cognitiva", "Terapia"],
    semesters: {
      "Ciclo I": ["Introducción a la Psicología", "Historia de la Psicología", "Procesos Cognitivos I", "Bases Biológicas del Comportamiento"],
      "Ciclo II": ["Procesos Cognitivos II", "Psicología del Desarrollo I", "Estadística Aplicada a Ciencias Sociales", "Neuroanatomía Funcional"],
      "Ciclo III": ["Psicología de la Personalidad", "Psicología Social", "Psicología del Desarrollo II", "Psicometría y Medición"],
      "Ciclo IV": ["Psicopatología General", "Técnicas de la Entrevista Psicológica", "Métodos de Investigación", "Psicología Organizacional"],
      "Ciclo V": ["Psicopatología Clínica Infantil", "Terapia de Esquemas", "Psicodiagnóstico Proyectivo", "Problemas de Aprendizaje"],
      "Ciclo VI": ["Psicoterapia de Pareja y Familia", "Terapia Cognitivo Conductual", "Psicofarmacología Básica", "Internado Clínico I"]
    }
  },
  {
    key: "enfermeria",
    title: "Enfermería",
    category: "salud",
    categoryLabel: "Ciencias de la Salud",
    basePension: 800,
    baseMatricula: 320,
    years: 5,
    description: "Brinda cuidados de salud humanizados a pacientes en estado crítico y ambulatorio. Lidera prevención y cuidado integral.",
    tags: ["Salud Familiar", "Cuidados Críticos", "Pediatría"],
    semesters: {
      "Ciclo I": ["Anatomía y Fisiología", "Fundamentos de Enfermería I", "Química Orgánica", "Salud y Sociedad"],
      "Ciclo II": ["Fundamentos de Enfermería II", "Nutrición y Dietoterapia", "Farmacología en Enfermería", "Bioestadística"],
      "Ciclo III": ["Enfermería en Salud de la Mujer", "Enfermería del Niño y Adolescente", "Epidemiología", "Enfermería Comunitaria"],
      "Ciclo IV": ["Enfermería del Adulto I", "Salud Mental y Psiquiatría", "Ética y Deontología", "Administración en Servicios de Salud"],
      "Ciclo V": ["Enfermería del Adulto II (Crítico)", "Enfermería en Emergencias y Desastres", "Bioética", "Investigación en Enfermería"],
      "Ciclo VI": ["Enfermería en Geriatría", "Salud Ocupacional en Enfermería", "Proyecto de Tesis I", "Práctica Comunitaria"]
    }
  },
  {
    key: "nutricion",
    title: "Nutrición y Dietética",
    category: "salud",
    categoryLabel: "Ciencias de la Salud",
    basePension: 850,
    baseMatricula: 320,
    years: 5,
    description: "Promueve el bienestar y la prevención de enfermedades mediante el diseño de planes alimentarios balanceados y personalizados.",
    tags: ["Alimentación", "Metabolismo", "Salud Pública"],
    semesters: {
      "Ciclo I": ["Biología General", "Química General", "Introducción a la Nutrición", "Anatomía Funcional"],
      "Ciclo II": ["Bioquímica de los Alimentos", "Fisiología de la Nutrición", "Bromatología", "Estadística Aplicada"],
      "Ciclo III": ["Nutrición en el Ciclo de Vida", "Evaluación del Estado Nutricional", "Dietética General", "Fisiopatología Aplicada"],
      "Ciclo IV": ["Nutrición Clínica", "Terapia Nutricional", "Gestión de Servicios de Alimentación", "Educación Alimentaria"],
      "Ciclo V": ["Nutrición Deportiva", "Toxicología Alimentaria", "Planificación de Menús", "Salud y Nutrición Pública"],
      "Ciclo VI": ["Soporte Nutricional Enteral y Parenteral", "Políticas de Alimentación Nacional", "Proyecto Nutricional I", "Práctica Hospitalaria I"]
    }
  },

  // Derecho y Humanidades
  {
    key: "derecho",
    title: "Derecho",
    category: "hum",
    categoryLabel: "Derecho y Humanidades",
    basePension: 1050,
    baseMatricula: 380,
    years: 6,
    description: "Ejercita la defensa de la justicia y los derechos fundamentales con sólidos conocimientos corporativos, penales y constitucionales.",
    tags: ["Civil", "Penal", "Litigación"],
    semesters: {
      "Ciclo I": ["Introducción al Derecho", "Derecho Romano", "Teoría del Estado", "Sociología Jurídica"],
      "Ciclo II": ["Derecho Civil I (Personas)", "Derecho Constitucional I", "Acto Jurídico", "Historia del Derecho"],
      "Ciclo III": ["Derecho Penal I (General)", "Derecho de Obligaciones", "Derecho Constitucional II", "Derecho de Familia"],
      "Ciclo IV": ["Derecho Penal II (Especial)", "Derecho de Contratos", "Derecho Administrativo", "Argumentación Jurídica"],
      "Ciclo V": ["Derecho Procesal Civil I", "Derecho Procesal Penal I", "Derecho Comercial (Sociedades)", "Derecho Internacional Público"],
      "Ciclo VI": ["Derecho Procesal Civil II", "Derecho Procesal Penal II", "Derecho Laboral Colectivo", "Derecho Tributario I"]
    }
  },
  {
    key: "periodismo",
    title: "Periodismo y Comunicación Audiovisual",
    category: "hum",
    categoryLabel: "Derecho y Humanidades",
    basePension: 850,
    baseMatricula: 320,
    years: 5,
    description: "Crea contenidos digitales de alto impacto social y maneja cámaras, guiones y edición técnica bajo estándares éticos.",
    tags: ["Medios Digitales", "Cámara", "Redacción"],
    semesters: {
      "Ciclo I": ["Introducción a la Comunicación", "Redacción Periodística I", "Lenguaje de la Imagen", "Historia Contemporánea"],
      "Ciclo II": ["Redacción Periodística II", "Taller de Fotografía", "Lenguaje Radial", "Géneros Informativos"],
      "Ciclo III": ["Periodismo de Investigación", "Taller de Producción Televisiva", "Comunicación Digital", "Teoría de la Opinión Pública"],
      "Ciclo IV": ["Periodismo Transmedia", "Edición y Montaje Audiovisual", "Ética y Legislación de Prensa", "Diseño Editorial"],
      "Ciclo V": ["Fotoperiodismo", "Guion Audiovisual", "Comunicación Corporativa y RRPP", "Marketing de Medios"],
      "Ciclo VI": ["Producción de Documentales", "Periodismo de Datos", "Proyecto Periodístico I", "Seminario de Medios Digitales"]
    }
  },
  {
    key: "educacion",
    title: "Educación Primaria",
    category: "hum",
    categoryLabel: "Derecho y Humanidades",
    basePension: 700,
    baseMatricula: 320,
    years: 5,
    description: "Lidera la formación pedagógica y el aprendizaje cognitivo en niños, especializándote en estimulación del talento infantil.",
    tags: ["Pedagogía", "Didáctica", "Infantil"],
    semesters: {
      "Ciclo I": ["Introducción a las Ciencias de la Educación", "Psicología del Aprendizaje", "Teoría Curricular I", "Desarrollo Infantil"],
      "Ciclo II": ["Didáctica General", "Teoría Curricular II", "Psicopedagogía", "Taller de Expresión Oral y Corporal"],
      "Ciclo III": ["Didáctica de la Matemática", "Didáctica de la Comunicación", "Evaluación del Aprendizaje", "Materiales Educativos"],
      "Ciclo IV": ["Didáctica de las Ciencias Sociales", "Didáctica de Ciencia y Ambiente", "Educación Inclusiva y NEE", "Práctica Preprofesional I"],
      "Ciclo V": ["Didáctica del Arte y la Música", "Didáctica de la Psicomotricidad", "Gestión de Instituciones Educativas", "Práctica Preprofesional II"],
      "Ciclo VI": ["Orientación y Tutoría Educativa", "Educación Ambiental", "Investigación Pedagógica I", "Práctica Preprofesional III"]
    }
  },
  {
    key: "traduccion",
    title: "Traducción e Interpretación",
    category: "hum",
    categoryLabel: "Derecho y Humanidades",
    basePension: 800,
    baseMatricula: 320,
    years: 5,
    description: "Conecta culturas y empresas globales dominando la traducción escrita e interpretación simultánea en inglés, francés y portugués.",
    tags: ["Idiomas", "Lingüística", "Interpretación"],
    semesters: {
      "Ciclo I": ["Lengua Española (Gramática)", "Inglés I", "Introducción a la Traductología", "Cultura Contemporánea"],
      "Ciclo II": ["Inglés II", "Francés I", "Teoría de la Interpretación", "Lingüística General"],
      "Ciclo III": ["Traducción Directa I (Inglés)", "Francés II", "Terminología y Lexicografía", "Taller de Oratoria"],
      "Ciclo IV": ["Traducción Directa II (Inglés)", "Traducción Directa I (Francés)", "Traducción Técnica", "Herramientas CAT (Software)"],
      "Ciclo V": ["Traducción Comercial e Industrial", "Interpretación Consecutiva I", "Portugués I", "Traducción Literaria"],
      "Ciclo VI": ["Traducción Jurídica y Financiera", "Interpretación Simultánea I", "Portugués II", "Metodología de la Traducción"]
    }
  },
  {
    key: "arquitectura",
    title: "Arquitectura",
    category: "hum",
    categoryLabel: "Derecho y Humanidades",
    basePension: 1350,
    baseMatricula: 450,
    years: 5,
    description: "Diseña espacios urbanos y edificaciones habitables, sostenibles y estéticamente funcionales, combinando arte y tecnología estructural.",
    tags: ["Diseño", "Urbanismo", "Arte"],
    semesters: {
      "Ciclo I": ["Taller de Diseño Básico I", "Geometría Descriptiva Aplicada", "Dibujo Técnico de Arquitectura", "Historia del Arte y la Arquitectura I"],
      "Ciclo II": ["Taller de Diseño Básico II", "Física Aplicada a la Arquitectura", "Dibujo Arquitectónico Digital (2D/3D)", "Historia de la Arquitectura II"],
      "Ciclo III": ["Taller de Diseño III (Habitación)", "Estructuras I", "Materiales y Procesos Constructivos I", "Teoría de la Arquitectura I"],
      "Ciclo IV": ["Taller de Diseño IV (Equipamiento)", "Estructuras II", "Materiales y Procesos Constructivos II", "Instalaciones Sanitarias y Eléctricas"],
      "Ciclo V": ["Taller de Diseño V (Complejo)", "Estructuras III", "Topografía y Paisajismo", "Urbanismo I (Planificación)"],
      "Ciclo VI": ["Taller de Diseño VI (Urbano)", "Estructuras IV (Concreto)", "Tecnología Ambiental", "Urbanismo II (Diseño Urbano)"]
    }
  },

  // Negocios y Gestión
  {
    key: "administracion",
    title: "Administración de Empresas",
    category: "neg",
    categoryLabel: "Negocios y Gestión",
    basePension: 950,
    baseMatricula: 320,
    years: 5,
    description: "Lidera el crecimiento empresarial. Diseña planes estratégicos corporativos y gestiona recursos de forma eficiente y sostenible.",
    tags: ["Dirección", "Estrategia", "Finanzas"],
    semesters: {
      "Ciclo I": ["Fundamentos de Administración", "Economía General", "Matemática Financiera", "Contabilidad Básica"],
      "Ciclo II": ["Comportamiento Organizacional", "Microeconomía", "Contabilidad de Costos", "Estadística para Negocios"],
      "Ciclo III": ["Administración de Operaciones", "Macroeconomía", "Dirección de Personas", "Sistemas de Información Gerencial"],
      "Ciclo IV": ["Administración Financiera", "Investigación de Mercados", "Marketing Estratégico", "Planeamiento Estratégico"],
      "Ciclo V": ["Logística y Suministros", "Formulación de Proyectos de Inversión", "Finanzas Corporativas", "Comercio Internacional"],
      "Ciclo VI": ["Dirección Estratégica", "Auditoría de Gestión", "Liderazgo y Negociación", "Proyecto de Negocios I"]
    }
  },
  {
    key: "contabilidad",
    title: "Contabilidad y Finanzas",
    category: "neg",
    categoryLabel: "Negocios y Gestión",
    basePension: 900,
    baseMatricula: 320,
    years: 5,
    description: "Audita y analiza los estados financieros de las corporaciones. Planifica estrategias tributarias y asesora en inversiones.",
    tags: ["Auditoría", "Tributación", "Estados Financieros"],
    semesters: {
      "Ciclo I": ["Fundamentos Contables I", "Matemática Financiera", "Principios de Administración", "Derecho Comercial"],
      "Ciclo II": ["Fundamentos Contables II", "Contabilidad de Costos I", "Derecho Laboral", "Estadística Descriptiva"],
      "Ciclo III": ["Contabilidad Financiera", "Costos para la Toma de Decisiones", "Tributación I", "Sistemas Contables Computarizados"],
      "Ciclo IV": ["Auditoría Financiera", "Finanzas Corporativas", "Tributación II", "Contabilidad Gubernamental"],
      "Ciclo V": ["Contabilidad de Sociedades Avanzada", "Auditoría Operativa", "Finanzas Internacionales", "Tributación Internacional"],
      "Ciclo VI": ["Peritaje Contable", "Proyecto Contable I", "Seminario de Finanzas", "Gobernanza Corporativa"]
    }
  },
  {
    key: "marketing",
    title: "Marketing y Negocios Internacionales",
    category: "neg",
    categoryLabel: "Negocios y Gestión",
    basePension: 980,
    baseMatricula: 320,
    years: 5,
    description: "Estudia el comportamiento del consumidor global. Diseña campañas publicitarias digitales y gestiona logística internacional.",
    tags: ["E-commerce", "Exportación", "Marcas"],
    semesters: {
      "Ciclo I": ["Introducción al Marketing", "Fundamentos de Comercio Exterior", "Matemática para Negocios", "Sociología del Consumo"],
      "Ciclo II": ["Comportamiento del Consumidor", "Geografía Económica", "Estadística de Mercados", "Marketing Mix"],
      "Ciclo III": ["Logística Internacional", "Marketing de Servicios", "Investigación y Canales de Distribución", "Derecho Aduanero"],
      "Ciclo IV": ["E-commerce y Marketing Digital", "Finanzas Internacionales", "Inteligencia de Mercados Globales", "Negociación Internacional"],
      "Ciclo V": ["Marketing de Contenidos", "Gestión de Importaciones y Exportaciones", "Dirección de Ventas", "Investigación de Mercados Internacionales"],
      "Ciclo VI": ["Plan de Marketing Internacional", "Neuromarketing", "Distribución Física Internacional (DFI)", "Proyecto de Negociación Global I"]
    }
  },
  {
    key: "economia",
    title: "Economía y Negocios Globales",
    category: "neg",
    categoryLabel: "Negocios y Gestión",
    basePension: 1000,
    baseMatricula: 320,
    years: 5,
    description: "Analiza el panorama macroeconómico global y las políticas públicas para tomar decisiones estratégicas de inversión y financiamiento.",
    tags: ["Macroeconomía", "Inversión", "Políticas Públicas"],
    semesters: {
      "Ciclo I": ["Introducción a la Economía", "Álgebra para Economistas", "Cálculo I", "Historia Económica"],
      "Ciclo II": ["Microeconomía I", "Macroeconomía I", "Cálculo II", "Estadística Descriptiva"],
      "Ciclo III": ["Microeconomía II", "Macroeconomía II", "Econometría I", "Estadística Inferencial"],
      "Ciclo IV": ["Política Económica", "Finanzas Públicas", "Econometría II", "Formulación de Proyectos"],
      "Ciclo V": ["Teoría Monetaria", "Economía Internacional", "Finanzas Internacionales", "Economía de la Regulación"],
      "Ciclo VI": ["Crecimiento Económico", "Evaluación Social de Proyectos", "Mercados Financieros Globales", "Seminario de Economía I"]
    }
  },
  {
    key: "negocios_digitales",
    title: "Negocios Digitales",
    category: "neg",
    categoryLabel: "Negocios y Gestión",
    basePension: 1050,
    baseMatricula: 320,
    years: 5,
    description: "Diseña modelos de negocios innovadores en la era de internet. Lidera startups, estrategias Fintech y transformación digital corporativa.",
    tags: ["Fintech", "Startups", "Estrategia Digital"],
    semesters: {
      "Ciclo I": ["Fundamentos de Negocios Digitales", "Matemática para Negocios", "Introducción a la Programación", "Contabilidad Financiera"],
      "Ciclo II": ["Economía Digital", "Estructuras y Modelos de Negocios en Internet", "Estadística Descriptiva", "Diseño UX/UI de Negocios"],
      "Ciclo III": ["Fintech y Banca Digital", "Marketing Digital & Growth Hacking", "Legislación Digital y Ciberseguridad", "Base de Datos para Negocios"],
      "Ciclo IV": ["Comercio Electrónico y Omnicanalidad", "Análisis de Datos Empresariales (BI)", "Metodologías Ágiles para Startups", "Finanzas Digitales"],
      "Ciclo V": ["Estrategia de Transformación Digital", "Creación y Financiamiento de Startups", "Modelos de Negocios SaaS y Marketplace", "Gerencia del Cambio Digital"],
      "Ciclo VI": ["E-logística y Distribución", "Auditoría de Sistemas Digitales", "Proyecto de Negocio Digital I", "Seminario de Growth Hacking"]
    }
  }
];
