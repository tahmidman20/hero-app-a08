import React from "react";

const PageError = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full mx-auto">
        <img src="/public/error-404.png" alt="" />
      </div>
      <h1 className="text-4xl text-center font-semibold">
        Oops, page not found❗❗
      </h1>
    </>
  );
};

export default PageError;
