import { motion } from "framer-motion";
import { Award, BadgeCheck } from "lucide-react";

const certifications = [
  {
    title: "Advance Programming",
    issuer: "PNY Trainings UAE",
    topics: "Microsoft Power BI, Data Analysis, Advanced Python",
    credentialId: "ADP-1-10-0036",
    year: "2024",
    color: "#00d4ff",
    icon: "📊",
  },
  {
    title: "Web Development",
    issuer: "ehunar",
    topics: "Cascading Style Sheets (CSS) and React.js",
    credentialId: "be86cdb63b",
    year: "2024",
    color: "#66e5ff",
    icon: "🌐",
  },
];

export const Certifications = () => {
  return (
    <section
      id="certifications"
      className="section"
      style={{ background: "var(--bg-deep)" }}
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
          <span className="section-tag">Credentials</span>
          <h2 className="section-heading">
            <span className="text-gradient">Certifications</span>
          </h2>
          <p className="section-sub">
            Professional credentials validating expertise in modern development tools and practices.
          </p>
        </motion.div>

        {/* Certifications */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "2rem",
            maxWidth: "860px",
          }}
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
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
                boxShadow: "0 24px 70px rgba(0,0,0,0.45), 0 0 0 1px var(--border)",
              }}
            >
              {/* Background pattern */}
              <div
                style={{
                  position: "absolute",
                  top: "-30px",
                  right: "-30px",
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  border: `1px solid ${cert.color}15`,
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "-10px",
                  right: "-10px",
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  border: `1px solid ${cert.color}10`,
                  pointerEvents: "none",
                }}
              />

              {/* Cert seal area */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: `radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)`,
                    border: `1px solid ${cert.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    flexShrink: 0,
                  }}
                >
                  {cert.icon}
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      marginBottom: "0.2rem",
                    }}
                  >
                    <BadgeCheck size={14} style={{ color: "var(--primary)" }} />
                    <span
                      style={{
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--primary)",
                      }}
                    >
                      Verified
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    {cert.year}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "1.2rem",
                  color: "var(--text-primary)",
                  letterSpacing: "-0.02em",
                  marginBottom: "0.4rem",
                }}
              >
                {cert.title}
              </h3>

              {/* Issuer */}
              <h4
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "var(--primary)",
                  marginBottom: "0.75rem",
                }}
              >
                {cert.issuer}
              </h4>

              {/* Topics */}
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.65,
                  marginBottom: "1.5rem",
                }}
              >
                {cert.topics}
              </p>

              {/* Credential ID */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.6rem 1rem",
                  background: "rgba(0,0,0,0.3)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-md)",
                }}
              >
                <Award size={12} style={{ color: "var(--text-muted)", flexShrink: 0 }} />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "var(--text-muted)",
                    letterSpacing: "0.05em",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {cert.credentialId}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
