//import React from "react";
import image from "../../assets/images/my.png";
const EnsimTitle = () => {
  return (
    <div className="flex gap-1 items-center justify-start ">
      <img src={image} alt="myensim" className="rounded-md w-12" />
      <h1 className="text-2xl font-bold">ENSIM</h1>
    </div>
  );
};

export default EnsimTitle;
