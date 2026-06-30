import React, { Suspense } from "react";
import { useLoaderData } from "react-router";
import App02 from "./App02";

const Apps02 = () => {
  const data2 = useLoaderData();
  return (
    <div>
      <h1 className="text-center text-2xl lg:text-4xl font-semibold">
        Our All Applications
      </h1>
      <small className="flex justify-center text-center mt-2 text-gray-400">
        Explore All Apps on the Market developed by us. We code for Millions
      </small>
      <Suspense fallback={<span>Looading......!</span>}>
        <div className="mt-8 lg:mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 lg:gap-10 p-3 lg:p-0">
          {data2.map((appData) => (
            <App02 key={appData.id} appData={appData}></App02>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Apps02;
