import React from "react";
import Catg from "./Catg";
import ShopCart from "./ShopCart";
import "./style.css";

const Shop = ({ addToCart, shopItems }) => {
    return (
        <>
            <section className="shop background">
                <div className="container d_flex">
                    <Catg />
                    <div className="containerWidth">
                        <div className="heading d_flex">
                            <div className="heading-left row f_flex">
                                <h2>Mobile Phone</h2>
                            </div>
                            <div className="heading-right row">
                                <span>View all</span>
                                <i className="bx bx-caret-right"></i>
                            </div>
                        </div>
                        <div className="product-content grid1">
                            <ShopCart
                                addToCart={addToCart}
                                shopItems={shopItems}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Shop;
