import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useLoaderData } from "react-router";
import { GoDownload } from "react-icons/go";
import { FaRegStar } from "react-icons/fa";
import { TbFileLike } from "react-icons/tb";
import AppCharts from "./AppCharts";
import { addToStoreApp, getStoreApp } from "../../Utility/AdToBD";

const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();

  const singleApps = data.find((app) => app.id === appId);
  const {
    title,
    image,
    description,
    ratingAvg,
    reviews,
    downloads,
    companyName,
    size,
    ratings,
  } = singleApps;

  const [isInstalled, setIsInstalled] = useState(false);

  // Check if app is already installed
  useEffect(() => {
    const installedApps = getStoreApp();
    const alreadyInstalled = installedApps.some(
      (installedId) => parseInt(installedId) === appId,
    );
    setIsInstalled(alreadyInstalled);
  }, [appId]);

  const handleInstall = () => {
    addToStoreApp(appId);
    setIsInstalled(true); // Disable button after click
  };

  return (
    <div className="lg:mt-15">
      {/* meta dada check this number */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <meta
        name="description"
        content="This is a short description of my website"
      ></meta>
      <title>{title}</title>
      {/* apps items */}
      <div className="card lg:card-side">
        <figure>
          <img src={image} alt={title} />
        </figure>
        <div className="ml-10">
          <h2 className="text-2xl lg:text-4xl font-bold mb-2">{title}</h2>
          <p>
            <span className="text-gray-400">Developed by: </span>
            <span className="text-[#8f45f7]">{companyName}</span>
          </p>
          <div className="divider w-[300px] lg:w-[1000px]"></div>

          {/* rating items */}
          <div className="flex gap-10 lg:gap-20">
            <div>
              <GoDownload className="text-2xl text-[#00827A]" />
              <small className="text-gray-400">Downloads</small>
              <h3 className="text-xl lg:text-3xl font-bold">{downloads}</h3>
            </div>
            <div>
              <FaRegStar className="text-2xl text-[#FF8811]" />
              <small className="text-gray-400">Average Ratings</small>
              <h3 className="text-xl lg:text-3xl font-bold">{ratingAvg}</h3>
            </div>
            <div>
              <TbFileLike className="text-2xl text-[#632EE3]" />
              <small className="text-gray-400">Total Reviews</small>
              <h3 className="text-xl lg:text-3xl font-bold">{reviews}</h3>
            </div>
          </div>

          {/* Install Button */}
          <button
            onClick={handleInstall}
            disabled={isInstalled}
            className={`btn mt-3.5 mb-2 px-8 ${
              isInstalled ? "btn-success cursor-not-allowed" : "btn-secondary"
            }`}
          >
            {isInstalled ? "✓ Installed" : `Install Now (${size}MB)`}
          </button>
        </div>
      </div>

      {/* app chart ratings */}
      <div className="mt-10">
        <div className="divider pl-10 lg:pl-0 w-11/12 lg:w-full"></div>
        <AppCharts ratings={ratings}></AppCharts>
      </div>

      {/* description */}
      <div className="mt-10">
        <div className="divider pl-10 lg:pl-0 w-11/12 lg:w-full"></div>
        <h2 className="text-3xl font-semibold p-2.5">Description</h2>
        <p className="p-2.5">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
