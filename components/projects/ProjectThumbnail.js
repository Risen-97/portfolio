const ProjectThumbnail = (props) => {
  return (
    <div
      className={`col-span-2 mb-2 xl:mb-0 shadow-xl ${
        props.justify ? "justify-self-end order-2" : "justify-self-start"
      }`}
    >
      <div
        className={`relative cursor-pointer xl:w-[800px]  rounded-md overflow-hidden group flex flex-col`}
      >
        <div className="w-full h-9 bg-zinc-800 dark:bg-[#D1D1D1] flex items-center gap-2 px-2 py-1 z-10 relative">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div
          className={`group-hover:scale-110 transition duration-1000 ${
            props.justify ? "group-hover:-rotate-3" : "group-hover:rotate-3"
          }`}
        >
          <img
            src={props.image}
            alt=""
            className="w-full h-full object-contain "
          />
        </div>
        <div className="absolute w-full h-full left-0 top-0 bg-black/40 -translate-y-full group-hover:-translate-y-0 transition duration-500"></div>
      </div>
    </div>
  );
};

export default ProjectThumbnail;
