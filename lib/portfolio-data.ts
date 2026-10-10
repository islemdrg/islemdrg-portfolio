export type Language = 'en' | 'fr'

export const portfolio = {
  name: 'Islem Darghouth',
  role: 'AI Engineering Student at ESPRIT',
  tagline: 'LLMs, Deep Learning, NLP & Computer Vision',
  availability: {
    en: 'Open to an exchange semester (S9, 2027) and AI internships abroad',
    fr: 'Ouvert à un semestre d\'échange (S9, 2027) et aux stages IA à l\'international',
  },
  bio: {
    en: 'I build AI and software projects that connect research ideas to useful products. As a fourth-year engineering student at ESPRIT, I work across LLM pipelines, multimodal learning, NLP and computer vision. I am preparing an international exchange semester and an AI internship abroad for 2027.',
    fr: 'Je construis des projets d\'IA et de logiciel qui transforment des idées de recherche en produits utiles. Étudiant en quatrième année du cycle ingénieur à ESPRIT, je travaille sur les pipelines LLM, l\'apprentissage multimodal, le NLP et la vision par ordinateur. Je prépare un semestre d\'échange international et un stage IA à l\'étranger pour 2027.',
  },
  nav: [
    { id: 'about', label: { en: 'About', fr: 'Profil' } },
    { id: 'exchange', label: { en: 'Exchange', fr: 'Échange' } },
    { id: 'skills', label: { en: 'Skills', fr: 'Compétences' } },
    { id: 'experience', label: { en: 'Experience', fr: 'Expérience' } },
    { id: 'projects', label: { en: 'Projects', fr: 'Projets' } },
    { id: 'contact', label: { en: 'Contact', fr: 'Contact' } },
  ],
  stats: [
    { value: '05', label: { en: 'AI & software projects', fr: 'Projets IA & logiciels' } },
    { value: '01', label: { en: 'Bank AI internship', fr: 'Stage IA en banque' } },
    { value: '42h', label: { en: 'Hackathon medal', fr: 'Hackathon médaillé' } },
    { value: '04', label: { en: 'Certifications', fr: 'Certifications' } },
  ],
  skills: {
    en: [
      ['AI & Data', 'LLM pipelines', 'Multimodal deep learning', 'NLP', 'Computer vision', 'Machine learning', 'Data products'],
      ['Programming', 'Python', 'Django', 'Flask', 'SQL'],
      ['Frameworks & Tools', 'Qwen', 'Ollama', 'Pandas', 'Jira REST API', 'Power BI', 'Jupyter', 'FlutterFlow'],
      ['Languages', 'French B2', 'English B2'],
      ['Ways of working', 'Teamwork & Agile', 'Performance under pressure', 'Communication', 'Adaptability', 'Initiative'],
    ],
    fr: [
      ['IA & Data', 'Pipelines LLM', 'Deep learning multimodal', 'NLP', 'Vision par ordinateur', 'Machine learning', 'Produits data'],
      ['Programmation', 'Python', 'Django', 'Flask', 'SQL'],
      ['Frameworks & outils', 'Qwen', 'Ollama', 'Pandas', 'Jira REST API', 'Power BI', 'Jupyter', 'FlutterFlow'],
      ['Langues', 'Français B2', 'Anglais B2'],
      ['Méthodes de travail', 'Travail en équipe & Agile', 'Performance sous pression', 'Communication', 'Adaptabilité', 'Initiative'],
    ],
  },
  experiences: [
    { date: 'Jul — Aug 2026', title: { en: 'AI & Software Engineering Intern', fr: 'Stagiaire ingénierie IA & logiciel' }, company: 'Attijari Bank · TechOffice', text: { en: 'Built a private, internal AI application supporting the Change Advisory Board process. Designed an LLM pipeline with Qwen and Ollama to evaluate 1,090 parent Jira tickets, automate 6,713 linked sub-tasks across 697 parent tickets, and surface quality indicators, recommendations and reports through an interactive dashboard.', fr: 'Développement d\'une application IA interne et privée pour accompagner le processus du Change Advisory Board. Conception d\'un pipeline LLM avec Qwen et Ollama pour évaluer 1 090 tickets Jira parents, automatiser 6 713 sous-tâches liées à 697 tickets parents, et présenter indicateurs, recommandations et rapports dans un tableau de bord interactif.' }, tech: 'Python · Pandas · Jira REST API · Flask · SQLite' },
    { date: 'Jul 2024', title: { en: 'Communication Intern', fr: 'Stagiaire communication' }, company: 'GarciCom', text: { en: 'Contributed to communication projects and learned to turn complex ideas into clear messages for different audiences.', fr: 'Contribution à des projets de communication et apprentissage de la mise en forme d\'idées complexes pour différents publics.' }, tech: '' },
  ],
  projects: [
    { number: '01', title: 'Multimodal AI for Reproductive Health', period: { en: 'Ongoing', fr: 'En cours' }, description: { en: 'An ongoing exploration of multimodal AI applied to reproductive health.', fr: 'Une exploration en cours de l\'IA multimodale appliquée à la santé reproductive.' }, tags: ['Multimodal AI', 'Deep learning'], link: '' },
    { number: '02', title: 'AI Consulting Platform for Startups', period: { en: 'Jan — May 2026', fr: 'Jan — Mai 2026' }, description: { en: 'Multimodal social media analysis combining deep learning, NLP and computer vision to help startups make better decisions.', fr: 'Analyse multimodale des réseaux sociaux combinant deep learning, NLP et vision par ordinateur pour aider les startups à mieux décider.' }, tags: ['Deep learning', 'NLP', 'Computer vision'], link: '' },
    { number: '03', title: 'Worki', period: { en: 'Sep — Dec 2025', fr: 'Sep — Déc 2025' }, description: { en: 'A hub for freelance work, internships and training. I built the freelance module and served as Scrum Master for one sprint.', fr: 'Une plateforme pour le freelance, les stages et la formation. J\'ai développé le module freelance et été Scrum Master pendant un sprint.' }, tags: ['Django', 'Jira'], link: '' },
    { number: '04', title: 'US Food Data Analysis & Prediction', period: { en: 'Sep — Dec 2025', fr: 'Sep — Déc 2025' }, description: { en: 'Data analysis and prediction workflow built with Python, machine learning, Jupyter and Power BI.', fr: 'Workflow d\'analyse et de prédiction construit avec Python, machine learning, Jupyter et Power BI.' }, tags: ['Python', 'Machine learning', 'Power BI'], link: '' },
    { number: '05', title: 'House-Sharing Mobile App', period: { en: 'Apr — May 2026', fr: 'Avr — Mai 2026' }, description: { en: 'A mobile experience for people looking to share a home, prototyped with FlutterFlow.', fr: 'Une expérience mobile pour les personnes qui cherchent à partager un logement, prototypée avec FlutterFlow.' }, tags: ['FlutterFlow', 'Mobile'], link: '' },
  ],
} as const

export const t = (language: Language, value: { en: string; fr: string }) => value[language]

export const certifications = [
  { title: 'NVIDIA Deep Learning Fundamentals', issuer: 'NVIDIA' },
  { title: 'NVIDIA Generative AI with Diffusion Models', issuer: 'NVIDIA' },
  { title: 'Cisco AI Fundamentals', issuer: 'Cisco' },
  { title: 'Cisco Introduction to Data Science', issuer: 'Cisco' },
]

export const labels = {
  en: { aboutTitle: 'A builder at the edge of ideas', exchangeTitle: 'Why an exchange semester', bringTitle: 'What I bring', skillsTitle: 'A focused technical toolkit', experienceTitle: 'Experience in the field', projectsTitle: 'Selected work', certTitle: 'Achievements & certifications', contactTitle: "Let\'s talk", contactText: 'For exchange opportunities, internships or a thoughtful collaboration, send a note.', viewProjects: 'View projects', download: 'Download CV', recommendation: 'Recommendation letters available on request.', send: 'Open email', private: 'Private project', role: 'My role', approach: 'Approach', medal: 'Medal & certificate', member: 'Member' },
  fr: { aboutTitle: 'Construire à la frontière des idées', exchangeTitle: 'Pourquoi un semestre d\'échange', bringTitle: 'Ce que j\'apporte', skillsTitle: 'Une boîte à outils ciblée', experienceTitle: 'Expérience sur le terrain', projectsTitle: 'Projets sélectionnés', certTitle: 'Réalisations & certifications', contactTitle: 'Parlons-en', contactText: 'Pour un échange, un stage ou une collaboration, envoyez-moi un message.', viewProjects: 'Voir les projets', download: 'Télécharger le CV', recommendation: 'Lettres de recommandation disponibles sur demande.', send: 'Ouvrir l\'email', private: 'Projet privé', role: 'Mon rôle', approach: 'Approche', medal: 'Médaille & certificat', member: 'Membre' },
} as const

export const exchangeColumns = {
  en: [
    ['Academic profile', '4th-year student · 2nd year of the engineering cycle at ESPRIT', 'French B2 · English B2'],
    ['Technical strengths', 'LLM pipelines · multimodal deep learning · NLP', 'Computer vision · data products'],
    ['Goals', 'Deepen an AI topic through international study', 'Build a network and carry out my PFE with a research or industry link'],
  ],
  fr: [
    ['Profil académique', 'Étudiant en 4e année · 2e année du cycle ingénieur à ESPRIT', 'Français B2 · Anglais B2'],
    ['Forces techniques', 'Pipelines LLM · deep learning multimodal · NLP', 'Vision par ordinateur · produits data'],
    ['Objectifs', 'Approfondir un sujet IA dans un cadre international', 'Construire un réseau et réaliser mon PFE avec un lien recherche ou industrie'],
  ],
} as const

export const achievements = {
  en: [{ title: 'MaraTech 42-hour hackathon', detail: 'IEEE ESPRIT · Jan 2026 · Medal', text: 'An accessibility platform with an AI avatar sign-language system.' }, { title: 'IEEE ESPRIT member', detail: 'Community & technology', text: 'Active member of a student engineering community.' }],
  fr: [{ title: 'Hackathon MaraTech 42 heures', detail: 'IEEE ESPRIT · Jan 2026 · Médaille', text: 'Une plateforme d\'accessibilité avec un système de langue des signes par avatar IA.' }, { title: 'Membre IEEE ESPRIT', detail: 'Communauté & technologie', text: 'Membre d\'une communauté étudiante d\'ingénieurs.' }],
} as const

export const socialLinks = { linkedin: 'https://www.linkedin.com/in/islem-darghouth/', github: 'https://github.com/islemdrg' }

export const contactSubjects = { en: ['Exchange', 'Internship', 'Collaboration', 'Other'], fr: ['Échange', 'Stage', 'Collaboration', 'Autre'] }

export type PortfolioProject = (typeof portfolio.projects)[number]
export type PortfolioExperience = (typeof portfolio.experiences)[number]

export default portfolio
