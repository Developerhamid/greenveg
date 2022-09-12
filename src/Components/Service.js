import React from "react";
import Card from "./Card";
import "./Service.css";
import ServiceData from "./ServiceData";

const Service = () => {
  return (
    <>
      <div className="service-container">
        <h2>Our services</h2>
        <hr className="title-line" />
        <div className="inner-service-container">
          {ServiceData.map((items, ind) => {
            const { title, descr, image } = items;
            return <Card key={ind} title={title} descr={descr} image={image} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Service;
