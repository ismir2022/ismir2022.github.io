import React from "react";

const Venue = () => {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-[#d83616] font-bold md:text-4xl text-3xl mt-5">
          Venue
        </h1>
      </div>
      <div className="space-y-3">
        <p className="text-xl">
          ISMIR 2022 will be organized in a hybrid format hosted at Bengaluru,
          India.
        </p>
        <p className="text-xl">
          The venue for the conference is the{" "}
          <span className="text-[#d83616]">
            <a
              href="https://iisc.ac.in/auditoria-and-seminar-halls/"
              target="_blank"
            >
              National Science Seminar Complex
            </a>
          </span>
          , Indian Institute of Science, Sir C V Raman Avenue, Bengaluru -
          560012, India
        </p>
        <p className="text-xl">
          More details on the venue and travel will be available soon!
        </p>
        <div className="justify-center items-center">
          <p className="justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3526375358224!2d77.56595961379035!3d13.013201417487478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d37ebcf0a9%3A0xb10098afe90464af!2sNational%20Science%20Seminar%20Complex!5e0!3m2!1sen!2sin!4v1650362031707!5m2!1sen!2sin"
              width="300vw"
              height="300vh"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </p>
          <p className="justify-center">
            <iframe
              width="300em"
              height="auto"
              src="https://www.youtube.com/embed/F1mYxLbYHfg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Venue;
