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
          <p className="text-lg">The Hybrid event will be conducted with a combination of live sessions at the venue and a virtual platform. The virtual platform of the conference will consist of:</p>
          <ul className="list-disc text-lg list-inside">
            <li><span className="text-[#d83616] font-bold">
                <a href="https://ismir2022program.ismir.net/" target="_blank">
                 MiniConf
                </a>
                </span> is a publicly available archive of the entire conference program. MiniConf will put together and help 
                            navigate through the schedule, papers, tutorials and information about all sessions. MiniConf will 
                            continue to be available and maintained after the conference and will serve as the official 
                            archive of the conference.
            </li>
            <li>Slack: The {" "}<span className="text-[#d83616] font-bold">
                <a href="https://ismir2022program.slack.com/" target="_blank">
                 Conference Slack workspace
                </a>
                </span>{" "} will be the primary tool for interaction between participants. 
                The conference Slack workspace will be available from 27 Nov, 2022 to 19 Dec, 2022 to facilitate 
                any post-conference interactions between participants. The Slack workspace will support asynchronous 
                interactions between participants as well as group huddles. All information that should be available 
                only with registered participants will be shared on the Slack workspace. 
            </li>
            <li><span className="font-bold">Zoom:</span>{" "} The conference sessions will be livestreamed on Zoom. 
                We will use Zoom meetings in the conference, which ensures a two-way communication is possible and 
                allows remote participants to interact (on video with audio) with the live audience. 
            </li>
          </ul>
          <p className="text-xl font-bold">Inclusive Hybrid mode</p>
          <p className="text-lg">
            Given that the conference is hybrid with a large portion of participants attending the conference remotely, 
              the conference aims to be inclusive to all participants, especially to remote attendees during the conference.
              When possible, we will first seek questions/comments from remote attendees during plenary sessions, given that 
              in-person attendees will have the opportunity to meet with the speakers at the venue for further questions. 
              We request all participants to be considerate about remote attendees’ time zone differences while engaging 
              with them via asynchronous interaction. We request participants to make efforts to include any remote attendees 
              who are desirous of participating in any discussions during the conference. 
          </p>
          <p className="text-xl font-bold">Recording and Archival</p>
          <p className="text-lg">
            All sessions of the scientific program (tutorials, paper presentations, all plenary sessions, opening, closing sessions and ISMIR music program) 
            will be recorded and made available on conference slack for offline viewing. The recordings will be available to registered conference 
            participants until 19 Dec 2022. 
          </p>
          <p className="text-xl font-bold">Additional guidelines for remote attendees</p>
          <ul className="list-disc text-lg list-inside">
            <li>Please make sure you mute yourself while not speaking during a session.</li>
            <li>We encourage you to switch on video when you ask questions.</li>
            <li>Though the conference is hybrid, a majority of events happen during the day time in India. 
              While we understand the timezone might not be convenient for all attendees, we encourage you to 
              participate live in all sessions of the conference for the best experience.</li>
          </ul>
        </div>
        <p className="text-lg">We present instructions for each session of the conference below and describe how each session will be conducted:</p>
        <div className="space-y-3">
          <p className="text-xl font-bold">Tutorials</p>
          <p className="text-lg">
              Tutorial sessions are hybrid, with some attendees and speakers present at the venue and rest are remote. 
              We have made the tutorial sessions longer this year to allow for more interaction given the hybrid mode. 
              The participants who have registered for tutorials will be added to private tutorial slack channels for 
              each tutorial. Participants attending tutorials in-person can use the symbols on their badges to access 
              the right tutorial room at the venue. Lunch on 04 Dec, 2022 is included for those attending the tutorials in-person.
          </p>
          <p className="text-xl font-bold">Paper Sessions</p>
              <p className="text-lg"> Each paper session starts with a sequence of live presentations (or presentation video 
                  playback for remote presenters) of all the papers assigned to that session. All sessions (except Paper session-7) 
                  start with a 10-minute presentation by an award nominated paper (marked with an asterisk in the detailed schedule), 
                    followed by 4-minute presentations for other papers in the session. Following this activity, in-person 
                  attendees will be able to physically visit all the posters set up by the in-person presenters in the poster 
                  area. The posters will be displayed on poster boards with the presenters available for immediate interaction. 
                  Posters by remote presenters will be displayed on a screen in the poster venue (as a slideshow). The 
                  interaction with virtual presenters is asynchronous via the corresponding paper’s slack channel. There 
                  will be no live Q&A for paper presentations. 
              </p>
              <p className="text-lg"> All paper and poster PDFs, as well as presentation video (4 min), irrespective of 
                 whether the presenters are in-person or remote, are available online on the conference virtual platform Miniconf. 
                 Each paper will have a dedicated slack channel. Both in-person and remote attendees can ask asynchronous 
                 questions to remote or in-person presenters via the paper’s slack channel. We strongly encourage sending 
                 questions by recording a short video to make it interactive! When possible, we also encourage virtual attendees 
                 to post questions before the physical poster sessions to allow authors to respond (by recording a short video) 
                 during their session. 
              </p>
          <p className="text-xl font-bold">Keynotes, WiMIR plenary session and Special sessions</p>
              <p className="text-lg"> The plenary sessions are panels in hybrid mode with some speakers remote and others physically 
                 present in the auditorium. Physical attendees can interact directly while remote attendees can watch the live stream 
                 and interact with the speakers in the provided Zoom meeting room. We will make the sessions interactive to the extent 
                 possible and have live Q&A during the session. 
              </p>
          <p className="text-xl font-bold">Online Special Sessions</p>
              <p className="text-lg"> These special sessions are fully online and interactive. The meeting links will be announced on 
                 the virtual platform (Slack) to all registered attendees. The Zoom meeting will be open 30 min before the session starts. 
                 All participants are encouraged to join the sessions and participate in discussions. 
              </p>
          <p className="text-xl font-bold">ISMIR music program</p>
              <p className="text-lg"> Some of the pieces of the ISMIR music program will be presented live at the venue, while 
                 the remaining ones will be a playback of a pre-recorded video. The complete session will be livestreamed and 
                 recorded for offline watching for participants.
              </p>
          <p className="text-xl font-bold">Late-breaking/Demo (LBD)</p>
              <p className="text-lg"> LBD presentations are split into an in-person session and a virtual session. Each LBD 
                 extended abstract will have a dedicated slack channel on the virtual platform and will have the abstract 
                 and poster/video on MiniConf. Both in-person and remote attendees can ask asynchronous questions to remote 
                 or in-person presenters via the slack channel. 
              </p>
              <ul className="list-disc text-lg list-inside">
                <li>Physical session: The LBD posters by in-person attendees will be presented during this session at the venue. 
                Virtual presenters can choose to remain online to interact with any interested participants.</li>
                <li>Virtual/Remote session:  Remote presenters can use the huddle feature on each LBD extended abstract slack channel 
                to present their LBD posters on a video call. (Huddle supports up to 50 simultaneous participants).</li>
              </ul>
          <p className="text-xl font-bold">Social Program</p>
              <p className="text-lg"> The cultural and music events performed at the conference venue will not be live-streamed, 
                however the ISMIR music concert and Dhaatu puppet theater events will be recorded and made available for 
                  offline viewing of conference participants. 
              </p>
        </div>
        <div className="space-y-3">
          <p className="text-2xl font-bold">Virtual Platform Instructions</p>
          <p className="text-lg"> ISMIR 2022 will be accessible to remote participants through a combination of Slack, Zoom and Miniconf. </p>
          <p className="text-xl font-bold">MiniConf</p>
               <p className="text-lg"> MiniConf is a publicly available archive of the entire conference program. MiniConf 
                      will put together and help navigate through the schedule, papers, tutorials and information about all 
                      sessions. For all kinds of interaction on the individual sessions or tutorials/papers/music/LBD items, the 
                      respective MiniConf page will redirect you to the corresponding Slack channels, details of which are discussed next.</p>      
          <p className="text-xl font-bold">Slack</p>
               <p className="text-lg"> 
                 <span className="text-[#d83616] font-bold">
                <a href="https://ismir2022program.slack.com/" target="_blank">
                 Conference Slack workspace
                </a>
                </span>{" "} will be the primary tool for 
                   interaction between participants. The Slack workspace will support asynchronous interactions 
                   between participants as well as group huddles (video calls) with screen share option.</p> 
                      
                <ul className="list-disc text-lg list-inside">
                  <li>All registered authors will be added to their respective paper/music/lbd slack channels by default.
                      <ul className="list-disc text-lg list-inside">
                        <li>The paper channels have the following naming format: p&lt;session-number&gt;-&lt;position&gt;-&lt;first-author-last-name-in-lowercase&gt;, 
                          e.g. if a paper session is in session 3 and it’s position in the session is 5 and author last name is Kumar, 
                          then the slack channel would p3-05-kumar.</li>
                        <li>The music submission channels have the format m-&lt;slot-number&gt;, e.g. the sixth music piece in ISMIR music program 
                            will have a channel name m-6.</li>
                        <li>The LBD extended abstract slack channels will have a channel name &lt;lp/lv&gt;-&lt;ID&gt;-&lt;first-author-last-name-in-lowercase&gt;, 
                        where “lp” and “lv” stand for physical and virtual LBD session, respectively. </li>
                      </ul>
                  </li>
                  <li> All the six tutorial channels will be private, registered participants will be automatically added to 
                      the respective tutorial channels that they have registered for. Slack channel is named as “t&lt;x&gt;-&lt;m/a&gt;”, where 
                      x is the tutorial number and m/a refer to morning or afternoon session, e.g. if the tutorial is T1(M): An 
                      Introduction to Symbolic Music Processing in Python with Partitura, then the slack channel name would be t1-m. 
                      Only users registered for a specific tutorial session will have access to the respective channel.
                  </li>
                  <li>Non-author participants are not added to any of the paper/music/lbd slack channels by default. 
                      They will only be added by default to:
                      <ul className="list-disc text-lg list-inside">
                        <li><span className="text-[#d83616] font-bold">
                            <a href="https://ismir2022program.slack.com/archives/C04BX8ZLUJY" target="_blank">
                           #general </a></span>{" "}channel: a read-only channel, used by organizers for broadcasting updates and messages. 
                           Participants can only reply to the broadcasted thread, and cannot post their own message.</li>
                      <li><span className="text-[#d83616] font-bold">
                            <a href="https://ismir2022program.slack.com/archives/C04C3C4UN0P" target="_blank">
                           #tech-help </a></span>{" "} channel: use this for seeking any kind of tech support from the organizers.</li>
                        <li>Tutorial channels they have registered for, and </li>
                        <li>Sponsors' channels</li>
                      </ul>
                  </li>
                  <li> Participants who are interested in a certain tutorial/paper/music/lbd item will browse for them using MiniConf, and 
                      navigate to the corresponding Slack channels, and opt to follow them.
                  </li>
                  <li> Participants are free to create smaller groups and channels amongst themselves for networking and private discussions. </li>
                </ul>
          <p className="text-xl font-bold">Zoom</p>
               <p className="text-lg"> The conference sessions will be livestreamed on Zoom meetings. If you have signed up for a tutorial, you 
                      will find the zoom link pinned to the respective tutorial channel. For the rest of the conference, you will find the zoom link pinned 
                      in the #general channel of the slack. </p> 
          <p className="text-xl font-bold">Onboarding</p>
               <p className="text-lg">You will receive a link to join the conference Slack workspace by 27th November (AoE). This 
                      link will be sent to the email you have used to register for the conference. Once you join the 
                      slack workspace, use MiniConf to explore the sessions and presentations at ISMIR 2022 and opt-in 
                        to follow their respective slack channels for asynchronous discussions about them.  </p> 
          <p className="text-xl font-bold">Support</p>
               <p className="text-lg"> In case of queries, write to{" "}
                      <span className="text-[#d83616]">
                <a href="mailto:ismir2022-tech@ismir.net" target="_blank">
                 ismir2022-tech@ismir.net
                </a></span>{" "} by email. If you are 
                      already on slack, ask your question on the Helpdesk channel of slack:{" "}<span className="text-[#d83616] font-bold">
                            <a href="https://ismir2022program.slack.com/archives/C04C3C4UN0P" target="_blank">
                           #tech-help </a></span></p>
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
