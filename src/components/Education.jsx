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

export const Education = () => {
    return (
        <motion.section
            id="education"
            className="education"
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
                Education
            </motion.h2>
            <motion.div
                className="education-container"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                <motion.div
                    className="education-card"
                    variants={fadeInUp}
                    whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                    <h3>University of Lahore, Lahore</h3>
                    <h4>Bachelors Software Engineering</h4>
                    <span className="date">2022 - 2026</span>
                </motion.div>

                <motion.div
                    className="education-card"
                    variants={fadeInUp}
                    whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                    <h3>Govt College of Science, Lahore</h3>
                    <h4>Intermediate Pre-Engineering</h4>
                    <span className="date">2019 - 2021</span>
                </motion.div>

                {/* <motion.div
                    className="education-card"
                    variants={fadeInUp}
                    whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                    <h3>Kips School, Lahore</h3>
                    <h4>Matriculation Science</h4>
                    <span className="date">2017 - 2019</span>
                </motion.div> */}
            </motion.div>
        </motion.section>
    );
};
