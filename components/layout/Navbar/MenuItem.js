import { motion } from "framer-motion";
import { Link } from "react-scroll";
const menuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,

      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};
const MenuItem = ({ item }) => {
  const path = item.name === "Home" ? "/" : item.name.toLowerCase();
  return (
    <motion.li variants={menuItemVariants}>
      <Link
        to={path}
        className="menuLink"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      >
        <span className="icon-placeholder">{item.icon}</span>
        <span className="text-placeholder">{item.name}</span>
      </Link>
    </motion.li>
  );
};

export default MenuItem;
