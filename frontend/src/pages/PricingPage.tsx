import React from 'react';
import { motion } from 'framer-motion';

const PricingPage: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Découverte',
      price: 'Gratuit',
      features: [
        'Accès aux offres d\'emploi',
        'Analyse de base',
        'Matching simple',
        'Support limité'
      ],
      recommended: false
    },
    {
      name: 'Pro',
      price: '€29/mois',
      features: [
        'Toutes les fonctionnalités de base',
        'Analyse approfondie',
        'Matching avancé',
        'Support prioritaire',
        'Rapports détaillés'
      ],
      recommended: true
    },
    {
      name: 'Entreprise',
      price: 'Sur devis',
      features: [
        'Toutes les fonctionnalités Pro',
        'Accompagnement personnalisé',
        'API d\'intégration',
        'Support 24/7',
        'Formation personnalisée'
      ],
      recommended: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 to-black text-white">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-12">Nos tarifs</h1>
          <p className="text-xl text-center text-gray-300 mb-20">
            Choisissez le plan qui correspond le mieux à vos besoins
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-purple-900/50 p-8 rounded-xl hover:bg-purple-900/70 transition-colors"
            >
              {plan.recommended && (
                <div className="absolute -top-4 right-4 bg-purple-500 text-white px-4 py-1 rounded-full text-sm">
                  Recommandé
                </div>
              )}
              <h3 className="text-3xl font-bold text-center mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold text-center text-purple-500 mb-8">{plan.price}</p>
              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-purple-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full mt-8 bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg transition-colors">
                Commencer maintenant
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
