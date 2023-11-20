import React from "react";
import "../App.css";
import { viewer } from "../data";
const Viewers = () => {
  return (
    <div className="grid grid-cols-1 gap-6 laptop:grid-cols-5 mt-7 px-8 ">
      {viewer.map((element, index) => {
        return (
          <div
            className="rounded-xl relative group border-[4px] cursor-pointer h-full pt-[56.5%] viewer hover:scale-[1.05] "
            key={index}
          >
            <img
              src={element.image}
              alt=""
              className="absolute z-1 object-cover top-0"
            />
            <video
              className="absolute rounded-xl h-full inset-0 -z-10 group-hover:z-10"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={element.video} />
            </video>
          </div>
        );
      })}
    </div>
  );
};

export default Viewers;
