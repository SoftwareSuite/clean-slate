import React from "react";
import { assets } from "../assets/assets";

const Steps = () => {
  return (
    <div className="mx-4 lg:mx-44 py-20 xl:py-40">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to bg-gray-400 bg-clip-text text-transparent">
        Steps to remove background <br />
        from image in seconds
      </h1>
      <div className="flex items-start flex-wrap gap-4 mt-16 xl:mt-24 justify-center">
        <div className="flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500">
          <img className="max-w-9" src={assets.upload_icon} />
          <div>
            <p className="text-xl font-medium bg-gradient-to-r from-gray-900 to bg-gray-400 bg-clip-text text-transparent">
              Upload Image
            </p>
            <p className="text-sm text-neutral-500 mt-1">
              Just upload any image from your computer <br /> or mobile.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500">
          <img className="max-w-9" src={assets.remove_bg_icon} />
          <div>
            <p className="text-xl font-medium bg-gradient-to-r from-gray-900 to bg-gray-400 bg-clip-text text-transparent">
              Remove Background
            </p>
            <p className="text-sm text-neutral-500 mt-1">
              You can remove image background with just <br />
              one click.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500">
          <img className="max-w-9" src={assets.download_icon} />
          <div>
            <p className="text-xl font-medium bg-gradient-to-r from-gray-900 to bg-gray-400 bg-clip-text text-transparent">
              Download Image
            </p>
            <p className="text-sm text-neutral-500 mt-1">
              You can download image with removed bg <br /> with just one click.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
