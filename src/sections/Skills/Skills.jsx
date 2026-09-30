import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Server,
  Database,
  Wrench,
  Layers3,
  Check,
  ChevronDown,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import translations from "../../data/translations";

const skillGroups = [
  {
    id: "skills-frontend",
    key: "frontend",
    icon: Code2,
    gradient: "from-cyan-400 to-blue-500",
    glow: "bg-cyan-400/10",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "React Router",
      "Tailwind CSS",
      "DaisyUI",
    ],
  },
  {
    id: "skills-backend",
    key: "backend",
    icon: Server,
    gradient: "from-blue-400 to-violet-500",
    glow: "bg-blue-400/10",
    skills: [
      "Node.js",
      "Express.js",
      "REST API",
      "JWT Authentication",
      "Socket.IO",
    ],
  },
  {
    id: "skills-database",
    key: "database",
    icon: Database,
    gradient: "from-violet-400 to-purple-500",
    glow: "bg-violet-400/10",
    skills: [
      "MongoDB",
      "Mongoose",
      "Database Design",
      "CRUD Operations",
    ],
  },
  {
    id: "skills-fullstack",
    key: "fullStack",
    icon: Layers3,
    gradient: "from-purple-400 to-pink-500",
    glow: "bg-purple-400/10",
    skills: [
      "MERN Stack",
      "Authentication",
      "API Integration",
      "Real-time Applications",
      "Responsive Web Apps",
    ],
  },
];

const tools = [
  {
    key: "uiStyling",
    icon: Palette,
    items: ["Tailwind CSS", "DaisyUI", "Responsive Design"],
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    key: "developmentTools",
    icon: Wrench,
    items: ["Git", "GitHub", "VS Code", "Thunder Client"],
    gradient: "from-blue-400 to-violet-500",
  },
];

/* =================================
   Card Entrance Directions
================================== */
const cardDirections = [
  {
    x: -120,
    y: -90,
    rotate: -8,
  },
  {
    x: 120,
    y: -90,
    rotate: 8,
  },
  {
    x: -120,
    y: 90,
    rotate: 8,
  },
  {
    x: 120,
    y: 90,
    rotate: -8,
  },
];

/* =================================
   Section Heading Animation
================================== */
const headingVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =================================
   Skill Badge Animation
================================== */
const skillItemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
    y: 10,
  },

  visible: (index) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.35,
      delay: index * 0.045,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

/* =================================
   Get Initial Animation Order
================================== */
const getInitialAnimationStart = () => {
  if (typeof window === "undefined") {
    return 0;
  }

  const hash = window.location.hash;

  const clickedIndex = skillGroups.findIndex(
    (group) => `#${group.id}` === hash,
  );

  return clickedIndex >= 0 ? clickedIndex : 0;
};

/* =================================
   Get Sequential Order
================================== */
const getAnimationOrder = (startIndex) => {
  return Array.from(
    { length: skillGroups.length },
    (_, index) => (startIndex + index) % skillGroups.length,
  );
};

const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const isBangla = language === "BN";

  const [animationStart, setAnimationStart] = useState(
    getInitialAnimationStart,
  );

  const [animationCycle, setAnimationCycle] = useState(0);

  /* =================================
     Detect About Card Click
  ================================== */
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;

      const clickedIndex = skillGroups.findIndex(
        (group) => `#${group.id}` === hash,
      );

      if (clickedIndex >= 0) {
        setAnimationStart(clickedIndex);

        /*
          Changing cycle forces the cards to
          mount again and replay the animation.
        */
        setAnimationCycle((prev) => prev + 1);
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  /*
    Example:

    Frontend click:
    0 → 1 → 2 → 3

    Backend click:
    1 → 2 → 3 → 0

    Database click:
    2 → 3 → 0 → 1

    Full Stack click:
    3 → 0 → 1 → 2
  */
  const animationOrder = getAnimationOrder(animationStart);

  const getCardDelay = (cardIndex) => {
    const sequenceIndex = animationOrder.indexOf(cardIndex);

    /*
      Each card waits for the previous card
      to almost finish before entering.
    */
    return sequenceIndex * 0.95;
  };

  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-white/5 py-24 pb-32 sm:py-28 sm:pb-36 lg:py-32 lg:pb-40"
    >
      {/* =================================
          Background Glows
      ================================== */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/[0.045] blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-violet-500/[0.05] blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-pink-500/[0.025] blur-[120px]" />

      {/* =================================
          Main Container
      ================================== */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =================================
            Section Heading
        ================================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.25,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="mb-14 max-w-3xl"
        >
          {/* Badge */}
          <motion.div
            variants={headingVariants}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-gradient-to-r from-cyan-400 to-violet-400 sm:w-12" />

            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-xs font-semibold uppercase tracking-[0.22em] text-transparent">
              {t.skills.badge}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={headingVariants}
            className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-4xl md:text-5xl"
          >
            {isBangla
              ? "আমি যেসব টুল ব্যবহার করি "
              : "Tools I use to build "}

            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              {isBangla
                ? "ডিজিটাল প্রোডাক্ট।"
                : "digital products."}
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={headingVariants}
            className="mt-5 max-w-2xl text-sm leading-7 text-white/40 sm:text-base"
          >
            {isBangla
              ? "ফ্রন্টএন্ড, ব্যাকএন্ড, ডেটাবেস এবং ফুল-স্ট্যাক ডেভেলপমেন্টে আমি যেসব প্রযুক্তি ও টুল ব্যবহার করি।"
              : "A practical set of technologies and tools I use across frontend, backend, database and full-stack development."}
          </motion.p>

          {/* Accent */}
          <motion.div
            variants={headingVariants}
            className="mt-5 h-px w-24 bg-gradient-to-r from-cyan-400 via-blue-400 to-transparent"
          />
        </motion.div>

        {/* =================================
            Skill Cards
        ================================== */}
        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            const groupTranslation = t.skills[group.key];
            const direction = cardDirections[index];

            const cardDelay = getCardDelay(index);

            return (
              <motion.div
                id={group.id}
                key={`${group.key}-${animationCycle}`}
                initial={{
                  opacity: 0,
                  x: direction.x,
                  y: direction.y,
                  scale: 0.8,
                  rotate: direction.rotate,
                  filter: "blur(8px)",
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                  rotate: 0,
                  filter: "blur(0px)",
                }}
                viewport={{
                  once: false,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.85,
                  delay: cardDelay,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="scroll-mt-28"
              >
                {/* =================================
                    Floating Card
                ================================== */}
                <motion.div
                  animate={{
                    y: [0, -4, 0, 4, 0],
                    rotate: [0, 0.2, 0, -0.2, 0],
                  }}
                  transition={{
                    duration: 5.5 + index * 0.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: cardDelay + 1.2,
                  }}
                  whileHover={{
                    y: -7,
                    scale: 1.012,
                    transition: {
                      duration: 0.25,
                      ease: "easeOut",
                    },
                  }}
                  className="group relative h-full overflow-hidden border border-white/10 bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04] sm:p-7"
                >
                  {/* Glow */}
                  <div
                    className={`pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full ${group.glow} blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  />

                  {/* Shine */}
                  <div className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent opacity-0 transition-all duration-700 group-hover:left-[130%] group-hover:opacity-100" />

                  <div className="relative">
                    {/* Card Header */}
                    <div className="flex items-start justify-between">
                      <motion.div
                        initial={{
                          opacity: 0,
                          scale: 0.7,
                          rotate: -10,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                          rotate: 0,
                        }}
                        viewport={{
                          once: false,
                          amount: 0.2,
                        }}
                        transition={{
                          duration: 0.5,
                          delay: cardDelay + 0.2,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className={`flex h-12 w-12 items-center justify-center border border-white/10 bg-gradient-to-br ${group.gradient} bg-clip-border text-white transition-all duration-300 group-hover:border-white/20`}
                      >
                        <Icon size={21} strokeWidth={1.7} />
                      </motion.div>

                      <span
                        className={`bg-gradient-to-r ${group.gradient} bg-clip-text text-[10px] font-semibold uppercase tracking-[0.18em] text-transparent`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Title */}
                    <motion.h3
                      initial={{
                        opacity: 0,
                        x: -15,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: false,
                        amount: 0.2,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: cardDelay + 0.25,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`mt-6 bg-gradient-to-r ${group.gradient} bg-clip-text text-xl font-semibold text-transparent`}
                    >
                      {groupTranslation.title}
                    </motion.h3>

                    {/* Subtitle */}
                    <motion.p
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
                        duration: 0.45,
                        delay: cardDelay + 0.3,
                      }}
                      className="mt-2 text-sm text-white/35"
                    >
                      {groupTranslation.subtitle}
                    </motion.p>

                    {/* Skills */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {group.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          custom={skillIndex}
                          variants={skillItemVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{
                            once: false,
                            amount: 0.15,
                          }}
                          className="group/skill inline-flex items-center gap-2 border border-white/10 bg-black/20 px-3 py-2 text-xs text-white/55 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${group.gradient} opacity-70`}
                          />

                          {skill}
                        </motion.div>
                      ))}
                    </div>

                    {/* Bottom Accent */}
                    <div
                      className={`mt-7 h-px w-14 bg-gradient-to-r ${group.gradient} opacity-40 transition-all duration-300 group-hover:w-24 group-hover:opacity-80`}
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* =================================
            Tools
        ================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
            duration: 0.7,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-4 grid gap-4 md:grid-cols-2"
        >
          {tools.map((tool, index) => {
            const Icon = tool.icon;

            const toolTitle =
              tool.key === "uiStyling"
                ? t.skills.tools.uiStyling
                : t.skills.tools.developmentTools;

            return (
              <motion.div
                key={tool.key}
                initial={{
                  opacity: 0,
                  x: index === 0 ? -60 : 60,
                  scale: 0.92,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                viewport={{
                  once: false,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -5,
                  transition: {
                    duration: 0.25,
                  },
                }}
                className="group relative overflow-hidden border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/15 hover:bg-white/[0.035]"
              >
                {/* Glow */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-cyan-400/[0.04] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex items-start gap-4">
                  {/* Icon */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.7,
                      rotate: -8,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                    }}
                    viewport={{
                      once: false,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.12 + 0.15,
                    }}
                    className={`flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 bg-white/[0.03] bg-gradient-to-br ${tool.gradient} bg-clip-border text-white`}
                  >
                    <Icon size={18} strokeWidth={1.7} />
                  </motion.div>

                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {toolTitle}
                    </h3>

                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                      {tool.items.map((item) => {
                        let translatedItem = item;

                        if (isBangla) {
                          const itemTranslations = {
                            "Responsive Design": "রেসপন্সিভ ডিজাইন",
                          };

                          translatedItem =
                            itemTranslations[item] || item;
                        }

                        return (
                          <span
                            key={item}
                            className="inline-flex items-center gap-1.5 text-xs text-white/40"
                          >
                            <Check
                              size={12}
                              strokeWidth={2}
                              className="text-cyan-300/70"
                            />

                            {translatedItem}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* =================================
          Scroll To Projects
      ================================== */}
      <motion.a
        href="#projects"
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
        aria-label={t.skills.scrollProjects}
      >
        {/* Text */}
        <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-[9px] font-medium uppercase tracking-[0.22em] text-transparent transition-opacity duration-300 group-hover:opacity-80 sm:text-[10px]">
          {t.skills.scrollProjects}
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

export default Skills;