import MenuToggle from "./MenuToggle";
import { motion, useCycle } from "framer-motion";
import { items } from "../../../data";
import MenuItem from "./MenuItem";
import { useState } from "react";
const MenuItems = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [isClose, setIsClose] = useState(true);

  const navigationVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const sidebarVariants = {
    open: {
      clipPath: `circle(1000px at 40px 40px)`,
      transition: {
        duration: 0.4,
      },
    },
    closed: {
      clipPath: `circle(20px at 33px 40px)`,
      transition: {
        duration: 0.4,
        delay: 0.4,
      },
    },
  };
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className={`lg:hidden absolute top-0 left-0 bottom-0 ${
        isOpen ? "w-[200px]" : "w-[100px]"
      } md:w-[300px] z-20 text-black ${
        isClose ? "h-screen" : "h-20 overflow-hidden"
      }`}
    >
      <motion.div className="background" variants={sidebarVariants} />
      <MenuToggle
        toggle={() => {
          toggleOpen();
          isOpen ? setTimeout(() => setIsClose(false), 1000) : setIsClose(true);
        }}
      />
      <motion.ul
        variants={navigationVariants}
        className="p-5 absolute  top-[100px] w-[200px] md:w-[260px]"
      >
        {items.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </motion.ul>
    </motion.nav>
  );
};

export default MenuItems;
