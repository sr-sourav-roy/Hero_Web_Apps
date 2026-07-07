import React, { Suspense, useState } from "react";
import { useLoaderData } from "react-router";
import App02 from "./App02";

const Apps02 = () => {
  const data2 = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Filter apps based on search
  const filteredApps = data2.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Show all titles when clicking on search (suggestions)
  const suggestions = searchTerm ? filteredApps : data2; // যদি কিছু না টাইপ করা হয় তাহলে সব দেখাবে

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSuggestionClick = (title) => {
    setSearchTerm(title);
    setShowSuggestions(false);
  };

  return (
    <div>
      <title>Apps</title>
      <h1 className="text-center text-2xl lg:text-4xl font-semibold">
        Our All Applications
      </h1>
      <small className="flex justify-center text-center mt-2 text-gray-400">
        Explore All Apps on the Market developed by us. We code for Millions
      </small>

      {/* Search Bar with Suggestions */}
      <div className="lg:flex justify-between items-center mt-10 relative">
        <h1 className="text-2xl font-semibold p-2">
          Apps Found ({filteredApps.length})
        </h1>

        <div className="relative w-80 mt-4 pl-2">
          <label className="input input-bordered lg:flex items-center gap-2 lg:w-full">
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
            <input
              type="search"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchChange}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              className="grow"
            />
          </label>

          {/* Suggestions Dropdown */}
          {showSuggestions && (
            <ul className="absolute mt-2 w-full bg-white border border-gray-300 rounded-xl shadow-lg z-50 max-h-80 overflow-auto">
              {suggestions.length > 0 ? (
                suggestions.map((app) => (
                  <li
                    key={app.id}
                    className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b last:border-none"
                    onMouseDown={() => handleSuggestionClick(app.title)}
                  >
                    {app.title}
                  </li>
                ))
              ) : (
                <li className="px-4 py-3 text-gray-500">No suggestions</li>
              )}
            </ul>
          )}
        </div>
      </div>

      <Suspense fallback={<span>Loading......!</span>}>
        <div className="mt-8 lg:mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 lg:gap-10 p-3 lg:p-0">
          {filteredApps.length > 0 ? (
            filteredApps.map((appData) => (
              <App02 key={appData.id} appData={appData} />
            ))
          ) : (
            /* Error Message */
            <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
              <h3 className="text-3xl font-semibold text-red-500 mb-3">
                No apps found!
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                We couldn't find any app matching{" "}
                <strong>"{searchTerm}"</strong>
              </p>
              <button
                onClick={() => setSearchTerm("")}
                className="btn btn-primary px-10 py-3 text-lg"
              >
                Go Back to All Apps
              </button>
            </div>
          )}
        </div>
      </Suspense>
    </div>
  );
};

export default Apps02;
