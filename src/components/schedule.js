import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Schedule = () => {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-[#d83616] font-bold md:text-3xl text-2xl mt-5">
          Tentative Schedule
        </h1>
      </div>
      <div className="space-y-3">
      <div className="flex justify-center md:col-start-1 md:col-end-2 md:place-self-center ">
      <p>This is a tentative schedule of the ISMIR program this year in December 2022, and it may change in the future. 
         In addition to the main conference program below between 4-8 Dec, there are also several {" "}
         <span className="text-[#d83616] "> <a href="https://ismir2022.ismir.net/program/satellites" target="_blank">satellite events</a></span>
           {" "}planned around ISMIR 2022 from 02 Dec to 16 Dec, 2022.</p>
      <p> Please watch this space for updates!</p>
        </div></div>
      <div className="space-y-3">
        <div className="flex justify-center md:col-start-1 md:col-end-2 md:place-self-center ">
          <StaticImage
            src="../images/schedule.png"
            alt="schedule"
            objectFit="contain"
            placeholder="blurred"
            width={1200}
          />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
