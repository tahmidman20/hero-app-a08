import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useApps from "../hooks/useApps";

import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import Cardload from "../Components/Cardload";

const AppDetails = () => {
  const { id } = useParams();
  const { appsdata, loading } = useApps();
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem("install")) || [];
    setInstalledApps(existingData);
  }, []);
  if (loading) return <Cardload></Cardload>;

  const appData = appsdata.find((p) => String(p.id) === id);
  if (loading) return <Cardload></Cardload>;
  const {
    image,
    title,
    reviews,
    ratingAvg,
    downloads,
    companyName,
    size,
    description,
    id: appID,
  } = appData || {};

  const handleInstall = () => {
    const existingData = JSON.parse(localStorage.getItem("install"));
    let updatedData = [];

    if (existingData) {
      const isDuplicate = existingData.some((p) => p.id === appData.id);
      if (isDuplicate) return toast(" Sorry this app already exist");
      updatedData = [...existingData, appData];
    } else {
      updatedData.push(appData);
    }

    localStorage.setItem("install", JSON.stringify(updatedData));

    setInstalledApps(updatedData);
    toast("App installed successfully!✅");
  };
  const isInstalled = installedApps.some((item) => item.id === appID);

  return (
    <div>
      <div className="flex flex-col md:flex-row space-x-10 mx-2 border-b-1 border-gray-300">
        <div>
          <img
            className="w-full max-w-[512px] mx-auto h-auto object-contain"
            src={image}
            alt=""
          />
        </div>
        <div>
          <div className="border-b-1 border-gray-300">
            <h1 className="text-4xl font-bold ">{title}</h1>
            <p className="pb-15 pt-6">
              Developed by :{" "}
              <span className="text-violet-600 font-bold"> {companyName} </span>
            </p>
          </div>
          <div className="mt-5 mx-3 flex flex-col md:flex-row md:space-x-10 space-y-6 md:space-y-0 justify-between ">
            <div>
              <img src="/public/icon-downloads.png" alt="" />
              <p className="text-gray-500 py-2">Downloads</p>
              <h1 className="text-2xl font-bold">{downloads} </h1>
            </div>
            <div>
              <img src="/public/icon-ratings.png" alt="" />
              <p className="text-gray-500 py-2">Average Ratings</p>
              <h1 className="text-2xl font-bold">{ratingAvg} </h1>
            </div>
            <div>
              <img src="/public/icon-review.png" alt="" />
              <p className="text-gray-500 py-2">Total Reviews</p>
              <h1 className="text-2xl font-bold">{reviews} </h1>
            </div>
          </div>
          <div className="mt-4 pb-5">
            <button
              disabled={isInstalled}
              onClick={handleInstall}
              className="bg-green-600 text-white px-5 py-2 disabled:bg-green-400 rounded-md shadow-md font-semibold hover:bg-green-600 transition"
            >
              {isInstalled ? "Installed" : `Install Now (${size} MB)`}
            </button>
          </div>
        </div>
      </div>
      <div>barchat</div>
      <p>{description}</p>
    </div>
  );
};

export default AppDetails;
