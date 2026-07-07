import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoreApp, removeFromStore } from "../../Utility/AdToBD";
import Instalations from "./Instalations";

const Installations = () => {
  const [installation, setInstallation] = useState([]);
  const [sort, setSort] = useState("Default");
  const data = useLoaderData();

  // load installed apps
  const loadInstalledApps = () => {
    const storeAppData = getStoreApp();
    const convertedStortApps = storeAppData.map((id) => parseInt(id));
    const myInstallations = data.filter((app) =>
      convertedStortApps.includes(app.id),
    );
    setInstallation(myInstallations);
  };
  useEffect(() => {
    loadInstalledApps();
  }, [data]);

  const handleUninstall = (id) => {
    removeFromStore(id); // remove from localStorage
    loadInstalledApps(); // refresh the list
  };

  // Fixed Sort Function
  const handleSort = (type) => {
    setSort(type);

    let sortedApps = [...installation];

    if (type === "rating") {
      sortedApps.sort((a, b) => b.ratingAvg - a.ratingAvg); // High to Low
    } else if (type === "downloads") {
      sortedApps.sort((a, b) => b.downloads - a.downloads); // High to Low
    }

    setInstallation(sortedApps);
  };

  return (
    <div className="mt-10">
      <title>installtion</title>
      <h1 className="text-3xl font-bold text-center">Your Installed Apps</h1>
      <small className="flex justify-center text-center mt-2 text-gray-500">
        Explore All Trending Apps on the Market developed by us
      </small>

      {/* Header + Sort Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-4">
        <h5 className="text-lg font-medium">
          {installation.length} Apps Found
        </h5>

        <details className="dropdown">
          <summary className="btn m-1 px-6">Sort by : {sort}</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li onClick={() => handleSort("rating")}>
              <a>Rating (High to Low)</a>
            </li>
            <li onClick={() => handleSort("downloads")}>
              <a>Downloads (High to Low)</a>
            </li>
            <li
              onClick={() => {
                setSort("Default");
                // Reset to original order
                const original = data.filter((app) =>
                  getStoreApp()
                    .map((id) => parseInt(id))
                    .includes(app.id),
                );
                setInstallation(original);
              }}
            >
              <a>Default</a>
            </li>
          </ul>
        </details>
      </div>

      {/* Apps List */}
      <div>
        {installation.map((appData) => (
          <Instalations
            key={appData.id}
            appData={appData}
            onUninstall={handleUninstall}
          />
        ))}
      </div>
    </div>
  );
};

export default Installations;
