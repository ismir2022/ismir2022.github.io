import React from "react";

const LBD = () => {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-[#d83616] font-bold md:text-3xl text-2xl mt-5">
          Call for Late-Breaking Demo
        </h1>
      </div>
      <div className="space-y-4">
        <p className="text-lg">
          LBD session is a forum for sharing prototype systems, initial
          concepts, and early results which have not yet fully matured but are
          of interest to the Music-IR community. It is also a great entry point
          for people who are new to ISMIR to showcase their preliminary work and
          receive early feedback from fellow researchers.
        </p>
        <p className="text-lg">
          Those interested should follow the submission guidelines (see below)
          and submit extended abstracts through the system. The accepted
          abstracts must be presented by at least one author as a poster during
          the LBD session. Authors’ registration to the conference is mandatory
          but can be completed after the notification of acceptance. 
          <span className="break-word font-medium">
            Note that the LBD abstract is not a conference paper and will not be
            part of the official ISMIR 2022 proceedings.
          </span>
        </p>
        <p className="text-xl font-bold">Hybrid Conference</p>
        <p className="text-lg">
          This year’s LBD will be held in a hybrid format, i.e., local and
          remote. There will be two sessions. The first will be focused on local
          participants. While the second will be remote only.
        </p>
        <p className="text-lg">
          Due to organizational constraints we limit the submissions to 50. We
          also restrict submissions for local presentations to 20. Submissions
          will be accepted on a first-come first-served basis. However, we
          prioritize submissions that are to be presented locally.
        </p>
        <p className="text-xl font-bold">Important Dates</p>
        <p className="text-lg">Time zone: Anywhere On Earth (AOE)</p>
        <p className="text-lg">Submission open: August 15 (Mon), 2022</p>
        <p className="text-lg">
          Submission deadline: December 2 (Fri), 2022
        </p>
        <p className="text-lg">
          (For people needing visas we strongly recommend submitting before October 14 (Mon), 2022)
        </p>
        <p className="text-lg">
          Notification of acceptance: Rolling. We will close submissions once we
          receive the maximum number.
        </p>
        <p className="text-lg">
          Camera-ready & final video/poster upload: December 2 (Fri), 2022
        </p>
        <p className="text-xl font-bold">Submission Guidelines</p>
        <p className="text-lg">
          All submissions must comply with the following requirements:
        </p>
        <ul className="text-lg list-disc list-inside">
          <li>
            Length (2+1): two pages (maximum) of content plus one optional page
            for bibliography only.
          </li>
          <li>
            Templates: make sure to use the latest templates for LBD {" "} 
            <span className="text-[#d83616]">
              (<a href="https://github.com/ismir/paper_templates/releases/tag/2022LBD">
                available for Latex and Word
              </a>)
            </span> 
            . Submissions must be in PDF format.
          </li>
          <li>
            Submission system: please submit the LBD extended abstract to {" "}
            
            <span className="text-[#d83616]">
              <a href="https://cmt3.research.microsoft.com/ISMIR2022/">
                https://cmt3.research.microsoft.com/ISMIR2022
              </a>
          </span>
          {" "} (Author console -
            {">"}
            Create new submission -{">"} Late-Breaking/Demo)
          </li>
          <li>
            Note that we allow authors to edit their submissions until the
            camera-ready deadline.
          </li>
          <li>
            Supplementary material (optional): authors are encouraged to submit
            a demo video (5 minutes or less, mp4, h264 codec, 100MB or less,
            with closed captions).
          </li>
          <li>Final poster size: no larger than A0 or 36 x 48 inch</li>
        </ul>
        <p className="text-lg">
          All submissions will be screened for the following criteria:
        </p>
        <ul className="text-lg list-disc list-inside">
          <li>Suitability for ISMIR</li>
          <li>Originality</li>
          <li>Formatting</li>
        </ul>
        <p className="text-lg">
          For additional information, you can reach the LBD session chairs via email
          at{" "} 
          <span className="text-[#d83616]">
              <a href="mailto:ismir2022-lbd@ismir.net" target="_blank">
                ismir2022-lbd@ismir.net
              </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LBD;
