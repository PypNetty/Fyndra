import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Shield,
  Lock,
  Eye,
  Database,
  UserCheck,
} from "lucide-react";

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#010116] text-white">
      {/* Background gradients */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#010116]">
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-purple-600/20 filter blur-[100px]"></div>
          <div className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-blue-500/20 filter blur-[100px]"></div>
        </div>
      </div>

      {/* Header */}
      <div className="relative z-10 px-6 pt-12 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <Link
              to="/"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Retour à l'accueil
            </Link>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-tighter bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Fyndra
              </span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <Shield className="w-8 h-8 text-green-400" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Politique de Confidentialité
              </h1>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Comment nous collectons, utilisons et protégeons vos données
              personnelles
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Introduction */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Lock className="w-6 h-6 text-green-400" />
                <h2 className="text-2xl font-bold text-white">Introduction</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  Chez Fyndra, nous accordons une importance primordiale à la
                  protection de vos données personnelles. Cette politique de
                  confidentialité explique comment nous collectons, utilisons,
                  stockons et protégeons vos informations.
                </p>
                <p>
                  En utilisant notre plateforme, vous acceptez les pratiques
                  décrites dans cette politique. Si vous n'acceptez pas ces
                  conditions, veuillez ne pas utiliser nos services.
                </p>
              </div>
            </motion.section>

            {/* Données collectées */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Database className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">
                  Données que nous collectons
                </h2>
              </div>
              <div className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-white font-semibold mb-3">
                    Données d'identification :
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Nom et prénom</li>
                    <li>Adresse email</li>
                    <li>Mot de passe (crypté)</li>
                    <li>Photo de profil (optionnelle)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-3">
                    Données d'utilisation :
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Résultats des questionnaires et tests</li>
                    <li>Temps passé sur la plateforme</li>
                    <li>Progression dans les parcours</li>
                    <li>Préférences et paramètres</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-3">
                    Données techniques :
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Adresse IP</li>
                    <li>Type de navigateur et version</li>
                    <li>Système d'exploitation</li>
                    <li>Pages visitées et temps de visite</li>
                    <li>Cookies et technologies similaires</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Utilisation des données */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-bold text-white">
                  Comment nous utilisons vos données
                </h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="text-white font-semibold mb-2">
                    Fourniture des services :
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Création et gestion de votre compte</li>
                    <li>Personnalisation de votre expérience</li>
                    <li>Suivi de votre progression</li>
                    <li>Génération de rapports personnalisés</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">
                    Amélioration des services :
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Analyse des performances de la plateforme</li>
                    <li>Développement de nouvelles fonctionnalités</li>
                    <li>Optimisation de l'expérience utilisateur</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">
                    Communication :
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Notifications importantes sur votre compte</li>
                    <li>Support technique</li>
                    <li>Newsletter (avec votre consentement)</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Partage des données */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Partage des données
              </h2>
              <div className="space-y-4 text-gray-300">
                <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4">
                  <p className="text-red-200">
                    <strong>🔒 Principe :</strong> Nous ne vendons jamais vos
                    données personnelles à des tiers.
                  </p>
                </div>
                <p>
                  Nous pouvons partager vos données uniquement dans les cas
                  suivants :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong className="text-white">
                      Prestataires de services :
                    </strong>{" "}
                    Hébergement, analytics, support client (sous contrat de
                    confidentialité)
                  </li>
                  <li>
                    <strong className="text-white">
                      Obligations légales :
                    </strong>{" "}
                    Si la loi nous y oblige
                  </li>
                  <li>
                    <strong className="text-white">
                      Protection des droits :
                    </strong>{" "}
                    Pour protéger nos droits, notre propriété ou notre sécurité
                  </li>
                  <li>
                    <strong className="text-white">
                      Avec votre consentement :
                    </strong>{" "}
                    Dans tout autre cas, uniquement avec votre accord explicite
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Sécurité */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-yellow-400" />
                <h2 className="text-2xl font-bold text-white">
                  Sécurité des données
                </h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  Nous mettons en place des mesures de sécurité appropriées pour
                  protéger vos données :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong className="text-white">Chiffrement :</strong> Toutes
                    les données sensibles sont chiffrées
                  </li>
                  <li>
                    <strong className="text-white">Accès restreint :</strong>{" "}
                    Seuls les employés autorisés peuvent accéder aux données
                  </li>
                  <li>
                    <strong className="text-white">Surveillance :</strong>{" "}
                    Monitoring continu de la sécurité
                  </li>
                  <li>
                    <strong className="text-white">Mises à jour :</strong>{" "}
                    Systèmes régulièrement mis à jour
                  </li>
                  <li>
                    <strong className="text-white">Sauvegardes :</strong>{" "}
                    Sauvegardes sécurisées et régulières
                  </li>
                </ul>
                <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-blue-200">
                    <strong>💡 Important :</strong> Aucun système n'est 100%
                    sécurisé. Nous nous engageons à vous informer rapidement en
                    cas d'incident.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Vos droits */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <UserCheck className="w-6 h-6 text-green-400" />
                <h2 className="text-2xl font-bold text-white">
                  Vos droits (RGPD)
                </h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-white font-semibold mb-2">
                      ✅ Droit d'accès
                    </h3>
                    <p className="text-sm">
                      Consulter les données que nous avons sur vous
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-white font-semibold mb-2">
                      📝 Droit de rectification
                    </h3>
                    <p className="text-sm">Corriger des données inexactes</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-white font-semibold mb-2">
                      🗑️ Droit à l'effacement
                    </h3>
                    <p className="text-sm">
                      Supprimer vos données ("droit à l'oubli")
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-white font-semibold mb-2">
                      ⏸️ Droit à la limitation
                    </h3>
                    <p className="text-sm">
                      Limiter le traitement de vos données
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-white font-semibold mb-2">
                      📦 Droit à la portabilité
                    </h3>
                    <p className="text-sm">
                      Récupérer vos données dans un format lisible
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-white font-semibold mb-2">
                      🚫 Droit d'opposition
                    </h3>
                    <p className="text-sm">
                      Vous opposer au traitement de vos données
                    </p>
                  </div>
                </div>
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                  <p className="text-green-200">
                    <strong>📧 Pour exercer vos droits :</strong> Contactez-nous
                    à <strong>contact@fyndra.io</strong>
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Cookies */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Cookies et technologies similaires
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Nous utilisons des cookies pour améliorer votre expérience :
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <div>
                      <strong className="text-white">Cookies essentiels</strong>
                      <p className="text-sm">
                        Nécessaires au fonctionnement du site
                      </p>
                    </div>
                    <span className="text-green-400 text-sm">Obligatoires</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <div>
                      <strong className="text-white">
                        Cookies analytiques
                      </strong>
                      <p className="text-sm">Pour améliorer nos services</p>
                    </div>
                    <span className="text-blue-400 text-sm">
                      Avec consentement
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <div>
                      <strong className="text-white">
                        Cookies de préférences
                      </strong>
                      <p className="text-sm">Pour mémoriser vos choix</p>
                    </div>
                    <span className="text-blue-400 text-sm">
                      Avec consentement
                    </span>
                  </div>
                </div>
                <p className="text-sm">
                  Vous pouvez configurer vos préférences de cookies dans les
                  paramètres de votre navigateur.
                </p>
              </div>
            </motion.section>

            {/* Conservation des données */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Conservation des données
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Nous conservons vos données aussi longtemps que nécessaire
                  pour :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Fournir nos services</li>
                  <li>Respecter nos obligations légales</li>
                  <li>Résoudre des litiges</li>
                  <li>Faire respecter nos accords</li>
                </ul>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">
                    Durées de conservation :
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>
                      <strong>Comptes actifs :</strong> Tant que le compte est
                      utilisé
                    </li>
                    <li>
                      <strong>Comptes inactifs :</strong> 3 ans après la
                      dernière connexion
                    </li>
                    <li>
                      <strong>Données de logs :</strong> 12 mois maximum
                    </li>
                    <li>
                      <strong>Données analytiques :</strong> 24 mois maximum
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Contact et modifications */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Contact et modifications
              </h2>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="text-white font-semibold mb-2">
                    Nous contacter :
                  </h3>
                  <p>
                    Pour toute question concernant cette politique de
                    confidentialité :<br />
                    📧 Email :{" "}
                    <strong className="text-blue-300">contact@fyndra.io</strong>
                    <br />
                    📍 Adresse : 123 Avenue de l'Innovation, 75001 Paris, France
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">
                    Modifications :
                  </h3>
                  <p>
                    Nous pouvons modifier cette politique de confidentialité à
                    tout moment. Les modifications importantes vous seront
                    notifiées par email ou via la plateforme.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-center pt-8 border-t border-white/10"
            >
              <p className="text-gray-400 text-sm">
                Dernière mise à jour : 22 juin 2025
              </p>
              <p className="text-gray-500 text-xs mt-2">
                © 2025 Fyndra - Tous droits réservés
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
