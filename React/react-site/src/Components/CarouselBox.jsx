import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import winterForestImg from "../assets/winterForest.jpg";
import darkForestImg from "../assets/darkForest.jpg";
import FogForestImg from "../assets/fogForest.jpg";

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={winterForestImg}
            alt="winterForest"
          />
          <Carousel.Caption>
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
            className="d-block w-100"
            src={darkForestImg}
            alt="darkForestImg"
          />
          <Carousel.Caption>
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
          <img
            className="d-block w-100"
            src={FogForestImg}
            alt="FogForestImg"
          />
          <Carousel.Caption>
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
