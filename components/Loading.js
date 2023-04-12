import React from "react";
import { BiLoaderCircle } from "react-icons/bi";

const Loading = () => {
  return (
    <div className="flex h-[500px] justify-center items-center my-auto">
      <BiLoaderCircle className="animate-spin text-9xl text-black" />
    </div>
  );
};

export default Loading;