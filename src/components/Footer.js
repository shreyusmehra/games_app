import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 1,
        },
      }}
      className="footer-container"
    >
      <h3>Made using React and Hooks</h3>
    </motion.div>
  );
};

export default Footer;
