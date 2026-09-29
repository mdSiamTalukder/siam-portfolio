
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
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

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];

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
      className="relative overflow-hidden border-t border-white/5 bg-[#050505] py-24 sm:py-28 lg:py-32"
    >
      {/* =================================
          Background Glows
      ================================== */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/[0.045] blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-500/[0.05] blur-[120px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.02] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =================================
            Section Heading
        ================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-cyan-400 to-violet-400" />

            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-xs font-semibold uppercase tracking-[0.22em] text-transparent">
              {t.contact.badge}
            </span>
          </div>

          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-4xl md:text-5xl">
            {t.contact.titleStart}{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              {t.contact.titleEnd}
            </span>
          </h2>

          <div className="mt-5 h-px w-24 bg-gradient-to-r from-cyan-400 via-blue-400 to-transparent" />

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
            {t.contact.description}
          </p>
        </motion.div>

        {/* =================================
            Contact Content
        ================================== */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* =================================
              Left Side
          ================================== */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col justify-between"
          >
            <div>
              {/* Availability */}
              <div className="inline-flex items-center gap-2 border border-emerald-400/15 bg-emerald-400/[0.04] px-3 py-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>

                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-emerald-300/80">
                  {t.contact.availability}
                </span>
              </div>

              <h3 className="mt-7 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {t.contact.talkTitleStart}{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                  {t.contact.talkTitleEnd}
                </span>
              </h3>

              <p className="mt-5 max-w-md text-sm leading-7 text-white/40">
                {t.contact.talkDescription}
              </p>
            </div>

            {/* Location */}
            <div className="mt-10 flex items-center gap-3 border-t border-white/5 pt-6">
              <div className="flex h-10 w-10 items-center justify-center border border-white/10 bg-white/[0.025] text-cyan-300">
                <MapPin size={17} strokeWidth={1.6} />
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/25">
                  {t.contact.basedIn}
                </p>

                <p className="mt-1 text-sm text-white/60">
                  {t.contact.location}
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 space-y-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.key}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="group flex items-center justify-between border border-white/5 bg-white/[0.015] px-4 py-3 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.03]"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-white/10 bg-white/[0.025] text-[10px] font-semibold uppercase tracking-tight text-white/45 transition-all duration-300 group-hover:border-cyan-400/20 group-hover:text-cyan-300">
                        {typeof Icon === "string" ? (
                          Icon
                        ) : (
                          <Icon size={16} strokeWidth={1.6} />
                        )}
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs font-medium text-white/65">
                          {t.contact[item.key]}
                        </p>

                        <p className="mt-0.5 truncate text-[11px] text-white/25">
                          {item.value}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.5}
                      className="shrink-0 text-white/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300"
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
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative overflow-hidden border border-white/10 bg-white/[0.025] p-5 backdrop-blur-xl sm:p-7 lg:p-8"
          >
            {/* Form Glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/[0.035] blur-[90px]" />

            <div className="relative">
              <div className="mb-7">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/30">
                  {t.contact.sendMessageTitle}
                </p>

                <p className="mt-2 text-sm text-white/40">
                  {t.contact.sendMessageDescription}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-white/45"
                  >
                    {t.contact.form.name}
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.contact.form.namePlaceholder}
                    required
                    disabled={isSubmitting}
                    className="w-full border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:border-cyan-400/40 focus:bg-white/[0.025] disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-white/45"
                  >
                    {t.contact.form.email}
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.contact.form.emailPlaceholder}
                    required
                    disabled={isSubmitting}
                    className="w-full border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:border-cyan-400/40 focus:bg-white/[0.025] disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-white/45"
                  >
                    {t.contact.form.message}
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.contact.form.messagePlaceholder}
                    rows={6}
                    required
                    disabled={isSubmitting}
                    className="w-full resize-none border border-white/10 bg-black/20 px-4 py-3.5 text-sm leading-6 text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:border-cyan-400/40 focus:bg-white/[0.025] disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>

                {/* Status Message */}
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`border px-4 py-3 text-sm ${
                      status.type === "success"
                        ? "border-emerald-400/20 bg-emerald-400/[0.05] text-emerald-300"
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
                  whileHover={!isSubmitting ? { y: -2 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  className="group flex w-full items-center justify-center gap-2 border border-white/15 bg-white px-5 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <span>
                    {isSubmitting
                      ? t.contact.form.sending
                      : t.contact.form.send}
                  </span>

                  <Send
                    size={16}
                    strokeWidth={1.8}
                    className={`transition-transform duration-300 ${
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
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mt-20 flex flex-col gap-4 border-t border-white/5 pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Siam Talukder.{" "}
            {t.contact.footer.copyright}
          </p>

          <a
            href="#home"
            className="group flex items-center gap-2 text-xs text-white/30 transition-colors duration-300 hover:text-white"
          >
            <span>{t.contact.footer.backToTop}</span>

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

