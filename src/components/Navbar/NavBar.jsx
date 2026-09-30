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
      item.href.replace("#", ""),
    );

    const handleActiveSection = () => {
      const scrollPosition = window.scrollY + 180;

      let currentSection = "home";

      for (const id of sectionIds) {
        const section = document.getElementById(id);

        if (!section) continue;

        const sectionTop =
          section.getBoundingClientRect().top +
          window.scrollY;

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

    window.addEventListener("resize", handleActiveSection);

    return () => {
      window.removeEventListener(
        "scroll",
        handleActiveSection,
      );

      window.removeEventListener(
        "resize",
        handleActiveSection,
      );
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
     Close Dropdown on Outside Click
  ====================================== */

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isLanguageOpen &&
        !event.target.closest("[data-language-menu]")
      ) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick,
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

      const navbar = document.querySelector("header");

      const navbarHeight = navbar
        ? navbar.getBoundingClientRect().height
        : 90;

      const extraSpacing = 20;

      const sectionPosition =
        section.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight -
        extraSpacing;

      window.scrollTo({
        top: Math.max(0, sectionPosition),
        behavior: "smooth",
      });
    };

    if (window.innerWidth < 768) {
      setTimeout(() => {
        scrollToSection();
      }, 320);
    } else {
      requestAnimationFrame(() => {
        scrollToSection();
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
    setIsOpen(false);
  };

  /* =====================================
     Navigation Label
  ====================================== */

  const getNavLabel = (label) => {
    if (language === "BN") {
      return (
        {
          Home: "হোম",
          About: "আমার সম্পর্কে",
          Skills: "দক্ষতা",
          Projects: "প্রজেক্ট",
          Contact: "যোগাযোগ",
        }[label] || label
      );
    }

    return label;
  };

  /* =====================================
     Theme Classes
  ====================================== */

  const navText = isLight
    ? "text-black"
    : "text-white";

  const mutedText = isLight
    ? "text-black/45"
    : "text-white/45";

  const borderColor = isLight
    ? "border-black/10"
    : "border-white/10";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto px-3 pt-3 sm:px-5 sm:pt-4 lg:px-8">
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
                ? "rgba(255,255,255,0.88)"
                : "rgba(255,255,255,0.58)"
              : isScrolled
                ? "rgba(7,7,7,0.86)"
                : "rgba(5,5,5,0.52)",
            borderColor: isLight
              ? isScrolled
                ? "rgba(0,0,0,0.12)"
                : "rgba(0,0,0,0.07)"
              : isScrolled
                ? "rgba(255,255,255,0.13)"
                : "rgba(255,255,255,0.07)",
            boxShadow: isLight
              ? isScrolled
                ? "0 20px 60px rgba(0,0,0,0.10)"
                : "0 10px 35px rgba(0,0,0,0.04)"
              : isScrolled
                ? "0 20px 60px rgba(0,0,0,0.32)"
                : "0 10px 35px rgba(0,0,0,0.10)",
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
              Navbar Main Row
          ====================================== */}

          <div className="flex min-h-[66px] items-center justify-between px-4 sm:px-6 lg:px-7">
            {/* =================================
                Logo
            ================================== */}

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

            {/* =================================
                Desktop Navigation
            ================================== */}

            <nav
              className="hidden items-center md:flex"
              aria-label="Primary navigation"
            >
              <div
                className={`flex items-center gap-0.5 rounded-full border px-1 py-1 ${
                  isLight
                    ? "border-black/[0.07] bg-black/[0.025]"
                    : "border-white/[0.07] bg-white/[0.025]"
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
                              ? "bg-black/[0.055]"
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
                              ? "text-black"
                              : "text-white"
                            : `${mutedText} group-hover:${
                                isLight
                                  ? "text-black/85"
                                  : "text-white/90"
                              }`
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

            {/* =================================
                Desktop Right Actions
            ================================== */}

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
                        ? "border-black/15 bg-black/[0.06]"
                        : "border-black/[0.08] bg-black/[0.025] hover:border-black/15 hover:bg-black/[0.045]"
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
                        ? "text-black/45 group-hover:text-cyan-500"
                        : "text-white/45 group-hover:text-cyan-300"
                    }
                  />

                  <span
                    className={`text-[10px] font-semibold tracking-[0.14em] ${
                      isLight
                        ? "text-black/60"
                        : "text-white/65"
                    }`}
                  >
                    {language}
                  </span>

                  <ChevronDown
                    size={12}
                    strokeWidth={1.7}
                    className={`transition-transform duration-300 ${
                      isLight
                        ? "text-black/30"
                        : "text-white/30"
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
                      transition={{
                        duration: 0.2,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`absolute right-0 top-[calc(100%+9px)] w-36 overflow-hidden rounded-2xl border p-1.5 shadow-2xl backdrop-blur-2xl ${
                        isLight
                          ? "border-black/10 bg-white/95"
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
                                item.code,
                              )
                            }
                            className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left transition-all duration-200 ${
                              isLight
                                ? isSelected
                                  ? "bg-black/[0.065] text-black"
                                  : "text-black/45 hover:bg-black/[0.035] hover:text-black"
                                : isSelected
                                  ? "bg-white/[0.07] text-white"
                                  : "text-white/45 hover:bg-white/[0.04] hover:text-white"
                            }`}
                          >
                            <span className="text-xs font-medium">
                              {item.label}
                            </span>

                            <span
                              className={`text-[9px] font-semibold tracking-[0.16em] ${
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

              {/* Theme */}

              <motion.button
                type="button"
                onClick={toggleTheme}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.94 }}
                className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                  isLight
                    ? "border-black/[0.08] bg-black/[0.025] text-black/55 hover:border-black/15 hover:bg-black/[0.05] hover:text-black"
                    : "border-white/[0.08] bg-white/[0.025] text-white/55 hover:border-white/15 hover:bg-white/[0.05] hover:text-white"
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
                      transition={{
                        duration: 0.22,
                      }}
                    >
                      <Sun
                        size={15}
                        strokeWidth={1.7}
                        className="hover:text-cyan-500"
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
                      transition={{
                        duration: 0.22,
                      }}
                    >
                      <Moon
                        size={15}
                        strokeWidth={1.7}
                        className="hover:text-cyan-300"
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
                whileTap={{
                  scale: 0.98,
                }}
                className={`group ml-1 flex h-10 items-center gap-2 rounded-full border px-4 text-[11px] font-semibold transition-all duration-300 ${
                  isLight
                    ? "border-black bg-black text-white hover:bg-black/90"
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

            {/* =================================
                Mobile Actions
            ================================== */}

            <div className="flex items-center gap-1.5 md:hidden">
              {/* Mobile Language */}

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
                  className={`flex h-10 items-center gap-1.5 rounded-full border px-3 transition-all duration-300 ${
                    isLight
                      ? "border-black/[0.08] bg-black/[0.025] text-black/60"
                      : "border-white/[0.08] bg-white/[0.025] text-white/60"
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
                      transition={{
                        duration: 0.2,
                      }}
                      className={`absolute right-0 top-[calc(100%+8px)] w-32 overflow-hidden rounded-2xl border p-1.5 shadow-2xl backdrop-blur-2xl ${
                        isLight
                          ? "border-black/10 bg-white/95"
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
                                item.code,
                              )
                            }
                            className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left transition-all duration-200 ${
                              isLight
                                ? isSelected
                                  ? "bg-black/[0.065] text-black"
                                  : "text-black/45 hover:bg-black/[0.035] hover:text-black"
                                : isSelected
                                  ? "bg-white/[0.07] text-white"
                                  : "text-white/45 hover:bg-white/[0.04] hover:text-white"
                            }`}
                          >
                            <span className="text-xs font-medium">
                              {item.label}
                            </span>

                            <span className="text-[9px] font-semibold tracking-[0.15em] opacity-30">
                              {item.code}
                            </span>
                          </button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Theme */}

              <motion.button
                type="button"
                onClick={toggleTheme}
                whileTap={{ scale: 0.94 }}
                className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                  isLight
                    ? "border-black/[0.08] bg-black/[0.025] text-black/55"
                    : "border-white/[0.08] bg-white/[0.025] text-white/55"
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
                      transition={{
                        duration: 0.22,
                      }}
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
                      transition={{
                        duration: 0.22,
                      }}
                    >
                      <Moon
                        size={16}
                        strokeWidth={1.7}
                      />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Mobile Menu */}

              <motion.button
                type="button"
                onClick={() => {
                  setIsLanguageOpen(false);
                  setIsOpen((prev) => !prev);
                }}
                whileTap={{ scale: 0.94 }}
                className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                  isLight
                    ? isOpen
                      ? "border-black/15 bg-black/[0.07]"
                      : "border-black/[0.08] bg-black/[0.025]"
                    : isOpen
                      ? "border-white/15 bg-white/[0.07]"
                      : "border-white/[0.08] bg-white/[0.025]"
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
                      transition={{
                        duration: 0.18,
                      }}
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
                      transition={{
                        duration: 0.18,
                      }}
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
                  duration: 0.32,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="overflow-hidden md:hidden"
              >
                <div
                  className={`mx-3 mb-3 border-t pt-3 sm:mx-4 ${
                    isLight
                      ? "border-black/[0.07]"
                      : "border-white/[0.07]"
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
                            x: -14,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.045,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          onClick={() =>
                            handleNavClick(item.href)
                          }
                          className={`group flex w-full items-center justify-between rounded-xl border px-4 py-3.5 text-left transition-all duration-300 ${
                            isLight
                              ? isActive
                                ? "border-black/10 bg-black/[0.045]"
                                : "border-transparent hover:bg-black/[0.025]"
                              : isActive
                                ? "border-white/10 bg-white/[0.045]"
                                : "border-transparent hover:bg-white/[0.025]"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <motion.span
                              animate={{
                                scale: isActive
                                  ? 1
                                  : 0.75,
                                opacity: isActive
                                  ? 1
                                  : 0.45,
                              }}
                              className={`h-1.5 w-1.5 rounded-full ${
                                isActive
                                  ? "bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.65)]"
                                  : isLight
                                    ? "bg-black/20"
                                    : "bg-white/20"
                              }`}
                            />

                            <span
                              className={`text-sm font-medium transition-colors duration-300 ${
                                isLight
                                  ? isActive
                                    ? "text-black"
                                    : "text-black/50 group-hover:text-black/85"
                                  : isActive
                                    ? "text-white"
                                    : "text-white/50 group-hover:text-white/85"
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
                                ? "text-cyan-400"
                                : isLight
                                  ? "text-black/15 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black/45"
                                  : "text-white/15 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/45"
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
                      duration: 0.35,
                      delay: 0.25,
                    }}
                    onClick={() =>
                      handleNavClick("#contact")
                    }
                    className={`group mt-3 flex w-full items-center justify-center gap-2 rounded-full border px-5 py-3.5 text-sm font-semibold transition-all duration-300 ${
                      isLight
                        ? "border-black bg-black text-white hover:bg-black/90"
                        : "border-white bg-white text-black hover:bg-white/90"
                    }`}
                  >
                    <span>
                      {language === "BN"
                        ? "কথা বলুন"
                        : "Let's Talk"}
                    </span>

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.8}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </motion.button>

                  {/* Mobile Footer */}

                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.32,
                    }}
                    className={`mt-4 flex items-center justify-between border-t px-1 pt-4 ${
                      isLight
                        ? "border-black/[0.05]"
                        : "border-white/[0.05]"
                    }`}
                  >
                    <span
                      className={`text-[9px] uppercase tracking-[0.2em] ${
                        isLight
                          ? "text-black/20"
                          : "text-white/20"
                      }`}
                    >
                      Siam Talukder
                    </span>

                    <span
                      className={`text-[9px] ${
                        isLight
                          ? "text-black/20"
                          : "text-white/20"
                      }`}
                    >
                      MERN Stack Developer
                    </span>
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