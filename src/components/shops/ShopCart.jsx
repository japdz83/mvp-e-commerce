import React, { useState } from "react";

const ShopCart = ({ addToCart, shopItems }) => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };
    return (
        <>
            {shopItems.map((shopItem, index) => (
                <div className="box" key={index}>
                    <div className="product mtop">
                        <div className="img">
                            <span className="discount">
                                {shopItem.discount}% Off
                            </span>
                            <img src={shopItem.cover} alt="Img Product" />
                            <div className="product-like">
                                <label>{count}</label> <br />
                                <i
                                    className="bx bx-heart"
                                    onClick={increment}
                                ></i>
                            </div>
                        </div>

                        <div className="product-details">
                            <h3>{shopItem.name}</h3>
                            <div className="rate">
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                            </div>
                            <div className="price">
                                <h4>${shopItem.price}.00</h4>
                                <button onClick={() => addToCart(shopItem)}>
                                    <i className="bx bx-cart-add"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ShopCart;
