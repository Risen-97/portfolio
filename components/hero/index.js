import React from "react";

const Hero = () => {
  return (
    <section id="/" className="relative h-[calc(80vh_-_80px)]">
      <div className=" h-full flex flex-col lg:flex-row  lg:justify-between justify-center items-center">
        <div className="text-center lg:text-left">
          <p className="font-medium">Hi There!</p>
          <h1 className="text-5xl font-bold mb-5">
            I'M Mohamed <span className="text-indigo-500">Fareed</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-300 leading-8 font-medium lg:max-w-lg mb-10">
            Creative Junior Front-end Developer with 2+ years of experience,
            building and maintaining responsive websites in the recruiting
            industry. Proficient in HTML, CSS, JavaScript, and Specialize in
            React framework
          </p>

          <button className="btn">Download my resume</button>
        </div>
        <div className="w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] hidden lg:block ">
          <img
            src="/assets/Hand coding-amico.svg"
            alt=""
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
