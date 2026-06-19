import { motion } from "motion/react";
import { Briefcase } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const items = [
  {
    company: "Baellchen Technology",
    role: "AI - ML Engineering Intern",
    duration: "Sept 2025 – Dec 2025",
    location: "Pune, India",
    tech: ["Python", "XGBoost", "Transformers", "TensorFlow", "Streamlit"],
    achievements: [
      "Built an AI-powered retail demand forecasting system using XGBoost + Transformer architectures.",
      "Designed an end-to-end data science pipeline: preprocessing, feature scaling, inference, evaluation.",
      "Achieved ~3% MAPE forecasting accuracy on real-world retail datasets.",
      "Shipped an interactive Streamlit analytics dashboard for non-technical users.",
    ],
  },
  {
    company: "SmartLeaven Technologies Pvt. Ltd.",
    role: "Software Engineering Intern",
    duration: "June 2024 – July 2024",
    location: "Pune, India",
    tech: ["Generative AI", "Flask", "Keras", "Tailwind CSS", "Figma"],
    achievements: [
      "Developed a Generative AI chatbot with accurate, context-aware responses.",
      "Contributed production-ready features following Agile sprints and stand-ups.",
      "Built backend services in Flask + Keras and a responsive Tailwind UI.",
      "Applied a research-before-build approach to evaluate NLP tools and frameworks.",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader eyebrow="Experience" title="Where I've shipped" />

      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-[#7C3AED] via-white/10 to-transparent" />
        <div className="space-y-10">
          {items.map((it, i) => (
            <motion.div
              key={it.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-14"
            >
              <div className="absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#7C3AED] to-[#22D3EE] ring-4 ring-[#050816]">
                <Briefcase className="h-4 w-4 text-white" />
              </div>
              <div className="glass p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold">{it.role}</h3>
                    <div className="text-sm text-[#22D3EE]">{it.company}</div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {it.duration} · {it.location}
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {it.achievements.map((a) => (
                    <li key={a} className="flex gap-2 text-sm text-white/85">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#22D3EE]" />
                      {a}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {it.tech.map((t) => (
                    <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-white/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}