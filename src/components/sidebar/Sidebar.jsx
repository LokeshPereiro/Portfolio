import { useState } from "react";
import { motion } from "framer-motion";
import "./sidebarStyles.scss";

import { Links } from "./links/Links";
import { ToggleButton } from "./toggleButton/ToggleButton";

export const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    // <motion.div className="sidebar" animate={open ? "open" : "closed"}>
    //   <motion.div className="sidebar__links" variants={variants}>
    //     <Links />
    //   </motion.div>

    //   <ToggleButton className="toggleBtn" setOpen={setOpen} open={open} />
    // </motion.div>
    <motion.div></motion.div>
  );
};
