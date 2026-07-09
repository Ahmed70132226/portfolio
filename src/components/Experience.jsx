import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, Code2, Globe } from "lucide-react";

const experiences = [
  {
    company: "Biafotech Private Limited",
    role: "Associate Software Engineer",
    type: "Full-time",
    period: "Oct 2025 – Present",
    year: "2025",
    icon: Building2,
    skills: ["React", "Node.js", "ERP", "Laravel"],
    description: "Building enterprise-grade ERP modules and full-stack applications for government and private sector clients.",
    current: true,
  },
  {
    company: "Biafotech Private Limited",
    role: "Software Developer",
    type: "Internship",
    period: "May 2025 – Oct 2025",
    year: "2025",
    icon: Code2,
    skills: ["PHP", "MySQL", "JavaScript", "HRM"],
    description: "Developed HRM and LMS system modules; contributed to full-cycle software development under senior engineers.",
    current: false,
  },
  {
    company: "Excellence Code Solution",
    role: "Web Developer — Frontend",
    type: "Internship",
    period: "Jan 2025 – Feb 2025",
    year: "2025",
    icon: Globe,
    skills: ["React", "CSS", "HTML", "UI/UX"],
    description: "Built responsive UI components and landing pages for various client projects.",
    current: false,
  },
];

export const Experience = () => {
  const timelineRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the timeline line drawing
      if (lineRef.current) {
        gsap.from(lineRef.current, {
          scaleY: 0,
          transformOrigin: "top center",
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 75%",
            end: "bottom 50%",
            toggleActions: "play none none reset",
          },
        });
      }

      // Animate each timeline item
      gsap.utils.toArray(".timeline-item").forEach((item, i) => {
        gsap.from(item, {
          opacity: 0,
          x: -30,
          duration: 0.7,
          delay: i * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reset",
          },
        });
      });
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      className="section"
      style={{ background: "var(--bg-surface)" }}
    >
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "4rem" }}
        >
          <span className="section-tag">Career</span>
          <h2 className="section-heading">
            Work{" "}
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-sub">
            A journey through meaningful projects and organizations that shaped my engineering skills.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="timeline" style={{ maxWidth: "720px" }}>
          {/* Animated line */}
          <div
            ref={lineRef}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "1.5px",
              height: "100%",
              background: "linear-gradient(to bottom, var(--primary), rgba(0,212,255,0.1))",
              transformOrigin: "top center",
            }}
          />

          {experiences.map((exp, i) => (
            <div key={i} className="timeline-item">
              {/* Dot */}
              <div className="timeline-dot">
                {exp.current && (
                  <motion.div
                    animate={{ scale: [1, 1.8, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{
                      position: "absolute",
                      inset: "-4px",
                      borderRadius: "50%",
                      border: "1.5px solid var(--primary)",
                    }}
                  />
                )}
              </div>

              {/* Year */}
              <div className="timeline-year">{exp.period}</div>

              {/* Card */}
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="shine-card"
                style={{
                  flex: 1,
                  background: "var(--bg-card)",
                  border: exp.current ? "1px solid var(--border)" : "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-md)",
                  padding: "1.5rem",
                  boxShadow: exp.current ? "0 0 20px var(--primary-glow-sm)" : "none",
                  transition: "border-color 0.3s ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--border-hover)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = exp.current ? "var(--border)" : "var(--border-subtle)"; }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "0.75rem", flexWrap: "wrap", gap: "0.5rem" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
                      <exp.icon size={14} style={{ color: "var(--primary)" }} />
                      <h3
                        style={{
                          fontFamily: "var(--font-display)",
                          fontWeight: 800,
                          fontSize: "1.05rem",
                          color: "var(--text-primary)",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {exp.company}
                      </h3>
                    </div>
                    <h4
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--primary)",
                        fontWeight: 600,
                      }}
                    >
                      {exp.role}
                    </h4>
                  </div>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                    <span
                      style={{
                        padding: "0.2rem 0.6rem",
                        borderRadius: "var(--radius-full)",
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        background: exp.current ? "rgba(34,197,94,0.1)" : "var(--primary-glow-sm)",
                        color: exp.current ? "#22c55e" : "var(--primary)",
                        border: exp.current ? "1px solid rgba(34,197,94,0.2)" : "1px solid var(--border)",
                      }}
                    >
                      {exp.current ? "Current" : exp.type}
                    </span>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                    marginBottom: "1rem",
                  }}
                >
                  {exp.description}
                </p>

                {/* Tech tags */}
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {exp.skills.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
