import { tcpipQuestions, tcpipCourses, tcpipVMs } from "./TCP-IP";

export const réseauxTechnologies = {
  name: "Réseaux",
  description: "Protocoles réseau, administration et sécurité",
  technologies: {
    "TCP/IP": {
      name: "TCP/IP",
      description:
        "Protocoles de communication Internet et administration réseau",
      difficulty: "Intermédiaire",
      questionnaire: tcpipQuestions,
      cours: tcpipCourses,
      vm: tcpipVMs,
    },
  },
};
