import React from "react";
import "./Header.css";

const Head = () => {
    return (
        <>
            <section className="head">
                <div className="container d_flex">
                    <div className="left row">
                        <i className="bx bxs-phone"></i>
                        <label> +88012 3456 7894</label>
                        <i className="bx bxs-envelope"></i>
                        <label> support@ui-lib.com</label>
                    </div>

                    <div className="right row RText">
                        <label>Theme FAQ'S</label>
                        <label>Need you help?</label>
                        <span>🏳️‍⚧️</span>
                        <label>EN</label>
                        <span>🏳️‍⚧️</span>
                        <label>USD</label>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Head;
