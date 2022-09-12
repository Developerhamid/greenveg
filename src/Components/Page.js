import React from "react";

const Page = ({ Heading, Description, ButtonTxt, Image, ButtonNavigation }) => {
  return (
    <>
      <div className="home-container">
        <div className="home-heading-container">
          <h1>{Heading}</h1>
          <p>{Description}</p>
          <button className="btn-services" onClick={() => ButtonNavigation()}>
            {ButtonTxt}
          </button>
        </div>
        <div className="home-image-container">
          <img src={Image} alt="home-veg" />
        </div>
      </div>
    </>
  );
};

export default Page;
