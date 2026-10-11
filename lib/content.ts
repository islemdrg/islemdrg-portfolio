// ============================================================
//  CONTENU DU PORTFOLIO / PORTFOLIO CONTENT
//  Pour modifier un texte : change-le ici, puis "Commit" sur GitHub.
//  To change any text: edit it here, then commit on GitHub.
//  Vercel redéploie le site automatiquement.
//  Garde la même structure en anglais (en) et en français (fr).
// ============================================================

export type Lang = 'en' | 'fr'

export const links = {
  github: 'https://github.com/islemdrg',
  linkedin: 'https://www.linkedin.com/in/islem-darghouth/',
  email: 'islemdarghouth1312@gmail.com',
}

// Fichiers placés dans le dossier /public
export const cvFiles = {
  en: '/cv-islem-darghouth.pdf',
  fr: '/cv-islem-darghouth-fr.pdf',
}

// Ordre des sections (doit correspondre aux id dans page.tsx)
export const sectionIds = ['about', 'exchange', 'skills', 'experience', 'projects', 'credentials', 'contact']

export type Project = {
  title: string
  period: string
  tags: string[]
  desc: string
  result: string
  role: string // laisse '' pour masquer
  github: string // lien GitHub du projet/fork, laisse '' pour masquer
}

export type Cert = { title: string; issuer: string; url: string } // url '' = pas de lien

export type Content = {
  nav: string[]
  heroKicker: string
  heroTitle: string
  heroSub: string
  availability: string
  projects: string
  cv: string
  aboutTitle: string
  about: string
  stats: string[][]
  exchangeTitle: string
  exchangeText: string
  bring: string
  columns: string[][]
  recommendation: string
  skillsTitle: string
  skillsIntro: string
  skills: Record<string, string[]>
  experienceTitle: string
  experience: { date: string; role: string; org: string; text: string }[]
  projectsTitle: string
  projectLabel: string
  roleLabel: string
  githubLabel: string
  projectData: Project[]
  credentialsTitle: string
  medal: string
  medalText: string
  member: string
  certs: Cert[]
  view: string
  contactTitle: string
  contactText: string
  name: string
  email: string
  subject: string
  message: string
  send: string
  sent: string
  formNote: string
  options: string[]
  footer: string
  back: string
  themeToLight: string
  themeToDark: string
  switchLang: string
  menu: string
}

export const content: Record<Lang, Content> = {
  en: {
    nav: ['About', 'Exchange', 'Skills', 'Experience', 'Projects', 'Credentials', 'Contact'],
    heroKicker: 'Artificial Intelligence Engineering · ESPRIT · Tunis',
    heroTitle: "Hi, I'm Islem Darghouth",
    heroSub: 'AI Engineering Student at ESPRIT | LLMs, Deep Learning, NLP & Computer Vision',
    availability: 'Open to an exchange semester (S9, 2027) and AI internships abroad',
    projects: 'View projects',
    cv: 'Download CV',
    aboutTitle: 'I turn complex AI systems into useful products.',
    about:
      'I am a 4th-year Artificial Intelligence Engineering student at ESPRIT, building at the intersection of language, vision and data. My work spans an AI application for a bank, multimodal AI research and team projects in NLP, computer vision and software engineering. I care about turning complex systems into clear, useful products.',
    stats: [
      ['05', 'AI & software projects'],
      ['01', 'Bank AI internship'],
      ['01', 'Hackathon medal (42h)'],
      ['04', 'Certifications'],
    ],
    exchangeTitle: 'Why an exchange semester',
    exchangeText:
      'I am applying for the S9 exchange semester (September 2027) to study AI in an international setting, strengthen my research and engineering skills, and bring that experience back to ESPRIT.',
    bring: 'What I bring',
    columns: [
      ['Academic profile', '4th-year student · 2nd year of the engineering cycle at ESPRIT · French B2 · English B2'],
      ['Technical strengths', 'LLM pipelines · multimodal deep learning · NLP · computer vision · data products'],
      ['Goals', 'Deepen multimodal AI · build an international network · carry out my PFE with a research or industry link'],
    ],
    recommendation: 'Recommendation letters available on request.',
    skillsTitle: 'A focused technical toolkit',
    skillsIntro: 'The tools I use to turn language, vision and messy data into systems people can trust.',
    skills: {
      'AI & Data': ['LLM pipelines', 'Deep Learning', 'Multimodal AI', 'NLP', 'Computer Vision', 'Machine Learning', 'Pandas'],
      Programming: ['Python', 'C', 'C++', 'PHP', 'JavaScript', 'SQL', 'HTML'],
      'Frameworks & Tools': ['Qwen', 'Ollama', 'Flask', 'Django', 'Jira REST API', 'SQLite', 'Power BI', 'Jupyter', 'FlutterFlow', 'Git', 'GitHub'],
      Languages: ['Arabic (native)', 'French B2', 'English B2'],
      'Soft skills': ['Teamwork & Agile', 'Performance under pressure', 'Communication', 'Adaptability', 'Initiative'],
    },
    experienceTitle: 'Experience in the field',
    experience: [
      {
        date: 'JUL — AUG 2026',
        role: 'AI & Software Engineering Intern',
        org: 'Attijari Bank · TechOffice',
        text: 'Built a private internal AI application supporting the Change Advisory Board process. Designed an LLM pipeline with Qwen and Ollama to evaluate 1,090 parent Jira tickets, then automated the processing and synchronization of 6,713 sub-tasks linked to 697 parent tickets using Python, Pandas, Jira REST API, Flask and SQLite. Delivered an interactive dashboard with quality indicators, recommendations and reports.',
      },
      {
        date: 'JUL 2024',
        role: 'Communication Intern',
        org: 'GarciCom · Marketing agency',
        text: 'Supported digital content creation and campaign planning on Meta platforms, and contributed to graphic design tasks aligned with the brand identity.',
      },
    ],
    projectsTitle: 'Selected projects',
    projectLabel: 'Project',
    roleLabel: 'My role',
    githubLabel: 'View on GitHub',
    projectData: [
      {
        title: 'AI Consulting Platform for Startups',
        period: 'JAN — MAY 2026',
        tags: ['Deep Learning', 'NLP', 'Computer Vision'],
        desc: 'An AI platform helping entrepreneurs launch and scale startups through data-driven decisions. Deep learning and NLP models analyze social media content (posts, captions, visuals) to assess engagement and content effectiveness.',
        result: 'Academic team project · decision support',
        role: 'Deep learning and NLP models; computer vision integrated with NLP pipelines',
        github: '',
      },
      {
        title: 'Multimodal AI for Reproductive Health',
        period: 'ONGOING',
        tags: ['Multimodal AI', 'Deep Learning', 'Health'],
        desc: 'An ongoing deep learning project applying multimodal AI to reproductive health.',
        result: 'Ongoing · multimodal AI',
        role: '',
        github: '',
      },
      {
        title: 'Worki',
        period: 'SEP — DEC 2025',
        tags: ['Django', 'Jira', 'Agile'],
        desc: 'A Django platform for freelance projects, internships and training programs, with AI features to improve the user experience.',
        result: 'Product prototype · Scrum leadership',
        role: 'Freelance module · Scrum Master for one sprint',
        github: '',
      },
      {
        title: 'US Food Data Analysis & Prediction',
        period: 'SEP — DEC 2025',
        tags: ['Python', 'Machine Learning', 'Power BI'],
        desc: 'Analysis and preprocessing of US food datasets in Jupyter, interactive Power BI dashboards, and classification and prediction models integrated into a web platform for real-time insights.',
        result: 'Data project · predictive dashboard',
        role: 'Data preparation, machine learning models, dashboards and web integration',
        github: '',
      },
      {
        title: 'House-Sharing Mobile App',
        period: 'APR — MAY 2026',
        tags: ['FlutterFlow', 'Mobile'],
        desc: 'A mobile app that helps students find shared housing and stay organized, with shared task management and expense tracking.',
        result: 'Mobile prototype',
        role: 'Shared tasks and expense tracking features',
        github: '',
      },
    ],
    credentialsTitle: 'Achievements & certifications',
    medal: 'MaraTech 42-hour hackathon · IEEE · Jan 2026',
    medalText: 'Medal and certificate for an accessibility platform for hearing-impaired people, with an AI avatar sign-language system.',
    member: 'IEEE ESPRIT member',
    certs: [
      { title: 'Deep Learning Fundamentals', issuer: 'NVIDIA', url: '' },
      { title: 'Generative AI with Diffusion Models', issuer: 'NVIDIA', url: '' },
      { title: 'AI Fundamentals', issuer: 'Cisco', url: '' },
      { title: 'Introduction to Data Science', issuer: 'Cisco', url: '' },
    ],
    view: 'View certificate',
    contactTitle: "Let's talk",
    contactText: 'For an exchange semester, an internship or a collaboration, send me a message.',
    name: 'Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
    send: 'Open email',
    sent: 'Your email draft is ready.',
    formNote: 'This opens your email app with the message pre-filled.',
    options: ['Exchange', 'Internship', 'Collaboration', 'Other'],
    footer: 'Built with Next.js',
    back: 'Back to top',
    themeToLight: 'Switch to light theme',
    themeToDark: 'Switch to dark theme',
    switchLang: 'Passer en français',
    menu: 'Toggle navigation',
  },
  fr: {
    nav: ['À propos', 'Échange', 'Compétences', 'Expérience', 'Projets', 'Certifications', 'Contact'],
    heroKicker: 'Génie de l’intelligence artificielle · ESPRIT · Tunis',
    heroTitle: 'Bonjour, je suis Islem Darghouth',
    heroSub: 'Étudiante en génie IA à ESPRIT | LLMs, Deep Learning, NLP & Vision par ordinateur',
    availability: 'Ouverte à un semestre d’échange (S9, 2027) et aux stages IA à l’international',
    projects: 'Voir les projets',
    cv: 'Télécharger le CV',
    aboutTitle: 'Je transforme des systèmes d’IA complexes en produits utiles.',
    about:
      'Je suis étudiante en 4e année de génie de l’intelligence artificielle à ESPRIT. Je travaille à la croisée du langage, de la vision et de la donnée. Mes travaux couvrent une application IA pour une banque, de la recherche en IA multimodale et des projets d’équipe en NLP, vision par ordinateur et génie logiciel. Mon objectif : des produits clairs et utiles à partir de systèmes complexes.',
    stats: [
      ['05', 'Projets IA & logiciels'],
      ['01', 'Stage IA en banque'],
      ['01', 'Médaille hackathon (42h)'],
      ['04', 'Certifications'],
    ],
    exchangeTitle: 'Pourquoi un semestre d’échange',
    exchangeText:
      'Je candidate au semestre d’échange S9 (septembre 2027) pour étudier l’IA dans un cadre international, renforcer mes compétences de recherche et d’ingénierie, et rapporter cette expérience à ESPRIT.',
    bring: 'Ce que j’apporte',
    columns: [
      ['Profil académique', 'Étudiante en 4e année · 2e année du cycle ingénieur à ESPRIT · Français B2 · Anglais B2'],
      ['Forces techniques', 'Pipelines LLM · deep learning multimodal · NLP · vision par ordinateur · produits data'],
      ['Objectifs', 'Approfondir l’IA multimodale · construire un réseau international · réaliser mon PFE avec un lien recherche ou industrie'],
    ],
    recommendation: 'Lettres de recommandation disponibles sur demande.',
    skillsTitle: 'Une boîte à outils ciblée',
    skillsIntro: 'Les outils que j’utilise pour transformer le langage, la vision et des données brutes en systèmes fiables.',
    skills: {
      'IA & Data': ['Pipelines LLM', 'Deep Learning', 'IA multimodale', 'NLP', 'Vision par ordinateur', 'Machine Learning', 'Pandas'],
      Programmation: ['Python', 'C', 'C++', 'PHP', 'JavaScript', 'SQL', 'HTML'],
      'Frameworks & outils': ['Qwen', 'Ollama', 'Flask', 'Django', 'Jira REST API', 'SQLite', 'Power BI', 'Jupyter', 'FlutterFlow', 'Git', 'GitHub'],
      Langues: ['Arabe (langue maternelle)', 'Français B2', 'Anglais B2'],
      'Soft skills': ['Travail en équipe & Agile', 'Performance sous pression', 'Communication', 'Adaptabilité', 'Initiative'],
    },
    experienceTitle: 'Expérience terrain',
    experience: [
      {
        date: 'JUIL — AOÛT 2026',
        role: 'Stagiaire ingénierie IA & logiciel',
        org: 'Attijari Bank · TechOffice',
        text: 'Conception d’une application IA interne et privée pour le processus du Change Advisory Board. Pipeline LLM avec Qwen et Ollama pour évaluer 1 090 tickets Jira parents, puis automatisation du traitement et de la synchronisation de 6 713 sous-tâches liées à 697 tickets parents avec Python, Pandas, Jira REST API, Flask et SQLite. Livraison d’un tableau de bord interactif avec indicateurs de qualité, recommandations et rapports.',
      },
      {
        date: 'JUIL 2024',
        role: 'Stagiaire en communication',
        org: 'GarciCom · Agence de marketing',
        text: 'Aide à la création de contenu digital et à la planification de campagnes sur les plateformes Meta, et participation à des tâches de design graphique alignées sur l’identité de la marque.',
      },
    ],
    projectsTitle: 'Projets sélectionnés',
    projectLabel: 'Projet',
    roleLabel: 'Mon rôle',
    githubLabel: 'Voir sur GitHub',
    projectData: [
      {
        title: 'Plateforme de conseil IA pour startups',
        period: 'JAN — MAI 2026',
        tags: ['Deep Learning', 'NLP', 'Vision par ordinateur'],
        desc: 'Une plateforme IA qui aide les entrepreneurs à lancer et développer leur startup grâce à des décisions fondées sur les données. Des modèles de deep learning et de NLP analysent des contenus de réseaux sociaux (publications, légendes, visuels) pour évaluer l’engagement et l’efficacité du contenu.',
        result: 'Projet académique en équipe · aide à la décision',
        role: 'Modèles de deep learning et de NLP ; vision par ordinateur intégrée aux pipelines NLP',
        github: '',
      },
      {
        title: 'IA multimodale pour la santé reproductive',
        period: 'EN COURS',
        tags: ['IA multimodale', 'Deep Learning', 'Santé'],
        desc: 'Un projet de deep learning en cours appliquant l’IA multimodale à la santé reproductive.',
        result: 'En cours · IA multimodale',
        role: '',
        github: '',
      },
      {
        title: 'Worki',
        period: 'SEP — DÉC 2025',
        tags: ['Django', 'Jira', 'Agile'],
        desc: 'Une plateforme Django pour projets freelance, stages et formations, avec des fonctionnalités IA pour améliorer l’expérience utilisateur.',
        result: 'Prototype produit · leadership Scrum',
        role: 'Module freelance · Scrum Master pour un sprint',
        github: '',
      },
      {
        title: 'Analyse & prédiction de données alimentaires US',
        period: 'SEP — DÉC 2025',
        tags: ['Python', 'Machine Learning', 'Power BI'],
        desc: 'Analyse et prétraitement de jeux de données alimentaires américains dans Jupyter, tableaux de bord Power BI interactifs, et modèles de classification et de prédiction intégrés à une plateforme web pour des analyses en temps réel.',
        result: 'Projet data · tableau de bord prédictif',
        role: 'Préparation des données, modèles de machine learning, tableaux de bord et intégration web',
        github: '',
      },
      {
        title: 'Application mobile de colocation',
        period: 'AVR — MAI 2026',
        tags: ['FlutterFlow', 'Mobile'],
        desc: 'Une application mobile qui aide les étudiants à trouver un logement partagé et à s’organiser, avec gestion des tâches partagées et suivi des dépenses.',
        result: 'Prototype mobile',
        role: 'Fonctionnalités de tâches partagées et de suivi des dépenses',
        github: '',
      },
    ],
    credentialsTitle: 'Réalisations & certifications',
    medal: 'Hackathon MaraTech 42h · IEEE · janv. 2026',
    medalText: 'Médaille et certificat pour une plateforme d’accessibilité destinée aux personnes malentendantes, avec un système d’avatar IA en langue des signes.',
    member: 'Membre IEEE ESPRIT',
    certs: [
      { title: 'Deep Learning Fundamentals', issuer: 'NVIDIA', url: '' },
      { title: 'Generative AI with Diffusion Models', issuer: 'NVIDIA', url: '' },
      { title: 'AI Fundamentals', issuer: 'Cisco', url: '' },
      { title: 'Introduction to Data Science', issuer: 'Cisco', url: '' },
    ],
    view: 'Voir le certificat',
    contactTitle: 'Parlons-en',
    contactText: 'Pour un semestre d’échange, un stage ou une collaboration, envoyez-moi un message.',
    name: 'Nom',
    email: 'E-mail',
    subject: 'Sujet',
    message: 'Message',
    send: 'Ouvrir l’e-mail',
    sent: 'Votre brouillon est prêt.',
    formNote: 'Cela ouvre votre application e-mail avec le message pré-rempli.',
    options: ['Échange', 'Stage', 'Collaboration', 'Autre'],
    footer: 'Créé avec Next.js',
    back: 'Retour en haut',
    themeToLight: 'Passer au thème clair',
    themeToDark: 'Passer au thème sombre',
    switchLang: 'Switch to English',
    menu: 'Ouvrir ou fermer le menu',
  },
}
