import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";

export const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ submitting: false, success: false, error: false, message: "" });
  const [focused, setFocused] = useState({});

  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false, message: "" });
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { name: formData.name, email: formData.email, message: formData.message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus({ submitting: false, success: true, error: false, message: "Message sent successfully!" });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus({ submitting: false, success: false, error: true, message: "Failed to send. Please try again." });
    }
  };

  const isFloated = (name) => focused[name] || formData[name].length > 0;

  return (
    <section
      id="contact"
      className="section"
      style={{ background: "var(--bg-surface)" }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(0,212,255,0.04) 0%, transparent 70%)",
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
          style={{ marginBottom: "4rem", textAlign: "center" }}
        >
          <span className="section-tag" style={{ justifyContent: "center" }}>Let's Talk</span>
          <h2 className="section-heading">
            Get In{" "}
            <span className="text-gradient">Touch</span>
          </h2>
          <p className="section-sub" style={{ margin: "0 auto" }}>
            Open for new opportunities, collaborations, or just a friendly chat about technology.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "4rem",
            alignItems: "start",
            maxWidth: "900px",
            margin: "0 auto",
          }}
          className="contact-grid"
        >
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "1.4rem",
                  color: "var(--text-primary)",
                  marginBottom: "0.75rem",
                  letterSpacing: "-0.02em",
                }}
              >
                Let's build something amazing together
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                Whether you have a project in mind, a question, or just want to connect — my inbox is always open.
              </p>
            </div>

            {/* Contact info items */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { icon: Mail, label: "Email", value: "ahmed2003ijaz@gmail.com", href: "mailto:ahmed2003ijaz@gmail.com" },
                { icon: MapPin, label: "Location", value: "Bahria Town, Lahore, Pakistan", href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1rem",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-md)",
                    transition: "border-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--border)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border-subtle)"; }}
                >
                  <div
                    style={{
                      width: "36px", height: "36px",
                      borderRadius: "50%",
                      background: "var(--primary-glow-sm)",
                      border: "1px solid var(--border)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "var(--primary)", flexShrink: 0,
                    }}
                  >
                    <Icon size={14} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.65rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2px" }}>{label}</div>
                    {href ? (
                      <a href={href} style={{ fontSize: "0.82rem", color: "var(--text-primary)", textDecoration: "none", transition: "color 0.2s ease" }}
                        onMouseEnter={(e) => { e.target.style.color = "var(--primary)"; }}
                        onMouseLeave={(e) => { e.target.style.color = "var(--text-primary)"; }}
                      >{value}</a>
                    ) : (
                      <span style={{ fontSize: "0.82rem", color: "var(--text-primary)" }}>{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div>
              <div style={{ fontSize: "0.65rem", color: "var(--text-muted)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Find me online</div>
              <div style={{ display: "flex", gap: "0.75rem" }}>
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
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                      width: "44px", height: "44px",
                      borderRadius: "50%",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      background: "var(--bg-card)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      transition: "all 0.2s ease",
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
                    <i className={faIcon} style={{ fontSize: "15px" }} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <AnimatePresence mode="wait">
              {status.success ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", damping: 14 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1.5rem",
                    padding: "4rem 2rem",
                    background: "var(--bg-card)",
                    border: "1px solid rgba(34,197,94,0.2)",
                    borderRadius: "var(--radius-xl)",
                    textAlign: "center",
                  }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2, damping: 10 }}
                  >
                    <CheckCircle size={56} style={{ color: "#22c55e" }} />
                  </motion.div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.4rem", color: "var(--text-primary)", marginBottom: "0.5rem" }}>
                      Message Sent!
                    </h3>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                      Thanks for reaching out. I'll get back to you within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setStatus({ submitting: false, success: false, error: false, message: "" })}
                    className="btn-outline"
                    style={{ fontSize: "0.8rem" }}
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  ref={formRef}
                  onSubmit={handleSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-xl)",
                    padding: "2.5rem",
                  }}
                >
                  {/* Name field */}
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      id="contact-name"
                      placeholder=" "
                      required
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocused((f) => ({ ...f, name: true }))}
                      onBlur={() => setFocused((f) => ({ ...f, name: false }))}
                    />
                    <label htmlFor="contact-name">Your Name</label>
                  </div>

                  {/* Email field */}
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      id="contact-email"
                      placeholder=" "
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocused((f) => ({ ...f, email: true }))}
                      onBlur={() => setFocused((f) => ({ ...f, email: false }))}
                    />
                    <label htmlFor="contact-email">Email Address</label>
                  </div>

                  {/* Message field */}
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="contact-message"
                      placeholder=" "
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocused((f) => ({ ...f, message: true }))}
                      onBlur={() => setFocused((f) => ({ ...f, message: false }))}
                    />
                    <label htmlFor="contact-message">Your Message</label>
                  </div>

                  {/* Error message */}
                  <AnimatePresence>
                    {status.error && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          padding: "0.75rem 1rem",
                          background: "rgba(239,68,68,0.1)",
                          border: "1px solid rgba(239,68,68,0.2)",
                          borderRadius: "var(--radius-md)",
                          marginBottom: "1rem",
                          color: "#f87171",
                          fontSize: "0.85rem",
                        }}
                      >
                        <AlertCircle size={14} />
                        {status.message}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit button */}
                  <motion.button
                    type="submit"
                    className="btn-primary ripple-btn"
                    disabled={status.submitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      padding: "0.9rem",
                      fontSize: "0.9rem",
                      opacity: status.submitting ? 0.7 : 1,
                    }}
                  >
                    {status.submitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                          style={{
                            width: "14px",
                            height: "14px",
                            border: "2px solid rgba(0,0,0,0.3)",
                            borderTopColor: "#000",
                            borderRadius: "50%",
                          }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
