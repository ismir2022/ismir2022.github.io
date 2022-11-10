import React from "react";
import { Link } from "gatsby";

const Special = () => {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-[#d83616] font-bold md:text-3xl text-2xl mt-5">
          Special Sessions
        </h1>
      </div>
      <div className="space-y-3">
        <p className="text-lg">
          In addition to the paper/poster presentations, ISMIR 2022 scientific program will feature the following special sessions. 
          The sessions will be organized as panel discussions on specific themes including experts from the field or as short presentations. 
          All the special sessions will be held in the J N Tata Auditorium, NSSC, IISc. 
        </p>
        
        <p className="text-xl text-[#d83616] font-bold">WiMIR session</p>
        <p className="text-lg font-bold">Dec 5, 2022 (Mon), 4.00 pm - 5.30 pm</p>
        <p className="text-lg">
           Details coming soon! 
        </p>
        <br></br>

        <p className="text-xl text-[#d83616] font-bold">Special Session-1: Enhancing music listening with MIR</p>
        <p className="text-lg font-bold">Dec 6, 2022 (Tue), 5.00 pm - 6.00 pm</p>
        <p className="text-lg">
         Prominent applications of Music Information Retrieval techniques have ranged from discovering new music 
  via recommendation frameworks to obtaining informative descriptions about a given piece of music, all of 
  which serve to enhance music listening experiences. The panel will discuss the huge potential of MIR research 
  in the context of the relevant current and future commercial products.
        </p>
        <br></br>
        <p className="text-xl text-[#d83616] font-bold">Special Session-2: Enhancing music creativity with MIR</p>
        <p className="text-lg font-bold">Dec 7, 2022 (Wed), 5.00 pm - 6.00 pm</p>
        <p className="text-lg">
           While audio technology has always had an important role in music production, it is now recognised 
           that MIR tools can provide for workflows that enhance music creativity at every stage of the 
           journey. The panel will discuss the possibilities and challenges of this exciting partnership 
           between music computing and creativity.
        </p>
        <br></br>

        <p className="text-xl text-[#d83616] font-bold">Industry Presentations</p>
        <p className="text-lg font-bold">Dec 8, 2022 (Thu), 9.00 am - 10.00 am</p>
        <p className="text-lg">
           Industry presentation session will include short presentations from our industry sponsors. The session will have 
           a 12 min talks by our Platinum sponsors Spotify and Moises, and 8 min talks by our Gold sponsors Adobe, 
             Deezer, Utopia music, Pandora, Smule, Yamaha and Chordify. 
        </p>
        <br></br>

        <p className="text-lg">
           For the benefit of the remote attendees, ISMIR 2022 features online special sessions. 
           The sessions will be held at a time-zone suitable for virtual attendees from parts of the world 
           who may not find the hybrid conference time-zone (IST) convenient. The sessions will discuss 
           important topics in MIR and will be moderated by senior members of ISMIR community. 
            The sessions are open to all participants, and will be recorded and made available for watching them later. 
        </p>

        <p className="text-xl text-[#d83616] font-bold">Special Session-A (Online): Ethics/Code of Conduct for ISMIR</p>
        <p className="text-lg font-bold">Dec 5, 2022 (Mon), 10.00 pm - 11.15 pm</p>
        <p className="text-lg font-bold">Moderators: Andre Holzapfel, Fabio Morreale, Bob Sturm</p>
        <p className="text-lg">
         This special session will discuss an action plan towards a code of ethics for the ISMIR community. 
         A code of ethics represents a specific list of values and behaviors that a research community either 
         endorses or objects to. Codes of ethics have been established on the general level of engineering 
         associations (IEEE, ACM), but also more specifically by research communities such as{" "}                                                                                                      
         <span className="text-[#d83616]">
            <a href="https://www.nime.org/ethics/" target="_blank">
               NIME
            </a>
          </span>
          . Whereas ISMIR has seen a series of tutorials on ethics and values, and guidelines have been proposed ( 
            <span className="text-[#d83616]">
            <a href="https://ismir.net/resources/ethics/" target="_blank">
               https://ismir.net/resources/ethics/
            </a>
          </span>
            ), these attempts have not yet manifested into a official code of ethics.  Does ISMIR need such a code? 
            What is the function of the code? How can we establish and maintain such a code? What are the main 
          ethical concerns regarding ISMIR research and practice?
        </p>
        <br></br>

        <p className="text-xl text-[#d83616] font-bold">Special Session-B (Online): PhD in MIR: Challenges and Opportunities</p>
        <p className="text-lg font-bold">Dec 6, 2022 (Tue), 10.00 pm - 11.15 pm</p>
        <p className="text-lg font-bold">Moderators: Meinard Müller</p>
        <p className="text-lg">
           Music information retrieval (MIR) is an exciting research field related to different disciplines, 
             including signal processing, machine learning, information retrieval, psychology, musicology, 
               and the digital humanities. This diversity opens up many opportunities for challenging, 
                 interdisciplinary, and fascinating research projects at the intersection of engineering and 
                 humanities. However, younger researchers can also feel overwhelmed by the variety and complexity of 
                 MIR research questions. In this session, we will have an informal exchange of ideas and experiences, 
                   inviting doctoral candidates and more experienced MIR researchers. Responding to questions from the 
                   audience, we hope this interactive session will be helpful for current PhD students and students considering a PhD in MIR.
        </p>
        <br></br>

        <p className="text-xl text-[#d83616] font-bold">Special Session-C (Online): TISMIR: the open journal of the ISMIR society</p>
        <p className="text-lg font-bold">Dec 7, 2022 (Tue), 10.00 pm - 11.15 pm</p>
        <p className="text-lg">
           Transactions of the International Society for Music Information Retrieval(
        <span className="text-[#d83616]">
            <a href="https://transactions.ismir.net/" target="_blank">
               TISMIR
            </a>
          </span>
          ) was established in 2018 to complement the ISMIR conference proceedings and provide a vehicle for the 
           dissemination of the highest quality and most substantial scientific research in MIR. TISMIR retains 
           the Open Access model of the ISMIR Conference proceedings, encourages reproducibility of the published 
           research papers, and maintains a low publication cost. 
        </p>
        <p className="text-lg">
           Almost 5 years later, this ISMIR 2022 is devoted to discuss and brainstorm on the current status and future 
           perspectives of the journal with a series of TISMIR recent and potential authors, reviewers and editors. 
           We will address the following questions, and others proposed by participants:
        </p>
        <ul className="list-disc text-lg list-inside">
          <li>What do you appreciate more about TISMIR?</li>
          <li>What is the link and complementarity to the ISMIR conference? </li>
          <li>Which are the main challenges/limitations that need to be addressed? </li>
          <li>How to make TISMIR competitive as a journal in the current publication landscape?</li>
          <li>How to engage with more community members in order to make TISMIR a success? </li>
          <li>Which are future avenues for conference vs journal outlets in the ISMIR field? </li>
        </ul>
        <br></br>
      </div>
    </div>
  );
};

export default Special;
