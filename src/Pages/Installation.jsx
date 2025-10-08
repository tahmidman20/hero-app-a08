import React, { useEffect, useState } from "react";

const Installation = () => {
  const [installApp, setInstallApp] = useState([]);
  useEffect(() => {
    const saveInstall = JSON.parse(localStorage.getItem("install"));
    if (saveInstall) setInstallApp(saveInstall);
  }, []);
  return (
    <div>
      <div className="text-center items-center">
        <h1 className="text-3xl font-bold">Your Installed Apps</h1>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div>
        <h1>{installApp.length} Apps Found</h1>
      </div>
    </div>
  );
};

export default Installation;
