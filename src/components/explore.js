import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const LBD = () => {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-[#d83616] font-bold md:text-3xl text-2xl mt-5">
          Explore
        </h1>
      </div>
      <div className="space-y-3">
        <p className="text-lg">
          <strong>Bengaluru (formerly, Bangalore)</strong>, the third largest
          city in India is located in the south of India and the capital of the
          state of Karnataka. It is also known as the "Silicon Valley of India"
          because of its role as the nation's leading information technology
          exporter. Located at an elevation of over 3,000 feet (914.4 m) above
          sea level, Bangalore is known for its pleasant climate throughout the
          year. The city is amongst the top ten preferred entrepreneurial
          locations in the world.
        </p>
        <p className="text-lg">
          Bengaluru is a city of salubrious climate, and always bubbling with
          life and energy, representing a potpourri of people and culture. A
          cosmopolitan city that is home to over 10 million people from across
          the country and the world, it has earned many names such as the{" "}
          <strong>
            Silicon Valley of India, Pub Capital of India, Air-Conditioned City, </strong>
            and the <strong>Garden City of India.</strong>{" "}
          Bangalore was known as Pensioners' Paradise, prior to the IT
          revolution. Now, the city is a wonderful blend of the past and present, while 
          it takes a pivotal role in building the future of our world!
        </p>
        <p className="font-bold text-2xl">Around the Venue</p>
        <p className="text-lg">
          Here is a curated list of places around the venue to hangout, get a drink and
          socialize. 
        </p>
        <ul className="list-disc text-lg list-inside">
          <li>
            <span className="text-[#d83616]">
              <a href="https://g.page/ChapterOnebarmaiin?share" target="_blank">
                CHAPTER ONE Bar | Maiin
              </a>
            </span>
            {" "}, New BEL Road
          </li>
          <li>
            <span className="text-[#d83616]">
              <a href="https://goo.gl/maps/q16x1cdXuQDJUoGp8" target="_blank">
                Geometry Gastropub
              </a>
            </span>
            , New BEL Road
          </li>
          <li>
            <span className="text-[#d83616]">
              <a href="https://goo.gl/maps/ANaBJaACfvgvLBzo9" target="_blank">
                Hammered
              </a>
            </span>
            , New BEL Road
          </li>
          <li>
            <span className="text-[#d83616]">
              <a href="https://goo.gl/maps/QecpvYyAGxryVZ6c6" target="_blank">
                Gillys Restobar
              </a>
            </span>
            , New BEL Road
          </li>
          <li>
            <span className="text-[#d83616]">
              <a href="https://goo.gl/maps/rcxAJKV32cUDwvHL8" target="_blank">
                Plan B
              </a>
            </span>
            , New BEL Road
          </li>
        </ul>
        <p className="font-bold text-2xl">Top places to visit in the city</p>
        <p className="font-bold text-xl">Vidhana Soudha</p>
        <div>
          <a href="http://upload.wikimedia.org/wikipedia/commons/d/d2/Vidhana_Soudha_sunset.jpg">
            <StaticImage
              src="http://upload.wikimedia.org/wikipedia/commons/d/d2/Vidhana_Soudha_sunset.jpg"
              alt="iitb"
              objectFit="contain"
              placeholder="blurred"
              width={500}
            />
          </a>
        </div>
        <p className="text-lg">
          Built in 1954, Vidhana Soudha is a landmark of the city and is the seat
          of the Karnataka State Government. This enormous building is a massive
          example of neo-Dravidian architecture, with four domes on its four
          corners - it’s stunningly illuminated at night.{" "}
        </p>
        <p className="font-bold text-xl">Lalbagh Botanical Garden</p>
        <div>
          <a
            href="http://upload.wikimedia.org/wikipedia/commons/2/25/Funchal_Botanical_garden_IMG_1806.JPG"
            target="_blank"
          >
            <StaticImage
              src="http://upload.wikimedia.org/wikipedia/commons/2/25/Funchal_Botanical_garden_IMG_1806.JPG"
              alt="iitb"
              objectFit="contain"
              placeholder="blurred"
              width={500}
            />
          </a>
        </div>
        <p className="text-lg">
          This enchanting garden is set on 240 acres with a rare collection of
          tropical and sub-tropical trees and plants, and a majestic glass house
          built on the lines of London's Crystal Palace. The garden was made in
          the 17th century -- started by Hyder Ali, and later completed by his
          son Tipu Sultan. It derives its name "Lal Bagh" from a collection of
          red roses that bloom throughout the year there. Lalbagh takes on a
          festive look during India's Independence Day and Republic Day, with a
          captivating show of over 200 varieties of flowers. The show also
          features an exhibition of hybrid vegetables.
        </p>
        <p className="font-bold text-xl">Cubbon Park </p>
        <div>
          <a
            href="http://1.bp.blogspot.com/-tCrqV-snqd8/VHAcYn3jS7I/AAAAAAAACgc/_q_fTtcDWfc/s1600/cubbon-park-bangalore-flowers-tree-mist-shiju-morning-beautiful-fresh.jpg"
            target="_blank"
          >
            <StaticImage
              src="http://1.bp.blogspot.com/-tCrqV-snqd8/VHAcYn3jS7I/AAAAAAAACgc/_q_fTtcDWfc/s1600/cubbon-park-bangalore-flowers-tree-mist-shiju-morning-beautiful-fresh.jpg"
              alt="iitb"
              objectFit="contain"
              placeholder="blurred"
              width={500}
            />
          </a>
        </div>
        <p className="text-lg">
          Located in the heart of the city, set on a 300-acre area, Cubbon Park
          is a great place to laze around in the lush green paradise. It has a
          treasure of different species of exotic plants. The park was named
          after the erstwhile Commissioner of Bengaluru, Sir Mark Cubbon. Many
          ornamental and flowering trees, both exotic and indigenous, can be
          found in the park. It's a popular place for walkers, joggers, and
          nature lovers. Bal Bhavan in the park is a great place for the kids to
          enjoy. An aquarium is also located in Cubbon Park, with many varieties
          of exotic and ornamental fish.
        </p>
        <p className="font-bold text-xl">Bangalore Palace </p>
        <div>
          <a
            href="https://upload.wikimedia.org/wikipedia/commons/8/8f/Bangalore_Mysore_Maharaja_Palace.jpg"
            target="_blank"
          >
            <StaticImage
              src="https://upload.wikimedia.org/wikipedia/commons/8/8f/Bangalore_Mysore_Maharaja_Palace.jpg"
              alt="iitb"
              objectFit="contain"
              placeholder="blurred"
              width={500}
            />
          </a>
        </div>
        <p className="text-lg">
          Built in 1887 by Chamaraja Wodeyar, Bangalore Palace is inspired by
          England's Windsor Castle. This beautiful palace has Tudor style
          architecture, with fortified towers, arches, green lawns, and elegant
          woodcarvings in its interiors.
        </p>
        <p className="font-bold text-xl">Tipu Sultan's Palace and Fort </p>
        <div>
          <a
            href="http://upload.wikimedia.org/wikipedia/commons/9/90/Double_paisa_of_Tipu_Sultan.jpg"
            target="_blank"
          >
            <StaticImage
              src="http://upload.wikimedia.org/wikipedia/commons/9/90/Double_paisa_of_Tipu_Sultan.jpg"
              alt="iitb"
              objectFit="contain"
              placeholder="blurred"
              width={500}
            />
          </a>
        </div>
        <p className="text-lg">
          Tipu Sultan's Palace and Fort was originally built by Chikkadeva Raya
          in mud. Later, Hyder Ali started reconstruction in Indo-Islamic
          architecture. This was completed by his son, Tipu Sultan, in 1791.
        </p>
        <p className="font-bold text-xl">Sankey Lake</p>
        <div>
          <a
            href="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Sankey_Tank.jpg/2880px-Sankey_Tank.jpg"
            target="_blank"
          >
            <StaticImage
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Sankey_Tank.jpg/2880px-Sankey_Tank.jpg"
              alt="iitb"
              objectFit="contain"
              placeholder="blurred"
              width={500}
            />
          </a>
        </div>
        <p className="text-lg">
          The beautiful Sankey Lake is spread over an area of 37 acres and was
          built in 1882. It has a park and a walking/jogging track around it.
          Less than a km from the venue (IISc), it might be a good short visit
          for a morning stroll/jog or an evening walk.
        </p>
        <p className="font-bold text-xl">Jawaharlal Nehru Planetarium</p>
        <div>
          <a
            href="http://image3.mouthshut.com/images/ImagesR/Temp/925079845-1228147-1_s.jpg"
            target="_blank"
          >
            <StaticImage
              src="http://image3.mouthshut.com/images/ImagesR/Temp/925079845-1228147-1_s.jpg"
              alt="iitb"
              objectFit="contain"
              placeholder="blurred"
              width={500}
            />
          </a>
        </div>
        <p className="text-lg">
          Jawaharlal Nehru Planetarium was founded in 1989, with an aim of
          spreading awareness among students and the public about astronomy. Two
          shows are held here daily except on Mondays.
        </p>
        <p className="font-bold text-xl">Other Attractions</p>
        <p className="text-lg">
          Apart from the above, Gandhi Bhavan exhibiting photos of Mahatma
          Gandhi’s life, several religious places, as well as great shopping
          malls, world class hospital facilities, and educational institutions
          attract people to this beautiful city.
        </p>
        <p className="font-bold text-2xl">Day Trips from Bengaluru</p>
        <p className="text-lg">
          For those who have a full day to spare, we suggest the following day
          trips around Bengaluru: 
        </p>
        <ul className="list-disc text-lg list-inside">
          <li>
            <span className="text-[#d83616]">
              <a
                href="https://en.wikipedia.org/wiki/Belur,_Karnataka"
                target="_blank"
              >
                Belur
              </a>
            </span>
            {" "}-{" "}
            <span className="text-[#d83616]">
              <a href="https://en.wikipedia.org/wiki/Halebidu" target="_blank">
                Halebidu
              </a>
            </span>
            {" "}-{" "}
            <span className="text-[#d83616]">
              <a
                href="https://en.wikipedia.org/wiki/Shravanabelagola"
                target="_blank"
              >
                Shravanabelagola
              </a>
            </span>
           {" "}(long day trip!)
          </li>
          <li>
            <span className="text-[#d83616]">
              <a
                href="https://en.wikipedia.org/wiki/Chitradurga_Fort"
                target="_blank"
              >
                Chitradurga Fort
              </a>
            </span>
            {" "}(long day trip!){" "}
          </li>
          <li>
            <span className="text-[#d83616]">
              <a
                href="https://en.wikipedia.org/wiki/Nandi_Hills,_India"
                target="_blank"
              >
                Nandi Hills
              </a>
            </span> 
            
          </li>
          <li>
            <span className="text-[#d83616]">
              <a href="http://bannerghattabiologicalpark.org/" target="_blank">
                Bannerghatta National Park
              </a>
            </span>
          </li>
        </ul>
        <p className="font-bold text-2xl">Weekend/Two-day Trips from Bengaluru</p>

        <ul className="list-disc text-lg list-inside">
          <li>
            <span className="text-[#d83616]">
              <a href="https://en.wikipedia.org/wiki/Mysore" target="_blank">
                Mysore
              </a>
            </span>
            {" "}(formerly, Mysore)
          </li>
          <li>
            <span className="text-[#d83616]">
              <a href="https://bandipurtigerreserve.in/" target="_blank">
                Bandipur Tiger Reserve and National Park
              </a>
            </span>
          </li>
        </ul>
      </div>
      <p className="font-bold text-2xl">Travel/Tourism Enquiries</p>
        <p className="text-lg">
          For customized tours during your visit, please contact our tourism partner{" "}
          <span className="text-[#d83616]">
              <a href="https://www.timtimholidays.com/" target="_blank">
                Tim-Tim Holidays
              </a>
            </span>
          . Tim-Tim Holidays Pvt. Ltd. (R) is driven by a team of qualified professionals, researchers, musicians and engineers 
          who have an intense passion towards travel and tourism. The company has collaborated with globally popular tour operators. 
          They specialize in Bengaluru city tours, Adventure, Wildlife, Road Trips, Classical Music Tours, Classical Dance Tours, Yoga & Wellness Retreats and more. 
        </p>
        <p className="text-lg">
          Please contact them by e-mail at {" "}
          <span className="text-[#d83616]">
              <a href="mailto:consult.timtim@gmail.com" target="_blank">
                consult.timtim@gmail.com
              </a>
            </span>
        {" "} or by phone on +91 974 174 0014. 
        </p>
 
    </div>
  );
};

export default LBD;
