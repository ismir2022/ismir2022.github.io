import React from "react";

const Highlights = () => {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="font-bold text-2xl md:text-3xl md:text-left text-center">
        Highlights
      </h3>
      <div className="bg-white w-auto md:h-50 overflow-scroll overflow-x-hidden md:overflow-hidden py-5">
        <ul className="text-xl md:text-2xl list-disc list-outside mt-2 mx-10 space-y-3">
          <li>
            Information on{" "}
            <span className="text-[#d83616]">
              <a
                href="https://ismir2022.ismir.net/program/keynotes"
                target="_blank"
              >
                Keynotes
              </a>
            </span>
            ,{" "}
            <span className="text-[#d83616]">
              <a
                href="https://ismir2022.ismir.net/program/tutorials"
                target="_blank"
              >
                Tutorials
              </a>
            </span>
            and{" "}
            <span className="text-[#d83616]">
              <a
                href="https://ismir2022.ismir.net/program/satellites"
                target="_blank"
              >
                Satellite Events
              </a>
            </span>
            at ISMIR 2022 is now available
          </li>
          <li>
            Registration portal for ISMIR 2022 is now open -{" "}
            <span className="text-[#d83616]">
              <a
                href="https://ismir2022.ismir.net/attend/registration"
                target="_blank"
              >
                Register Now!
              </a>
            </span>
          </li>
          <li>
            Several author and WiMIR grants for ISMIR 2022 are available -{" "}
            <span className="text-[#d83616]">
              <a
                href="https://ismir2022.ismir.net/attend/support"
                target="_blank"
              >
                Apply for grants
              </a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Highlights;
