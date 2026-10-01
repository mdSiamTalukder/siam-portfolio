import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Code2,
  Mail,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

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

const wordReveal = {
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

const Hero = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const isBangla = language === "BN";
  const isLight = theme === "light";

  return (
    <section
      id="home"
      className={`relative flex min-h-screen items-center overflow-hidden transition-colors duration-500 ${
        isLight ? "bg-[#f8fafc]" : "bg-[#050505]"
      }`}
    >
      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className={`absolute left-[48%] top-[30%] h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-[130px] ${
            isLight ? "bg-cyan-400/[0.12]" : "bg-cyan-400/[0.045]"
          }`}
        />

        <div
          className={`absolute -right-32 top-1/4 h-[420px] w-[420px] rounded-full blur-[120px] ${
            isLight ? "bg-violet-500/[0.08]" : "bg-violet-500/[0.035]"
          }`}
        />

        <div
          className={`absolute -bottom-40 left-1/4 h-[420px] w-[420px] rounded-full blur-[120px] ${
            isLight ? "bg-cyan-500/[0.06]" : "bg-cyan-500/[0.02]"
          }`}
        />
      </div>

      {/* Fine Grid */}
      <div
        className={`pointer-events-none absolute inset-0 ${
          isLight ? "opacity-[0.045]" : "opacity-[0.025]"
        }`}
        style={{
          backgroundImage: isLight
            ? "linear-gradient(rgba(15,23,42,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.45) 1px, transparent 1px)"
            : "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Top Border */}
      <div
        className={`pointer-events-none absolute left-0 right-0 top-0 h-px ${
          isLight
            ? "bg-gradient-to-r from-transparent via-black/10 to-transparent"
            : "bg-gradient-to-r from-transparent via-white/10 to-transparent"
        }`}
      />

      {/* Main Container */}
      <div className="relative mx-auto w-full max-w-[1500px] px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-24 lg:pt-36 xl:px-16">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:gap-10 xl:gap-20">

          {/* LEFT CONTENT */}
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
              className={`mb-8 inline-flex items-center gap-3 border px-3.5 py-2 backdrop-blur-md ${
                isLight
                  ? "border-black/10 bg-white/90 shadow-sm"
                  : "border-white/10 bg-white/[0.025]"
              }`}
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
                className="h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.55)]"
              />

              <span
                className={`text-[11px] font-medium uppercase tracking-[0.18em] ${
                  isLight ? "text-gray-800" : "text-white/55"
                }`}
              >
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
                    staggerChildren: 0.08,
                  },
                },
              }}
              className="max-w-4xl text-[clamp(2.35rem,4.7vw,5rem)] font-medium leading-[0.98] tracking-[-0.05em]"
            >
              {isBangla ? (
                <>
                  <motion.span
                    variants={wordReveal}
                    className={`mr-3 inline-block ${
                      isLight ? "text-gray-950" : "text-white"
                    }`}
                  >
                    তৈরি করছি
                  </motion.span>

                  <motion.span
                    variants={wordReveal}
                    className="mr-3 inline-block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent"
                  >
                    ডিজিটাল
                  </motion.span>

                  <motion.span
                    variants={wordReveal}
                    className={`mr-3 inline-block ${
                      isLight ? "text-gray-950" : "text-white"
                    }`}
                  >
                    অভিজ্ঞতা
                  </motion.span>

                  <motion.span
                    variants={wordReveal}
                    className={`inline-block ${
                      isLight ? "text-violet-700" : "text-violet-300/80"
                    }`}
                  >
                    যা
                  </motion.span>

                  <motion.span
                    variants={wordReveal}
                    className="mt-3 block bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent"
                  >
                    সত্যিই কাজ করে।
                  </motion.span>
                </>
              ) : (
                <>
                  <motion.span
                    variants={wordReveal}
                    className={`mr-3 inline-block ${
                      isLight ? "text-gray-950" : "text-white"
                    }`}
                  >
                    Building
                  </motion.span>

                  <motion.span
                    variants={wordReveal}
                    className="mr-3 inline-block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent"
                  >
                    digital
                  </motion.span>

                  <motion.span
                    variants={wordReveal}
                    className={`mr-3 inline-block ${
                      isLight ? "text-gray-950" : "text-white"
                    }`}
                  >
                    experiences
                  </motion.span>

                  <motion.span
                    variants={wordReveal}
                    className={`inline-block ${
                      isLight ? "text-violet-700" : "text-violet-300/80"
                    }`}
                  >
                    that
                  </motion.span>

                  <motion.span
                    variants={wordReveal}
                    className="mt-3 block bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent"
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
                delay: 0.72,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`mt-8 max-w-2xl text-[15px] leading-7 sm:text-base sm:leading-8 lg:text-[17px] ${
                isBangla ? "leading-8 sm:leading-9" : ""
              } ${isLight ? "text-gray-700" : "text-white/45"}`}
            >
              {isBangla ? (
                <>
                  আমি{" "}
                  <span
                    className={`font-medium ${
                      isLight ? "text-cyan-700" : "text-cyan-300"
                    }`}
                  >
                    সিয়াম তালুকদার
                  </span>
                  , একজন{" "}
                  <span
                    className={`font-semibold ${
                      isLight ? "text-violet-700" : "text-violet-300"
                    }`}
                  >
                    MERN Stack Developer
                  </span>{" "}
                  যিনি{" "}
                  <span
                    className={`font-medium ${
                      isLight ? "text-cyan-700" : "text-cyan-300/90"
                    }`}
                  >
                    আধুনিক, রেসপন্সিভ এবং স্কেলেবল
                  </span>{" "}
                  ওয়েব অ্যাপ্লিকেশন তৈরি করতে{" "}
                  <span
                    className={`font-medium ${
                      isLight ? "text-cyan-700" : "text-cyan-300"
                    }`}
                  >
                    frontend
                  </span>{" "}
                  থেকে{" "}
                  <span
                    className={`font-medium ${
                      isLight ? "text-violet-700" : "text-violet-300"
                    }`}
                  >
                    backend
                  </span>{" "}
                  পর্যন্ত কাজ করেন।
                </>
              ) : (
                <>
                  I’m{" "}
                  <span
                    className={`font-medium ${
                      isLight ? "text-cyan-700" : "text-cyan-300"
                    }`}
                  >
                    Siam Talukder
                  </span>
                  , a{" "}
                  <span
                    className={`font-semibold ${
                      isLight ? "text-violet-700" : "text-violet-300"
                    }`}
                  >
                    MERN Stack Developer
                  </span>{" "}
                  focused on building{" "}
                  <span
                    className={`font-medium ${
                      isLight ? "text-cyan-700" : "text-cyan-300/90"
                    }`}
                  >
                    modern, responsive and scalable
                  </span>{" "}
                  web applications from{" "}
                  <span
                    className={`font-medium ${
                      isLight ? "text-cyan-700" : "text-cyan-300"
                    }`}
                  >
                    frontend
                  </span>{" "}
                  to{" "}
                  <span
                    className={`font-medium ${
                      isLight ? "text-violet-700" : "text-violet-300"
                    }`}
                  >
                    backend
                  </span>
                  .
                </>
              )}
            </motion.p>

            {/* Buttons */}
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
              {/* View My Work */}
              <motion.a
                href="#projects"
                whileHover={{
                  y: -3,
                  boxShadow:
                    "0 10px 35px rgba(6, 182, 212, 0.15)",
                }}
                whileTap={{ scale: 0.97 }}
                className={`group inline-flex min-h-[50px] items-center justify-center gap-3 border px-6 py-3.5 text-sm font-bold transition-all duration-300 ${
                  isLight
                    ? "border-gray-950 bg-gray-950 text-white shadow-lg shadow-black/15 hover:border-cyan-600 hover:bg-cyan-600 hover:text-white"
                    : "border-white/15 bg-white text-black hover:bg-cyan-300"
                }`}
              >
                <span>
                  {isBangla ? "আমার কাজ দেখুন" : "View My Work"}
                </span>

                <ArrowRight
                  size={17}
                  strokeWidth={2.5}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.a>

              {/* Let's Connect */}
              <motion.a
                href="#contact"
                whileHover={{
                  y: -3,
                  boxShadow:
                    "0 10px 35px rgba(139, 92, 246, 0.12)",
                }}
                whileTap={{ scale: 0.97 }}
                className={`group inline-flex min-h-[50px] items-center justify-center gap-3 border px-6 py-3.5 text-sm font-bold transition-all duration-300 ${
                  isLight
                    ? "border-gray-400 bg-white text-gray-950 shadow-md shadow-black/10 hover:border-gray-950 hover:bg-gray-950 hover:text-white"
                    : "border-white/10 bg-white/[0.025] text-white/70 hover:border-violet-300/30 hover:bg-violet-300/[0.05] hover:text-white"
                }`}
              >
                <Mail
                  size={17}
                  strokeWidth={2.5}
                  className={`${
                    isLight ? "text-gray-950" : "text-white/80"
                  }`}
                />

                <span>
                  {isBangla ? "যোগাযোগ করুন" : "Let’s Connect"}
                </span>

                <ArrowRight
                  size={16}
                  strokeWidth={2.2}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 1.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-10 flex items-center gap-3"
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
                    title={social.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 1.1 + index * 0.08,
                    }}
                    whileHover={{
                      y: -4,
                      scale: 1.05,
                    }}
                    whileTap={{ scale: 0.94 }}
                    className={`group flex h-11 w-11 items-center justify-center border-2 transition-all duration-300 ${
                      isLight
                        ? "border-gray-300 bg-white text-gray-950 shadow-md shadow-black/10 hover:border-gray-950 hover:bg-gray-950 hover:text-white"
                        : "border-white/15 bg-white/[0.025] text-white/55 hover:border-cyan-300/40 hover:bg-cyan-300/[0.06] hover:text-cyan-300"
                    }`}
                  >
                    <Icon
                      size={20}
                      strokeWidth={2.4}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
              x: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex min-h-[380px] items-center justify-center sm:min-h-[450px] lg:min-h-[500px]"
          >
            {/* Outer Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className={`absolute h-[280px] w-[280px] rounded-full border sm:h-[340px] sm:w-[340px] lg:h-[370px] lg:w-[370px] ${
                isLight
                  ? "border-black/[0.08]"
                  : "border-white/[0.06]"
              }`}
            />

            {/* Inner Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[215px] w-[215px] rounded-full border border-cyan-500/[0.12] sm:h-[260px] sm:w-[260px] lg:h-[280px] lg:w-[280px]"
            />

            {/* Main Card */}
            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative h-[270px] w-[270px] border p-4 backdrop-blur-md sm:h-[310px] sm:w-[310px] sm:p-5 lg:h-[330px] lg:w-[330px] ${
                isLight
                  ? "border-black/10 bg-white/80 shadow-xl shadow-black/[0.06]"
                  : "border-white/10 bg-white/[0.025]"
              }`}
            >
              <div
                className={`relative flex h-full w-full items-center justify-center overflow-hidden border ${
                  isLight
                    ? "border-black/[0.08]"
                    : "border-white/[0.07]"
                }`}
              >
                {/* Center Glow */}
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
                  className={`absolute h-44 w-44 rounded-full blur-[70px] ${
                    isLight
                      ? "bg-cyan-400/[0.14]"
                      : "bg-cyan-400/[0.08]"
                  }`}
                />

                {/* Profile Image */}
                <motion.div
                  animate={{ y: [0, -7, 0] }}
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

                {/* Corner Labels */}
                <span className="absolute left-3 top-3 z-20 font-mono text-[8px] uppercase tracking-[0.18em] text-white/90 sm:left-4 sm:top-4 sm:text-[9px]">
                  MERN
                </span>

                <span className="absolute right-3 top-3 z-20 font-mono text-[8px] uppercase tracking-[0.18em] text-cyan-300 sm:right-4 sm:top-4 sm:text-[9px]">
                  DEV
                </span>

                <span className="absolute bottom-3 left-3 z-20 font-mono text-[8px] uppercase tracking-[0.18em] text-white/90 sm:bottom-4 sm:left-4 sm:text-[9px]">
                  2026
                </span>

                <span className="absolute bottom-3 right-3 z-20 font-mono text-[8px] uppercase tracking-[0.16em] text-violet-300 sm:bottom-4 sm:right-4 sm:text-[9px]">
                  SIAM
                </span>

                {/* Image Overlay */}
                <div
                  className={`pointer-events-none absolute inset-0 z-10 ${
                    isLight
                      ? "bg-gradient-to-t from-black/30 via-transparent to-black/5"
                      : "bg-gradient-to-t from-black/35 via-transparent to-black/10"
                  }`}
                />
              </div>
            </motion.div>

            {/* Floating Status */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.03 }}
              className={`absolute -bottom-1 left-0 border px-3 py-2.5 backdrop-blur-xl sm:left-2 sm:px-4 sm:py-3 lg:-bottom-2 lg:left-4 ${
                isLight
                  ? "border-black/10 bg-white/95 shadow-lg shadow-black/[0.08]"
                  : "border-white/10 bg-[#080808]/90"
              }`}
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
                  className="h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.6)]"
                />

                <span
                  className={`text-[9px] uppercase tracking-[0.13em] sm:text-[10px] sm:tracking-[0.16em] ${
                    isLight ? "text-gray-800" : "text-white/45"
                  }`}
                >
                  Building the web
                </span>
              </div>
            </motion.div>

            {/* Floating Stack */}
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.03 }}
              className={`absolute -right-1 top-4 border px-3 py-2.5 backdrop-blur-xl sm:right-0 sm:top-8 sm:px-4 sm:py-3 lg:-right-2 lg:top-12 ${
                isLight
                  ? "border-black/10 bg-white/95 shadow-lg shadow-black/[0.08]"
                  : "border-white/10 bg-[#080808]/90"
              }`}
            >
              <span
                className={`text-[9px] uppercase tracking-[0.12em] sm:text-[10px] sm:tracking-[0.16em] ${
                  isLight ? "text-violet-700" : "text-violet-300/60"
                }`}
              >
                React · Node · MongoDB
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
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
          <span
            className={`text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 ${
              isLight
                ? "text-gray-600 group-hover:text-gray-950"
                : "text-white/25 group-hover:text-white/60"
            }`}
          >
            {isBangla
              ? "আরও দেখতে স্ক্রল করুন"
              : "Scroll to explore"}
          </span>

          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`transition-colors duration-300 ${
              isLight
                ? "text-cyan-700 group-hover:text-cyan-800"
                : "text-cyan-300/60 group-hover:text-cyan-300"
            }`}
          >
            <ArrowDown size={14} strokeWidth={1.8} />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;