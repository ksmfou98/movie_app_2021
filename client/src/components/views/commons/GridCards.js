import React from "react";
import { Col } from "antd";

const GridCards = ({ MovieId, image, MovieName }) => {
  return (
    <Col lg={6} md={8} xs={24}>
      <div style={{ position: "relative" }}>
        <a href={`/movie/${MovieId}`}>
          <img style={{width:'100%', height:'320px'}} src={image} alt={MovieName} />
        </a>
      </div>
    </Col>
  );
};

export default GridCards;
