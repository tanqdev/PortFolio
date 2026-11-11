import React, { useEffect, useRef } from "react";

const AbstractBackground = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const keyLightRef = useRef(null);

  // Throttled mouse tracking — updates a ref (no re-render) and moves DOM element directly
  useEffect(() => {
    let rafId = null;
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        const el = keyLightRef.current;
        if (el) {
          const { x, y } = mouseRef.current;
          el.style.background = `radial-gradient(700px circle at ${x}px ${y}px, rgba(255,255,255,0.045), transparent 75%)`;
        }
      });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Canvas dust particles — GPU-promoted layer, no shadow blur
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Off-screen canvas so painting never causes page repaints
    const ctx = canvas.getContext("2d", { alpha: true });

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize, { passive: true });

    // Fewer particles → less per-frame CPU work
    const particles = Array.from({ length: 28 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.2 + 0.4,
      speedY: -(Math.random() * 0.2 + 0.06),
      speedX: (Math.random() - 0.5) * 0.12,
      opacity: Math.random() * 0.3 + 0.08,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.y += p.speedY;
        p.x += p.speedX;
        if (p.y < 0) p.y = height;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-black select-none"
      style={{ contain: "strict", willChange: "transform" }}
    >
      {/* 1. Key Light — DOM-driven, no React state updates */}
      <div
        ref={keyLightRef}
        className="absolute inset-0"
        style={{
          background: "radial-gradient(700px circle at -1000px -1000px, rgba(255,255,255,0.045), transparent 75%)",
          willChange: "background",
        }}
      />

      {/* 2. Blueprint Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 90% 80% at 50% 30%, black 40%, transparent 95%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 50% 30%, black 40%, transparent 95%)",
        }}
      />

      {/* 3. Fine Crosshairs */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 0)",
          backgroundSize: "96px 96px",
          backgroundPosition: "-1px -1px",
        }}
      />

      {/* 4. Canvas Dust — GPU layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-70"
        style={{ willChange: "contents" }}
      />

      {/* 5. Film Grain — static, no mix-blend-screen to avoid compositor cost */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 6. Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70 pointer-events-none" />
    </div>
  );
};

export default AbstractBackground;
