import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Scale, Shield, Mail, MapPin, Phone } from "lucide-react";
import { useSmartNavigation } from "../../lib/navigation";

const LegalPage: React.FC = () => {
  const { goBack } = useSmartNavigation();

  // Remonter en haut de la page lors du chargement
  useEffect(() => {
    // Nettoyer les styles qui pourraient interférer
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";

    // Firefox-compatible scroll reset
    const scrollToTop = () => {
      // Méthode 1: window.scrollTo
      window.scrollTo(0, 0);

      // Méthode 2: documentElement pour Firefox
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      // Méthode 3: scrollIntoView sur le html
      document.documentElement.scrollIntoView({
        behavior: "instant",
        block: "start",
        inline: "start",
      });
    };

    // Exécuter immédiatement
    scrollToTop();

    // Réessayer après les animations possibles
    setTimeout(scrollToTop, 50);
    setTimeout(scrollToTop, 150);
  }, []);

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
            <button
              onClick={() => goBack("/")}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Retour
            </button>
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
              <Scale className="w-8 h-8 text-blue-400" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Mentions Légales
              </h1>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Informations légales et conditions d'utilisation de la plateforme
              Fyndra
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Éditeur du site */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">
                  Éditeur du site
                </h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="text-white font-semibold mb-2">
                    Raison sociale :
                  </h3>
                  <p>Fyndra</p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">
                    Forme juridique :
                  </h3>
                  <p>Société à Responsabilité Limitée (SARL)</p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">
                    Capital social :
                  </h3>
                  <p>10 000 € (Dix mille euros)</p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">
                    Numéro SIRET :
                  </h3>
                  <p>XXX XXX XXX XXXXX</p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">
                    Numéro RCS :
                  </h3>
                  <p>RCS Paris XXX XXX XXX</p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">
                    Numéro TVA intracommunautaire :
                  </h3>
                  <p>FR XX XXX XXX XXX</p>
                </div>
              </div>
            </motion.section>

            {/* Contact */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Mail className="w-6 h-6 text-green-400" />
                <h2 className="text-2xl font-bold text-white">Coordonnées</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6 text-gray-300">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <h3 className="text-white font-semibold">
                      Adresse du siège social :
                    </h3>
                  </div>
                  <p>
                    123 Avenue de l'Innovation
                    <br />
                    75001 Paris
                    <br />
                    France
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Phone className="w-5 h-5 text-green-400" />
                    <h3 className="text-white font-semibold">Contact :</h3>
                  </div>
                  <p>
                    Email : contact@fyndra.io
                    <br />
                    Téléphone : +33 (0)1 XX XX XX XX
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Directeur de publication */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Directeur de publication
              </h2>
              <div className="text-gray-300">
                <p>
                  <strong className="text-white">Nom :</strong> [Nom du
                  directeur]
                  <br />
                  <strong className="text-white">Qualité :</strong> Gérant de la
                  société PypNetty SARL
                </p>
              </div>
            </motion.section>

            {/* Hébergement */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Hébergement
              </h2>
              <div className="text-gray-300">
                <p>
                  <strong className="text-white">Hébergeur :</strong> [Nom de
                  l'hébergeur]
                  <br />
                  <strong className="text-white">Adresse :</strong> [Adresse de
                  l'hébergeur]
                  <br />
                  <strong className="text-white">Site web :</strong> [URL de
                  l'hébergeur]
                </p>
              </div>
            </motion.section>

            {/* Propriété intellectuelle */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Propriété intellectuelle
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  L'ensemble de ce site relève de la législation française et
                  internationale sur le droit d'auteur et la propriété
                  intellectuelle. Tous les droits de reproduction sont réservés,
                  y compris pour les documents téléchargeables et les
                  représentations iconographiques et photographiques.
                </p>
                <p>
                  La reproduction de tout ou partie de ce site sur un support
                  électronique quel qu'il soit est formellement interdite sauf
                  autorisation expresse du directeur de la publication.
                </p>
                <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-4">
                  <p className="text-orange-200">
                    <strong>⚠️ Attention :</strong> Ce projet est protégé par
                    copyright. Copyright © 2025 PypNetty. Tous droits réservés.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Protection des données */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Protection des données personnelles (RGPD)
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Conformément au Règlement Général sur la Protection des
                  Données (RGPD) et à la loi "Informatique et Libertés", vous
                  disposez d'un droit d'accès, de rectification, de suppression
                  et d'opposition aux données personnelles vous concernant.
                </p>
                <p>
                  <strong className="text-white">
                    Responsable du traitement :
                  </strong>{" "}
                  Fyndra
                </p>
                <p>
                  <strong className="text-white">
                    Finalités du traitement :
                  </strong>{" "}
                  Gestion des comptes utilisateurs, fourniture des services de
                  la plateforme, amélioration de nos services.
                </p>
                <p>
                  <strong className="text-white">
                    Durée de conservation :
                  </strong>{" "}
                  Les données sont conservées pour la durée nécessaire aux
                  finalités pour lesquelles elles sont collectées.
                </p>
                <p>
                  Pour exercer vos droits, vous pouvez nous contacter à
                  l'adresse :{" "}
                  <strong className="text-blue-300">contact@fyndra.io</strong>
                </p>
                <p>
                  Pour plus de détails, consultez notre{" "}
                  <Link
                    to="/privacy"
                    className="text-blue-300 hover:text-blue-200 underline"
                  >
                    Politique de Confidentialité
                  </Link>
                  .
                </p>
              </div>
            </motion.section>

            {/* Cookies */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Cookies</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Ce site utilise des cookies pour améliorer l'expérience
                  utilisateur et analyser le trafic. En continuant à naviguer
                  sur ce site, vous acceptez l'utilisation de cookies.
                </p>
                <p>
                  <strong className="text-white">
                    Types de cookies utilisés :
                  </strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Cookies techniques : nécessaires au fonctionnement du site
                  </li>
                  <li>Cookies d'analyse : pour améliorer nos services</li>
                  <li>Cookies de préférences : pour mémoriser vos choix</li>
                </ul>
                <p>
                  Vous pouvez configurer vos préférences de cookies dans les
                  paramètres de votre navigateur.
                </p>
              </div>
            </motion.section>

            {/* Limitation de responsabilité */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Limitation de responsabilité
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Les informations contenues sur ce site sont aussi précises que
                  possible et le site est périodiquement remis à jour, mais peut
                  toutefois contenir des inexactitudes, des omissions ou des
                  lacunes.
                </p>
                <p>
                  Si vous constatez une lacune, erreur ou ce qui parait être un
                  dysfonctionnement, merci de bien vouloir le signaler par email
                  à <strong className="text-blue-300">contact@fyndra.io</strong>{" "}
                  en décrivant le problème de la manière la plus précise
                  possible.
                </p>
                <p>
                  PypNetty SARL ne pourra être tenue responsable des dommages
                  directs et indirects causés au matériel de l'utilisateur, lors
                  de l'accès au site, et résultant soit de l'utilisation d'un
                  matériel ne répondant pas aux spécifications, soit de
                  l'apparition d'un bug ou d'une incompatibilité.
                </p>
              </div>
            </motion.section>

            {/* Droit applicable */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Droit applicable et juridiction
              </h2>
              <div className="text-gray-300">
                <p>
                  Tout litige en relation avec l'utilisation du site fyndra.me
                  est soumis au droit français. Il est fait attribution
                  exclusive de juridiction aux tribunaux compétents de Paris.
                </p>
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

export default LegalPage;
