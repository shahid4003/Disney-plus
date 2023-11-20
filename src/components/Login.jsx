import React from "react";
import Header from "./Header";
import "../App.css";
import { useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
const login = (props) => {
  const navigate = useNavigate();
  const { isSignedIn } = useAuth();
  useEffect(() => {
    if (isSignedIn) {
      console.log("run");
      navigate("/home");
    }
  }, [isSignedIn]);
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center w-full h-screen overflow-hidden text-center login-bg">
        <div className="w-full h-full py-20 px-10 mb-[10vw] relative box-border flex justify-center items-center flex-col">
          <div className="max-w-[650px] ">
            <img
              src="/assets/images/cta-logo-one.svg"
              className="w-full mb-3 max-w-[600px]"
              alt=""
            />
            <a
              href=""
              className="text-lg rounded font-bold my-5 flex justify-center items-center tracking-[1.5px]	py-6 text-[#f9f9f9] bg-[#0063e5] w-full hover:bg-[#0483ee]"
            >
              GET ALL THERE
            </a>
            <p className="text-[#f3f3f3] mb-6 leading-snug tracking-[1.5px]">
              Get Premier Access to Raya and the Last Dragon for an additional
              fee with a Disney+ subscription. As of 03/26/21, the price of
              Disney+ and The Disney Bundle will increase by $1.
            </p>
            <img
              src="/assets/images/cta-logo-two.png"
              className="w-full mt-3 max-w-[600px] align-bottom inline-block "
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
