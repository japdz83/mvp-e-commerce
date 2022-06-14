import React from "react";
import Cart from "./Cart";
import "./style.css";
import New from "../../images/new.png";

const NewArrivals = () => {
    return (
        <>
            <section className="NewArrivals background">
                <div className="container">
                    <div className="heading d_flex">
                        <div className="heading-left row  f_flex">
                            <img src={New} alt="New Img" />
                            <h2>New Arrivals </h2>
                        </div>
                        <div className="heading-right row ">
                            <span>View all</span>
                            <i className="bx bx-caret-right"></i>
                        </div>
                    </div>
                    <Cart />
                </div>
            </section>
        </>
    );
};

export default NewArrivals;
