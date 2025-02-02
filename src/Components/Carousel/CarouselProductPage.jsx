import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselProductPage = () => {
  return (
    <>
      {" "}
      <Carousel className="car mb-5">
        <Carousel.Item interval={5000}>
          <img
            src="https://androidcommunity.com/wp-content/uploads/2016/08/Screenshot-2016-08-22-19.53.25.jpg"
            className="carouselImg d-block w-100"
            alt="..."
            style={{ objectFit: "cover", height: "400px" }}
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/c1605d3a-ffa6-4f01-bba9-7d68c3a2383f.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"
            className="carouselImg d-block w-100"
            alt="..."
            style={{ objectFit: "cover", height: "400px" }}
          />
          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            src="https://mma.prnewswire.com/media/2067136/Press_Release_Header_image_motorola_edge.jpg?p=facebook"
            style={{ objectFit: "cover", height: "400px" }}
            className="carouselImg d-block w-100"
            alt="..."
          />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
    <p>
      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselProductPage;
