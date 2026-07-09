import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";

const CATEGORIES = ["All", "ERP/HRM", "Web", "AI/ML", "Mobile"];

const projects = [
  {
    id: 1,
    title: "Car Modification App — FYP",
    description: "AR/AI-based real-time car modification tool with 3D visualization and interactive rendering engine.",
    emoji: "🚗",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    accent: "#e94560",
    tech: ["AR/AI", "3D Rendering", "Computer Vision", "Real-time"],
    category: "AI/ML",
    year: "2025",
  },
  {
    id: 2,
    title: "FITME",
    description: "Full-featured e-commerce platform with product catalog, cart management, and payment integration.",
    emoji: "🛒",
    gradient: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
    accent: "#00d4ff",
    tech: ["E-commerce", "React", "Node.js", "Web Dev"],
    category: "Web",
    year: "2024",
  },
  {
    id: 3,
    title: "BZU Digitalization",
    description: "Enterprise ERP and HRM modules to digitalize university operations and automate administrative processes.",
    emoji: "🎓",
    gradient: "linear-gradient(135deg, #0d1b2a 0%, #1b263b 100%)",
    accent: "#7c3aed",
    tech: ["ERP", "HRM", "Laravel", "Automation"],
    category: "ERP/HRM",
    year: "2025",
  },
  {
    id: 4,
    title: "PCSIR Digitalization",
    description: "LMS and ERP modules for Pakistan Council of Scientific and Industrial Research to streamline lab and HR operations.",
    emoji: "🔬",
    gradient: "linear-gradient(135deg, #071217 0%, #0d2137 100%)",
    accent: "#00d4ff",
    tech: ["LMS", "ERP", "PHP", "Management"],
    category: "ERP/HRM",
    year: "2025",
  },
  {
    id: 5,
    title: "Spam Email Detector",
    description: "AI-powered email classification tool using machine learning to detect and filter spam with high accuracy.",
    emoji: "📧",
    gradient: "linear-gradient(135deg, #1a0a0a 0%, #2d1515 100%)",
    accent: "#ef4444",
    tech: ["Python", "Machine Learning", "NLP", "scikit-learn"],
    category: "AI/ML",
    year: "2024",
  },
];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState(null);

  const filtered = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <section
      id="projects"
      className="section"
      style={{ background: "var(--bg-deep)" }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-150px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "3rem" }}
        >
          <span className="section-tag">Portfolio</span>
          <h2 className="section-heading">
            Featured{" "}
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-sub">
            A selection of my most impactful work across different domains and tech stacks.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{ display: "flex", gap: "0.5rem", marginBottom: "3rem", flexWrap: "wrap" }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "0.45rem 1.1rem",
                borderRadius: "var(--radius-full)",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.05em",
                border: "none",
                cursor: "pointer",
                transition: "all 0.25s ease",
                background: activeCategory === cat ? "var(--primary)" : "var(--bg-card)",
                color: activeCategory === cat ? "#000" : "var(--text-secondary)",
                boxShadow: activeCategory === cat ? "0 4px 14px rgba(0,212,255,0.3)" : "none",
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="project-card shine-card"
                style={{
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  cursor: "default",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s var(--ease-spring)",
                  transform: hoveredId === project.id ? "translateY(-8px)" : "translateY(0)",
                  borderColor: hoveredId === project.id ? "var(--border-hover)" : "var(--border-subtle)",
                  boxShadow: hoveredId === project.id ? "0 20px 60px rgba(0,0,0,0.5)" : "none",
                }}
              >
                {/* Image area */}
                <div
                  style={{
                    height: "200px",
                    background: project.gradient,
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "4rem",
                    transition: "transform 0.5s ease",
                    transform: hoveredId === project.id ? "scale(1.05)" : "scale(1)",
                  }}
                >
                  {project.emoji}

                  {/* Overlay on hover */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `linear-gradient(135deg, ${project.accent}15, transparent)`,
                      transition: "opacity 0.3s ease",
                      opacity: hoveredId === project.id ? 1 : 0,
                    }}
                  />

                  {/* Hover action overlay */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: hoveredId === project.id ? 1 : 0,
                      y: hoveredId === project.id ? 0 : 10,
                    }}
                    transition={{ duration: 0.2 }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "flex-end",
                      padding: "1rem",
                      gap: "0.5rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        padding: "0.4rem 0.8rem",
                        background: "rgba(0,0,0,0.8)",
                        backdropFilter: "blur(8px)",
                        borderRadius: "var(--radius-full)",
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        color: "var(--primary)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      <ExternalLink size={10} />
                      View Project
                    </div>
                  </motion.div>

                  {/* Year badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: "1rem",
                      left: "1rem",
                      padding: "0.2rem 0.6rem",
                      background: "rgba(0,0,0,0.6)",
                      backdropFilter: "blur(8px)",
                      borderRadius: "var(--radius-full)",
                      fontSize: "0.65rem",
                      color: "rgba(255,255,255,0.6)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {project.year}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: "1.5rem" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: "1.05rem",
                      color: "var(--text-primary)",
                      marginBottom: "0.5rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.65,
                      marginBottom: "1.25rem",
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                    {project.tech.map((t) => (
                      <span key={t} className="tag" style={{ fontSize: "0.7rem", padding: "0.2rem 0.6rem" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
