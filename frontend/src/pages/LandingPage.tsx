import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, UsersIcon, AcademicCapIcon, SparklesIcon, ClockIcon, ChatBubbleLeftRightIcon, CurrencyDollarIcon, AcademicCapIcon as GraduationCapIcon, CodeBracketIcon, ChartBarIcon, UserGroupIcon, PuzzlePieceIcon, CogIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const LandingPage: React.FC = () => {
  const stats = [
    { icon: UsersIcon, value: '100K+', label: 'Utilisateurs actifs' },
    { icon: AcademicCapIcon, value: '5000+', label: 'Offres analysées chaque jour' },
    { icon: SparklesIcon, value: '95%', label: 'Taux de satisfaction' },
    { icon: ClockIcon, value: '24/7', label: 'Support en continu' },
  ];

  const testimonials = [
    {
      content: "Fyndra m'a permis de trouver mon premier job en tech en quelques semaines seulement. L'analyse des offres et les conseils de l'assistant ont été précieux.",
      author: "Marie L.",
      role: "Développeuse frontend",
    },
    {
      content: "J'utilise Fyndra depuis un an et je ne peux plus m'en passer. L'IA m'aide à identifier les opportunités qui correspondent parfaitement à mon profil.",
      author: "Thomas D.",
      role: "Lead DevOps",
    },
    {
      content: "Le matching de Fyndra est vraiment intelligent. J'ai reçu des offres que je n'aurais jamais considérées et qui correspondent parfaitement à mes aspirations.",
      author: "Sophie R.",
      role: "Product Manager",
    },
  ];

  const pricingPlans = [
    {
      name: 'Découverte',
      price: 'Gratuit',
      features: [
        'Accès aux offres d\'emploi',
        'Analyse de base',
        'Matching simple',
        'Support limité',
      ],
    },
    {
      name: 'Pro',
      price: '€29/mois',
      features: [
        'Toutes les fonctionnalités de base',
        'Analyse approfondie',
        'Matching avancé',
        'Support prioritaire',
        'Rapports détaillés',
      ],
      recommended: true,
    },
    {
      name: 'Entreprise',
      price: 'Sur devis',
      features: [
        'Toutes les fonctionnalités Pro',
        'Accompagnement personnalisé',
        'API d\'intégration',
        'Support 24/7',
        'Formation personnalisée',
      ],
    },
  ];

  const features = [
    {
      icon: GraduationCapIcon,
      title: 'Analyse intelligente',
      description: 'Analyse automatique des offres d\'emploi avec détection de red flags',
    },
    {
      icon: CodeBracketIcon,
      title: 'Matching personnalisé',
      description: 'Algorithme de matching avancé adapté à vos compétences',
    },
    {
      icon: ChartBarIcon,
      title: 'Agent IA',
      description: 'Conseils personnalisés et évolution de carrière',
    },
    {
      icon: UserGroupIcon,
      title: 'Communauté active',
      description: 'Accès à une communauté de professionnels tech',
    },
    {
      icon: PuzzlePieceIcon,
      title: 'Intégration facile',
      description: 'Intégration avec vos outils de travail',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Sécurité garantie',
      description: 'Données sécurisées et confidentialité assurée',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 to-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Fyndra
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            Votre assistant intelligent pour la carrière tech
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center gap-4"
          >
            <Link
              to="/dashboard"
              className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg transition-colors flex items-center gap-2"
            >
              Commencer maintenant
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-purple-900 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="p-6"
              >
                <div className="mx-auto h-12 w-12 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-black/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ce que disent nos utilisateurs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-purple-900 p-8 rounded-xl"
              >
                <div className="flex items-center gap-2 mb-4">
                  <ChatBubbleLeftRightIcon className="h-6 w-6 text-purple-500" />
                  <div className="h-px w-8 bg-purple-500" />
                </div>
                <p className="text-gray-300 mb-4">{testimonial.content}</p>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">{testimonial.author}</h3>
                  <span className="text-gray-400">{testimonial.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-16">Nos fonctionnalités</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-8 bg-gradient-to-r from-purple-800 to-purple-900 rounded-xl"
            >
              <div className="mx-auto h-12 w-12 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-black/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Nos tarifs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`p-8 rounded-xl ${
                  plan.recommended
                    ? 'border-4 border-purple-500 bg-purple-900/50'
                    : 'bg-purple-900'
                }`}
              >
                <h3 className="text-2xl font-bold text-center mb-4">{plan.name}</h3>
                <p className="text-4xl font-bold text-center mb-6">{plan.price}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300">
                      <span className="h-4 w-4 bg-purple-500 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {plan.recommended && (
                  <div className="mt-6 text-center">
                    <span className="inline-block px-4 py-2 bg-purple-500 text-white rounded-full text-sm font-semibold">
                      Recommandé
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-purple-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à commencer ?</h2>
          <p className="text-gray-300 mb-8">
            Rejoignez la communauté Fyndra et trouvez votre prochain grand défi
          </p>
          <Link
            to="/signup"
            className="inline-block px-8 py-4 bg-purple-500 hover:bg-purple-600 rounded-lg transition-colors text-lg font-semibold"
          >
            Créer un compte
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Fyndra. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
