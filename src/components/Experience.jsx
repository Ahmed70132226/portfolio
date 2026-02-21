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

export const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="experience"
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
        Experience
      </motion.h2>
      <motion.div
        className="experience-container"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="experience-card"
          variants={fadeInUp}
          whileHover={{ x: 10, transition: { duration: 0.2 } }}
        >
          <h3>Biafotech Private Limited</h3>
          <h4>Associate Software Engineer (Full-time)</h4>
          <span className="date">Oct 2025 - Present</span>
        </motion.div>

        <motion.div
          className="experience-card"
          variants={fadeInUp}
          whileHover={{ x: 10, transition: { duration: 0.2 } }}
        >
          <h3>Biafotech Private Limited</h3>
          <h4>Software Developer (Internship)</h4>
          <span className="date">May 2025 - Oct 2025</span>
        </motion.div>

        <motion.div
          className="experience-card"
          variants={fadeInUp}
          whileHover={{ x: 10, transition: { duration: 0.2 } }}
        >
          <h3>Excellence Code Solution — Internship</h3>
          <h4>Web Developer (FrontEnd)</h4>
          <span className="date">Jan 2025 - Feb 2025</span>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
