
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Code2, Mail } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/mdSiamTalukder",
    icon: Code2,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mdsiamtalukder/",
    icon: Code2,
  },
  {
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=siamtalukder533@gmail.com",
    icon: Mail,
  },
];

const Hero = () => {
  const { language } = useLanguage();

  const isBangla = language === "BN";

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-white/[0.04] blur-3xl" />

        <div className="absolute right-0 top-1/4 h-64 w-64 rounded-full bg-white/[0.03] blur-3xl" />
      </div>

      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-24 lg:pt-40">
        <div className="max-w-4xl">
          {/* Availability */}
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative mb-7 inline-flex items-center gap-2 overflow-hidden border border-cyan-400/20 bg-white/[0.03] px-3 py-2 backdrop-blur-sm"
          >
            {/* Animated glow */}
            <motion.div
              animate={{
                x: ["-120%", "220%"],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                repeatDelay: 1.5,
                ease: "easeInOut",
              }}
              className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent blur-sm"
            />

            {/* Animated status dot */}
            <motion.span
              animate={{
                scale: [1, 1.3, 1],
                opacity: [1, 0.6, 1],
                boxShadow: [
                  "0 0 0px rgba(34,211,238,0)",
                  "0 0 12px rgba(34,211,238,0.7)",
                  "0 0 0px rgba(34,211,238,0)",
                ],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
            />

            {/* Text */}
            <span className="relative z-10 bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-xs font-medium tracking-wide text-transparent">
              {isBangla
                ? "নতুন সুযোগের জন্য উপলব্ধ"
                : "Available for opportunities"}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="text-4xl font-semibold leading-[1.08] tracking-[-0.035em] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {isBangla ? (
              <>
                {/* Bangla: তৈরি করছি */}
                <motion.span
                  variants={{
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
                  }}
                  className="mr-3 inline-block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                >
                  তৈরি করছি
                </motion.span>

                {/* Bangla: ডিজিটাল */}
                <motion.span
                  variants={{
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
                  }}
                  className="inline-block bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent"
                >
                  ডিজিটাল
                </motion.span>

                {/* Bangla: অভিজ্ঞতা */}
                <motion.span
                  variants={{
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
                  }}
                  className="mr-3 mt-2 inline-block bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent"
                >
                  অভিজ্ঞতা
                </motion.span>

                {/* Bangla: যা */}
                <motion.span
                  variants={{
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
                  }}
                  className="inline-block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
                >
                  যা
                </motion.span>

                {/* Bangla: সত্যিই কাজ করে */}
                <motion.span
                  variants={{
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
                  }}
                  className="mt-2 block bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                >
                  সত্যিই কাজ করে।
                </motion.span>
              </>
            ) : (
              <>
                {/* Building */}
                <motion.span
                  variants={{
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
                  }}
                  className="mr-3 inline-block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                >
                  Building
                </motion.span>

                {/* digital */}
                <motion.span
                  variants={{
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
                  }}
                  className="inline-block bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent"
                >
                  digital
                </motion.span>

                {/* experiences */}
                <motion.span
                  variants={{
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
                  }}
                  className="mr-3 mt-2 inline-block bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent"
                >
                  experiences
                </motion.span>

                {/* that */}
                <motion.span
                  variants={{
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
                  }}
                  className="inline-block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
                >
                  that
                </motion.span>

                {/* actually work */}
                <motion.span
                  variants={{
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
                  }}
                  className="mt-2 block bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                >
                  actually work.
                </motion.span>
              </>
            )}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`mt-7 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 ${
              isBangla ? "leading-8 sm:leading-9" : ""
            }`}
          >
            {isBangla ? (
              <>
                <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  আমি
                </span>{" "}
                <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  সিয়াম তালুকদার,
                </span>{" "}
                <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text font-medium text-transparent">
                  একজন
                </span>{" "}
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text font-semibold text-transparent">
                  MERN Stack Developer
                </span>{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  যিনি
                </span>{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text font-semibold text-transparent">
                  আধুনিক,
                </span>{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text font-semibold text-transparent">
                  রেসপন্সিভ
                </span>{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  এবং
                </span>{" "}
                <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text font-semibold text-transparent">
                  স্কেলেবল
                </span>{" "}
                <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  ওয়েব অ্যাপ্লিকেশন
                </span>{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  তৈরি করতে
                </span>{" "}
                <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                  frontend
                </span>{" "}
                <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                  থেকে
                </span>{" "}
                <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text font-semibold text-transparent">
                  backend
                </span>{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-emerald-400 bg-clip-text text-transparent">
                  পর্যন্ত কাজ করেন।
                </span>
              </>
            ) : (
              <>
                <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  I’m
                </span>{" "}
                <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  Siam
                </span>{" "}
                <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  Talukder,
                </span>{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-medium text-transparent">
                  a
                </span>{" "}
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text font-semibold text-transparent">
                  MERN
                </span>{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text font-semibold text-transparent">
                  Stack
                </span>{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text font-semibold text-transparent">
                  Developer
                </span>{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  focused
                </span>{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  on
                </span>{" "}
                <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  building
                </span>{" "}
                <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  modern,
                </span>{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  responsive
                </span>{" "}
                <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                  and
                </span>{" "}
                <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                  scalable
                </span>{" "}
                <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  web
                </span>{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-emerald-400 bg-clip-text text-transparent">
                  applications
                </span>{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  from
                </span>{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  frontend
                </span>{" "}
                <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  to
                </span>{" "}
                <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                  backend.
                </span>
              </>
            )}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            {/* View My Work */}
            <motion.a
              href="#projects"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden border border-white/20 bg-gradient-to-r from-slate-900 via-blue-950 to-violet-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/10 transition-all duration-300 hover:border-cyan-300"
            >
              {/* Hover gradient */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 transition-transform duration-500 group-hover:translate-x-0" />

              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                {isBangla ? "আমার কাজ দেখুন" : "View My Work"}
              </span>

              <ArrowRight
                size={17}
                strokeWidth={2}
                className="relative z-10 transition-all duration-300 group-hover:translate-x-1 group-hover:text-black"
              />
            </motion.a>

            {/* Let's Connect */}
            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="group inline-flex items-center justify-center gap-2 border border-white/10 bg-gradient-to-r from-slate-900 via-violet-950 to-blue-950 px-6 py-3 text-sm font-medium text-white/80 backdrop-blur-sm transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-400/5 hover:text-white"
            >
              <span>
                {isBangla ? "যোগাযোগ করুন" : "Let’s Connect"}
              </span>

              <ArrowRight
                size={17}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.5,
                },
              },
            }}
            className="mt-12 flex items-center gap-3"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel={
                    social.label !== "Email"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={social.label}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 12,
                      scale: 0.9,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                  whileHover={{
                    y: -4,
                    scale: 1.08,
                  }}
                  whileTap={{
                    scale: 0.94,
                  }}
                  className="group relative flex h-10 w-10 items-center justify-center overflow-hidden border border-white/10 bg-white/[0.03] text-white/40 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/30 hover:text-white"
                >
                  {/* Hover gradient */}
                  <span className="absolute inset-0 -translate-y-full bg-gradient-to-br from-cyan-400/20 via-blue-500/15 to-violet-500/20 transition-transform duration-500 group-hover:translate-y-0" />

                  {/* Icon */}
                  <Icon
                    size={18}
                    strokeWidth={1.7}
                    className="relative z-10 transition-all duration-300 group-hover:text-cyan-300"
                  />

                  {/* Glow */}
                  <span className="pointer-events-none absolute inset-0 opacity-0 shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-opacity duration-300 group-hover:opacity-100" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group absolute bottom-8 right-4 hidden items-center gap-2 sm:flex lg:right-8"
        >
          <motion.span
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-[length:200%_auto] bg-clip-text text-xs font-medium tracking-wide text-transparent"
          >
            {isBangla ? "আরও দেখতে স্ক্রল করুন" : "Scroll to explore"}
          </motion.span>

          <motion.span
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-cyan-300 transition-colors duration-300 group-hover:text-violet-400"
          >
            <ArrowDown size={15} strokeWidth={1.8} />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;

