import React from "react";
import { Download } from "lucide-react";
import { Star } from "lucide-react";

const App = ({ singleData }) => {
  const { image, title, downloads, ratingAvg } = singleData;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img className=" lg:p-5" src={image} alt="image" />
      </figure>
      <div className="card-body">
        <h2 className="text-xl text-gray-800 ml-2 lg:ml-0">{title}</h2>
        <div className="flex justify-between ml-2 lg:ml-0">
          <div className="text-[#00D390] bg-[#F1F5E8] py-1 px-3 flex justify-between items-center gap-2 font-semibold">
            {" "}
            <Download />
            {downloads}
          </div>
          <div className="badge text-[#FF8811] bg-[#FFF0E1] p-4">
            {" "}
            <Star />
            {ratingAvg}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
