import React from "react";
import { Carousel } from "antd";
import "antd/dist/reset.css";
import EB from "./assets/earth_bound1.jpg";
import Mario from "./assets/mario64.jpg";
import PM from "./assets/pacman.jpg";
import GH from "./assets/guitar_hero.jpg";
import "./Carousel.css";

const contentStyle = {
  height: "600px",
  lineHeight: "160px",
  textAlign: "center",
};

const MyCarousel = () => {
  return (
    <div className="mycarousel">
      <Carousel autoplay effect="fade">
        <div>
          <h3 style={contentStyle}>
            <img className="carousel__img" src={EB} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img className="carousel__img" src={Mario} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img className="carousel__img" src={PM} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img className="carousel__img" src={GH} />
          </h3>
        </div>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
