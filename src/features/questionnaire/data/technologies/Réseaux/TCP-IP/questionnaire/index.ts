export const tcpipQuestions = [
  {
    id: 1,
    question: "Combien de couches compte le modèle TCP/IP ?",
    options: ["4", "5", "7", "3"],
    correctAnswer: 0,
    explanation:
      "Le modèle TCP/IP comprend 4 couches : Application, Transport, Internet et Accès réseau.",
    difficulty: "Débutant",
    category: "Modèle TCP/IP",
  },
  {
    id: 2,
    question: "Quel protocole de transport garantit la livraison des données ?",
    options: ["UDP", "TCP", "ICMP", "IP"],
    correctAnswer: 1,
    explanation:
      "TCP (Transmission Control Protocol) garantit la livraison fiable des données contrairement à UDP.",
    difficulty: "Débutant",
    category: "Protocoles de transport",
  },
  {
    id: 3,
    question: "Quelle est la plage d'adresses IP privées de classe A ?",
    options: [
      "10.0.0.0/8",
      "172.16.0.0/12",
      "192.168.0.0/16",
      "169.254.0.0/16",
    ],
    correctAnswer: 0,
    explanation:
      "La plage d'adresses privées de classe A est 10.0.0.0/8 (10.0.0.0 à 10.255.255.255).",
    difficulty: "Intermédiaire",
    category: "Adressage IP",
  },
  {
    id: 4,
    question: "Quel port utilise par défaut le protocole HTTP ?",
    options: ["21", "22", "80", "443"],
    correctAnswer: 2,
    explanation:
      "HTTP utilise le port 80 par défaut, tandis que HTTPS utilise le port 443.",
    difficulty: "Débutant",
    category: "Ports et services",
  },
  {
    id: 5,
    question: "Que signifie DHCP ?",
    options: [
      "Dynamic Host Control Protocol",
      "Dynamic Host Configuration Protocol",
      "Data Host Configuration Protocol",
      "Direct Host Communication Protocol",
    ],
    correctAnswer: 1,
    explanation:
      "DHCP signifie Dynamic Host Configuration Protocol et permet l'attribution automatique d'adresses IP.",
    difficulty: "Intermédiaire",
    category: "Services réseau",
  },
  {
    id: 6,
    question: "Quelle commande permet de voir la table de routage sous Linux ?",
    options: ["route", "ip route", "netstat -r", "Toutes les réponses"],
    correctAnswer: 3,
    explanation:
      "Les commandes route, ip route et netstat -r permettent toutes d'afficher la table de routage.",
    difficulty: "Intermédiaire",
    category: "Routage",
  },
  {
    id: 7,
    question:
      "Quel protocole est utilisé pour résoudre les noms de domaine en adresses IP ?",
    options: ["ARP", "DNS", "DHCP", "NAT"],
    correctAnswer: 1,
    explanation:
      "DNS (Domain Name System) traduit les noms de domaine en adresses IP.",
    difficulty: "Débutant",
    category: "Services réseau",
  },
  {
    id: 8,
    question: "Quelle est la différence principale entre un hub et un switch ?",
    options: [
      "Le hub est plus rapide",
      "Le switch crée des domaines de collision séparés",
      "Le hub supporte plus de ports",
      "Il n'y a pas de différence",
    ],
    correctAnswer: 1,
    explanation:
      "Un switch crée un domaine de collision séparé pour chaque port, contrairement au hub qui partage un seul domaine de collision.",
    difficulty: "Avancé",
    category: "Équipements réseau",
  },
];
