export const profile = {
  name: "Emon",
  title: "Lead Software Engineer · Octopi Digital",
  tagline:
    "I lead a 20+ person squad, mentor 100+ industry newcomers, and turn vague requirements into healthcare, HR, CRM, and AI products that people actually use.",
  location: "Dhaka, Bangladesh · Remote friendly",
  email: "emon.mhk69@gmail.com",
  availability: "Open for strategic collaborations",
};

export const heroStats = [
  { label: "Team led", value: "20+" },
  { label: "Engineers mentored", value: "100+" },
  { label: "Projects live", value: "20+" },
];

export const heroHighlights = [
  { label: "Mobile apps", value: "5+" },
  { label: "Web portals", value: "10+" },
  { label: "CRM stacks", value: "3" },
  { label: "AI Platforms", value: "2+" },
];

export const journeyMilestones = [
  {
    year: "2025",
    title: "Leading Octopi Digital’s platform team",
    description:
      "I guide a 20-person crew across OptimalMD, HRMS, ONE CRM, and AI tracks—owning system design, client requirement sessions, and rollout plans.",
  },
  {
    year: "2023",
    title: "Backend backbone",
    description:
      "Scaled the microservices and data pipelines that still power thousands of clinicians, HR partners, and sales reps every day.",
  },
  {
    year: "2021",
    title: "Wikasta frontend mentor",
    description:
      "Obsessed over reusable component systems and coached junior devs so they could ship confidently.",
  },
  {
    year: "2019",
    title: "Logic Nexus launch pad",
    description:
      "My first real taste of shipping production dashboards, collaborating with product to match UX with business goals.",
  },
];

export const featuredProjects = [
  {
    title: "OptimalMD Portal",
    description: "Clinician hub for care teams and compliance.",
    images: [
      "/projects/optimalmd-admin.png",
      "/projects/optimalmd-member.png",
      "/projects/optimalmd-ai-chat.png",
      "/projects/optimalmd-ai.png",
    ],
    stack: ["Next.js", "Node", "PostgreSQL", "Azure"],
    highlight: "35% faster onboarding + 24/7 secure telemetry.",
    link: "http://portal.optimalmd.com/",
  },
  {
    title: "Octopi HRMS",
    description: "Payroll, attendance & analytics.",
    images: [
      "/projects/octopi-admin.png",
      "/projects/octopi-digital.png",
    ],
    stack: ["React", "NestJS", "MongoDB", "Redis"],
    highlight: "Powers thousands of employees with custom reports.",
    link: "https://portal.octopi-digital.com",
  },
  {
    title: "Monkeymans HR Portal",
    description: "White-labeled HRMS for partner org.",
    images: ["/projects/monkeyman.png"],
    stack: ["Next.js", "NestJS", "PostgreSQL"],
    highlight: "Custom branding & workflows.",
    link: "https://portal.monkeymans.com/",
  },
  {
    title: "Miami Property",
    description: "Real estate platform.",
    images: ["/projects/miami-property.png"],
    stack: ["Next.js", "GraphQL", "Prisma", "AWS"],
    highlight: "Property listings with advanced search.",
    link: "#",
  },
  {
    title: "Estrella",
    description: "E-commerce platform.",
    images: [
      "/projects/estrella.png",
      "/projects/estella.png",
    ],
    stack: ["React", "Node.js", "MongoDB", "Stripe"],
    highlight: "Multi-vendor marketplace.",
    link: "#",
  },
  {
    title: "NDFND AI",
    description: "AI platform for NDFND organization.",
    images: ["/projects/ndfnd-ai.png"],
    stack: ["Python", "FastAPI", "TensorFlow", "Azure AI"],
    highlight: "Custom AI workflows with guardrails.",
    link: "https://ai.ndfnd.org",
  },
];

export const skillSections = [
  {
    label: "Mobile Application",
    icon: "📱",
    gradient: "from-cyan-500 to-blue-600",
    skills: ["React Native", "Expo", "iOS/Android", "Firebase", "Push Notifications", "App Store Ops"],
  },
  {
    label: "Web Development",
    icon: "🌐",
    gradient: "from-purple-500 to-pink-600",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "NestJS"],
  },
  {
    label: "AI & Automation",
    icon: "🤖",
    gradient: "from-violet-500 to-purple-600",
    skills: ["Python", "FastAPI", "TensorFlow", "PyTorch", "Azure AI", "LLM Integration"],
  },
  {
    label: "CRM & Business Tools",
    icon: "💼",
    gradient: "from-emerald-500 to-teal-600",
    skills: ["Sales Pipeline", "Service Desk", "Lead Scoring", "GraphQL", "Prisma", "Analytics"],
  },
  {
    label: "Software Engineering",
    icon: "⚡",
    gradient: "from-orange-500 to-red-600",
    skills: ["System Design", "Microservices", "PostgreSQL", "MongoDB", "Redis", "AWS/Azure"],
  },
  {
    label: "AI/ML Research",
    icon: "🧠",
    gradient: "from-fuchsia-500 to-pink-600",
    skills: ["CNN", "Deep Learning", "Emotion Modeling", "Fuzzification", "Model Training", "Experiment Tracking"],
  },
  {
    label: "Leadership & Mentorship",
    icon: "🎯",
    gradient: "from-amber-500 to-orange-600",
    skills: ["Tech Leadership", "Team Management (20+)", "Mentoring (100+)", "Architecture Workshops", "Client Requirements", "Research Writing"],
  },
  {
    label: "Healthcare & Fintech",
    icon: "🏥",
    gradient: "from-green-500 to-emerald-600",
    skills: ["Telehealth", "HIPAA Compliance", "Payroll Systems", "HR/Attendance", "Payment Integration", "Security Guardrails"],
  },
];

export const services = [
  {
    title: "Platform leadership",
    icon: "🚀",
    description: "Lead or bootstrap squads to ship portals, CRM, or HR stacks with enterprise-grade guardrails.",
    pillars: ["Systems design", "Requirement workshops", "Team enablement"],
  },
  {
    title: "AI & data activation",
    icon: "🤖",
    description: "Embed ML workflows into existing products: model ops, inference endpoints, dashboards.",
    pillars: ["ML pipelines", "Model integration", "Experiment tracking"],
  },
  {
    title: "Mobile & fintech builds",
    icon: "📱",
    description: "Design and launch cross-platform apps like OptimalMD, DCN, or ePay.",
    pillars: ["React Native", "Payments", "App Store ops"],
  },
];

export const contactLinks = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/emon3455",
    href: "https://www.linkedin.com/in/emon3455",
  },
  {
    label: "GitHub",
    value: "github.com/emon3455",
    href: "https://github.com/emon3455",
  },
];

// TODO: Replace placeholder names, emails, and links above with your actual information.

export const navLinks = [
  { label: "Hero", href: "#hero" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
