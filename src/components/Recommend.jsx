import React from "react";
// import { Recommenddata } from "../data";
const Recommend = () => {
  return (
    <div className=" mt-20">
      <h2 className="text-white text-2xl mb-4 pl-8 mt-4">
        Recommended for you
      </h2>
      <div className=" grid grid-cols-4 gap-6 h-full relative overflow-hidden pb-10 pt-4 px-8">
        <div className="rounded-xl border-[4px] cursor-pointer h-full  viewer hover:scale-[1.05] overflow-hidden ">
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C5C0440D26A50B4B1FB275A545B24F9C49A77C721734169ABA4AE80E15348474/scale?width=1200&aspectRatio=1.78&format=jpeg"
            alt=""
            className=" z-10 object-cover top-0"
          />
        </div>
        <div className="rounded-xl border-[4px] cursor-pointer h-full  viewer hover:scale-[1.05] overflow-hidden">
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C5C0440D26A50B4B1FB275A545B24F9C49A77C721734169ABA4AE80E15348474/scale?width=1200&aspectRatio=1.78&format=jpeg"
            alt=""
            className=" z-10 object-cover top-0"
          />
        </div>
        <div className="rounded-xl border-[4px] cursor-pointer h-full  viewer hover:scale-[1.05] overflow-hidden">
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C5C0440D26A50B4B1FB275A545B24F9C49A77C721734169ABA4AE80E15348474/scale?width=1200&aspectRatio=1.78&format=jpeg"
            alt=""
            className=" z-10 object-cover top-0"
          />
        </div>
        <div className="rounded-xl border-[4px] cursor-pointer h-full  viewer hover:scale-[1.05] overflow-hidden">
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C5C0440D26A50B4B1FB275A545B24F9C49A77C721734169ABA4AE80E15348474/scale?width=1200&aspectRatio=1.78&format=jpeg"
            alt=""
            className=" z-10 object-cover top-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Recommend;
