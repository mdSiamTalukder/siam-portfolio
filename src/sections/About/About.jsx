import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Database,
  Server,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import translations from "../../data/translations";

const cardDirections = [
  { x: -120, y: -90, rotate: -8 },
  { x: 120, y: -90, rotate: 8 },
  { x: -120, y: 90, rotate: 8 },
  { x: 120, y: 90, rotate: -8 },
];

const textReveal = {
  hidden: {
    opacity: 0,
    y: 25,
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

const paragraphReveal = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: index * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function About() {
  const { language } = useLanguage();

  /*
   * LanguageContext uses:
   * "EN" → English
   * "BN" → Bangla
   */
  const content = translations[language]?.about || translations.EN.about;

  const cards = [
    {
      icon: Code2,
      title: content.frontend,
      description: content.frontendDescription,
      href: "#skills-frontend",
    },
    {
      icon: Server,
      title: content.backend,
      description: content.backendDescription,
      href: "#skills-backend",
    },
    {
      icon: Database,
      title: content.database,
      description: content.databaseDescription,
      href: "#skills-database",
    },
    {
      icon: Sparkles,
      title: content.fullStack,
      description: content.fullStackDescription,
      href: "#skills-fullstack",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/5 bg-[#050505] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
    >
      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-180px] top-[15%] h-[360px] w-[360px] rounded-full bg-cyan-500/5 blur-[120px]" />

        <div className="absolute bottom-[5%] right-[-180px] h-[400px] w-[400px] rounded-full bg-violet-500/5 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.2,
          }}
          className="max-w-4xl"
        >
          {/* Small Label */}
          <motion.div
            variants={textReveal}
            className="mb-5 flex items-center gap-3 sm:mb-6"
          >
            <span className="h-px w-8 bg-cyan-400 sm:w-12" />

            <span className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-400 sm:text-sm">
              {content.badge}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={textReveal}
            className="max-w-4xl text-[clamp(2.2rem,5vw,5rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-white"
          >
            {language === "BN" ? (
              <>
                আইডিয়াকে{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  ডিজিটাল অভিজ্ঞতায়
                </span>{" "}
                রূপ দিই।
              </>
            ) : (
              <>
                Turning ideas into{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  digital experiences.
                </span>
              </>
            )}
          </motion.h2>
        </motion.div>

        {/* Content */}
        <div className="mt-10 grid gap-12 lg:mt-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
          {/* Left Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.25,
            }}
            className="max-w-2xl"
          >
            <motion.p
              custom={0}
              variants={paragraphReveal}
              className="text-base leading-8 text-white/75 sm:text-lg sm:leading-9"
            >
              {content.intro}
            </motion.p>

            <motion.p
              custom={1}
              variants={paragraphReveal}
              className="mt-6 text-base leading-8 text-white/55 sm:text-lg sm:leading-9"
            >
              {content.passion}
            </motion.p>

            <motion.p
              custom={2}
              variants={paragraphReveal}
              className="mt-6 text-base leading-8 text-white/55 sm:text-lg sm:leading-9"
            >
              {content.goal}
            </motion.p>
          </motion.div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {cards.map((card, index) => {
              const Icon = card.icon;
              const direction = cardDirections[index];

              return (
                <motion.div
                  key={card.href}
                  initial={{
                    opacity: 0,
                    x: direction.x,
                    y: direction.y,
                    scale: 0.78,
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
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.85,
                    delay: index * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {/* Floating Card */}
                  <motion.a
                    href={card.href}
                    animate={{
                      y: [0, -5, 0, 5, 0],
                      rotate: [0, 0.3, 0, -0.3, 0],
                    }}
                    transition={{
                      duration: 5 + index * 0.7,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.1 + index * 0.15,
                    }}
                    whileHover={{
                      y: -8,
                      scale: 1.025,
                      transition: {
                        duration: 0.25,
                        ease: "easeOut",
                      },
                    }}
                    className="group relative block h-full min-h-[210px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition-colors duration-300 hover:border-cyan-400/30 hover:bg-white/[0.055] sm:min-h-[230px] sm:p-6"
                  >
                    {/* Hover Glow */}
                    <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative flex h-full flex-col">
                      {/* Icon */}
                      <div className="mb-8 flex items-center justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/15 group-hover:text-cyan-200">
                          <Icon size={21} strokeWidth={1.7} />
                        </div>

                        <ArrowUpRight
                          size={19}
                          className="text-white/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300"
                        />
                      </div>

                      {/* Card Content */}
                      <div className="mt-auto">
                        <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                          {card.title}
                        </h3>

                        <p className="mt-3 max-w-xs text-sm leading-6 text-white/50 sm:text-[15px]">
                          {card.description}
                        </p>
                      </div>

                      {/* Bottom Line */}
                      <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-cyan-400 to-violet-400 transition-all duration-500 group-hover:w-full" />
                    </div>
                  </motion.a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}