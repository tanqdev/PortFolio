import React, { useEffect, useState, useRef } from "react";

const AbstractBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Ambient floating monochromatic film dust motes on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Monochromatic noir dust particles
    const particleCount = 45;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.5,
      speedY: -(Math.random() * 0.25 + 0.08),
      speedX: (Math.random() - 0.5) * 0.15,
      opacity: Math.random() * 0.35 + 0.1,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;

        // Wrap around screen
        if (p.y < 0) p.y = height;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

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
    >
      {/* 1. Subtle Monochromatic Noir Key Light (White ambient beam following cursor, NO colorful glow) */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(700px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.045), transparent 75%)`,
        }}
      />

      {/* 2. Razor-Sharp Noir Architectural Blueprint Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 90% 80% at 50% 30%, black 40%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 80% at 50% 30%, black 40%, transparent 95%)",
        }}
      />

      {/* 3. Noir Fine Crosshairs */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.6) 1px, transparent 0)`,
          backgroundSize: "96px 96px",
          backgroundPosition: "-1px -1px",
        }}
      />

      {/* 4. Monochromatic Film Specks / Dust Motes */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-70"
      />

      {/* 5. Authentic 35mm Noir Film Grain Overlay */}
      <div
        className="absolute inset-0 opacity-[0.055] mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 6. Dramatic Film Noir Vignette Shadows */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70 pointer-events-none" />
    </div>
  );
};

export default AbstractBackground;
