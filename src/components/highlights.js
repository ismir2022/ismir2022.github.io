import React from "react";

const Highlights = () => {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="font-bold text-2xl md:text-3xl md:text-left text-center">Highlights</h3>
      <div className="bg-white w-auto md:h-50 overflow-scroll overflow-x-hidden md:overflow-hidden py-5">
        <ul className="text-xl md:text-2xl list-disc list-outside mt-2 mx-10 space-y-3">
          <li>
            Information on Keynotes, Tutorials and Satellite Events at ISMIR
            2022 is now available
          </li>
          <li>
            Registration portal for ISMIR 2022 is now open - Register Now!
          </li>
          <li>
            Several author and WiMIR grants for ISMIR 2022 are available - Apply
            for grants
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Highlights;
