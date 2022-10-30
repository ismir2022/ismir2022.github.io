import React from "react";
import { Link } from "gatsby";

const Registration = () => {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-[#d83616] font-bold md:text-3xl text-3xl mt-5">
          Registration
        </h1>
      </div>
      <div className="space-y-5">
        <p className="text-lg">
          Registration is now open for ISMIR 2022! Please be aware that by
          registering, you agree to abide by the{" "}
          <span className="text-[#d83616]">
            <Link to="/codeofconduct">ISMIR 2022 Code of Conduct</Link>
          </span>. ISMIR 2022 will be a hybrid conference allowing all registrants to
          choose to attend the event virtually or in-person in Bengaluru. We
          encourage participants to register for the conference early,
          especially if you plan to attend ISMIR 2022 in-person to allow
          sufficient time to obtain a visa and make appropriate travel plans.
        </p>
        <button class="btn btn-md  btn-outline text-[#d83616]">
          <a
            href="https://www.townscript.com/v2/e/ismir2022-register/booking/tickets"
            target="_blank"
          >
            Register for ISMIR 2022
          </a>
        </button>
        <div className=" overflow-x-scroll">
          <table className="table w-full">
            <tbody>
              <tr className=" ">
                <th className="bg-[#ABACB0]">CATEGORY</th>
                <th className="bg-[#ABACB0]" colSpan={3}>
                  Prices in INR, exclusive of 18% GST
                </th>
                {/* <td bgcolor="#f2f3f4" rowspan="27" width="0.01"></td> */}
                <th className="bg-[#ABACB0]" colSpan={3}>
                  Prices in INR, inclusive of 18% GST
                </th>
              </tr>
              <tr className="">
                <th className="bg-[#DCDEE2]">AUTHOR</th>
                <th className="bg-[#DCDEE2]">Until Aug 12</th>
                <th className="bg-[#DCDEE2]" />
                <th className="bg-[#DCDEE2]" />
                <th className="bg-[#DCDEE2]">Until Aug 12</th>
                <th className="bg-[#DCDEE2]" />
                <th className="bg-[#DCDEE2]" />
              </tr>
              <tr className="">
                <th className="bg-[#F5F7FC]">Student (In-person or virtual)</th>
                <td className="bg-[#F5F7FC]">₹17,000</td>
                <td className="bg-[#F5F7FC]" />
                <td className="bg-[#F5F7FC]" />
                <td className="bg-[#F5F7FC]">₹20,060</td>
                <td className="bg-[#F5F7FC]" />
                <td className="bg-[#F5F7FC]" />
              </tr>
              <tr className="">
                <th className="bg-[#F5F7FC]">Full (In-person or virtual)</th>
                <td className="bg-[#F5F7FC]">₹34,000</td>
                <td className="bg-[#F5F7FC]" />
                <td className="bg-[#F5F7FC]" />
                <td className="bg-[#F5F7FC]">₹40,120</td>
                <td className="bg-[#F5F7FC]" />
                <td className="bg-[#F5F7FC]" />
              </tr>
              <tr>
                <td className="bg-[#F5F7FC]" colSpan={8}>
                  {" "}
                </td>
              </tr>
              <tr className="">
                <th className="bg-[#DCDEE2]">NON-AUTHOR</th>
                <th className="bg-[#DCDEE2]">Early Bird</th>
                <th className="bg-[#DCDEE2]">Regular</th>
                <th className="bg-[#DCDEE2]">On-site</th>
                <th className="bg-[#DCDEE2]">Early Bird</th>
                <th className="bg-[#DCDEE2]">Regular</th>
                <th className="bg-[#DCDEE2]">On-site</th>
              </tr>
              <tr className="">
                <th className="bg-[#DCDEE2]">In-person Participation</th>
                <th className="bg-[#DCDEE2]">Until Aug 31</th>
                <th className="bg-[#DCDEE2]">Sep 01 - Nov 25</th>
                <th className="bg-[#DCDEE2]">Dec 04 - 08</th>
                <th className="bg-[#DCDEE2]">Until Aug 31</th>
                <th className="bg-[#DCDEE2]">Sep 01 - Nov 25</th>
                <th className="bg-[#DCDEE2]">Dec 04 - 08</th>
              </tr>
              <tr className="">
                <th className="bg-[#F5F7FC]">Student (In-person)</th>
                <td className="bg-[#F5F7FC]">₹17,000</td>
                <td className="bg-[#F5F7FC]">₹19,000</td>
                <td className="bg-[#F5F7FC]">₹21,000</td>
                <td className="bg-[#F5F7FC]">₹20,060</td>
                <td className="bg-[#F5F7FC]">₹22,420</td>
                <td className="bg-[#F5F7FC]">₹24,780</td>
              </tr>
              <tr className="">
                <th className="bg-[#F5F7FC]">Full (In-person)</th>
                <td className="bg-[#F5F7FC]">₹34,000</td>
                <td className="bg-[#F5F7FC]">₹38,000</td>
                <td className="bg-[#F5F7FC]">₹42,000</td>
                <td className="bg-[#F5F7FC]">₹40,120</td>
                <td className="bg-[#F5F7FC]">₹44,840</td>
                <td className="bg-[#F5F7FC]">₹49,560</td>
              </tr>
              <tr>
                <td className="bg-[#F5F7FC]" colSpan={8}>
                  {" "}
                </td>
              </tr>
              <tr className="">
                <th className="bg-[#DCDEE2]">Virtual Participation</th>
                <th className="bg-[#DCDEE2]" />
                <th className="bg-[#DCDEE2]" />
                <th className="bg-[#DCDEE2]" />
                <th className="bg-[#DCDEE2]" />
                <th className="bg-[#DCDEE2]" />
                <th className="bg-[#DCDEE2]" />
              </tr>
              <tr className="">
                <th className="bg-[#F5F7FC]">Student (Virtual)</th>
                <td className="bg-[#F5F7FC]">₹4,250</td>
                <td className="bg-[#F5F7FC]">₹5,500</td>
                <td className="bg-[#F5F7FC]">₹5,500</td>
                <td className="bg-[#F5F7FC]">₹5,015</td>
                <td className="bg-[#F5F7FC]">₹6,490</td>
                <td className="bg-[#F5F7FC]">₹6,490</td>
              </tr>
              <tr className="">
                <th className="bg-[#F5F7FC]">Full (Virtual)</th>
                <td className="bg-[#F5F7FC]">₹12,750</td>
                <td className="bg-[#F5F7FC]">₹16,500</td>
                <td className="bg-[#F5F7FC]">₹16,500</td>
                <td className="bg-[#F5F7FC]">₹15,045</td>
                <td className="bg-[#F5F7FC]">₹19,470</td>
                <td className="bg-[#F5F7FC]">₹19,470</td>
              </tr>
              <tr>
                <td className="bg-[#F5F7FC]" colSpan={8}>
                  {" "}
                </td>
              </tr>
              <tr className="">
                <th className="bg-[#DCDEE2]">TUTORIALS</th>
                <th className="bg-[#DCDEE2]" />
                <th className="bg-[#DCDEE2]" />
                <th className="bg-[#DCDEE2]" />
                <th className="bg-[#DCDEE2]" />
                <th className="bg-[#DCDEE2]" />
                <th className="bg-[#DCDEE2]" />
              </tr>
              <tr className="">
                <th className="bg-[#F5F7FC]">Student (Virtual)</th>
                <td className="bg-[#F5F7FC]">₹1,000</td>
                <td className="bg-[#F5F7FC]">₹1,200</td>
                <td className="bg-[#F5F7FC]">₹1,200</td>
                <td className="bg-[#F5F7FC]">₹1,180</td>
                <td className="bg-[#F5F7FC]">₹1,416</td>
                <td className="bg-[#F5F7FC]">₹1,416</td>
              </tr>
              <tr className="">
                <th className="bg-[#F5F7FC]">Full (Virtual)</th>
                <td className="bg-[#F5F7FC]">₹2,500</td>
                <td className="bg-[#F5F7FC]">₹3,000</td>
                <td className="bg-[#F5F7FC]">₹3,000</td>
                <td className="bg-[#F5F7FC]">₹2,950</td>
                <td className="bg-[#F5F7FC]">₹3,540</td>
                <td className="bg-[#F5F7FC]">₹3,540</td>
              </tr>
              <tr>
                <td className="bg-[#F5F7FC]" colSpan={8}>
                  {" "}
                </td>
              </tr>
              <tr className="">
                <th className="bg-[#DCDEE2]">ADD-ONS</th>
                <th className="bg-[#DCDEE2]" />
                <th className="bg-[#DCDEE2]" />
                <th className="bg-[#DCDEE2]" />
                <th className="bg-[#DCDEE2]" />
                <th className="bg-[#DCDEE2]" />
                <th className="bg-[#DCDEE2]" />
              </tr>
              <tr className="">
                <th className="bg-[#F5F7FC]">Banquet Extra person (+1)</th>
                <td className="bg-[#F5F7FC]" colSpan={3}>
                  ₹3,000
                </td>
                <td className="bg-[#F5F7FC]" colSpan={3}>
                  ₹3,540
                </td>
              </tr>
              <tr className="bg-[#F5F7FC]">
                <th className="bg-[#F5F7FC]">IME Workshop Extra person(+1)</th>
                <td className="bg-[#F5F7FC]" colSpan={3}>
                  ₹2,000
                </td>
                <td className="bg-[#F5F7FC]" colSpan={3}>
                  ₹2,360
                </td>
              </tr>
              <tr>
                <td className="bg-[#F5F7FC]" colSpan={8}>
                  {" "}
                </td>
              </tr>
              <tr className="">
                <th className="bg-[#DCDEE2]">SATELLITES</th>
                <th className="bg-[#DCDEE2]">Early Bird</th>
                <th className="bg-[#DCDEE2]">Regular</th>
                <th className="bg-[#DCDEE2]">On-site</th>
                <th className="bg-[#DCDEE2]">Early Bird</th>
                <th className="bg-[#DCDEE2]">Regular</th>
                <th className="bg-[#DCDEE2]">On-site</th>
              </tr>
              <tr className="">
                <th className="bg-[#DCDEE2]">MMMT Workshop</th>
                <th className="bg-[#DCDEE2]">Until Aug 31</th>
                <th className="bg-[#DCDEE2]">Sep 01 - Nov 25</th>
                <th className="bg-[#DCDEE2]">Dec 02 - 03</th>
                <th className="bg-[#DCDEE2]">Until Aug 31</th>
                <th className="bg-[#DCDEE2]">Sep 01 - Nov 25</th>
                <th className="bg-[#DCDEE2]">Dec 02 - 03</th>
              </tr>
              <tr className="">
                <th className="bg-[#F5F7FC]">Student (In-person or virtual)</th>
                <td className="bg-[#F5F7FC]">₹1,000</td>
                <td className="bg-[#F5F7FC]">₹1,000</td>
                <td className="bg-[#F5F7FC]">₹1,000</td>
                <td className="bg-[#F5F7FC]">₹1,180</td>
                <td className="bg-[#F5F7FC]">₹1,180</td>
                <td className="bg-[#F5F7FC]">₹1,180</td>
              </tr>
              <tr className="">
                <th className="bg-[#F5F7FC]">Full (In-person or virtual)</th>
                <td className="bg-[#F5F7FC]">₹2,200</td>
                <td className="bg-[#F5F7FC]">₹2,200</td>
                <td className="bg-[#F5F7FC]">₹2,200</td>
                <td className="bg-[#F5F7FC]">₹2,596</td>
                <td className="bg-[#F5F7FC]">₹2,596</td>
                <td className="bg-[#F5F7FC]">₹2,596</td>
              </tr>
              <tr>
                <td className="bg-[#F5F7FC]" colSpan={8}>
                  {" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xl font-bold">
          Registration benefits (Virtual participation)
        </p>
        <ul className="list-disc list-inside text-lg">
          <li>
            E-version of all conference material - abstract book, program book,
            etc.
          </li>
          <li>
            Access to the conference through the virtual conference platform
            that will host all hybrid sessions and exhibitions of the
            conference. No access to the physical-only events of the conference.
          </li>
          <li>
            1-year membership of the International Society for Music Information
            Retrieval.
          </li>
        </ul>
        <p className="text-xl font-bold">
          Registration benefits (In-Person participation)
        </p>
        <ul className="list-disc list-inside text-lg">
          <li>Everything included for virtual participants</li>
          <li>Conference kit/ bag with all the conference material</li>
          <li>Access to all physical sessions and exhibitions at the venue</li>
          <li>
            Welcome reception, banquet, coffee breaks and luncheons during the
            conference dates (4-8 Dec)
          </li>
          <li>
            Registration for IME workshop on Dec 9, 2022 is free with In-person
            registration. Please make sure you select this option during
            registration
          </li>
        </ul>
        <p className="text-xl font-bold">Important Note for Authors</p>
        <ul className="list-disc list-inside text-lg">
          <li>
            Each accepted paper needs to be covered by at least one author
            registration of the appropriate category (student or full) by the
            author registration deadline (Aug 12, 2022).
          </li>
          <li>
            A student author registration can cover upto one paper and a full
            author registration can cover upto two papers.
          </li>
          <li>
            It is mandatory for at least one author of an accepted paper to
            register for the conference and present their work at the conference
            (in-person or virtually).
          </li>
        </ul>
        <p className="text-xl font-bold">
          Important Note for in-person participants
        </p>
        <ul className="list-disc list-inside text-lg">
          <li>
            All non-Indian nationals registering for in-person participation
            will need to submit their passport details which will be used solely
            to obtain the necessary ministry approvals for the organisers to
            host international conference participants and procure the documents
            required by the participants to apply for a VISA to India. The
            details captured will be deleted at the end of the conference and
            will not be used for any other purposes other than mentioned above.
          </li>
          <li>
            The participant is responsible for their own Conference VISA
            application for the travel to India for ISMIR 2022 (Additional
            information is here:{" "}
            <span className="text-[#d83616]">
              <Link to="/attend/travel">
                https://ismir2022.ismir.net/attend/travel
              </Link>
            </span>
            )
          </li>
          <li>
            An invitation letter for VISA purposes will be sent to the
            registered email address after completion of the registration
            process including fee payment. Invitation letters for those
            registering by Early Bird deadline (Aug 31, 2022) will be sent out
            by Sep 5, 2022.
          </li>
        </ul>
        <p className="text-xl font-bold">General Terms & Conditions:</p>
        <ul className="list-disc list-inside text-lg">
          <li>
            All prices mentioned above are quoted in Indian Rupee (INR). Goods
            and Services Tax (GST) of 18% is applicable on the fees (as
            illustrated above)
          </li>
          <li>
            All deadlines mentioned above are in AoE time zone (UTC-12:00,
            IST-17:30), except on-site registration.
          </li>
          <li>
            Approximately, 1 USD = 79 INR, 1 EUR = 80 INR, 100 JPY = 58 INR.
            Money from your account will get deducted at the prevailing rate of
            exchange at the time of transaction and your card issuer/bank may
            charge a currency conversion fee.
          </li>
          <li>
            Those who wish to attend the tutorials will have to register for
            tutorials additionally using add-ons
          </li>
          <li>
            If you are registering under the Student category, please upload a
            copy of your student ID during registration. Please also carry it to
            the conference if you are attending in-person for verification at
            the venue while collecting your badge.
          </li>
          <li>
            Registration will be only considered as confirmed on receipt of the
            complete amount.
          </li>
          <li>
            You can register online using your Debit or Credit Card. UPI and
            Netbanking are additional payment options available if you have an
            bank account in India.
          </li>
          <li>
            The registration fee does not include any travel cost, insurance,
            accommodation, sightseeing tours or airport transfers.
          </li>
          <li>
            Login credentials to access the virtual conference platform will be
            sent to you closer to the conference dates.
          </li>
          <li>
            While your safety is of utmost importance, organisers take no
            responsibility for the loss of belongings/valuables or damage to
            your property (at the venue or during transit).
          </li>
          <li>
            By registering you confirm that the COVID-19 protocols set by the
            organisers will be adhered by you during the conference.
          </li>
        </ul>
        <p className="text-xl font-bold">Cancellation Policy:</p>
        <ul className="list-disc list-inside text-lg">
          <li>
            Kindly send the cancellation requests to{" "}
            <span className="text-[#d83616]">
              <a href="mailto:ismir2022-registration@ismir.net" target="_blank">
                ismir2022-registration@ismir.net
              </a>
            </span>
            , on or before September 30, 2022 (18.00 hrs IST). Cancellations or
            changes will not be accepted over the phone. Upon cancellation,
            registration fee will be refunded after deducting 20% of the fees
            paid (and associated taxes) as administration fees, within 30
            business days.
          </li>
          <li>
            No refunds will be made for cancellation requests received after
            September 30, 2022 (18.00 hrs IST).
          </li>
        </ul>
        <p className="text-xl font-bold">FAQ</p>
        <p className="text-lg font-bold">
          Q. My payment through a credit/debit card has been declined while
          paying in INR. Do I have any alternatives modes of payment?
        </p>
        <p className="text-lg ">
          A. We have been seeing some payment issues with credit cards that do
          not support second factor authentication and those from certain banks
          some of the times. In case you see any payment issues during
          registration with the INR denominated tickets, we suggest you to
          please register using the equivalent USD denominated ticket that are
          available on the registration portal, e.g. “Student (Virtual
          Participant) - Early Bird (USD)” instead of “Student (Virtual
          Participant) - Early Bird”. The USD tickets are equivalent to the INR
          tickets and let you choose the same add-ons and options, except that
          they use a different payment processor and are expected to solve the
          issue with payment declines.
        </p>
        <p className="text-lg font-bold">
          Q. I have been provided with a discount code to register. How do I use
          the code and complete registration?
        </p>
        <p className="text-lg ">
          A. Discount code you’ve been provided is personalized to you and is
          applicable to only specific categories of tickets. To register with
          this code, please visit the registration portal and enter the provided
          discount code in the “APPLY ACCESS/DISCOUNT CODE” box that you will
          see at the top right of the page. Once the code is applied, the
          waiver/grant is applied automatically to all eligible tickets. Please
          choose the category appropriate to you and continue with registration
          filling in all needed details.
        </p>
        <p className="text-xl font-bold">Enquiries:</p>
        <p className="text-lg">
          Please write to us at{" "}
          <span className="text-[#d83616]">
            <a href="mailto:ismir2022-registration@ismir.net" target="_blank">
              ismir2022-registration@ismir.net
            </a>
          </span>{" "}
          if you have any questions about registering and attending ISMIR 2022.
        </p>
      </div>
    </div>
  );
};

export default Registration;
