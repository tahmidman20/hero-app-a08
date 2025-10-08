import React from "react";
import useApps from "../hooks/useApps";
import AppsCard from "../Components/AppsCard";

const Apps = () => {
  const { appsdata } = useApps();
  console.log(appsdata);
  return (
    <div>
      <div className="text-center items-center">
        <h1>Our All Applications</h1>
        <p>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between">
        <h1>This id apps page{appsdata.length}</h1>
        <input type="search" name="" placeholder="Search" id="" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-screen-2xl w-full px-4 md:px-6 lg:px-8 mx-auto">
        {appsdata.map((app) => (
          <AppsCard key={app.id} app={app}></AppsCard>
        ))}
      </div>
    </div>
  );
};

export default Apps;
