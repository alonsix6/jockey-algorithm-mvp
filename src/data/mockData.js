// Mock Data para Jockey Plaza - Dashboard Demo
// Datos simulados realistas para presentación
// Enfoque: Alcance, Frecuencia, Interacciones (NO leads, NO visitas físicas)

// ============================================================================
// MOCK GA4 DATA - Google Analytics 4 simulado (jockeyplaza.com.pe)
// ============================================================================
export const MOCK_GA4_DATA = {
  // Sesiones web
  sessions: {
    total: 185000,
    new_users: 142000,
    returning: 43000,
    avg_session_duration: '2:35',
    pages_per_session: 4.2,
    bounce_rate: 45.8,
  },

  // Páginas más visitadas
  top_pages: [
    {
      page: '/tiendas',
      title: 'Directorio de Tiendas',
      views: 52000,
      bounce_rate: 38,
      avg_time: '2:15',
    },
    {
      page: '/eventos',
      title: 'Eventos y Experiencias',
      views: 38500,
      bounce_rate: 32,
      avg_time: '3:05',
    },
    {
      page: '/horarios',
      title: 'Horarios de Atención',
      views: 35200,
      bounce_rate: 55,
      avg_time: '0:45',
    },
    {
      page: '/gastronomia',
      title: 'Restaurantes',
      views: 28700,
      bounce_rate: 35,
      avg_time: '2:45',
    },
    {
      page: '/cine',
      title: 'Cinemark Jockey Plaza',
      views: 24500,
      bounce_rate: 42,
      avg_time: '1:55',
    },
  ],

  // Interacciones en sitio
  interactions: {
    store_searches: 28500,
    event_clicks: 15200,
    map_interactions: 12800,
    social_shares: 4500,
    newsletter_signups: 2100,
  },

  // Fuentes de tráfico
  traffic_sources: {
    organic_search: { percentage: 38, sessions: 70300, label: 'Búsqueda Orgánica' },
    social_media: { percentage: 32, sessions: 59200, label: 'Redes Sociales' },
    direct: { percentage: 18, sessions: 33300, label: 'Directo' },
    paid_search: { percentage: 8, sessions: 14800, label: 'Google Ads' },
    referral: { percentage: 4, sessions: 7400, label: 'Referencias' },
  },

  // Dispositivos
  devices: {
    mobile: { percentage: 78, sessions: 144300, label: 'Mobile' },
    desktop: { percentage: 17, sessions: 31450, label: 'Desktop' },
    tablet: { percentage: 5, sessions: 9250, label: 'Tablet' },
  },

  // Ubicaciones (distritos objetivo)
  locations: [
    { district: 'Surco', sessions: 55500, percentage: 30 },
    { district: 'La Molina', sessions: 37000, percentage: 20 },
    { district: 'San Borja', sessions: 27750, percentage: 15 },
    { district: 'Miraflores', sessions: 22200, percentage: 12 },
    { district: 'San Isidro', sessions: 14800, percentage: 8 },
    { district: 'Otros Lima', sessions: 27750, percentage: 15 },
  ],
};

// ============================================================================
// PERFORMANCE KPIs - Métricas principales (Alcance, Frecuencia, Interacciones)
// ============================================================================
export const PERFORMANCE_KPIS = {
  // Alcance total (usuarios únicos)
  alcance: {
    current: 2850000,
    previous: 2420000,
    change: '+17.8',
    trend: 'up',
    label: 'Alcance',
    description: 'Usuarios únicos alcanzados en el periodo',
  },

  // Alias para compatibilidad
  reach: {
    unique_reach: 2850000,
    impressions: 9975000,
    frequency: 3.5,
    trend: '+17.8%',
    trend_value: 17.8,
  },

  // Impresiones totales
  impresiones: {
    current: 9975000,
    previous: 8230000,
    change: '+21.2',
    trend: 'up',
    label: 'Impresiones',
    description: 'Total de veces mostrado el contenido',
  },

  // Frecuencia (Impresiones / Alcance)
  frecuencia: {
    current: 3.5,
    previous: 3.4,
    change: '+2.9',
    trend: 'up',
    label: 'Frecuencia',
    description: 'Veces promedio que cada usuario vio el contenido',
    benchmark: '3.0 - 4.0 óptimo para recordación',
  },

  // Interacciones totales
  engagement: {
    total_interactions: 485000,
    engagement_rate: 4.86,
    likes: 285000,
    comments: 42000,
    shares: 68000,
    saves: 90000,
    trend: '+12.5%',
    trend_value: 12.5,
  },

  // Budget / Presupuesto
  budget: {
    total_budget: 45000, // USD mensual
    total_spent: 41850,
    spent_percentage: 93.0,
    cpm: 4.20, // Costo por mil impresiones
    cost_per_engagement: 0.086,
    trend: 'on-track',
  },

  // CPM (Costo por Mil Impresiones)
  cpm: {
    current: 4.20,
    previous: 4.55,
    change: '-7.7',
    trend: 'down', // Reducción es positivo
    label: 'CPM',
    description: 'Costo por cada 1,000 impresiones',
    currency: '$',
  },

  // Costo por Interacción
  cpi: {
    current: 0.086,
    previous: 0.095,
    change: '-9.5',
    trend: 'down',
    label: 'Costo por Interacción',
    description: 'Costo promedio por cada interacción',
    currency: '$',
  },

  // Video Views (YouTube + Reels)
  video_views: {
    current: 1250000,
    previous: 980000,
    change: '+27.6',
    trend: 'up',
    label: 'Video Views',
    description: 'Reproducciones de video en todas las plataformas',
  },
};

// ============================================================================
// JOCKEY OPPORTUNITY SCORE - Índice de oportunidad para awareness
// ============================================================================
export const OPPORTUNITY_SCORE = {
  current_score: 74,
  trend: '+4.2%',
  components: {
    search_interest: {
      label: 'Interés de Búsqueda',
      score: 68,
      weight: 0.25,
      contribution: 17.0,
      description: 'Tendencias de búsqueda en Google Trends',
    },
    social_engagement: {
      label: 'Engagement Social',
      score: 82,
      weight: 0.30,
      contribution: 24.6,
      description: 'Interacciones en redes sociales',
    },
    brand_awareness: {
      label: 'Awareness de Marca',
      score: 78,
      weight: 0.25,
      contribution: 19.5,
      description: 'Recordación y menciones de marca',
    },
    competitive_position: {
      label: 'Posición Competitiva',
      score: 65,
      weight: 0.20,
      contribution: 13.0,
      description: 'Share of voice vs competencia',
    },
  },
  recommendation: {
    message: 'Buena oportunidad para aumentar frecuencia y consolidar awareness. El engagement social está en niveles óptimos (82). Recomendamos mantener inversión en Meta Ads y aumentar presencia en Google Display para mejorar frecuencia de impacto. Considerar activaciones especiales en fechas clave.',
    confidence: '85%',
    priority: 'high',
  },
};

// ============================================================================
// CATEGORIAS PERFORMANCE - Rendimiento por categoría de tienda
// ============================================================================
export const CATEGORIAS_PERFORMANCE = [
  {
    id: 1,
    nombre: 'Fast Fashion',
    tiendas: ['Zara', 'H&M', 'Forever 21', 'Stradivarius'],
    demanda: 'Muy Alta',
    alcance: 850000,
    impresiones: 2975000,
    frecuencia: 3.5,
    interacciones: 145000,
    engagement_rate: 4.87,
    cpm: 3.85,
    tendencia: 'rising',
    hashtags: ['#ZaraLima', '#HMLima', '#ModaLima'],
    top_content: {
      tipo: 'Reels',
      engagement: 6.2,
      views: 320000,
    },
  },
  {
    id: 2,
    nombre: 'Lujo',
    tiendas: ['Louis Vuitton', 'Dolce & Gabbana', 'Chanel', 'Dior'],
    demanda: 'Alta',
    alcance: 180000,
    impresiones: 504000,
    frecuencia: 2.8,
    interacciones: 28500,
    engagement_rate: 5.65,
    cpm: 8.20,
    tendencia: 'stable',
    hashtags: ['#LuxuryPeru', '#LouisVuitton', '#DiorLima'],
    top_content: {
      tipo: 'Carousel',
      engagement: 5.8,
      views: 85000,
    },
  },
  {
    id: 3,
    nombre: 'Tiendas Ancla',
    tiendas: ['Falabella', 'Ripley', 'Oechsle', 'Plaza Vea'],
    demanda: 'Muy Alta',
    alcance: 1200000,
    impresiones: 4200000,
    frecuencia: 3.5,
    interacciones: 168000,
    engagement_rate: 4.0,
    cpm: 3.50,
    tendencia: 'stable',
    hashtags: ['#Falabella', '#Ripley', '#OfertasLima'],
    top_content: {
      tipo: 'Feed Post',
      engagement: 4.2,
      views: 450000,
    },
  },
  {
    id: 4,
    nombre: 'Deportes & Lifestyle',
    tiendas: ['Nike', 'Adidas', 'Puma', 'Under Armour'],
    demanda: 'Alta',
    alcance: 520000,
    impresiones: 1820000,
    frecuencia: 3.5,
    interacciones: 85000,
    engagement_rate: 4.67,
    cpm: 4.10,
    tendencia: 'rising',
    hashtags: ['#NikeLima', '#AdidasPeru', '#DeportesLima'],
    top_content: {
      tipo: 'Video',
      engagement: 5.5,
      views: 180000,
    },
  },
  {
    id: 5,
    nombre: 'Gastronomía',
    tiendas: ['Hard Rock Café', 'Tanta', 'Chilis', 'La Bodega'],
    demanda: 'Alta',
    alcance: 680000,
    impresiones: 2380000,
    frecuencia: 3.5,
    interacciones: 125000,
    engagement_rate: 5.25,
    cpm: 3.95,
    tendencia: 'rising',
    hashtags: ['#FoodiesLima', '#RestaurantesLima', '#DondeComer'],
    top_content: {
      tipo: 'Reels',
      engagement: 7.2,
      views: 280000,
    },
  },
  {
    id: 6,
    nombre: 'Entretenimiento',
    tiendas: ['Cinemark', 'Happyland', 'Divercity', 'Kraken'],
    demanda: 'Alta',
    alcance: 420000,
    impresiones: 1470000,
    frecuencia: 3.5,
    interacciones: 92000,
    engagement_rate: 6.26,
    cpm: 4.50,
    tendencia: 'rising',
    hashtags: ['#CineLima', '#DiversionLima', '#PlanesLima'],
    top_content: {
      tipo: 'Stories',
      engagement: 6.8,
      views: 195000,
    },
  },
];

// ============================================================================
// TIENDAS TOP PERFORMANCE - Top 10 tiendas por engagement
// ============================================================================
export const TIENDAS_TOP = [
  { nombre: 'Zara', categoria: 'Fast Fashion', alcance: 320000, engagement_rate: 5.2, tendencia: 'rising' },
  { nombre: 'Cinemark', categoria: 'Entretenimiento', alcance: 285000, engagement_rate: 6.8, tendencia: 'rising' },
  { nombre: 'Tanta', categoria: 'Gastronomía', alcance: 180000, engagement_rate: 7.5, tendencia: 'rising' },
  { nombre: 'Nike', categoria: 'Deportes', alcance: 245000, engagement_rate: 5.8, tendencia: 'stable' },
  { nombre: 'H&M', categoria: 'Fast Fashion', alcance: 275000, engagement_rate: 4.9, tendencia: 'stable' },
  { nombre: 'Louis Vuitton', categoria: 'Lujo', alcance: 95000, engagement_rate: 6.2, tendencia: 'rising' },
  { nombre: 'Falabella', categoria: 'Tienda Ancla', alcance: 420000, engagement_rate: 3.8, tendencia: 'stable' },
  { nombre: 'Hard Rock Café', categoria: 'Gastronomía', alcance: 165000, engagement_rate: 5.5, tendencia: 'stable' },
  { nombre: 'Adidas', categoria: 'Deportes', alcance: 198000, engagement_rate: 5.2, tendencia: 'rising' },
  { nombre: 'Happyland', categoria: 'Entretenimiento', alcance: 145000, engagement_rate: 6.5, tendencia: 'rising' },
];

// ============================================================================
// COMPETENCIA - Centros comerciales competidores
// ============================================================================
export const COMPETENCIA = [
  {
    name: 'Real Plaza Puruchuco',
    full_name: 'Real Plaza Puruchuco',
    group: 'Grupo Intercorp',
    market_share: 22,
    visitors_monthly: '2M',
    rank: 1,
    type: 'Mall tradicional',
    nse: 'B/C',
    fortalezas: ['Tamaño (126,000 m²)', 'Sostenibilidad', '440+ tiendas'],
    debilidades: ['Ubicación (Lima Este)', 'NSE diferente'],
  },
  {
    name: 'Mall Aventura',
    full_name: 'Mall Aventura Santa Anita',
    group: 'Grupo Ripley',
    market_share: 15,
    visitors_monthly: '2.1M',
    rank: 2,
    type: 'Mall familiar',
    nse: 'B/C',
    fortalezas: ['Entretenimiento OASIS', 'Familias', 'Expansión agresiva'],
    debilidades: ['Ubicación periférica', 'Menos marcas premium'],
  },
  {
    name: 'Larcomar',
    full_name: 'Larcomar',
    group: 'Parque Arauco',
    market_share: 8,
    visitors_monthly: '800K',
    rank: 3,
    type: 'Lifestyle',
    nse: 'A/B',
    fortalezas: ['Vista al mar', 'Turismo', 'Ubicación Miraflores'],
    debilidades: ['Tamaño limitado', 'Estacionamiento'],
  },
  {
    name: 'MegaPlaza',
    full_name: 'MegaPlaza Independencia',
    group: 'Parque Arauco',
    market_share: 12,
    visitors_monthly: '1.5M',
    rank: 4,
    type: 'Mall masivo',
    nse: 'C/D',
    fortalezas: ['Lima Norte', 'Alto tráfico', 'Precio'],
    debilidades: ['NSE diferente', 'Menos premium'],
  },
  {
    name: 'Parque La Molina',
    full_name: 'Parque La Molina',
    group: 'Parque Arauco',
    market_share: 3,
    visitors_monthly: 'Nuevo',
    rank: 5,
    type: 'Lifestyle',
    nse: 'A/B',
    fortalezas: ['Nuevo (2024)', 'Zona objetivo', 'Formato lifestyle'],
    debilidades: ['En ramp-up', 'Tamaño menor'],
  },
  {
    name: 'Jockey Plaza',
    full_name: 'Jockey Plaza Shopping Center',
    group: 'Grupo Altas Cumbres',
    market_share: 18,
    visitors_monthly: '1.8M',
    rank: null,
    type: 'Premium',
    nse: 'A/B (70%)',
    fortalezas: ['Marcas premium', '500+ tiendas', 'NSE A/B', 'Louis Vuitton'],
    debilidades: ['Percepción de precio alto'],
  },
];

// ============================================================================
// BUDGET ALLOCATION - Distribución de presupuesto por canal
// ============================================================================
export const BUDGET_ALLOCATION = {
  total_budget: 45000, // USD mensual
  period: 'Mensual',
  objective: 'Alcance + Frecuencia + Interacciones',
  distribution: {
    meta_ads: {
      name: 'Meta Ads',
      amount: 20250, // 45%
      percentage: 45,
      status: 'overperforming',
      kpi_primary: 'Alcance',
      kpi_secondary: 'Engagement Rate',
      target: 'Alcance 1.5M, ER 4.5%+',
      current_performance: 'Alcance 1.8M, ER 5.2%',
      platforms: ['Facebook', 'Instagram'],
      formats: ['Feed', 'Stories', 'Reels', 'Carousel'],
    },
    google_display: {
      name: 'Google Display',
      amount: 11250, // 25%
      percentage: 25,
      status: 'performing',
      kpi_primary: 'Impresiones',
      kpi_secondary: 'Frecuencia',
      target: 'CPM $4.50, Freq 3.0+',
      current_performance: 'CPM $4.20, Freq 3.2',
    },
    youtube: {
      name: 'YouTube',
      amount: 9000, // 20%
      percentage: 20,
      status: 'performing',
      kpi_primary: 'Video Views',
      kpi_secondary: 'VTR (View-through rate)',
      target: 'CPV $0.03, VTR 25%+',
      current_performance: 'CPV $0.028, VTR 28%',
      formats: ['Pre-roll', 'Bumpers', 'Discovery'],
    },
    google_search: {
      name: 'Google Search',
      amount: 4500, // 10%
      percentage: 10,
      status: 'ontrack',
      kpi_primary: 'Clicks',
      kpi_secondary: 'CTR',
      target: 'CTR 8%+, CPC $0.45',
      current_performance: 'CTR 9.2%, CPC $0.42',
      focus: 'Branded + Tiendas específicas',
    },
  },
  recommendations: [
    {
      type: 'maintain',
      channel: 'meta_ads',
      reason: 'Excelente performance en Reels (+32% engagement vs feed). Mantener mix actual.',
      impact: 'Mantener alcance de 1.8M usuarios',
    },
    {
      type: 'increase',
      channel: 'youtube',
      from: 20,
      to: 25,
      reason: 'Videos de experiencias tienen 28% VTR, superior al benchmark de 22%',
      impact: '+300K video views estimados',
    },
    {
      type: 'decrease',
      channel: 'google_display',
      from: 25,
      to: 20,
      reason: 'Frecuencia ya óptima (3.2), redirigir a YouTube para awareness',
      impact: 'Optimización de mix sin perder alcance',
    },
  ],
};

// ============================================================================
// CONTENT PILLARS - Pilares de contenido Jockey Plaza
// ============================================================================
export const CONTENT_PILLARS = [
  {
    id: 1,
    title: 'Experiencias & Eventos',
    description: 'Exposiciones inmersivas, eventos especiales y activaciones',
    status: 'overperforming',
    performance: {
      engagement_rate: 6.8,
      reach: 680000,
      interactions: 46200,
    },
    recommended_budget: 0.30,
    formats: ['Reels', 'Stories', 'Lives', 'Video largo'],
    examples: ['Hello Kitty Experience', 'Blow Up Experience', 'Exposiciones'],
  },
  {
    id: 2,
    title: 'Moda & Tendencias',
    description: 'Nuevas colecciones, marcas y tendencias de temporada',
    status: 'performing',
    performance: {
      engagement_rate: 5.2,
      reach: 850000,
      interactions: 44200,
    },
    recommended_budget: 0.25,
    formats: ['Carousel', 'Reels', 'Feed posts'],
    examples: ['Nuevas marcas', 'Pasillo Inditex', 'Lujo'],
  },
  {
    id: 3,
    title: 'Gastronomía',
    description: 'Restaurantes, nuevas aperturas y experiencias culinarias',
    status: 'overperforming',
    performance: {
      engagement_rate: 7.2,
      reach: 520000,
      interactions: 37440,
    },
    recommended_budget: 0.20,
    formats: ['Reels', 'Stories', 'UGC'],
    examples: ['Nuevos restaurantes', 'Food tours', 'Chefs'],
  },
  {
    id: 4,
    title: 'Entretenimiento Familiar',
    description: 'Cine, juegos y actividades para toda la familia',
    status: 'performing',
    performance: {
      engagement_rate: 6.5,
      reach: 420000,
      interactions: 27300,
    },
    recommended_budget: 0.15,
    formats: ['Video', 'Stories', 'Carousel'],
    examples: ['Cinemark', 'Happyland', 'Divercity', 'Planes fin de semana'],
  },
  {
    id: 5,
    title: 'Jockey Te Quiere Feliz',
    description: 'Contenido de marca, valores y comunidad',
    status: 'ontrack',
    performance: {
      engagement_rate: 4.8,
      reach: 380000,
      interactions: 18240,
    },
    recommended_budget: 0.10,
    formats: ['Video institucional', 'Stories', 'UGC'],
    examples: ['Campañas de marca', 'RSE', 'Comunidad'],
  },
];

// ============================================================================
// ALERTS - Alertas automáticas del sistema
// ============================================================================
export const ALERTS = [
  {
    id: 1,
    severity: 'low',
    title: 'Oportunidad: Engagement alto en Gastronomía',
    message: 'Contenido de restaurantes tiene 7.2% engagement rate, 48% sobre el promedio',
    action: 'Considerar aumentar contenido gastronómico y colaboraciones con restaurantes',
    timestamp: '2025-12-10T14:30:00',
  },
  {
    id: 2,
    severity: 'medium',
    title: 'Frecuencia alcanzando óptimo',
    message: 'Frecuencia actual de 3.5 está en el rango óptimo (3.0-4.0). Monitorear para evitar saturación.',
    action: 'Mantener niveles actuales, no aumentar impresiones sin aumentar alcance',
    timestamp: '2025-12-10T12:15:00',
  },
  {
    id: 3,
    severity: 'low',
    title: 'Competidor: Parque La Molina inaugurado',
    message: 'Nuevo mall lifestyle en La Molina (zona objetivo). Monitorear share of voice.',
    action: 'Reforzar contenido dirigido a La Molina, destacar diferenciadores premium',
    timestamp: '2025-12-10T10:00:00',
  },
];

// ============================================================================
// COMPETITOR INSIGHTS - Análisis de competencia de malls
// ============================================================================
export const COMPETITOR_INSIGHTS = [
  {
    brand: 'Real Plaza',
    full_name: 'Real Plaza Puruchuco',
    location: 'Ate (Lima Este)',
    share_of_voice: 28,
    sentiment: 72,
    threat_level: 'medium',
    trending_topics: ['Sostenibilidad', 'Tamaño', 'Nuevas tiendas'],
    description: 'Líder en recall pero diferente NSE y ubicación. No compite directamente por mismo público.',
  },
  {
    brand: 'Mall Aventura',
    full_name: 'Mall Aventura',
    location: 'Santa Anita, SJL',
    share_of_voice: 18,
    sentiment: 74,
    threat_level: 'medium',
    trending_topics: ['Entretenimiento', 'Familias', 'OASIS'],
    description: 'Fuerte en entretenimiento familiar. Diferente zona geográfica y NSE.',
  },
  {
    brand: 'Larcomar',
    full_name: 'Larcomar',
    location: 'Miraflores',
    share_of_voice: 15,
    sentiment: 78,
    threat_level: 'high',
    trending_topics: ['Vista al mar', 'Turismo', 'Lifestyle'],
    description: 'Competidor directo en NSE A/B. Diferenciador: experiencia lifestyle y turismo.',
  },
  {
    brand: 'Parque La Molina',
    full_name: 'Parque La Molina',
    location: 'La Molina',
    share_of_voice: 8,
    sentiment: 75,
    threat_level: 'high',
    trending_topics: ['Nuevo', 'Lifestyle', 'La Molina'],
    description: 'Nuevo competidor directo en zona objetivo. Formato lifestyle similar a Larcomar.',
  },
  {
    brand: 'MegaPlaza',
    full_name: 'MegaPlaza',
    location: 'Independencia',
    share_of_voice: 12,
    sentiment: 70,
    threat_level: 'low',
    trending_topics: ['Lima Norte', 'Ofertas', 'Tráfico'],
    description: 'Diferente zona y NSE. No compite directamente por mismo público objetivo.',
  },
  {
    brand: 'Jockey Plaza',
    full_name: 'Jockey Plaza Shopping Center',
    location: 'Surco',
    share_of_voice: 22,
    sentiment: 82,
    threat_level: null,
    trending_topics: ['Marcas de lujo', 'Experiencias', 'Premium', 'Louis Vuitton'],
    description: 'El mall premium de Lima. 70% visitantes NSE A/B. Único con Louis Vuitton.',
  },
];

// ============================================================================
// SOCIAL MEDIA METRICS - Métricas de redes sociales
// ============================================================================
export const SOCIAL_MEDIA_METRICS = {
  instagram: {
    handle: '@jockeyplaza',
    followers: 254000,
    following: 500,
    posts: 4029,
    engagement_rate: 4.8,
    avg_likes: 8500,
    avg_comments: 185,
    growth_monthly: '+2.3%',
    top_content: 'Reels de experiencias',
  },
  tiktok: {
    handle: '@jockeytequierefeliz',
    followers: 38600,
    likes_total: 627000,
    following: 177,
    engagement_rate: 8.2,
    avg_views: 45000,
    growth_monthly: '+12.5%',
    top_content: 'Trends de moda y gastronomía',
  },
  facebook: {
    followers: 312000,
    engagement_rate: 2.1,
    reach_organic: 85000,
    top_content: 'Eventos y promociones',
  },
  linkedin: {
    followers: 42523,
    engagement_rate: 3.5,
    top_content: 'Noticias corporativas y retail',
  },
};

// ============================================================================
// TIMING PERFORMANCE - Rendimiento por horarios
// ============================================================================
export const TIMING_PERFORMANCE = {
  best_days: [
    { day: 'Sábado', engagement_multiplier: 1.45, reach_multiplier: 1.35 },
    { day: 'Domingo', engagement_multiplier: 1.38, reach_multiplier: 1.30 },
    { day: 'Viernes', engagement_multiplier: 1.25, reach_multiplier: 1.20 },
  ],
  best_hours: [
    { hour: '19:00-21:00', engagement_multiplier: 1.50, label: 'Prime time' },
    { hour: '12:00-14:00', engagement_multiplier: 1.25, label: 'Almuerzo' },
    { hour: '16:00-18:00', engagement_multiplier: 1.20, label: 'Tarde' },
  ],
  worst_hours: [
    { hour: '00:00-06:00', engagement_multiplier: 0.35, label: 'Madrugada' },
    { hour: '06:00-09:00', engagement_multiplier: 0.65, label: 'Mañana temprano' },
  ],
};

// ============================================================================
// EXPORTS
// ============================================================================
export default {
  MOCK_GA4_DATA,
  PERFORMANCE_KPIS,
  OPPORTUNITY_SCORE,
  CATEGORIAS_PERFORMANCE,
  TIENDAS_TOP,
  COMPETENCIA,
  BUDGET_ALLOCATION,
  CONTENT_PILLARS,
  ALERTS,
  COMPETITOR_INSIGHTS,
  SOCIAL_MEDIA_METRICS,
  TIMING_PERFORMANCE,
};
