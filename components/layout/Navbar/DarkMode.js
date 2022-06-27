import { useTheme } from "next-themes";

const DarkMode = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="relative  py-[2px] dark:bg-[#1E90FF] bg-[#A3A4A4] lg:order-none overflow-hidden flex items-center w-20 outline-none rounded-full justify-between px-1"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <div
        className={`w-6 h-6 absolute border-2  rounded-full transition duration-500 bg-white ${
          theme === "dark" ? "translate-x-0 " : " translate-x-12"
        }`}
      ></div>

      <svg
        className={`w-7 h-7  text-orange-200 transition duration-500 ${
          theme === "light" ? "opacity-100" : "opacity-0"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
      </svg>

      <svg
        className={`w-7 h-7 text-orange-300 transition duration-300 ${
          theme === "dark" ? "opacity-100" : "opacity-0"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};

export default DarkMode;
