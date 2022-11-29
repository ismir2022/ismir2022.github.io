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
        
        <p className="text-xl text-[#d83616] font-bold">WiMIR Plenary Session</p>
        <p className="text-lg font-bold">Dec 5, 2022 (Mon), 4.00 pm - 5.30 pm</p>
        <p className="text-lg">
            In the WiMIR plenary session, we invited few women researchers to present their work and share their journey. The panelists will then be available for an open Q&A with the audience.
        </p>
        <br>

        <p className="text-lg">
            <b>Panelist:</b> Dr. Xiao Hu
            <b>Title:</b> Music for learning and wellbeing
            <b>Abstract:</b> In this session, I will briefly introduce our recent and ongoing research in the Cultural Computing and Multimodal Information Research (CCMIR) group in the University of Hong Kong, on the broad theme of “leveraging the power of music for learning and wellbeing.” Starting from explorations of music usage among real users, our investigation covers three themes: multimodal analysis of user-music interactions in the lab; remote monitoring of user-music interactions in the natural settings; and music recommendations for enhancing learning and wellbeing. Through the series of studies, we aim to broaden the impact of MIR research to related fields such as education, psychology and cognitive science.
            <b>Bio:</b>  Dr. Xiao Hu, is an Associate Professor in the Human Communication, Development and Information Science (CDIS) Academic Unit in the Faculty of Education at the University of Hong Kong. Her main research interests lie in the interactions of technology and human users, including music information retrieval, technology-enhanced learning and wellbeing, and digital cultural heritage. Dr. Hu served as a board member of The International Society for Music Information Retrieval (ISMIR) (2011-2017), a program co-chair for ISMIR 2017 and 2018, and a conference co-chair for ISMIR 2014. Her earlier research focused on music emotion recognition and her studies in recent years have expanded to how music can impact human learning and wellbeing and how to leverage MIR technologies to optimize the positive effects of music.
        </p>
        <br>

        <p className="text-lg">
            <b>Panelist:</b> Dr. Emilia Parada-Cabaleiro
            <b>Title:</b> Working in MIR with a "diverse" background: A personal view
            <b>Abstract:</b> Computer Science, Psychology, Engineering, Music Theory, Social Sciences, Statistics: The field of MIR involves researchers from many different disciplines. Although this opens up a wide range of possibilities and research directions in principle, given the large diversity of backgrounds, it is sometimes challenging to comprehend each other's terminology. Moreover, in order to exploit synergies the best way, it is essential to agree upon suitable methods and identify the associated requirements. In this talk, a music therapist and musicologist will share her personal experiences of working in the MIR community. Examples and pitfalls will be discussed, with the goal of laying the foundation for a more fruitful collaboration.
            <b>Bio:</b> Dr. Emilia Parada-Cabaleiro received her PhD in 2017 from the University of Rome Tor Vergata (Italy). Her formal education includes degrees in Music Education, Musicology, and Music Management as well as professional diplomas in Piano Performance and Music Therapy. Currently, she is a University Assistant at the Institute of Computational Perception at the Johannes Kepler University Linz (Austria). Her research, having a particular focus on Affective Computing, explores the use of computational methods to support some of the aforementioned music-related fields.
        </p>
        <br>

        <p className="text-lg">
            <b>Panelist:</b> Dr. Chitralekha Gupta
            <b>Title:</b> Automated Singing Quality Analysis - Overview and Challenges
            <b>Abstract:</b> Singing quality assessment refers to the degree to which a particular vocal production meets professional standards of singing excellence. The aim of automated singing quality evaluation is to develop computational techniques for evaluating singing skill in the same way that music experts do. Such methods, therefore, seek to objectively measure musically-relevant perceptual parameters, such an intonation accuracy and rhythm consistency, to provide meaningful feedback to the singers. There have been two broad approaches for automatic singing skill evaluation: reference-dependent and reference-independent. Reference-dependent methods compare a test singing rendition against a template or an ideal singing rendition, while reference-independent methods rely on the inherent characteristics of singing quality, independent of a template singing rendition or song. In this talk, I will present an overview of the field of automatic singing quality evaluation including different quantitative methods applied in both of these approaches, as well as the current challenges and open research questions in this field.
            <b>Bio:</b> Dr. Chitralekha Gupta is a post-doctoral research fellow at the National University of Singapore (NUS). Her research interests lie in the intersection of speech and music, particularly singing voice analysis, applications of ASR in music, and neural audio synthesis. She received her Ph.D. degree from NUS in 2019, her Master's degree from the Indian Institute of Technology Bombay in 2011 and has worked in the software industry for three years. She has been awarded a start-up grant and is the founder of MuSigPro, a music tech company, in Singapore. She received the NUS Dean's Graduate Research Achievement Award 2018, and the Best Student Paper Award in APSIPA 2017. She was a co-captain at MIREX 2020 and has played an active role in the organizing committees of international conferences such as ISMIR 2022 and 2017, ICASSP 2022, and ASRU 2019.
        </p>
        <br>

        <p className="text-lg">
            <b>Panelist:</b> Shahar Elisha
            <b>Title:</b> Research on the Industrial Lane
            <b>Abstract:</b> My experience as a researcher has been shaped by the ways of working in industry. I will present a high-level overview of the various MIR projects that I have worked on at Spotify, and I will share my experience as I transitioned from engineering into a research role. I will focus on my own approach to research within industry, and highlight how it differs from academic research, illustrating challenges and successes.
            <b>Bio:</b> Shahar is a Research Engineer at Spotify and a Research MSc candidate at the Centre for Digital Music at Queen Mary University of London under Dr. Emmanouil Benetos. Shahar completed her bachelor's degree in Computer Science at City, University of London, before joining Spotify as a Backend Engineer. At Spotify, she transitioned to research through work on MIR projects, such as audio identification and content categorisation. She is interested in solving real-life problems using audio-based machine learning models on both music and speech.

        </p>
        <br></br>

        <p className="text-xl text-[#d83616] font-bold">Special Session-1: Enhancing music listening with MIR</p>
        <p className="text-lg font-bold">Dec 6, 2022 (Tue), 4.00 pm - 5.00 pm</p>
        <p className="text-lg font-bold">Moderator: Xavier Serra</p>
        <p className="text-lg font-bold">Panelists: Anna Gatzioura, Fabien Gouyon, Thomas Lidy, Hugo Rodrigues</p>
        <p className="text-lg">In this panel we will discuss the research challenges and opportunities related to the development of new MIR technologies and services to support music listening.</p>
        <br></br>
        <p className="text-xl text-[#d83616] font-bold">Special Session-2: Enhancing music creativity with MIR</p>
        <p className="text-lg font-bold">Dec 7, 2022 (Wed), 4.00 pm - 5.00 pm</p>
        <p className="text-lg font-bold">Moderator: Jan Van Balen</p>
        <p className="text-lg font-bold">Panelists: Georgi Dzhambazov, Dorien Herremans, Oriol Nieto, Akira Maezawa, Igor Pereira</p>
        <p className="text-lg">While audio technology has always had an important role in music production, it is now recognised that MIR tools can provide for workflows that enhance music creativity at every stage of the journey. The panel will discuss the possibilities and challenges of this exciting partnership between music computing and creativity.</p>
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
        <p className="text-lg font-bold">Moderator: Meinard Müller</p>
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
        <p className="text-lg font-bold">Moderator: Emilia Gómez</p>
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
