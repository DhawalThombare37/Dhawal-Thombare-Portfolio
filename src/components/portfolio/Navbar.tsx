
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#research", label: "Research" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);

    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", onScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-x-0 top-4 z-50 flex justify-center px-6"
      >
        <nav
          className={`flex items-center gap-3 rounded-full border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition-all duration-300 ${
            scrolled
              ? "bg-[#050816]/90 backdrop-blur-md py-3 px-6"
              : "bg-transparent py-4 px-6"
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 pr-3 text-sm font-semibold"
          >
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#22D3EE] text-xs font-bold text-white">
              DT
            </span>

            <span className="hidden sm:inline text-base font-semibold text-white">
              Dhawal Thombare
            </span>
          </a>

          <div className="hidden h-6 w-px bg-white/10 lg:block" />

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-3 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative px-4 py-2 text-[15px] font-medium transition ${
                    activeSection === l.href.replace("#", "")
                      ? "text-white"
                      : "text-muted-foreground"
                  }`}
                >
                  {l.label}

                  {activeSection === l.href.replace("#", "") && (
                    <motion.span
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-[#22D3EE]"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className="ml-2 grid h-9 w-9 place-items-center rounded-full bg-white/5 lg:hidden"
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-4 bg-white" />
              <span className="block h-0.5 w-4 bg-white" />
            </div>
          </button>
        </nav>
      </motion.header>

      {/* Mobile Navigation */}
      {open && (
        <div className="glass fixed left-1/2 top-20 z-50 w-[92vw] max-w-sm -translate-x-1/2 p-3 lg:hidden">
          <ul className="grid gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2 text-sm transition ${
                    activeSection === l.href.replace("#", "")
                      ? "bg-white/10 text-white"
                      : "text-muted-foreground hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
