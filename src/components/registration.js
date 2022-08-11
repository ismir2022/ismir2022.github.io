import React from "react";
import { Link } from "gatsby";

const Registration = () => {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-[#d83616] font-bold md:text-4xl text-3xl mt-5">
          Registration
        </h1>
      </div>
      <div className="space-y-5">
        <p className="text-xl">
          Registration is now open for ISMIR 2022! Please be aware that by
          registering, you agree to abide by the{" "}
          <span className="text-[#d83616]">
            <Link to="/codeofconduct">ISMIR 2022 Code of Conduct</Link>
          </span>{" "}
          . ISMIR 2022 will be a hybrid conference allowing all registrants to
          choose to attend the event virtually or in-person in Bengaluru. We
          encourage participants to register for the conference early,
          especially if you plan to attend ISMIR 2022 in-person to allow
          sufficient time to obtain a visa and make appropriate travel plans.
        </p>
        <button class="btn btn-md  btn-outline text-[#d83616]">
          <a href="https://www.townscript.com/v2/e/ismir2022-register/booking/tickets">
            Register for ISMIR 2022
          </a>
        </button>
        {/* Will contain registration table */}
        <p className="text-2xl font-bold">
          Registration benefits (Virtual participation)
        </p>
        <ul className="list-disc list-inside text-xl">
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
        <p className="text-2xl font-bold">
          Registration benefits (In-Person participation)
        </p>
        <ul className="list-disc list-inside text-xl">
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
        <p className="text-2xl font-bold">Important Note for Authors</p>
        <ul className="list-disc list-inside text-xl">
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
        <p className="text-2xl font-bold">
          Important Note for in-person participants
        </p>
        <ul className="list-disc list-inside text-xl">
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
        <p className="text-2xl font-bold">General Terms & Conditions:</p>
        <ul className="list-disc list-inside text-xl">
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
        <p className="text-2xl font-bold">Cancellation Policy:</p>
        <ul className="list-disc list-inside text-xl">
          <li>
            Kindly send the cancellation requests to{" "}
            <span className="text-[#d83616]">
              <a href="mailto:ismir2022-registration@ismir.net">
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
        <p className="text-2xl font-bold">Enquiries:</p>
        <p className="text-xl">
          Please write to us at{" "}
          <span className="text-[#d83616]">
            <a href="mailto:ismir2022-registration@ismir.net">
              ismir2022-registration@ismir.net
            </a>
          </span>
          .net if you have any questions about registering and attending ISMIR
          2022.
        </p>
      </div>
    </div>
  );
};

export default Registration;
