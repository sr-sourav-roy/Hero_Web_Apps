import React, { Suspense } from "react";
import App from "./App";

const Apps = ({ data }) => {
  return (
    <div className="mt-5 lg:mt-10">
      <h1 className="text-center text-2xl lg:text-4xl font-semibold">
        Trending Apps
      </h1>
      <small className="flex justify-center text-center mt-2 text-gray-400">
        Explore All Trending Apps on the Market developed by us
      </small>

      <Suspense fallback={<span>Looding..........?</span>}>
        <div className="mt-8 lg:mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 lg:gap-10 p-3 lg:p-0">
          {data.map((singleData) => (
            <App key={singleData.id} singleData={singleData}></App>
          ))}
        </div>
      </Suspense>
      <div className="flex justify-center items-center mt-8">
        <button className="btn border-[#9F62F2] text-[#9F62F2] hover:bg-[#9F62F2] hover:text-white p-2 items-center px-10">
          👏 Show All
        </button>
      </div>
    </div>
  );
};

export default Apps;
