import React from "react";

const PagesError = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-red-500">404</h1>
          <h2 className="text-3xl font-semibold mt-4">Page Not Found</h2>
          <p className="py-6 text-gray-600">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <button
            // window history go back
            onClick={() => window.history.back()}
            className="btn btn-primary"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default PagesError;
