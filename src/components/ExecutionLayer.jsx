import { useState } from 'react';
import { DollarSign, TrendingUp, Target, Zap, Calendar, PlayCircle, AlertTriangle, ShoppingBag, ChevronDown, ChevronUp, Eye, Users, Heart } from 'lucide-react';
import { BUDGET_ALLOCATION, CONTENT_PILLARS, CATEGORIAS_PERFORMANCE } from '../data/mockData';
import { LAYER_CONFIG, CHANNELS_CONFIG } from '../data/config';

export default function ExecutionLayer() {
  const [showAllCategories, setShowAllCategories] = useState(false);

  const getStatusColor = (status) => {
    if (status === 'overperforming') return { bg: 'bg-green-50', border: 'border-green-300', text: 'text-green-700', badge: 'bg-green-100' };
    if (status === 'performing') return { bg: 'bg-blue-50', border: 'border-blue-300', text: 'text-blue-700', badge: 'bg-blue-100' };
    if (status === 'ontrack') return { bg: 'bg-amber-50', border: 'border-amber-300', text: 'text-amber-700', badge: 'bg-amber-100' };
    return { bg: 'bg-red-50', border: 'border-red-300', text: 'text-red-700', badge: 'bg-red-100' };
  };

  const getStatusIcon = (status) => {
    if (status === 'overperforming') return '🚀';
    if (status === 'performing') return '✓';
    if (status === 'ontrack') return '→';
    return '⚠';
  };

  const getTendenciaIcon = (tendencia) => {
    if (tendencia === 'rising') return '📈';
    if (tendencia === 'stable') return '➡️';
    return '📉';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">
              {LAYER_CONFIG.execution.name}
            </h2>
            <p className="text-gray-600">
              {LAYER_CONFIG.execution.subtitle}
            </p>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-jockey-primary text-white rounded-full text-sm font-medium flex items-center gap-1">
              <PlayCircle className="w-4 h-4" />
              Live
            </span>
          </div>
        </div>
      </div>

      {/* Budget Overview */}
      <div className="bg-gradient-to-br from-jockey-primary to-jockey-dark text-white rounded-2xl shadow-jockey-lg p-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <DollarSign className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Presupuesto Mensual</h3>
              <p className="text-white/90 mt-1 text-sm">Distribución por alcance, frecuencia e interacciones</p>
            </div>
          </div>

          <div className="text-center lg:text-right">
            <div className="flex items-baseline gap-2">
              <span className="text-xl text-white/80">$</span>
              <span className="text-4xl font-bold">{(BUDGET_ALLOCATION.total_budget / 1000).toFixed(0)}K</span>
            </div>
            <p className="text-white/80 mt-2">Total presupuesto mensual</p>
          </div>
        </div>

        {/* Budget Progress */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-medium">Objetivo: {BUDGET_ALLOCATION.objective}</span>
            <span className="text-xl font-bold">
              ${(Object.values(BUDGET_ALLOCATION.distribution).reduce((sum, ch) => sum + ch.amount, 0)).toLocaleString()}
            </span>
          </div>
          <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-white rounded-full" style={{ width: '100%' }}></div>
          </div>
          <p className="text-xs text-white/70 mt-2">100% del presupuesto asignado a canales</p>
        </div>
      </div>

      {/* Budget Allocation by Channel */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-jockey-primary to-jockey-teal rounded-xl flex items-center justify-center">
            <Target className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-900">Distribución por Canal Digital</h3>
            <p className="text-sm text-gray-600">Performance y asignación para awareness y engagement</p>
          </div>
        </div>

        <div className="grid gap-4">
          {Object.entries(BUDGET_ALLOCATION.distribution).map(([key, channel]) => {
            const colors = getStatusColor(channel.status);
            return (
              <div key={key} className={`p-5 rounded-xl border-2 ${colors.bg} ${colors.border}`}>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-bold text-gray-900 text-base">{channel.name}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${colors.badge} ${colors.text}`}>
                        {getStatusIcon(channel.status)} {channel.status.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      <strong>KPI Principal:</strong> {channel.kpi_primary} | <strong>Secundario:</strong> {channel.kpi_secondary}
                    </p>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-gray-500">Target</p>
                        <p className="font-semibold text-gray-900">{channel.target}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Performance Actual</p>
                        <p className={`font-semibold ${colors.text}`}>{channel.current_performance}</p>
                      </div>
                    </div>

                    {/* Formatos para Meta Ads */}
                    {channel.formats && (
                      <div className="mt-3 flex flex-wrap gap-1">
                        {channel.formats.map((format, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-200 rounded text-xs text-gray-700">
                            {format}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="text-center lg:text-right lg:min-w-[200px]">
                    <div className="mb-2">
                      <span className="text-2xl font-bold text-gray-900">{channel.percentage}%</span>
                    </div>
                    <div className="text-xl font-bold text-gray-800 mb-1">
                      ${channel.amount.toLocaleString()}
                    </div>
                    <p className="text-xs text-gray-500">del presupuesto total</p>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mt-4">
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${
                        channel.status === 'overperforming' ? 'bg-green-500' :
                        channel.status === 'performing' ? 'bg-blue-500' :
                        channel.status === 'ontrack' ? 'bg-amber-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${channel.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recomendaciones de Redistribución */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-900">Recomendaciones de Optimización</h3>
            <p className="text-sm text-gray-600">Ajustes sugeridos basados en performance</p>
          </div>
        </div>

        <div className="space-y-4">
          {BUDGET_ALLOCATION.recommendations.map((rec, idx) => (
            <div key={idx} className={`p-5 rounded-xl border-2 ${
              rec.type === 'increase' ? 'bg-green-50 border-green-200' :
              rec.type === 'decrease' ? 'bg-red-50 border-red-200' :
              'bg-blue-50 border-blue-200'
            }`}>
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    rec.type === 'increase' ? 'bg-green-200 text-green-800' :
                    rec.type === 'decrease' ? 'bg-red-200 text-red-800' :
                    'bg-blue-200 text-blue-800'
                  }`}>
                    {rec.type === 'increase' ? '↑ AUMENTAR' :
                     rec.type === 'decrease' ? '↓ REDUCIR' : '→ MANTENER'}
                  </span>
                  <span className="text-sm font-semibold text-gray-900 uppercase">
                    {rec.channel}
                  </span>
                </div>
                {rec.from && rec.to && (
                  <div className="text-right">
                    <span className="text-xs text-gray-500">Cambio</span>
                    <p className="font-bold text-gray-900">{rec.from}% → {rec.to}%</p>
                  </div>
                )}
              </div>

              <p className="text-gray-900 font-medium mb-2">{rec.reason}</p>
              {rec.impact && (
                <p className="text-sm text-green-700 font-semibold flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  Impacto: {rec.impact}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Categorías Performance */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-jockey-primary to-jockey-dark rounded-xl flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900">Performance por Categoría</h3>
              <p className="text-sm text-gray-600">Métricas de alcance, frecuencia e interacciones por tipo de tienda</p>
            </div>
          </div>
          <button
            onClick={() => setShowAllCategories(!showAllCategories)}
            className="flex items-center gap-2 px-4 py-2 bg-jockey-primary text-white rounded-lg hover:bg-jockey-dark transition-colors text-sm font-medium"
          >
            {showAllCategories ? (
              <>
                <ChevronUp className="w-4 h-4" />
                Mostrar menos
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                Ver todas ({CATEGORIAS_PERFORMANCE.length})
              </>
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CATEGORIAS_PERFORMANCE
            .slice(0, showAllCategories ? CATEGORIAS_PERFORMANCE.length : 4)
            .map((categoria, idx) => (
            <div key={categoria.id} className={`p-5 rounded-xl border-2 ${
              idx < 3 ? 'bg-gradient-to-r from-jockey-primary/5 to-jockey-teal/5 border-jockey-primary/30' : 'bg-gray-50 border-gray-200'
            }`}>
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-gray-900 text-base">{categoria.nombre}</h4>
                <span className="text-lg">{getTendenciaIcon(categoria.tendencia)}</span>
              </div>

              {/* Tiendas en la categoría */}
              <div className="flex flex-wrap gap-1 mb-4">
                {categoria.tiendas.slice(0, 3).map((tienda, tidx) => (
                  <span key={tidx} className="px-2 py-1 bg-gray-200 rounded text-xs text-gray-700">
                    {tienda}
                  </span>
                ))}
                {categoria.tiendas.length > 3 && (
                  <span className="px-2 py-1 bg-gray-200 rounded text-xs text-gray-500">
                    +{categoria.tiendas.length - 3}
                  </span>
                )}
              </div>

              {/* Métricas principales */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-jockey-primary" />
                  <div>
                    <p className="text-xs text-gray-500">Alcance</p>
                    <p className="font-semibold text-gray-900">{(categoria.alcance / 1000).toFixed(0)}K</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-jockey-teal" />
                  <div>
                    <p className="text-xs text-gray-500">Impresiones</p>
                    <p className="font-semibold text-gray-900">{(categoria.impresiones / 1000000).toFixed(1)}M</p>
                  </div>
                </div>
              </div>

              {/* Frecuencia y Engagement */}
              <div className="pt-3 border-t border-gray-300">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="text-xs text-gray-500">Frecuencia</p>
                    <p className="font-bold text-jockey-primary">{categoria.frecuencia}x</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Eng. Rate</p>
                    <p className="font-bold text-jockey-teal">{categoria.engagement_rate}%</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">CPM</p>
                    <p className="font-bold text-gray-700">${categoria.cpm}</p>
                  </div>
                </div>
              </div>

              {/* Top Content */}
              {categoria.top_content && (
                <div className="mt-3 pt-3 border-t border-gray-300">
                  <p className="text-xs text-gray-500 mb-1">Top Content: {categoria.top_content.tipo}</p>
                  <div className="flex items-center gap-2">
                    <Heart className="w-3 h-3 text-jockey-primary" />
                    <span className="text-xs font-semibold">{categoria.top_content.engagement}% eng.</span>
                    <span className="text-xs text-gray-500">• {(categoria.top_content.views / 1000).toFixed(0)}K views</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {!showAllCategories && (
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">
              Mostrando top 4 categorías. Haz clic en "Ver todas" para ver las {CATEGORIAS_PERFORMANCE.length} categorías monitoreadas.
            </p>
          </div>
        )}
      </div>

      {/* Timing Recommendations */}
      <div className="bg-gradient-to-br from-jockey-primary to-jockey-teal text-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <Calendar className="w-8 h-8" />
          <h3 className="text-lg font-bold">Timing Óptimo de Campaña</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
            <h4 className="font-bold text-base mb-3">Mejores horarios del día</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-white/90">12:00 - 15:00 (Almuerzo)</span>
                <span className="px-2 py-1 bg-white/20 rounded text-sm font-bold">+30%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/90">19:00 - 22:00 (Prime)</span>
                <span className="px-2 py-1 bg-white/20 rounded text-sm font-bold">+50%</span>
              </div>
            </div>
            <p className="text-xs text-white/70 mt-3">Horarios de mayor engagement para retail</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
            <h4 className="font-bold text-base mb-3">Mejores días de la semana</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-white/90">Viernes</span>
                <span className="px-2 py-1 bg-green-500 rounded text-sm font-bold">Alta</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/90">Sábado</span>
                <span className="px-2 py-1 bg-green-500 rounded text-sm font-bold">Muy Alta</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/90">Domingo</span>
                <span className="px-2 py-1 bg-green-500 rounded text-sm font-bold">Muy Alta</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-white/20 backdrop-blur-sm rounded-xl">
          <p className="text-sm font-semibold mb-2">💡 Eventos clave retail:</p>
          <p className="text-sm">Día de la Madre (Mayo), Fiestas Patrias (Julio), Día del Shopping (Sep), Black Friday (Nov), Navidad (Dic), Verano Boulevard Asia (Ene-Mar)</p>
        </div>
      </div>
    </div>
  );
}
