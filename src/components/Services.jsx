import { useRef } from "react";
import { motion } from "framer-motion";
import { Globe, Smartphone, Code2, Settings, Wrench, BarChart3, Monitor, Cloud } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Modern, responsive, and high-performance websites built with the latest technologies.",
    icon: Globe,
    color: "#00d4ff",
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform mobile applications that provide seamless user experiences.",
    icon: Smartphone,
    color: "#66e5ff",
  },
  {
    title: "Software Development",
    description: "End-to-end software solutions tailored to meet your unique business needs.",
    icon: Code2,
    color: "#00d4ff",
  },
  {
    title: "Custom Software",
    description: "Bespoke software built from scratch to solve specific business problems at scale.",
    icon: Settings,
    color: "#66e5ff",
  },
  {
    title: "Software Maintenance",
    description: "Reliable support and maintenance to ensure your software runs smoothly 24/7.",
    icon: Wrench,
    color: "#00d4ff",
  },
  {
    title: "ERP Systems",
    description: "Integrated Enterprise Resource Planning systems to streamline your operations.",
    icon: BarChart3,
    color: "#66e5ff",
  },
  {
    title: "SaaS Solutions",
    description: "Cloud-based Software as a Service platforms accessible from anywhere.",
    icon: Cloud,
    color: "#00d4ff",
  },
  {
    title: "System Architecture",
    description: "Scalable and robust custom systems designed for long-term growth and efficiency.",
    icon: Monitor,
    color: "#66e5ff",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

function ServiceCard({ service, index }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  };

  const handleMouseLeave = (e) => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
    e.currentTarget.style.borderColor = "var(--border-subtle)";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <motion.div
      ref={cardRef}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--border-hover)";
        e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px var(--border)";
      }}
      onMouseLeave={handleMouseLeave}
      className="shine-card"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-lg)",
        padding: "2rem",
        cursor: "default",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        transformStyle: "preserve-3d",
        willChange: "transform",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top glow accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: `linear-gradient(90deg, transparent, ${service.color}40, transparent)`,
          opacity: 0,
          transition: "opacity 0.3s ease",
        }}
        className="card-top-glow"
      />

      {/* Icon */}
      <div
        style={{
          width: "52px",
          height: "52px",
          borderRadius: "var(--radius-md)",
          background: "var(--primary-glow-sm)",
          border: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1.5rem",
          transition: "all 0.3s var(--ease-spring)",
          color: "var(--primary)",
        }}
        className="service-icon-box"
      >
        <service.icon size={22} strokeWidth={1.5} />
      </div>

      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "1.1rem",
          color: "var(--text-primary)",
          marginBottom: "0.75rem",
          letterSpacing: "-0.01em",
        }}
      >
        {service.title}
      </h3>
      <p
        style={{
          fontSize: "0.875rem",
          color: "var(--text-secondary)",
          lineHeight: 1.7,
        }}
      >
        {service.description}
      </p>

      {/* Number label */}
      <div
        style={{
          position: "absolute",
          bottom: "1.5rem",
          right: "1.5rem",
          fontFamily: "var(--font-mono)",
          fontSize: "0.65rem",
          color: "var(--text-muted)",
          letterSpacing: "0.1em",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      <style>{`
        .shine-card:hover .card-top-glow { opacity: 1 !important; }
        .shine-card:hover .service-icon-box {
          background: var(--primary-glow) !important;
          border-color: var(--border-hover) !important;
          transform: rotate(10deg) scale(1.05);
        }
      `}</style>
    </motion.div>
  );
}

export const Services = () => {
  return (
    <section
      id="services"
      className="section"
      style={{ background: "var(--bg-surface)" }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: "20%",
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
          <span className="section-tag">What I Do</span>
          <h2 className="section-heading">
            My{" "}
            <span className="text-gradient">Services</span>
          </h2>
          <p className="section-sub">
            From concept to deployment — I build robust, scalable software solutions
            tailored to your business objectives.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
