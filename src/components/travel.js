import React from "react";
import moe_approval from '../assets/MoE_approval_ISMIR2022.pdf';
import mha_circular from '../assets/MHA_circular_2018.pdf';
import mea_clearance from '../assets/MEA_clearance_ISMIR2022.pdf';


const Travel = () => {
  return (
    <div className="space-y-5">
      <div className="space-y-3">
        <h1 className="text-[#d83616] font-bold md:text-3xl text-2xl mt-5">
          Travel
        </h1>
        <p className="text-lg">
          This page contains information to help you plan your travel to
          Bengaluru, India to attend ISMIR 2022. We will periodically update the
          information on connectivity, visas, accommodation and more as it
          becomes available. Please watch this space for additional information.
        </p>
      </div>
      <div className="space-y-3">
        <p className="text-2xl font-bold">Visa Guidelines</p>
        <p className="text-lg">
          The information on this page is provided as general guidance for
          securing a visa to travel to India to attend the ISMIR 2022
          conference. The information provided cannot be constituted as legal
          advice. While the ISMIR 2022 organizers make every effort to keep the
          information up to date, we cannot make any guarantees about the
          accuracy or validity of the information.
        </p>
        <p className="text-lg font-bold">General Information</p>
        <p className="text-lg">
          Visitors entering India must possess a passport valid for at least 6
          months after their date of entry into India. There should be at least
          two blank pages in the passport. An entry visa is essential for all
          those visiting India. There are several types of visas, including
          Conference, Tourist and Business Visas. Those traveling specifically
          for ISMIR 2022 are required to apply for a Conference Visa.
        </p>
        <p className="text-lg font-bold">When to Apply</p>
        <p className="text-lg">
          For most countries, the time taken by embassies to issue a Conference
          Visa is normally 14 days, and the visa is valid for three months from
          the date of issue by the embassy (not from the date of entry into
          India). For applications from citizens of Afghanistan, Iraq, Pakistan,
          Sudan, Foreigners of Pakistani Origin and Stateless persons, the time
          taken is 60 days and the visa is valid for one month.
        </p>
        <p className="text-lg font-bold">Share your Passport Details</p>
        <p className="text-lg">
          All participants who are non-Indian nationals will need to share their
          passport details so the ISMIR 2022 team can apply for necessary
          permissions from the concerned ministry. Visa Applicants from (1)
          Afghanistan, (2) Iraq, (3) Pakistan (4) Sudan (5) Foreigners of
          Pakistani Origin and (6) Stateless persons will need a special
          political clearance from Ministry of Home Affairs, Govt. of India.
        </p>
        <p className="text-lg">
          For participants from Pakistan: The port of entry into India should be
          Delhi, Mumbai or Chennai only. Hyderabad is not an allowed point of
          entry for Pakistani citizens. Pakistani citizens holding two passports
          should apply for a visa on their Pakistan passport.
        </p>
        <p className="text-lg font-bold">Fill the Visa Application Form</p>
        <p className="text-lg">
          Indian Embassies, Consulates and High Commissions now require visa
          applications to be made online from the Indian Government website:{" "}
          <span className="text-[#d83616] ">
            <a href="https://indianvisaonline.gov.in/" target="_blank">
              https://indianvisaonline.gov.in/
            </a>
          </span>. 
          Please note that this website is operated by the Indian Government and
          not by the ISMIR 2022 organisers. Here are some tips on using that
          website:
        </p>
        <ul className="list-disc text-lg list-inside">
          <li>
            Make a note of your temporary reference number. If the website gives
            error messages or freezes, you can try later using your temporary
            reference number to retrieve your partially filled form.
          </li>
          <li>
            A visa application form will be generated with the High Commission
            Logo at the top. Print 2 copies (and another one for yourself) and
            sign. Save the document in case you need to reprint.
          </li>
        </ul>
        <p className="text-lg font-bold">Get your Supporting Documents</p>
        <p className="text-lg">
          The supporting documents required for a visa application are:
        </p>
        <ul className="list-disc text-lg list-inside">
          <li>Two passport-size photographs</li>
          <li>Letter of identification from your institution or employer</li>
          <li>Confirmed onward & return tickets (if applicable)</li>
          <li>
            Letter of Invitation from the conference organisers (will be
            provided by ISMIR 2022 organizers). If you have provided your passport details during registration for ISMIR 2022, you can obtain your invitation letter using this portal {" "} 
            <span className="text-[#d83616] "><a href="https://ismir2022.virtualmnc.com/" target="_blank"> https://ismir2022.virtualmnc.com/ </a> </span> 
            {" "} by entering your passport number. Please contact us if you have difficulty obtaining the invitation letter. 
          </li>
         </ul>
         <p className="text-lg"> Letters of permission from Indian Government Ministries for holding
            the conference (will be provided by ISMIR 2022 organizers). These letters will include: </p>
            <ul className="list-disc text-lg list-inside">
              <li> Approval letter from Ministry of Education (MoE), Government of India, which is the nodal ministry for the conference: {" "}
                   <span className="text-[#d83616] "> <a href= {moe_approval} target="_blank">Download MoE approval letter PDF</a></span>
              </li>
              <li> Approval and political clearance letter from the Ministry of External Affairs (MEA), Government of India, which is needed for all non-Indian nationals to travel to the conference: {" "}
                   <span className="text-[#d83616] "> <a href= {mea_clearance} target="_blank">Download MEA clearance letter PDF</a></span>
              </li>
            </ul>
        <p className="text-lg"> Please note that an approval letter from Ministry of Home Affairs (MHA), 
          Government of India is not necessary for the conference. If your visa application requires it 
          and asks for it, please submit this circular from the ministry (that explains the conditions 
          in which MHA approval is needed) along with your application: {" "} 
          <span className="text-[#d83616] "> <a href= {mha_circular} target="_blank">Download MHA circular PDF</a></span> 
        </p>
        <p className="text-lg font-bold">Photographs</p>
        <p className="text-lg">
          You will need to provide two 50 mm x 50 mm photos. Please ensure they
          are of your entire face from the top of your head to your chin, and
          that this distance measures between 25mm and 35mm. If this is not
          followed your application will be rejected.
        </p>
        <p className="text-lg font-bold">Letter from your Institution</p>
        <p className="text-lg">
          This letter from the institution you are associated with should
          identify you and their relationship with you, and confirm that they
          understand that you intend to visit India for the Conference duration
          (plus any extra days for tourism).
        </p>
        <p className="text-lg font-bold">
          Invitation letter for the Conference
        </p>
        <p className="text-lg">
          The ISMIR 2022 secretariat can provide an invitation letter for VISA
          purposes, if required. However, it does not guarantee you a visa OR
          might not be required by the consulate to process the VISA too. Hence
          kindly reconfirm before applying for the VISA with the consulate or
          your travel agent. The invitation letter will be issued ONLY after you
          have registered and full payment has been received. To obtain an
          invitation letter, please write to us with the following details (these details
          are also collected while registering to the conference);
        </p>
        <ul className="list-disc text-lg list-inside">
          <li>Full Name (as mentioned on the Passport)</li>
          <li>Passport Number</li>
          <li>Place of Issue (Passport)</li>
          <li>Date of Issue (Passport)</li>
          <li>Affiliation with city and country</li>
          <li>Nationality</li>
        </ul>
        <p className="text-lg">
          The above listed details should be exactly as it appears on your
          passport. Any differences could lead to a delay and/or denial of your
          visa.
        </p>
        <p className="text-lg font-bold">
          Local Contact Details
        </p>
        <p className="text-lg">
        If you need to enter the details of a local contact in your visa application, please add the contact details of the general chairs 
        Prof. Preeti Rao, IIT Bombay (<span className="text-[#d83616] "><a href="https://www.ee.iitb.ac.in/web/people/faculty/home/prao" target="_blank">Homepage</a></span>) 
        or Prof. Hema Murthy, IIT Madras (<span className="text-[#d83616] "><a href="http://www.cse.iitm.ac.in/~hema/" target="_blank">Homepage</a></span>). 
        You can find the address, telephone number and e-mail from their homepages if needed. 
        </p>  
        <p className="text-lg font-bold">
          Any Other documents required by Indian Embassies for Conference Visa
        </p>
        <p className="text-lg">
          In addition to the documents described above, some embassies may
          require additional information. Please check the website of the Indian
          Embassy in your country under the heading ‘Conference Visa’. The list
          of Indian diplomatic missions overseas can be consulted at:{" "}
          <span className="text-[#d83616] ">
            <a
              href="http://passportindia.gov.in/AppOnlineProject/mission/mission"
              target="_blank"
            >
              http://passportindia.gov.in/AppOnlineProject/mission/mission
            </a>
          </span>.
        </p>
        <p className="text-lg font-bold">Accompanying Persons</p>
        <p className="text-lg">
          Accompanying Persons are not entitled to attend the conference
          technical sessions and should apply for a Tourist Visa. They can of
          course benefit from the events open to them and participate in the
          social events of the Conference. The application process for Tourist
          Visa is much simpler than Conference Visa. No letter of invitation is
          required. Accompanying persons can use the e-Tourist visa facility at
          the website:{" "}
          <span className="text-[#d83616] ">
            <a
              href="https://indianvisaonline.gov.in/visa/tvoa.html"
              target="_blank"
            >
              https://indianvisaonline.gov.in/visa/tvoa.html
            </a>
          </span>.
        </p>
        <p className="text-lg font-bold">Enquiries</p>
        <p className="text-lg">
          Enquiries can be sent to the conference secretariat at{" "}
          <span className="text-[#d83616] ">
            <a href="mailto:ismir2022-registration@ismir.net" target="_blank">
              ismir2022-registration@ismir.net
            </a>
          </span>
          . We can help with information, but the organisers cannot influence
          the embassies in any way. It is the responsibility of the participant
          to get his/her visa.
        </p>
        <p className="text-lg font-bold">Important Note</p>
        <p className="text-lg">
          Please note that the ISMIR 2022 oraganizing team is not authorized to
          assist or have any control over the VISA process beyond providing an
          Invitation Letter, that too post completion of the online registration
          process. Should your application be denied, the ISMIR 2022 team cannot
          change the decision of the Ministry of Foreign Affairs, nor will any
          member from the committee be able to engage in discussion or
          correspondence with the visa issuing authorities on behalf of the
          applicant.
        </p>
        <p className="text-lg">
          The registration fee cannot be refunded for the reason of VISA being
          denied – cancellation policy mentioned on the website will be
          followed. We request you to please register and apply for VISA as early as you
          can to make sure you have enough time to plan your trip.
        </p>
      </div>
    </div>
  );
};

export default Travel;
