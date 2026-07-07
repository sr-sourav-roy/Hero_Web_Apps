import React from "react";
import Banner from "../../componets/Banner/Banner";
import Apps from "../Apps/Apps";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <title>Home</title>
      {/* <h1>This is Home</h1> */}
      <Banner></Banner>
      {/* Trending Apps */}
      <Apps data={data}></Apps>
    </div>
  );
};

export default Home;
