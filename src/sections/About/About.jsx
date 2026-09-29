
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const highlights = [
  {
    icon: Code2,
    title: "Frontend",
    description: "Modern, responsive and interactive user interfaces.",
    bnTitle: "ফ্রন্টএন্ড",
    bnDescription: "আধুনিক, রেসপন্সিভ এবং ইন্টারঅ্যাকটিভ ইউজার ইন্টারফেস।",
    gradient: "from-cyan-400 to-blue-500",
    glow: "bg-cyan-400/10",
    href: "#skills-frontend",
  },
  {
    icon: Server,
    title: "Backend",
    description: "Scalable APIs and reliable server-side applications.",
    bnTitle: "ব্যাকএন্ড",
    bnDescription: "স্কেলেবল API এবং নির্ভরযোগ্য সার্ভার-সাইড অ্যাপ্লিকেশন।",
    gradient: "from-blue-400 to-violet-500",
    glow: "bg-blue-400/10",
    href: "#skills-backend",
  },
  {
    icon: Database,
    title: "Database",
    description: "MongoDB and Mongoose powered data-driven applications.",
    bnTitle: "ডেটাবেস",
    bnDescription: "MongoDB এবং Mongoose-ভিত্তিক ডেটা-চালিত অ্যাপ্লিকেশন।",
    gradient: "from-violet-400 to-purple-500",
    glow: "bg-violet-400/10",
    href: "#skills-database",
  },
  {
    icon: Sparkles,
    title: "Full Stack",
    description: "Complete web applications from frontend to backend.",
    bnTitle: "ফুল স্ট্যাক",
    bnDescription: "ফ্রন্টএন্ড থেকে ব্যাকএন্ড পর্যন্ত সম্পূর্ণ ওয়েব অ্যাপ্লিকেশন।",
    gradient: "from-purple-400 to-pink-500",
    glow: "bg-purple-400/10",
    href: "#skills-fullstack",
  },
];

const About = () => {
  const { language } = useLanguage();
  const isBangla = language === "BN";

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/5 py-24 pb-32 sm:py-28 sm:pb-36 lg:py-32 lg:pb-40"
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/[0.045] blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-500/[0.05] blur-[120px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.02] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-14 max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-cyan-400 to-violet-400" />

            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-xs font-semibold uppercase tracking-[0.22em] text-transparent">
              {isBangla ? "আমার সম্পর্কে" : "About Me"}
            </span>
          </div>

          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-4xl md:text-5xl">
            {isBangla ? "আইডিয়াকে " : "Turning ideas into "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              {isBangla
                ? "ডিজিটাল অভিজ্ঞতায় রূপ দিই।"
                : "digital experiences."}
            </span>
          </h2>

          <div className="mt-5 h-px w-24 bg-gradient-to-r from-cyan-400 via-blue-400 to-transparent" />
        </motion.div>

        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-xl"
          >
            {/* Intro */}
            <p className="text-lg leading-8 sm:text-xl sm:leading-9">
              {isBangla ? (
                <>
                  <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                    আমি
                  </span>{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text font-semibold text-transparent">
                    সিয়াম তালুকদার,
                  </span>{" "}
                  <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                    একজন
                  </span>{" "}
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text font-semibold text-transparent">
                    MERN Stack Developer
                  </span>{" "}
                  <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                    যিনি
                  </span>{" "}
                  <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                    আধুনিক
                  </span>{" "}
                  <span className="bg-gradient-to-r from-yellow-400 to-emerald-400 bg-clip-text text-transparent">
                    ওয়েব অ্যাপ্লিকেশন
                  </span>{" "}
                  <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    তৈরি করতে আগ্রহী,
                  </span>{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    যা পরিষ্কার,
                  </span>{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                    রেসপন্সিভ
                  </span>{" "}
                  <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                    এবং
                  </span>{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    ইউজার-কেন্দ্রিক।
                  </span>
                </>
              ) : (
                <>
                  <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                    I’m
                  </span>{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text font-semibold text-transparent">
                    Siam Talukder,
                  </span>{" "}
                  <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                    a
                  </span>{" "}
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text font-semibold text-transparent">
                    MERN Stack Developer
                  </span>{" "}
                  <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                    passionate
                  </span>{" "}
                  <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                    about
                  </span>{" "}
                  <span className="bg-gradient-to-r from-yellow-400 to-emerald-400 bg-clip-text text-transparent">
                    building
                  </span>{" "}
                  <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    modern
                  </span>{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    web
                  </span>{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                    applications
                  </span>{" "}
                  <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                    that
                  </span>{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    are
                  </span>{" "}
                  <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                    clean,
                  </span>{" "}
                  <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                    responsive
                  </span>{" "}
                  <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                    and
                  </span>{" "}
                  <span className="bg-gradient-to-r from-yellow-400 to-emerald-400 bg-clip-text text-transparent">
                    user-focused.
                  </span>
                </>
              )}
            </p>

            {/* Full Stack */}
            <p className="mt-6 text-sm leading-7 sm:text-base">
              {isBangla ? (
                <>
                  <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                    আমি
                  </span>{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                    Full Stack
                  </span>{" "}
                  <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                    নিয়ে কাজ করতে পছন্দ করি
                  </span>{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    —
                  </span>{" "}
                  <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                    React
                  </span>{" "}
                  <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                    দিয়ে ইন্টারঅ্যাকটিভ ইন্টারফেস তৈরি
                  </span>{" "}
                  <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                    থেকে শুরু করে
                  </span>{" "}
                  <span className="bg-gradient-to-r from-yellow-400 to-emerald-400 bg-clip-text font-semibold text-transparent">
                    Node.js
                  </span>{" "}
                  <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    এবং
                  </span>{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text font-semibold text-transparent">
                    Express.js
                  </span>{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                    দিয়ে Backend API তৈরি করি,
                  </span>{" "}
                  <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                    এবং
                  </span>{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold text-transparent">
                    MongoDB
                  </span>{" "}
                  <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                    দিয়ে অ্যাপ্লিকেশনের ডেটা পরিচালনা করি।
                  </span>
                </>
              ) : (
                <>
                  <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                    I
                  </span>{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                    enjoy
                  </span>{" "}
                  <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                    working
                  </span>{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    across
                  </span>{" "}
                  <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text font-medium text-transparent">
                    the full stack
                  </span>{" "}
                  <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                    —
                  </span>{" "}
                  <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                    from
                  </span>{" "}
                  <span className="bg-gradient-to-r from-yellow-400 to-emerald-400 bg-clip-text text-transparent">
                    creating
                  </span>{" "}
                  <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    interactive
                  </span>{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    interfaces
                  </span>{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                    with
                  </span>{" "}
                  <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text font-semibold text-transparent">
                    React
                  </span>{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    to
                  </span>{" "}
                  <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                    building
                  </span>{" "}
                  <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                    backend
                  </span>{" "}
                  <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                    APIs
                  </span>{" "}
                  <span className="bg-gradient-to-r from-yellow-400 to-emerald-400 bg-clip-text text-transparent">
                    with
                  </span>{" "}
                  <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text font-semibold text-transparent">
                    Node.js
                  </span>{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    and
                  </span>{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text font-semibold text-transparent">
                    Express.js,
                  </span>{" "}
                  <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                    while
                  </span>{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    managing
                  </span>{" "}
                  <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                    application
                  </span>{" "}
                  <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                    data
                  </span>{" "}
                  <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                    with
                  </span>{" "}
                  <span className="bg-gradient-to-r from-yellow-400 to-emerald-400 bg-clip-text font-semibold text-transparent">
                    MongoDB.
                  </span>
                </>
              )}
            </p>

            {/* Goal */}
            <p className="mt-6 text-sm leading-7 sm:text-base">
              {isBangla ? (
                <>
                  <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                    আমার
                  </span>{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                    লক্ষ্য
                  </span>{" "}
                  <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                    হলো
                  </span>{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    আইডিয়াকে
                  </span>{" "}
                  <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text font-semibold text-transparent">
                    নির্ভরযোগ্য ডিজিটাল প্রোডাক্টে
                  </span>{" "}
                  <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                    রূপান্তর করা
                  </span>{" "}
                  <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                    চিন্তাশীল UI,
                  </span>{" "}
                  <span className="bg-gradient-to-r from-yellow-400 to-emerald-400 bg-clip-text text-transparent">
                    পরিষ্কার কোড
                  </span>{" "}
                  <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    এবং
                  </span>{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    একটি স্মুথ ইউজার এক্সপেরিয়েন্সের
                  </span>{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                    মাধ্যমে।
                  </span>
                </>
              ) : (
                <>
                  <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                    My
                  </span>{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                    goal
                  </span>{" "}
                  <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                    is
                  </span>{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    to
                  </span>{" "}
                  <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                    turn
                  </span>{" "}
                  <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                    ideas
                  </span>{" "}
                  <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                    into
                  </span>{" "}
                  <span className="bg-gradient-to-r from-yellow-400 to-emerald-400 bg-clip-text font-semibold text-transparent">
                    reliable digital products
                  </span>{" "}
                  <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    with
                  </span>{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    thoughtful UI,
                  </span>{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                    clean code
                  </span>{" "}
                  <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                    and
                  </span>{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    a smooth user experience.
                  </span>
                </>
              )}
            </p>

            {/* Bottom Accent */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "100%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 h-px max-w-xs bg-gradient-to-r from-cyan-400/40 via-violet-400/30 to-transparent"
            />
          </motion.div>

          {/* Right Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.title}
                  href={item.href}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  whileTap={{
                    scale: 0.97,
                    y: -1,
                  }}
                  className="group relative block overflow-hidden border border-white/10 bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/15 hover:bg-white/[0.045] focus:outline-none focus:ring-1 focus:ring-cyan-400/40"
                >
                  {/* Card Glow */}
                  <div
                    className={`pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full ${item.glow} blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  />

                  {/* Click Ripple / Shine */}
                  <motion.div
                    initial={{ x: "-120%" }}
                    whileHover={{ x: "120%" }}
                    transition={{
                      duration: 0.7,
                      ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent blur-sm"
                  />

                  <div className="relative">
                    {/* Icon + Arrow */}
                    <div className="mb-6 flex items-center justify-between">
                      <motion.div
                        whileTap={{ scale: 0.9 }}
                        className="flex h-11 w-11 items-center justify-center border border-white/10 bg-white/[0.03] text-white transition-all duration-300 group-hover:border-white/20"
                      >
                        <Icon size={19} strokeWidth={1.7} />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0.35, x: 0, y: 0 }}
                        whileHover={{
                          opacity: 1,
                          x: 2,
                          y: -2,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowUpRight
                          size={17}
                          strokeWidth={1.5}
                          className="text-white/30 group-hover:text-cyan-300"
                        />
                      </motion.div>
                    </div>

                    {/* Title */}
                    <h3
                      className={`bg-gradient-to-r ${item.gradient} bg-clip-text text-lg font-semibold text-transparent`}
                    >
                      {isBangla ? item.bnTitle : item.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-sm leading-6 text-white/40 transition-colors duration-300 group-hover:text-white/55">
                      {isBangla ? item.bnDescription : item.description}
                    </p>

                    {/* Bottom Accent */}
                    <div
                      className={`mt-6 h-px w-12 bg-gradient-to-r ${item.gradient} opacity-40 transition-all duration-300 group-hover:w-20 group-hover:opacity-80`}
                    />

                    {/* Click Hint */}
                    <div className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-white/20 transition-colors duration-300 group-hover:text-white/40">
                      <span>
                        {isBangla ? "দক্ষতা দেখুন" : "Explore skills"}
                      </span>

                      <span
                        className={`h-px w-5 bg-gradient-to-r ${item.gradient} opacity-50`}
                      />
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

