import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ExternalLink, Mail, ArrowDown, Code2, Database, Globe, Cpu } from "lucide-react";

const ROLES = ["Software Engineer", "Full-Stack Developer", "ERP Specialist", "React Developer"];

// Particle system
function useParticles(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4 - 0.1;
        this.alpha = Math.random() * 0.5 + 0.1;
        this.decay = 0.001 + Math.random() * 0.001;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.alpha -= this.decay;
        if (this.alpha <= 0) this.reset();
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = "#00d4ff";
        ctx.shadowBlur = 6;
        ctx.shadowColor = "#00d4ff";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < 80; i++) particles.push(new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => { p.update(); p.draw(); });
      // Draw lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.save();
            ctx.globalAlpha = (1 - dist / 100) * 0.06;
            ctx.strokeStyle = "#00d4ff";
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [canvasRef]);
}

// Typewriter hook
function useTypewriter(words) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), 80);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), 45);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    }

    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words]);

  return display;
}

// Mouse parallax
function useParallax(containerRef) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleMouseMove = (e) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      const layers = container.querySelectorAll("[data-parallax]");
      layers.forEach((layer) => {
        const depth = parseFloat(layer.dataset.parallax) || 1;
        gsap.to(layer, {
          x: x * depth * 30,
          y: y * depth * 15,
          duration: 1,
          ease: "power2.out",
        });
      });
    };
    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [containerRef]);
}

const TECH_ORBIT = [
  { icon: Code2, label: "React" },
  { icon: Database, label: "SQL" },
  { icon: Globe, label: "Node" },
  { icon: Cpu, label: "AI" },
];

const STATS = [
  { value: "5+", label: "Projects" },
  { value: "2", label: "Companies" },
  { value: "3+", label: "Certs" },
];

export const Hero = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);

  const role = useTypewriter(ROLES);

  useParticles(canvasRef);
  useParallax(containerRef);

  // GSAP entrance animations
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });
    if (titleRef.current) {
      // Split text character by character
      const text = titleRef.current.textContent;
      titleRef.current.innerHTML = text
        .split("")
        .map((ch) => `<span style="display:inline-block;opacity:0;transform:translateY(40px)">${ch === " " ? "&nbsp;" : ch}</span>`)
        .join("");

      tl.to(titleRef.current.querySelectorAll("span"), {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.04,
        ease: "back.out(1.4)",
      });
    }
    tl.from(subtitleRef.current, { opacity: 0, y: 20, duration: 0.6 }, "-=0.2")
      .from(descRef.current, { opacity: 0, y: 20, duration: 0.6 }, "-=0.3")
      .from(ctaRef.current?.children ? Array.from(ctaRef.current.children) : [], { opacity: 0, y: 15, stagger: 0.1, duration: 0.5 }, "-=0.2")
      .from(statsRef.current?.children ? Array.from(statsRef.current.children) : [], { opacity: 0, scale: 0.8, stagger: 0.1, duration: 0.5, ease: "back.out(1.5)" }, "-=0.2");
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      style={{
        minHeight: "100vh",
        background: "var(--bg-deep)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 5%",
        paddingTop: "100px",
        paddingBottom: "60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Blueprint grid background */}
      <div
        className="blueprint-grid"
        data-parallax="0.3"
        style={{
          position: "absolute", inset: 0,
          opacity: 0.6, pointerEvents: "none", zIndex: 0,
        }}
      />
      <div
        className="blueprint-grid-fine"
        data-parallax="0.5"
        style={{
          position: "absolute", inset: 0,
          opacity: 0.4, pointerEvents: "none", zIndex: 0,
        }}
      />

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="hero-canvas"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 1 }}
      />

      {/* Gradient radial glows */}
      <div
        data-parallax="0.2"
        style={{
          position: "absolute",
          top: "20%",
          left: "60%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <div
        data-parallax="0.4"
        style={{
          position: "absolute",
          bottom: "20%",
          left: "10%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Main content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "var(--container-max)",
          width: "100%",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* Left content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Badge */}
          <motion.div
            className="stat-badge"
            style={{ alignSelf: "flex-start", animationDuration: "4s" }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span style={{ color: "var(--primary)", fontSize: "1rem" }}>👋</span>
            <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>
              Hello — Available for work
            </span>
          </motion.div>

          {/* Name */}
          <div>
            <h1
              ref={titleRef}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                fontWeight: 900,
                lineHeight: 1.0,
                letterSpacing: "-0.04em",
                color: "var(--text-primary)",
                marginBottom: "0.5rem",
              }}
            >
              Ahmed
            </h1>
            <div
              ref={subtitleRef}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
                fontWeight: 700,
                color: "var(--primary)",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                letterSpacing: "-0.02em",
              }}
            >
              {role}
              <span className="typewriter-cursor" />
            </div>
          </div>

          {/* Description */}
          <p
            ref={descRef}
            style={{
              fontSize: "1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.8,
              maxWidth: "460px",
            }}
          >
            Motivated Software Engineer with a strong foundation in full-stack development.
            Experienced in designing and implementing{" "}
            <span style={{ color: "var(--primary)", fontWeight: 600 }}>ERP, CRM, and HRM</span>{" "}
            systems at scale.
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="#projects" className="btn-primary ripple-btn" onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}>
              View My Work
              <ArrowDown size={14} />
            </a>
            <a href="#contact" className="btn-outline" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}>
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            {[
              { faIcon: "fab fa-github", href: "https://github.com/Ahmed70132226", label: "GitHub" },
              { faIcon: "fab fa-linkedin", href: "https://www.linkedin.com/in/muhammad-ahmed-4565972b7", label: "LinkedIn" },
              { faIcon: "fas fa-envelope", href: "mailto:ahmed2003ijaz@gmail.com", label: "Email" },
            ].map(({ faIcon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  fontSize: "0.9rem",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--primary)";
                  e.currentTarget.style.color = "var(--primary)";
                  e.currentTarget.style.background = "var(--primary-glow-sm)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-subtle)";
                  e.currentTarget.style.color = "var(--text-secondary)";
                  e.currentTarget.style.background = "var(--bg-card)";
                }}
              >
                <i className={faIcon} />
              </motion.a>
            ))}

            {/* Divider */}
            <div style={{ width: "1px", height: "24px", background: "var(--border-subtle)" }} />

            {/* Location */}
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
              📍 Bahria Town, Lahore
            </span>
          </div>

          {/* Stat badges */}
          <div ref={statsRef} style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
            {STATS.map((s, i) => (
              <div
                key={i}
                className="stat-badge"
                style={{ animationDelay: `${i * 0.8}s`, animationDuration: `${3 + i * 0.5}s` }}
              >
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "1rem", color: "var(--primary)" }}>
                  {s.value}
                </span>
                <span style={{ fontSize: "0.72rem", color: "var(--text-secondary)" }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Profile Photo Visual */}
        <motion.div
          data-parallax="0.6"
          className="hero-visual"
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "500px",
          }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >

          {/* Outer ambient glow */}
          <div style={{
            position: "absolute",
            width: "340px",
            height: "340px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          {/* Slowly rotating dashed ring — outer */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            style={{
              position: "absolute",
              width: "310px",
              height: "310px",
              borderRadius: "50%",
              border: "1px dashed rgba(0, 212, 255, 0.18)",
              pointerEvents: "none",
            }}
          />

          {/* Counter-rotating dashed ring — inner */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            style={{
              position: "absolute",
              width: "260px",
              height: "260px",
              borderRadius: "50%",
              border: "1px dashed rgba(0, 212, 255, 0.10)",
              pointerEvents: "none",
            }}
          />

          {/* Conic-gradient spinning glow border around photo */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{
              position: "absolute",
              width: "232px",
              height: "232px",
              borderRadius: "50%",
              background: "conic-gradient(from 0deg, #00d4ff, transparent 50%, #00d4ff)",
              opacity: 0.55,
              pointerEvents: "none",
            }}
          />

          {/* Photo frame — subtle float */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ position: "relative", zIndex: 2 }}
          >
            {/* Inner border ring */}
            <div style={{
              position: "absolute",
              inset: "-4px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, rgba(0,212,255,0.6) 0%, rgba(0,212,255,0.05) 50%, rgba(0,212,255,0.4) 100%)",
              zIndex: 0,
            }} />

            {/* The actual photo */}
            <div style={{
              position: "relative",
              zIndex: 1,
              width: "220px",
              height: "220px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "3px solid var(--bg-deep)",
              boxShadow: "0 0 0 1px rgba(0,212,255,0.2), 0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(0,212,255,0.08)",
            }}>
              <img
                src="/Ahmed Ijaz.png"
                alt="Ahmed Ijaz — Software Engineer"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top center",
                  display: "block",
                }}
              />
            </div>
          </motion.div>

          {/* Orbiting tech icons around the photo */}
          {TECH_ORBIT.map((tech, i) => {
            const angle = (i / TECH_ORBIT.length) * 2 * Math.PI - Math.PI / 4;
            const radius = 148;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            return (
              <motion.div
                key={tech.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.15, type: "spring", damping: 12 }}
                style={{
                  position: "absolute",
                  left: `calc(50% + ${x}px - 24px)`,
                  top: `calc(50% + ${y}px - 24px)`,
                  zIndex: 3,
                }}
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3 + i * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                  whileHover={{ scale: 1.25 }}
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "rgba(5, 10, 15, 0.9)",
                    border: "1px solid rgba(0, 212, 255, 0.25)",
                    backdropFilter: "blur(12px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: "2px",
                    color: "var(--primary)",
                    cursor: "default",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.4), 0 0 12px rgba(0,212,255,0.1)",
                  }}
                >
                  <tech.icon size={17} strokeWidth={1.5} />
                  <span style={{ fontSize: "0.45rem", letterSpacing: "0.08em", color: "rgba(0,212,255,0.7)", textTransform: "uppercase" }}>
                    {tech.label}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}

          {/* Floating card — Open to Work (top-right) */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="glass"
            style={{
              position: "absolute",
              top: "6%",
              right: "-4%",
              padding: "0.75rem 1.1rem",
              borderRadius: "var(--radius-md)",
              display: "flex",
              alignItems: "center",
              gap: "0.65rem",
              minWidth: "168px",
              zIndex: 4,
            }}
          >
            <div style={{
              width: "8px", height: "8px",
              borderRadius: "50%",
              background: "#22c55e",
              boxShadow: "0 0 10px #22c55e",
              flexShrink: 0,
            }} />
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.78rem", color: "var(--text-primary)" }}>
                Open to Work
              </div>
              <div style={{ fontSize: "0.62rem", color: "var(--text-muted)" }}>Full-time / Freelance</div>
            </div>
          </motion.div>

          {/* Floating card — Experience (bottom-left) */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="glass"
            style={{
              position: "absolute",
              bottom: "8%",
              left: "-4%",
              padding: "0.75rem 1.1rem",
              borderRadius: "var(--radius-md)",
              display: "flex",
              alignItems: "center",
              gap: "0.65rem",
              minWidth: "154px",
              zIndex: 4,
            }}
          >
            <span style={{ fontSize: "1.1rem" }}>⚡</span>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.78rem", color: "var(--text-primary)" }}>
                1yr+ Experience
              </div>
              <div style={{ fontSize: "0.62rem", color: "var(--text-muted)" }}>Professional work</div>
            </div>
          </motion.div>

          {/* Floating card — Projects (bottom-right) */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
            className="glass"
            style={{
              position: "absolute",
              bottom: "18%",
              right: "-2%",
              padding: "0.65rem 1rem",
              borderRadius: "var(--radius-md)",
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              zIndex: 4,
            }}
          >
            <span style={{ fontSize: "1rem" }}>🚀</span>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.76rem", color: "var(--text-primary)" }}>
                5+ Projects
              </div>
              <div style={{ fontSize: "0.6rem", color: "var(--text-muted)" }}>Delivered</div>
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
        }}
      >
        <div className="scroll-indicator">
          <div className="scroll-indicator-dot" />
          <div className="scroll-indicator-line" />
        </div>
      </div>

      {/* Responsive hero grid */}
      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .hero-visual {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};
