import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage:
                "linear-gradient(45deg, #1a1a1a, #2d2d2d)", // Fallback style
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <span style={{ fontSize: "3rem" }}>🚗</span>
          </motion.div>
          <h3>Car Modification APP — FYP</h3>
          <p>
            AR/AI-based real-time car modification tool with 3D visualization.
          </p>
          <div className="project-tech">
            <span>AR/AI</span>
            <span>3D</span>
            <span>Real-time</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage:
                "linear-gradient(45deg, #1a1a1a, #2d2d2d)", // Fallback style
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <span style={{ fontSize: "3rem" }}>🛒</span>
          </motion.div>
          <h3>FITME</h3>
          <p>An Ecommerce website.</p>
          <div className="project-tech">
            <span>E-commerce</span>
            <span>Web Dev</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage:
                "linear-gradient(45deg, #1a1a1a, #2d2d2d)", // Fallback style
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <span style={{ fontSize: "3rem" }}>🎓</span>
          </motion.div>
          <h3>BZU Digitalization</h3>
          <p>
            Developed and integrated ERP and HRM modules to digitalize university
            operations.
          </p>
          <div className="project-tech">
            <span>ERP</span>
            <span>HRM</span>
            <span>Automation</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage:
                "linear-gradient(45deg, #1a1a1a, #2d2d2d)", // Fallback style
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <span style={{ fontSize: "3rem" }}>🔬</span>
          </motion.div>
          <h3>PCSIR Digitalization System</h3>
          <p>
            Developed LMS and ERP modules to automate organizational processes,
            enhancing efficiency.
          </p>
          <div className="project-tech">
            <span>LMS</span>
            <span>ERP</span>
            <span>Management</span>
          </div>
        </motion.div>
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage:
                "linear-gradient(45deg, #1a1a1a, #2d2d2d)", // Fallback style
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <span style={{ fontSize: "3rem" }}>📧</span>
          </motion.div>
          <h3>Spam Email Detector</h3>
          <p>
            An AI-powered tool to detect and filter spam emails with high accuracy.
          </p>
          <div className="project-tech">
            <span>Python</span>
            <span>Machine Learning</span>
            <span>AI</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
