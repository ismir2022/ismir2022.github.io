import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Keynote = () => {
  return (
    <div className="space-y-20">
      <h1 className="text-[#d83616] font-bold md:text-3xl text-2xl mt-5">
        Keynote Speakers
      </h1>
      <div className="md:grid md:grid-col-4 md:space-x-12 md:space-y-0 space-y-5">
        <div className="flex justify-center md:col-start-1 md:col-end-2 md:place-self-start ">
          <StaticImage
            src="../images/TMKrishna.jpg"
            alt="TM KRISHNA"
            objectFit="contain"
            placeholder="blurred"
            height={200}
            width={200}
          />
        </div>
        <div className="col-start-3 col-end-5 space-y-5">
          <p className="text-[#d83616] text-2xl font-bold">
            <span>
              <a href="https://www.tmkrishna.com/" target="_blank">
                TM Krishna
              </a>
            </span>
          </p>
          <p className="font-bold italic">
            Karnatik Musician, Author & Activist
          </p>
          <p className="text-xl font-bold">
           Evolution of Performance and Aesthetics in Indian Art Music
          </p>
          <p className="font-bold">
           Abstract:
          </p>
          <p className="text-lg md:text-xl text-left">
           Indian art music continues to evolve in current performance practice, while staying within the 
           framework provided by some of the immutable axiomatic concepts that define the music culture. 
           The changes that lead the evolution of the music culture are guided by practitioners and influenced 
           by the evolving socio-cultural, socio-political or performance and aesthetic considerations. 
           In this talk, we focus on the evolution of Indian art music from the perspective of performance and aesthetics, 
             highlighting some important milestones around the melodic and rhythmic 
           systems in Indian art music. Focusing on recent developments and our own influences on performance 
           practice and aesthetics, we discuss our effort and approaches to create more 
           inclusive roles in music composition and performance. We further aim to provide concrete examples 
           and formulations of the abstractions in current performance and aesthetics. We propose thoughts and ideas that 
           can help current MIR formulations and solutions to go beyond the limiting assumptions based on 
           current music performance practices and (often rigid) structures, and focus on the music abstractions 
           that are more fundamental to our understanding, appreciation and analysis of Indian art music. 
          </p>
          
          <p className="font-bold">
           Biography of the speaker:
          </p>

          <p className="text-lg md:text-xl text-left">
            TM Krishna, is one of the pre-eminent vocalists in the rigorous Karnatik tradition 
            of India's classical music. As a public intellectual, Krishna speaks and writes 
about issues affecting the human condition and about matters cultural. As a vocalist, 
  he has made path-breaking innovations in both the style and substance of his concerts. 
  His award-winning book, A Southern Music – The Karnatik Story, published by Harper Collins 
  in 2013 was a first-of-its-kind philosophical, aesthetic and socio-political exploration of 
  Karnatik music. TM Krishna has partnered  with individuals and collectives working at the 
  intersections of social change, a new politics for contemporary India, a fresh new imagining of 
  the wider universe of the Arts. In 2016, TM Krishna received the prestigious Ramon Magsaysay Award 
  in recognition of "his forceful commitment as artist and advocate to art’s power to heal India’s deep social divisions".
          </p>          

        </div>
      </div>
      <div className="md:grid md:grid-col-4 md:space-x-12 md:space-y-0 space-y-5">
        <div className="flex justify-center md:col-start-1 md:col-end-2 md:place-self-start">
          <StaticImage
            src="../images/richa_singh.jpg"
            height={200}
            width={200}
            placeholder="blurred"
          />
        </div>
        <div className="col-start-3 col-end-5 space-y-5">
          <p className="text-[#d83616] text-2xl font-bold">
            <span>
              <a href="http://home.iitj.ac.in/~richa/" target="_blank">
                Richa Singh
              </a>
            </span>
          </p>
          <p className="font-bold italic">
            Professor and Head, Dept. of Computer Science and Engineering, Indian
            Institute of Technology Jodhpur
          </p>
          
          <p className="text-xl font-bold">
           Adventures of AI: Deepfake and Bias in Audio Processing
          </p>
          <p className="font-bold">
           Abstract:
          </p>
          
          <p className="text-lg md:text-xl text-left">
            The increasing capabilities for machine learning algorithms is enabling the 
            usage of ML models for a variety of tasks including for creativity such as 
            generating new music and modifying existing music. Similar applications are 
            present in different kinds of audio signals such as voice biometrics, speaker 
            and speech recognition. However, these technologies that support creativity 
            can also be used for malicious purposes. Deepfake audios are one such technology 
            which enable flawlessly altering existing audio signals or creating new signals 
            from any given text. Audio can also be integrated with videos to provide a 
            complete multimodal experience, which can be purely synthetic and fake. 
            While there is significant research ongoing in image and video, the space of 
            detecting these anomalies in audio processing is relatively unaddressed. We 
            will discuss some of these possible adventures of machine learning in audio 
            processing and the research efforts that we are undertaking to detect them. 
            In addition, we will also discuss the bias and fairness issues in audio processing 
            where we will highlight "out of distribution" behavior of popular approaches and 
            some strategies to address them. 
          </p>

          <p className="font-bold">
           Biography of the speaker:
          </p>

          <p className="text-lg md:text-xl text-left">
            Richa Singh received her Ph.D. degree in computer science from West Virginia 
            University, Morgantown, USA, in 2008. She is currently a Professor and Head 
            at Department of CSE, IIT Jodhpur. She has co-edited the book Deep Learning 
            in Biometrics and has delivered keynote talks/tutorials on deep learning, 
              trusted AI, and domain adaptation in NVIDIA GTC 2021, BIOSIG2021, ICCV 2017, 
                AFGR 2017, and IJCNN 2017. Her areas of interest are pattern recognition, 
                  machine learning, and biometrics. She is a Fellow of IEEE, IAPR and AAIA, 
                    and a Senior Member of ACM. She was a recipient of the Kusum and Mohandas 
                    Pai Faculty Research Fellowship at the IIIT-Delhi, the FAST Award by the 
                    Department of Science and Technology, India, and several best paper and best 
                    poster awards in international conferences. She is/was served as the Program 
                    Co-Chair of CVPR2022, ICMI2022, IJCB2020, AFGR2019 and BTAS 2016, and a 
                    General Co-Chair of FG 2021 and ISBA 2017. She is also the Vice President (Publications) 
                    of the IEEE Biometrics Council and an Associate Editor-in-Chief of Pattern Recognition.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Keynote;
