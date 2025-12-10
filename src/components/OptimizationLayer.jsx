import { TrendingUp, BarChart3, RefreshCw, Award, Target, Users, Heart, Zap, AlertCircle, Eye, Repeat, Bell, ShoppingBag } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { PERFORMANCE_KPIS, ALERTS, COMPETITOR_INSIGHTS, SOCIAL_MEDIA_METRICS } from '../data/mockData';
import { LAYER_CONFIG, METRIC_CARDS_CONFIG } from '../data/config';

export default function OptimizationLayer() {
  // Performance últimos 7 días - Jockey Plaza
  const performanceData = [
    { date: '04 Dic', reach: 385000, impressions: 1350000, engagement: 65000, frequency: 3.5 },
    { date: '05 Dic', reach: 420000, impressions: 1470000, engagement: 72000, frequency: 3.5 },
    { date: '06 Dic', reach: 395000, impressions: 1385000, engagement: 68000, frequency: 3.5 },
    { date: '07 Dic', reach: 450000, impressions: 1580000, engagement: 78000, frequency: 3.5 },
    { date: '08 Dic', reach: 480000, impressions: 1680000, engagement: 85000, frequency: 3.5 },
    { date: '09 Dic', reach: 520000, impressions: 1820000, engagement: 92000, frequency: 3.5 },
    { date: '10 Dic', reach: 490000, impressions: 1715000, engagement: 88000, frequency: 3.5 }
  ];

  // Channel performance distribution
  const channelData = [
    { name: 'Meta Ads', value: 45, reach: 1282500, color: '#d10947' },
    { name: 'Google Display', value: 25, reach: 712500, color: '#1a1a1a' },
    { name: 'YouTube', value: 20, reach: 570000, color: '#EF4444' },
    { name: 'Google Search', value: 10, reach: 285000, color: '#0d9488' }
  ];

  // Funnel de awareness - Jockey Plaza
  const funnelSteps = [
    {
      stage: 'Impresiones',
      value: 9975000,
      conversionRate: 28.6,
      conversionLabel: 'a Alcance único',
      icon: '👁️',
      color: 'bg-jockey-primary'
    },
    {
      stage: 'Alcance',
      value: 2850000,
      conversionRate: 17.0,
      conversionLabel: 'a Interacción',
      icon: '👥',
      color: 'bg-jockey-dark'
    },
    {
      stage: 'Interacciones',
      value: 485000,
      conversionRate: 38.4,
      conversionLabel: 'a Website',
      icon: '❤️',
      color: 'bg-jockey-teal'
    },
    {
      stage: 'Visitas Web',
      value: 185000,
      conversionRate: null,
      conversionLabel: null,
      icon: '🌐',
      color: 'bg-green-600'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">
              {LAYER_CONFIG.optimization.name}
            </h2>
            <p className="text-gray-600">
              {LAYER_CONFIG.optimization.subtitle}
            </p>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-jockey-primary text-white rounded-full text-sm font-medium flex items-center gap-1">
              <RefreshCw className="w-4 h-4" />
              Auto-optimización activa
            </span>
          </div>
        </div>
      </div>

      {/* KPIs Principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Alcance */}
        <div className="bg-jockey-primary text-white rounded-2xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-3">
            <Users className="w-7 h-7" />
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20">
              +{PERFORMANCE_KPIS.alcance.change}%
            </span>
          </div>
          <p className="text-4xl font-bold">{(PERFORMANCE_KPIS.alcance.current / 1000000).toFixed(1)}M</p>
          <p className="text-white/90 mt-1 font-medium">{PERFORMANCE_KPIS.alcance.label}</p>
          <span className="text-sm text-white/70">{PERFORMANCE_KPIS.alcance.description}</span>
        </div>

        {/* Impresiones */}
        <div className="bg-jockey-dark text-white rounded-2xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-3">
            <Eye className="w-7 h-7" />
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20">
              +{PERFORMANCE_KPIS.impresiones.change}%
            </span>
          </div>
          <p className="text-4xl font-bold">{(PERFORMANCE_KPIS.impresiones.current / 1000000).toFixed(1)}M</p>
          <p className="text-white/90 mt-1 font-medium">{PERFORMANCE_KPIS.impresiones.label}</p>
          <span className="text-sm text-white/70">{PERFORMANCE_KPIS.impresiones.description}</span>
        </div>

        {/* Frecuencia */}
        <div className="bg-jockey-teal text-white rounded-2xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-3">
            <Repeat className="w-7 h-7" />
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20">
              +{PERFORMANCE_KPIS.frecuencia.change}%
            </span>
          </div>
          <p className="text-4xl font-bold">{PERFORMANCE_KPIS.frecuencia.current}x</p>
          <p className="text-white/90 mt-1 font-medium">{PERFORMANCE_KPIS.frecuencia.label}</p>
          <span className="text-sm text-white/70">{PERFORMANCE_KPIS.frecuencia.benchmark}</span>
        </div>

        {/* Interacciones */}
        <div className="bg-jockey-gray text-white rounded-2xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-3">
            <Heart className="w-7 h-7" />
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20">
              {PERFORMANCE_KPIS.engagement.trend}
            </span>
          </div>
          <p className="text-4xl font-bold">{(PERFORMANCE_KPIS.engagement.total_interactions / 1000).toFixed(0)}K</p>
          <p className="text-white/90 mt-1 font-medium">Interacciones</p>
          <span className="text-sm text-white/70">Eng. Rate: {PERFORMANCE_KPIS.engagement.engagement_rate}%</span>
        </div>
      </div>

      {/* Gráfico de Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-base font-bold text-gray-900">Performance Últimos 7 Días</h3>
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-jockey-primary"></div>
                <span>Alcance</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-jockey-teal"></div>
                <span>Interacciones</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="date" fontSize={11} tickLine={false} />
              <YAxis fontSize={11} tickLine={false} tickFormatter={(v) => `${(v/1000).toFixed(0)}K`} />
              <Tooltip
                formatter={(value, name) => [
                  name === 'reach' ? `${(value/1000).toFixed(0)}K` : `${(value/1000).toFixed(0)}K`,
                  name === 'reach' ? 'Alcance' : 'Interacciones'
                ]}
              />
              <Line type="monotone" dataKey="reach" stroke="#d10947" strokeWidth={3} dot={{ fill: '#d10947', r: 4 }} />
              <Line type="monotone" dataKey="engagement" stroke="#0d9488" strokeWidth={3} dot={{ fill: '#0d9488', r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart - Distribución por Canal */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-base font-bold text-gray-900 mb-4">Distribución por Canal</h3>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie
                data={channelData}
                cx="50%"
                cy="50%"
                innerRadius={45}
                outerRadius={70}
                paddingAngle={3}
                dataKey="value"
              >
                {channelData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-4">
            {channelData.map((channel, idx) => (
              <div key={idx} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: channel.color }}></div>
                  <span className="text-gray-700">{channel.name}</span>
                </div>
                <span className="font-semibold text-gray-900">{channel.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Funnel de Awareness */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-jockey-primary rounded-xl flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-900">Funnel de Awareness</h3>
            <p className="text-sm text-gray-600">Del impacto publicitario al engagement</p>
          </div>
        </div>

        <div className="space-y-4">
          {funnelSteps.map((step, idx) => {
            const width = idx === 0 ? 100 : Math.max(20, 100 - (idx * 20));
            return (
              <div key={idx} className="relative">
                <div
                  className={`${step.color} rounded-xl p-4 text-white transition-all duration-500`}
                  style={{ width: `${width}%` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{step.icon}</span>
                      <div>
                        <p className="font-bold text-base">{step.stage}</p>
                        <p className="text-white/80 text-sm">{step.value.toLocaleString()}</p>
                      </div>
                    </div>
                    {step.conversionRate && (
                      <div className="text-right">
                        <p className="text-xl font-bold">{step.conversionRate}%</p>
                        <p className="text-xs text-white/70">{step.conversionLabel}</p>
                      </div>
                    )}
                  </div>
                </div>
                {idx < funnelSteps.length - 1 && (
                  <div className="absolute -bottom-2 left-8 text-gray-400 text-lg">↓</div>
                )}
              </div>
            );
          })}
        </div>

        {/* Métricas del Funnel */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-200">
          <div className="bg-jockey-primary/10 rounded-lg p-3">
            <p className="text-xs text-gray-600">Frecuencia</p>
            <p className="text-xl font-bold text-jockey-primary">3.5x</p>
          </div>
          <div className="bg-jockey-teal/10 rounded-lg p-3">
            <p className="text-xs text-gray-600">CPM Promedio</p>
            <p className="text-xl font-bold text-jockey-teal">$4.20</p>
          </div>
          <div className="bg-green-100 rounded-lg p-3">
            <p className="text-xs text-gray-600">Engagement Rate</p>
            <p className="text-xl font-bold text-green-700">4.86%</p>
          </div>
          <div className="bg-amber-100 rounded-lg p-3">
            <p className="text-xs text-gray-600">Costo/Interacción</p>
            <p className="text-xl font-bold text-amber-700">$0.086</p>
          </div>
        </div>
      </div>

      {/* Alertas y Competencia */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Alertas */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <Bell className="w-6 h-6 text-jockey-primary" />
            <h3 className="text-base font-bold text-gray-900">Alertas del Sistema</h3>
          </div>

          <div className="space-y-4">
            {ALERTS.map((alert) => (
              <div key={alert.id} className={`p-4 rounded-xl border-2 ${
                alert.severity === 'high' ? 'bg-red-50 border-red-200' :
                alert.severity === 'medium' ? 'bg-amber-50 border-amber-200' :
                'bg-green-50 border-green-200'
              }`}>
                <div className="flex items-start gap-3">
                  <AlertCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                    alert.severity === 'high' ? 'text-red-500' :
                    alert.severity === 'medium' ? 'text-amber-500' :
                    'text-green-500'
                  }`} />
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{alert.title}</p>
                    <p className="text-gray-600 text-sm mt-1">{alert.message}</p>
                    <p className="text-xs font-semibold text-jockey-primary mt-2">
                      Acción: {alert.action}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Competencia */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-jockey-primary" />
            <h3 className="text-base font-bold text-gray-900">Share of Voice vs Competencia</h3>
          </div>

          <div className="space-y-3">
            {COMPETITOR_INSIGHTS.filter(c => c.brand !== 'Jockey Plaza').slice(0, 5).map((comp, idx) => (
              <div key={idx} className="p-4 border-2 border-gray-200 rounded-lg hover:border-jockey-primary transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="font-bold text-gray-900">{comp.brand}</p>
                    <p className="text-xs text-gray-500">{comp.location}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-bold ${
                    comp.threat_level === 'high' ? 'bg-red-100 text-red-700' :
                    comp.threat_level === 'medium' ? 'bg-amber-100 text-amber-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {comp.threat_level === 'high' ? 'Alta amenaza' :
                     comp.threat_level === 'medium' ? 'Amenaza media' : 'Amenaza baja'}
                  </span>
                </div>

                <div className="flex items-center gap-4 mt-3">
                  <div>
                    <p className="text-xs text-gray-500">Share of Voice</p>
                    <p className="text-base font-bold text-jockey-primary">{comp.share_of_voice}%</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Sentiment</p>
                    <p className="text-base font-bold text-jockey-teal">{comp.sentiment}%</p>
                  </div>
                </div>

                <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                  <div
                    className="h-full bg-jockey-primary rounded-full"
                    style={{ width: `${comp.share_of_voice}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Jockey Plaza Position */}
      <div className="bg-jockey-primary text-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center gap-4 mb-6">
          <ShoppingBag className="w-10 h-10" />
          <div>
            <h3 className="text-xl font-bold">Posición de Jockey Plaza</h3>
            <p className="text-white/80">El mall premium de Lima</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-3xl font-bold">22%</p>
            <p className="text-sm text-white/80">Share of Voice</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-3xl font-bold">82%</p>
            <p className="text-sm text-white/80">Sentiment Positivo</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-3xl font-bold">70%</p>
            <p className="text-sm text-white/80">Visitantes NSE A/B</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-3xl font-bold">500+</p>
            <p className="text-sm text-white/80">Tiendas</p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-white/20 backdrop-blur-sm rounded-xl">
          <p className="text-sm">
            <strong>Diferenciadores clave:</strong> Único mall con Louis Vuitton en Perú • Marcas premium exclusivas •
            Experiencias inmersivas (Hello Kitty, exposiciones) • Boulevard de Asia (verano)
          </p>
        </div>
      </div>

      {/* Social Media Metrics */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <Heart className="w-6 h-6 text-jockey-primary" />
          <h3 className="text-base font-bold text-gray-900">Métricas de Redes Sociales</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-pink-600 rounded-xl text-white">
            <p className="text-sm font-semibold mb-1">Instagram</p>
            <p className="text-2xl font-bold">{(SOCIAL_MEDIA_METRICS.instagram.followers / 1000).toFixed(0)}K</p>
            <p className="text-xs text-white/90">seguidores</p>
            <p className="text-xs mt-2 text-white/80">ER: {SOCIAL_MEDIA_METRICS.instagram.engagement_rate}%</p>
          </div>
          <div className="p-4 bg-gray-900 rounded-xl text-white">
            <p className="text-sm font-semibold mb-1">TikTok</p>
            <p className="text-2xl font-bold">{(SOCIAL_MEDIA_METRICS.tiktok.followers / 1000).toFixed(1)}K</p>
            <p className="text-xs text-white/90">seguidores</p>
            <p className="text-xs mt-2 text-white/80">ER: {SOCIAL_MEDIA_METRICS.tiktok.engagement_rate}%</p>
          </div>
          <div className="p-4 bg-blue-600 rounded-xl text-white">
            <p className="text-sm font-semibold mb-1">Facebook</p>
            <p className="text-2xl font-bold">{(SOCIAL_MEDIA_METRICS.facebook.followers / 1000).toFixed(0)}K</p>
            <p className="text-xs text-white/90">seguidores</p>
            <p className="text-xs mt-2 text-white/80">ER: {SOCIAL_MEDIA_METRICS.facebook.engagement_rate}%</p>
          </div>
          <div className="p-4 bg-blue-700 rounded-xl text-white">
            <p className="text-sm font-semibold mb-1">LinkedIn</p>
            <p className="text-2xl font-bold">{(SOCIAL_MEDIA_METRICS.linkedin.followers / 1000).toFixed(1)}K</p>
            <p className="text-xs text-white/90">seguidores</p>
            <p className="text-xs mt-2 text-white/80">ER: {SOCIAL_MEDIA_METRICS.linkedin.engagement_rate}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
