import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Education } from "@/components/portfolio/Education";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Research } from "@/components/portfolio/Research";
import { Skills } from "@/components/portfolio/Skills";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { NetworkBackground } from "@/components/portfolio/NetworkBackground";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dhawal Thombare — AI Engineer & ML Developer" },
      { name: "description", content: "AI Engineer and Machine Learning Developer shipping intelligent, production-ready systems. IEEE-published researcher, patent contributor, and full-stack builder based in Pune, India." },
      { property: "og:title", content: "Dhawal Thombare — AI Engineer & ML Developer" },
      { property: "og:description", content: "Building AI systems that solve real-world problems. IEEE-published, patent-filed, full-stack." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Dhawal Thombare",
          jobTitle: "AI Engineer & Machine Learning Developer",
          email: "mailto:dhawal.tp@gmail.com",
          telephone: "+91-9322759877",
          address: { "@type": "PostalAddress", addressLocality: "Pune", addressRegion: "Maharashtra", addressCountry: "India" },
          alumniOf: "Vishwakarma Institute of Information Technology, Pune",
          sameAs: [
            "https://github.com/DhawalThombare",
            "https://www.linkedin.com/in/dhawal-thombare/",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-clip text-foreground">
      <NetworkBackground />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Experience />
      <Research />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
      <Toaster theme="dark" position="bottom-right" />
    </main>
  );
}
