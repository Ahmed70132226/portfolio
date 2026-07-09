import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

const education = [
  {
    institution: "University of Lahore",
    location: "Lahore, Pakistan",
    degree: "Bachelors of Software Engineering",
    period: "2022 – 2026",
    icon: GraduationCap,
    color: "var(--primary)",
    description: "Comprehensive computer science and software engineering curriculum with focus on systems design, algorithms, and modern web technologies.",
    highlights: ["Data Structures & Algorithms", "Software Architecture", "Database Systems", "Machine Learning"],
  },
  {
    institution: "Govt. College of Science",
    location: "Lahore, Pakistan",
    degree: "Intermediate — Pre-Engineering",
    period: "2019 – 2021",
    icon: BookOpen,
    color: "#66e5ff",
    description: "Pre-engineering studies with strong foundation in Mathematics, Physics, and Chemistry.",
    highlights: ["Mathematics", "Physics", "Chemistry"],
  },
];

export const Education = () => {
  return (
    <section
      id="education"
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
          <span className="section-tag">Academic</span>
          <h2 className="section-heading">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="section-sub">
            Building a strong theoretical foundation to complement hands-on engineering experience.
          </p>
        </motion.div>

        {/* Education cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "2rem", maxWidth: "900px" }}>
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="shine-card"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-xl)",
                padding: "2.5rem",
                position: "relative",
                overflow: "hidden",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s var(--ease-spring)",
              }}
              whileHover={{
                y: -8,
                borderColor: "var(--border-hover)",
                boxShadow: "0 24px 70px rgba(0,0,0,0.45)",
              }}
            >
              {/* Top gradient accent bar */}
              <div
                style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0,
                  height: "3px",
                  background: `linear-gradient(90deg, ${edu.color}, transparent)`,
                  opacity: 0.6,
                }}
              />

              {/* Icon */}
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "var(--radius-md)",
                  background: "var(--primary-glow-sm)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                  color: "var(--primary)",
                }}
              >
                <edu.icon size={24} strokeWidth={1.5} />
              </div>

              {/* Institution */}
              <div style={{ marginBottom: "1rem" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 900,
                    fontSize: "1.15rem",
                    color: "var(--text-primary)",
                    letterSpacing: "-0.02em",
                    marginBottom: "0.25rem",
                  }}
                >
                  {edu.institution}
                </h3>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                  📍 {edu.location}
                </div>
              </div>

              {/* Degree */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "0.35rem 0.9rem",
                  background: "var(--primary-glow-sm)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-full)",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "var(--primary)",
                  marginBottom: "1rem",
                }}
              >
                {edu.degree}
              </div>

              {/* Year */}
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: "var(--text-muted)",
                  letterSpacing: "0.1em",
                  marginBottom: "1rem",
                }}
              >
                {edu.period}
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  marginBottom: "1.25rem",
                }}
              >
                {edu.description}
              </p>

              {/* Highlights */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {edu.highlights.map((h) => (
                  <span key={h} className="tag" style={{ fontSize: "0.7rem" }}>{h}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
