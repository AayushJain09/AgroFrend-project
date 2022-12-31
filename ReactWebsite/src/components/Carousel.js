import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import '../App.css';

const CarouselPage = () => {
  return (
    <Carousel className="carousel-main" fade>
      <Carousel.Item className="carousel-item">
        <img
          className="d-block w-100 carousel-img"
          src="https://images.unsplash.com/photo-1606041974734-0341c2d2d988?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>One stop soultion for Farmers</h3>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img
          className="d-block w-100 carousel-img"
          src="https://media.istockphoto.com/id/1452585405/photo/garden-trowel-leaning-next-to-seedlings.jpg?b=1&s=170667a&w=0&k=20&c=_cmPYSAyTY3AmfKhEtTzRj6dri8oTMD57_Alcj8aGJM="
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Buy Sell Rent Farming Equipments</h3>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img
          className="d-block w-100 carousel-img"
          src="https://images.unsplash.com/photo-1599511491576-ab06653a4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZhcm1zJTIwc29pbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Complete Information of Soil using AI</h3>
          {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselPage;
