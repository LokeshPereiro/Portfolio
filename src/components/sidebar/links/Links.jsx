import { navLinks } from "../../../constants";
import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

export const Links = () => {
  return (
    <motion.div className="links" variants={variants}>
      {navLinks.map((item) => (
        <motion.a
          href={`#${item.id}`}
          key={item.id}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{
            duration: 0.3,
          }}
        >
          {item.title}
        </motion.a>
      ))}
    </motion.div>
  );
};
