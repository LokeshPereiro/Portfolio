import { Sidebar } from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <motion.span
          className="nav-logo"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {"<LokeshPereiro/>"}
        </motion.span>

        <div className="social-links">
          <motion.a
            href="https://www.linkedin.com/in/lokesh-pereiro-mart%C3%ADnez-falero-334818135/"
            target="blank"
            className="linkedin"
            transition={{
              duration: 0.5,
            }}
            whileHover={{ scale: 0.9 }}
          >
            <img src="/linkedin.png" alt="linkedin logo" />
          </motion.a>
          <motion.a
            href="https://github.com/LokeshPereiro"
            target="blank"
            className="github"
            whileHover={{ scale: 0.9 }}
            transition={{
              duration: 0.5,
            }}
          >
            <img src="/github.png" alt="github logo" />
          </motion.a>
        </div>
      </div>

      <Sidebar />
    </div>
  );
};
