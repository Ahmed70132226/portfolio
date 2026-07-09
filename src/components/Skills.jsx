import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Programming Languages",
    icon: "⚡",
    items: ["Python", "C++", "JavaScript"],
  },
  {
    category: "Web Development",
    icon: "🌐",
    items: ["HTML", "CSS", "JavaScript", "React", "PHP", "Laravel", "Node.js", "Next.js", "Express.js"],
  },
  {
    category: "Database Management",
    icon: "🗄️",
    items: ["MySQL", "SQL", "MongoDB", "PostgreSQL"],
  },
  {
    category: "Tools & Other Skills",
    icon: "🛠️",
    items: ["Figma", "Power BI", "Prompt Engineering", "Agile", "MS Office", "SRS Documentation"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.05, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] },
  }),
};

export const Skills = () => {
  return (
    <section
      id="skills"
      className="section"
      style={{ background: "var(--bg-deep)" }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "-100px",
          width: "400px",
          height: "400px",
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
          style={{ marginBottom: "4rem" }}
        >
          <span className="section-tag">Expertise</span>
          <h2 className="section-heading">
            Technical{" "}
            <span className="text-gradient">Skills</span>
          </h2>
          <p className="section-sub">
            A comprehensive toolkit built through real-world projects and continuous learning.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {skillGroups.map((group, gi) => (
            <motion.div
              key={gi}
              variants={cardVariants}
              className="shine-card"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-lg)",
                padding: "2rem",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
              }}
              whileHover={{
                borderColor: "var(--border)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
                y: -4,
              }}
            >
              {/* Category header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "var(--radius-md)",
                    background: "var(--primary-glow-sm)",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.1rem",
                    flexShrink: 0,
                  }}
                >
                  {group.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "0.95rem",
                    color: "var(--text-primary)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {group.category}
                </h3>
              </div>

              {/* Divider */}
              <div
                style={{
                  height: "1px",
                  background: "linear-gradient(90deg, var(--border), transparent)",
                  marginBottom: "1.25rem",
                }}
              />

              {/* Skill badges */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {group.items.map((item, ii) => (
                  <motion.span
                    key={ii}
                    custom={ii}
                    variants={badgeVariants}
                    className="tag"
                    whileHover={{ scale: 1.1, background: "var(--primary)", color: "#000", borderColor: "var(--primary)" }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>

              {/* Count badge */}
              <div
                style={{
                  marginTop: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <div style={{ flex: 1, height: "2px", background: "var(--primary-glow-sm)", borderRadius: "2px", position: "relative", overflow: "hidden" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: gi * 0.2 }}
                    style={{ height: "100%", background: "linear-gradient(90deg, var(--primary-dark), var(--primary))", borderRadius: "2px" }}
                  />
                </div>
                <span style={{ fontSize: "0.65rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)", whiteSpace: "nowrap" }}>
                  {group.items.length} skills
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
