const categoryOptions = [
  {
    label: "Análisis y ciencia de datos",
    options: [
      { label: "A/B Testing", value: "1" },
      { label: "Análisis de datos", value: "2" },
      { label: "Aprendizaje automático", value: "3" },
      { label: "Aprendizaje profundo", value: "4" },
      { label: "Bandits", value: "5" },
      { label: "Experimentación y Pruebas", value: "6" },
      { label: "Extracción de datos", value: "7" },
      { label: "Ingeniería de datos", value: "8" },
      { label: "Procesamiento de datos", value: "9" },
      { label: "Representación del conocimiento", value: "10" },
      { label: "Visualización de datos", value: "11" },
    ],
  },
  {
    label: "Contabilidad y Consultoría",
    options: [
      { label: "Administración de recursos humanos", value: "11" },
      { label: "Consultoría en administración", value: "12" },
      { label: "Consultoría y Análisis de Gestión", value: "13" },
      { label: "Diseño instruccional", value: "14" },
      { label: "Gestión Financiera / Director Financiero", value: "15" },
      { label: "Planificación Financiera", value: "16" },
      { label: "Preparación de impuestos", value: "17" },
      { label: "Reclutamiento", value: "18" },
      { label: "Recursos humanos", value: "19" },
    ],
  },
  {
    label: "Desarrollo web, móvil y de software",
    options: [
      { label: "Control de calidad de automatización", value: "20" },
      { label: "Control de calidad funcional", value: "21" },
      { label: "Desarrollo AR/VR", value: "22" },
      { label: "Desarrollo de aplicaciones móviles", value: "23" },
      { label: "Desarrollo de back-end", value: "24" },
      { label: "Desarrollo de base de datos", value: "25" },
      { label: "Desarrollo de CMS", value: "26" },
      { label: "Desarrollo de comercio electrónico", value: "27" },
      { label: "Desarrollo de firmware", value: "28" },
      { label: "Desarrollo de juegos", value: "29" },
      { label: "Desarrollo de juegos móviles", value: "30" },
      { label: "Desarrollo de software de escritorio", value: "31" },
      { label: "Desarrollo Front-End", value: "32" },
      { label: "Desarrollo Full Stack", value: "33" },
      { label: "Diseño de UX/UI", value: "34" },
      { label: "Diseño móvil", value: "35" },
      { label: "Diseño web", value: "36" },
      { label: "Gestión de productos", value: "37" },
      { label: "Investigación de usuarios", value: "38" },
      { label: "Personalización de CMS", value: "39" },
      { label: "Prototipos", value: "40" },
      { label: "Scrum Master", value: "41" },
      { label: "Secuencias de comandos y automatización", value: "42" },
      { label: "Tecnología emergente", value: "43" },
    ],
  },
  {
    label: "Diseño y Creatividad",
    options: [
      { label: "Animación 2D", value: "44" },
      { label: "Diseño 3D", value: "45" },
      { label: "Animación 3D", value: "46" },
      { label: "Art Direction", value: "47" },
      { label: "Dirección creativa", value: "48" },
      { label: "Diseño de exhibición", value: "49" },
      { label: "Diseño de Identidad de Marca", value: "50" },
      { label: "Diseño de moda", value: "51" },
      { label: "Diseño de presentación", value: "52" },
      { label: "Diseño de realidad virtual y realidad aumentada", value: "53" },
      { label: "Diseño de tienda", value: "54" },
      { label: "Diseño editorial", value: "55" },
      { label: "Diseño gráfico", value: "56" },
      { label: "Edición / Postproducción de video", value: "57" },
      { label: "Edición / Retoque de imágenes", value: "58" },
      { label: "Edición de audio", value: "59" },
      { label: "Edición de Audio / Post-Producción", value: "60" },
      { label: "Estrategia de marca", value: "61" },
      { label: "Fotografía", value: "62" },
      { label: "Ilustrador", value: "63" },
      { label: "Producción de audio", value: "64" },
      { label: "Producción de vídeo", value: "65" },
      { label: "Videógrafo", value: "66" },
    ],
  },
  {
    label: "Escritura y Redacción",
    options: [
      { label: "Coaching de carrera", value: "67" },
      { label: "Edición y revisión", value: "68" },
      { label: "Escritura creativa", value: "69" },
      { label: "Escritura de concesión", value: "70" },
      { label: "Escritura técnica", value: "71" },
      { label: "Ghostwriting", value: "72" },
      { label: "Redacción", value: "73" },
      { label: "Redacción comercial", value: "74" },
      { label: "Redacción de contenido", value: "75" },
    ],
  },
  {
    label: "Ingeniería y Arquitectura",
    options: [
      { label: "Diseño de exteriores", value: "76" },
      { label: "Diseño de interiores", value: "77" },
      { label: "Diseño de producto", value: "78" },
      { label: "Diseño HVAC y MEP", value: "79" },
      { label: "Diseño industrial", value: "80" },
      { label: "Energía solar", value: "81" },
      { label: "Gestión y modelado de energía", value: "82" },
      { label: "Ingeniería civil", value: "83" },
      { label: "Ingeniería de Procesos", value: "84" },
      { label: "Ingeniería Eléctrica", value: "85" },
      { label: "Ingeniería Electrónica", value: "86" },
      { label: "Ingeniería estructural", value: "87" },
      { label: "Ingeniería Mecánica", value: "88" },
    ],
  },
  {
    label: "IT & Networking",
    options: [
      { label: "Administración de base de datos", value: "89" },
      { label: "Administración de red", value: "90" },
      { label: "Administración del sistema", value: "91" },
      { label: "Arquitectura de Sistemas", value: "92" },
      { label: "Arquitectura de Soluciones", value: "93" },
      { label: "Cumplimiento de sistemas", value: "94" },
      { label: "Ingeniería de Sistemas", value: "95" },
      { label: "Ingeniería DevOps", value: "96" },
      { label: "Seguridad de información", value: "97" },
      { label: "Seguridad de la red", value: "98" },
    ],
  },
  {
    label: "Soporte administrativo",
    options: [
      { label: "Asistencia Virtual", value: "99" },
      { label: "Gerencia de Proyectos", value: "100" },
      { label: "Ingreso de datos", value: "101" },
      { label: "Investigación en línea", value: "102" },
      { label: "Procesamiento de pedidos", value: "103" },
      { label: "Transcripción", value: "104" },
    ],
  },
  {
    label: "Traducción",
    options: [
      { label: "Localización de idiomas", value: "105" },
      { label: "Traducción", value: "106" },
      { label: "Traducción Jurídica", value: "107" },
      { label: "Traducción médica", value: "108" },
      { label: "Traducción Técnica", value: "109" },
      { label: "Tutoría de idiomas", value: "110" },
    ],
  },
  {
    label: "Ventas y Marketing",
    options: [
      { label: "Administración de campaña", value: "111" },
      { label: "Automatización de marketing", value: "112" },
      { label: "Community Manager", value: "113" },
      { label: "Desarrollo de negocios", value: "114" },
      { label: "Estrategia de contenido", value: "115" },
      { label: "Estrategia de mercadeo", value: "116" },
      { label: " Estrategia de redes sociales", value: "117" },
      { label: "Investigación de mercado", value: "118" },
      { label: "Lead Generation", value: "119" },
      { label: "Marketing de medios sociales", value: "120" },
      { label: "Marketing de motores de búsqueda", value: "121" },
      { label: "Mercadeo por correo electrónico", value: "122" },
      { label: "Publicidad digital", value: "123" },
      { label: "Relaciones públicas", value: "124" },
      { label: "Search Engine Optimization (SEO)", value: "125" },
      { label: "Telemercadeo", value: "126" },
    ],
  },
];

const categoryOptions_clean = [
  { label: "A/B Testing", value: "1" },
  { label: "Análisis de datos", value: "2" },
  { label: "Aprendizaje automático", value: "3" },
  { label: "Aprendizaje profundo", value: "4" },
  { label: "Bandits", value: "5" },
  { label: "Experimentación y Pruebas", value: "6" },
  { label: "Extracción de datos", value: "7" },
  { label: "Ingeniería de datos", value: "8" },
  { label: "Procesamiento de datos", value: "9" },
  { label: "Representación del conocimiento", value: "10" },
  { label: "Visualización de datos", value: "11" },
  { label: "Administración de recursos humanos", value: "11" },
  { label: "Consultoría en administración", value: "12" },
  { label: "Consultoría y Análisis de Gestión", value: "13" },
  { label: "Diseño instruccional", value: "14" },
  { label: "Gestión Financiera / Director Financiero", value: "15" },
  { label: "Planificación Financiera", value: "16" },
  { label: "Preparación de impuestos", value: "17" },
  { label: "Reclutamiento", value: "18" },
  { label: "Recursos humanos", value: "19" },
  { label: "Control de calidad de automatización", value: "20" },
  { label: "Control de calidad funcional", value: "21" },
  { label: "Desarrollo AR/VR", value: "22" },
  { label: "Desarrollo de aplicaciones móviles", value: "23" },
  { label: "Desarrollo de back-end", value: "24" },
  { label: "Desarrollo de base de datos", value: "25" },
  { label: "Desarrollo de CMS", value: "26" },
  { label: "Desarrollo de comercio electrónico", value: "27" },
  { label: "Desarrollo de firmware", value: "28" },
  { label: "Desarrollo de juegos", value: "29" },
  { label: "Desarrollo de juegos móviles", value: "30" },
  { label: "Desarrollo de software de escritorio", value: "31" },
  { label: "Desarrollo Front-End", value: "32" },
  { label: "Desarrollo Full Stack", value: "33" },
  { label: "Diseño de UX/UI", value: "34" },
  { label: "Diseño móvil", value: "35" },
  { label: "Diseño web", value: "36" },
  { label: "Gestión de productos", value: "37" },
  { label: "Investigación de usuarios", value: "38" },
  { label: "Personalización de CMS", value: "39" },
  { label: "Prototipos", value: "40" },
  { label: "Scrum Master", value: "41" },
  { label: "Secuencias de comandos y automatización", value: "42" },
  { label: "Tecnología emergente", value: "43" },
  { label: "Animación 2D", value: "44" },
  { label: "Diseño 3D", value: "45" },
  { label: "Animación 3D", value: "46" },
  { label: "Art Direction", value: "47" },
  { label: "Dirección creativa", value: "48" },
  { label: "Diseño de exhibición", value: "49" },
  { label: "Diseño de Identidad de Marca", value: "50" },
  { label: "Diseño de moda", value: "51" },
  { label: "Diseño de presentación", value: "52" },
  { label: "Diseño de realidad virtual y realidad aumentada", value: "53" },
  { label: "Diseño de tienda", value: "54" },
  { label: "Diseño editorial", value: "55" },
  { label: "Diseño gráfico", value: "56" },
  { label: "Edición / Postproducción de video", value: "57" },
  { label: "Edición / Retoque de imágenes", value: "58" },
  { label: "Edición de audio", value: "59" },
  { label: "Edición de Audio / Post-Producción", value: "60" },
  { label: "Estrategia de marca", value: "61" },
  { label: "Fotografía", value: "62" },
  { label: "Ilustrador", value: "63" },
  { label: "Producción de audio", value: "64" },
  { label: "Producción de vídeo", value: "65" },
  { label: "Videógrafo", value: "66" },
  { label: "Coaching de carrera", value: "67" },
  { label: "Edición y revisión", value: "68" },
  { label: "Escritura creativa", value: "69" },
  { label: "Escritura de concesión", value: "70" },
  { label: "Escritura técnica", value: "71" },
  { label: "Ghostwriting", value: "72" },
  { label: "Redacción", value: "73" },
  { label: "Redacción comercial", value: "74" },
  { label: "Redacción de contenido", value: "75" },
  { label: "Diseño de exteriores", value: "76" },
  { label: "Diseño de interiores", value: "77" },
  { label: "Diseño de producto", value: "78" },
  { label: "Diseño HVAC y MEP", value: "79" },
  { label: "Diseño industrial", value: "80" },
  { label: "Energía solar", value: "81" },
  { label: "Gestión y modelado de energía", value: "82" },
  { label: "Ingeniería civil", value: "83" },
  { label: "Ingeniería de Procesos", value: "84" },
  { label: "Ingeniería Eléctrica", value: "85" },
  { label: "Ingeniería Electrónica", value: "86" },
  { label: "Ingeniería estructural", value: "87" },
  { label: "Ingeniería Mecánica", value: "88" },
  { label: "Administración de base de datos", value: "89" },
  { label: "Administración de red", value: "90" },
  { label: "Administración del sistema", value: "91" },
  { label: "Arquitectura de Sistemas", value: "92" },
  { label: "Arquitectura de Soluciones", value: "93" },
  { label: "Cumplimiento de sistemas", value: "94" },
  { label: "Ingeniería de Sistemas", value: "95" },
  { label: "Ingeniería DevOps", value: "96" },
  { label: "Seguridad de información", value: "97" },
  { label: "Seguridad de la red", value: "98" },
  { label: "Asistencia Virtual", value: "99" },
  { label: "Gerencia de Proyectos", value: "100" },
  { label: "Ingreso de datos", value: "101" },
  { label: "Investigación en línea", value: "102" },
  { label: "Procesamiento de pedidos", value: "103" },
  { label: "Transcripción", value: "104" },
  { label: "Localización de idiomas", value: "105" },
  { label: "Traducción", value: "106" },
  { label: "Traducción Jurídica", value: "107" },
  { label: "Traducción médica", value: "108" },
  { label: "Traducción Técnica", value: "109" },
  { label: "Tutoría de idiomas", value: "110" },
  { label: "Administración de campaña", value: "111" },
  { label: "Automatización de marketing", value: "112" },
  { label: "Community Manager", value: "113" },
  { label: "Desarrollo de negocios", value: "114" },
  { label: "Estrategia de contenido", value: "115" },
  { label: "Estrategia de mercadeo", value: "116" },
  { label: " Estrategia de redes sociales", value: "117" },
  { label: "Investigación de mercado", value: "118" },
  { label: "Lead Generation", value: "119" },
  { label: "Marketing de medios sociales", value: "120" },
  { label: "Marketing de motores de búsqueda", value: "121" },
  { label: "Mercadeo por correo electrónico", value: "122" },
  { label: "Publicidad digital", value: "123" },
  { label: "Relaciones públicas", value: "124" },
  { label: "Search Engine Optimization (SEO)", value: "125" },
  { label: "Telemercadeo", value: "126" },
];

module.exports = { categoryOptions, categoryOptions_clean };
