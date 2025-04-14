import React from 'react';
import { Carousel } from 'react-bootstrap';

function HeroBanner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="https://via.placeholder.com/800x400?text=Gadbad+Ice+Cream" alt="Gadbad Ice Cream" />
        <Carousel.Caption>
          <h3>Award-Winning Gadbad Ice Cream</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://via.placeholder.com/800x400?text=Chocolate+Delight" alt="Chocolate Delight" />
        <Carousel.Caption>
          <h3>Chocolate Delight</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroBanner;