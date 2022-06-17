import React from "react";
import "./style.css";

const Wrapper = () => {
    const data = [
        {
            cover: <i className="bx bxs-truck icon-azul"></i>,
            title: "Worldwide Delivery",
            decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
            cover: <i className="bx bxs-id-card icon-rosa"></i>,
            title: "Safe Payment",
            decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
            cover: <i className="bx bxs-shield icon-verde"></i>,
            title: "Shop With Confidence ",
            decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
            cover: <i className="bx bx-support icon-naranja"></i>,
            title: "24/7 Support ",
            decs: "We offer competitive prices on our 100 million plus product any range.",
        },
    ];
    return (
        <>
            <section className="wrapper background">
                <div className="container grid2 wrapper-grid">
                    {data.map((val, index) => (
                        <div className="product" key={index}>
                            <div className="img icon-circle">
                                <i> {val.cover} </i>
                            </div>
                            <h3>{val.title}</h3>
                            <p>{val.decs}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Wrapper;
