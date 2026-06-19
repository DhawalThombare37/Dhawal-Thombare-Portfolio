import { Github, Linkedin, Mail, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#22D3EE]">
              <Sparkles className="h-4 w-4 text-white" />
            </span>
            <div>
              <div className="text-sm font-semibold">Dhawal Thombare</div>
              <div className="text-xs text-muted-foreground">AI Engineer · ML Developer · Builder</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a href="https://github.com/DhawalThombare37" target="_blank" rel="noopener" aria-label="GitHub" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-muted-foreground transition hover:border-[#7C3AED]/40 hover:bg-[#7C3AED]/10 hover:text-white">
              <Github className="h-4 w-4" />
            </a>
            <a href="https://www.linkedin.com/in/dhawal-thombare-376745289" target="_blank" rel="noopener" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-muted-foreground transition hover:border-[#7C3AED]/40 hover:bg-[#7C3AED]/10 hover:text-white">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="mailto:dhawal.tp@gmail.com" aria-label="Email" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-muted-foreground transition hover:border-[#7C3AED]/40 hover:bg-[#7C3AED]/10 hover:text-white">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-[#7C3AED]/50 to-transparent" />
          <p className="text-xs text-muted-foreground">
            Designed and built with passion for AI innovation · © {new Date().getFullYear()} Dhawal Thombare
          </p>
        </div>
      </div>
    </footer>
  );
}