import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoreApp } from "../../Utility/AdToBD";

const Installations = () => {
  const [installation, setInstallation] = useState([]);
  const [sort, setSort] = useState("Default");
  const data = useLoaderData();

  useEffect(() => {
    const storeAppData = getStoreApp();
    const convertedStortApps = storeAppData.map((id) => parseInt(id));
    const myInstallations = data.filter((app) =>
      convertedStortApps.includes(app.id),
    );
    setInstallation(myInstallations);
  }, []);

  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold text-center">Your Installed Apps</h1>
      <small className="flex justify-center text-center mt-2 text-gray-500">
        Explore All Trending Apps on the Market developed by us
      </small>

      {/* Header + Sort Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-4">
        <h5 className="text-lg font-medium">1 Apps Found</h5>
        <details className="dropdown">
          <summary className="btn m-1 px-6">Sort by : {sort}</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li onClick={() => setSort("Rating")}>
              <a>Rating</a>
            </li>
            <li onClick={() => setSort("Downloads")}>
              <a>Downloads</a>
            </li>
          </ul>
        </details>
      </div>
      {/* details for infromantion */}
      <div>{installation.map()}</div>
    </div>
  );
};

export default Installations;
