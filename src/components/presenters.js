import React from "react";

const Presenters = () => {
  return (
    <div className="space-y-5">
      <div className="space-y-3">
        <h1 className="text-[#d83616] font-bold md:text-3xl text-2xl mt-5">
          Instructions for Presenters
        </h1>
        <h2 className="font-bold">Hybrid Presentation Format</h2>
        <p className="text-lg">This year’s ISMIR will take place in a hybrid format, with a mix of in-person and virtual presenters and attendees. The format presented below is intended to give all attendees an opportunity to interact with all presenting authors. Note however that because of time zone differences, not all interactions will be synchronous.</p>
        <p className="font-bold text-lg">All papers will have both a short (4 minute) oral presentation, accompanied by a poster presentation.</p>

        <p className="font-bold text-xl">Before the conference</p>
        <p className="font-bold text-lg">All</p><p className="text-lg"> presenting authors are asked to upload* the following materials by </p><p className="font-bold text-lg">October 21st, 2022 AOE:</p>
        <ul className="list-disc text-lg list-inside">
            <li>A pre-recorded video presenting of their paper (see instructions below)</li>
            <li>A poster presentation pdf (see instructions below)</li>
            <li>[Physical presentations only] The slides for the physical presentation (see instructions below).</li>
            <li>An image that best represents your paper, to be used as a thumbnail for the papers page on the online platform.</li>
        </ul>

        <p className="text-lg">These materials will be available to all participants throughout the conference via the online platform (MiniConf).<br></br>
        *See the “Uploading Materials” section below for details.</p>

        <p className="font-bold text-xl">During the conference:</p>
        <p className="text-lg">Similar to ISMIR 2018 and 2019, paper sessions will have a single-track 4-minute oral presentation component, followed by a poster session for further questions and discussions.</p>

        <p className="font-bold text-lg">Oral presentation sessions:</p>
        <ul className="list-disc text-lg list-inside">
        <li>In-person presenters will give their 4-minute presentation live during the session</li>
        <li>Virtual presenters will have their pre-recorded video played back during the live session, alternating with in-person presentations.</li>
        <li>In-person attendees will watch this like a regular oral session</li>
        <li>Virtual attendees will be able to watch the full session via a livestream on Zoom or post-hoc as a recorded session available on the conference platform.</li>
        <li>For all participants, the 4-minute pre-recorded videos will be available on MiniConf throughout the conference.</li>
        </ul>

        <p className="font-bold text-lg">Poster sessions:</p>
        <ul className="list-disc text-lg list-inside">
        <li>In-person presenters will be asked to print and present a physical poster like in normal conferences. A Slack channel for each paper will be used to asynchronously respond to questions. We strongly encourage video responses!</li>
        <li>Virtual presenters will not have a synchronous poster session due to time zone constraints. Instead they will be able to respond to questions asynchronously via the paper’s dedicated Slack channel. Virtual presenters can choose to organize time slots (e.g., poster sessions right after oral presentations playing back their videos) to communicate with virtual attendees in real time through the poster channel’s video call on Slack.</li>
        <li>In-person attendees will be able to physically see all posters. Posters for virtual presenters will be projected on screens in the poster venue. In-person attendees can ask asynchronous questions to virtual presenters via the paper’s slack channel. We strongly encourage sending questions by recording a short video!</li>
        <li>Virtual attendees will have access to all online poster pdfs via MiniConf, and will be able to asynchronously ask questions using the paper’s slack channel. We, once again, strongly encourage sending questions by recording a short video! When possible, we also encourage virtual attendees to post questions before the physical poster sessions to allow authors to respond (by recording a short video) during their session.</li>
        </ul>

        <h2 className="font-bold">Instructions for preparing materials</h2>

        <p className="font-bold text-xl">Video Presentations</p>
        <p className="text-lg">Similar to the 4 minute presentations of past ISMIRs, these prerecorded short videos should introduce the topic of your paper, inform of some insights from the work, and entice watchers to read the paper and visit your poster sessions.</p>

        <p className="text-lg">We recommend recording voice overs to a slide show or slides with embedded video of the presenter. One way to do this is record the presentation on a virtual meeting platform such as <span className="text-[#d83616]"><a href="https://ieeetv.ieee.org/mobile/video/recording-your-presentation-with-zoom" target="_blank">Zoom</a></span>, <span className="text-[#d83616]"><a href="https://support.google.com/meet/answer/9308681?hl=en" target="_blank">Google Meet</a></span>, <span className="text-[#d83616]"><a href="https://support.microsoft.com/en-us/office/record-a-meeting-in-teams-34dfbe7f-b07d-4a27-b4c6-de62f1348c24?ui=en-us&rs=en-us&ad=us" target="_blank">Microsoft Teams</a></span>. Presentation programs such as <span className="text-[#d83616]"><a href="https://support.microsoft.com/en-us/office/record-a-slide-show-with-narration-and-slide-timings-0b9502c6-5f6c-40ae-b1e7-e47d8741161c?ui=en-us&rs=en-us&ad=us" target="_blank">Powerpoint</a></span> and screen capture programs such as <span className="text-[#d83616]"><a href="https://screencast-o-matic.com/" target="_blank">Screencast-o-matic</a></span> can be used to record slide presentations with voiceover.</p>

        <p className="font-bold text-lg">Format</p>
        <p className="text-lg">Duration: up to 4 minutes (strict)</p>
        <p className="text-lg">File size: 300 MB max</p>
        <p className="text-lg">Video format: mp4</p>
        <p className="text-lg">Video codec: H.264</p>
        <p className="text-lg">Dimension: minimum height 720px, aspect ratio 16:9</p>
        <p className="text-lg">Resolution: 1080p (1920px x 1080px) or 720p (1280px x 720px)</p>
        <p className="text-lg">Filename: Please name the file as video_&lt;submission_id&rt;_&lt;lastname&rt;.mp4. &lt;submission_id&rt; is the paper submission number and &lt;lastname&rt; is the presenting author’s family name (ex: video_118_Goto.mp4)</p>

        <p className="font-bold text-xl">Slides for in-person presenters</p>
        <p className="text-lg">In person presenters will need to upload the slides they will present ahead of time in either PDF or as a link to a google slides presentation. For upload instructions see the uploading section below.</p>

        <p className="font-bold text-xl">Poster PDFs</p>

        <p className="text-lg">Poster pdfs should be in A0 portrait (vertical) format. All posters will be available on MiniConf. Physical posters will be printed and displayed in the conference venue. More information about local poster printing services will be provided soon.</p>

        <p className="font-bold text-xl">Thumbnail Image</p>
        <p className="text-lg">An image that best represents your paper is to be provided by authors to be used as a thumbnail for the paper on the online platform. It could simply be a figure from your paper or you can get creative. The thumbnail image should be a PNG file less than 1 MB and less than 1920x1080 in dimension. Please name the file as thumbnail_&lt;submission_id&rt;_&lt;lastname&rt;.png </p>

        <h2 className="font-bold">Uploading Materials</h2>
        <p className="text-lg">The materials must be uploaded following the instructions below by <p className="font-bold text-lg">October 21st, 2022 AOE</p>, Anywhere On Earth (AOE). </p>

        <p className="text-lg">Authors will receive an email with a link to upload their materials. In case of access restrictions or complications, participants may also share URL links to uploads of their material with ismir2022-tech@ismir.net using their own dropbox service or weTransfer.</p>

        <p className="text-lg">If you have any questions concerning uploading materials please contact <span className="text-[#d83616]">
              <a href="mailto:ismir2022-tech@ismir.net" target="_blank">
              ismir2022-tech@ismir.net
              </a>
            </span>. If you have any questions regarding the presentation materials themselves, please reach out to <span className="text-[#d83616]">
              <a href="mailto:ismir2022-papers@ismir.net" target="_blank">
              ismir2022-papers@ismir.net
              </a>
            </span>.</p>

      </div>
    </div>
  );
};

export default Presenters;
