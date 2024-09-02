import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

// Custom Previous Arrow
const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          position: "absolute",
          left: "-40px", 
          zIndex: 1,
          fontSize: "30px",
          color: "#000", 
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        <span className="icon-arrow_back">
          <FaArrowLeft />
        </span>
      </div>
    );
  };
  
  // Custom Next Arrow
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          position: "absolute",
          right: "-40px", 
          zIndex: 1,
          fontSize: "30px",
          color: "#000", 
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        <span className="icon-arrow_forward">
          <FaArrowRight />
        </span>
      </div>
    );
  };
  

function FeaturedProducts() {
  const settings = {
    dots: false, 
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, 
    prevArrow: <PrevArrow />, 
    nextArrow: <NextArrow />, 
    responsive: [
      {
        breakpoint: 1200, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1000, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="site-section block-3 site-blocks-2 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 site-section-heading text-center pt-4">
            <h2>Featured Products</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Slider {...settings}>
              <div className="item ">
                <div className="block-4 text-center">
                  <figure className="block-4-image">
                    <Image
                      src="/assets/images/cloth_1.jpg"
                      alt="Image placeholder"
                      className="img-fluid"
                      width={347}
                      height={246}
                    />
                  </figure>
                  <div className="block-4-text p-4">
                    <h3>
                      <a href="#">Tank Top</a>
                    </h3>
                    <p className="mb-0">Finding perfect t-shirt</p>
                    <p className="text-primary font-weight-bold">$50</p>
                  </div>
                </div>
              </div>
              <div className="item px-3 ">
                <div className="block-4 text-center">
                  <figure className="block-4-image">
                    <Image
                      src="/assets/images/shoe_1.jpg"
                      alt="Image placeholder"
                      className="img-fluid"
                      width={347}
                      height={246}
                    />
                  </figure>
                  <div className="block-4-text p-4">
                    <h3>
                      <a href="#">Corater</a>
                    </h3>
                    <p className="mb-0">Finding perfect products</p>
                    <p className="text-primary font-weight-bold">$50</p>
                  </div>
                </div>
              </div>
              <div className="item px-3 ">
                <div className="block-4 text-center">
                  <figure className="block-4-image">
                    <Image
                      src="/assets/images/cloth_2.jpg"
                      alt="Image placeholder"
                      className="img-fluid"
                      width={347}
                      height={246}
                    />
                  </figure>
                  <div className="block-4-text p-4">
                    <h3>
                      <a href="#">Polo Shirt</a>
                    </h3>
                    <p className="mb-0">Finding perfect products</p>
                    <p className="text-primary font-weight-bold">$50</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;
