import React from "react";
import { Link } from "gatsby";

const Social = () => {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-[#d83616] font-bold md:text-3xl text-2xl mt-5">
          Social Program
        </h1>
      </div>
      <div className="space-y-3">
        <p className="text-lg">
          ISMIR 2022 will feature the following events as a part of its social program. In addition the following events, 
          we plan to organize an informal meet-up/jam session and suggest several places for social gatherings.  
          The social program events listed below are available only to the in-person participants of the conference. 
        </p>
        
        <p className="text-xl text-[#d83616] font-bold">ISMIR 2022 Welcome Reception</p>
        <p className="text-lg font-bold">Dec 5, 2022 (Mon), 5.30 pm - 9.00 pm in  IISc, Bengaluru</p>
        <p className="text-lg">
           Given that the conference has returned to a hybrid format after two virtual-only editions, the welcome reception 
           is planned to encourage in-person interactions among the seasoned and new ISMIR participants after a brief (long?) hiatus. 
           A cultural event is planned as a part of the welcome reception - details coming soon!
        </p>
        <br></br>

        <p className="text-xl text-[#d83616] font-bold">ISMIR 2022 Music Concert</p>
        <p className="text-lg font-bold">Dec 6, 2022 (Tue), 6.30 pm - 8.00 pm at the J N Tata Auditorium, IISc, Bengaluru</p>
        <p className="text-lg">
           ISMIR 2022 Music Concert will feature a Jugalbandi vocal Indian art music concert by Kaustuv Kanti Ganguli and Vignesh Ishwar. 
           The jugalbandi concert will aim to showcase the commonalities, differences and nuances of Hindustani and Carnatic music, the 
           two predominant art music traditions of India. Kaustuv and Vignesh are seasoned professional musicians and MIR researchers 
           who can bring their expertise and understanding to put together an enthralling performance interesting to the conference participants. 
           They will be accompanied by local artists. A brief biography of the artists and additional details of the concert will be available soon. 
        </p>
        <br></br>
        
        <p className="text-xl font-bold">ISMIR 2022 Banquet</p>
        <p className="text-lg font-bold">Dec 7, 2022 (Wed), 5.00 pm - 9.00 pm at Rangoli Gardens, Bengaluru, India</p>
        <p className="text-lg">
          The conference banquet will be held in <span className="text-[#d83616]"><a href="https://rangoligardens.in/" target="_blank">Rangoli Gardens</a>
          </span>
          , which is a museum that showcases a model village capturing Karnataka's distinct rural life in all its 
          quaint glory. The museum is a fascinating and close-to-realistic sculptural journey into 
          the economy, food habits, cultural traditions, religious events, recreations, and living 
          conditions of Karnataka. The museum also has innumerable paintings, pictures, visuals, and eco-parks, all envisioned 
          and crafted artistically by exceptionally skilled people. 
        </p>
        <p className="text-lg">
          The banquet will include a visit to the museum, followed by dinner in the museum's exhibition hall that showcases different art forms of the state. 
          Rangoli Gardens is around 11 km away from NSSC and transportation will be arranged. 
        </p>
        <br></br>

      </div>
    </div>
  );
};

export default Social;
