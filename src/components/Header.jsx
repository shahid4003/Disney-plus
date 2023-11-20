import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import { SignOutButton, SignUpButton, UserButton } from "@clerk/clerk-react";
import { useAuth } from "@clerk/clerk-react";
import { menu } from "../data.js";
const Header = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="fixed top-0 left-0 right-0 h-[70px] flex justify-between  z-10  items-center px-8 bg-[#090b13]">
      <NavLink to="/">
        <div className="p-0 w-20 mt-1 max-h-[70px] inline-block">
          <img src="/assets/images/logo.svg" className="block w-full" alt="" />
        </div>
      </NavLink>
      <div className="relative ml-8 gap-4 h-full p-0 m-0 tablet:flex justify-end flex-row hidden items-center flex-nowrap mr-auto">
        {menu.map((menuitem, index) => {
          return (
            <NavLink key={index} to={menuitem.link}>
              <li key={index} className=" flex justify-center items-start">
                <img
                  src={menuitem.img}
                  className="h-5 w-5 min-w-[20px] z-auto"
                  alt=""
                />
                <span className="text-[#f9f9f9d9]  link-hover relative text-xs whitespace-nowrap py-1 tracking-[1.42px]">
                  {menuitem.title}
                </span>
              </li>
            </NavLink>
          );
        })}
      </div>
      <div className="flex justify-end items-center">
        {isSignedIn ? <UserButton /> : <SignUpButton />}
      </div>
    </div>
  );
};

export default Header;
