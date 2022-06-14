import React from "react";
import Dcard from "./Dcard";

const Discount = () => {
    return (
        <>
            <section className="Discount background NewArrivals">
                <div className="container">
                    <div className="heading d_flex">
                        <div className="heading-left row f_flex">
                            <i className="bx bx-gift icon-gift"></i>
                            <h2>Big Discounts</h2>
                        </div>
                        <div className="heading-right row">
                            <span>View all</span>
                            <i className="bx bx-caret-right"></i>
                        </div>
                    </div>
                    <Dcard />
                </div>
            </section>
        </>
    );
};

export default Discount;
