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

export const Certifications = () => {
    return (
        <motion.section
            id="certifications"
            className="certifications"
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
                Certifications
            </motion.h2>
            <motion.div
                className="certifications-container"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                <motion.div
                    className="certification-card"
                    variants={fadeInUp}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                    <h3>Advance Programming</h3>
                    <h4>PNY Trainings UAE</h4>
                    <p>Microsoft Power BI, Data Analysis, and more</p>
                    <span className="credential-id">Credential ID: ADP-1-10-0036</span>
                </motion.div>

                <motion.div
                    className="certification-card"
                    variants={fadeInUp}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                    <h3>Web Development</h3>
                    <h4>ehunar</h4>
                    <p>Cascading Style Sheets (CSS) and React.js</p>
                    <span className="credential-id">Credential ID: be86cdb63b</span>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};
