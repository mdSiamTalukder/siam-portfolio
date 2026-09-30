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

const textReveal = {
  hidden: {
    opacity: 0,
    y: 10,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Hero = () => {
  const { language } = useLanguage();

  const isBangla = language === "BN";

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#050505]"
    >
      {/* =====================================
          Ambient Background
      ====================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[48%] top-[30%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-400/[0.045] blur-[130px]" />

        <div className="absolute -right-32 top-1/4 h-[420px] w-[420px] rounded-full bg-violet-500/[0.035] blur-[120px]" />

        <div className="absolute -bottom-40 left-1/4 h-[420px] w-[420px] rounded-full bg-cyan-500/[0.02] blur-[120px]" />
      </div>

      {/* =====================================
          Fine Grid
      ====================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* =====================================
          Top Border Detail
      ====================================== */}

      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* =====================================
          Main Container
      ====================================== */}

      <div className="relative mx-auto w-full max-w-[1500px] px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-24 lg:pt-36 xl:px-16">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:gap-10 xl:gap-20">
          {/* =====================================
              LEFT CONTENT
          ====================================== */}

          <div className="max-w-5xl">
            {/* Availability */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-8 inline-flex items-center gap-3 border border-white/10 bg-white/[0.025] px-3.5 py-2 backdrop-blur-md"
            >
              <motion.span
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [1, 0.55, 1],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)]"
              />

              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/55">
                {isBangla
                  ? "নতুন সুযোগের জন্য উপলব্ধ"
                  : "Available for opportunities"}
              </span>
            </motion.div>

            {/* =====================================
                Heading
            ====================================== */}

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
              className="max-w-4xl text-[clamp(2.35rem,4.7vw,5rem)] font-medium leading-[0.98] tracking-[-0.05em]"
            >
              {isBangla ? (
                <>
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
                    className="mr-3 inline-block text-white"
                  >
                    তৈরি করছি
                  </motion.span>

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
                    className="mr-3 inline-block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent"
                  >
                    ডিজিটাল
                  </motion.span>

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
                    className="mr-3 inline-block text-white"
                  >
                    অভিজ্ঞতা
                  </motion.span>

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
                    className="inline-block text-violet-300/80"
                  >
                    যা
                  </motion.span>

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
                    className="mt-3 block bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent"
                  >
                    সত্যিই কাজ করে।
                  </motion.span>
                </>
              ) : (
                <>
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
                    className="mr-3 inline-block text-white"
                  >
                    Building
                  </motion.span>

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
                    className="mr-3 inline-block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent"
                  >
                    digital
                  </motion.span>

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
                    className="mr-3 inline-block text-white"
                  >
                    experiences
                  </motion.span>

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
                    className="inline-block text-violet-300/80"
                  >
                    that
                  </motion.span>

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
                    className="mt-3 block bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent"
                  >
                    actually work.
                  </motion.span>
                </>
              )}
            </motion.h1>

            {/* =====================================
                Description
            ====================================== */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.72,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`mt-8 max-w-2xl text-[15px] leading-7 text-white/45 sm:text-base sm:leading-8 lg:text-[17px] ${
                isBangla ? "leading-8 sm:leading-9" : ""
              }`}
            >
              {isBangla ? (
                <>
                  <motion.span variants={textReveal}>আমি </motion.span>

                  <motion.span
                    variants={textReveal}
                    className="font-medium text-cyan-300"
                  >
                    সিয়াম তালুকদার
                  </motion.span>

                  <motion.span variants={textReveal}>, একজন </motion.span>

                  <motion.span
                    variants={textReveal}
                    className="font-semibold text-violet-300"
                  >
                    MERN Stack Developer
                  </motion.span>

                  <motion.span variants={textReveal}> যিনি </motion.span>

                  <motion.span
                    variants={textReveal}
                    className="text-cyan-300/90"
                  >
                    আধুনিক, রেসপন্সিভ এবং স্কেলেবল
                  </motion.span>

                  <motion.span variants={textReveal}>
                    {" "}
                    ওয়েব অ্যাপ্লিকেশন তৈরি করতে{" "}
                  </motion.span>

                  <motion.span
                    variants={textReveal}
                    className="font-medium text-cyan-300"
                  >
                    frontend
                  </motion.span>

                  <motion.span variants={textReveal}> থেকে </motion.span>

                  <motion.span
                    variants={textReveal}
                    className="font-medium text-violet-300"
                  >
                    backend
                  </motion.span>

                  <motion.span variants={textReveal}>
                    {" "}
                    পর্যন্ত কাজ করেন।
                  </motion.span>
                </>
              ) : (
                <>
                  <motion.span variants={textReveal}>I’m </motion.span>

                  <motion.span
                    variants={textReveal}
                    className="font-medium text-cyan-300"
                  >
                    Siam Talukder
                  </motion.span>

                  <motion.span variants={textReveal}>, a </motion.span>

                  <motion.span
                    variants={textReveal}
                    className="font-semibold text-violet-300"
                  >
                    MERN Stack Developer
                  </motion.span>

                  <motion.span variants={textReveal}>
                    {" "}
                    focused on building{" "}
                  </motion.span>

                  <motion.span
                    variants={textReveal}
                    className="font-medium text-cyan-300/90"
                  >
                    modern, responsive and scalable
                  </motion.span>

                  <motion.span variants={textReveal}>
                    {" "}
                    web applications from{" "}
                  </motion.span>

                  <motion.span
                    variants={textReveal}
                    className="font-medium text-cyan-300"
                  >
                    frontend
                  </motion.span>

                  <motion.span variants={textReveal}> to </motion.span>

                  <motion.span
                    variants={textReveal}
                    className="font-medium text-violet-300"
                  >
                    backend
                  </motion.span>

                  <motion.span variants={textReveal}>.</motion.span>
                </>
              )}
            </motion.p>

            {/* =====================================
                Buttons
            ====================================== */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <motion.a
                href="#projects"
                whileHover={{
                  y: -3,
                  boxShadow: "0 10px 35px rgba(103, 232, 249, 0.12)",
                }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center justify-center gap-3 border border-white/15 bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-cyan-300"
              >
                <span>
                  {isBangla ? "আমার কাজ দেখুন" : "View My Work"}
                </span>

                <ArrowRight
                  size={16}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{
                  y: -3,
                  boxShadow: "0 10px 35px rgba(167, 139, 250, 0.1)",
                }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center justify-center gap-3 border border-white/10 bg-white/[0.025] px-6 py-3.5 text-sm font-medium text-white/70 backdrop-blur-sm transition-all duration-300 hover:border-violet-300/30 hover:bg-violet-300/[0.05] hover:text-white"
              >
                <span>
                  {isBangla ? "যোগাযোগ করুন" : "Let’s Connect"}
                </span>

                <ArrowRight
                  size={16}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.a>
            </motion.div>

            {/* =====================================
                Social Links
            ====================================== */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 1.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-10 flex items-center gap-2"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={
                      social.label !== "Email" ? "_blank" : undefined
                    }
                    rel={
                      social.label !== "Email"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={social.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 1.1 + index * 0.08,
                    }}
                    whileHover={{
                      y: -4,
                      scale: 1.04,
                    }}
                    whileTap={{
                      scale: 0.94,
                    }}
                    className="group flex h-10 w-10 items-center justify-center border border-white/10 bg-white/[0.02] text-white/35 transition-all duration-300 hover:border-cyan-300/30 hover:bg-cyan-300/[0.05] hover:text-cyan-300"
                  >
                    <Icon
                      size={17}
                      strokeWidth={1.6}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* =====================================
              RIGHT VISUAL
          ====================================== */}

          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex min-h-[380px] items-center justify-center sm:min-h-[450px] lg:min-h-[500px]"
          >
            {/* Outer ring */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[280px] w-[280px] rounded-full border border-white/[0.06] sm:h-[340px] sm:w-[340px] lg:h-[370px] lg:w-[370px]"
            />

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[215px] w-[215px] rounded-full border border-cyan-300/[0.08] sm:h-[260px] sm:w-[260px] lg:h-[280px] lg:w-[280px]"
            />

            {/* Main card */}

            <motion.div
              whileHover={{
                scale: 1.015,
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative h-[270px] w-[270px] border border-white/10 bg-white/[0.025] p-4 backdrop-blur-md sm:h-[310px] sm:w-[310px] sm:p-5 lg:h-[330px] lg:w-[330px]"
            >
              {/* Inner border */}

              <div className="relative flex h-full w-full items-center justify-center overflow-hidden border border-white/[0.07]">
                {/* Center glow */}

                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute h-44 w-44 rounded-full bg-cyan-400/[0.08] blur-[70px]"
                />

                {/* Profile Image */}

                <motion.div
                  animate={{
                    y: [0, -7, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10 h-full w-full"
                >
                  <img
                    src="/siam.jpeg"
                    alt="Siam Talukder"
                    className="h-full w-full object-cover object-center"
                  />
                </motion.div>

                {/* Corner labels */}

                <span className="absolute left-3 top-3 z-20 font-mono text-[8px] uppercase tracking-[0.18em] text-white/35 sm:left-4 sm:top-4 sm:text-[9px] sm:tracking-[0.2em]">
                  MERN
                </span>

                <span className="absolute right-3 top-3 z-20 font-mono text-[8px] uppercase tracking-[0.18em] text-cyan-300/55 sm:right-4 sm:top-4 sm:text-[9px] sm:tracking-[0.2em]">
                  DEV
                </span>

                <span className="absolute bottom-3 left-3 z-20 font-mono text-[8px] uppercase tracking-[0.18em] text-white/35 sm:bottom-4 sm:left-4 sm:text-[9px] sm:tracking-[0.2em]">
                  2026
                </span>

                <span className="absolute bottom-3 right-3 z-20 font-mono text-[8px] uppercase tracking-[0.16em] text-violet-300/55 sm:bottom-4 sm:right-4 sm:text-[9px]">
                  SIAM
                </span>

                {/* Image overlay */}

                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
              </div>
            </motion.div>

            {/* Floating status */}

            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.03,
              }}
              className="absolute -bottom-1 left-0 border border-white/10 bg-[#080808]/90 px-3 py-2.5 backdrop-blur-xl sm:left-2 sm:px-4 sm:py-3 lg:-bottom-2 lg:left-4"
            >
              <div className="flex items-center gap-2.5 sm:gap-3">
                <motion.span
                  animate={{
                    scale: [1, 1.25, 1],
                    opacity: [1, 0.55, 1],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.7)]"
                />

                <span className="text-[9px] uppercase tracking-[0.13em] text-white/45 sm:text-[10px] sm:tracking-[0.16em]">
                  Building the web
                </span>
              </div>
            </motion.div>

            {/* Floating stack */}

            <motion.div
              animate={{
                y: [0, 7, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.03,
              }}
              className="absolute -right-1 top-4 border border-white/10 bg-[#080808]/90 px-3 py-2.5 backdrop-blur-xl sm:right-0 sm:top-8 sm:px-4 sm:py-3 lg:-right-2 lg:top-12"
            >
              <span className="text-[9px] uppercase tracking-[0.12em] text-violet-300/60 sm:text-[10px] sm:tracking-[0.16em]">
                React · Node · MongoDB
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* =====================================
            Scroll Indicator
        ====================================== */}

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.3,
          }}
          className="group absolute bottom-7 right-5 hidden items-center gap-3 sm:flex lg:right-12 xl:right-16"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/25 transition-colors duration-300 group-hover:text-white/60">
            {isBangla ? "আরও দেখতে স্ক্রল করুন" : "Scroll to explore"}
          </span>

          <motion.span
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-cyan-300/60 transition-colors duration-300 group-hover:text-cyan-300"
          >
            <ArrowDown size={14} strokeWidth={1.5} />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;