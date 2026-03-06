export type SkillCategory = {
  title: string;
  icon: string;
  skills: string[];
};

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  github?: string;
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#github", label: "GitHub" },
  { href: "#contact", label: "Contact" },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "AI / Machine Learning",
    icon: "brain",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "HuggingFace"],
  },
  {
    title: "Generative AI",
    icon: "sparkles",
    skills: ["RAG Systems", "LangChain", "FAISS", "OpenAI Whisper"],
  },
  {
    title: "MLOps",
    icon: "cogs",
    skills: ["Docker", "GitHub Actions", "MLflow", "DVC"],
  },
  {
    title: "Cloud",
    icon: "cloud",
    skills: ["AWS EC2", "AWS S3", "AWS ECR", "MongoDB Atlas"],
  },
  {
    title: "Backend",
    icon: "server",
    skills: ["FastAPI", "Streamlit", "Python"],
  },
];

export const featuredProjects: Project[] = [
  {
    title: "Local-First YouTube RAG System",
    description:
      "A privacy-first retrieval augmented generation system that enables contextual conversations with YouTube content using local transcription and vector search.",
    technologies: ["LangChain", "FAISS", "Whisper", "Python"],
    features: [
      "Local speech transcription",
      "Vector similarity search",
      "Context-aware responses",
      "Cost-efficient local processing",
    ],
    github: "https://github.com/satyam-311/Streamlit-RAG-Engine",
  },
  {
    title: "Vehicle Insurance ML System",
    description:
      "An end-to-end MLOps pipeline for vehicle insurance prediction including automated data ingestion, model training, and cloud deployment.",
    technologies: [
      "FastAPI",
      "Docker",
      "AWS EC2",
      "MongoDB Atlas",
      "GitHub Actions",
    ],
    features: [
      "Modular ML pipeline",
      "CI/CD automation",
      "Dockerized deployment",
      "Cloud infrastructure integration",
    ],
    github: "https://github.com/satyam-311/Vehicles-Insurance",
  },
  {
    title: "ATS Resume Analyzer",
    description:
      "An NLP-based resume scoring system that measures semantic similarity between resumes and job descriptions.",
    technologies: ["SBERT", "TF-IDF", "XGBoost", "Streamlit"],
    features: [
      "Semantic similarity analysis",
      "Resume-job matching",
      "Interactive scoring interface",
    ],
    github: "https://github.com/satyam-311/ATS-score-checker",
  },
  {
    title: "Demographic Inversion Simulation",
    description:
      "A computational simulation analyzing the economic and workforce implications of a hypothetical one-child policy in India.",
    technologies: ["Python", "Data Analysis", "Economic Modeling"],
    features: [
      "Workforce projection simulation",
      "Fiscal balance modeling",
      "Dependency ratio analysis",
      "Data-driven policy exploration",
    ],
    github:
      "https://github.com/satyam-311/resource-distribution-india-declining-population",
  },
];
