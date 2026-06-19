
import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";
import { useEffect, useState } from "react";
//import { NetworkBackground } from "./NetworkBackground";
const rotating = [
  "AI Solutions",
  "Intelligent Products",
  "Machine Learning Systems",
  "Generative AI Applications",
  "Research-Driven Engineering",
];

export function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % rotating.length);
    }, 2200);

    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-6 pt-32 pb-20"
    >
      {/* Background Grid */}
    

<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_35%,rgba(124,58,237,0.32),transparent_65%)]" />
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          {/* Availability Badge */}
          <div className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white/80">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22D3EE] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22D3EE]" />
            </span>
            Available for AI & ML Engineering Roles & Collaborations
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-gradient sm:text-5xl lg:text-6xl xl:text-7xl">
            Building Intelligent Systems,
            <br />
            AI Products & Real-World Solutions
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
            AI Engineer • Machine Learning Developer • Full-Stack Builder •
            Research Contributor
          </p>

          {/* Rotating Text */}
<div className="mt-8 flex items-center justify-center text-lg sm:text-xl translate-x-9">
  <span className="mr-2 text-muted-foreground whitespace-nowrap">
    I build
  </span>

  <div className="relative h-[40px] w-[380px] overflow-hidden">
    <motion.span
      key={idx}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="absolute inset-0 flex items-center justify-start whitespace-nowrap bg-gradient-to-r from-[#a78bfa] to-[#22D3EE] bg-clip-text text-xl font-bold text-transparent sm:text-2xl"
    >
      {rotating[idx]}
    </motion.span>
  </div>
</div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#22D3EE] px-6 py-3 text-sm font-medium text-white shadow-[0_10px_40px_-10px_rgba(124,58,237,0.7)] transition hover:scale-[1.03]"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>

            <a
              href="/VIIT_Dhawal_Thombare_CV.pdf"
              download
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>

          {/* Achievement Badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <span className="glass rounded-full px-4 py-2 text-sm font-medium text-white/90">
              📍 Pune, India
            </span>

            <span className="glass rounded-full px-4 py-2 text-sm font-medium text-white/90">
              📄 2 IEEE Publications
            </span>

            <span className="glass rounded-full px-4 py-2 text-sm font-medium text-white/90">
              💡 Patent Filed 2025
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

