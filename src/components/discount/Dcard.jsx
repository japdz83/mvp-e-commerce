import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ddata from "./Ddata";
import "../newarrivals/style.css";

const Dcard = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <>
            <Slider {...settings}>
                {Ddata.map((val, index) => (
                    <div className="box product" key={index}>
                        <div className="img">
                            <img
                                src={val.cover}
                                alt="Img Product"
                                width="100%"
                            />
                        </div>
                        <h4>{val.name}</h4>
                        <span>{val.price}</span>
                    </div>
                ))}
            </Slider>
        </>
    );
};

export default Dcard;
