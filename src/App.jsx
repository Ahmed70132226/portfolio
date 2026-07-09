import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Certifications } from "./components/Certifications";
import { Skills } from "./components/Skills";

import { Preloader } from "./components/Preloader";
import { useState, useCallback } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "./hooks/useLenis";
import { Heart, ArrowUp } from "lucide-react";

function AnimatedFooter() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      style={{
        background: "var(--bg-deep)",
        borderTop: "1px solid var(--border-subtle)",
        padding: "4rem 5% 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Blueprint grid */}
      <div
        className="blueprint-grid"
        style={{ position: "absolute", inset: 0, opacity: 0.3, pointerEvents: "none" }}
      />

      {/* Animated skyline silhouette */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "60px",
          opacity: 0.04,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
          {/* City skyline shapes */}
          <path
            d="M0 60 L0 30 L40 30 L40 15 L60 15 L60 5 L80 5 L80 15 L100 15 L100 30 L140 30 L140 20 L160 20 L160 10 L180 10 L180 20 L200 20 L200 30 L240 30 L240 35 L260 35 L260 25 L280 25 L280 35 L300 35 L300 30 L340 30 L340 18 L360 18 L360 8 L380 8 L380 18 L400 18 L400 30 L440 30 L440 22 L460 22 L460 12 L480 12 L480 22 L500 22 L500 30 L540 30 L540 35 L560 35 L560 28 L580 28 L580 35 L600 35 L600 30 L640 30 L640 20 L660 20 L660 10 L680 10 L680 20 L700 20 L700 30 L740 30 L740 35 L760 35 L760 25 L780 25 L780 35 L800 35 L800 30 L840 30 L840 18 L860 18 L860 8 L880 8 L880 18 L900 18 L900 30 L940 30 L940 20 L960 20 L960 12 L980 12 L980 20 L1000 20 L1000 30 L1040 30 L1040 35 L1060 35 L1060 22 L1080 22 L1080 35 L1100 35 L1100 30 L1140 30 L1140 18 L1160 18 L1160 8 L1180 8 L1180 18 L1200 18 L1200 30 L1240 30 L1240 20 L1260 20 L1260 10 L1280 10 L1280 20 L1300 20 L1300 30 L1340 30 L1340 35 L1360 35 L1360 28 L1380 28 L1380 35 L1400 35 L1440 35 L1440 60 Z"
            fill="currentColor"
            style={{ color: "var(--primary)" }}
          />
        </svg>
      </div>

      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Top row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "2rem",
                color: "var(--primary)",
                letterSpacing: "-0.03em",
                marginBottom: "0.75rem",
              }}
            >
              MA
              <span
                style={{
                  display: "inline-block",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "var(--primary)",
                  marginLeft: "4px",
                  verticalAlign: "middle",
                }}
              />
            </div>
            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                maxWidth: "260px",
              }}
            >
              Muhammad Ahmed — Software Engineer building robust digital solutions.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "1rem" }}>
              Quick Links
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {["#home", "#services", "#projects", "#contact"].map((href) => (
                <a
                  key={href}
                  href={href}
                  className="link-underline"
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                    textTransform: "capitalize",
                  }}
                  onMouseEnter={(e) => { e.target.style.color = "var(--primary)"; }}
                  onMouseLeave={(e) => { e.target.style.color = "var(--text-secondary)"; }}
                >
                  {href.slice(1)}
                </a>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "1rem" }}>
              Connect
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[
                { faIcon: "fab fa-github", label: "GitHub", href: "https://github.com/Ahmed70132226" },
                { faIcon: "fab fa-linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-ahmed-4565972b7" },
                { faIcon: "fas fa-envelope", label: "Email", href: "mailto:ahmed2003ijaz@gmail.com" },
              ].map(({ faIcon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    fontSize: "0.85rem",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "var(--primary)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-secondary)"; }}
                >
                  <i className={faIcon} style={{ fontSize: "13px" }} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, var(--border), transparent)",
            marginBottom: "2rem",
          }}
        />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontSize: "0.78rem",
              color: "var(--text-muted)",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            © 2026 Muhammad Ahmed. Built with
            <Heart size={12} style={{ color: "var(--primary)", fill: "var(--primary)" }} />
            and React.
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-full)",
              padding: "0.4rem 1rem",
              color: "var(--text-secondary)",
              cursor: "pointer",
              fontSize: "0.75rem",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--border-hover)";
              e.currentTarget.style.color = "var(--primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-subtle)";
              e.currentTarget.style.color = "var(--text-secondary)";
            }}
          >
            <ArrowUp size={12} />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [loaded, setLoaded] = useState(false);

  useLenis();

  const handlePreloaderDone = useCallback(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    setLoaded(true);
  }, []);

  return (
    <>

      <Preloader onComplete={handlePreloaderDone} />

      <AnimatePresence>
        {loaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{ width: "100%", minHeight: "100vh" }}
          >
            <Navbar />
            <Hero />
            <Services />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Certifications />
            <Contact />
            <AnimatedFooter />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
