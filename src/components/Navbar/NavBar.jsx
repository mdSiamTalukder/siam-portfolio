import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  Globe,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";

import { navigation } from "../../data/navigation";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

const languages = [
  {
    code: "EN",
    label: "English",
  },
  {
    code: "BN",
    label: "বাংলা",
  },
];

/* =====================================
   Mobile Menu Animation
===================================== */

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    y: -12,
    scale: 0.985,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.42,
      ease: [0.22, 1, 0.36, 1],
    },
  },

  exit: {
    opacity: 0,
    y: -10,
    scale: 0.985,
    transition: {
      duration: 0.28,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const mobileItemVariants = {
  hidden: {
    opacity: 0,
    y: 22,
  },

  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      delay: 0.08 + index * 0.055,
      ease: [0.22, 1, 0.36, 1],
    },
  }),

  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.18,
    },
  },
};

/* =====================================
   Navbar
===================================== */

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const isLight = theme === "light";

  /* =====================================
     Scroll Detection
  ====================================== */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =====================================
     Active Section Detection
  ====================================== */

  useEffect(() => {
    const sectionIds = navigation.map((item) =>
      item.href.replace("#", "")
    );

    const handleActiveSection = () => {
      const scrollPosition = window.scrollY + 180;

      let currentSection = "home";

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);

        if (!section) return;

        const sectionTop =
          section.getBoundingClientRect().top +
          window.scrollY;

        if (scrollPosition >= sectionTop) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    handleActiveSection();

    window.addEventListener("scroll", handleActiveSection, {
      passive: true,
    });

    window.addEventListener("resize", handleActiveSection);

    return () => {
      window.removeEventListener(
        "scroll",
        handleActiveSection
      );

      window.removeEventListener(
        "resize",
        handleActiveSection
      );
    };
  }, []);

  /* =====================================
     Body Scroll Lock
  ====================================== */

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* =====================================
     Close Language Dropdown
  ====================================== */

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const target = event.target;

      if (
        isLanguageOpen &&
        target instanceof Element &&
        !target.closest("[data-language-menu]")
      ) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, [isLanguageOpen]);

  /* =====================================
     Navigation Click
  ====================================== */

  const handleNavClick = (href) => {
    const sectionId = href.replace("#", "");

    setIsOpen(false);
    setIsLanguageOpen(false);
    setActiveSection(sectionId);

    document.body.style.overflow = "";

    const scrollToSection = () => {
      const section = document.getElementById(sectionId);

      if (!section) return;

      const header = document.querySelector("header");

      const headerHeight = header
        ? header.getBoundingClientRect().height
        : 90;

      const extraSpacing = 20;

      const sectionPosition =
        section.getBoundingClientRect().top +
        window.scrollY -
        headerHeight -
        extraSpacing;

      window.scrollTo({
        top: Math.max(0, sectionPosition),
        behavior: "smooth",
      });
    };

    if (window.innerWidth < 768) {
      window.setTimeout(scrollToSection, 320);
    } else {
      window.requestAnimationFrame(scrollToSection);
    }

    window.history.replaceState(null, "", href);
  };

  /* =====================================
     Language Change
  ====================================== */

  const handleLanguageChange = (code) => {
    setLanguage(code);
    setIsLanguageOpen(false);
    setIsOpen(false);
  };

  /* =====================================
     Navigation Label
  ====================================== */

  const getNavLabel = (label) => {
    if (language === "BN") {
      const banglaLabels = {
        Home: "হোম",
        About: "আমার সম্পর্কে",
        Skills: "দক্ষতা",
        Projects: "প্রজেক্ট",
        Contact: "যোগাযোগ",
      };

      return banglaLabels[label] || label;
    }

    return label;
  };

  /* =====================================
     Theme Classes
  ====================================== */

  const navText = isLight
    ? "text-gray-950"
    : "text-white";

  const mutedText = isLight
    ? "text-gray-700/75"
    : "text-white/50";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* =====================================
          Mobile Backdrop
      ====================================== */}

      <AnimatePresence>
        {isOpen && (
          <motion.button
            type="button"
            aria-label="Close mobile menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            onClick={() => setIsOpen(false)}
            className={`fixed inset-0 md:hidden ${
              isLight
                ? "bg-black/25 backdrop-blur-md"
                : "bg-black/60 backdrop-blur-md"
            }`}
          />
        )}
      </AnimatePresence>

      <div className="relative z-10 mx-auto px-3 pt-3 sm:px-5 sm:pt-4 lg:px-8">
        <motion.nav
          initial={{
            opacity: 0,
            y: -18,
          }}
          animate={{
            opacity: 1,
            y: 0,

            backgroundColor: isLight
              ? isScrolled
                ? "rgba(255,255,255,0.96)"
                : "rgba(255,255,255,0.88)"
              : isScrolled
                ? "rgba(7,7,7,0.92)"
                : "rgba(5,5,5,0.62)",

            borderColor: isLight
              ? isScrolled
                ? "rgba(0,0,0,0.14)"
                : "rgba(0,0,0,0.10)"
              : isScrolled
                ? "rgba(255,255,255,0.14)"
                : "rgba(255,255,255,0.08)",

            boxShadow: isLight
              ? isScrolled
                ? "0 20px 60px rgba(0,0,0,0.12)"
                : "0 10px 35px rgba(0,0,0,0.06)"
              : isScrolled
                ? "0 20px 60px rgba(0,0,0,0.36)"
                : "0 10px 35px rgba(0,0,0,0.12)",
          }}
          transition={{
            opacity: {
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            },

            y: {
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            },

            backgroundColor: {
              duration: 0.35,
            },

            borderColor: {
              duration: 0.35,
            },

            boxShadow: {
              duration: 0.35,
            },
          }}
          className={`relative mx-auto max-w-[1440px] overflow-visible border backdrop-blur-2xl ${
            isScrolled
              ? "rounded-2xl"
              : "rounded-[20px]"
          }`}
        >
          {/* =====================================
              Main Navbar Row
          ====================================== */}

          <div className="flex min-h-[66px] items-center justify-between px-4 sm:px-6 lg:px-7">
            {/* =====================================
                Logo
            ====================================== */}

            <motion.button
              type="button"
              onClick={() => handleNavClick("#home")}
              whileHover={{ x: 1 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex shrink-0 items-center"
              aria-label="Go to home"
            >
              <span
                className={`relative text-[19px] font-bold tracking-[-0.055em] sm:text-[21px] ${navText}`}
              >
                Siam
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
                  .
                </span>
              </span>

              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-500 group-hover:w-full" />
            </motion.button>

            {/* =====================================
                Desktop Navigation
            ====================================== */}

            <nav
              className="hidden items-center md:flex"
              aria-label="Primary navigation"
            >
              <div
                className={`flex items-center gap-0.5 rounded-full border px-1 py-1 ${
                  isLight
                    ? "border-black/10 bg-black/[0.035]"
                    : "border-white/[0.08] bg-white/[0.025]"
                }`}
              >
                {navigation.map((item) => {
                  const sectionId =
                    item.href.replace("#", "");

                  const isActive =
                    activeSection === sectionId;

                  return (
                    <button
                      key={item.href}
                      type="button"
                      onClick={() =>
                        handleNavClick(item.href)
                      }
                      className="group relative rounded-full px-3.5 py-2 lg:px-4"
                    >
                      {isActive && (
                        <motion.span
                          layoutId="desktop-active-nav"
                          className={`absolute inset-0 rounded-full ${
                            isLight
                              ? "bg-black/[0.075]"
                              : "bg-white/[0.055]"
                          }`}
                          transition={{
                            type: "spring",
                            stiffness: 420,
                            damping: 32,
                          }}
                        />
                      )}

                      <span
                        className={`relative z-10 text-[12px] font-medium tracking-[-0.01em] transition-colors duration-300 ${
                          isActive
                            ? isLight
                              ? "text-gray-950"
                              : "text-white"
                            : mutedText
                        }`}
                      >
                        {getNavLabel(item.label)}
                      </span>

                      {isActive && (
                        <motion.span
                          layoutId="desktop-active-dot"
                          className="absolute bottom-1 left-1/2 h-0.5 w-0.5 -translate-x-1/2 rounded-full bg-cyan-400"
                          transition={{
                            type: "spring",
                            stiffness: 420,
                            damping: 32,
                          }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </nav>

            {/* =====================================
                Desktop Actions
            ====================================== */}

            <div className="hidden items-center gap-2 md:flex">
              {/* Language */}

              <div
                className="relative"
                data-language-menu
              >
                <motion.button
                  type="button"
                  onClick={() =>
                    setIsLanguageOpen((prev) => !prev)
                  }
                  whileTap={{ scale: 0.96 }}
                  className={`group flex h-10 items-center gap-2 rounded-full border px-3.5 transition-all duration-300 ${
                    isLight
                      ? isLanguageOpen
                        ? "border-black/20 bg-black/[0.075]"
                        : "border-black/10 bg-black/[0.035] hover:border-black/20 hover:bg-black/[0.065]"
                      : isLanguageOpen
                        ? "border-white/15 bg-white/[0.07]"
                        : "border-white/[0.08] bg-white/[0.025] hover:border-white/15 hover:bg-white/[0.045]"
                  }`}
                  aria-label="Change language"
                  aria-expanded={isLanguageOpen}
                >
                  <Globe
                    size={14}
                    strokeWidth={1.7}
                    className={
                      isLight
                        ? "text-gray-700 group-hover:text-cyan-600"
                        : "text-white/55 group-hover:text-cyan-300"
                    }
                  />

                  <span
                    className={`text-[10px] font-semibold tracking-[0.14em] ${
                      isLight
                        ? "text-gray-800"
                        : "text-white/70"
                    }`}
                  >
                    {language}
                  </span>

                  <ChevronDown
                    size={12}
                    strokeWidth={1.7}
                    className={`transition-transform duration-300 ${
                      isLight
                        ? "text-gray-600/80"
                        : "text-white/40"
                    } ${
                      isLanguageOpen
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </motion.button>

                <AnimatePresence>
                  {isLanguageOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: -8,
                        scale: 0.95,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        y: -8,
                        scale: 0.95,
                      }}
                      transition={{ duration: 0.2 }}
                      className={`absolute right-0 top-[calc(100%+9px)] w-36 overflow-hidden rounded-2xl border p-1.5 shadow-2xl backdrop-blur-2xl ${
                        isLight
                          ? "border-black/12 bg-white/98"
                          : "border-white/10 bg-[#0a0a0a]/95"
                      }`}
                    >
                      {languages.map((item) => {
                        const isSelected =
                          language === item.code;

                        return (
                          <button
                            key={item.code}
                            type="button"
                            onClick={() =>
                              handleLanguageChange(
                                item.code
                              )
                            }
                            className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left transition-all duration-200 ${
                              isLight
                                ? isSelected
                                  ? "bg-black/[0.075] text-gray-950"
                                  : "text-gray-700 hover:bg-black/[0.045] hover:text-gray-950"
                                : isSelected
                                  ? "bg-white/[0.07] text-white"
                                  : "text-white/50 hover:bg-white/[0.04] hover:text-white"
                            }`}
                          >
                            <span className="text-xs font-medium">
                              {item.label}
                            </span>

                            <span
                              className={`text-[9px] font-semibold tracking-[0.16em] ${
                                isLight
                                  ? "text-gray-500"
                                  : "text-white/35"
                              }`}
                            >
                              {item.code}
                            </span>
                          </button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Theme */}

              <motion.button
                type="button"
                onClick={toggleTheme}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.94 }}
                className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                  isLight
                    ? "border-black/10 bg-black/[0.035] text-gray-700 hover:border-black/20 hover:bg-black/[0.065] hover:text-gray-950"
                    : "border-white/[0.08] bg-white/[0.025] text-white/60 hover:border-white/15 hover:bg-white/[0.05] hover:text-white"
                }`}
                aria-label={
                  isLight
                    ? "Switch to dark mode"
                    : "Switch to light mode"
                }
              >
                <AnimatePresence
                  mode="wait"
                  initial={false}
                >
                  {isLight ? (
                    <motion.span
                      key="sun"
                      initial={{
                        opacity: 0,
                        rotate: -80,
                        scale: 0.65,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        rotate: 80,
                        scale: 0.65,
                      }}
                      transition={{ duration: 0.22 }}
                    >
                      <Sun
                        size={15}
                        strokeWidth={1.7}
                      />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="moon"
                      initial={{
                        opacity: 0,
                        rotate: 80,
                        scale: 0.65,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        rotate: -80,
                        scale: 0.65,
                      }}
                      transition={{ duration: 0.22 }}
                    >
                      <Moon
                        size={15}
                        strokeWidth={1.7}
                      />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Let's Talk */}

              <motion.button
                type="button"
                onClick={() =>
                  handleNavClick("#contact")
                }
                whileHover={{
                  y: -1,
                  scale: 1.01,
                }}
                whileTap={{ scale: 0.98 }}
                className={`group ml-1 flex h-10 items-center gap-2 rounded-full border px-4 text-[11px] font-semibold transition-all duration-300 ${
                  isLight
                    ? "border-gray-950 bg-gray-950 text-white hover:bg-gray-800"
                    : "border-white bg-white text-black hover:bg-white/90"
                }`}
              >
                <span>
                  {language === "BN"
                    ? "কথা বলুন"
                    : "Let's Talk"}
                </span>

                <ArrowUpRight
                  size={13}
                  strokeWidth={1.9}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </motion.button>
            </div>

            {/* =====================================
                Mobile Actions
            ====================================== */}

            <div className="flex items-center gap-1.5 md:hidden">
              {/* Language */}

              <div
                className="relative"
                data-language-menu
              >
                <motion.button
                  type="button"
                  onClick={() =>
                    setIsLanguageOpen((prev) => !prev)
                  }
                  whileTap={{ scale: 0.95 }}
                  className={`flex h-10 items-center gap-1.5 rounded-full border px-3 ${
                    isLight
                      ? "border-black/10 bg-black/[0.035] text-gray-800"
                      : "border-white/[0.08] bg-white/[0.025] text-white/65"
                  }`}
                  aria-label="Change language"
                  aria-expanded={isLanguageOpen}
                >
                  <Globe
                    size={14}
                    strokeWidth={1.7}
                  />

                  <span className="text-[10px] font-semibold tracking-[0.12em]">
                    {language}
                  </span>

                  <ChevronDown
                    size={11}
                    strokeWidth={1.7}
                    className={`transition-transform duration-300 ${
                      isLight
                        ? "text-gray-600"
                        : "text-white/40"
                    } ${
                      isLanguageOpen
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </motion.button>

                <AnimatePresence>
                  {isLanguageOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: -8,
                        scale: 0.95,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        y: -8,
                        scale: 0.95,
                      }}
                      transition={{ duration: 0.2 }}
                      className={`absolute right-0 top-[calc(100%+8px)] w-32 overflow-hidden rounded-2xl border p-1.5 shadow-2xl backdrop-blur-2xl ${
                        isLight
                          ? "border-black/12 bg-white/98"
                          : "border-white/10 bg-[#0a0a0a]/95"
                      }`}
                    >
                      {languages.map((item) => {
                        const isSelected =
                          language === item.code;

                        return (
                          <button
                            key={item.code}
                            type="button"
                            onClick={() =>
                              handleLanguageChange(
                                item.code
                              )
                            }
                            className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left transition-all duration-200 ${
                              isLight
                                ? isSelected
                                  ? "bg-black/[0.075] text-gray-950"
                                  : "text-gray-700 hover:bg-black/[0.045] hover:text-gray-950"
                                : isSelected
                                  ? "bg-white/[0.07] text-white"
                                  : "text-white/50 hover:bg-white/[0.04] hover:text-white"
                            }`}
                          >
                            <span className="text-xs font-medium">
                              {item.label}
                            </span>

                            <span
                              className={`text-[9px] font-semibold tracking-[0.15em] ${
                                isLight
                                  ? "text-gray-500"
                                  : "text-white/35"
                              }`}
                            >
                              {item.code}
                            </span>
                          </button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Theme */}

              <motion.button
                type="button"
                onClick={toggleTheme}
                whileTap={{ scale: 0.94 }}
                className={`flex h-10 w-10 items-center justify-center rounded-full border ${
                  isLight
                    ? "border-black/10 bg-black/[0.035] text-gray-700"
                    : "border-white/[0.08] bg-white/[0.025] text-white/60"
                }`}
                aria-label={
                  isLight
                    ? "Switch to dark mode"
                    : "Switch to light mode"
                }
              >
                <AnimatePresence
                  mode="wait"
                  initial={false}
                >
                  {isLight ? (
                    <motion.span
                      key="mobile-sun"
                      initial={{
                        opacity: 0,
                        rotate: -80,
                        scale: 0.65,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        rotate: 80,
                        scale: 0.65,
                      }}
                      transition={{ duration: 0.22 }}
                    >
                      <Sun
                        size={16}
                        strokeWidth={1.7}
                      />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="mobile-moon"
                      initial={{
                        opacity: 0,
                        rotate: 80,
                        scale: 0.65,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        rotate: -80,
                        scale: 0.65,
                      }}
                      transition={{ duration: 0.22 }}
                    >
                      <Moon
                        size={16}
                        strokeWidth={1.7}
                      />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Menu Button */}

              <motion.button
                type="button"
                onClick={() => {
                  setIsLanguageOpen(false);
                  setIsOpen((prev) => !prev);
                }}
                whileTap={{ scale: 0.94 }}
                className={`flex h-10 w-10 items-center justify-center rounded-full border ${
                  isLight
                    ? isOpen
                      ? "border-black/20 bg-black/[0.08] text-gray-950"
                      : "border-black/10 bg-black/[0.035] text-gray-800"
                    : isOpen
                      ? "border-white/15 bg-white/[0.07] text-white"
                      : "border-white/[0.08] bg-white/[0.025] text-white/65"
                }`}
                aria-label={
                  isOpen ? "Close menu" : "Open menu"
                }
                aria-expanded={isOpen}
              >
                <AnimatePresence
                  mode="wait"
                  initial={false}
                >
                  {isOpen ? (
                    <motion.span
                      key="close"
                      initial={{
                        opacity: 0,
                        rotate: -45,
                        scale: 0.7,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        rotate: 45,
                        scale: 0.7,
                      }}
                      transition={{ duration: 0.18 }}
                    >
                      <X
                        size={18}
                        strokeWidth={1.7}
                      />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{
                        opacity: 0,
                        rotate: 45,
                        scale: 0.7,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        rotate: -45,
                        scale: 0.7,
                      }}
                      transition={{ duration: 0.18 }}
                    >
                      <Menu
                        size={18}
                        strokeWidth={1.7}
                      />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* =====================================
              PREMIUM MOBILE MENU
          ====================================== */}

          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="overflow-hidden md:hidden"
              >
                <div
                  className={`mx-2 mb-2 overflow-hidden rounded-[20px] border sm:mx-3 sm:mb-3 ${
                    isLight
                      ? "border-black/10 bg-white/95 shadow-lg shadow-black/[0.04]"
                      : "border-white/[0.08] bg-[#0b0b0b]/90"
                  }`}
                >
                  {/* =================================
                      Menu Header
                  ================================== */}

                  <div
                    className={`flex items-end justify-between border-b px-5 pb-5 pt-6 sm:px-6 ${
                      isLight
                        ? "border-black/[0.10]"
                        : "border-white/[0.07]"
                    }`}
                  >
                    <div>
                      <p
                        className={`mb-2 text-[9px] font-semibold uppercase tracking-[0.28em] ${
                          isLight
                            ? "text-gray-600"
                            : "text-white/35"
                        }`}
                      >
                        Navigation
                      </p>

                      <h2
                        className={`text-[28px] font-semibold leading-none tracking-[-0.06em] sm:text-[32px] ${
                          isLight
                            ? "text-gray-950"
                            : "text-white"
                        }`}
                      >
                        Menu
                        <span className="text-cyan-500">
                          .
                        </span>
                      </h2>
                    </div>

                    <span
                      className={`pb-1 text-[9px] font-medium uppercase tracking-[0.18em] ${
                        isLight
                          ? "text-gray-500"
                          : "text-white/30"
                      }`}
                    >
                      {language === "BN"
                        ? "মেনু"
                        : "Explore"}
                    </span>
                  </div>

                  {/* =================================
                      Large Navigation
                  ================================== */}

                  <div className="px-3 py-3 sm:px-4 sm:py-4">
                    {navigation.map((item, index) => {
                      const sectionId =
                        item.href.replace("#", "");

                      const isActive =
                        activeSection === sectionId;

                      return (
                        <motion.button
                          key={item.href}
                          type="button"
                          custom={index}
                          variants={mobileItemVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          whileTap={{
                            scale: 0.985,
                          }}
                          onClick={() =>
                            handleNavClick(item.href)
                          }
                          className={`group relative flex w-full items-center justify-between border-b px-2 py-4 text-left transition-all duration-300 sm:px-3 sm:py-[18px] ${
                            isLight
                              ? "border-black/[0.10]"
                              : "border-white/[0.065]"
                          }`}
                        >
                          {/* Left Side */}

                          <div className="flex items-center gap-3 sm:gap-4">
                            {/* Number */}

                            <span
                              className={`w-6 text-[9px] font-semibold tracking-[0.16em] transition-colors duration-300 ${
                                isActive
                                  ? "text-cyan-500"
                                  : isLight
                                    ? "text-gray-500"
                                    : "text-white/25"
                              }`}
                            >
                              0{index + 1}
                            </span>

                            {/* Label */}

                            <span
                              className={`text-[22px] font-medium tracking-[-0.045em] transition-all duration-300 sm:text-[25px] ${
                                isActive
                                  ? isLight
                                    ? "translate-x-1 text-gray-950"
                                    : "translate-x-1 text-white"
                                  : isLight
                                    ? "text-gray-700 hover:translate-x-1 hover:text-gray-950"
                                    : "text-white/50 hover:translate-x-1 hover:text-white"
                              }`}
                            >
                              {getNavLabel(item.label)}
                            </span>
                          </div>

                          {/* Right Side */}

                          <div
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                              isActive
                                ? "border-cyan-500/40 bg-cyan-500/10 text-cyan-500"
                                : isLight
                                  ? "border-black/12 text-gray-500 group-hover:border-black/20 group-hover:text-gray-900"
                                  : "border-white/[0.08] text-white/25 group-hover:border-white/15 group-hover:text-white/70"
                            }`}
                          >
                            <ArrowUpRight
                              size={15}
                              strokeWidth={1.5}
                              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                          </div>

                          {/* Active Line */}

                          {isActive && (
                            <motion.span
                              layoutId="mobile-active-line"
                              className="absolute bottom-[-1px] left-0 h-px w-12 bg-cyan-500"
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 30,
                              }}
                            />
                          )}
                        </motion.button>
                      );
                    })}

                    {/* =================================
                        Let's Talk
                    ================================== */}

                    <motion.button
                      type="button"
                      initial={{
                        opacity: 0,
                        y: 18,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: 12,
                      }}
                      transition={{
                        duration: 0.4,
                        delay:
                          0.12 +
                          navigation.length * 0.055,
                      }}
                      whileTap={{
                        scale: 0.985,
                      }}
                      onClick={() =>
                        handleNavClick("#contact")
                      }
                      className={`group mt-4 flex w-full items-center justify-between rounded-2xl border px-5 py-4 ${
                        isLight
                          ? "border-gray-950 bg-gray-950 text-white shadow-lg shadow-black/[0.10]"
                          : "border-white bg-white text-black"
                      }`}
                    >
                      <span className="text-sm font-semibold">
                        {language === "BN"
                          ? "কথা বলুন"
                          : "Let's Talk"}
                      </span>

                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-full ${
                          isLight
                            ? "bg-white/15"
                            : "bg-black/10"
                        }`}
                      >
                        <ArrowUpRight
                          size={16}
                          strokeWidth={1.8}
                          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </span>
                    </motion.button>
                  </div>

                  {/* =================================
                      Mobile Menu Footer
                  ================================== */}

                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.35,
                      delay:
                        0.25 +
                        navigation.length * 0.055,
                    }}
                    className={`flex items-center justify-between border-t px-5 py-4 sm:px-6 ${
                      isLight
                        ? "border-black/[0.10]"
                        : "border-white/[0.07]"
                    }`}
                  >
                    <div>
                      <p
                        className={`text-[8px] font-semibold uppercase tracking-[0.22em] ${
                          isLight
                            ? "text-gray-600"
                            : "text-white/30"
                        }`}
                      >
                        Siam Talukder
                      </p>

                      <p
                        className={`mt-1 text-[9px] ${
                          isLight
                            ? "text-gray-500"
                            : "text-white/25"
                        }`}
                      >
                        MERN Stack Developer
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />

                      <span
                        className={`text-[8px] font-medium uppercase tracking-[0.18em] ${
                          isLight
                            ? "text-gray-600"
                            : "text-white/30"
                        }`}
                      >
                        Available
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>
    </header>
  );
};

export default Navbar;