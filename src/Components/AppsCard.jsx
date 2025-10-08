import React from "react";

const AppsCard = ({ app }) => {
  const { image, title, downloads, ratingAvg } = app;
  console.log(app);
  return (
    <div className="">
      <div className="p-5 bg-white rounded-md shadow-lg hover:scale-103 transition ease-in-out">
        <img className="h-70 overflow-x-hidden w-full" src={image} alt="" />
        <h2 className="text-2xl font-semibold mt-3  border-t-1 border-gray-200 ">
          {title}
        </h2>
        <div className="flex justify-between pt-4">
          <div className="flex">
            <img className="h-5" src="/public/icon-downloads.png" alt="" />
            <p>{downloads}</p>
          </div>
          <div className="flex">
            <img className="h-5" src="/public/icon-ratings.png" alt="" />
            <p>{ratingAvg}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppsCard;
