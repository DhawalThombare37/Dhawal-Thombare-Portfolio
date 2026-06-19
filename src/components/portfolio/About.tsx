import { motion } from "motion/react";
import { Brain, Code2, FlaskConical, ScrollText, Trophy, GraduationCap } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const tiles = [
  { icon: Brain, label: "AI / ML", desc: "Gen-AI, NLP, RAG, Transformers, Hugging Face, Computer Vision,  Deep learning, OpenCV, End-to-End ML Pipelines.", span: "md:col-span-2 md:row-span-1" },
  { icon: Code2, label: "Full‑Stack Dev-Kit", desc: "React, Node,Flask, Tailwind CSS, REST APIs, MongoDB, PostgreSQL, AWS, Render, Vercel." },
  { icon: FlaskConical, label: "Research Contributor", desc: "Two IEEE papers in noise reduction & crypto analytics." },
  { icon: ScrollText, label: "Patent Contributor", desc: "Fault Detection System for Power Distribution Lines (2025)." },
  { icon: Trophy, label: "Hackathon Builder", desc: "SIH 2024 PPT qualifier · Top 7 dept hackathon · NIT Patna UI/UX." },
  { icon: GraduationCap, label: "CGPA 8.84 / 10", desc: "B.Tech ENTC · VIIT Pune · 2023–2027.", highlight: true },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeader
        eyebrow="About"
        title={<>From research to <span className="bg-gradient-to-r from-[#a78bfa] to-[#22D3EE] bg-clip-text text-transparent">production</span></>}
        description="I'm Dhawal — an engineering student turning research papers into shipped products. I build AI systems that forecast demand, authenticate people, and detect faults in the real world."
      />

      <div className="grid gap-4 md:grid-cols-3 md:auto-rows-[180px]">
        {tiles.map((t, i) => (
          <motion.div
            key={t.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            whileHover={{ y: -4 }}
            className={`glass group relative overflow-hidden p-6 ${t.span ?? ""} ${
              t.highlight ? "glow-violet" : ""
            }`}
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#7C3AED]/10 blur-2xl transition group-hover:bg-[#7C3AED]/20" />
            <t.icon className="h-6 w-6 text-[#22D3EE]" />
            <div className="mt-4 text-lg font-semibold">{t.label}</div>
            <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}