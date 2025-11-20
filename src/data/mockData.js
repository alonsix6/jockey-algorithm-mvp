// Mock Data para UCSP - Dashboard Demo
// Datos simulados realistas para presentación

// ============================================================================
// MOCK GA4 DATA - Google Analytics 4 simulado
// ============================================================================
export const MOCK_GA4_DATA = {
  // Sesiones web
  sessions: {
    total: 42500,
    new_users: 38250,
    returning: 4250,
    avg_session_duration: '4:15', // Mayor que autos (más tiempo investigando carreras)
    pages_per_session: 5.8,
    bounce_rate: 32.5, // porcentaje
  },

  // Páginas más visitadas
  top_pages: [
    {
      page: '/admision',
      title: 'Admisión UCSP 2025',
      views: 18500,
      bounce_rate: 28,
      avg_time: '5:30',
    },
    {
      page: '/carreras/ingenieria-industrial',
      title: 'Ingeniería Industrial',
      views: 12800,
      bounce_rate: 35,
      avg_time: '4:20',
    },
    {
      page: '/carreras/derecho',
      title: 'Derecho',
      views: 10200,
      bounce_rate: 32,
      avg_time: '4:45',
    },
    {
      page: '/becas',
      title: 'Becas y Financiamiento',
      views: 8900,
      bounce_rate: 18,
      avg_time: '6:10',
    },
    {
      page: '/carreras/medicina',
      title: 'Medicina Humana',
      views: 7650,
      bounce_rate: 30,
      avg_time: '5:00',
    },
  ],

  // Conversiones (KPIs principales)
  conversions: {
    form_submissions: 3200,
    charla_requests: 485,
    brochure_downloads: 2850,
    whatsapp_clicks: 4200,
    phone_calls: 720,
    newsletter_signups: 1580,
  },

  // Fuentes de tráfico
  traffic_sources: {
    organic_search: { percentage: 32, sessions: 13600, label: 'Búsqueda Orgánica' },
    paid_search: { percentage: 30, sessions: 12750, label: 'Google Ads' },
    social_media: { percentage: 28, sessions: 11900, label: 'Meta Ads' },
    direct: { percentage: 7, sessions: 2975, label: 'Directo' },
    referral: { percentage: 3, sessions: 1275, label: 'Referencias' },
  },

  // Dispositivos
  devices: {
    mobile: { percentage: 72, sessions: 30600, label: 'Mobile' },
    desktop: { percentage: 23, sessions: 9775, label: 'Desktop' },
    tablet: { percentage: 5, sessions: 2125, label: 'Tablet' },
  },

  // Ubicaciones (zonas objetivo)
  locations: [
    { city: 'Arequipa', sessions: 29750, conversions: 2240, percentage: 70 },
    { city: 'Puno', sessions: 7650, conversions: 576, percentage: 18 },
    { city: 'Cusco', sessions: 4250, conversions: 320, percentage: 10 },
    { city: 'Moquegua', sessions: 425, conversions: 32, percentage: 1 },
    { city: 'Tacna', sessions: 425, conversions: 32, percentage: 1 },
  ],
};

// ============================================================================
// PERFORMANCE KPIs - Métricas principales del dashboard
// ============================================================================
export const PERFORMANCE_KPIS = {
  // Postulaciones completadas (reemplazo de leads)
  postulaciones: {
    current: 1256,
    previous: 1092,
    change: '+15.0',
    trend: 'up',
    label: 'Postulaciones Completadas',
    description: 'Total de postulaciones válidas en periodo',
  },

  // Alcance total
  alcance: {
    current: 875000,
    previous: 718000,
    change: '+21.9',
    trend: 'up',
    label: 'Alcance Total',
    description: 'Usuarios únicos impactados',
  },

  // Engagement/Interacciones
  engagement: {
    current: 142500,
    previous: 131800,
    change: '+8.1',
    trend: 'up',
    label: 'Interacciones',
    description: 'Likes, shares, comentarios, saves',
  },

  // CPP (Costo por Postulación) - reemplazo de CPL
  cpp: {
    current: 38.50,
    previous: 41.80,
    change: '-7.9',
    trend: 'down', // Reducción es positivo
    label: 'Costo por Postulación',
    description: 'S/ invertido por cada postulación válida',
    currency: 'S/',
  },

  // Charlas informativas asistidas (reemplazo de test drives)
  charlas: {
    current: 485,
    previous: 412,
    change: '+17.7',
    trend: 'up',
    label: 'Charlas Asistidas',
    description: 'Asistentes a charlas informativas',
  },

  // WhatsApp conversaciones
  whatsapp: {
    current: 1420,
    previous: 1108,
    change: '+28.2',
    trend: 'up',
    label: 'Conversaciones WhatsApp',
    description: 'Conversaciones iniciadas vía Meta Ads',
  },
};

// ============================================================================
// UCSP OPPORTUNITY SCORE - Reemplazo de Honda Opportunity Score
// ============================================================================
export const OPPORTUNITY_SCORE = {
  total: 82,
  grade: 'A',
  components: [
    {
      name: 'Interés de Búsqueda',
      score: 85,
      weight: 25,
      trend: 'rising',
      description: 'Tendencias de Google Trends en zonas objetivo',
    },
    {
      name: 'Engagement Social',
      score: 78,
      weight: 20,
      trend: 'stable',
      description: 'Interacciones en TikTok, Instagram y Facebook',
    },
    {
      name: 'Intención de Conversión',
      score: 88,
      weight: 30,
      trend: 'rising',
      description: 'Lead Ads + Conversaciones WhatsApp',
    },
    {
      name: 'Calidad de Leads',
      score: 75,
      weight: 15,
      trend: 'stable',
      description: 'HubSpot Lead Score promedio',
    },
    {
      name: 'Competitividad',
      score: 80,
      weight: 10,
      trend: 'rising',
      description: 'Share of Voice vs UNSA/UCSM',
    },
  ],
};

// ============================================================================
// CARRERAS PERFORMANCE - Rendimiento por carrera
// ============================================================================
export const CARRERAS_PERFORMANCE = [
  {
    id: 1,
    nombre: 'Ingeniería Industrial',
    demanda: 'Alta',
    postulaciones: 285,
    cpp: 38.50,
    conversion: 24,
    vacantes: 80,
    tendencia: 'rising',
    hashtags: ['#IngenieriaIndustrial', '#IngenieriaUCSP'],
    leadAds: {
      formularios: 420,
      conversion_rate: 32,
      cpl: 28.00,
    },
    whatsapp: {
      conversaciones: 185,
      respondidas: 142,
      tasa_respuesta: 77,
    },
    landing: {
      visitas: 2850,
      conversion_rate: 18.5,
    },
  },
  {
    id: 2,
    nombre: 'Derecho',
    demanda: 'Alta',
    postulaciones: 240,
    cpp: 45.20,
    conversion: 22,
    vacantes: 60,
    tendencia: 'stable',
    hashtags: ['#DerechoUCSP', '#Derecho'],
    leadAds: {
      formularios: 380,
      conversion_rate: 28,
      cpl: 32.50,
    },
    whatsapp: {
      conversaciones: 156,
      respondidas: 98,
      tasa_respuesta: 63,
    },
    landing: {
      visitas: 2420,
      conversion_rate: 16.2,
    },
  },
  {
    id: 3,
    nombre: 'Medicina Humana',
    demanda: 'Muy Alta',
    postulaciones: 320,
    cpp: 52.00,
    conversion: 18,
    vacantes: 40,
    tendencia: 'rising',
    hashtags: ['#MedicinaUCSP', '#Medicina'],
    leadAds: {
      formularios: 485,
      conversion_rate: 35,
      cpl: 38.00,
    },
    whatsapp: {
      conversaciones: 220,
      respondidas: 175,
      tasa_respuesta: 80,
    },
    landing: {
      visitas: 3200,
      conversion_rate: 22.0,
    },
  },
  {
    id: 4,
    nombre: 'Administración',
    demanda: 'Alta',
    postulaciones: 195,
    cpp: 42.30,
    conversion: 20,
    vacantes: 70,
    tendencia: 'stable',
    hashtags: ['#AdministracionUCSP', '#Negocios'],
    leadAds: {
      formularios: 320,
      conversion_rate: 26,
      cpl: 30.50,
    },
    whatsapp: {
      conversaciones: 128,
      respondidas: 85,
      tasa_respuesta: 66,
    },
    landing: {
      visitas: 1950,
      conversion_rate: 15.8,
    },
  },
  {
    id: 5,
    nombre: 'Arquitectura y Urbanismo',
    demanda: 'Media-Alta',
    postulaciones: 165,
    cpp: 48.80,
    conversion: 19,
    vacantes: 50,
    tendencia: 'rising',
    hashtags: ['#ArquitecturaUCSP', '#Arquitectura'],
    leadAds: {
      formularios: 280,
      conversion_rate: 25,
      cpl: 34.00,
    },
    whatsapp: {
      conversaciones: 112,
      respondidas: 72,
      tasa_respuesta: 64,
    },
    landing: {
      visitas: 1820,
      conversion_rate: 14.5,
    },
  },
  {
    id: 6,
    nombre: 'Psicología',
    demanda: 'Alta',
    postulaciones: 175,
    cpp: 40.50,
    conversion: 21,
    vacantes: 60,
    tendencia: 'stable',
    hashtags: ['#PsicologiaUCSP', '#Psicologia'],
    leadAds: {
      formularios: 295,
      conversion_rate: 27,
      cpl: 29.00,
    },
    whatsapp: {
      conversaciones: 125,
      respondidas: 88,
      tasa_respuesta: 70,
    },
    landing: {
      visitas: 1980,
      conversion_rate: 16.0,
    },
  },
  {
    id: 7,
    nombre: 'Ingeniería Civil',
    demanda: 'Media',
    postulaciones: 142,
    cpp: 44.20,
    conversion: 18,
    vacantes: 55,
    tendencia: 'stable',
    hashtags: ['#IngenieriaCivil', '#CivilUCSP'],
    leadAds: {
      formularios: 240,
      conversion_rate: 24,
      cpl: 31.50,
    },
    whatsapp: {
      conversaciones: 95,
      respondidas: 62,
      tasa_respuesta: 65,
    },
    landing: {
      visitas: 1650,
      conversion_rate: 13.8,
    },
  },
  {
    id: 8,
    nombre: 'Contabilidad',
    demanda: 'Media',
    postulaciones: 128,
    cpp: 38.90,
    conversion: 20,
    vacantes: 50,
    tendencia: 'stable',
    hashtags: ['#ContabilidadUCSP', '#Contabilidad'],
    leadAds: {
      formularios: 220,
      conversion_rate: 23,
      cpl: 28.50,
    },
    whatsapp: {
      conversaciones: 85,
      respondidas: 58,
      tasa_respuesta: 68,
    },
    landing: {
      visitas: 1480,
      conversion_rate: 14.2,
    },
  },
  {
    id: 9,
    nombre: 'Ciencia de la Computación',
    demanda: 'Media-Alta',
    postulaciones: 158,
    cpp: 46.00,
    conversion: 22,
    vacantes: 45,
    tendencia: 'rising',
    hashtags: ['#CienciaComputacion', '#TechUCSP'],
    leadAds: {
      formularios: 265,
      conversion_rate: 28,
      cpl: 33.00,
    },
    whatsapp: {
      conversaciones: 105,
      respondidas: 75,
      tasa_respuesta: 71,
    },
    landing: {
      visitas: 1920,
      conversion_rate: 15.5,
    },
  },
  {
    id: 10,
    nombre: 'Ciencia de Datos',
    demanda: 'Alta',
    postulaciones: 185,
    cpp: 50.20,
    conversion: 25,
    vacantes: 40,
    tendencia: 'rising',
    hashtags: ['#CienciaDatos', '#DataScience'],
    leadAds: {
      formularios: 320,
      conversion_rate: 30,
      cpl: 36.50,
    },
    whatsapp: {
      conversaciones: 135,
      respondidas: 102,
      tasa_respuesta: 76,
    },
    landing: {
      visitas: 2150,
      conversion_rate: 17.8,
    },
  },
  {
    id: 11,
    nombre: 'Ingeniería Electrónica y Telecomunicaciones',
    demanda: 'Media',
    postulaciones: 118,
    cpp: 42.80,
    conversion: 19,
    vacantes: 45,
    tendencia: 'stable',
    hashtags: ['#ElectronicaUCSP', '#Telecomunicaciones'],
    leadAds: {
      formularios: 198,
      conversion_rate: 22,
      cpl: 30.00,
    },
    whatsapp: {
      conversaciones: 78,
      respondidas: 50,
      tasa_respuesta: 64,
    },
    landing: {
      visitas: 1420,
      conversion_rate: 13.2,
    },
  },
  {
    id: 12,
    nombre: 'Ingeniería Mecatrónica',
    demanda: 'Media',
    postulaciones: 125,
    cpp: 45.60,
    conversion: 20,
    vacantes: 40,
    tendencia: 'stable',
    hashtags: ['#MecatronicaUCSP', '#Mecatronica'],
    leadAds: {
      formularios: 210,
      conversion_rate: 23,
      cpl: 32.00,
    },
    whatsapp: {
      conversaciones: 82,
      respondidas: 55,
      tasa_respuesta: 67,
    },
    landing: {
      visitas: 1520,
      conversion_rate: 14.0,
    },
  },
  {
    id: 13,
    nombre: 'Ingeniería Ambiental',
    demanda: 'Media',
    postulaciones: 105,
    cpp: 41.20,
    conversion: 18,
    vacantes: 35,
    tendencia: 'rising',
    hashtags: ['#IngenieriaAmbiental', '#Sostenibilidad'],
    leadAds: {
      formularios: 175,
      conversion_rate: 21,
      cpl: 29.50,
    },
    whatsapp: {
      conversaciones: 68,
      respondidas: 45,
      tasa_respuesta: 66,
    },
    landing: {
      visitas: 1280,
      conversion_rate: 12.8,
    },
  },
];

// ============================================================================
// COMPETENCIA - Universidades competidoras
// ============================================================================
export const COMPETENCIA = [
  {
    name: 'UNSA',
    full_name: 'Universidad Nacional de San Agustín',
    market_share: 45,
    postulantes: 49509,
    rank: 1,
    type: 'Pública',
    fortalezas: ['Tradición', 'Bajo costo', 'Mayor demanda del país'],
    debilidades: ['Masificación', 'Infraestructura limitada'],
  },
  {
    name: 'UCSM',
    full_name: 'Universidad Católica Santa María',
    market_share: 28,
    postulantes: 8500,
    rank: 2,
    type: 'Privada',
    fortalezas: ['Infraestructura', 'Carreras similares'],
    debilidades: ['Menor acreditación internacional'],
  },
  {
    name: 'UCSP',
    full_name: 'Universidad Católica San Pablo',
    market_share: 15,
    postulantes: 3200,
    rank: 3,
    type: 'Privada',
    fortalezas: ['Primera licenciada del sur', 'Acreditación internacional', 'Formación integral'],
    debilidades: ['Menor awareness', 'Percepción de costo'],
  },
  {
    name: 'UTP',
    full_name: 'Universidad Tecnológica del Perú',
    market_share: 8,
    postulantes: 2800,
    rank: 4,
    type: 'Privada',
    fortalezas: ['Presencia nacional', 'Marketing agresivo'],
    debilidades: ['Menor calidad percibida'],
  },
  {
    name: 'UAP',
    full_name: 'Universidad Alas Peruanas',
    market_share: 4,
    postulantes: 1500,
    rank: 5,
    type: 'Privada',
    fortalezas: ['Presencia nacional'],
    debilidades: ['Problemas de licenciamiento'],
  },
];

// ============================================================================
// HUBSPOT MOCKUP - Datos simulados de HubSpot
// ============================================================================
export const HUBSPOT_MOCKUP = {
  campaigns: [
    {
      id: 'camp_001',
      name: 'Admisión 2025-I Pregrado',
      status: 'active',
      budget: 25000,
      spent: 18750,
      leads: 856,
      cpl: 21.90,
      alert_status: 'normal', // normal, warning, danger
      platform: 'Meta Ads',
      audience: 'Pregrado',
    },
    {
      id: 'camp_002',
      name: 'Ingeniería Industrial - Lead Ads',
      status: 'active',
      budget: 8500,
      spent: 6820,
      leads: 285,
      cpl: 23.93,
      alert_status: 'normal',
      platform: 'Meta Ads',
      audience: 'Pregrado',
    },
    {
      id: 'camp_003',
      name: 'Medicina - Google Search',
      status: 'active',
      budget: 12000,
      spent: 10500,
      leads: 198,
      cpl: 53.03,
      alert_status: 'warning', // CPL cercano al límite
      platform: 'Google Ads',
      audience: 'Pregrado',
    },
    {
      id: 'camp_004',
      name: 'Posgrado - Maestrías',
      status: 'active',
      budget: 6500,
      spent: 4875,
      leads: 68,
      cpl: 71.69,
      alert_status: 'warning',
      platform: 'Google Ads',
      audience: 'Posgrado',
    },
  ],
  alerts: [
    {
      type: 'warning',
      message: 'Campaña "Medicina - Google Search" con CPL de S/53.03, cerca del límite de S/55',
      campaign_id: 'camp_003',
      timestamp: '2025-11-20T14:30:00',
    },
    {
      type: 'warning',
      message: 'Campaña "Posgrado - Maestrías" con CPL de S/71.69, cerca del límite de S/80',
      campaign_id: 'camp_004',
      timestamp: '2025-11-20T13:15:00',
    },
  ],
  lead_quality: {
    avg_score: 72,
    distribution: {
      hot: 28, // %
      warm: 45,
      cold: 27,
    },
  },
};

// ============================================================================
// EXPORTS
// ============================================================================
export default {
  MOCK_GA4_DATA,
  PERFORMANCE_KPIS,
  OPPORTUNITY_SCORE,
  CARRERAS_PERFORMANCE,
  COMPETENCIA,
  HUBSPOT_MOCKUP,
};
