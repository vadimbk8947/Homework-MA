import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import winterForestImg from "../assets/winterForest.jpg";
import darkForestImg from "../assets/darkForest.jpg";
import FogForestImg from "../assets/fogForest.jpg";
import "./CarouselBox.scss";

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block carousel-img"
            src={winterForestImg}
            alt="winterForest"
          />
          <Carousel.Caption className="text">
            <h3>winterForestImg</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Asperiores iusto optio ut ducimus laborum temporibus saepe
              reiciendis facilis beatae dolore cum maxime facere illo officiis,
              nesciunt quos magnam eaque corporis!
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block carousel-img"
            src={darkForestImg}
            alt="darkForestImg"
          />
          <Carousel.Caption className="text">
            <h3>Dark ForestImg</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Asperiores iusto optio ut ducimus laborum temporibus saepe
              reiciendis facilis beatae dolore cum maxime facere illo officiis,
              nesciunt quos magnam eaque corporis!
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          carousel-{" "}
          <img className="d-block img" src={FogForestImg} alt="FogForestImg" />
          <Carousel.Caption className="text">
            <h3>FogForestImg</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Asperiores iusto optio ut ducimus laborum temporibus saepe
              reiciendis facilis beatae dolore cum maxime facere illo officiis,
              nesciunt quos magnam eaque corporis!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
