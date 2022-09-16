import React from "react";

const Tutorials = () => {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-[#d83616] font-bold md:text-3xl text-2xl mt-5">
          Call for Tutorials
        </h1>
      </div>
      <div className="space-y-5">
        <p className="text-lg">
          The 23rd International Society for Music Information Retrieval
          Conference (ISMIR 2022) will be held in Bengaluru, India, from
          December 4th to 8th, 2022. It is currently planned to be in a hybrid
          format with the details to be finalized later.
        </p>
        <p className="text-lg">
          The annual conference of the International Society for Music
          Information Retrieval (ISMIR) is the world’s leading research forum on
          processing, analyzing, searching, organizing and accessing
          music-related data. The 23rd ISMIR conference welcomes proposals for
          tutorials to be given in conjunction with the conference. Tutorials
          take place at the start of the ISMIR conference, and this year will be
          held on Sunday, Dec 4, 2022 in a hybrid format. Each tutorial is
          allocated 3 hours to concentrate on a single topic; tutorials take
          place in parallel sessions.
        </p>
        <p className="text-lg">
          To make the conference more accessible and inclusive, in addition to
          the standard tutorial suggestions, we welcome tutorial proposals which
          either cover fundamental and introductory topics in MIR, or present an
          informative and stimulating coverage of current MIR topics in a manner
          that is targeted towards people new to the field. In particular, we
          would like to invite some under-represented topics such as dataset
          creation, copyright practices, towards cultural diversity and
          adaptation, multimodal learning, etc.
        </p>
        <p className="text-xl font-bold">Important Dates</p>
        <p className="text-lg">Time zone: Anywhere On Earth (AOE)</p>
        <ul className="text-lg list-disc list-inside">
          <li>Proposal Submission: April 17, 2022</li>
          <li>Revision: April 24, 2022</li>
          <li>Notification of Acceptance: June 5, 2022</li>
        </ul>
        <p className="text-xl font-bold">Submissions</p>
        <p className="text-lg">
          Initial proposals should be submitted as a PDF attachment via email to
          ismir2022-tutorials@ismir.net by April 17, 2022. After that, authors
          are welcome to submit revised submissions (but not initiate new
          submissions) by April 24, 2022.
        </p>
        <p className="text-xl font-bold">Submission Guidelines</p>
        <p className="text-lg">
          Tutorial proposals should consist of a 2–4 page abstract including the
          following:
        </p>
        <ul className="text-lg list-disc list-inside">
          <li>Title</li>
          <li>Presenter names, affiliations, and email addresses</li>
          <li>Motivation and relevance of the tutorial</li>
          <li>Outline of the tutorial content</li>
          <li>Intended and expected audience</li>
          <li>Short biography of the presenters</li>
          <li>
            Presentation tools and format to be used (live / pre-recorded video,
            colab notebooks, software)
          </li>
          <li>Any other special requirements</li>
        </ul>
        <p className="text-xl font-bold">Review Process</p>
        <p className="text-lg">
          Acceptance/rejection decisions will be made by the ISMIR2022 Tutorial
          Chairs, and notifications will be made by June 5, 2022. The decision
          will depend on the following criteria:
        </p>
        <ul className="text-lg list-disc list-inside">
          <li>
            Relevance (i.e., of interest to the whole community or only a
            segment thereof)
          </li>
          <li>
            Suitability to students who are new to MIR and to those with basic
            knowledge of MIR (rather than specialists)
          </li>
          <li>Quality, comprehensiveness and coverage</li>
          <li>
            Originality of topics with respect to previous ISMIR tutorials
          </li>
          <li>Novelty of authors with respect to previous ISMIR tutorials</li>
          <li>Expertise of authors</li>
          <li>Suitability for online presentation</li>
          <li>Complementarity of tutorials</li>
          <li>
            Usage of open-source and free software tools/data, reproducible
            research
          </li>
        </ul>
        <p className="text-lg">
          You may refer to the tutorials offered last year,{" "}
          <span className="text-[#d83616]">
            <a href="https://ismir2021.ismir.net/tutorials/" target="_blank">
              https://ismir2021.ismir.net/tutorials/
            </a>
          </span>
          . For additional information, you can reach the tutorial program
          chairs via{" "}
          <span className="text-[#d83616]">
            <a href="mailto:ismir2022-tutorials@ismir.net" target="_blank">
              ismir2022-tutorials@ismir.net
            </a>
          </span>
        </p>
        <p className="text-lg">Best regards,</p>
        <p className="text-lg">
          Tutorial Program Chairs (Vipul Arora, Keunwoo Choi, Sri Rama Murty
          Kodukula)
        </p>
      </div>
    </div>
  );
};

export default Tutorials;
