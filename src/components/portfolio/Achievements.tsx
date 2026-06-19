import { motion } from "motion/react";
import { Award, Trophy, Sparkles, BarChart3, GraduationCap, Cloud } from "lucide-react";
import { Section, SectionHeader } from "./Section";
import { Shield } from "lucide-react";

const items = [
  { icon: Cloud, title: "Google Cloud Generative AI Skills Badges", org: "Google Cloud Learning Platform", note: "Applied GenAI, cloud services, modern AI tools." },
  { icon: Trophy, title: "Smart India Hackathon 2024", org: "Government of India", note: "Qualified the PPT round of the national innovation challenge." },
  { icon: Award, title: "Top 7 — Departmental Hackathon", org: "VIIT", note: "Secured a top-7 position competing against peers." },
  { icon: Sparkles, title: "Designing the Future UI/UX Hackathon", org: "NIT Patna · The Design Company", note: "Participated in a national design hackathon." },
  { icon: BarChart3, title: "TATA Data Visualization", org: "Forage · TATA", note: "Empowering Business with Effective Insights certification." },
  { icon: BarChart3, title: "Accenture Data Analytics & Visualization", org: "Forage · Accenture", note: "Completed end-to-end job simulation." },
  { icon: GraduationCap, title: "Google AI Professional Certificate", org: "Google × Coursera", note: "Completed 7-course professional certification covering AI fundamentals, prompting, research, content creation, data analysis, and AI app development." },
  {
  icon: Shield,
  title: "IBM Cybersecurity Analyst",
  org: "IBM × Coursera",
  note: "Completed 14-course professional certification covering cybersecurity, penetration testing, network security, incident response, and digital forensics."
},
{
  icon: Award,
  title: "Six Sigma Green Belt",
  org: "LinkedIn Learning",
  note: "Certified in Six Sigma methodologies and project management for process optimization and quality improvement."
},
];

export function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeader eyebrow="Achievements & Certifications" title="Recognized along the way" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
            whileHover={{ y: -4 }}
            className="glass group relative overflow-hidden p-5"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#7C3AED]/10 blur-2xl transition group-hover:bg-[#7C3AED]/25" />
            <div className="flex items-start gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#22D3EE]">
                <it.icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-snug">{it.title}</h3>
                <div className="mt-0.5 text-xs text-[#22D3EE]">{it.org}</div>
                <p className="mt-2 text-xs text-muted-foreground">{it.note}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}