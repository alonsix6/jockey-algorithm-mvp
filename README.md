# 🎓 UCSP Algorithm

**Social Intelligence para Universidad Católica San Pablo - Admisiones 2025**

![Version](https://img.shields.io/badge/version-1.0.0-003B7A)
![Status](https://img.shields.io/badge/status-MVP-0056A3)
![License](https://img.shields.io/badge/license-Proprietary-002453)

---

## 📋 Descripción

El **UCSP Algorithm** es una plataforma de Social Intelligence que unifica datos de diversas fuentes digitales para optimizar la estrategia de **admisiones de pregrado y posgrado** de la Universidad Católica San Pablo.

Identifica microcomportamientos, emociones e intenciones de postulación en el ecosistema digital educativo del sur del Perú, optimizando la inversión publicitaria mediante decisiones automatizadas basadas en señales de data en tiempo real.

### 🎯 Propuesta de Valor

- **Cliente**: Universidad Católica San Pablo (UCSP)
- **Mercado**: Sur del Perú (Arequipa, Puno, Cusco, Moquegua, Tacna)
- **Objetivo**: Sistema automatizado de Social Intelligence para optimizar campañas de admisión 2025-I
- **Enfoque**: Postulaciones calificadas, alcance geográfico e interacciones (lead ads, WhatsApp, landing pages)

---

## 🏗️ Las 4 Capas del Algorithm

### 1. **📊 Capa de Datos (Data Layer)**
Monitoreo en tiempo real del ecosistema digital educativo:
- **Google Trends**: Búsquedas de carreras universitarias en zonas objetivo
- **TikTok**: Hashtags y contenido viral educativo
- **Meta Platforms**: Insights de Facebook e Instagram
- **YouTube**: Testimoniales y tours virtuales
- **Portales Educativos**: Ponte en Carrera, Estudia Perú, SUNEDU

**Métricas**: Búsqueda, Tendencia, Intención, Engagement

**Geografías monitoreadas**: Arequipa (70%), Puno (18%), Cusco (10%), Moquegua (1%), Tacna (1%)

### 2. **🎯 Capa de Decisión (Decision Layer)**
Inteligencia de mercado y estrategia automática:
- **UCSP Opportunity Score**: Índice de oportunidad 0-100
- **Audiencias objetivo**:
  - Postulantes Pregrado (17-25 años, ~10,500 personas)
  - Postulantes Posgrado (25-45 años, ~3,000 personas)
- **Mensajes clave**: Primera universidad licenciada del sur, formación integral, acreditación internacional
- **Recomendaciones automáticas** basadas en signals de mercado

**Output**: Qué mensaje activar, en qué momento y en qué plataforma

### 3. **⚡ Capa de Ejecución (Execution Layer)**
Distribución inteligente de presupuesto y contenidos:
- **Budget Allocation Pregrado**: Meta Ads (35%), Google Search (30%), YouTube (20%), Display (15%)
- **Budget Allocation Posgrado**: Google Search (40%), Meta Ads (35%), YouTube (15%), Display (10%)
- **Carreras monitoreadas**: 13 carreras (top 5: Ing. Industrial, Derecho, Medicina, Administración, Arquitectura)
- **Timing Óptimo**: Mañana (7-9 AM), Tarde (18-21 PM)
- **KPIs por canal**: Postulaciones, CPP (Costo por Postulación), Alcance, Engagement

**Canales de conversión**:
- Lead Ads (Meta): Formularios de contacto instantáneos
- Conversaciones WhatsApp: Objetivo de conversación en Meta Ads
- Visitas a Landing Page: Desde Google Ads y Meta Ads

**Output**: Implementación en tiempo real de campañas optimizadas

### 4. **📈 Capa de Optimización (Optimization Layer)**
Performance y ajustes automáticos:
- **KPIs principales**: Postulaciones completadas, Alcance total, Interacciones, Charlas asistidas
- **Funnel de conversión**: Alcance → Visitas Landing → Formularios → Postulaciones → Matriculados
- **Análisis de competencia**: UNSA, UCSM, UTP, UAP
- **Integración HubSpot (Mockup)**: Alertas automáticas cuando CPL supera límites establecidos
  - Pregrado: Alerta en S/45, Pausa en S/55
  - Posgrado: Alerta en S/70, Pausa en S/90

**Output**: Evaluación continua y redistribución de inversión

---

## 🛠️ Stack Tecnológico

### Frontend
- **React 18** + **Vite**
- **Tailwind CSS** (branding UCSP: azul #003B7A, burdeos #6B1B3D, dorado #C5A572)
- **Recharts** para visualizaciones de datos
- **Lucide React** para iconografía

### Scrapers & Data
- **Python 3.10** con `pytrends` para Google Trends
- **Node.js 18** con `axios` + `cheerio` para TikTok y Meta
- **Mock Data GA4** para demostración

### Infraestructura
- **GitHub** (repositorio + versionado)
- **GitHub Actions** (CI/CD automático - scrapers semanales)
- **Netlify** (hosting + deploy continuo)

---

## 📦 Instalación Rápida

### 1. Clonar repositorio

```bash
git clone https://github.com/alonsix6/SanPablo-algorithm-mvp.git
cd SanPablo-algorithm-mvp
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

### 4. Build para producción

```bash
npm run build
npm run preview
```

---

## 🎨 Paleta de Colores UCSP

La paleta está basada en los colores institucionales del logo (#002453 y #4d102c):

```javascript
ucsp: {
  // Azules (basados en #002453)
  darkBlue: '#002453',     // Azul oscuro del logo
  blue: '#003B7A',         // Azul principal (más claro)
  lightBlue: '#0056A3',    // Azul claro para interacciones
  skyBlue: '#4A90E2',      // Azul cielo para acentos/tech

  // Burgundy/Vino (basados en #4d102c)
  darkBurgundy: '#4d102c', // Burdeos oscuro del logo
  burgundy: '#6B1B3D',     // Burdeos principal
  wine: '#8B2449',         // Vino para acentos

  // Complementarios
  gold: '#C5A572',         // Dorado académico
  gray: '#54565A',         // Gris corporativo
}
```

---

## 📊 Datos y Configuración

### Keywords y Hashtags

Archivo: `src/data/keywords.js`

- **Marca UCSP**: 10 keywords principales
- **Carreras**: 10 keywords de las carreras más demandadas
- **Intención**: 10 keywords de alta conversión
- **Hashtags**: 40+ hashtags categorizados por tema

### Audiencias Objetivo

Archivo: `src/data/config.js`

**2 audiencias principales:**

1. **Pregrado** (17-25 años, ~10,500 personas)
   - Escolares 5to Secundaria (17-18 años)
   - Bachilleres y Trabajadores (19-25 años)

2. **Posgrado** (25-45 años, ~3,000 personas)
   - Profesionales Jóvenes (25-32 años)
   - Profesionales Establecidos (33-45 años)

### Carreras Monitoreadas

13 carreras de pregrado:
1. Ingeniería Industrial ⭐
2. Derecho ⭐
3. Medicina Humana ⭐
4. Administración ⭐
5. Arquitectura y Urbanismo ⭐
6. Psicología
7. Ingeniería Civil
8. Contabilidad
9. Ciencia de la Computación
10. Ciencia de Datos
11. Ingeniería Electrónica y Telecomunicaciones
12. Ingeniería Mecatrónica
13. Ingeniería Ambiental

⭐ = Top 5 con mayor demanda

---

## 🔄 Integración HubSpot (Mockup)

El sistema incluye espacio para integración con HubSpot API:

### Configuración de Alertas CPL

```javascript
cpl_thresholds: {
  pregrado: {
    max_cpl: 50,      // S/ máximo por lead pregrado
    alert_at: 45,     // Alerta cuando se acerca al límite
    pause_at: 55,     // Pausar si supera este valor
  },
  posgrado: {
    max_cpl: 80,
    alert_at: 70,
    pause_at: 90,
  },
}
```

### Tracking de Conversiones

- ✅ Lead Ads (Meta)
- ✅ Conversaciones WhatsApp (Meta Ads objetivo)
- ✅ Visitas a Landing Page
- ✅ Formularios completados

**Nota**: La integración HubSpot actualmente es mockup. Para activarla, configurar `enabled: true` y agregar API key en `src/data/config.js`.

---

## 📈 UCSP Opportunity Score

Score propietario 0-100 que evalúa 5 componentes:

1. **Interés de Búsqueda** (25%) - Google Trends en zonas objetivo
2. **Engagement Social** (20%) - TikTok + Instagram + Facebook
3. **Intención de Conversión** (30%) - Lead Ads + WhatsApp
4. **Calidad de Leads** (15%) - HubSpot Lead Score
5. **Competitividad** (10%) - Share of Voice vs UNSA/UCSM

**Score actual**: 82/100 (Grado A)

---

## 🎯 KPIs Principales

### Métricas de Éxito

- **Postulaciones Completadas**: 1,256 (+15.0%)
- **Alcance Total**: 875,000 usuarios únicos (+21.9%)
- **Interacciones**: 142,500 (+8.1%)
- **Costo por Postulación (CPP)**: S/38.50 (-7.9%)
- **Charlas Asistidas**: 485 (+17.7%)
- **Conversaciones WhatsApp**: 1,420 (+28.2%)

### Funnel de Conversión

```
Alcance (850,000)
      ↓ 1.4%
Visitas Landing (12,000)
      ↓ 25%
Formularios (3,000)
      ↓ 35%
Postulaciones Válidas (1,050)
      ↓ 23%
Matriculados (240)
```

---

## 🏆 Competencia

Principales universidades competidoras en Arequipa:

1. **UNSA** - Universidad Nacional de San Agustín (45% market share, 49,509 postulantes)
2. **UCSM** - Universidad Católica Santa María (28%, 8,500 postulantes)
3. **UCSP** - Universidad Católica San Pablo (15%, 3,200 postulantes)
4. **UTP** - Universidad Tecnológica del Perú (8%, 2,800 postulantes)
5. **UAP** - Universidad Alas Peruanas (4%, 1,500 postulantes)

---

## 📝 Notas Importantes

### Datos Actuales

⚠️ **Importante**: Actualmente el sistema usa **datos mock/curados** para demostración. Los scrapers están implementados pero no ejecutan scraping en tiempo real.

### Próximos Pasos

Para implementación en producción:

1. **Fase 1**: Configurar API keys de HubSpot
2. **Fase 2**: Activar scrapers automáticos (GitHub Actions cada lunes)
3. **Fase 3**: Conectar con GA4 real de UCSP
4. **Fase 4**: Integrar Meta Ads API y Google Ads API para pausado automático

---

## 📄 Licencia

Este proyecto es propiedad de Universidad Católica San Pablo. Todos los derechos reservados.

---

## 👥 Contacto

Para consultas sobre el proyecto:
- **Universidad**: Universidad Católica San Pablo
- **Repositorio**: https://github.com/alonsix6/SanPablo-algorithm-mvp

---

**© 2025 UCSP Algorithm - Universidad Católica San Pablo**
