import React from "react";
import { GlobeDemo } from "../Globe/GlobeDemo";

const Hero = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex justify-between">
        <div className="">
          <img
            src="https://pixner.net/anidio/carton-agency/assets/img/banner/left-man.png"
            alt=""
          />
        </div>
        <div className="">
          <GlobeDemo></GlobeDemo>
        </div>
        <div className="">
          <img
            src="https://pixner.net/anidio/carton-agency/assets/img/banner/right-man.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
