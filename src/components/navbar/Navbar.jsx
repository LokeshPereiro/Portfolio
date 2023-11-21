import { useState } from "react";
import { navLinks } from "../../constants";
import "./navbar.scss";
import { motion } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import lpDraft from "../../assets/lpDraft.png";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="navbar d_flex unselectable">
      <a href={"#landing"} className="navbar-logo">
        <img src={lpDraft} alt="portfolio logo" />
      </a>

      <ul className="navbar-links d_flex">
        {navLinks.map((item) => (
          <li key={`link-${item.id}`}>
            <motion.a href={`#${item.id}`}>{item.title}</motion.a>
          </li>
        ))}
      </ul>

      <div className="navbar-menu d_flex">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />

            <ul>
              {navLinks.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} onClick={() => setToggle(false)}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};
