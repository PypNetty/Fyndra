export const tcpipVMs = [
  {
    id: "network-lab",
    name: "Laboratoire Réseau Multi-Nœuds",
    description:
      "Environnement virtuel avec plusieurs machines pour pratiquer la configuration réseau",
    os: "Ubuntu 22.04 + Cisco Packet Tracer",
    specs: {
      cpu: "4 cores",
      ram: "6GB",
      storage: "30GB",
    },
    preInstalled: [
      "Ubuntu Server avec outils réseau",
      "Cisco Packet Tracer",
      "Wireshark",
      "nmap, netcat, tcpdump",
      "Configuration multi-VM (routeur, switch, clients)",
    ],
    exercises: [
      "Configuration d'adressage IP statique et DHCP",
      "Mise en place de VLANs",
      "Configuration de routage entre réseaux",
      "Analyse de trafic avec Wireshark",
    ],
  },
  {
    id: "network-security",
    name: "Sécurité Réseau",
    description: "VM spécialisée pour la sécurité et le monitoring réseau",
    os: "Kali Linux",
    specs: {
      cpu: "2 cores",
      ram: "4GB",
      storage: "25GB",
    },
    preInstalled: [
      "Kali Linux",
      "Suite d'outils de sécurité réseau",
      "Firewall (iptables, ufw)",
      "IDS/IPS (Suricata)",
      "Outils de scan et d'audit",
    ],
    exercises: [
      "Configuration de pare-feu",
      "Détection d'intrusions",
      "Audit de sécurité réseau",
      "Mise en place de VPN",
    ],
  },
];
