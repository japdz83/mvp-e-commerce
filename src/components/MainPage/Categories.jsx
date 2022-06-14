import React from "react";
import Cat1 from "../../images/category/cat1.png";
import Cat2 from "../../images/category/cat2.png";
import Cat3 from "../../images/category/cat3.png";
import Cat4 from "../../images/category/cat4.png";
import Cat5 from "../../images/category/cat5.png";
import Cat6 from "../../images/category/cat6.png";
import Cat7 from "../../images/category/cat7.png";
import Cat8 from "../../images/category/cat8.png";
import Cat9 from "../../images/category/cat9.png";
import Cat10 from "../../images/category/cat10.png";
import Cat11 from "../../images/category/cat11.png";

const Categories = () => {
    const data = [
        {
            cateImg: Cat1,
            cateName: "Fashion",
        },
        {
            cateImg: Cat2,
            cateName: "Electronic",
        },
        {
            cateImg: Cat3,
            cateName: "Cars",
        },
        {
            cateImg: Cat4,
            cateName: "Home & Garden",
        },
        {
            cateImg: Cat5,
            cateName: "Gifts",
        },
        {
            cateImg: Cat6,
            cateName: "Music",
        },
        {
            cateImg: Cat7,
            cateName: "Health & Beauty",
        },
        {
            cateImg: Cat8,
            cateName: "Pets",
        },
        {
            cateImg: Cat9,
            cateName: "Baby Toys",
        },
        {
            cateImg: Cat10,
            cateName: "Groceries",
        },
        {
            cateImg: Cat11,
            cateName: "Books",
        },
    ];

    return (
        <>
            <div className="category">
                {data.map((value, index) => {
                    return (
                        <div className="box f_flex" key={index}>
                            <img src={value.cateImg} alt={value.cateName} />
                            <span>{value.cateName}</span>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Categories;
