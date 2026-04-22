import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="text-left">
        <h1 className="text-8xl">SORRY</h1>
        <h2 className="text-3xl font-semibold my-1 italic">
          The artwork you're looking for has vanished!
        </h2>
      </div>

      <img src="/notfound.svg" alt="404" />
      <Link to={"/"}>
        <button className="btn btn-neutral mt-4 font-semibold hover:bg-[#2d2d2d]">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
