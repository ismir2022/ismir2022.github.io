import React from "react";

const Stay = () => {
  return (
    <div className="space-y-5">
      <div className="space-y-3">
        <h1 className="text-[#d83616] font-bold md:text-3xl text-2xl mt-5">
          Stay
        </h1>
        <p className="text-lg">
          This page contains information to help you plan your stay at Bengaluru, India to attend ISMIR 2022. We will periodically update the
          information on accommodation, airport transfer and local transport. Please watch this space for more information.
        </p>
      </div>
      <div className="space-y-3">
        <p className="text-xl font-bold">Accommodation</p>
      </div>
        <p className="text-lg">
          We have curated a list of hotels near the conference venue below. For the convenience of participants, 
          we plan to arrange for a shuttle to/from the National Science Seminar Complex (NSSC), IISc (the conference venue) 
          and the hotels in the list below to help commute to the conference venue during the conference days. 
        </p>
       <div className=" overflow-x-scroll">
          <table className="table w-full">
            <tbody>
              <tr className="">
                <th className="bg-[#DCDEE2]">Hotel Name</th>
                <th className="bg-[#DCDEE2]">Category</th>
                <th className="bg-[#DCDEE2]">Price Range</th>
                <th className="bg-[#DCDEE2]">Distance from NSSC</th>
                <th className="bg-[#DCDEE2]">Neighborhood</th>
                <th className="bg-[#DCDEE2]">Map Link</th>
                <th className="bg-[#DCDEE2]">Website</th>
              </tr>
              <tr className="">
                <td className="bg-[#F5F7FC]">The Green Path Eco Hotel</td>
                <td className="bg-[#F5F7FC]">***</td>
                <td className="bg-[#F5F7FC]">₹</td>
                <td className="bg-[#F5F7FC]">2 km</td>
                <td className="bg-[#F5F7FC]">New BEL Road</td>
                <td className="bg-[#F5F7FC]"><span className="text-[#d83616] "><a href="https://g.page/hotel-mint-green-path?share" target="_blank">Map Link</a></span></td>
                <td className="bg-[#F5F7FC]"><span className="text-[#d83616] "><a href="https://www.google.com/travel/hotels/s/pbqJgbNFZA6ZWdqs6" target="_blank">Booking Link</a></span></td>
              </tr>
              <tr className="">
                <td className="bg-[#F5F7FC]">Citrine Hotel</td>
                <td className="bg-[#F5F7FC]">***</td>
                <td className="bg-[#F5F7FC]">₹₹</td>
                <td className="bg-[#F5F7FC]">3 km</td>
                <td className="bg-[#F5F7FC]">Seshadripuram</td>
                <td className="bg-[#F5F7FC]"><span className="text-[#d83616] "><a href="https://goo.gl/maps/w1W9VCfQfhzzqhaD6" target="_blank">Map Link</a></span></td>
                <td className="bg-[#F5F7FC]"><span className="text-[#d83616] "><a href="https://www.thecitrinehotel.com/" target="_blank">Website Link</a></span></td>
              </tr>
              <tr className="">
                <td className="bg-[#F5F7FC]">Goldfinch Hotel</td>
                <td className="bg-[#F5F7FC]">***</td>
                <td className="bg-[#F5F7FC]">₹₹</td>
                <td className="bg-[#F5F7FC]">4 km</td>
                <td className="bg-[#F5F7FC]">High Grounds</td>
                <td className="bg-[#F5F7FC]"><span className="text-[#d83616] "><a href="https://goo.gl/maps/vaqafGsTJGgrAzUj9" target="_blank">Map Link</a></span></td>
                <td className="bg-[#F5F7FC]"><span className="text-[#d83616] "><a href="https://www.goldfinchhotels.com/goldfinch-bengaluru/" target="_blank">Website Link</a></span></td>
              </tr>
              <tr className="">
                <td className="bg-[#F5F7FC]">Holiday Inn Express</td>
                <td className="bg-[#F5F7FC]">***</td>
                <td className="bg-[#F5F7FC]">₹₹</td>
                <td className="bg-[#F5F7FC]">3.5 km</td>
                <td className="bg-[#F5F7FC]">Yeshwantpur</td>
                <td className="bg-[#F5F7FC]"><span className="text-[#d83616] "><a href="https://goo.gl/maps/MXXWeAgjvU5KdnPZA" target="_blank">Map Link</a></span></td>
                <td className="bg-[#F5F7FC]"><span className="text-[#d83616] "><a href="https://www.ihg.com/holidayinnexpress/hotels/us/en/bengaluru/blrby/hoteldetail" target="_blank">Website Link</a></span></td>
              </tr>
              <tr className="">
                <td className="bg-[#F5F7FC]">Parijatha Gateway</td>
                <td className="bg-[#F5F7FC]">***</td>
                <td className="bg-[#F5F7FC]">₹₹</td>
                <td className="bg-[#F5F7FC]">3 km</td>
                <td className="bg-[#F5F7FC]">Rajajinagar</td>
                <td className="bg-[#F5F7FC]"><span className="text-[#d83616] "><a href="https://goo.gl/maps/MJWrWUARrLQGmoTT6" target="_blank">Map Link</a></span></td>
                <td className="bg-[#F5F7FC]"><span className="text-[#d83616] "><a href="http://www.parijathahotels.com/" target="_blank">Website Link</a></span></td>
              </tr>
              <tr className="">
                <td className="bg-[#F5F7FC]">Vividus Hotel</td>
                <td className="bg-[#F5F7FC]">****</td>
                <td className="bg-[#F5F7FC]">₹₹₹</td>
                <td className="bg-[#F5F7FC]">4 km</td>
                <td className="bg-[#F5F7FC]">Gandhi Nagar</td>
                <td className="bg-[#F5F7FC]"><span className="text-[#d83616] "><a href="https://g.page/vividushotels?share" target="_blank">Map Link</a></span></td>
                <td className="bg-[#F5F7FC]"><span className="text-[#d83616] "><a href="http://www.vividushotels.com/" target="_blank">Website Link</a></span></td>
              </tr>  
              <tr className="">
                <td className="bg-[#F5F7FC]">Taj Yeshwantpur</td>
                <td className="bg-[#F5F7FC]">*****</td>
                <td className="bg-[#F5F7FC]">₹₹₹₹</td>
                <td className="bg-[#F5F7FC]">4 km</td>
                <td className="bg-[#F5F7FC]">Yeshwantpur</td>
                <td className="bg-[#F5F7FC]"><span className="text-[#d83616] "><a href="https://goo.gl/maps/EFVNz7P6fftqntyHA" target="_blank">Map Link</a></span></td>
                <td className="bg-[#F5F7FC]"><span className="text-[#d83616] "><a href="https://www.tajhotels.com/en-in/taj/taj-yeshwantpur-bengaluru/" target="_blank">Website Link</a></span></td>
              </tr>  
              <tr className="">
                <td className="bg-[#F5F7FC]">The Lalit Ashok</td>
                <td className="bg-[#F5F7FC]">*****</td>
                <td className="bg-[#F5F7FC]">₹₹₹₹</td>
                <td className="bg-[#F5F7FC]">3.5 km</td>
                <td className="bg-[#F5F7FC]">Kumara Krupa</td>
                <td className="bg-[#F5F7FC]"><span className="text-[#d83616] "><a href="https://g.page/TheLaLiTBangalore?share" target="_blank">Map Link</a></span></td>
                <td className="bg-[#F5F7FC]"><span className="text-[#d83616] "><a href="https://www.thelalit.com/the-lalit-bangalore/" target="_blank">Website Link</a></span></td>
              </tr>   
              <tr className="">
                <td className="bg-[#F5F7FC]">Taj West End</td>
                <td className="bg-[#F5F7FC]">*****</td>
                <td className="bg-[#F5F7FC]">₹₹₹₹₹</td>
                <td className="bg-[#F5F7FC]">4.5 km</td>
                <td className="bg-[#F5F7FC]">High Grounds</td>
                <td className="bg-[#F5F7FC]"><span className="text-[#d83616] "><a href="https://goo.gl/maps/LxFmjxxPmmRFJdH2A" target="_blank">Map Link</a></span></td>
                <td className="bg-[#F5F7FC]"><span className="text-[#d83616] "><a href="https://www.tajhotels.com/en-in/taj/taj-west-end-bengaluru" target="_blank">Website Link</a></span></td>
              </tr>
              <tr className="">
                <td className="bg-[#F5F7FC]">ITC Windsor</td>
                <td className="bg-[#F5F7FC]">*****</td>
                <td className="bg-[#F5F7FC]">₹₹₹₹₹</td>
                <td className="bg-[#F5F7FC]">3.5 km</td>
                <td className="bg-[#F5F7FC]">Sankey Road</td>
                <td className="bg-[#F5F7FC]"><span className="text-[#d83616] "><a href="https://g.page/ITC-Windsor?share" target="_blank">Map Link</a></span></td>
                <td className="bg-[#F5F7FC]"><span className="text-[#d83616] "><a href="https://www.itchotels.com/in/en/itcwindsor-bengaluru" target="_blank">Website Link</a></span></td>
              </tr>       
              <tr className="">
                <td className="bg-[#F5F7FC]">Sheraton Grand Bangalore Hotel at Brigade Gateway</td>
                <td className="bg-[#F5F7FC]">*****</td>
                <td className="bg-[#F5F7FC]">₹₹₹₹₹</td>
                <td className="bg-[#F5F7FC]">3 km</td>
                <td className="bg-[#F5F7FC]">Malleswaram</td>
                <td className="bg-[#F5F7FC]"><span className="text-[#d83616] "><a href="https://g.page/sheratongrandbangalore?share" target="_blank">Map Link</a></span></td>
                <td className="bg-[#F5F7FC]"><span className="text-[#d83616] "><a href="https://www.marriott.com/en-us/hotels/blrgs-sheraton-grand-bangalore-hotel-at-brigade-gateway/overview/" target="_blank">Website Link</a></span></td>
              </tr>
            </tbody>
          </table>
       </div>
       <p className="text-lg font-bold">Legend:</p>
        <ul className="list-disc text-lg list-inside">
          <li>₹: &lt;₹3500 per night</li>
          <li>₹₹: &lt;₹6000 per night</li>
          <li>₹₹₹: ₹6000 - ₹10000 per night</li>
          <li>₹₹₹₹: ₹10000 - ₹15000 per night</li>
          <li>₹₹₹₹₹: &gt;₹15000 per night</li>
         </ul>
    </div>
  );
};

export default Stay;
