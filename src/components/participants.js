import React from "react";

const Participants = () => {
  return (
    <div className="space-y-5">
      <div className="space-y-3">
        <h1 className="text-[#d83616] font-bold md:text-3xl text-2xl mt-5">
          Instructions for Participants
        </h1>
        <p className="text-lg"> 
          ISMIR 2022 will take place in a hybrid format, with a mix of in-person and virtual presenters and attendees. 
          The format is intended to give all attendees an opportunity to interact with all presenting authors. Note 
           however that because of time zone differences, not all interactions will be synchronous.
        </p>
        <p className="text-lg"> 
         Similar to previous editions, the entire conference (apart from the tutorials) is single-track and all the scientific 
          program sessions in the schedule will be live broadcast. Some of the sessions (as separately indicated) will be 
          interactive for remote participants to participate with questions/comments. At the outset, we request you to please read 
          through the conference{" "}
          <span className="text-[#d83616]">
              <a href="https://ismir2022.ismir.net/codeofconduct/" target="_blank">
                Code of Conduct
              </a>
            </span>{" "}and adhere to it throughout the conference.
        </p>
        <div className="space-y-3">
          <p className="text-2xl font-bold">General Guidelines</p>
          <p className="text-xl font-bold">Hybrid Event</p>
          <p className="text-xl font-bold">Inclusive Hybrid mode</p>
          <p className="text-xl font-bold">Recording and Archival</p>
          <p className="text-xl font-bold">Additional guidelines for remote attendees</p>
        </div>
        <p className="text-lg">We present instructions for each session of the conference below and describe how each session will be conducted:</p>
        <div className="space-y-3">
          <p className="text-xl font-bold">Tutorials</p>
          <p className="text-xl font-bold">Paper Sessions</p>
          <p className="text-xl font-bold">Keynotes, WiMIR plenary session and Special sessions</p>
          <p className="text-xl font-bold">Online Special Sessions</p>
          <p className="text-xl font-bold">ISMIR music program</p>
          <p className="text-xl font-bold">Late-breaking/Demo (LBD)</p>
          <p className="text-xl font-bold">Social Program</p>
        </div>
        <div className="space-y-3">
          <p className="text-2xl font-bold">Virtual Platform Instructions</p>
          <p className="text-lg"> ISMIR 2022 will be accessible to remote participants through a combination of Slack, Zoom and Miniconf. </p>
          <p className="text-xl font-bold">MiniConf</p>
          <p className="text-xl font-bold">Slack</p>
          <p className="text-xl font-bold">Zoom</p>
          <p className="text-xl font-bold">Onboarding</p>
          <p className="text-xl font-bold">Support</p>
        </div>
        <div className="space-y-3">
          <p className="text-lg">Finally, a conference can provide enriching experiences in terms of learning about a field, 
            discovering exciting new research topics, meeting new people including peers and senior researchers and, 
              of course, enjoying the feeling of belonging to a vibrant community of similar minded people. 
              Given how packed a conference schedule typically is, it pays to peruse the program details beforehand and 
              draw up a personal schedule. The ISMIR 2021 blog on {" "}
              <span className="text-[#d83616]">
                <a href="https://ismir2021.ismir.net/blog/gettingmostismir/" target="_blank">
                 "Getting the most out of the ISMIR Conference"
                </a>
              </span>{" "} provides great tips for achieving this especially for 
                virtual participants but also applicable to in-person participation. So, you are encouraged to study the 
                program closely and identify sessions including papers of special interest that you can browse through 
                before the conference to enhance the quality of both the real-time interactions as well as the opportunity 
                for asynchronous communication with remote presenters.   
        </p>
        <p className="text-lg"> We wish all our participants a great ISMIR conference experience! </p>
        </div>
        <div className="space-y-3">
          <p className="text-2xl font-bold">COVID-19 related guidelines for in-person participants</p>
          <p className="text-lg"> Though local government regulations have relaxed COVID-19 related restrictions 
            considerably, we require you to follow the below guidelines during your attendance 
            at ISMIR 2022 for enhanced safety of participants. The conference will be taking all necessary precautions to avoid 
            the incidence and spread of COVID-19. Any change in the local law/protocol due to COVID-19 
             will be communicated at regular intervals as applicable. 
          </p>
          <p className="text-xl font-bold"> Guidelines </p>
          <ul className="list-disc text-lg list-inside">
            <li>Participants are requested to carry their COVID-19 vaccination certificates (if vaccinated) and show them during registration.</li>
            <li>Participants are required to maintain social distancing during the conference. This will also be enforced by the conference staff and the volunteers.</li>
            <li>Participants are required to wear well-fitting masks that fit completely over their nose and mouth.</li>
            <li>Participants are requested to wash their hands frequently or use hand sanitizers</li>
            <li>Participants are advised to stay home/hotel if they have tested positive for COVID-19, are waiting for COVID-19 test results, have COVID-19 symptoms, or if they have had close contact with a person who has tested positive for or who has symptoms of COVID-19</li>
            <li>We discourage participants from greeting each other with physical contact (for example handshakes)</li>
            <li>We request to use multiple entrances and exits and avoid crowding near waiting areas and dining areas</li> 
            <li>Participants are requested to avoid touching surfaces</li>
            <li>Participants are requested to follow state and local requirements and recommendations related to travel</li>
            <li>Participants agree to assume any health risks related to their attendance</li>
          </ul>
          <p className="text-lg">Masks and necessary sanitizers for use by participants will be available at the conference venue. Should a participant needs to get tested for COVID-19, we will facilitate their RT-PCR or Rapid Antigen COVID-19 tests through trusted partners at the conference venue or the hotel/guest house where the participant is staying.</p>
          <p className="text-lg">We seek your co-operation to comply with above guidelines to reduce the risk of incidence and spread of COVID-19 during ISMIR 2022 and maintain a safe and healthy environment for all participants of the conference.</p>
        </div>
        <div className="space-y-3">
         
        </div>
      </div>
    </div>
  );
};

export default Participants;
