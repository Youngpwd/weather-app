import React from "react";
import { BiLoaderCircle } from "react-icons/bi";

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <BiLoaderCircle className="animate-spin text-4xl text-white" />
    </div>
  );
};

export default Loading;