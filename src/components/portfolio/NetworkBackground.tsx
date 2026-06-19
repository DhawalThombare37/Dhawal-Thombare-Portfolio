
import { useEffect, useRef, useState } from "react";

type NodeType = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

type Ripple = {
  x: number;
  y: number;
  radius: number;
  opacity: number;
};

export function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const mouse = useRef({
    x: -9999,
    y: -9999,
  });

  const ripples = useRef<Ripple[]>([]);

  const [nodes] = useState<NodeType[]>(() =>
  Array.from({ length: 80 }, () => ({
    x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1920),
    y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1080),
    vx: (Math.random() - 0.5) * 0.6,
    vy: (Math.random() - 0.5) * 0.6,
  }))
);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleClick = (e: MouseEvent) => {
      ripples.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        opacity: 0.5,
      });
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Cursor glow
      const glow = ctx.createRadialGradient(
        mouse.current.x,
        mouse.current.y,
        0,
        mouse.current.x,
        mouse.current.y,
        90
      );

      glow.addColorStop(0, "rgba(34,211,238,0.04)");
      glow.addColorStop(1, "rgba(34,211,238,0)");

      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(
        mouse.current.x,
        mouse.current.y,
        90,
        0,
        Math.PI * 2
      );
      ctx.fill();

      // Node movement
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        const dx = mouse.current.x - node.x;
        const dy = mouse.current.y - node.y;

        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 250) {
          node.x += dx * 0.0035;
          node.y += dy * 0.0035;
        }
      }

      // Dynamic lines
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];

          const dx = a.x - b.x;
          const dy = a.y - b.y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 170) {
            ctx.beginPath();

            ctx.strokeStyle = `rgba(34,211,238,${
              (1 - distance / 170) * 0.15
            })`;

            ctx.lineWidth = 1;

            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        const mouseDistance = Math.sqrt(
          Math.pow(mouse.current.x - node.x, 2) +
            Math.pow(mouse.current.y - node.y, 2)
        );

        const radius = mouseDistance < 180 ? 4 : 2.5;

        ctx.beginPath();

        ctx.fillStyle = "rgba(34,211,238,0.85)";
        ctx.shadowBlur = mouseDistance < 180 ? 25 : 15;
        ctx.shadowColor = "#22D3EE";

        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);

        ctx.fill();
      }

      // Click ripple
      ripples.current = ripples.current.filter(
        (r) => r.opacity > 0
      );

      for (const ripple of ripples.current) {
        ripple.radius += 1.5;
        ripple.opacity -= 0.03;

        ctx.beginPath();

        ctx.strokeStyle = `rgba(34,211,238,${ripple.opacity})`;

        ctx.lineWidth = 2;

        ctx.arc(
          ripple.x,
          ripple.y,
          ripple.radius,
          0,
          Math.PI * 2
        );

        ctx.stroke();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
      window.removeEventListener("click", handleClick);
    };
  }, [nodes]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-50 pointer-events-none"
      />

      <div className="fixed inset-0 -z-40 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.15),transparent_60%)]" />

      <div className="fixed left-[10%] top-[20%] h-[300px] w-[300px] rounded-full bg-[#22D3EE]/5 blur-[120px] -z-40 pointer-events-none" />

      <div className="fixed bottom-[10%] right-[15%] h-[350px] w-[350px] rounded-full bg-[#7C3AED]/8 blur-[140px] -z-40 pointer-events-none" />
    </>
  );
}

