// Everything personal about this profile lives in this file.
// To make it yours: fork the repo, rename it to your username, edit this file,
// and run the "Refresh profile" workflow. README.md and assets/ are generated from here,
// so edit this file rather than README.md.

export default {
  // GitHub username the dashboard is built for. In Actions it defaults to the repo owner.
  login: process.env.GH_LOGIN || 'alfyyakkov',

  name: 'Alfy KY',
  greeting: "Hi there, I'm",
  location: 'Kerala, India',
  website: '',

  // Lines that rotate under your name in the animated header.
  roles: [
    'Python Full Stack Developer · Data Scientist',
    'Django · Django REST Framework · React · Machine Learning',
    'Real-Time Systems · WebSockets · Celery · Async Workflows',
    'Cloud Architecture · AWS · DigitalOcean · CI/CD',
  ],

  // Shown as a centred row under the header. `bold` marks the ones to emphasise.
  links: [
    { label: 'LinkedIn', url: 'https://linkedin.com/in/alfyyakkov', bold: true },
    { label: 'GitHub', url: 'https://github.com/alfyyakkov', bold: true },
    { label: 'Email', url: 'mailto:alfiyakkove@gmail.com', bold: true },
  ],

  // "About me" paragraphs and bullet points. Markdown is allowed.
  about: [
    'I am a Software Engineer and Data Professional with over 4 years of experience architecting, deploying, and maintaining scalable web applications, asynchronous systems, and data processing workflows. My core technical foundation centers on Python, Django, Django REST Framework, and Machine Learning, paired with extensive expertise in relational database optimization and cloud infrastructure.',
    'Specializing in production deployments across AWS EC2, AWS RDS, DigitalOcean, and Linux/Nginx environments, I have hands-on experience implementing multi-gateway payment processing (Razorpay, HDFC SmartGateway, Easebuzz) with automated webhook reconciliation, real-time WebSocket communication, and background worker queues using Celery & Celery Beat.',
    'Beyond backend systems, I build predictive data workflows and analytics solutions—from developing Python and PySpark ETL pipelines and training machine learning models to designing interactive business intelligence dashboards in Microsoft Power BI.',
  ],
  highlights: [
    ['🧭', 'Core expertise', 'Python · Django & DRF · Machine Learning · Celery · WebSockets · PostgreSQL · AWS & DigitalOcean · ETL Pipelines'],
    ['💼', 'Current role', 'Python Full Stack Developer at Geosys IT Solutions'],
    ['📜', 'Certifications', 'Professional AI with Data Science (DATASPARK)'],
    ['🎓', 'Education', 'B.Tech in Computer Science & Engineering (KTU)'],
    ['🌱', 'What I value', 'clean architecture, resilient asynchronous systems, and scalable data-driven solutions'],
    ['📍', 'Based in', 'Kerala, India'],
    ['🤝', 'Get in touch', '[alfiyakkove@gmail.com](mailto:alfiyakkove@gmail.com) · [LinkedIn](https://linkedin.com/in/alfyyakkov)'],
  ],

  // Tech stack card: [group, [items]].
  stack: [
    ['Backend', ['Python', 'Django', 'Django REST Framework', 'Celery', 'WebSockets', 'Daphne', 'Gunicorn']],
    ['Frontend', ['JavaScript', 'React', 'HTML5', 'CSS3', 'Bootstrap']],
    ['Data & AI', ['Machine Learning', 'Scikit-learn', 'Pandas', 'NumPy', 'PySpark', 'Power BI']],
    ['Databases', ['PostgreSQL', 'MySQL', 'AWS RDS', 'Query Optimization', 'Database Indexing']],
    ['Cloud & DevOps', ['AWS EC2', 'DigitalOcean', 'Linux (Ubuntu/Debian)', 'Nginx', 'Git', 'CI/CD']],
    ['APIs & Services', ['Razorpay', 'HDFC SmartGateway', 'Easebuzz', 'OneSignal', 'PickyAssist', 'Google Maps']],
  ],

  // Turn whole sections on or off.
  sections: {
    about: true,
    stack: true,
    overview: true,
    heatmap: true,
    trend: true,
    rhythm: true,
    journey: true,
    openSource: true,
    projects: true,
  },

  projects: {
    count: 6,
    // Private repos need a PROFILE_TOKEN secret. They are listed by name and language only.
    includePrivate: true,
  },

  openSource: {
    recent: 8, // latest PRs, issues and discussions on other people's repos
    topRepos: 6,
  },

  languages: {
    exclude: [], // e.g. ['HTML', 'CSS'] to leave markup out of the language charts
  },

  // Dates and the "last changed" time in the footer use these.
  timeZone: 'Asia/Kolkata',
  locale: 'en-IN',

  // Card colors. `series` is a colorblind-checked categorical order: keep the order if you change it.
  themes: {
    dark: {
      bg: '#0d1117', panel: '#161b22', border: '#30363d', text: '#e6edf3', muted: '#9198a1',
      accent: '#58a6ff', accent2: '#bc8cff',
      heat: ['#161b22', '#0d3a7a', '#1660d0', '#3f8cff', '#9ccaff'],
      series: ['#3987e5', '#d95926', '#199e70', '#c98500', '#d55181', '#008300', '#9085e9'],
      other: '#6e7681',
    },
    light: {
      bg: '#ffffff', panel: '#f6f8fa', border: '#d0d7de', text: '#1f2328', muted: '#59636e',
      accent: '#0969da', accent2: '#8250df',
      heat: ['#eff2f5', '#c5dcff', '#7fb0fb', '#2f7de8', '#0a4aa6'],
      series: ['#2a78d6', '#eb6834', '#1baf7a', '#eda100', '#e87ba4', '#008300', '#6250d6'],
      other: '#8c959f',
    },
  },
};
