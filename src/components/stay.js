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
        <div className=" overflow-x-scroll">
          <table className="table w-full">
            <tbody>
              <tr className="">
                <th className="bg-gray-300">Hotel Name</th>
                <th className="bg-gray-300">Category</th>
                <th className="bg-gray-300">Price Range</th>
                <th className="bg-gray-300">Distance from NSSC</th>
                <th className="bg-gray-300">Neighborhood</th>
                <th className="bg-gray-300">Map Link</th>
                <th className="bg-gray-300">Neighborhood</th>
                <th className="bg-gray-300">Website</th>
              </tr>
              <tr className="">
                <td className="bg-white">Citrine Hotel</td>
                <td className="bg-white">***</td>
                <td className="bg-white">₹</td>
                <td className="bg-white">3 km</td>
                <td className="bg-white">Seshadripuram</td>
                <td className="bg-white"><span className="text-[#d83616] "><a href="https://goo.gl/maps/w1W9VCfQfhzzqhaD6" target="_blank">Map Link</a></span></td>
                <td className="bg-white"><span className="text-[#d83616] "><a href="https://www.thecitrinehotel.com/" target="_blank">Website Link</a></span></td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
  );
};

export default Stay;
