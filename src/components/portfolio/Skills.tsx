import { motion } from "motion/react";
import { Brain, Server, Layout, Database, Cloud, Wrench } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const groups = [
  {
    icon: Brain,
    name: "AI & Machine Learning",
    color: "from-[#7C3AED] to-[#a78bfa]",
    items: ["TensorFlow", "Keras", "XGBoost", "Transformers", "FaceNet", "OpenCV", "Mediapipe", "NLTK", "Hugging Face", "Generative AI", "NLP"],
  },
  {
    icon: Server,
    name: "Backend Development",
    color: "from-[#22D3EE] to-[#67e8f9]",
    items: ["Python", "Node.js", "Flask", "Java", "JWT",  "REST APIs", "C / C++"],
  },
  {
    icon: Layout,
    name: "Frontend Development",
    color: "from-[#a78bfa] to-[#22D3EE]",
    items: ["React.js", "JavaScript", "Tailwind CSS", "HTML / CSS", "Figma"],
  },
  {
    icon: Database,
    name: "Databases",
    color: "from-[#7C3AED] to-[#22D3EE]",
    items: ["MySQL", "PostgreSQL", "MongoDB", "SQL"],
  },
  {
    icon: Cloud,
    name: "Cloud & Deployment",
    color: "from-[#22D3EE] to-[#a78bfa]",
    items: ["AWS (Basic)", "Render", "Streamlit Cloud", "Google Cloud"],
  },
  {
    icon: Wrench,
    name: "Tools & Platforms",
    color: "from-[#a78bfa] to-[#7C3AED]",
    items: ["Git", "GitHub", "Postman", "Power BI", "Tableau", "VS Code", "Claude", "AI-Native IDE", "Google Colab", "Kaggle"],
  },
];

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        eyebrow="Skills"
        title="A connected technology stack"
        description="No progress bars. Just the tools I reach for to ship intelligent systems."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => (
          <motion.div
            key={g.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="glass group relative overflow-hidden p-6"
          >
            <div className={`absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${g.color} opacity-10 blur-3xl transition group-hover:opacity-25`} />
            <div className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${g.color}`}>
              <g.icon className="h-5 w-5 text-white" />
            </div>
            <h3 className="mt-4 text-base font-semibold">{g.name}</h3>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[12px] font-medium text-white/85 transition hover:border-[#7C3AED]/40 hover:bg-[#7C3AED]/10 hover:text-white"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}