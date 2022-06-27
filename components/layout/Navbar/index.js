import dynamic from "next/dynamic";
import MenuItems from "./MenuItems";
const DarkMode = dynamic(() => import("./DarkMode"), { ssr: false });
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <header className="shadow-lg bg-white/40 backdrop-blur-sm dark:bg-zinc-900/80 h-20 z-30 sticky top-0">
      <div className="flex items-center px-4 justify-between h-full">
        <div className="lg:hidden"></div>
        <MenuItems />
        <h3 className="pl-10 md:pl-0 cursor-pointer text-3xl font-logo">
          Mofareed
        </h3>

        <ul className="hidden lg:flex items-center justify-center gap-5 h-full">
          <li className="navLink">
            <Link to="/" spy={true} smooth={true} offset={-100} duration={500}>
              Home
            </Link>
          </li>
          <li className="navLink ">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="navLink ">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="navLink ">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className="navLink">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
        <DarkMode />
      </div>
    </header>
  );
};

export default Navbar;
