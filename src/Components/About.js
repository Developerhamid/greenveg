import React from "react";
import Page from "./Page";
import aboutImg from "../images/about-intro.jpg";
import { useNavigate } from "react-router-dom";

const About = () => {
  const Navigate = useNavigate("");

  const ButtonNavigation = () => {
    Navigate("/contact");
  };
  return (
    <>
      <Page
        Heading="Agri modern farm"
        Description="Our mission to produce healthy, eat healhty, and live healthy"
        ButtonTxt="reach to us"
        Image={aboutImg}
        ButtonNavigation={ButtonNavigation}
      />
    </>
  );
};

export default About;
