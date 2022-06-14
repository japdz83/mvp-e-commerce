import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="next">
                <i className="bx bx-chevron-right"></i>
            </button>
        </div>
    );
};
const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="prev">
                <i className="bx bx-chevron-left"></i>
            </button>
        </div>
    );
};

const FlashCard = ({ productItems, addToCart }) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <>
            <Slider {...settings}>
                {productItems.map((productItem) => (
                    <div className="box" key={productItem.id}>
                        <div className="product mtop">
                            <div className="img">
                                <span className="discount">
                                    {productItem.discount}% Off
                                </span>
                                <img
                                    src={productItem.cover}
                                    alt="Img Product"
                                />
                                <div className="product-like">
                                    <label>{count}</label> <br />
                                    <i
                                        className="bx bx-heart"
                                        onClick={increment}
                                    ></i>
                                </div>
                            </div>
                            <div className="product-detail">
                                <h3>{productItem.name}</h3>
                                <div className="rate">
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                </div>
                                <div className="price">
                                    <h4>${productItem.price}.00</h4>
                                    <button
                                        onClick={() => addToCart(productItem)}
                                    >
                                        <i className="bx bx-cart-add"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </>
    );
};

export default FlashCard;
