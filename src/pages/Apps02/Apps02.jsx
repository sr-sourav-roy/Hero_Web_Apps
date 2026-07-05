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
      <div className="flex justify-between items-center mt-10">
        <h1 className="text-2xl font-semibold">Apps Found ({data2.length})</h1>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
      </div>
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
