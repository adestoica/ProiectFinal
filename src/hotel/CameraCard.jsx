import React from "react";

const CameraCard = ({ img, title, pret, children }) => {
  return (
    <div className="bg-green-900 shadow-md rounded-lg overflow-hidden w-96 xl:w-3/12 m-auto mt-5 transform transition-transform duration-300 hover:scale-105">
      <img src={img} alt={title} className="w-full h-56 object-cover" />
      <div className="p-4 flex flex-row justify-between ">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="border bg-yellow-300 text-black text-xl font-bold p-1">
          {pret}$
        </p>
      </div>
      <div className="flex flex-row justify-start  ">{children}</div>
    </div>
  );
};

export default CameraCard;
