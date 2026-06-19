import { motion } from "motion/react";
import { GraduationCap, BookOpen } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const courses = [
  "Data Structures",
  "Object Oriented Programming",
  "Software Engineering",
  "Database Management Systems",
];

export function Education() {
  return (
    <Section id="education">
      <SectionHeader eyebrow="Education" title="Academic foundation" />

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass relative overflow-hidden p-8"
        >
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#7C3AED]/15 blur-3xl" />
          <div className="flex items-start gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#22D3EE]">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-[#22D3EE]">2023 — 2027</div>
              <h3 className="mt-1 text-xl font-semibold sm:text-2xl">
                Vishwakarma Institute of Information Technology
              </h3>
              <p className="text-sm text-muted-foreground">Pune, India</p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Degree</div>
              <div className="mt-1 font-medium">Bachelor of Technology</div>
              <div className="text-sm text-muted-foreground">Electronics & Telecommunication Engineering</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Duration</div>
              <div className="mt-1 font-medium">2023 – Expected 2027</div>
            </div>
          </div>

          <div className="mt-8">
            <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
              <BookOpen className="h-3.5 w-3.5" /> Relevant coursework
            </div>
            <div className="flex flex-wrap gap-2">
              {courses.map((c) => (
                <span key={c} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/90">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass glow-violet relative flex flex-col items-center justify-center overflow-hidden p-8 text-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.18),transparent_60%)]" />
          <div className="relative">
            <div className="text-xs uppercase tracking-[0.25em] text-[#22D3EE]">Current CGPA</div>
            <div className="mt-3 font-display text-7xl font-bold leading-none text-gradient sm:text-8xl">
              8.84
            </div>
            <div className="mt-1 text-sm text-muted-foreground">out of 10.00</div>

            <div className="mt-8 h-1.5 w-48 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "88.4%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-[#7C3AED] to-[#22D3EE]"
              />
            </div>
            <div className="mt-3 text-xs text-muted-foreground">Top tier · Distinction</div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}