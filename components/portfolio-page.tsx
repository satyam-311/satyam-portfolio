"use client";

import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBrain,
  FaCloud,
  FaCode,
  FaCog,
  FaDownload,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaProjectDiagram,
  FaServer,
  FaStar,
  FaTools,
} from "react-icons/fa";
import { GiSparkles } from "react-icons/gi";
import AnimatedSection from "@/components/animated-section";
import { featuredProjects, navLinks, skillCategories } from "@/projects/portfolio-data";
import type { GitHubStats } from "@/projects/github";

type PortfolioPageProps = {
  githubStats: GitHubStats;
};

const iconMap = {
  brain: FaBrain,
  sparkles: GiSparkles,
  cogs: FaTools,
  cloud: FaCloud,
  server: FaServer,
};

const statCards = (stats: GitHubStats) => [
  { label: "Repositories", value: stats.repositories.toString(), icon: FaProjectDiagram },
  { label: "Stars", value: stats.stars.toString(), icon: FaStar },
  { label: "Contributions", value: stats.contributions, icon: FaCode },
];

const sectionTitleClass =
  "text-3xl font-semibold tracking-tight text-white sm:text-4xl";

export default function PortfolioPage({ githubStats }: PortfolioPageProps) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <div className="hero-glow pointer-events-none absolute inset-0 -z-10" />

      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-lg">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Satyam Mishra
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-300 transition hover:text-cyan-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 py-16 sm:py-20">
        <section className="relative" id="hero">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-[0_0_60px_rgba(56,189,248,0.08)] sm:p-12"
          >
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.25em] text-cyan-300">
              AI/ML Engineer Portfolio
            </p>
            <h1 className="text-4xl font-bold text-white sm:text-6xl">Satyam Mishra</h1>
            <p className="mt-4 text-base font-medium text-cyan-200 sm:text-lg">
              AI/ML Engineer | Generative AI | RAG Systems | MLOps
            </p>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
              I build end-to-end AI systems from data pipelines to production deployment with a
              focus on scalable machine learning and generative AI.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary">
                View Projects <FaArrowRight />
              </a>
              <a href="https://github.com/satyam-311" target="_blank" rel="noreferrer" className="btn-secondary">
                GitHub <FaGithub />
              </a>
              <a href="/resume.pdf" className="btn-secondary" download>
                Download Resume <FaDownload />
              </a>
              <a href="#contact" className="btn-secondary">
                Contact <FaEnvelope />
              </a>
            </div>
          </motion.div>
        </section>

        <AnimatedSection id="about" className="space-y-6">
          <h2 className={sectionTitleClass}>About</h2>
          <p className="max-w-4xl text-lg leading-relaxed text-slate-300">
            Satyam Mishra is a final-year Artificial Intelligence and Machine Learning student with
            strong experience in building end-to-end machine learning systems. His work spans NLP,
            generative AI, MLOps pipelines, and scalable cloud deployment using AWS and Docker. He
            has also conducted research in fake news detection and built simulation models exploring
            demographic and economic dynamics.
          </p>
        </AnimatedSection>

        <AnimatedSection id="skills" className="space-y-8">
          <h2 className={sectionTitleClass}>Skills</h2>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {skillCategories.map((category) => {
              const CategoryIcon = iconMap[category.icon as keyof typeof iconMap] ?? FaCog;
              return (
                <motion.article
                  key={category.title}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <CategoryIcon className="text-xl text-cyan-300" />
                    <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-100"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </AnimatedSection>

        <AnimatedSection id="projects" className="space-y-8">
          <h2 className={sectionTitleClass}>Featured Projects</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
              >
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-slate-300">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-slate-700 bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="mt-5 space-y-2 text-sm text-slate-300">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
                  >
                    View Repository <FaExternalLinkAlt />
                  </a>
                ) : null}
              </motion.article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="research" className="space-y-6">
          <h2 className={sectionTitleClass}>Research</h2>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <h3 className="text-xl font-semibold text-white">
              Fake News Detection Using Logistic Regression
            </h3>
            <p className="mt-3 text-slate-300">
              A research project focused on detecting fake news using NLP-based classification
              techniques including TF-IDF vectorization and logistic regression.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-emerald-200">
                97% training accuracy
              </span>
              <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-emerald-200">
                98% testing accuracy
              </span>
              <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-slate-200">
                Published in ICAMC 2024
              </span>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="github" className="space-y-8">
          <h2 className={sectionTitleClass}>GitHub</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {statCards(githubStats).map((stat) => {
              const StatIcon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm uppercase tracking-wide text-slate-400">{stat.label}</p>
                    <StatIcon className="text-cyan-300" />
                  </div>
                  <p className="mt-3 text-3xl font-bold text-white">{stat.value}</p>
                </div>
              );
            })}
          </div>
          <a
            href={githubStats.profileUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-cyan-100 transition hover:bg-cyan-500/20"
          >
            Open GitHub Profile <FaGithub />
          </a>
        </AnimatedSection>

        <AnimatedSection id="contact" className="space-y-6">
          <h2 className={sectionTitleClass}>Contact</h2>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="mb-4 text-slate-300">Open for AI/ML engineering internships and roles.</p>
              <a
                href="mailto:satyam3112003@gmail.com"
                className="mb-3 flex items-center gap-3 text-slate-200 transition hover:text-cyan-300"
              >
                <FaEnvelope /> satyam3112003@gmail.com
              </a>
              <a
                href="tel:+917011153889"
                className="flex items-center gap-3 text-slate-200 transition hover:text-cyan-300"
              >
                <FaPhone /> +91 7011153889
              </a>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="mb-4 text-slate-300">Connect on professional platforms:</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/satyam-311"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/satyam-mishra/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  <FaLinkedin /> LinkedIn
                </a>
                <a href="mailto:satyam3112003@gmail.com" className="btn-secondary">
                  <FaEnvelope /> Email
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <footer className="border-t border-slate-800 py-6 text-center text-sm text-slate-400">
        <p>© {new Date().getFullYear()} Satyam Mishra. Built with Next.js, TypeScript, TailwindCSS, and Framer Motion.</p>
      </footer>
    </div>
  );
}
