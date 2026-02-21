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

export const Services = () => {
    const services = [
        {
            title: "Web Development",
            description: "Modern, responsive, and high-performance websites built with the latest technologies.",
            icon: "🌐",
        },
        {
            title: "Mobile App Development",
            description: "Cross-platform mobile applications that provide seamless user experiences.",
            icon: "📱",
        },
        {
            title: "Software Development",
            description: "End-to-end software solutions tailored to meet your business needs.",
            icon: "💻",
        },
        {
            title: "Custom Software Development",
            description: "Bespoke software built from scratch to solve specific business problems.",
            icon: "⚙️",
        },
        {
            title: "Software Maintenance",
            description: "Reliable support and maintenance to ensure your software runs smoothly.",
            icon: "🛠️",
        },
        {
            title: "ERP Systems",
            description: "Integrated Enterprise Resource Planning systems to streamline operations.",
            icon: "📊",
        },
        {
            title: "Custom Software System",
            description: "Scalable and robust custom systems designed for growth and efficiency.",
            icon: "🖥️",
        },
        {
            title: "SaaS Solutions",
            description: "Cloud-based Software as a Service platforms accessible from anywhere.",
            icon: "☁️",
        },
    ];

    return (
        <motion.section
            id="services"
            className="services"
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
                My Services
            </motion.h2>
            <motion.div
                className="services-container"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="service-card"
                        variants={fadeInUp}
                        whileHover={{ y: -10, transition: { duration: 0.2 } }}
                    >
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
};
