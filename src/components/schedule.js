import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import pdf_schedule from '../images/schedule.pdf';
import pdf_full_schedule from '../images/full_schedule.pdf'
 
const Schedule = () => {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-[#d83616] font-bold md:text-3xl text-2xl mt-5">
          Schedule
        </h1>
      </div>
      <div className="space-y-3">
        <div className="flex justify-center md:col-start-1 md:col-end-2 md:place-self-center ">
         <p>This is the final schedule of the ISMIR program this year in December 2022, though there might be little changes leading up to the conference. 
            We do not expect any major changes to this schedule. In addition to the main conference program below between 04-08 December, there are also several {" "}
            <span className="text-[#d83616] "> <a href="https://ismir2022.ismir.net/program/satellites" target="_blank">satellite events</a></span>
             {" "}planned around ISMIR 2022 from 02-16 December, 2022. </p>
        </div>
      </div>
      <h2 className="text-[#d83616] font-bold md:text-3xl text-2xl mt-5">Overview</h2>
      <div className="space-y-3">
        <div className="flex justify-center md:col-start-1 md:col-end-2 md:place-self-center ">
          <iframe src={pdf_schedule} width="100%" height="900px"></iframe>
        </div>
      </div>
      <h2 className="text-[#d83616] font-bold md:text-3xl text-2xl mt-5">Detailed Schedule</h2>
      <div className="space-y-3">
        <div className="flex justify-center md:col-start-1 md:col-end-2 md:place-self-center ">
          <iframe src={pdf_full_schedule} width="100%" height="900px"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
