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

export const Skills = () => {
    const skills = [
        { category: "Programming Languages", items: ["Python", "C++", "JavaScript"] },
        {
            category: "Web Development",
            items: [
                "HTML",
                "CSS",
                "JavaScript",
                "REACT",
                "PHP",
                "Laravel",
                "Node.js",
                "Next.js",
                "Express.js",
            ],
        },
        {
            category: "Database Management",
            items: ["MySQL", "SQL", "MongoDB", "Postgres"],
        },
        {
            category: "Other Skills",
            items: [
                "Figma",
                "Power BI",
                "Prompt Engineering",
                "Agile",
                "MS Office",
                "Presentation Skills",
                "SRS Documentation",
            ],
        },
    ];

    return (
        <motion.section
            id="skills"
            className="skills"
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
                Skills
            </motion.h2>
            <motion.div
                className="skills-container"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                {skills.map((skillGroup, index) => (
                    <motion.div
                        key={index}
                        className="skill-category"
                        variants={fadeInUp}
                        whileHover={{ scale: 1.02 }}
                    >
                        <h3>{skillGroup.category}</h3>
                        <div className="skill-items">
                            {skillGroup.items.map((item, idx) => (
                                <span key={idx} className="skill-badge">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
};
