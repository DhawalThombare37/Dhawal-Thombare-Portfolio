
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const cards = [
  {
    icon: Mail,
    label: "Email",
    value: "dhawal.tp@gmail.com",
    href: "mailto:dhawal.tp@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 93227 59877",
    href: "tel:+919322759877",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/dhawal-thombare-376745289",
    href: "https://www.linkedin.com/in/dhawal-thombare-376745289",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/DhawalThombare37",
    href: "https://github.com/DhawalThombare37",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pune, Maharashtra, India",
    href: "#",
  },
];

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeader
        eyebrow="Contact"
        title={
          <>
            Let's build something{" "}
            <span className="bg-gradient-to-r from-[#a78bfa] to-[#22D3EE] bg-clip-text text-transparent">
              intelligent
            </span>{" "}
            together
          </>
        }
        description="Open to AI engineering internships, research collaborations, and product-focused opportunities."
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        {/* Contact Cards */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {cards.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -3 }}
              className="glass group flex items-center gap-4 p-4"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#22D3EE]">
                <c.icon className="h-5 w-5 text-white" />
              </div>

              <div className="min-w-0">
                <div className="text-[11px] uppercase tracking-widest text-[#22D3EE]">
                  {c.label}
                </div>

                <div className="truncate text-sm text-white/90">
                  {c.value}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Opportunity Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass relative overflow-hidden p-8"
        >
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#7C3AED]/10 blur-3xl" />

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white">
              Available for Opportunities
            </h3>

            <p className="mt-3 text-muted-foreground">
              Open to internships, research collaborations, software
              engineering roles, and AI-driven product development.
            </p>

            {/* Opportunities */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#22D3EE]" />
                <span>AI & ML Internships</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#22D3EE]" />
                <span>Software Development Roles</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#22D3EE]" />
                <span>Research Collaborations</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#22D3EE]" />
                <span>Freelance Projects</span>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="glass rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-[#22D3EE]">
                  8.84
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  CGPA
                </div>
              </div>

              <div className="glass rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-[#22D3EE]">
                  2
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  IEEE Papers
                </div>
              </div>

              <div className="glass rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-[#22D3EE]">
                  1
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Patent Filed
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/VIIT_Dhawal_Thombare_CV.pdf"
                download
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#7C3AED] to-[#22D3EE] px-6 py-3 text-sm font-medium text-white shadow-[0_10px_40px_-10px_rgba(124,58,237,0.7)] transition hover:scale-[1.03]"
              >
                Download Resume
              </a>

              <a
                href="https://www.linkedin.com/in/dhawal-thombare-376745289"
                target="_blank"
                rel="noopener noreferrer"
                className="glass inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

