import React, {useState} from "react";
import { Link } from "gatsby";

import Kat_Agres from '../images/mmmt/Kat_Agres.jpeg'; 
import Nori_Jacoby from '../images/mmmt/Nori_Jacoby.jpeg'; 
import Tuomas_Eerola from '../images/mmmt/Tuomas_Eerola.jpeg'; 
import Anja_Volk from '../images/mmmt/Anja_Volk.jpeg'; 
import Petri_Toiviainen from '../images/mmmt/Petri_Toiviainen.jpeg'; 
import Marcelo_Wanderley from '../images/mmmt/Marcelo_Wanderley.jpeg';
import Blair_Kaneshiro from '../images/mmmt/Blair_Kaneshiro.jpeg';
import Peter_Keller from '../images/mmmt/Peter_Keller.jpeg';
import Martin_Clayton from '../images/mmmt/Martin_Clayton.png';
import JJ_Aucouturier from '../images/mmmt/Jean-Julien_Aucouturier.png';
import Suvi_Saarikallio from '../images/mmmt/Suvi_Saarikallio.png'
import RadhikaG_MaheshK from '../images/mmmt/RadhikaGosavi_MaheshKale.png'
import twin_health from '../images/mmmt/sponsor.png'

import day_1 from '../images/mmmt/schedule_day1.jpg'
import day_2 from '../images/mmmt/schedule_day2.jpg'

import poster from '../images/MMMT_poster.pdf';

export const Modal = ({ src, onClose }) => {

  return (
    <div className="modalcss">
    <span className="close" onClick={onClose}>
      &times;
    </span>
    <img className="modal-content" src={src} alt="" />
    </div>
  )
}


const Mmmt = () => 
{
  
  const [isOpen, setIsOpen] = useState(false);
  var [src_path, setsrcpath] = useState(JJ_Aucouturier);

  const showModal = (event, src) => {

    setIsOpen(true);
    setsrcpath(src);
  }


  return (
    <div className="space-y-5">
      <div className="space-y-3">
        <h1 className="text-[#d83616] font-bold md:text-3xl text-2xl mt-5">
          Music, Mind, Movement and Technology Workshop
        </h1>
      </div>
      <div className="space-y-3">
        <p className="text-xl text-[#d83616] font-bold">December 2-3, 2022</p>
        <p className="text-xl font-bold">
          Venue: Golden Jubilee Hall, Dept. of ECE, Indian Institute of Science (IISc), Bengaluru (Hybrid)
        </p>
        <p className="text-lg font-bold">Time: 9:30am - 5:00pm IST</p>
        <p className="text-lg font-bold">
          Workshop Chair:{" "}
          <span className="text-[#d83616]">
            <a
              href="https://www.iiit.ac.in/people/faculty/vinoo-alluri/"
              target="_blank"
            >
              Vinoo Alluri
            </a>
          </span>
          , IIIT Hyderabad
        </p>
        <p className="text-lg font-bold">
          <span className="text-[#d83616]">
            <a href={poster} target="_blank">
              Download Poster
            </a>
          </span>
        </p>
        <p className="text-lg">
          The Music, Mind, Movement and Technology (MMMT) workshop is a hybrid
          satellite workshop around the 23rd International Society for Music
          Information Retrieval Conference (ISMIR 2022). MMMT workshop is an
          attempt to increase the dialog between the fields of Music Information
          Retrieval and Music Cognition. This two-day workshop brings together
          leading International researchers for a series of talks highlighting
          interdisciplinary research and facilitating interaction and exchange
          of ideas around various themes. The scope of MMMT extends across the
          fields of computer science, musicology, cognitive science, social
          computing, information science, and electrical engineering, amongst
          others.
        </p>
        {isOpen && <Modal src={src_path} onClose={() => setIsOpen(false)} />}
        <p className="text-2xl font-bold">Themes and Speakers</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p className="text-xl font-bold">Opening Keynote</p> <br />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p className="text-lg">
            <span className="text-[#d83616]">
              <a href="https://github.com/jjau" target="_blank">
                Jean-Julien Aucouturier <br />
              </a>
            </span>
            <span className="text-gray-500">FEMTO-ST Institute </span>
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="flex-col flex items-center justify-center space-y-3">
            <div class="avatar">
              <img
                class="myImg"
                src={JJ_Aucouturier}
                style={{ width: 250 }}
                onClick={(event) => showModal(event, JJ_Aucouturier)}
              />
            </div>
          </div>
        </div>
        <br />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className="text-xl font-bold">Music and Health</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="flex md:flex-row flex-col flex-wrap gap-x-10 gap-y-10 md:gap-x-32 p-5">
            <div className="flex-col flex items-center justify-center space-y-3">
              <p className="text-lg">
                <span className="text-[#d83616]">
                  <a href="http://www.katagres.com/" target="_blank">
                    Kat Agres <br />
                  </a>
                </span>
                <span className="text-gray-500">National University </span>{" "}
                <br />
                <span className="text-gray-500"> of Singapore </span>
              </p>
              <div class="avatar">
                <img
                  class="myImg"
                  src={Kat_Agres}
                  style={{ width: 250 }}
                  onClick={(event) => showModal(event, Kat_Agres)}
                />
              </div>
            </div>
            <br />
            <div className="flex-col flex items-center justify-center space-y-3">
              <p className="text-lg">
                <span className="text-[#d83616]">
                  <a
                    href="https://scholar.google.com/citations?user=KapV5VIAAAAJ&hl=en"
                    target="_blank"
                  >
                    Suvi Saarikallio <br />
                  </a>
                </span>
                <span className="text-gray-500">University of Jyväskylä </span>
              </p>
              <div class="avatar">
                <img
                  class="myImg"
                  src={Suvi_Saarikallio}
                  style={{ width: 250 }}
                  onClick={(event) => showModal(event, Suvi_Saarikallio)}
                />
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className="text-xl font-bold">Music and Culture</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="flex md:flex-row flex-col flex-wrap gap-x-10 gap-y-5 md:gap-x-32 p-5">
            <div className="flex-col flex items-center justify-center space-y-3">
              <p className="text-lg">
                <span className="text-[#d83616]">
                  <a href="https://www.norijacoby.com/" target="_blank">
                    {" "}
                    Nori Jacoby <br />
                  </a>
                </span>
                <span className="text-gray-500">
                  Max Planck Institute{" "}
                </span>{" "}
                <br />
                <span className="text-gray-500">
                  {" "}
                  for Empirical Aesthetics{" "}
                </span>
              </p>
              <div class="avatar">
                <img
                  class="myImg"
                  src={Nori_Jacoby}
                  style={{ width: 250 }}
                  onClick={(event) => showModal(event, Nori_Jacoby)}
                />
              </div>
            </div>
            <br />
            <div className="flex-col flex items-center justify-center space-y-3">
              <p className="text-lg">
                <span className="text-[#d83616]">
                  <a href="https://tuomaseerola.github" target="_blank">
                    Tuomas Eeorla <br />
                  </a>
                </span>
                <span className="text-gray-500">Durham University </span>
              </p>
              <div class="avatar">
                <img
                  class="myImg"
                  src={Tuomas_Eerola}
                  style={{ width: 250 }}
                  onClick={(event) => showModal(event, Tuomas_Eerola)}
                />
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className="text-xl font-bold">Music Perception</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="flex md:flex-row flex-col flex-wrap gap-x-10 gap-y-5 md:gap-x-32 p-5">
            <div className="flex-col flex items-center justify-center space-y-3">
              <p className="text-lg">
                <span className="text-[#d83616]">
                  <a
                    href="https://webspace.science.uu.nl/~fleis102/"
                    target="_blank"
                  >
                    {" "}
                    Anja Volk <br />
                  </a>
                </span>
                <span className="text-gray-500">Utrecht University </span>
              </p>
              <div class="avatar">
                <img
                  class="myImg"
                  src={Anja_Volk}
                  style={{ width: 250 }}
                  onClick={(event) => showModal(event, Anja_Volk)}
                />
              </div>
            </div>
            <br />
            <div className="flex-col flex items-center justify-center space-y-3">
              <p className="text-lg">
                <span className="text-[#d83616]">
                  <a
                    href="https://scholar.google.fi/citations?user=L0c3kWEAAAAJ&hl=th/"
                    target="_blank"
                  >
                    Petri Toiviainen <br />
                  </a>
                </span>
                <span className="text-gray-500">University of Jyväskylä </span>
              </p>
              <div class="avatar">
                <img
                  class="myImg"
                  src={Petri_Toiviainen}
                  style={{ width: 250 }}
                  onClick={(event) => showModal(event, Petri_Toiviainen)}
                />
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className="text-xl font-bold">Music and Gestures</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="flex md:flex-row flex-col flex-wrap gap-x-10 gap-y-5 md:gap-x-32 p-5">
            <div className="flex-col flex items-center justify-center space-y-3">
              <p className="text-lg">
                <span className="text-[#d83616]">
                  <a
                    href="https://scholar.google.com/citations?hl=en&user=3Z6wUYIAAAAJ"
                    target="_blank"
                  >
                    {" "}
                    Martin Clayton <br />
                  </a>
                </span>
                <span className="text-gray-500">Durham University </span>
              </p>
              <div class="avatar">
                <img
                  class="myImg"
                  src={Martin_Clayton}
                  style={{ width: 250 }}
                  onClick={(event) => showModal(event, Martin_Clayton)}
                />
              </div>
            </div>
            <br />
            <div className="flex-col flex items-center justify-center space-y-3">
              <p className="text-lg">
                <span className="text-[#d83616]">
                  <a
                    href="https://scholar.google.com/citations?user=ati0WrYAAAAJ&hl=en/"
                    target="_blank"
                  >
                    Marcelo Wanderley <br />
                  </a>
                </span>
                <span className="text-gray-500">Mc Gill University </span>
              </p>
              <div class="avatar">
                <img
                  class="myImg"
                  src={Marcelo_Wanderley}
                  style={{ width: 250 }}
                  onClick={(event) => showModal(event, Marcelo_Wanderley)}
                />
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className="text-xl font-bold">Music and Neuroscience</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="flex md:flex-row flex-col flex-wrap gap-x-10 gap-y-5 md:gap-x-32 p-5">
            <div className="flex-col flex items-center justify-center space-y-3">
              <p className="text-lg">
                <span className="text-[#d83616]">
                  <a href="https://ccrma.stanford.edu/~blairbo" target="_blank">
                    {" "}
                    Blair Kaneshiro <br />
                  </a>
                </span>
                <span className="text-gray-500">Stanford University </span>
              </p>
              <div class="avatar">
                <img
                  class="myImg"
                  src={Blair_Kaneshiro}
                  style={{width: 250}}
                  onClick={(event) => showModal(event, Blair_Kaneshiro)}
                />
              </div>
            </div>
            <br />
            <div className="flex-col flex items-center justify-center space-y-3">
              <p className="text-lg">
                <span className="text-[#d83616]">
                  <a
                    href="https://scholar.google.com/citations?user=6AOv3DIAAAAJ&hl=en/"
                    target="_blank"
                  >
                    Peter Keller <br />
                  </a>
                </span>
                <span className="text-gray-500">Aarhus University </span>
              </p>
              <div class="avatar">
                <img
                  class="myImg"
                  src={Peter_Keller}
                  style={{width: 250}}
                  onClick={(event) => showModal(event, Peter_Keller)}
                />
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p className="text-xl font-bold">Music Education & Technology</p> <br />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="flex-col flex items-center justify-center space-y-3">
            <div class="avatar">
              <img
                class="myImg"
                src={RadhikaG_MaheshK}
                style={{ width: 250 }}
                onClick={(event) => showModal(event, RadhikaG_MaheshK)}
              />
            </div>
          </div>
        </div>
        <br/>
        <br/>
        
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
        <h1 className="text-xl font-bold font-size: 50px">Sponsor</h1>
        </div>

         <div className="flex-col flex items-center justify-center space-y-3">
            <div class="avatar">
                <a href="https://www.usa.twinhealth.com/" target="_blank">
              <img
                src={twin_health}
                style={{ width: 250 }}
              />
              </a>
            </div>
          </div>
        <p className="text-xl font-bold">Schedule</p>
        <p className="text-lg">
          All the talks will take place between 9:30am - 5:00pm IST and can be
          attended virtually. The speakers who will be present physically will
          also present via an online platform. Each talk will last for 40
          minutes followed by a 20 minute Q&A after each session. However, we
          encourage attendees to attend physically as this would give you a
          chance to interact with the physical speakers during coffee breaks and
          lunch. At the end of the workshop we hope to have an informal get
          together to ring in ISMIR 2022! We look forward to seeing you there!
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="flex md:flex-row flex-col flex-wrap gap-x-10 gap-y-10 md:gap-x-32 p-5">
            <div className="flex-col flex items-center justify-center space-y-3">
              <p className="text-lg">
                <span className="text-gray-500">Day-1 </span>
              </p>
              <div class="avatar">
                <img
                  class="myImg"
                  src={day_1}
                  style={{ height: 450, width: 350 }}
                  onClick={(event) => showModal(event, day_1)}
                />
              </div>
            </div>
            <br />
            <br />
            <div className="flex-col flex items-center justify-center space-y-3">
              <p className="text-lg">
                <span className="text-gray-500">Day-2 </span>
              </p>
              <div class="avatar">
                <img
                  class="myImg"
                  src={day_2}
                  style={{ height: 450, width: 350 }}
                  onClick={(event) => showModal(event, day_2)}
                />
              </div>
            </div>
          </div>
        </div>

      <p className="text-xl font-bold">Registration</p>
        <p className="text-lg">
          The registration fee for the workshop are as follows:
        </p>
        {/* Will contain table */}
        <div className="overflow-x-scroll">
          <table className="table w-full">
            <tbody>
              <tr className="">
                <th className="bg-gray-400" >CATEGORY</th>
                <th className="bg-gray-400" colSpan={2}>
                  Prices in INR, exclusive of 18% GST
                </th>
                {/* <td bgcolor="#f2f3f4" rowspan="27" width="0.1"></td> */}
                <th className="bg-gray-400" colSpan={2}>
                  Prices in INR, inclusive of 18% GST
                </th>
              </tr>
              <tr className="">
                <th className="bg-gray-300" rowSpan={2} />
                <th className="bg-gray-300">Early Bird</th>
                <th className="bg-gray-300">Regular</th>
                {/* <th className="bg-gray-300">On-site</th> */}
                <th className="bg-gray-300">Early Bird</th>
                <th className="bg-gray-300">Regular</th>
                {/* <th className="bg-gray-300">On-site</th> */}
              </tr>
              <tr className="">
                <th className="bg-gray-300">Until Aug 31</th>
                <th className="bg-gray-300">Sep 1 - Nov 26</th>
                {/* <th className="bg-gray-300">Dec 02 - 03</th> */}
                <th className="bg-gray-300">Until Aug 31</th>
                <th className="bg-gray-300">Sep 1 - Nov 26</th>
                {/* <th className="bg-gray-300">Dec 02 - 03</th> */}
              </tr>
              <tr className="">
                <td className="bg-white">Student (In-person or virtual)</td>
                <td className="bg-white">₹1,000</td>
                <td className="bg-white">₹1,000</td>
                {/* <td className="bg-white">₹1,000</td> */}
                <td className="bg-white">₹1,180</td>
                <td className="bg-white">₹1,180</td>
                {/* <td className="bg-white">₹1,180</td> */}
              </tr>
              <tr className="">
                <td className="bg-white">Full (In-person or virtual)</td>
                <td className="bg-white">₹2,200</td>
                <td className="bg-white">₹2,200</td>
                {/* <td className="bg-white">₹2,200</td> */}
                <td className="bg-white">₹2,596</td>
                <td className="bg-white">₹2,596</td>
                {/* <td className="bg-white">₹2,596</td> */}
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-lg">
          The registration fee for the workshop is the same for in-person or
          virtual attendance at the workshop. The convenient way to register for
          the MMMT workshop is to select it as an add-on during ISMIR 2022
          registration. This is the recommended way to register for the
          workshop.
        </p>
        <p className="text-lg">
          If you wish to register only for the MMMT workshop (and not ISMIR
          2022), you would be able to do it through the link below:
        </p>
        {/* Will contain button */}
        <button class="btn btn-md  btn-outline text-[#d83616]">
          <a
            href="https://www.townscript.com/e/mmmt-workshop-register"
            target="_blank"
          >
            Register for MMMT
          </a>
        </button>
        <p className="text-lg font-bold">General Terms & Conditions:</p>
        <ul className="text-lg list-disc list-inside">
          <li>
            By registering to this satellite event, you agree to abide by the
            <span className="text-[#d83616]">
              <Link to="/codeofconduct"> ISMIR 2022 Code of Conduct</Link>
            </span>
          </li>
          <li>
            All prices mentioned above are quoted in Indian Rupee (INR). Goods
            and Services Tax (GST) of 18% is applicable on the fees (as
            illustrated above)
          </li>
          <li>
            All deadlines mentioned above are in AoE time zone (UTC-12:00,
            IST-17:30).
          </li>
          <li>
            Approximately, 1 USD = 79 INR, 1 EUR = 80 INR, 100 JPY = 58 INR.
            Money from your account will get deducted at the prevailing rate of
            exchange at the time of transaction and your card issuer/bank may
            charge a currency conversion fee.
          </li>
          <li>
            If you are registering under the Student category, please upload a
            copy of your student ID during registration. Please also carry it to
            the workshop if you are attending the workshop in-person, which will
            be verified at the venue while collecting your badge.
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
            Login credentials to access the virtual conference platform will be
            sent to you closer to the conference dates.
          </li>
          <li>
            While your safety is of utmost importance, organisers take no
            responsibility for loss of belongings/ valuables or damage to your
            property (at the venue or during transit).
          </li>
          <li>
            By registering you confirm that the COVID-19 protocols set by the
            organisers will be adhered by you during the workshop.
          </li>
        </ul>
        <p className="text-lg font-bold">Cancellation Policy:</p>
        <ul className="text-lg list-disc list-inside">
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
        <p className="text-lg font-bold">Enquiries:</p>
        <p className="text-lg">
          Please write to us at{" "}
          <span className="text-[#d83616]">
            <a href="mailto:vinoo.alluri@iiit.ac.in" target="_blank">
              vinoo.alluri@iiit.ac.in
            </a>
          </span>{" "}
          if you have any questions about registering and attending MMMT
          workshop.
        </p>
      </div>
    </div>
  );
};

export default Mmmt;
