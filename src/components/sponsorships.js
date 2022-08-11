import React from "react";

const Sponsorships = () => {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-[#d83616] font-bold md:text-4xl text-3xl mt-5">
          Call for Sponsorships
        </h1>
      </div>
      <div className="space-y-3">
        <p className="text-xl font-bold">About ISMIR 2022</p>
        <p className="text-xl">
          The annual conference of the International Society for Music
          Information Retrieval (ISMIR) will be held in Bengaluru, India from
          December 4-8, 2022. ISMIR represents the largest body of scholars,
          researchers and practitioners in the field of music information
          retrieval (MIR), an interdisciplinary research area concerned with
          processing, analysing, organising and accessing music information. The
          scope of ISMIR extends across the fields of computer science,
          musicology, cognitive science, library & information science and
          electrical engineering. With its strong research and application
          leanings, the ISMIR conference has traditionally been supported by
          prominent names in the music industry across the world.
        </p>
        <p className="text-xl font-bold">Sponsorship Opportunities</p>
        <p className="text-xl">
          ISMIR 2022 will be organized in a hybrid mode where we expect around
          150 participants attending physically and over 800 participants
          virtually from around the world. ISMIR 2022 offers sponsorship
          opportunities for the main conference event in Platinum, Gold, Silver
          tiers, and as a Supporter. Taking this opportunity to become a valued
          sponsor of the conference provides you a platform to:
        </p>
        <ul className="text-xl list-disc list-inside">
          <li>
            Showcase your organization’s latest research and products to an
            International community of MIR researchers and practitioners
          </li>
          <li>Recruit top technical talent</li>
          <li>
            Follow state of the art in music information research and
            technologies
          </li>
        </ul>
        <p className="text-xl">
          In addition to the main conference sponsorship, you may support Women
          in Music Information Retrieval (WiMIR) and Diversity & Inclusion
          initiatives that are an integral part of ISMIR 2022. The benefits for
          conference sponsorship and WiMIR sponsorship are described below:
        </p>
        <p className="text-xl font-bold">ISMIR 2022 Sponsorship Packages</p>
        {/* Will contain the diff tiers of sponsorships */}
        <p className="text-xl">
          In addition to Platinum, Gold and Silver tiers, we also offer
          sponsorship to ISMIR 2022 as a Supporter with the following limited
          benefits:
        </p>
        {/* Will contain the supporter tier*/}
        <p className="text-xl font-bold">WiMIR Sponsorship Packages</p>
        {/* Will contain the Wimir Sponsorship tiers: Patron Contributor and Support*/}
        <p className="text-xl">
          * Dedicated WiMIR program elements may include any of the following:
          WiMIR/D&I page of ISMIR2022 conference website; official WiMIR/D&I
          presentations during the ISMIR2022 conference; WiMIR/D&I blog post
          following the conclusion of the conference.
        </p>
        <p className="text-xl font-bold">Contact</p>
        <p className="text-xl">
          Please contact us at ismir2022-sponsorship@ismir.net if you wish to
          discuss further on the sponsorship opportunities available, have any
          further questions or need additional information about ISMIR 2022.
        </p>
        <p className="text-xl">
          Joe Cheri Ross, Pratibha Moogi, Rishikesh Daoo
          <br></br> Sponsorship Chairs,
          ISMIR 2022
        </p>
      </div>
    </div>
  );
};

export default Sponsorships;
