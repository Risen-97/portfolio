const ProjectDetails = ({ project, justify }) => {
  return (
    <div
      className={`
    xl:flex xl:flex-col justify-between
        ${
          justify
            ? "xl:justify-self-start xl:items-start order-2 xl:order-1"
            : "justify-self-end xl:items-end"
        }
      `}
    >
      <h3 className="project-title">{project.title}</h3>
      <div className={`project-desc ${justify ? "left-0" : "right-0"}`}>
        <p className="leading-6">{project.desc}</p>
      </div>

      <div
        className={` flex flex-col  ${
          justify ? "xl:items-start" : "xl:items-end"
        }`}
      >
        <div
          className={`flex items-center flex-wrap mb-10 xl:mb-20 gap-5 text-xs ${
            justify ? "xl:justify-start" : "xl:justify-end"
          }`}
        >
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="bg-gray-100 shadow-md dark:bg-zinc-800 py-1 px-4 rounded-md capitalize"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-5 text-sm md:text-[16px]">
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="font-medium shadow-md cursor-pointer flex items-center gap-1 py-1 lg:py-2 px-4 rounded-lg bg-zinc-900 hover:bg-zinc-700 text-white dark:bg-white dark:text-black hover:dark:bg-gray-300 transition duration-300"
          >
            Github Repo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-white dark:fill-black"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z"></path>
            </svg>
          </a>
          <a
            href={project.website}
            target="_blank"
            rel="noreferrer"
            className="btnColor shadow-md transition duration-300 font-medium cursor-pointer flex items-center gap-1 py-1 lg:py-2 px-6 rounded-lg text-white"
          >
            Visit
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
