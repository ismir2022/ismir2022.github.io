import React from "react";
import iisc_map from '../images/New-IISc-Map.pdf';

const Venue = () => {
  return (
    <div className="space-y-5">
      <div>
        <p className="text-lg">
          ISMIR 2022 will be organized in a hybrid format hosted in Bengaluru,
          India.{" "}
        </p>
        <h1 className="text-[#d83616] font-bold md:text-3xl text-2xl mt-5">
          Primary Venue
        </h1>
      </div>
      <div className="space-y-5">
        <p className="text-lg">
          The primary venue for the conference is the Indian Institute of
          Science (IISc). The{" "}
          <span className="text-[#d83616]">
            <a href="https://iisc.ac.in/" target="_blank">
              Indian Institute of Science
            </a>
          </span>{" "}
          (IISc) is a public, deemed, research university for higher education
          and research in science, engineering, design, and management. The
          institute was established in 1909 with active support from Jamsetji
          Tata and thus is also locally known as the "Tata Institute". It is
          ranked among the most prestigious academic institutions in India. Most
          events of the conference are planned within the IISc university
          campus.
        </p>
        <p className="text-lg">
          Official campus map of IISc:</p>
          <p className="justify-center">
          <iframe src={iisc_map} 
          width="100%" height="500px">
          </iframe>
          </p>
          
          <p className="text-lg">The numbers next to the places described below refer to the serial
          number of the place in the map.{" "}
        </p>
        <p className="text-lg">
          The main venue of the conference within IISc is:
        </p>
        <div className="text-lg place-content-between flex flex-row">
          <div className="text-lg space-y-0">
            <p className="text-lg">National Science Seminar Complex (NSSC),</p>
            <p className="text-lg">Indian Institute of Science (IISc),</p>
            <p className="text-lg">Sir C V Raman Avenue, </p>
            <p className="text-lg">Bengaluru, Karnataka 560012 </p>
          </div>
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
          </div>
        </div>
        <p className="text-lg">
          The seminar complex (85 in the map) located within IISc campus will
          host the keynotes, technical presentations, ISMIR music program,
          panels and ISMIR concert at the J N Tata Auditorium within the complex
          and tutorial sessions in the three smaller auditoria A, B, C. Posters,
          conference lunches, coffee breaks, and LBD sessions will be held in
          the open areas of the complex.
        </p>
        <p className="text-lg">
          The performance by Dhaatu puppet theater during ISMIR welcome
          reception event will be held at the Satish Dhawan Auditorium (90),
          which is around 200m from NSSC. The welcome reception will be held on
          the Main Guest House (160) lawns.
        </p>
        <div className="text-lg space-y-0">
          <p className="text-lg">The campus has the following guest houses:</p>
          <p className="text-lg">MGH - Main Guest House (160)</p>
          <p className="text-lg">CVH - Centenary Visitors House (158) </p>
          <p className="text-lg">Hoysala Guest House (159) </p>
        </div>
        <p className="text-lg">
          <strong>Entry/Exit Gates: </strong>
        </p>
        <p className="text-lg">
          There are several entry/exit gates to the campus. The closest gate to
          NSSC is the J N Tata Auditorium Gate (173) of the campus. Please use this gate to access the conference venue. 
          The guest houses MGH and CVH are best accessed through the Main Gate (175) or the Telephone Exchange Gate (136). 
          CVH is also accessible to pedestrians through the MS Ramaiah College/New BEL Road gate (179).
        </p>

        <h1 className="text-[#d83616] font-bold md:text-3xl text-2xl mt-5">
          Banquet
        </h1>
        <p className="text-lg">
          The ISMIR 2022 Banquet on 7th Dec will be held at:
        </p>
        <div className="text-lg place-content-between flex flex-row ">
          <div className="text-lg space-y-0">
            <p className="text-lg">
              <span className="text-[#d83616]">
                <a href="https://rangoligardens.in/" target="_blank">
                  Rangoli Gardens
                </a>
              </span>
            </p>
            <p className="text-lg">
              Inside Mahatma Gandhi Institute of Rural Energy and Development
            </p>
            <p className="text-lg">Srirampura Cross, Rachenahalli, Jakkuru,</p>
            <p className="text-lg">Bengaluru, Karnataka 560064</p>
          </div>
          <div className="justify-center items-center">
            <p className="justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5063673901673!2d77.60849881463808!3d13.067062490793328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae199f60a86437%3A0x1b5bd78c578de029!2sRangoli%20Gardens!5e0!3m2!1sen!2sin!4v1667638152085!5m2!1sen!2sin"
                width="300vw"
                height="300vh"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </p>
          </div>
        </div>
        <p className="text-lg">
          Rangoli Gardens is around 11 km away from IISc and transportation will
          be arranged for the banquet. The banquet venue is otherwise accessible
          mainly by a Taxi.
        </p>
        <h1 className="text-[#d83616] font-bold md:text-3xl text-2xl mt-5">
          Satellite: Indian Music Experience (IME) Workshop
        </h1>
        <p className="text-lg">
          The Indian Music Experience (IME) workshop on 9th Dec will be held at:
        </p>
        <div className="text-lg space-y-0 place-content-between flex flex-row">
          <div className="text-lg space-y-0 ">
            <p className="text-lg">
              <span className="text-[#d83616]">
                <a href="https://indianmusicexperience.org/" target="_blank">
                  Indian Music Experience (IME) Museum,
                </a>
              </span>
            </p>
            <p className="text-lg">Brigade Millennium Avenue,</p>
            <p className="text-lg">JP Nagar 7th phase,</p>
            <p className="text-lg">Bengaluru, Karnataka 560078</p>
          </div>
          <div className="justify-center items-center">
            <p className="justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2475292849786!2d77.58149741463605!3d12.891798690908255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1547381aaaab%3A0xf35fb2e714520a68!2sIndian%20Music%20Experience%20Museum!5e0!3m2!1sen!2sin!4v1667638220727!5m2!1sen!2sin"
                width="300vw"
                height="300vh"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </p>
          </div>
        </div>
        <p className="text-lg">
          IME is around 16 km from IISc and transportation will be provided for
          the workshop. The museum can also be reached by metro. It is 2.2 km
          from Yelachenahalli Metro station (Green line).
        </p>
        <h1 className="text-[#d83616] font-bold md:text-3xl text-2xl mt-5">
          Satellite: Music, Mind, Movement and Technology (MMMT) Workshop
        </h1>
        <p className="text-lg">
          The Music, Mind, Movement and Technology (MMMT) workshop on 2-3 Dec
          will be held within the IISc campus at:
        </p>
        <div className="text-lg place-content-between flex flex-row">
          <div className="text-lg space-y-0">
            <p className="text-lg">Multimedia Class Room,</p>
            <p className="text-lg">Dept. of Electrical Engineering, </p>
            <p className="text-lg">Indian Institute of Science (IISc),</p>
            <p className="text-lg">Sir C V Raman Avenue, </p>
            <p className="text-lg">Bengaluru, Karnataka 560012 </p>
          </div>
          <div className="justify-center items-center">
            <p className="justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.9548199085507!2d77.56897485231406!3d13.01653834792022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d24e436373%3A0x82e461238095adbd!2sDepartment%20Of%20Electrical%20Engineering!5e0!3m2!1sen!2sin!4v1667638321282!5m2!1sen!2sin"
                width="300vw"
                height="300vh"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </p>
          </div>
        </div>
        <h1 className="text-[#d83616] font-bold md:text-3xl text-2xl mt-5">
          Satellite: MusicHackDay India 2022
        </h1>
        <p className="text-lg">
          The MusicHackDay India 2022 Hackathon on 10-11 Dec will be held at:
        </p>
        <div className="text-lg space-y-0 place-content-between flex flex-row">
          <div className="text-lg space-y-0 ">
            <p className="text-lg">
              <span className="text-[#d83616]">
                <a href="https://www.91springboard.com/" target="_blank">
                  91 Springboard,
                </a>
              </span>
            </p>
            <p className="text-lg">Gopala Krishna Complex </p>
            <p className="text-lg">45/3, Residency Road, </p>
            <p className="text-lg">Mahatma Gandhi Road,</p>
            <p className="text-lg">Bengaluru, Karnataka 560025</p>
          </div>
          <div className="justify-center items-center">
            <p className="justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.964146944048!2d77.6092903!3d12.974145000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16873556c64b%3A0x3f8bc4863b1485e3!2s91springboard!5e0!3m2!1sen!2sin!4v1667638384857!5m2!1sen!2sin"
                width="300vw"
                height="300vh"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue;
