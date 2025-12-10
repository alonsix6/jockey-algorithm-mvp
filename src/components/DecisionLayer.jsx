import { Target, Users, MessageSquare, TrendingUp, Lightbulb, Zap, AlertCircle, ShoppingBag, Heart, Eye, Repeat } from 'lucide-react';
import { OPPORTUNITY_SCORE } from '../data/mockData';
import { LAYER_CONFIG, KEY_MESSAGES, TARGET_AUDIENCES } from '../data/config';

export default function DecisionLayer() {
  const recommendations = [
    {
      priority: 'high',
      category: 'Meta Ads',
      action: 'Aumentar inversión en Reels de Gastronomía - engagement 7.2% (+48% sobre promedio)',
      impact: '+85K impresiones y +4K interacciones estimadas',
      confidence: 93
    },
    {
      priority: 'high',
      category: 'Google Display',
      action: 'Optimizar frecuencia en distritos clave - Surco y La Molina tienen 35% más engagement',
      impact: '+15% en recordación de marca estimada',
      confidence: 91
    },
    {
      priority: 'medium',
      category: 'Contenido',
      action: 'Escalar contenido de Experiencias & Eventos - engagement rate 6.8% (top performer)',
      impact: '+240K alcance proyectado',
      confidence: 88
    },
    {
      priority: 'medium',
      category: 'Audiencias',
      action: 'Expandir "Jóvenes Adultos Gen Z" - engagement 6.2% vs 4.8% promedio',
      impact: '+180K usuarios únicos adicionales',
      confidence: 85
    },
    {
      priority: 'low',
      category: 'YouTube',
      action: 'Aumentar inversión en Bumper Ads para frecuencia - VTR actual 28% (sobre benchmark)',
      impact: '+0.3x en frecuencia promedio',
      confidence: 76
    }
  ];

  // Usar audiencias de config.js con formato adaptado
  const audiences = TARGET_AUDIENCES.map(aud => ({
    name: aud.name,
    size: aud.size,
    engagement: `${aud.engagement_rate}%`,
    status: 'active',
    description: aud.description + ` - ${aud.interests.slice(0, 3).join(', ')}`,
    message: aud.message,
    age_range: aud.age_range,
    frequency_target: aud.frequency_target
  }));

  // Calcular color del score
  const getScoreColor = (score) => {
    if (score >= 85) return 'from-green-500 to-green-600';
    if (score >= 70) return 'from-yellow-500 to-yellow-600';
    return 'from-red-500 to-red-600';
  };

  const getScoreGrade = (score) => {
    if (score >= 85) return 'A+';
    if (score >= 75) return 'A';
    if (score >= 65) return 'B+';
    if (score >= 55) return 'B';
    return 'C';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">
              {LAYER_CONFIG.decision.name}
            </h2>
            <p className="text-gray-600">
              {LAYER_CONFIG.decision.subtitle}
            </p>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-jockey-primary text-white rounded-full text-sm font-medium">
              IA Activa
            </span>
          </div>
        </div>
      </div>

      {/* Jockey Opportunity Score */}
      <div className="bg-jockey-dark text-white rounded-2xl shadow-lg p-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center">
              <Zap className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Jockey Opportunity Score</h3>
              <p className="text-white/90 mt-1 text-sm">Índice de oportunidad para awareness y engagement</p>
            </div>
          </div>

          {/* Score Display */}
          <div className="text-center">
            <div className="relative">
              <div className={`w-28 h-28 rounded-full bg-gradient-to-br ${getScoreColor(OPPORTUNITY_SCORE.current_score)} flex items-center justify-center shadow-xl`}>
                <div className="text-center">
                  <span className="text-4xl font-bold">{OPPORTUNITY_SCORE.current_score}</span>
                  <span className="text-xl">/100</span>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                {getScoreGrade(OPPORTUNITY_SCORE.current_score)}
              </div>
            </div>
            <p className="text-sm mt-3 text-white/80">
              <span className="text-green-300 font-bold">{OPPORTUNITY_SCORE.trend}</span> vs periodo anterior
            </p>
          </div>
        </div>

        {/* Score Components */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(OPPORTUNITY_SCORE.components).map(([key, comp]) => (
            <div key={key} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-xs text-white/70 mb-1">{comp.label || key.replace('_', ' ')}</p>
              <p className="text-2xl font-bold">{comp.score}</p>
              <div className="w-full h-1.5 bg-white/20 rounded-full mt-2">
                <div
                  className="h-full bg-white rounded-full"
                  style={{ width: `${comp.score}%` }}
                ></div>
              </div>
              <p className="text-xs text-white/60 mt-1">Peso: {(comp.weight * 100).toFixed(0)}%</p>
            </div>
          ))}
        </div>

        {/* Recommendation */}
        <div className="mt-6 p-5 bg-white/10 backdrop-blur-sm rounded-xl">
          <p className="text-sm leading-relaxed">{OPPORTUNITY_SCORE.recommendation.message}</p>
          <p className="text-xs text-white/70 mt-2">Confianza: {OPPORTUNITY_SCORE.recommendation.confidence}</p>
        </div>
      </div>

      {/* Recomendaciones Automáticas */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-jockey-primary rounded-xl flex items-center justify-center">
            <Lightbulb className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-900">Recomendaciones Automáticas</h3>
            <p className="text-sm text-gray-600">Acciones sugeridas por el Algorithm</p>
          </div>
        </div>

        <div className="space-y-4">
          {recommendations.map((rec, idx) => (
            <div key={idx} className={`p-5 rounded-xl border-2 ${
              rec.priority === 'high' ? 'bg-red-50 border-red-200' :
              rec.priority === 'medium' ? 'bg-amber-50 border-amber-200' :
              'bg-green-50 border-green-200'
            }`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                    rec.priority === 'high' ? 'bg-red-200 text-red-800' :
                    rec.priority === 'medium' ? 'bg-amber-200 text-amber-800' :
                    'bg-green-200 text-green-800'
                  }`}>
                    {rec.priority}
                  </span>
                  <span className="text-sm font-semibold text-gray-700">{rec.category}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">Confianza:</span>
                  <span className="font-bold text-gray-900">{rec.confidence}%</span>
                </div>
              </div>

              <p className="text-gray-900 font-medium mb-2">{rec.action}</p>
              <p className="text-sm text-green-700 font-semibold flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                Impacto: {rec.impact}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Audiencias Jockey Plaza */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-jockey-teal rounded-xl flex items-center justify-center">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-900">Audiencias Objetivo</h3>
            <p className="text-sm text-gray-600">Segmentación inteligente para awareness y engagement</p>
          </div>
        </div>

        <div className="grid gap-4">
          {audiences.map((aud, idx) => (
            <div key={idx} className="p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-jockey-primary transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div>
                  <h4 className="font-bold text-gray-900">{aud.name}</h4>
                  <p className="text-sm text-gray-600">{aud.description}</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold self-start sm:self-auto">
                  Activa
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="text-center p-3 bg-white rounded-lg">
                  <p className="text-xs text-gray-500">Tamaño</p>
                  <p className="text-xl font-bold text-jockey-primary">{aud.size}</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg">
                  <p className="text-xs text-gray-500">Eng. Rate</p>
                  <p className="text-xl font-bold text-jockey-teal">{aud.engagement}</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg">
                  <p className="text-xs text-gray-500">Freq. Target</p>
                  <p className="text-xl font-bold text-gray-700">{aud.frequency_target}x</p>
                </div>
              </div>

              <p className="text-sm text-gray-600 mt-3 italic">"{aud.message}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Messages */}
      <div className="bg-gradient-to-br from-jockey-dark to-jockey-primary text-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <MessageSquare className="w-8 h-8" />
          <h3 className="text-lg font-bold">Mensajes Clave - Jockey Plaza</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(KEY_MESSAGES).map(([key, msg]) => (
            <div key={key} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/20 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <ShoppingBag className="w-5 h-5 text-jockey-teal" />
                <h4 className="font-bold">{msg.title}</h4>
              </div>
              <p className="text-sm text-white/90 mb-2">{msg.message}</p>
              <p className="text-xs text-white/70">{msg.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-white/20 backdrop-blur-sm rounded-xl">
          <p className="text-sm font-semibold mb-2">💡 Pilares de contenido recomendados:</p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-white/20 rounded text-xs">Experiencias & Eventos</span>
            <span className="px-2 py-1 bg-white/20 rounded text-xs">Moda & Tendencias</span>
            <span className="px-2 py-1 bg-white/20 rounded text-xs">Gastronomía</span>
            <span className="px-2 py-1 bg-white/20 rounded text-xs">Entretenimiento Familiar</span>
            <span className="px-2 py-1 bg-white/20 rounded text-xs">Jockey Te Quiere Feliz</span>
          </div>
        </div>
      </div>
    </div>
  );
}
