# Jockey Algorithm

**Social Intelligence para Jockey Plaza - Awareness & Engagement**

![Version](https://img.shields.io/badge/version-1.0.0-d10947)
![Status](https://img.shields.io/badge/status-MVP-1a1a1a)
![License](https://img.shields.io/badge/license-Proprietary-d10947)

---

## Descripcion

El **Jockey Algorithm** es una plataforma de Social Intelligence que unifica datos de diversas fuentes digitales para optimizar la estrategia de **awareness y engagement** de Jockey Plaza, el centro comercial mas grande del Peru.

Identifica microcomportamientos, tendencias y oportunidades en el ecosistema digital retail de Lima Metropolitana, optimizando la inversion publicitaria mediante decisiones automatizadas basadas en senales de data en tiempo real.

### Propuesta de Valor

- **Cliente**: Jockey Plaza Shopping Center
- **Mercado**: Lima Metropolitana (Surco, La Molina, San Borja, Miraflores, San Isidro)
- **Objetivo**: Sistema automatizado de Social Intelligence para optimizar campanas de awareness y engagement
- **Enfoque**: Alcance, Impresiones, Frecuencia (impresiones/alcance) e Interacciones

### KPIs Principales (NO conversion)

| KPI | Descripcion | Por que importa |
|-----|-------------|-----------------|
| **Alcance** | Usuarios unicos alcanzados | Mide cuantas personas ven la marca |
| **Impresiones** | Veces que se muestra el anuncio | Volumen total de exposicion |
| **Frecuencia** | Impresiones / Alcance | Recordacion publicitaria (ad recall) |
| **Interacciones** | Likes, comentarios, shares, clics | Engagement con el contenido |

> **Nota**: Este proyecto NO mide visitas fisicas al mall porque no existe correlacion digital confiable.

---

## Las 4 Capas del Algorithm

### 1. Capa de Datos (Data Layer)
Monitoreo en tiempo real del ecosistema digital retail:
- **Google Trends**: Busquedas de moda, gastronomia, entretenimiento en Lima
- **TikTok**: Hashtags y contenido viral de lifestyle y shopping
- **Meta Platforms**: Insights de Facebook e Instagram
- **YouTube**: Contenido de influencers y experiencias

**Metricas**: Busqueda, Tendencia, Intencion, Engagement

**Distritos monitoreados**: Surco (35%), La Molina (25%), San Borja (20%), Miraflores (12%), San Isidro (8%)

### 2. Capa de Decision (Decision Layer)
Inteligencia de mercado y estrategia automatica:
- **Jockey Opportunity Score**: Indice de oportunidad 0-100
- **Audiencias objetivo**:
  - Familias con Hijos (25-45 anos, ~180K personas)
  - Jovenes Adultos Gen Z (18-30 anos, ~250K personas)
  - Shoppers Premium (30-55 anos, ~85K personas)
- **Mensajes clave**: Experiencias, Moda, Gastronomia, Entretenimiento
- **Recomendaciones automaticas** basadas en signals de mercado

**Output**: Que mensaje activar, en que momento y en que plataforma

### 3. Capa de Ejecucion (Execution Layer)
Distribucion inteligente de presupuesto y contenidos:
- **Budget Allocation**: Meta Ads (45%), Google Display (25%), YouTube (20%), Search (10%)
- **Categorias monitoreadas**: Fast Fashion, Lujo, Tiendas Ancla, Gastronomia, Entretenimiento
- **Timing Optimo**: Manana (8-10 AM), Tarde (18-21 PM), Fines de semana
- **KPIs por canal**: Alcance, Impresiones, Frecuencia, Engagement Rate, CPM

**Canales de engagement**:
- Reels e Historias (Meta): Contenido de experiencias
- YouTube Bumper Ads: Frecuencia y recordacion
- Display programatico: Cobertura en distritos clave

**Output**: Implementacion en tiempo real de campanas optimizadas

### 4. Capa de Optimizacion (Optimization Layer)
Performance y ajustes automaticos:
- **KPIs principales**: Alcance total, Impresiones, Frecuencia, Interacciones
- **Funnel de awareness**: Impresiones -> Alcance -> Interacciones -> Visitas Web
- **Analisis de competencia**: Real Plaza, Mall Aventura, Larcomar, Parque Arauco
- **Optimizacion de frecuencia**: Target 3.5x para maximizar ad recall

**Output**: Evaluacion continua y redistribucion de inversion

---

## Stack Tecnologico

### Frontend
- **React 18** + **Vite**
- **Tailwind CSS** (branding Jockey: carmesi #d10947, negro #1a1a1a, blanco)
- **Recharts** para visualizaciones de datos
- **Lucide React** para iconografia

### Scrapers & Data
- **Python 3.10** con `pytrends` para Google Trends
- **Node.js 18** con `axios` + `cheerio` para TikTok y Meta
- **Mock Data GA4** para demostracion

### Infraestructura
- **GitHub** (repositorio + versionado)
- **GitHub Actions** (CI/CD automatico - scrapers semanales)
- **Netlify** (hosting + deploy continuo)

---

## Instalacion Rapida

### 1. Clonar repositorio

```bash
git clone https://github.com/alonsix6/jockey-algorithm-mvp.git
cd jockey-algorithm-mvp
```

### 2. Instalar dependencias

```bash
# Frontend
npm install

# Scrapers (opcional)
cd scrapers
npm install
pip install -r requirements.txt
```

### 3. Ejecutar en desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### 4. Build para produccion

```bash
npm run build
npm run preview
```

---

## Paleta de Colores Jockey Plaza

La paleta esta basada en los colores institucionales de Jockey Plaza:

```javascript
jockey: {
  // Primarios
  primary: '#d10947',        // Carmesi intenso (principal)
  primaryDark: '#b0073b',    // Carmesi oscuro
  dark: '#1a1a1a',           // Negro
  light: '#ffffff',          // Blanco

  // Complementarios
  teal: '#0d9488',           // Verde azulado (acento)
  coral: '#f97316',          // Coral (energia)
  gold: '#f59e0b',           // Dorado (premium)

  // Neutros
  gray: '#6b7280',           // Gris corporativo
}
```

---

## Datos y Configuracion

### Keywords y Hashtags

Archivo: `src/data/keywords.js`

**Categorias de keywords:**
- **Alta intencion**: tiendas jockey plaza, restaurantes jockey, cine jockey
- **Media intencion**: centros comerciales lima, donde comprar ropa lima
- **Baja intencion**: moda peru, tendencias lima, que hacer en lima

**Categorias de contenido:**
- Marca Jockey Plaza
- Fast Fashion (Zara, H&M, Forever 21)
- Lujo (Louis Vuitton, Carolina Herrera)
- Tiendas Ancla (Falabella, Ripley, Paris)
- Gastronomia (Boulevard, Patio de Comidas)
- Entretenimiento (Cineplanet, Bowling)

### Audiencias Objetivo

Archivo: `src/data/config.js`

**3 audiencias principales:**

1. **Familias con Hijos** (25-45 anos, ~180,000 personas)
   - Interes: Entretenimiento familiar, compras, gastronomia
   - Engagement Rate: 5.8%
   - Frecuencia Target: 4.0x

2. **Jovenes Adultos Gen Z** (18-30 anos, ~250,000 personas)
   - Interes: Moda, tendencias, experiencias, redes sociales
   - Engagement Rate: 6.2%
   - Frecuencia Target: 3.5x

3. **Shoppers Premium** (30-55 anos, ~85,000 personas)
   - Interes: Lujo, exclusividad, gastronomia premium
   - Engagement Rate: 4.5%
   - Frecuencia Target: 3.0x

### Categorias Monitoreadas

| Categoria | Tiendas Ejemplo | Engagement |
|-----------|-----------------|------------|
| Fast Fashion | Zara, H&M, Forever 21 | 5.8% |
| Lujo | Louis Vuitton, Carolina Herrera | 4.2% |
| Tiendas Ancla | Falabella, Ripley, Paris | 4.5% |
| Gastronomia | Central, Astrid & Gaston, Tanta | 6.5% |
| Entretenimiento | Cineplanet, Bowling, Timezone | 5.2% |

---

## Arquitectura de Datos

### Mapa de Archivos

```
jockey-algorithm-mvp/
├── src/data/                    # Datos importados (build time)
│   ├── config.js               # Configuracion global del sistema
│   │   ├── BRAND_CONFIG        # Colores, logo, nombre Jockey
│   │   ├── LAYER_CONFIG        # Nombres y descripciones de capas
│   │   ├── KEY_MESSAGES        # Mensajes clave de marca
│   │   ├── TARGET_AUDIENCES    # Audiencias objetivo
│   │   └── CHANNELS_CONFIG     # Configuracion de canales
│   │
│   ├── keywords.js             # Keywords por intencion y categoria
│   │
│   └── mockData.js             # Datos de rendimiento (mockup)
│       ├── OPPORTUNITY_SCORE   # Score 0-100 + componentes
│       ├── BUDGET_ALLOCATION   # Presupuesto mensual por canal
│       ├── PERFORMANCE_KPIS    # Alcance, Impresiones, Frecuencia
│       ├── CATEGORIAS_PERFORMANCE # Rendimiento por categoria
│       ├── COMPETITOR_INSIGHTS # Real Plaza, Mall Aventura, etc.
│       └── SOCIAL_MEDIA_METRICS # Metricas de redes sociales
│
└── public/data/                # Datos JSON dinamicos (runtime)
    ├── trends/latest.json      # Google Trends
    ├── tiktok/latest.json      # TikTok
    ├── meta/latest.json        # Meta
    └── mock/ga4_data.json      # Google Analytics
```

---

## Jockey Opportunity Score

Score propietario 0-100 que evalua 4 componentes:

1. **Alcance Digital** (30%) - Usuarios unicos alcanzados vs target
2. **Frecuencia Optima** (25%) - Impresiones/Alcance vs benchmark 3.5x
3. **Engagement Rate** (25%) - Interacciones/Alcance vs promedio industria
4. **Share of Voice** (20%) - Presencia vs competencia en digital

**Score actual**: 78/100 (Grado A)

---

## KPIs Principales

### Metricas de Exito

| KPI | Valor | Variacion |
|-----|-------|-----------|
| Alcance Total | 2,850,000 | +18.5% |
| Impresiones | 9,975,000 | +22.3% |
| Frecuencia Promedio | 3.5x | +0.3x |
| Interacciones | 185,000 | +15.2% |
| Engagement Rate | 4.8% | +0.4% |
| CPM Promedio | $2.85 | -8.2% |

### Funnel de Awareness

```
Impresiones (9,975,000)
      ↓
Alcance (2,850,000)
      ↓ Frecuencia 3.5x
Interacciones (185,000)
      ↓ 6.5%
Visitas Web (142,000)
```

---

## Competencia

Principales centros comerciales competidores en Lima:

### Alta Amenaza
1. **Real Plaza Puruchuco** (Ate)
   - 28% share of voice, expansion agresiva
   - Nuevo mall con alta inversion publicitaria

2. **Larcomar** (Miraflores)
   - 18% share of voice, turismo
   - Ubicacion iconica, audiencia premium

### Amenaza Media
3. **Mall Aventura** (Santa Anita)
   - 15% share of voice
   - Fuerte en segmento familiar

4. **Parque Arauco** (Molicentro)
   - 12% share of voice
   - Enfoque premium/lujo

### Nuestra Posicion
**Jockey Plaza** (Surco)
- 27% share of voice, 82% brand awareness
- Centro comercial mas grande del Peru
- 500+ tiendas, 70+ restaurantes

---

## Redes Sociales - Metricas Reales

| Plataforma | Seguidores | Engagement |
|------------|------------|------------|
| Instagram | 254,000 | 3.8% |
| Facebook | 892,000 | 2.1% |
| TikTok | 38,600 | 5.2% |
| YouTube | 12,400 | 1.8% |

---

## Notas Importantes

### Datos Actuales

El sistema usa **datos mock/curados** para demostracion. Los scrapers estan implementados pero no ejecutan scraping en tiempo real.

### Proximos Pasos

Para implementacion en produccion:

1. **Fase 1 (Obligatoria)**: Activar scrapers automaticos con Apify
2. **Fase 2 (Opcional)**: Conectar con GA4 real
3. **Fase 3 (Opcional)**: Integrar Meta Ads API para optimizacion automatica

---

## Licencia

Este proyecto es propiedad de Jockey Plaza Shopping Center. Todos los derechos reservados.

---

## Contacto

Para consultas sobre el proyecto:
- **Cliente**: Jockey Plaza Shopping Center
- **Repositorio**: https://github.com/alonsix6/jockey-algorithm-mvp

---

**2025 Jockey Algorithm - Jockey Plaza Shopping Center**
