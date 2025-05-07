import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, UsersIcon, AcademicCapIcon, SparklesIcon, ClockIcon, ChartBarIcon, BriefcaseIcon, BuildingOffice2Icon, AcademicCapIcon as GraduationCapIcon } from '@heroicons/react/24/outline';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Sarah Dupont',
      role: 'CEO & Co-fondatrice',
      description: 'Passionnée par la technologie et l\'innovation, Sarah dirige Fyndra avec vision et détermination.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500',
    },
    {
      name: 'Thomas Martin',
      role: 'CTO & Co-fondateur',
      description: 'Expert en IA et en développement, Thomas est à l\'origine de la technologie de Fyndra.',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=500',
    },
    {
      name: 'Marie Chen',
      role: 'Directrice des opérations',
      description: 'Marie s\'assure que toutes les opérations de Fyndra fonctionnent de manière fluide et efficace.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=500',
    },
    {
      name: 'David Dubois',
      role: 'Responsable marketing',
      description: 'David est en charge de la stratégie marketing et de la croissance de Fyndra.',
      avatar: 'https://images.unsplash.com/photo-1573497014508-93a7f43c8cb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500',
    },
  ];

  const companyValues = [
    {
      icon: ChartBarIcon,
      title: 'Innovation constante',
      description: 'Nous croyons en l\'innovation continue pour améliorer l\'expérience utilisateur et les résultats.',
    },
    {
      icon: BriefcaseIcon,
      title: 'Excellence professionnelle',
      description: 'Notre équipe est composée d\'experts passionnés qui s\'engagent à fournir le meilleur service.',
    },
    {
      icon: BuildingOffice2Icon,
      title: 'Transparence',
      description: 'Nous maintenons une communication claire et transparente avec nos utilisateurs et partenaires.',
    },
    {
      icon: GraduationCapIcon,
      title: 'Formation continue',
      description: 'Nous encourageons la formation continue de notre équipe pour rester à la pointe de la technologie.',
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
            À propos de Fyndra
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            Notre mission est de révolutionner la recherche d'emploi dans le secteur tech
          </motion.p>
        </div>
      </div>

      {/* Company Description */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Notre histoire</h2>
            <p className="text-gray-300 mb-6">
              Fyndra est né de l'expérience personnelle de ses fondateurs dans le secteur tech. Après avoir vécu les difficultés de la recherche d'emploi dans ce domaine en constante évolution, ils ont décidé de créer une solution qui simplifierait le processus pour tous.
            </p>
            <p className="text-gray-300 mb-6">
              En utilisant l'intelligence artificielle et l'analyse de données, Fyndra a développé une plateforme qui non seulement trouve les meilleures opportunités, mais qui aide aussi les utilisateurs à se développer professionnellement.
            </p>
            <p className="text-gray-300">
              Depuis notre lancement, nous avons aidé des milliers de professionnels tech à trouver leur prochain grand défi et à évoluer dans leur carrière.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-purple-900/50 p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-4">Nos chiffres</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-4xl font-bold mb-2">100K+</div>
                <p className="text-gray-400">Utilisateurs actifs</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5000+</div>
                <p className="text-gray-400">Offres analysées quotidiennement</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">95%</div>
                <p className="text-gray-400">Taux de satisfaction</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <p className="text-gray-400">Support en continu</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-black/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Notre équipe</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-purple-900 p-8 rounded-xl"
              >
                <div className="relative mb-6">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-400 mb-4">{member.role}</p>
                <p className="text-gray-300">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-16">Nos valeurs</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {companyValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-8 bg-gradient-to-r from-purple-800 to-purple-900 rounded-xl"
            >
              <div className="mx-auto h-12 w-12 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                {value.icon && <value.icon className="h-6 w-6 text-white" />}
              </div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-purple-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Rejoignez-nous</h2>
          <p className="text-gray-300 mb-8">
            Vous êtes passionné par la technologie et l'innovation ? Rejoignez notre équipe !
          </p>
          <Link
            to="/careers"
            className="inline-block px-8 py-4 bg-purple-500 hover:bg-purple-600 rounded-lg transition-colors text-lg font-semibold"
          >
            Postulez maintenant
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
