import React from 'react';
import { motion } from 'framer-motion';

const FeaturesPage: React.FC = () => {
  const features = [
    {
      title: 'Analyse intelligente',
      description: 'Notre IA analyse en profondeur les offres d\'emploi et votre profil pour trouver les meilleures opportunités.',
      icon: '🔍'
    },
    {
      title: 'Matching personnalisé',
      description: 'Nous créons un lien unique entre vous et les entreprises qui correspondent parfaitement à vos aspirations.',
      icon: '🎯'
    },
    {
      title: 'Agent IA',
      description: 'Votre assistant virtuel qui vous guide tout au long de votre recherche d\'emploi.',
      icon: '🤖'
    },
    {
      title: 'Communauté active',
      description: 'Rejoignez une communauté de professionnels tech qui partagent vos objectifs.',
      icon: '👥'
    },
    {
      title: 'Intégration facile',
      description: 'Intégrez facilement Fyndra avec vos outils de productivité existants.',
      icon: '🔌'
    },
    {
      title: 'Sécurité garantie',
      description: 'Vos données sont sécurisées et protégées à chaque étape.',
      icon: '🔒'
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
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-12">Nos fonctionnalités</h1>
          <p className="text-xl text-center text-gray-300 mb-20">
            Découvrez toutes les fonctionnalités qui font de Fyndra votre assistant idéal pour la recherche d'emploi tech
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-purple-900/50 p-8 rounded-xl hover:bg-purple-900/70 transition-colors"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
