import Image from "next/image";
import { useState } from "react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProjectThumbnail = (props) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <div
      className={`col-span-2 mb-2 xl:mb-0 shadow-xl ${
        props.justify ? "justify-self-end order-2" : "justify-self-start"
      }`}
    >
      <div
        className={`relative cursor-pointer xl:w-[800px] lg:h-[466px]  rounded-md overflow-hidden group flex flex-col `}
      >
        <div className="w-full h-9 bg-zinc-800 dark:bg-[#D1D1D1] flex items-center gap-2 px-2 py-1 z-10 ">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div
          className={`group-hover:scale-110  transition duration-1000 ${
            props.justify ? "group-hover:-rotate-3" : "group-hover:rotate-3"
          }`}
        >
          <Image
            src={props.image}
            alt=""
            width={800}
            height={430}
            objectFit="cover"
            className={cn(
              "duration-700 ease-in-out w-full h-full",
              isLoading
                ? "scale-110 blur-2xl grayscale"
                : "scale-100 blur-0 grayscale-0"
            )}
            // layout="fill"
            onLoadingComplete={() => setLoading(false)}
          />
        </div>
        <div className="absolute w-full h-full left-0 top-0 bg-black/40 -translate-y-full group-hover:-translate-y-0 transition duration-500"></div>
      </div>
    </div>
  );
};

export default ProjectThumbnail;
