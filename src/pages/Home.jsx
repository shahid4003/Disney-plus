import React from "react";
import { UserButton } from "@clerk/clerk-react";
import { useAuth } from "@clerk/clerk-react";
import "../App.css";
import ImgSlider from "../components/ImgSlider";
import Viewers from "../components/Viewers";
import Recommend from "../components/Recommend";
import NewDisney from "../components/NewDisney";
import Originals from "../components/Originals";
import Trending from "../components/Trending";

const Home = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  // In case the user signs out while on the page.
  if (!isLoaded || !userId) {
    return null;
  }

  return (
    <div className="relative">
      <div className="absolute top-[70px]  overflow-x-hidden home-bg w-full">
        <ImgSlider />
        <Viewers />
        <Recommend />
        <NewDisney />
        <Originals />
        <Trending />
      </div>
    </div>
  );
};

export default Home;
