import React from "react";
import { useParams } from "react-router";
import { useLoaderData } from "react-router";

const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();
  console.log(data);
  const singleApps = data.find((sigleApp) => sigleApp.id === appId);
  const { title } = singleApps;

  return (
    <div className="card card-border bg-base-100 w-96">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
