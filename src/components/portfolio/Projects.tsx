import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  X,
  CircuitBoard,
  ScanFace,
  Bot,
  Leaf,
  MapPinned,
  Database,
  Github,
  ExternalLink,
  ShieldCheck,
  FolderKanban,
} from "lucide-react";import { Section, SectionHeader } from "./Section";

type Project = {
  id: string;
  title: string;
  category: string;
  icon: any;
  duration: string;

  shortDescription: string;

  problem: string;
  solution: string;
  impact: string;

  features: string[];
  tech: string[];

  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    id: "retail",
    title: "AI Retail Demand Forecasting System",
    category: "Machine Learning",
    icon: Database,
    duration: "Sept 2025 – Dec 2025",
    problem: "Retailers struggle to predict demand accurately, leading to overstock, lost sales, and wasted capital.",
    solution: "End-to-end ML pipeline using XGBoost and Transformer-based architectures, deployed as an interactive Streamlit analytics dashboard.",
    impact: "Achieved ~3% MAPE on real-world retail datasets and enabled non-technical users to visualize demand trends and actual vs predicted comparisons.",
    features: [
      "Data preprocessing & feature scaling pipeline",
      "XGBoost + Transformer model ensemble",
      "Streamlit dashboard with dataset upload",
      "Actual vs predicted demand visualization",
    ],
    tech: ["Python", "XGBoost", "Transformers", "TensorFlow", "Pandas", "Streamlit"],
    shortDescription:
  "AI-powered demand forecasting platform that predicts future retail sales using machine learning models and interactive analytics dashboards.",

github:
  "https://github.com/DhawalThombare37/Retail-Demand-Forecasting-Streamlit-App",

live:
  "https://retail-demand-forecasting-app-app-5hytsbb3jy26fcq6rxcml8.streamlit.app/",
  },
  {
    id: "face",
    title: "Face Authentication System",
    category: "Computer Vision",
    icon: ScanFace,
    duration: "Oct 2025 – Nov 2025",
    problem: "Photo-based spoofing makes traditional face recognition unsafe for attendance and access control.",
    solution: "Real-time face authentication using FaceNet embeddings + cosine similarity, with Mediapipe FaceMesh blink-based liveness detection.",
    impact: "Blocks photo / video spoof attempts and automatically logs IN / OUT attendance to structured CSV records.",
    features: [
      "FaceNet embeddings + cosine similarity matching",
      "Blink-based liveness via Mediapipe FaceMesh",
      "Live OpenCV webcam pipeline",
      "Automated CSV attendance logging",
    ],
    tech: ["Python", "OpenCV", "FaceNet", "Mediapipe", "Deep Learning"],
    shortDescription:
  "Secure biometric authentication system using FaceNet, OpenCV and deep learning for real-time facial identity verification.",

github:
  "https://github.com/DhawalThombare37/FaceAuthSystem",
  },
  {
  id: "chatbot",
  title: "Custom NLP Verilog Chatbot",
  category: "Natural Language Processing",
  icon: Bot,
  duration: "2025",

  shortDescription:
    "Domain-specific NLP chatbot designed to answer Verilog and digital design queries using natural language processing techniques.",

  problem:
    "Hardware learners struggle to quickly find Verilog-related answers.",

  solution:
    "Developed a custom NLP chatbot trained specifically for Verilog concepts and hardware design queries.",

  impact:
    "Provides fast, context-aware answers for digital design learning.",

  features: [
    "Verilog QA Dataset",
    "TF-IDF Similarity Search",
    "NLP Intent Matching",
    "Interactive Chat Interface",
  ],

  tech: ["Python", "NLTK", "TF-IDF", "NLP", "Chatbot"],

  github:
    "https://github.com/DhawalThombare37/Custom-NLP-Verilog-Chatbot",
},
  {
    id: "eco",
    title: "Smart Eco Commute Platform",
    category: "Full‑Stack Web",
    icon: Leaf,
    duration: "Apr 2025 – May 2025",
    problem: "Urban commuters lack a fast way to find eco-friendly ride-sharing matches in real time.",
    solution: "Full-stack ride-sharing web app with secure auth and live route matching, built Agile-style end-to-end.",
    impact: "Delivers a clean responsive interface with map-based features, encouraging shared low-emission travel.",
    features: [
      "JWT-based user authentication",
      "Real-time route matching",
      "Google Maps integration",
      "Responsive React + Tailwind UI",
    ],
    tech: ["React", "Tailwind", "Node.js", "MongoDB", "Google Maps API"],
    shortDescription:
  "Eco-friendly ride sharing platform focused on sustainable transportation, route management and modern web application development.",

github:
  "https://github.com/DhawalThombare37/Eco-Rides",

live:
  "https://eco-rides.onrender.com",
  },
  {
    id: "city",
    title: "Smart City Guide Application",
    category: "Java · Full‑Stack",
    icon: MapPinned,
    duration: "Jan 2024 – May 2024",
    problem: "Tourists need a single app combining navigation, profiles, and payments for a city visit.",
    solution: "Interactive city guide built in Java with MySQL profiles and Google Maps API navigation + payment simulation.",
    impact: "Production-level mapping experience with robust GUI and SQL-backed user data.",
    features: [
      "Java GUI with rich map views",
      "MySQL user profile management",
      "Google Maps API integration",
      "Payment simulation workflow",
    ],
    tech: ["Java", "MySQL", "Google Maps API", "Swing GUI"],
    shortDescription:
  "Java-based city information platform that helps users discover services, locations and essential resources through a centralized guide system.",

github:
  "https://github.com/DhawalThombare37/Smart-City-Guide-Java",
  },
  {
  id: "auditnet",
  title: "AuditNet AI",
  category: "RAG + Blockchain AI",
  icon: ShieldCheck,
  duration: "2025",

  shortDescription:
    "Blockchain-audited RAG platform that combines AI, logistics analytics, and Ethereum-based audit trails for explainable supply-chain risk assessment.",

  problem:
    "Supply chain audits often lack transparency and explainability.",

  solution:
    "Built a blockchain-audited RAG platform for logistics risk assessment using explainable AI and immutable audit trails.",

  impact:
    "Provides trustworthy, verifiable and explainable logistics intelligence.",

  features: [
    "Retrieval-Augmented Generation",
    "Risk Prediction Engine",
    "Blockchain Audit Trail",
    "Explainable AI Outputs",
  ],

  tech: [
    "Python",
    "RAG",
    "LLM",
    "Ethereum",
    "Machine Learning",
  ],

  github:
    "https://github.com/DhawalThombare37/AuditNet-AI",
},
{
  id: "contact",
  title: "Interactive Contact Manager",
  category: "React Application",
  icon: FolderKanban,
  duration: "2025",

  shortDescription:
    "Modern visual contact manager featuring drag-and-drop workflows, analytics dashboards, categorization and interactive data management.",

  problem:
    "Traditional contact managers are static and difficult to organize efficiently.",

  solution:
    "Built a visual drag-and-drop contact manager with analytics, categorization and interactive workflows.",

  impact:
    "Provides a modern user experience for managing and organizing contacts.",

  features: [
    "Drag & Drop Cards",
    "Analytics Dashboard",
    "Priority Sorting",
    "Import & Export",
  ],

  tech: [
    "React",
    "TailwindCSS",
    "ReactFlow",
    "Recharts",
  ],

  github:
    "https://github.com/DhawalThombare37/Contact-Manager",

  live:
    "https://contact-manager-37t2.onrender.com",
},
  {
    id: "fault",
    title: "Fault Detection in Power Grids",
    category: "Embedded · Patent",
    icon: CircuitBoard,
    duration: "Jan 2024 – May 2024",
    problem: "Locating and classifying transmission line faults is slow and expensive with conventional sensors.",
    solution: "Novel magnetic flux-based EMF sensing method with proof-of-concept hardware reporting to a central unit.",
    impact: "Filed as an Indian patent (App. No. 202521044840 A, 2025).",
    features: ["Magnetic flux sensing method", "POC hardware sensors", "Fault location + type classification", "Patent filed 2025"],
    tech: ["Embedded Systems", "EMF Sensors", "POC Hardware"],
    shortDescription:
  "Patent-filed intelligent fault detection system that identifies power distribution failures using sensor-driven monitoring and analytics.",
  },
  {
  id: "graphplotter",
  title: "Mathematical Function Visualizer",
  category: "Python Visualization Tool",
  icon: Database,
  duration: "2023",

  shortDescription:
    "Interactive graph plotting application developed during first-year engineering for visualizing complex mathematical functions and equations.",

  problem:
    "Students often struggle to visualize mathematical functions and understand their graphical behavior.",

  solution:
    "Developed a graph plotting application capable of generating and visualizing mathematical equations through an interactive interface.",

  impact:
    "Improved understanding of mathematical concepts through visual representation and interactive exploration.",

  features: [
    "Graph Visualization",
    "Function Plotting",
    "Interactive Interface",
    "Mathematical Analysis"
  ],

  tech: [
    "Python",
    "Tkinter",
    "Matplotlib",
    "NumPy"
  ],

  github:
    "https://github.com/DhawalThombare37/Complex-Mathematical-Graph-Plotter",
},
];

export function Projects() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <Section id="projects">
      <SectionHeader
        eyebrow="Featured Work"
        title={<>Real products, <span className="bg-gradient-to-r from-[#a78bfa] to-[#22D3EE] bg-clip-text text-transparent">not assignments</span></>}
        description="Each project began with a problem worth solving and ended with something deployable."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p, i) => (
          <motion.button
            key={p.id}
            onClick={() => setOpen(p)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            whileHover={{ y: -6 }}
            className="glass group relative cursor-pointer overflow-hidden p-7 text-left min-h-[340px]"
          >
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#7C3AED]/10 blur-3xl transition group-hover:bg-[#7C3AED]/25" />
            <div className="flex items-start justify-between gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#7C3AED]/40 to-[#22D3EE]/30 ring-1 ring-white/10">
                <p.icon className="h-5 w-5 text-white" />
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
            </div>
            <div className="mt-5 text-xs font-medium uppercase tracking-widest text-[#22D3EE]">
              {p.category}
            </div>
            <h3 className="mt-1.5 text-lg font-semibold leading-snug">{p.title}</h3>
            <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
  {p.shortDescription}
</p>
            <div className="mt-5 flex flex-wrap gap-1.5">
  {p.tech.slice(0, 4).map((t) => (
    <span
      key={t}
      className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-white/80"
    >
      {t}
    </span>
  ))}

  {p.tech.length > 4 && (
    <span className="rounded-md px-2 py-0.5 text-[11px] text-muted-foreground">
      +{p.tech.length - 4}
    </span>
  )}
</div>

<div className="mt-5 flex items-center gap-4">
  {p.github && (
    <a
      href={p.github}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="flex items-center gap-2 text-sm text-white/90 hover:text-[#22D3EE]"
    >
      <Github className="h-4 w-4" />
      Code
    </a>
  )}

  {p.live && (
    <a
      href={p.live}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="flex items-center gap-2 text-sm text-white/90 hover:text-[#22D3EE]"
    >
      <ExternalLink className="h-4 w-4" />
      Live Demo
    </a>
  )}
</div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[60] grid place-items-center bg-black/70 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 22, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
              className="glass relative max-h-[88vh] w-full max-w-2xl overflow-y-auto p-8"
            >
              <button
                onClick={() => setOpen(null)}
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/5 hover:bg-white/10"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#22D3EE]">
                  <open.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#22D3EE]">{open.category}</div>
                  <h3 className="text-xl font-semibold">{open.title}</h3>
                  <div className="text-xs text-muted-foreground">{open.duration}</div>
                </div>
              </div>

              <div className="mt-6 grid gap-5 sm:grid-cols-3">
                {[
                  { l: "Problem", v: open.problem },
                  { l: "Solution", v: open.solution },
                  { l: "Impact", v: open.impact },
                ].map((b) => (
                  <div key={b.l} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-[10px] font-semibold uppercase tracking-widest text-[#a78bfa]">{b.l}</div>
                    <p className="mt-2 text-sm text-white/85">{b.v}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Key features</div>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {open.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-white/85">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#22D3EE]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {open.tech.map((t) => (
                  <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/90">
                    {t}
                  </span>
                ))}
              </div>
            
              <div className="mt-8 flex flex-wrap gap-3">
                {open.github && (
                  <a href={open.github} target="_blank" rel="noopener noreferrer"
                    className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm">
                    <Github className="h-4 w-4" />
                    Source Code
                  </a>
                )}

                {open.live && (
                  <a href={open.live} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#22D3EE] px-4 py-2 text-sm text-white">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
              </div>
              
  

</motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}