export const aboutData = {
  avatar: "/assets/ayoub-bouaik.png",
};
export const profile = {
  name: "Ayoub Bouaik",
  roles: ["Software Engineer", "Backend Developer", "DevOps Enthusiast", "Cyclist", "Chess Player"],
  email: "ayoub.bouaik.dev@gmail.com",
  phone: "+212 632 921 722",
  location: "Morocco",
  linkedin: "https://www.linkedin.com/in/ayoub-bouaik-3724b121b/",
  github: "https://github.com/bouaik9",
  resumeUrl: "/assets/Ayoub-Bouaik-Resume.pdf",
  about: [
    "I'm a Software Engineering & Artificial Intelligence student at FST Errachidia.",
    "Python is my primary language, with hands-on experience building backend applications, automating workflows, and working with data.",
    "Across two internships, I've applied Python to real-world engineering problems and shipped software into production.",
    "My experience also extends to DevOps, Java, and full-stack development. I'm currently looking for a PFE internship where I can contribute to challenging engineering projects and deepen my expertise in backend and data engineering.",
  ],
};

export const experience = [
  {
    company: "Dowency",
    role: "Software Engineer Intern : Full-Stack & Data",
    team: "Fintech client · Remote",
    period: "Jul 2026 — Sep 2026",
    current: false,
    highlights: [
      "Built and shipped a production Django + React platform replacing manual ad reporting across Meta, TikTok and AppsFlyer — cutting report prep from 5+ hours to a fully automated weekly run on live campaign data.",
      "Designed an extensible data pipeline using hexagonal architecture and Python/Polars for 5 regional report types; deployed with Docker Compose and CI/CD.",
      "Implemented a daily job flagging underperforming ads against three rule-based heuristics — flagged 47 ads with ~$6K spend, including ads at 3–7x the ad-set average CAC with zero conversions.",
      "Automated ingestion and report delivery with Airflow + PostgreSQL; surfaced a live campaign that should have been paused, stopping unnecessary ad spend.",
      "Developed an OpenAI-powered ad-copy validation tool, eliminating manual spelling/grammar review across advertising content.",
    ],
    tags: ["Django", "React", "Polars", "Airflow", "PostgreSQL", "Docker", "CI/CD", "OpenAI API"],
  },
  {
    company: "Dowency",
    role: "Software Engineer Intern",
    team: "Remote",
    period: "Jul 2025 — Sep 2025",
    current: false,
    highlights: [
      "Built a data-collection backend processing 10,000+ records/day with Airflow, deployed through CI for high availability.",
      "Designed FastAPI REST services over PostgreSQL, serving as the internal data layer.",
    ],
    tags: ["FastAPI", "Airflow", "PostgreSQL", "CI"],
  },
  {
    company: "Django Software Foundation",
    role: "Django Core Contributor",
    team: "Open Source · Remote",
    period: "Jun 2025 — Aug 2025",
    current: false,
    highlights: [
      "Diagnosed and fixed a ValueError in FileBasedCache.touch() caused by expired cache keys — fix reviewed and merged into Django's main branch.",
    ],
    tags: ["Python", "Django", "Open Source"],
  },
];

export const skills = [
  { category: "Languages", items: [["Python", 95], ["JavaScript / TypeScript", 85], ["Java", 65]] },
  { category: "Backend", items: [["Django", 92], ["FastAPI", 85], ["Nest.js", 75], ["Express.js", 70], ["Spring Boot", 45]] },
  { category: "Frontend", items: [["React / Next.js", 75], ["HTML & CSS", 60]] },
  { category: "Data & AI", items: [["Polars / Pandas", 90], ["Graph Neural Networks", 70]] },
  { category: "DevOps", items: [["Git & GitHub", 92], ["Docker & Kubernetes", 75], ["Oracle Cloud / AWS", 70], ["Airflow", 80]] },
  { category: "Testing & Scraping", items: [["Selenium", 95], ["BeautifulSoup & Scrapy", 95]] },
  { category: "Databases", items: [["PostgreSQL", 95], ["Redis", 80], ["MongoDB", 70]] },
];

export const projects = [
  {
    title: "Competitor Price Monitor",
    description: "Async pipeline tracking price & stock across 50,000+ SKU URLs every 15 minutes, with per-domain rate limiting and Redis Streams consumer groups for reliable work distribution.",
    tech: ["Python", "asyncio", "Redis Streams", "Polars", "PostgreSQL", "S3", "Docker"],
    link: "https://github.com/bouaik9",
  },
  {
    title: "Collaborative Real-Time Code Editor",
    description: "Multi-user editor with WebSocket sync and persistence; Redis Pub/Sub state distribution for sub-100ms sync between concurrent users.",
    tech: ["Next.js", "NestJS", "TypeScript", "Socket.IO", "Redis", "Docker"],
    link: "https://github.com/bouaik9/collaborative-editor",
  },
  {
    title: "CinePass — Movie Reservation Platform",
    description: "Browse films, view real-time seat availability, select seats and complete bookings without conflicts.",
    tech: ["Next.js", "Nest.js", "PostgreSQL"],
    link: "https://github.com/bouaik9/CinePass",
  },
  {
    title: "Command-Line Chat Application",
    description: "Terminal-based chat with user authentication and room-based messaging.",
    tech: ["Python", "Django", "Celery", "RabbitMQ"],
    link: "https://github.com/bouaik9/django-chat-celery-rabbitmq",
  },
  {
    title: "Scientific Article Classification",
    description: "Automatic classification of articles by scientific domain and detection of article communities using graph neural networks.",
    tech: ["Python", "GNN", "TensorFlow"],
    link: "https://github.com/bouaik9/GNN",
  },
  {
    title: "Amazon Products Scraper",
    description: "Python web scraper extracting structured product information from Amazon at scale.",
    tech: ["Python", "BeautifulSoup", "Pandas"],
    link: "https://github.com/bouaik9",
  },
];

export const achievements = [
  { title: "Huawei ICT Competition — Global Stage, China", img: "/assets/china.jpeg", detail: "3rd prize. Represented Morocco on the global stage in DevOps and cloud technologies.", year: "2025" },
  { title: "Mobile Health Digi-Hackathon", img: "/assets/hackathon.jpeg", detail: "2nd place — shipped an innovative healthcare mobile application under time pressure.", year: "2025" },
  { title: "Moroccan National Programming Contest — UM6P", img: "/assets/1709226557964.jpeg", detail: "11th of 60 teams solving complex algorithmic challenges under time pressure.", year: "2024" },
  { title: "Hassania IT Problem Solving — EHTP Casablanca", img: "/assets/cp.jpeg", detail: "9th of 25 teams in a contest focused on algorithms and efficient problem-solving.", year: "2024" },
  { title: "Game of Codes IV — INSEA", img: "/assets/1770942723131.jpeg", detail: "4-hour competitive programming challenge on problem-solving and teamwork.", year: "2025" },
  { title: "AMPC3 Problem Solving — ENSAM Meknes", img: "/assets/1710186883323.jpeg", detail: "Algorithmic challenges emphasizing logic, speed and coding efficiency.", year: "2024" },
];

export const certificates = [
  { title: "Oracle Cloud Infrastructure DevOps Professional", issuer: "Oracle", date: "Nov 2025", verify: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=B8E67A6A9D68E5B6C4DD42B56EBFC3B8E4185C81FE33CAA7704CD6BB42D4DE14" },
  { title: "Meta Back-End Developer Professional Certificate", issuer: "Meta via Coursera", date: "Mar 2024", verify: "https://coursera.org/verify/professional-cert/8MAREAVKH8UG" },
  { title: "Intermediate Machine Learning", issuer: "Kaggle", date: "Sep 2023", verify: "https://www.kaggle.com/learn/certification/ayoubbouak/intermediate-machine-learning" },
];

export const education = [
  {
    degree: "Engineering Degree : Software Engineering & AI",
    school: "Faculty of Sciences and Technologies, Errachidia",
    period: "2024 — 2027 (expected)",
    current: true,
    note: "Currently pursuing, coursework in software engineering, AI/ML and systems design.",
  },
  {
    degree: "B.Sc. in Science & Technology : Software Engineering",
    school: "Faculty of Sciences and Technologies, Errachidia",
    period: "2021 — 2024",
    current: false,
    note: "",
  },
];

export const leadership = {
  role: "Head of Problem Solving & Coding Cells",
  org: "FST Errachidia University Clubs",
  period: "2023 — 2026",
  detail: "Led two technical cells; taught data structures, algorithms and Python to 30+ students through weekly sessions and workshops.",
};