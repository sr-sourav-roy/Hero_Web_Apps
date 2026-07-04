import React from "react";
import { useParams } from "react-router";
import { useLoaderData } from "react-router";
import { GoDownload } from "react-icons/go";
import { FaRegStar } from "react-icons/fa";
import { TbFileLike } from "react-icons/tb";
import AppCharts from "./AppCharts";
import { addToStoreApp } from "../../Utility/AdToBD";

const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();
  // console.log(data);
  const singleApps = data.find((sigleApp) => sigleApp.id === appId);
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
  // console.log(ratings);
  // button setup or new commet----""
  const handleApp = (id) => {
    console.log("sourav", id);

    addToStoreApp(id);
  };

  return (
    <div className="lg:mt-15">
      {/* apps itmes */}
      <div className="card lg:card-side ">
        <figure>
          <img src={image} alt="Movie" />
        </figure>
        <div className=" ml-10">
          <h2 className="text-2xl lg:text-4xl font-bold mb-2">{title}</h2>
          <p className="">
            {" "}
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
          {/* button */}
          <button
            onClick={() => handleApp(id)}
            className="btn btn-secondary mt-3.5 mb-2"
          >
            Install Now ({size}MB)
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
        <div className="divider pl-10 lg:pl-0 w-11/12 lg:w-full "></div>
        <h2 className="text-3xl font-semibold p-2.5">Description</h2>
        <p className="p-2.5">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
