import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillGithub,
} from "react-icons/ai";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-zinc-800 py-12">
      <div className="grid grid-cols-1  justify-items-center sm:grid-cols-3 max-w-sm  md:max-w-[1500px] mx-auto  gap-10">
        <ul className="flex sm:flex-col gap-5 ">
          <li className="hover:underline hover:underline-offset-8 cursor-pointer">
            <Link to="/" spy={true} smooth={true} offset={-100} duration={500}>
              Home
            </Link>
          </li>
          <li className="hover:underline hover:underline-offset-8 cursor-pointer">
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
          <li className="hover:underline hover:underline-offset-8 cursor-pointer">
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
          <li className="hover:underline hover:underline-offset-8 cursor-pointer">
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
          <li className="hover:underline hover:underline-offset-8 cursor-pointer">
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

        <div className="">
          <p className="mb-5 md:text-center">Contact Me</p>

          <div className="flex items-center gap-5">
            <a
              href="https://twitter.com/mofr_dev"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillTwitterCircle className="w-7 h-7 text-gray-600 dark:text-white" />
            </a>
            <a
              href="https://github.com/Risen-97"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className="w-7 h-7 text-gray-600 dark:text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-fareed-2b1356205/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin className="w-7 h-7 text-gray-600 dark:text-white " />
            </a>
          </div>
        </div>

        <div className="">
          <p className="mb-5 md:text-center">Address</p>

          <div className="flex items-center gap-2 mb-5">
            <svg
              className="w-5 h-5 fill-gray-600 dark:fill-white"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>966536946164</span>
          </div>
          <div className="flex items-center gap-2 mb-5">
            <svg
              className="w-5 h-5 fill-gray-600 dark:fill-white"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span>m.fareed1997@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 mb-5">
            <svg
              className="w-5 h-5 fill-gray-600 dark:fill-white"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Jeddah, SA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
