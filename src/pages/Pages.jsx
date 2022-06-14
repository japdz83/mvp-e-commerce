import React from "react";
import Discount from "../components/discount/Discount";
import FlashDeals from "../components/flashDeals/FlashDeals";
import Home from "../components/MainPage/Home";
import NewArrivals from "../components/newarrivals/NewArrivals";
import Shop from "../components/shops/Shop";
import TopCate from "../components/top/TopCate";
import Annocument from "../components/annocument/Annocument";
import Wrapper from "../components/wrapper/Wrapper";

const Pages = ({ productItems, CartItem, addToCart, shopItems }) => {
    return (
        <div>
            <Home CartItem={CartItem} />
            <FlashDeals productItems={productItems} addToCart={addToCart} />
            <TopCate />
            <NewArrivals />
            <Discount />
            <Shop shopItems={shopItems} addToCart={addToCart} />
            <Annocument />
            <Wrapper />
        </div>
    );
};

export default Pages;
