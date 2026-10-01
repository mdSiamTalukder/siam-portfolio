import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import translations from "../../data/translations";

const socialLinks = [
  {
    key: "github",
    label: "GitHub",
    value: "github.com/mdSiamTalukder",
    href: "https://github.com/mdSiamTalukder",
    icon: "GH",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/mdsiamtalukder",
    href: "https://www.linkedin.com/in/mdsiamtalukder/",
    icon: "in",
  },
  {
    key: "email",
    label: "Email",
    value: "siamtalukder533@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=siamtalukder533@gmail.com",
    icon: Mail,
  },
];

/* =========================================
   Contact Animations
========================================= */

const headingContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const headingItem = {
  hidden: {
    opacity: 0,
    y: 22,
    filter: "blur(7px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const leftContentReveal = {
  hidden: {
    opacity: 0,
    y: 45,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const socialReveal = {
  hidden: {
    opacity: 0,
    x: -28,
    scale: 0.97,
  },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      delay: index * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const formReveal = {
  hidden: {
    opacity: 0,
    scale: 0.94,
    y: 35,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.95,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const formItemReveal = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: 0.25 + index * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Contact = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const t = translations[language];
  const isLight = theme === "light";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status.message) {
      setStatus({
        type: "",
        message: "",
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      const response = await fetch(
        "https://siam-portfolio-api.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || t.contact.form.requiredError,
        );
      }

      setStatus({
        type: "success",
        message: t.contact.form.success,
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus({
        type: "error",
        message:
          error.message || t.contact.form.error,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className={`relative overflow-hidden border-t py-20 transition-colors duration-500 sm:py-28 lg:py-32 ${
        isLight
          ? "border-slate-200 bg-slate-50"
          : "border-white/5 bg-[#050505]"
      }`}
    >
      {/* =================================
          Background Glows
      ================================== */}

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{
          duration: 1.4,
          ease: "easeOut",
        }}
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/[0.045] blur-[120px]"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{
          duration: 1.5,
          delay: 0.15,
          ease: "easeOut",
        }}
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-500/[0.05] blur-[120px]"
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          duration: 1.5,
          delay: 0.25,
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.018] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =================================
            Section Heading
        ================================== */}

        <motion.div
          variants={headingContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-3xl"
        >
          <motion.div
            variants={headingItem}
            className="mb-5 flex items-center gap-3"
          >
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-px bg-gradient-to-r from-cyan-400 to-violet-400"
            />

            <span
              className={`bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-xs font-semibold uppercase tracking-[0.22em] text-transparent ${
                isLight ? "drop-shadow-sm" : ""
              }`}
            >
              {t.contact.badge}
            </span>
          </motion.div>

          <motion.h2
            variants={headingItem}
            className={`text-3xl font-semibold leading-tight tracking-[-0.03em] transition-colors duration-500 sm:text-4xl md:text-5xl ${
              isLight ? "text-slate-950" : "text-white"
            }`}
          >
            {t.contact.titleStart}{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 bg-clip-text text-transparent">
              {t.contact.titleEnd}
            </span>
          </motion.h2>

          <motion.div
            variants={headingItem}
            className="mt-5 h-px w-24 bg-gradient-to-r from-cyan-400 via-blue-400 to-transparent"
          />

          <motion.p
            variants={headingItem}
            className={`mt-6 max-w-2xl text-sm leading-7 transition-colors duration-500 sm:text-base sm:leading-8 ${
              isLight ? "text-slate-700" : "text-white/45"
            }`}
          >
            {t.contact.description}
          </motion.p>
        </motion.div>

        {/* =================================
            Contact Content
        ================================== */}

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

          {/* =================================
              Left Side
          ================================== */}

          <motion.div
            variants={leftContentReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col justify-between"
          >
            <div>

              {/* Availability */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.92,
                  x: -15,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }}
                viewport={{
                  once: false,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`inline-flex items-center gap-2 border px-3 py-2 transition-colors duration-500 ${
                  isLight
                    ? "border-emerald-300 bg-emerald-50"
                    : "border-emerald-400/15 bg-emerald-400/[0.04]"
                }`}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>

                <span
                  className={`text-[10px] font-medium uppercase tracking-[0.18em] ${
                    isLight
                      ? "text-emerald-700"
                      : "text-emerald-300/80"
                  }`}
                >
                  {t.contact.availability}
                </span>
              </motion.div>

              <motion.h3
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
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.65,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`mt-7 text-2xl font-semibold tracking-tight transition-colors duration-500 sm:text-3xl ${
                  isLight
                    ? "text-slate-950"
                    : "text-white"
                }`}
              >
                {t.contact.talkTitleStart}{" "}
                <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 bg-clip-text text-transparent">
                  {t.contact.talkTitleEnd}
                </span>
              </motion.h3>

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
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.18,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`mt-5 max-w-md text-sm leading-7 transition-colors duration-500 ${
                  isLight
                    ? "text-slate-700"
                    : "text-white/40"
                }`}
              >
                {t.contact.talkDescription}
              </motion.p>
            </div>

            {/* Location */}

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
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`mt-10 flex items-center gap-3 border-t pt-6 transition-colors duration-500 ${
                isLight
                  ? "border-slate-200"
                  : "border-white/5"
              }`}
            >
              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: -4,
                }}
                transition={{
                  duration: 0.25,
                }}
                className={`flex h-10 w-10 items-center justify-center border transition-colors duration-300 ${
                  isLight
                    ? "border-slate-200 bg-white text-cyan-600 shadow-sm"
                    : "border-white/10 bg-white/[0.025] text-cyan-300"
                }`}
              >
                <MapPin
                  size={17}
                  strokeWidth={1.6}
                />
              </motion.div>

              <div>
                <p
                  className={`text-[10px] uppercase tracking-[0.18em] ${
                    isLight
                      ? "text-slate-500"
                      : "text-white/25"
                  }`}
                >
                  {t.contact.basedIn}
                </p>

                <p
                  className={`mt-1 text-sm ${
                    isLight
                      ? "text-slate-800"
                      : "text-white/60"
                  }`}
                >
                  {t.contact.location}
                </p>
              </div>
            </motion.div>

            {/* Social Links */}

            <div className="mt-8 space-y-3">
              {socialLinks.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.key}
                    custom={index}
                    variants={socialReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: false,
                      amount: 0.25,
                    }}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{
                      x: 7,
                      transition: {
                        duration: 0.25,
                        ease: "easeOut",
                      },
                    }}
                    className={`group relative flex items-center justify-between overflow-hidden border px-4 py-3 transition-all duration-300 ${
                      isLight
                        ? "border-slate-200 bg-white shadow-sm hover:border-cyan-300 hover:bg-slate-50"
                        : "border-white/5 bg-white/[0.015] hover:border-cyan-400/15 hover:bg-white/[0.03]"
                    }`}
                  >
                    {/* Hover Line */}

                    <motion.span
                      initial={{
                        scaleX: 0,
                      }}
                      whileHover={{
                        scaleX: 1,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="absolute bottom-0 left-0 h-px w-full origin-left bg-gradient-to-r from-cyan-400 to-violet-400"
                    />

                    <div className="flex min-w-0 items-center gap-3">
                      <motion.div
                        whileHover={{
                          scale: 1.08,
                          rotate: 3,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        className={`flex h-8 w-8 shrink-0 items-center justify-center border text-[10px] font-semibold uppercase tracking-tight transition-all duration-300 ${
                          isLight
                            ? "border-slate-200 bg-slate-50 text-slate-600 group-hover:border-cyan-300 group-hover:text-cyan-600"
                            : "border-white/10 bg-white/[0.025] text-white/45 group-hover:border-cyan-400/20 group-hover:text-cyan-300"
                        }`}
                      >
                        {typeof Icon === "string" ? (
                          Icon
                        ) : (
                          <Icon
                            size={16}
                            strokeWidth={1.6}
                          />
                        )}
                      </motion.div>

                      <div className="min-w-0">
                        <p
                          className={`text-xs font-medium ${
                            isLight
                              ? "text-slate-800"
                              : "text-white/65"
                          }`}
                        >
                          {t.contact[item.key]}
                        </p>

                        <p
                          className={`mt-0.5 truncate text-[11px] ${
                            isLight
                              ? "text-slate-500"
                              : "text-white/25"
                          }`}
                        >
                          {item.value}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.5}
                      className={`shrink-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
                        isLight
                          ? "text-slate-400 group-hover:text-cyan-600"
                          : "text-white/20 group-hover:text-cyan-300"
                      }`}
                    />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* =================================
              Contact Form
          ================================== */}

          <motion.div
            variants={formReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.2,
            }}
            whileHover={{
              y: -3,
              transition: {
                duration: 0.35,
                ease: "easeOut",
              },
            }}
            className={`group/form relative overflow-hidden border p-5 backdrop-blur-xl transition-all duration-500 sm:p-7 lg:p-8 ${
              isLight
                ? "border-slate-200 bg-white shadow-sm hover:border-slate-300"
                : "border-white/10 bg-white/[0.025] hover:border-white/15"
            }`}
          >
            {/* Form Glow */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: false,
              }}
              transition={{
                duration: 1.2,
                delay: 0.3,
              }}
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/[0.035] blur-[90px]"
            />

            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: false,
              }}
              transition={{
                duration: 1.2,
                delay: 0.5,
              }}
              className="pointer-events-none absolute -bottom-28 -left-28 h-56 w-56 rounded-full bg-violet-500/[0.025] blur-[90px]"
            />

            {/* Animated Border */}

            <motion.div
              initial={{
                scaleX: 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: false,
              }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-0 right-0 top-0 h-px origin-left bg-gradient-to-r from-cyan-400 via-violet-400 to-transparent"
            />

            <div className="relative">

              <motion.div
                custom={0}
                variants={formItemReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: 0.2,
                }}
                className="mb-7"
              >
                <p
                  className={`text-xs font-medium uppercase tracking-[0.18em] ${
                    isLight
                      ? "text-slate-500"
                      : "text-white/30"
                  }`}
                >
                  {t.contact.sendMessageTitle}
                </p>

                <p
                  className={`mt-2 text-sm ${
                    isLight
                      ? "text-slate-600"
                      : "text-white/40"
                  }`}
                >
                  {t.contact.sendMessageDescription}
                </p>
              </motion.div>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* Name */}

                <motion.div
                  custom={1}
                  variants={formItemReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: false,
                    amount: 0.2,
                  }}
                  className="group/input"
                >
                  <label
                    htmlFor="name"
                    className={`mb-2 block text-xs font-medium uppercase tracking-[0.14em] ${
                      isLight
                        ? "text-slate-600"
                        : "text-white/45"
                    }`}
                  >
                    {t.contact.form.name}
                  </label>

                  <div className="relative">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={
                        t.contact.form.namePlaceholder
                      }
                      required
                      disabled={isSubmitting}
                      className={`peer w-full border px-4 py-3.5 text-sm outline-none transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 ${
                        isLight
                          ? "border-slate-300 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white"
                          : "border-white/10 bg-black/20 text-white placeholder:text-white/20 focus:border-cyan-400/40 focus:bg-white/[0.025]"
                      }`}
                    />

                    <span className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-cyan-400 to-violet-400 transition-all duration-500 peer-focus:w-full" />
                  </div>
                </motion.div>

                {/* Email */}

                <motion.div
                  custom={2}
                  variants={formItemReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: false,
                    amount: 0.2,
                  }}
                  className="group/input"
                >
                  <label
                    htmlFor="email"
                    className={`mb-2 block text-xs font-medium uppercase tracking-[0.14em] ${
                      isLight
                        ? "text-slate-600"
                        : "text-white/45"
                    }`}
                  >
                    {t.contact.form.email}
                  </label>

                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={
                        t.contact.form.emailPlaceholder
                      }
                      required
                      disabled={isSubmitting}
                      className={`peer w-full border px-4 py-3.5 text-sm outline-none transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 ${
                        isLight
                          ? "border-slate-300 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white"
                          : "border-white/10 bg-black/20 text-white placeholder:text-white/20 focus:border-cyan-400/40 focus:bg-white/[0.025]"
                      }`}
                    />

                    <span className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-cyan-400 to-violet-400 transition-all duration-500 peer-focus:w-full" />
                  </div>
                </motion.div>

                {/* Message */}

                <motion.div
                  custom={3}
                  variants={formItemReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: false,
                    amount: 0.2,
                  }}
                  className="group/input"
                >
                  <label
                    htmlFor="message"
                    className={`mb-2 block text-xs font-medium uppercase tracking-[0.14em] ${
                      isLight
                        ? "text-slate-600"
                        : "text-white/45"
                    }`}
                  >
                    {t.contact.form.message}
                  </label>

                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={
                        t.contact.form.messagePlaceholder
                      }
                      rows={6}
                      required
                      disabled={isSubmitting}
                      className={`peer w-full resize-none border px-4 py-3.5 text-sm leading-6 outline-none transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 ${
                        isLight
                          ? "border-slate-300 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white"
                          : "border-white/10 bg-black/20 text-white placeholder:text-white/20 focus:border-cyan-400/40 focus:bg-white/[0.025]"
                      }`}
                    />

                    <span className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-cyan-400 to-violet-400 transition-all duration-500 peer-focus:w-full" />
                  </div>
                </motion.div>

                {/* Status Message */}

                {status.message && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -10,
                      scale: 0.97,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`border px-4 py-3 text-sm ${
                      status.type === "success"
                        ? isLight
                          ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                          : "border-emerald-400/20 bg-emerald-400/[0.05] text-emerald-300"
                        : isLight
                          ? "border-red-300 bg-red-50 text-red-700"
                          : "border-red-400/20 bg-red-400/[0.05] text-red-300"
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}

                {/* Submit */}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={
                    !isSubmitting
                      ? {
                          y: -3,
                          scale: 1.005,
                        }
                      : {}
                  }
                  whileTap={
                    !isSubmitting
                      ? {
                          scale: 0.98,
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                  }}
                  className="group relative flex w-full items-center justify-center gap-2 overflow-hidden border border-slate-800 bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {/* Button Shine */}

                  <motion.span
                    initial={{
                      x: "-120%",
                    }}
                    whileHover={{
                      x: "120%",
                    }}
                    transition={{
                      duration: 0.7,
                      ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute inset-y-0 w-1/3 -skew-x-12 bg-white/[0.08]"
                  />

                  <span className="relative z-10">
                    {isSubmitting
                      ? t.contact.form.sending
                      : t.contact.form.send}
                  </span>

                  <Send
                    size={16}
                    strokeWidth={1.8}
                    className={`relative z-10 transition-transform duration-300 ${
                      isSubmitting
                        ? "animate-pulse"
                        : "group-hover:translate-x-1 group-hover:-translate-y-1"
                    }`}
                  />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* =================================
            Footer
        ================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 18,
            filter: "blur(5px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          transition={{
            duration: 0.65,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`mt-20 flex flex-col gap-4 border-t pt-6 transition-colors duration-500 sm:flex-row sm:items-center sm:justify-between ${
            isLight
              ? "border-slate-200"
              : "border-white/5"
          }`}
        >
          <p
            className={`text-xs ${
              isLight
                ? "text-slate-500"
                : "text-white/25"
            }`}
          >
            © {new Date().getFullYear()} Siam Talukder.{" "}
            {t.contact.footer.copyright}
          </p>

          <a
            href="#home"
            className={`group flex items-center gap-2 text-xs transition-colors duration-300 ${
              isLight
                ? "text-slate-500 hover:text-slate-950"
                : "text-white/30 hover:text-white"
            }`}
          >
            <span>
              {t.contact.footer.backToTop}
            </span>

            <ArrowUpRight
              size={14}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;