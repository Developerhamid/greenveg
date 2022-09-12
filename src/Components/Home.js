import React from "react";
import "./Home.css";
import Page from "./Page";
import homeImg from "../images/home-intro.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const Navigate = useNavigate("");

  const ButtonNavigation = () => {
    Navigate("/service");
  };

  return (
    <>
      <Page
        Heading="Welcome to green veg"
        Description="get organic vegetables directly from the farms"
        ButtonTxt="check services"
        Image={homeImg}
        ButtonNavigation={ButtonNavigation}
      />
    </>
  );
};

export default Home;
