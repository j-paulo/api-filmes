import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";
import img1 from "../../assets/images/1.jpeg";
import img2 from "../../assets/images/2.jpeg";
import img3 from "../../assets/images/3.jpeg";
import styled from "styled-components";

// const StyledCarousel = styled(Carousel)`
//   top: 0;
//   position: relative;
// `;

const Slider = () => {
  return (
    <Carousel dynamicHeight animationHandler="fade">
      <div>
        <img src={img1} alt="" />
        <p className="Legend">Legend 1</p>
      </div>
      <div>
        <img src={img2} alt="" />
        <p className="Legend">Legend 1</p>
      </div>
      <div>
        <img src={img3} alt="" />
        <p className="Legend">Legend 1</p>
      </div>
    </Carousel>
  );
};

export default Slider;
