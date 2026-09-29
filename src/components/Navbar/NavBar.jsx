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
      setIsScrolled(window.scrollY > 20);
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
      item.href.replace("#", ""),
    );

    const handleActiveSection = () => {
      const scrollPosition = window.scrollY + 180;

      let currentSection = "home";

      for (const id of sectionIds) {
        const section = document.getElementById(id);

        if (!section) continue;

        const sectionTop = section.offsetTop;

        if (scrollPosition >= sectionTop) {
          currentSection = id;
        }
      }

      setActiveSection(currentSection);
    };

    handleActiveSection();

    window.addEventListener("scroll", handleActiveSection, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleActiveSection);
    };
  }, []);

  /* =====================================
     Lock Body Scroll on Mobile Menu
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
     Navigation Click
  ====================================== */

  const handleNavClick = (href) => {
    setIsOpen(false);

    const sectionId = href.replace("#", "");
    setActiveSection(sectionId);

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    window.history.replaceState(null, "", href);
  };

  /* =====================================
     Language Change
  ====================================== */

  const handleLanguageChange = (code) => {
    setLanguage(code);
    setIsLanguageOpen(false);
  };

  /* =====================================
     Navigation Label
  ====================================== */

  const getNavLabel = (label) => {
    if (language === "BN") {
      return {
        Home: "হোম",
        About: "আমার সম্পর্কে",
        Skills: "দক্ষতা",
        Projects: "প্রজেক্ট",
        Contact: "যোগাযোগ",
      }[label];
    }

    return label;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-3 pt-3 sm:px-6 sm:pt-4 lg:px-8">
        <motion.nav
          animate={{
            backgroundColor: isLight
              ? isScrolled
                ? "rgba(255, 255, 255, 0.90)"
                : "rgba(255, 255, 255, 0.72)"
              : isScrolled
                ? "rgba(8, 8, 8, 0.88)"
                : "rgba(0, 0, 0, 0.62)",

            borderColor: isLight
              ? isScrolled
                ? "rgba(0,0,0,0.13)"
                : "rgba(0,0,0,0.08)"
              : isScrolled
                ? "rgba(255,255,255,0.13)"
                : "rgba(255,255,255,0.08)",

            boxShadow: isLight
              ? isScrolled
                ? "0 18px 50px rgba(0,0,0,0.10)"
                : "0 10px 35px rgba(0,0,0,0.06)"
              : isScrolled
                ? "0 18px 50px rgba(0,0,0,0.28)"
                : "0 10px 35px rgba(0,0,0,0.12)",
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
          className="relative border px-3 py-3 backdrop-blur-2xl sm:px-5"
        >
          {/* =====================================
              Top Navigation
          ====================================== */}

          <div className="flex items-center justify-between">
            {/* =================================
                Logo
            ================================== */}

            <button
              type="button"
              onClick={() => handleNavClick("#home")}
              className="group flex items-center gap-2"
              aria-label="Go to home"
            >
              <span
                className={`relative flex h-8 w-8 items-center justify-center overflow-hidden border ${
                  isLight
                    ? "border-black/10 bg-black/[0.035]"
                    : "border-white/10 bg-white/[0.035]"
                }`}
              >
                <span className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-violet-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <span
                  className={`relative text-sm font-bold tracking-tight ${
                    isLight ? "text-black" : "text-white"
                  }`}
                >
                  S
                </span>
              </span>

              <span
                className={`text-lg font-bold tracking-[-0.03em] ${
                  isLight ? "text-black" : "text-white"
                }`}
              >
                Siam
                <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  .
                </span>
              </span>
            </button>

            {/* =================================
                Desktop Navigation
            ================================== */}

            <div className="hidden items-center gap-1 md:flex">
              {navigation.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => handleNavClick(item.href)}
                    className="group relative px-3 py-2"
                  >
                    <span
                      className={`relative z-10 text-[13px] font-medium transition-colors duration-300 ${
                        isLight
                          ? isActive
                            ? "text-black"
                            : "text-black/45 group-hover:text-black/90"
                          : isActive
                            ? "text-white"
                            : "text-white/45 group-hover:text-white/90"
                      }`}
                    >
                      {getNavLabel(item.label)}
                    </span>

                    {/* Active Indicator */}

                    {isActive && (
                      <motion.span
                        layoutId="active-nav"
                        className="absolute inset-x-2 bottom-0 h-px bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}

                    {/* Hover Background */}

                    <span
                      className={`absolute inset-0 -z-0 scale-75 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 ${
                        isLight
                          ? "bg-black/[0.035]"
                          : "bg-white/[0.025]"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* =================================
                Right Side
            ================================== */}

            <div className="hidden items-center gap-2 md:flex">
              {/* Theme Toggle */}

              <motion.button
                type="button"
                onClick={toggleTheme}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.94 }}
                className={`group flex h-10 w-10 items-center justify-center border transition-all duration-300 ${
                  isLight
                    ? "border-black/10 bg-black/[0.025] text-black/60 hover:border-black/15 hover:bg-black/[0.05] hover:text-black"
                    : "border-white/10 bg-white/[0.025] text-white/60 hover:border-white/15 hover:bg-white/[0.05] hover:text-white"
                }`}
                aria-label={
                  isLight
                    ? "Switch to dark mode"
                    : "Switch to light mode"
                }
                title={
                  isLight
                    ? "Switch to dark mode"
                    : "Switch to light mode"
                }
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isLight ? (
                    <motion.span
                      key="sun"
                      initial={{
                        opacity: 0,
                        rotate: -90,
                        scale: 0.7,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        rotate: 90,
                        scale: 0.7,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun
                        size={16}
                        strokeWidth={1.7}
                        className="transition-colors duration-300 group-hover:text-cyan-500"
                      />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="moon"
                      initial={{
                        opacity: 0,
                        rotate: 90,
                        scale: 0.7,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        rotate: -90,
                        scale: 0.7,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon
                        size={16}
                        strokeWidth={1.7}
                        className="transition-colors duration-300 group-hover:text-cyan-300"
                      />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Language Selector */}

              <div className="relative">
                <motion.button
                  type="button"
                  onClick={() =>
                    setIsLanguageOpen((prev) => !prev)
                  }
                  whileTap={{ scale: 0.97 }}
                  className={`group flex items-center gap-2 border px-3 py-2 transition-all duration-300 ${
                    isLight
                      ? isLanguageOpen
                        ? "border-black/15 bg-black/[0.06]"
                        : "border-black/10 bg-black/[0.02] hover:border-black/15 hover:bg-black/[0.04]"
                      : isLanguageOpen
                        ? "border-white/15 bg-white/[0.06]"
                        : "border-white/8 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]"
                  }`}
                  aria-label="Change language"
                  aria-expanded={isLanguageOpen}
                >
                  <Globe
                    size={15}
                    strokeWidth={1.6}
                    className={`transition-colors duration-300 ${
                      isLight
                        ? "text-black/45 group-hover:text-cyan-500"
                        : "text-white/45 group-hover:text-cyan-300"
                    }`}
                  />

                  <span
                    className={`text-[11px] font-semibold tracking-[0.12em] ${
                      isLight ? "text-black/60" : "text-white/60"
                    }`}
                  >
                    {language}
                  </span>

                  <ChevronDown
                    size={13}
                    strokeWidth={1.6}
                    className={`transition-transform duration-300 ${
                      isLight ? "text-black/30" : "text-white/30"
                    } ${
                      isLanguageOpen ? "rotate-180" : ""
                    }`}
                  />
                </motion.button>

                <AnimatePresence>
                  {isLanguageOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: -6,
                        scale: 0.96,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        y: -6,
                        scale: 0.96,
                      }}
                      transition={{
                        duration: 0.18,
                      }}
                      className={`absolute right-0 top-[calc(100%+8px)] w-32 overflow-hidden border p-1.5 shadow-2xl backdrop-blur-2xl ${
                        isLight
                          ? "border-black/10 bg-white/95"
                          : "border-white/10 bg-[#0b0b0b]/95"
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
                              handleLanguageChange(item.code)
                            }
                            className={`flex w-full items-center justify-between px-3 py-2.5 text-left transition-all duration-200 ${
                              isLight
                                ? isSelected
                                  ? "bg-black/[0.07] text-black"
                                  : "text-black/45 hover:bg-black/[0.04] hover:text-black"
                                : isSelected
                                  ? "bg-white/[0.07] text-white"
                                  : "text-white/45 hover:bg-white/[0.04] hover:text-white"
                            }`}
                          >
                            <span className="text-xs">
                              {item.label}
                            </span>

                            <span
                              className={`text-[9px] font-semibold tracking-widest ${
                                isLight
                                  ? "text-black/25"
                                  : "text-white/25"
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

              {/* Let's Talk */}

              <motion.button
                type="button"
                onClick={() => handleNavClick("#contact")}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                className={`group ml-2 flex items-center gap-2 border px-4 py-2.5 text-xs font-semibold transition-all duration-300 ${
                  isLight
                    ? "border-black/15 bg-black text-white hover:bg-black/90"
                    : "border-white/15 bg-white text-black hover:bg-white/90"
                }`}
              >
                <span>
                  {language === "BN" ? "কথা বলুন" : "Let's Talk"}
                </span>

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </motion.button>
            </div>

            {/* =================================
                Mobile Actions
            ================================== */}

            <div className="flex items-center gap-2 md:hidden">
              {/* Mobile Theme */}

              <motion.button
                type="button"
                onClick={toggleTheme}
                whileTap={{ scale: 0.94 }}
                className={`flex h-10 w-10 items-center justify-center border transition-all duration-300 ${
                  isLight
                    ? "border-black/10 bg-black/[0.025] text-black/60 hover:border-black/15 hover:text-black"
                    : "border-white/10 bg-white/[0.025] text-white/60 hover:border-white/15 hover:text-white"
                }`}
                aria-label={
                  isLight
                    ? "Switch to dark mode"
                    : "Switch to light mode"
                }
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isLight ? (
                    <motion.span
                      key="mobile-sun"
                      initial={{
                        opacity: 0,
                        rotate: -90,
                        scale: 0.7,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        rotate: 90,
                        scale: 0.7,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun size={17} strokeWidth={1.7} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="mobile-moon"
                      initial={{
                        opacity: 0,
                        rotate: 90,
                        scale: 0.7,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        rotate: -90,
                        scale: 0.7,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon size={17} strokeWidth={1.7} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Mobile Language */}

              <div className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setIsLanguageOpen((prev) => !prev)
                  }
                  className={`flex h-10 items-center gap-1.5 border px-2.5 transition-colors duration-300 ${
                    isLight
                      ? "border-black/10 bg-black/[0.025] text-black/60 hover:border-black/15 hover:text-black"
                      : "border-white/10 bg-white/[0.025] text-white/60 hover:border-white/15 hover:text-white"
                  }`}
                  aria-label="Change language"
                  aria-expanded={isLanguageOpen}
                >
                  <Globe size={15} strokeWidth={1.6} />

                  <span className="text-[10px] font-semibold tracking-wider">
                    {language}
                  </span>
                </button>

                <AnimatePresence>
                  {isLanguageOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: -6,
                        scale: 0.96,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        y: -6,
                        scale: 0.96,
                      }}
                      transition={{
                        duration: 0.18,
                      }}
                      className={`absolute right-0 top-[calc(100%+8px)] w-32 overflow-hidden border p-1.5 shadow-2xl backdrop-blur-2xl ${
                        isLight
                          ? "border-black/10 bg-white/95"
                          : "border-white/10 bg-[#0b0b0b]/95"
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
                              handleLanguageChange(item.code)
                            }
                            className={`flex w-full items-center justify-between px-3 py-2.5 text-left transition-all duration-200 ${
                              isLight
                                ? isSelected
                                  ? "bg-black/[0.07] text-black"
                                  : "text-black/45 hover:bg-black/[0.04] hover:text-black"
                                : isSelected
                                  ? "bg-white/[0.07] text-white"
                                  : "text-white/45 hover:bg-white/[0.04] hover:text-white"
                            }`}
                          >
                            <span className="text-xs">
                              {item.label}
                            </span>

                            <span
                              className={`text-[9px] font-semibold tracking-widest ${
                                isLight
                                  ? "text-black/25"
                                  : "text-white/25"
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

              {/* Mobile Menu Button */}

              <motion.button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                whileTap={{ scale: 0.94 }}
                className={`flex h-10 w-10 items-center justify-center border transition-all duration-300 ${
                  isLight
                    ? isOpen
                      ? "border-black/20 bg-black/[0.07]"
                      : "border-black/10 bg-black/[0.025]"
                    : isOpen
                      ? "border-white/20 bg-white/[0.07]"
                      : "border-white/10 bg-white/[0.025]"
                }`}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
              >
                <AnimatePresence mode="wait" initial={false}>
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
                      <X size={19} strokeWidth={1.7} />
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
                      <Menu size={19} strokeWidth={1.7} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* =====================================
              Mobile Menu
          ====================================== */}

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="overflow-hidden md:hidden"
              >
                <div
                  className={`border-t pt-4 ${
                    isLight
                      ? "border-black/8"
                      : "border-white/8"
                  }`}
                >
                  {/* Mobile Navigation */}

                  <div className="space-y-1">
                    {navigation.map((item, index) => {
                      const sectionId =
                        item.href.replace("#", "");

                      const isActive =
                        activeSection === sectionId;

                      return (
                        <motion.button
                          key={item.href}
                          type="button"
                          initial={{
                            opacity: 0,
                            x: -12,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            duration: 0.25,
                            delay: index * 0.04,
                          }}
                          onClick={() =>
                            handleNavClick(item.href)
                          }
                          className={`group flex w-full items-center justify-between border px-4 py-3.5 text-left transition-all duration-300 ${
                            isLight
                              ? isActive
                                ? "border-black/10 bg-black/[0.045]"
                                : "border-transparent hover:border-black/5 hover:bg-black/[0.025]"
                              : isActive
                                ? "border-white/10 bg-white/[0.045]"
                                : "border-transparent hover:border-white/5 hover:bg-white/[0.025]"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span
                              className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                                isActive
                                  ? "bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]"
                                  : isLight
                                    ? "bg-black/15 group-hover:bg-black/40"
                                    : "bg-white/15 group-hover:bg-white/40"
                              }`}
                            />

                            <span
                              className={`text-sm font-medium transition-colors duration-300 ${
                                isLight
                                  ? isActive
                                    ? "text-black"
                                    : "text-black/50 group-hover:text-black"
                                  : isActive
                                    ? "text-white"
                                    : "text-white/50 group-hover:text-white"
                              }`}
                            >
                              {getNavLabel(item.label)}
                            </span>
                          </div>

                          <ArrowUpRight
                            size={15}
                            strokeWidth={1.5}
                            className={`transition-all duration-300 ${
                              isActive
                                ? "text-cyan-500"
                                : isLight
                                  ? "text-black/15 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black/50"
                                  : "text-white/15 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/50"
                            }`}
                          />
                        </motion.button>
                      );
                    })}
                  </div>

                  {/* Mobile Let's Talk */}

                  <motion.button
                    type="button"
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: 0.2,
                    }}
                    onClick={() =>
                      handleNavClick("#contact")
                    }
                    className={`group mt-4 flex w-full items-center justify-center gap-2 border px-5 py-3.5 text-sm font-semibold transition-all duration-300 ${
                      isLight
                        ? "border-black/15 bg-black text-white hover:bg-black/90"
                        : "border-white/15 bg-white text-black hover:bg-white/90"
                    }`}
                  >
                    <span>
                      {language === "BN"
                        ? "কথা বলুন"
                        : "Let's Talk"}
                    </span>

                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.8}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </motion.button>

                  {/* Mobile Menu Footer */}

                  <div
                    className={`mt-5 flex items-center justify-between border-t pt-4 ${
                      isLight
                        ? "border-black/5"
                        : "border-white/5"
                    }`}
                  >
                    <span
                      className={`text-[10px] uppercase tracking-[0.18em] ${
                        isLight
                          ? "text-black/20"
                          : "text-white/20"
                      }`}
                    >
                      Siam Talukder
                    </span>

                    <span
                      className={`text-[10px] ${
                        isLight
                          ? "text-black/20"
                          : "text-white/20"
                      }`}
                    >
                      MERN Stack Developer
                    </span>
                  </div>
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