import { motion } from "motion/react";
import { FileText, ScrollText, ExternalLink } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const publications = [
  {
    tag: "IEEE · 2024",
    title: "Noise Reduction in Drones using Silent Electric Ducted Fan",
    venue: "3rd International Conference on Automation, Computing and Renewable Systems (ICACRS 2024)",
    publisher: "IEEE",
    id: "DOI: 10.1109/ICACRS62842.2024.10841531",
    link: "https://doi.org/10.1109/ICACRS62842.2024.10841531",
    topics: ["Acoustics", "Drones", "Hardware"],
  },
  {
    tag: "IEEE · 2025",
    title: "Web Scraping-Based Cryptocurrency Prediction and Analysis",
    venue: "3rd International Conference on Intelligent Data Communication Technologies and IoT (IDCIoT 2025)",
    publisher: "IEEE",
    id: "DOI: 10.1109/IDCIOT64235.2025.10915045",
    link: "https://doi.org/10.1109/IDCIOT64235.2025.10915045",
    topics: ["ML", "Time-Series", "Web Scraping"],
  },
];

export function Research() {
  return (
    <Section id="research">
      <SectionHeader
        eyebrow="Research & Innovation"
        title={<>Published. <span className="bg-gradient-to-r from-[#a78bfa] to-[#22D3EE] bg-clip-text text-transparent">Patented.</span></>}
        description="Two IEEE conference papers and a filed Indian patent — research grounded in shipping things."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {publications.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noopener"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="glass group relative overflow-hidden p-6"
          >
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#22D3EE]/10 blur-3xl transition group-hover:bg-[#22D3EE]/25" />
            <div className="flex items-start justify-between gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#22D3EE]">
                <FileText className="h-3 w-3" /> {p.tag}
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground transition group-hover:text-white" />
            </div>
            <h3 className="mt-4 text-lg font-semibold leading-snug">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.venue}</p>
            <div className="mt-3 text-xs text-white/70">
              {p.publisher} · <span className="font-mono">{p.id}</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.topics.map((t) => (
                <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-white/80">
                  {t}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="glass glow-violet relative mt-6 overflow-hidden p-8"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.18),transparent_60%)]" />
        <div className="relative grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-center">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#22D3EE]">
            <ScrollText className="h-7 w-7 text-white" />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#7C3AED]/40 bg-[#7C3AED]/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#c4b5fd]">
              Patent Filed · India · 2025
            </div>
            <h3 className="mt-3 text-xl font-semibold">A Fault Detection System for Power Distribution Lines</h3>
            <p className="mt-2 text-sm text-muted-foreground">Filed with the Indian Patent Office.</p>
          </div>
          <div className="grid gap-1 font-mono text-xs text-white/80 md:text-right">
            <div>App. No. <span className="text-white">202521044840 A</span></div>
            <div>Filed: 09 / 05 / 2025</div>
            <div>Published: 06 / 06 / 2025</div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}