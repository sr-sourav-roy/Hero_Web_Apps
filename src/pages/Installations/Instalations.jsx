import React from "react";
import { CiStar } from "react-icons/ci";
import { AiOutlineDownload } from "react-icons/ai";

const Instalations = ({ appData, onUninstall }) => {
  const { image, title, size, ratingAvg, downloads } = appData;

  const handleUninstall = () => {
    if (window.confirm(`Are you sure you want to uninstall ${title}?`)) {
      onUninstall(appData.id);
    }
  };

  return (
    <div className="bg-[#f6f4f4] mt-8 mb-8 p-4 md:p-6 rounded-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Left Side - App Info */}
        <div className="flex gap-4 md:gap-6 items-start sm:items-center w-full sm:w-auto">
          <img
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl flex-shrink-0 object-cover"
            src={image}
            alt={title}
          />

          <div className="min-w-0 flex-1">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 leading-tight">
              {title}
            </h3>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm">
              <p className="flex items-center gap-1.5 text-[#00D390]">
                <AiOutlineDownload className="text-base" />
                <span>{downloads}</span>
              </p>

              <p className="flex items-center gap-1.5 text-[#FF8811]">
                <CiStar className="text-base" />
                <span>{ratingAvg}</span>
              </p>

              <p className="text-gray-500 font-medium">{size} MB</p>
            </div>
          </div>
        </div>

        {/* Right Side - Button */}
        <div className="flex-shrink-0 pt-2 sm:pt-0">
          <button
            onClick={handleUninstall}
            className="px-6 py-3 border border-[#9F62F2] text-[#9F62F2] hover:bg-[#00D390] hover:text-white hover:border-[#00D390] rounded-xl font-medium transition-all w-full sm:w-auto"
          >
            Uninstall
          </button>
        </div>
      </div>
    </div>
  );
};

export default Instalations;
