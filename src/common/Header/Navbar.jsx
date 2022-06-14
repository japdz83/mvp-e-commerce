import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Navbar = () => {
    const [MobileMenu, setMobileMenu] = useState(false);
    return (
        <>
            <header className="header">
                <div className="container d_flex">
                    <div className="categories d_flex">
                        <span>
                            <i className="bx bxs-category"></i>
                        </span>
                        <h4>
                            Categories <i className="bx bxs-chevron-down"></i>
                        </h4>
                    </div>
                    <div className="navlink">
                        <ul
                            className={
                                MobileMenu
                                    ? "nav-links-MobileMenu"
                                    : "link f_flex capitalize"
                            }
                            onClick={() => setMobileMenu(false)}
                        >
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/pages">Pages</Link>
                            </li>
                            <li>
                                <Link to="/user">User Account</Link>
                            </li>
                            <li>
                                <Link to="/vendor">Vendor Account</Link>
                            </li>
                            <li>
                                <Link to="/track">track my order</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <button
                            className="toggle"
                            onClick={() => setMobileMenu(!MobileMenu)}
                        >
                            {MobileMenu ? (
                                <i className="bx bxs-x-circle close home-btn"></i>
                            ) : (
                                <i className="bx bx-menu open"></i>
                            )}
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
