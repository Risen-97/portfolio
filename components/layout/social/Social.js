import { FiGithub, FiTwitter } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
const Social = () => {
  return (
    <div className="fixed left-10 bottom-0 hidden 2xl:flex flex-col items-center gap-5">
      <a href="https://github.com/Risen-97" target="_blank" rel="noreferrer">
        <FiGithub className="w-5 h-5" />
      </a>
      <a
        href="https://www.linkedin.com/in/mohammed-fareed-2b1356205/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn className="w-5 h-5" />
      </a>
      <a href="https://twitter.com/mofr_dev" target="_blank" rel="noreferrer">
        <FiTwitter className="w-5 h-5" />
      </a>
      <div className="w-[1px] h-32 bg-slate-900 dark:bg-white "></div>
    </div>
  );
};

export default Social;
