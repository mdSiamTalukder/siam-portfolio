
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Code2,
  GitBranch,
  ChevronDown,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import translations from "../../data/translations";

const GITHUB_PROFILE = "https://github.com/mdSiamTalukder";

const projects = [
  {
    number: "01",
    key: "garirParts",
    gradient: "from-cyan-400 via-blue-500 to-violet-500",
    glow: "bg-cyan-400/10",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    github: GITHUB_PROFILE,
    live: "https://garirparts.com/",
  },

  {
    number: "02",
    key: "medicare",
    gradient: "from-blue-400 via-violet-500 to-purple-500",
    glow: "bg-blue-400/10",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "DaisyUI",
    ],
    github: GITHUB_PROFILE,
    live: null,
  },

  {
    number: "03",
    key: "jobFinder",
    gradient: "from-violet-400 via-purple-500 to-pink-500",
    glow: "bg-violet-400/10",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    github: GITHUB_PROFILE,
    live: null,
  },

  {
    number: "04",
    key: "foodHub",
    gradient: "from-purple-400 via-pink-500 to-rose-500",
    glow: "bg-purple-400/10",
    technologies: [
      "React",
      "React Router",
      "Tailwind CSS",
      "DaisyUI",
      "API",
      "Context API",
    ],
    github: GITHUB_PROFILE,
    live: null,
  },
];

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050505] py-24 pb-32 sm:py-28 sm:pb-36 lg:py-32 lg:pb-40"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[15%] h-72 w-72 rounded-full bg-cyan-500/5 blur-[120px]" />

        <div className="absolute right-[-10%] top-[45%] h-80 w-80 rounded-full bg-violet-500/5 blur-[130px]" />

        <div className="absolute bottom-[5%] left-[35%] h-64 w-64 rounded-full bg-pink-500/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Label */}
          <div className="mb-5 inline-flex items-center gap-2 border border-white/10 bg-white/[0.03] px-3 py-2 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />

            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-xs font-medium uppercase tracking-[0.2em] text-transparent">
              {t.projects.badge}
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              {t.projects.titleStart}
            </span>{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t.projects.titleEnd}
            </span>
          </h2>

          {/* Description */}
          <p className="mt-5 text-sm leading-7 sm:text-base sm:leading-8">
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              {t.projects.description}
            </span>
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-7">
          {projects.map((project, index) => {
            const projectTranslation = t.projects[project.key];

            return (
              <motion.article
                key={project.key}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden border border-white/10 bg-white/[0.025] backdrop-blur-sm"
              >
                {/* Hover Glow */}
                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full ${project.glow} opacity-0 blur-[90px] transition-opacity duration-500 group-hover:opacity-100`}
                />

                {/* Top Gradient Line */}
                <div
                  className={`h-px w-full bg-gradient-to-r ${project.gradient} opacity-60 transition-opacity duration-300 group-hover:opacity-100`}
                />

                <div className="relative p-6 sm:p-7 lg:p-8">
                  {/* Project Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span
                        className={`bg-gradient-to-r ${project.gradient} bg-clip-text text-xs font-semibold tracking-[0.2em] text-transparent`}
                      >
                        {project.number}
                      </span>

                      <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                        {projectTranslation.title}
                      </h3>

                      <p
                        className={`mt-1 bg-gradient-to-r ${project.gradient} bg-clip-text text-sm font-medium text-transparent`}
                      >
                        {projectTranslation.subtitle}
                      </p>
                    </div>

                    <motion.div
                      whileHover={{
                        rotate: 8,
                        scale: 1.08,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className={`flex h-11 w-11 shrink-0 items-center justify-center border border-white/10 bg-gradient-to-br ${project.glow}`}
                    >
                      <Code2
                        size={19}
                        strokeWidth={1.7}
                        className="text-white/60 transition-colors duration-300 group-hover:text-white"
                      />
                    </motion.div>
                  </div>

                  {/* Description */}
                  <p className="mt-6 text-sm leading-7 text-white/55 sm:text-[15px]">
                    {projectTranslation.description}
                  </p>

                  {/* Features */}
                  <div className="mt-6 grid grid-cols-2 gap-2">
                    {projectTranslation.features.map((feature) => (
                      <div
                        key={feature}
                        className="border border-white/5 bg-white/[0.025] px-3 py-2.5"
                      >
                        <span className="text-xs text-white/55">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Stack */}
                  <div className="mt-7">
                    <div className="mb-3 flex items-center gap-2">
                      <div className="h-px w-5 bg-white/15" />

                      <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/35">
                        {t.projects.techStack}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="border border-white/8 bg-white/[0.03] px-2.5 py-1.5 text-[11px] text-white/50 transition-colors duration-300 group-hover:border-white/12 group-hover:text-white/70"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    {/* GitHub */}
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/button inline-flex items-center gap-2 border border-white/15 bg-gradient-to-r from-slate-900 via-blue-950 to-violet-950 px-4 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:border-cyan-300/50"
                      >
                        <GitBranch
                          size={15}
                          strokeWidth={1.8}
                          className="text-white/70 transition-colors duration-300 group-hover/button:text-cyan-300"
                        />

                        <span>{t.projects.github}</span>

                        <ArrowUpRight
                          size={14}
                          strokeWidth={1.8}
                          className="transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                        />
                      </a>
                    ) : (
                      <span className="inline-flex cursor-not-allowed items-center gap-2 border border-white/5 bg-white/[0.02] px-4 py-2.5 text-xs font-medium text-white/25">
                        <GitBranch size={15} strokeWidth={1.8} />
                        <span>{t.projects.github}</span>
                      </span>
                    )}

                    {/* Live Demo */}
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/button inline-flex items-center gap-2 border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs font-medium text-white/65 transition-all duration-300 hover:border-violet-400/30 hover:bg-violet-400/5 hover:text-white"
                      >
                        <ExternalLink
                          size={15}
                          strokeWidth={1.8}
                          className="transition-colors duration-300 group-hover/button:text-violet-300"
                        />

                        <span>{t.projects.liveDemo}</span>

                        <ArrowUpRight
                          size={14}
                          strokeWidth={1.8}
                          className="transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                        />
                      </a>
                    ) : (
                      <span className="inline-flex cursor-not-allowed items-center gap-2 border border-white/5 bg-white/[0.02] px-4 py-2.5 text-xs font-medium text-white/25">
                        <ExternalLink size={15} strokeWidth={1.8} />
                        <span>{t.projects.liveDemo}</span>
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="mx-auto mt-14 max-w-2xl text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-cyan-400/40" />

            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-xs font-medium tracking-wide text-transparent">
              {t.projects.moreProjects}
            </span>

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-violet-400/40" />
          </div>
        </motion.div>
      </div>

      {/* =================================
          Scroll To Contact
      ================================== */}
      <motion.a
        href="#contact"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.6,
          delay: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="group absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 outline-none sm:bottom-8"
        aria-label={t.projects.scrollContact}
      >
        {/* Text */}
        <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-[9px] font-medium uppercase tracking-[0.22em] text-transparent transition-opacity duration-300 group-hover:opacity-80 sm:text-[10px]">
          {t.projects.scrollContact}
        </span>

        {/* Mouse Indicator */}
        <motion.span
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative flex h-8 w-5 items-start justify-center rounded-full border border-white/20 p-1 transition-all duration-300 group-hover:border-cyan-400/40 sm:h-9 sm:w-[22px]"
        >
          <motion.span
            animate={{
              y: [0, 6, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-1.5 w-1 rounded-full bg-gradient-to-b from-cyan-300 to-violet-400"
          />

          {/* Glow */}
          <span className="pointer-events-none absolute inset-0 rounded-full bg-cyan-400/5 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
        </motion.span>

        {/* Small Arrow */}
        <motion.div
          animate={{
            y: [0, 3, 0],
          }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-white/25 transition-colors duration-300 group-hover:text-cyan-300/70"
        >
          <ChevronDown size={13} strokeWidth={1.5} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Projects;
