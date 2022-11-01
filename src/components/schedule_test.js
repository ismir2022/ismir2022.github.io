import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import AllPagesPDFViewer from "./pdf/all-pages";
import draft_schedule from '../assets/Draft_Paper_Schedule_20Oct_2022.pdf';
import schedule_calendar from '../assets/schedule.pdf';


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
            In addition to the main conference program below between 04-08 December, there are also several {" "}
            <span className="text-[#d83616] "> <a href="https://ismir2022.ismir.net/program/satellites" target="_blank">satellite events</a></span>
             {" "}planned around ISMIR 2022 from 02-16 December, 2022. </p>
        </div>
        <div className="flex md:col-start-1 md:col-end-2 md:place-self-center ">
          <p>A draft schedule of different paper presentation sessions and the list of papers to be presented in each session is here: 
            <span className="text-[#d83616] "> <a href= {draft_schedule} target="_blank">Download tentative schedule (PDF)</a></span> </p>
        </div>
        <div className="flex justify-center md:col-start-1 md:col-end-2 md:place-self-center ">
          <p>Please watch this space for updates!</p> 
        </div>
      </div>
      
      <div className="all-page-container">
        <AllPagesPDFViewer pdf={schedule_calendar} />
      </div>
      
      
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
