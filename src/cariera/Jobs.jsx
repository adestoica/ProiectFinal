import React from "react";

const Jobs = ({ img, title, children }) => {
  return (
    <div className="bg-green-800 shadow-md rounded-md mx-5 md:mx-16 lg:mx-32 xl:mx-52 gap-10  mb-12 h-1/3  flex flex-col md:flex-row ">
      <img
        src={img}
        alt={title}
        className=" h-auto w-auto md:w-72 object-cover"
      />
      <div className="p-4 ">
        <h2 className="text-xl font-bold mb-2 text-white">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Jobs;
