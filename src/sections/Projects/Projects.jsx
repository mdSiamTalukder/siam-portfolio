import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Code2,
  GitBranch,
  ChevronDown,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
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

/* =================================
   Project Showcase Animation
================================== */
const projectReveal = {
  hidden: {
    opacity: 0,
    y: 55,
    scale: 0.88,
    rotateX: 10,
    filter: "blur(10px)",
  },

  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      delay: index * 0.18,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

/* =================================
   Project Content Animation
================================== */
const contentReveal = {
  hidden: {
    opacity: 0,
    y: 12,
  },

  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.18 + 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Projects = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const t = translations[language];
  const isLight = theme === "light";

  return (
    <section
      id="projects"
      className={`relative overflow-hidden py-24 pb-32 transition-colors duration-500 sm:py-28 sm:pb-36 lg:py-32 lg:pb-40 ${
        isLight ? "bg-[#f8fafc]" : "bg-[#050505]"
      }`}
    >
      {/* =================================
          Background Glow
      ================================== */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className={`absolute left-[-10%] top-[15%] h-72 w-72 rounded-full blur-[120px] ${
            isLight ? "bg-cyan-400/10" : "bg-cyan-500/5"
          }`}
        />

        <div
          className={`absolute right-[-10%] top-[45%] h-80 w-80 rounded-full blur-[130px] ${
            isLight ? "bg-violet-400/10" : "bg-violet-500/5"
          }`}
        />

        <div
          className={`absolute bottom-[5%] left-[35%] h-64 w-64 rounded-full blur-[120px] ${
            isLight ? "bg-pink-400/10" : "bg-pink-500/5"
          }`}
        />

        {/* Subtle Grid */}
        <div
          className={`absolute inset-0 ${
            isLight ? "opacity-[0.035]" : "opacity-[0.018]"
          }`}
          style={{
            backgroundImage: isLight
              ? "linear-gradient(rgba(15,23,42,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.35) 1px, transparent 1px)"
              : "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =================================
            Section Header
        ================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Label */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`mb-5 inline-flex items-center gap-2 border px-3 py-2 backdrop-blur-sm ${
              isLight
                ? "border-gray-200 bg-white shadow-sm"
                : "border-white/10 bg-white/[0.03]"
            }`}
          >
            <motion.span
              initial={{
                scale: 0,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
              }}
              viewport={{
                once: false,
                amount: 0.3,
              }}
              transition={{
                duration: 0.4,
                delay: 0.15,
              }}
              className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600"
            />

            <span
              className={`bg-gradient-to-r bg-clip-text text-xs font-semibold uppercase tracking-[0.2em] text-transparent ${
                isLight
                  ? "from-cyan-600 via-blue-700 to-violet-700"
                  : "from-cyan-300 via-blue-400 to-violet-400"
              }`}
            >
              {t.projects.badge}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            transition={{
              duration: 0.65,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            <span
              className={`bg-gradient-to-r bg-clip-text text-transparent ${
                isLight
                  ? "from-cyan-600 via-blue-700 to-violet-700"
                  : "from-cyan-300 via-blue-400 to-violet-400"
              }`}
            >
              {t.projects.titleStart}
            </span>{" "}
            <span
              className={`bg-gradient-to-r bg-clip-text text-transparent ${
                isLight
                  ? "from-violet-700 via-purple-700 to-pink-700"
                  : "from-violet-400 via-purple-400 to-pink-400"
              }`}
            >
              {t.projects.titleEnd}
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            transition={{
              duration: 0.6,
              delay: 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`mt-5 text-sm leading-7 sm:text-base sm:leading-8 ${
              isLight ? "text-gray-600" : "text-white/55"
            }`}
          >
            {t.projects.description}
          </motion.p>
        </motion.div>

        {/* =================================
            Projects Grid
        ================================== */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-7">
          {projects.map((project, index) => {
            const projectTranslation = t.projects[project.key];

            return (
              <motion.article
                key={project.key}
                custom={index}
                variants={projectReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: 0.15,
                }}
                whileHover={{
                  y: -7,
                  scale: 1.008,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut",
                  },
                }}
                style={{
                  transformPerspective: 1000,
                }}
                className={`group relative overflow-hidden backdrop-blur-sm transition-all duration-300 ${
                  isLight
                    ? "border border-gray-200 bg-white shadow-[0_10px_35px_rgba(15,23,42,0.07)] hover:border-cyan-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.11)]"
                    : "border border-white/10 bg-white/[0.025]"
                }`}
              >
                {/* =================================
                    Hover Glow
                ================================== */}
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                  }}
                  whileHover={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full ${project.glow} blur-[90px]`}
                />

                {/* =================================
                    Top Gradient Line
                ================================== */}
                <motion.div
                  initial={{
                    scaleX: 0,
                    transformOrigin: "left",
                  }}
                  whileInView={{
                    scaleX: 1,
                  }}
                  viewport={{
                    once: false,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.9,
                    delay: index * 0.18 + 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`h-px w-full bg-gradient-to-r ${project.gradient} opacity-70 transition-opacity duration-300 group-hover:opacity-100`}
                />

                <div className="relative p-6 sm:p-7 lg:p-8">
                  {/* =================================
                      Project Header
                  ================================== */}
                  <motion.div
                    custom={index}
                    variants={contentReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: false,
                      amount: 0.15,
                    }}
                    className="flex items-start justify-between gap-4"
                  >
                    <div>
                      <span
                        className={`bg-gradient-to-r ${project.gradient} bg-clip-text text-xs font-semibold tracking-[0.2em] text-transparent`}
                      >
                        {project.number}
                      </span>

                      <h3
                        className={`mt-3 text-2xl font-bold tracking-tight sm:text-3xl ${
                          isLight ? "text-gray-950" : "text-white"
                        }`}
                      >
                        {projectTranslation.title}
                      </h3>

                      <p
                        className={`mt-1 bg-gradient-to-r ${project.gradient} bg-clip-text text-sm font-semibold text-transparent`}
                      >
                        {projectTranslation.subtitle}
                      </p>
                    </div>

                    {/* Project Icon */}
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.6,
                        rotate: -15,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                        rotate: 0,
                      }}
                      viewport={{
                        once: false,
                        amount: 0.15,
                      }}
                      transition={{
                        duration: 0.55,
                        delay: index * 0.18 + 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileHover={{
                        rotate: 8,
                        scale: 1.08,
                      }}
                      className={`flex h-11 w-11 shrink-0 items-center justify-center border bg-gradient-to-br ${project.glow} ${
                        isLight ? "border-gray-200" : "border-white/10"
                      }`}
                    >
                      <Code2
                        size={19}
                        strokeWidth={1.7}
                        className={`transition-colors duration-300 ${
                          isLight
                            ? "text-gray-600 group-hover:text-cyan-700"
                            : "text-white/60 group-hover:text-white"
                        }`}
                      />
                    </motion.div>
                  </motion.div>

                  {/* =================================
                      Description
                  ================================== */}
                  <motion.p
                    custom={index}
                    variants={contentReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: false,
                      amount: 0.15,
                    }}
                    className={`mt-6 text-sm leading-7 sm:text-[15px] ${
                      isLight ? "text-gray-600" : "text-white/55"
                    }`}
                  >
                    {projectTranslation.description}
                  </motion.p>

                  {/* =================================
                      Features
                  ================================== */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: false,
                      amount: 0.15,
                    }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.18 + 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mt-6 grid grid-cols-2 gap-2"
                  >
                    {projectTranslation.features.map(
                      (feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          initial={{
                            opacity: 0,
                            scale: 0.94,
                          }}
                          whileInView={{
                            opacity: 1,
                            scale: 1,
                          }}
                          viewport={{
                            once: false,
                            amount: 0.15,
                          }}
                          transition={{
                            duration: 0.35,
                            delay:
                              index * 0.18 +
                              0.42 +
                              featureIndex * 0.05,
                          }}
                          className={`border px-3 py-2.5 ${
                            isLight
                              ? "border-gray-200 bg-gray-50 hover:border-cyan-200 hover:bg-cyan-50"
                              : "border-white/5 bg-white/[0.025]"
                          }`}
                        >
                          <span
                            className={`text-xs ${
                              isLight ? "text-gray-700" : "text-white/55"
                            }`}
                          >
                            {feature}
                          </span>
                        </motion.div>
                      ),
                    )}
                  </motion.div>

                  {/* =================================
                      Technology Stack
                  ================================== */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: false,
                      amount: 0.15,
                    }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.18 + 0.48,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mt-7"
                  >
                    <div className="mb-3 flex items-center gap-2">
                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        whileInView={{
                          width: 20,
                        }}
                        viewport={{
                          once: false,
                          amount: 0.15,
                        }}
                        transition={{
                          duration: 0.45,
                          delay: index * 0.18 + 0.5,
                        }}
                        className={`h-px ${
                          isLight ? "bg-gray-300" : "bg-white/15"
                        }`}
                      />

                      <span
                        className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${
                          isLight ? "text-gray-500" : "text-white/35"
                        }`}
                      >
                        {t.projects.techStack}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(
                        (technology, technologyIndex) => (
                          <motion.span
                            key={technology}
                            initial={{
                              opacity: 0,
                              y: 8,
                            }}
                            whileInView={{
                              opacity: 1,
                              y: 0,
                            }}
                            viewport={{
                              once: false,
                              amount: 0.15,
                            }}
                            transition={{
                              duration: 0.3,
                              delay:
                                index * 0.18 +
                                0.52 +
                                technologyIndex * 0.045,
                            }}
                            className={`border px-2.5 py-1.5 text-[11px] transition-colors duration-300 ${
                              isLight
                                ? "border-gray-200 bg-gray-50 text-gray-700 hover:border-cyan-300 hover:bg-cyan-50 hover:text-gray-950"
                                : "border-white/8 bg-white/[0.03] text-white/50 group-hover:border-white/12 group-hover:text-white/70"
                            }`}
                          >
                            {technology}
                          </motion.span>
                        ),
                      )}
                    </div>
                  </motion.div>

                  {/* =================================
                      Buttons
                  ================================== */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 18,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: false,
                      amount: 0.15,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.18 + 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mt-8 flex flex-wrap items-center gap-3"
                  >
                    {/* GitHub */}
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group/button inline-flex items-center gap-2 border px-4 py-2.5 text-xs font-semibold transition-all duration-300 ${
                          isLight
                            ? "border-gray-950 bg-gray-950 text-white shadow-sm hover:border-cyan-700 hover:bg-cyan-700"
                            : "border-white/15 bg-gradient-to-r from-slate-900 via-blue-950 to-violet-950 text-white hover:border-cyan-300/50"
                        }`}
                      >
                        <GitBranch
                          size={15}
                          strokeWidth={1.8}
                          className={`transition-colors duration-300 ${
                            isLight
                              ? "text-white"
                              : "text-white/70 group-hover/button:text-cyan-300"
                          }`}
                        />

                        <span>{t.projects.github}</span>

                        <ArrowUpRight
                          size={14}
                          strokeWidth={1.8}
                          className="transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                        />
                      </a>
                    ) : (
                      <span
                        className={`inline-flex cursor-not-allowed items-center gap-2 border px-4 py-2.5 text-xs font-medium ${
                          isLight
                            ? "border-gray-200 bg-gray-100 text-gray-400"
                            : "border-white/5 bg-white/[0.02] text-white/25"
                        }`}
                      >
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
                        className={`group/button inline-flex items-center gap-2 border px-4 py-2.5 text-xs font-semibold transition-all duration-300 ${
                          isLight
                            ? "border-gray-300 bg-white text-gray-900 shadow-sm hover:border-violet-400 hover:bg-violet-50 hover:text-violet-800"
                            : "border-white/10 bg-white/[0.03] text-white/65 hover:border-violet-400/30 hover:bg-violet-400/5 hover:text-white"
                        }`}
                      >
                        <ExternalLink
                          size={15}
                          strokeWidth={1.8}
                          className="transition-colors duration-300 group-hover/button:text-violet-500"
                        />

                        <span>{t.projects.liveDemo}</span>

                        <ArrowUpRight
                          size={14}
                          strokeWidth={1.8}
                          className="transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                        />
                      </a>
                    ) : (
                      <span
                        className={`inline-flex cursor-not-allowed items-center gap-2 border px-4 py-2.5 text-xs font-medium ${
                          isLight
                            ? "border-gray-200 bg-gray-100 text-gray-400"
                            : "border-white/5 bg-white/[0.02] text-white/25"
                        }`}
                      >
                        <ExternalLink size={15} strokeWidth={1.8} />
                        <span>{t.projects.liveDemo}</span>
                      </span>
                    )}
                  </motion.div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* =================================
            Bottom Statement
        ================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mx-auto mt-14 max-w-2xl text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span
              className={`h-px w-10 bg-gradient-to-r from-transparent to-cyan-400/40`}
            />

            <span
              className={`bg-gradient-to-r bg-clip-text text-xs font-semibold tracking-wide text-transparent ${
                isLight
                  ? "from-cyan-600 via-blue-700 to-violet-700"
                  : "from-cyan-300 via-blue-400 to-violet-400"
              }`}
            >
              {t.projects.moreProjects}
            </span>

            <span
              className={`h-px w-10 bg-gradient-to-l from-transparent to-violet-400/40`}
            />
          </div>
        </motion.div>
      </div>

      {/* =================================
          Scroll To Contact
      ================================== */}
      <motion.a
        href="#contact"
        initial={{
          opacity: 0,
          y: 10,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: false,
          amount: 0.2,
        }}
        transition={{
          duration: 0.6,
          delay: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="group absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 outline-none sm:bottom-8"
        aria-label={t.projects.scrollContact}
      >
        {/* Text */}
        <span
          className={`bg-gradient-to-r bg-clip-text text-[9px] font-semibold uppercase tracking-[0.22em] text-transparent transition-opacity duration-300 group-hover:opacity-80 sm:text-[10px] ${
            isLight
              ? "from-cyan-600 via-blue-700 to-violet-700"
              : "from-cyan-300 via-blue-400 to-violet-400"
          }`}
        >
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
          className={`relative flex h-8 w-5 items-start justify-center rounded-full border p-1 transition-all duration-300 group-hover:border-cyan-400/60 sm:h-9 sm:w-[22px] ${
            isLight ? "border-gray-400" : "border-white/20"
          }`}
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
            className="h-1.5 w-1 rounded-full bg-gradient-to-b from-cyan-500 to-violet-500"
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
          className={`transition-colors duration-300 ${
            isLight
              ? "text-gray-500 group-hover:text-cyan-700"
              : "text-white/25 group-hover:text-cyan-300/70"
          }`}
        >
          <ChevronDown size={13} strokeWidth={1.5} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Projects;