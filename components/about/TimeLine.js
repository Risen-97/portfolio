const TimeLine = () => {
  return (
    <div className="grid grid-cols-1">
      <div className="relative mb-20">
        <div className="flex gap-5">
          <div className="flex flex-col items-center">
            <svg
              className="w-8 h-8 text-gray-500 dark:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
            {/* <p>2015 - 2021</p> */}
            <div className="flex flex-col md:gap-1 md:flex-row items-center">
              <span>2015</span>
              <span>-</span>
              <span>2021</span>
            </div>
          </div>
          <div className="">
            <h3 className="capitalize mb-5 font-semibold">
              university journey
            </h3>
            <p className="max-w-lg mb-10 text-sm">
              In 2021 i Finally i graduate from Arab Open University with
              Bachelor&#39;s degree in Information Technology and Computing
            </p>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <img src="/assets/process-line-2.png" alt="" />
        </div>
      </div>

      <div className="relative mb-5  flex flex-col items-end ">
        <div className="flex gap-5">
          <div className="flex flex-col items-center">
            <svg
              className="w-8 h-8 text-gray-500 dark:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <p>2020</p>
          </div>
          <div className="">
            <h3 className="capitalize mb-5 font-semibold">
              Cybersecurity journey
            </h3>
            <p className="max-w-lg mb-10 text-sm">
              In 2020 i jumps into cybersecurity industry and learned alot from
              it i learned Networking and Web Applcation Penetration Testing,
              Linux OS. I started with the basic courses from CompTIA like A+
              and Network+. Then i took the Cisco Certified Network Associate
              (CCNA) and Security+ also elearn junior penetration testing from
              elearnSecurity.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center ">
          <img src="/assets/process-line-1.png" alt="" />
        </div>
      </div>

      <div className="relative ">
        <div className="flex gap-5">
          <div className="flex flex-col items-center">
            <svg
              className="w-8 h-8 text-gray-500 dark:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>

            <p>2021</p>
          </div>
          <div className="">
            <h3 className="capitalize mb-5 font-semibold">coding journey</h3>
            <p className="max-w-lg mb-10 text-sm">
              I had simple bacgkround on programing from university with Java
              any Python but i didnt specialize i was lost. But later on 2021
              finally i started focusing so hard on Coding. First with HTML &
              CSS, Then i jump into JavaScript and i loved it, because my
              programming background it was easy for me to learn it. finally
              after 1.5 year now i can build from scratch full responsive
              static/dynamic website
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
