import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Keynote = () => {
  return (
    <div className="space-y-20">
      <h1 className="text-[#d83616] font-bold md:text-5xl text-3xl mt-5">
        Keynote Speakers
      </h1>
      <div className="md:grid md:grid-col-4 md:space-x-12 md:space-y-0 space-y-5">
        <div className="flex justify-center md:col-start-1 md:col-end-2 md:place-self-center ">
          <StaticImage
            src="../images/TMKrishna.jpg"
            alt="TMKRISHNA"
            objectFit="contain"
            placeholder="blurred"
            height={200}
            width={200}
          />
        </div>
        <div className="col-start-3 col-end-5 space-y-5">
          <p className="text-[#d83616] text-3xl font-bold">
            <span>
              <a href="https://www.tmkrishna.com/" target="_blank">
                TM Krishna
              </a>
            </span>
          </p>
          <p className="text-2xl font-bold italic">
            Karnatik Musician, Author & Activist
          </p>
          <p className="text-xl md:text-2xl text-left">
            TM Krishna is one of the pre-eminent vocalists in the rigorous
            Karnatik tradition of India’s classical music. As a public
            intellectual, Krishna speaks and writes about issues affecting the
            human condition and about matters cultural. He is the Founder
            Trustee of Sumanasa Foundation, established in 2005, with the
            objective of engaging with the arts and the community. Sumanasa
            enables communities to develop culturally vibrant spaces and also
            creates platforms to present for artists and art forms from
            marginalized backgrounds. It helps create different avenues for
            artists to engage in social dialogue, and in building appreciation
            and interest in the arts. In 2016, Krishna received the prestigious
            Ramon Magsaysay Award in recognition of ‘his forceful commitment as
            artist and advocate to art’s power to heal India’s deep social
            divisions’. His path-breaking book A Southern Music – The Karnatik
            Story, published by HarperCollins in 2013 was a first-of-its-kind
            philosophical, aesthetic and socio-political exploration of Karnatik
            music. He has been part of inspiring musical productions and
            collaborations that are unique and unusual aesthetic conversations
            between art forms and communities across social spectrums.
          </p>
          <p className="text-xl md:text-2xl text-left">
            The title and an abstract of the keynote will be added soon.
          </p>
        </div>
      </div>
      <div className="md:grid md:grid-col-4 md:space-x-12 md:space-y-0 space-y-5">
        <div className="flex justify-center md:col-start-1 md:col-end-2 md:place-self-center">
          <StaticImage
            src="../images/richa_singh.jpg"
            height={200}
            width={200}
            placeholder="blurred"
          />
        </div>
        <div className="col-start-3 col-end-5 space-y-5">
          <p className="text-[#d83616] text-3xl font-bold">
            <span>
              <a href="http://home.iitj.ac.in/~richa/" target="_blank">
                Richa Singh
              </a>
            </span>
          </p>
          <p className="text-2xl font-bold italic">
            Professor and Head, Dept. of Computer Science and Engineering Indian
            Institute of Technology Jodhpur
          </p>
          <p className="text-xl md:text-2xl text-left">
            Richa Singh received her Ph.D. degree in computer science from West
            Virginia University, Morgantown, USA, in 2008. She is currently a
            Professor and Head at Department of CSE, IIT-Jodhpur, and an Adjunct
            Professor with IIIT-Delhi and West Virginia University, USA. She has
            co-edited book Deep Learning in Biometrics and has delivered keynote
            talks/tutorials on deep learning, trusted AI, and domain adaptation
            in BIOSIG2021, GTC 2021, ICCV 2017, AFGR 2017, and IJCNN 2017. Her
            areas of interest are pattern recognition, machine learning, and
            biometrics. She is a Fellow of IEEE and IAPR and a Senior Member of
            ACM. She was a recipient of the Kusum and Mohandas Pai Faculty
            Research Fellowship at the IIIT-Delhi, the FAST Award by the
            Department of Science and Technology, India, and several best paper
            and best poster awards in international conferences. She has also
            served as the Program Co-Chair of IJCB2020, AFGR2019 and BTAS 2016,
            and a General Co-Chair of ISBA 2017. Currently, she is serving as a
            Program Chair of CVPR2022 and ICMI2022 and General Chair of FG2021.
            She is also the Vice President (Publications) of the IEEE Biometrics
            Council and an Associate Editor-in-Chief of Pattern Recognition, and
            Area/Associate Editor of several journals.
          </p>
          <p className="text-xl md:text-2xl text-left">
            The title and an abstract of the keynote will be added soon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Keynote;
