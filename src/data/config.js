// Configuración general del Jockey Plaza Algorithm
// Textos, mensajes, secciones y configuración de UI

// ============================================================================
// BRAND CONFIGURATION - Configuración de marca
// ============================================================================
export const BRAND_CONFIG = {
  name: 'Jockey Plaza Algorithm',
  tagline: 'Social Intelligence para Jockey Plaza',
  subtitle: 'Optimización de alcance, frecuencia e interacciones en digital',
  product: 'Jockey Plaza & Boulevard de Asia',
  market: 'Lima Metropolitana (Surco, La Molina, San Borja, Miraflores, San Isidro)',
  client: 'Jockey Plaza Shopping Center',
  version: '1.0.0',
  slogan: '¡Jockey Te Quiere Feliz!',
  purpose: 'Inspirar al mundo para que sea feliz, creando experiencias que construyan un futuro mejor',
};

// ============================================================================
// LAYER TITLES - Títulos y descripciones de las 4 capas
// ============================================================================
export const LAYER_CONFIG = {
  data: {
    id: 'data',
    name: 'Captura de Señales',
    subtitle: 'Monitoreo en tiempo real del ecosistema digital retail',
    description: 'Búsqueda, Tendencia, Intención, Engagement',
    icon: 'Search',
    color: 'from-jockey-dark to-jockey-gray',
  },
  decision: {
    id: 'decision',
    name: 'Inteligencia de Mercado',
    subtitle: 'Insights automáticos para optimizar awareness y engagement',
    description: 'Análisis y definición de estrategia',
    icon: 'Target',
    color: 'from-jockey-gray to-jockey-primary',
  },
  execution: {
    id: 'execution',
    name: 'Activación Estratégica',
    subtitle: 'Distribución inteligente de presupuesto por alcance y frecuencia',
    description: 'Implementación en tiempo real',
    icon: 'Zap',
    color: 'from-jockey-primary to-jockey-teal',
  },
  optimization: {
    id: 'optimization',
    name: 'Performance & Optimización',
    subtitle: 'Métricas de alcance, frecuencia e interacciones en tiempo real',
    description: 'Evaluación y redistribución',
    icon: 'TrendingUp',
    color: 'from-jockey-teal to-jockey-primary',
  },
};

// ============================================================================
// KEY MESSAGES - Mensajes clave de comunicación Jockey Plaza
// ============================================================================
export const KEY_MESSAGES = {
  experiencias: {
    title: 'Experiencias Únicas',
    message: 'Más que un centro comercial, un destino de experiencias',
    description: 'Exposiciones inmersivas, eventos culturales y entretenimiento para toda la familia',
  },
  marcas: {
    title: 'Marcas Premium',
    message: 'Las mejores marcas nacionales e internacionales en un solo lugar',
    description: 'Louis Vuitton, Zara, H&M, Dolce & Gabbana y más de 500 tiendas',
  },
  gastronomia: {
    title: 'Gastronomía de Primer Nivel',
    message: 'Los mejores restaurantes y experiencias culinarias',
    description: 'Desde comida rápida hasta alta cocina con las mejores opciones de Lima',
  },
  felicidad: {
    title: 'Jockey Te Quiere Feliz',
    message: 'Creando momentos memorables para ti y tu familia',
    description: 'Entretenimiento, moda, gastronomía y servicios pensados en tu felicidad',
  },
  boulevard: {
    title: 'Boulevard de Asia',
    message: 'Tu destino de verano al sur de Lima',
    description: 'El mejor centro comercial de playa con más de 200 establecimientos',
  },
};

// ============================================================================
// DATA SOURCES - Configuración de fuentes de datos
// ============================================================================
export const DATA_SOURCES_CONFIG = {
  googleTrends: {
    enabled: true,
    name: 'Google Trends',
    description: 'Tendencias de búsqueda de tiendas y categorías',
    icon: 'TrendingUp',
    color: 'text-jockey-primary',
    bgColor: 'bg-jockey-primary/10',
    region: 'PE',
    category: 'Shopping',
    interval: 'hourly',
    status: 'active',
    geo: ['Lima', 'Surco', 'La Molina', 'San Borja', 'Miraflores'],
  },
  tiktok: {
    enabled: true,
    name: 'TikTok',
    description: 'Hashtags y contenido viral de moda y lifestyle',
    icon: 'Video',
    color: 'text-jockey-dark',
    bgColor: 'bg-jockey-dark/10',
    scraping: 'public',
    status: 'active',
  },
  meta: {
    enabled: true,
    name: 'Meta Platforms',
    description: 'Facebook e Instagram insights',
    icon: 'Share2',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    platforms: ['Facebook', 'Instagram'],
    status: 'active',
  },
  youtube: {
    enabled: true,
    name: 'YouTube',
    description: 'Videos de experiencias y marcas',
    icon: 'Youtube',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    status: 'active',
  },
  retail: {
    enabled: true,
    name: 'Portales Retail',
    description: 'Peru Retail, Mercado Negro, Fashion Network',
    icon: 'Globe',
    color: 'text-jockey-teal',
    bgColor: 'bg-jockey-teal/10',
    sources: ['Peru Retail', 'Mercado Negro', 'Fashion Network PE'],
    status: 'active',
  },
  ga4: {
    enabled: false,
    name: 'Google Analytics 4',
    description: 'Tráfico web jockeyplaza.com.pe',
    icon: 'BarChart3',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    mock_data: true,
    status: 'active',
  },
};

// ============================================================================
// CHANNELS - Canales de activación (enfoque en alcance e interacciones)
// ============================================================================
export const CHANNELS_CONFIG = {
  meta_ads: {
    name: 'Meta Ads',
    icon: 'Share2',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    primary_kpi: 'Alcance + Frecuencia',
    secondary_kpi: 'Engagement Rate',
    description: 'Facebook e Instagram - Principal canal de awareness',
    subchannels: ['Feed Ads', 'Stories', 'Reels', 'Carousel'],
  },
  google_display: {
    name: 'Google Display',
    icon: 'Monitor',
    color: 'text-jockey-primary',
    bgColor: 'bg-jockey-primary/10',
    primary_kpi: 'Impresiones + Frecuencia',
    secondary_kpi: 'CPM',
    description: 'Red de display para alcance masivo',
  },
  youtube: {
    name: 'YouTube',
    icon: 'Youtube',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    primary_kpi: 'Video Views',
    secondary_kpi: 'View-through rate',
    description: 'Video pre-roll, bumpers y discovery',
  },
  google_search: {
    name: 'Google Search',
    icon: 'Search',
    color: 'text-jockey-teal',
    bgColor: 'bg-jockey-teal/10',
    primary_kpi: 'Clicks',
    secondary_kpi: 'CTR',
    description: 'Búsquedas de marca y tiendas específicas',
  },
};

// ============================================================================
// AUDIENCES - Audiencias objetivo (Shoppers)
// ============================================================================
export const TARGET_AUDIENCES = [
  {
    id: 'familias',
    name: 'Familias con Hijos',
    description: '30-50 años, NSE A/B, buscan experiencias',
    size: '~850,000',
    age_range: '30-50',
    priority: 'high',
    nse: 'A/B',
    segments: [
      {
        name: 'Padres Jóvenes',
        size: '~450,000',
        age: '30-40',
        characteristics: ['Hijos pequeños', 'Buscan entretenimiento', 'Fin de semana', 'Decisores de compra'],
      },
      {
        name: 'Familias Establecidas',
        size: '~400,000',
        age: '40-50',
        characteristics: ['Hijos adolescentes', 'Mayor ticket promedio', 'Moda y gastronomía', 'Fidelizados'],
      },
    ],
    interests: ['Entretenimiento familiar', 'Moda infantil', 'Gastronomía', 'Cine', 'Experiencias'],
    message: 'Jockey te quiere feliz: diversión para toda la familia',
    channels: {
      'Meta Ads': 45,
      'YouTube': 25,
      'Google Display': 20,
      'Google Search': 10,
    },
    engagement_rate: 4.8,
    frequency_target: 3.5, // Frecuencia objetivo semanal
  },
  {
    id: 'jovenes',
    name: 'Jóvenes Adultos',
    description: '18-35 años, NSE A/B/C+, alto engagement digital',
    size: '~1,200,000',
    age_range: '18-35',
    priority: 'high',
    nse: 'A/B/C+',
    segments: [
      {
        name: 'Gen Z',
        size: '~550,000',
        age: '18-25',
        characteristics: ['Nativos digitales', 'TikTok e Instagram', 'Fast fashion', 'Experiencias sociales'],
      },
      {
        name: 'Millennials',
        size: '~650,000',
        age: '26-35',
        characteristics: ['Profesionales', 'Marcas premium', 'Gastronomía', 'Lifestyle aspiracional'],
      },
    ],
    interests: ['Moda', 'Tecnología', 'Gastronomía trendy', 'Eventos', 'Redes sociales'],
    message: 'Las mejores marcas y experiencias te esperan',
    channels: {
      'Meta Ads': 50,
      'YouTube': 20,
      'Google Display': 15,
      'Google Search': 15,
    },
    engagement_rate: 6.2,
    frequency_target: 4.0,
  },
  {
    id: 'premium',
    name: 'Shoppers Premium',
    description: '35-55 años, NSE A, alto poder adquisitivo',
    size: '~180,000',
    age_range: '35-55',
    priority: 'medium',
    nse: 'A',
    segments: [
      {
        name: 'Ejecutivos',
        size: '~100,000',
        age: '35-45',
        characteristics: ['Alto ticket', 'Marcas de lujo', 'Tiempo limitado', 'Conveniencia'],
      },
      {
        name: 'Affluent',
        size: '~80,000',
        age: '45-55',
        characteristics: ['Máximo poder adquisitivo', 'Exclusividad', 'Louis Vuitton, Dior', 'Experiencias VIP'],
      },
    ],
    interests: ['Lujo', 'Moda exclusiva', 'Gastronomía premium', 'Arte y cultura', 'Servicios VIP'],
    message: 'El destino de las mejores marcas del mundo',
    channels: {
      'Meta Ads': 35,
      'Google Display': 25,
      'YouTube': 25,
      'Google Search': 15,
    },
    engagement_rate: 3.2,
    frequency_target: 2.5,
  },
];

// ============================================================================
// TIMING - Mejores momentos para pauta (Retail)
// ============================================================================
export const OPTIMAL_TIMING = {
  dayparts: [
    { name: 'Mañana', hours: '10:00 - 12:00', performance: 'medium', multiplier: 1.1, audience: 'Premium, Familias' },
    { name: 'Almuerzo', hours: '12:00 - 15:00', performance: 'high', multiplier: 1.3, audience: 'Jóvenes, Ejecutivos' },
    { name: 'Tarde', hours: '16:00 - 19:00', performance: 'high', multiplier: 1.4, audience: 'Todas las audiencias' },
    { name: 'Noche', hours: '19:00 - 22:00', performance: 'high', multiplier: 1.5, audience: 'Familias, Jóvenes' },
  ],
  weekdays: [
    { name: 'Lunes', performance: 'low', recommended: false },
    { name: 'Martes', performance: 'medium', recommended: false },
    { name: 'Miércoles', performance: 'medium', recommended: true },
    { name: 'Jueves', performance: 'high', recommended: true },
    { name: 'Viernes', performance: 'high', recommended: true },
    { name: 'Sábado', performance: 'very_high', recommended: true },
    { name: 'Domingo', performance: 'very_high', recommended: true },
  ],
  events: [
    'Día de la Madre (Mayo) - Peak Season',
    'Fiestas Patrias (Julio) - Alta demanda',
    'Día del Shopping (Septiembre)',
    'Black Friday / Cyber Days (Noviembre)',
    'Navidad y Año Nuevo (Diciembre) - Peak Season',
    'Verano - Boulevard de Asia (Enero-Marzo)',
  ],
  geographies: [
    { district: 'Surco', hours: '16-22 PM', multiplier: 1.5, focus: 35 },
    { district: 'La Molina', hours: '17-21 PM', multiplier: 1.4, focus: 25 },
    { district: 'San Borja', hours: '18-21 PM', multiplier: 1.3, focus: 15 },
    { district: 'Miraflores', hours: '17-22 PM', multiplier: 1.2, focus: 12 },
    { district: 'San Isidro', hours: '12-14, 18-20', multiplier: 1.3, focus: 8 },
    { district: 'Otros Lima', hours: '16-21 PM', multiplier: 1.0, focus: 5 },
  ],
};

// ============================================================================
// METRIC CARDS - Configuración de tarjetas métricas principales
// ============================================================================
export const METRIC_CARDS_CONFIG = [
  {
    id: 'reach',
    title: 'Alcance',
    description: 'Usuarios únicos alcanzados',
    icon: 'Users',
    color: 'jockey-primary',
    gradient: 'from-jockey-primary to-jockey-dark',
  },
  {
    id: 'impressions',
    title: 'Impresiones',
    description: 'Total de veces mostrado',
    icon: 'Eye',
    color: 'jockey-dark',
    gradient: 'from-jockey-dark to-jockey-gray',
  },
  {
    id: 'frequency',
    title: 'Frecuencia',
    description: 'Impresiones / Alcance (recordación)',
    icon: 'Repeat',
    color: 'jockey-teal',
    gradient: 'from-jockey-teal to-jockey-primary',
  },
  {
    id: 'engagement',
    title: 'Interacciones',
    description: 'Likes, comentarios, shares, saves',
    icon: 'Heart',
    color: 'jockey-primary',
    gradient: 'from-jockey-primary to-jockey-teal',
  },
];

// ============================================================================
// COMPETITORS - Configuración de competidores
// ============================================================================
export const COMPETITORS_CONFIG = [
  {
    id: 'real_plaza',
    name: 'Real Plaza Puruchuco',
    group: 'Grupo Intercorp',
    type: 'direct',
    threat_level: 'high',
    location: 'Ate',
    nse_focus: 'B/C',
    strengths: ['Tamaño', 'Sostenibilidad', '440+ tiendas'],
  },
  {
    id: 'mall_aventura',
    name: 'Mall Aventura',
    group: 'Grupo Ripley',
    type: 'direct',
    threat_level: 'high',
    location: 'Santa Anita, SJL',
    nse_focus: 'B/C',
    strengths: ['Entretenimiento', 'Familias', 'Expansión'],
  },
  {
    id: 'larcomar',
    name: 'Larcomar',
    group: 'Parque Arauco',
    type: 'direct',
    threat_level: 'medium',
    location: 'Miraflores',
    nse_focus: 'A/B',
    strengths: ['Turismo', 'Vista al mar', 'Lifestyle'],
  },
  {
    id: 'megaplaza',
    name: 'MegaPlaza',
    group: 'Parque Arauco',
    type: 'indirect',
    threat_level: 'medium',
    location: 'Independencia',
    nse_focus: 'C/D',
    strengths: ['Lima Norte', 'Tráfico alto', 'Precio'],
  },
  {
    id: 'mallplaza',
    name: 'Mallplaza',
    group: 'Grupo Falabella',
    type: 'direct',
    threat_level: 'medium',
    location: 'Comas, Bellavista',
    nse_focus: 'B/C',
    strengths: ['Falabella integrado', 'Expansión'],
  },
  {
    id: 'parque_molina',
    name: 'Parque La Molina',
    group: 'Parque Arauco',
    type: 'direct',
    threat_level: 'high',
    location: 'La Molina',
    nse_focus: 'A/B',
    strengths: ['Nuevo (2024)', 'Lifestyle', 'Zona objetivo'],
  },
];

// ============================================================================
// STORES CATEGORIES - Categorías de tiendas para tracking
// ============================================================================
export const STORE_CATEGORIES = {
  ancla: {
    name: 'Tiendas Ancla',
    stores: ['Falabella', 'Ripley', 'Oechsle', 'Plaza Vea', 'Tottus', 'Sodimac'],
    priority: 'high',
  },
  lujo: {
    name: 'Lujo',
    stores: ['Louis Vuitton', 'Dolce & Gabbana', 'Chanel', 'Dior', 'Michael Kors', 'Polo Ralph Lauren', 'Salvatore Ferragamo'],
    priority: 'high',
  },
  fast_fashion: {
    name: 'Fast Fashion',
    stores: ['Zara', 'H&M', 'Forever 21', 'Stradivarius', 'Oysho', 'Massimo Dutti'],
    priority: 'high',
  },
  deportes: {
    name: 'Deportes & Lifestyle',
    stores: ['Nike', 'Adidas', 'Puma', 'Reebok', 'Under Armour', 'Columbia', 'North Face'],
    priority: 'medium',
  },
  gastronomia: {
    name: 'Gastronomía',
    stores: ['Hard Rock Café', 'Tanta', 'Chilis', 'Friday\'s', 'KO', 'La Bodega de la Trattoria'],
    priority: 'medium',
  },
  entretenimiento: {
    name: 'Entretenimiento',
    stores: ['Cinemark', 'Happyland', 'Divercity', 'Kraken'],
    priority: 'medium',
  },
};

// ============================================================================
// UI TEXT - Textos de interfaz
// ============================================================================
export const UI_TEXT = {
  loading: 'Cargando Jockey Plaza Algorithm...',
  lastUpdate: 'Última actualización',
  systemActive: 'Sistema activo',
  noData: 'No hay datos disponibles',
  error: 'Error al cargar datos',
  retry: 'Reintentar',

  // Footer
  footer: {
    copyright: '© 2025 Jockey Plaza Algorithm - Jockey Plaza Shopping Center',
    version: 'v1.0.0',
  },

  // Buttons
  buttons: {
    viewDetails: 'Ver detalles',
    export: 'Exportar',
    refresh: 'Actualizar',
    filter: 'Filtrar',
    expandAll: 'Mostrar todas las tiendas',
    collapseAll: 'Mostrar solo top 5',
  },
};

// ============================================================================
// EXPORT ALL
// ============================================================================
export default {
  BRAND_CONFIG,
  LAYER_CONFIG,
  KEY_MESSAGES,
  DATA_SOURCES_CONFIG,
  CHANNELS_CONFIG,
  TARGET_AUDIENCES,
  OPTIMAL_TIMING,
  METRIC_CARDS_CONFIG,
  COMPETITORS_CONFIG,
  STORE_CATEGORIES,
  UI_TEXT,
};
