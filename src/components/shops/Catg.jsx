import React from "react";
import Cat1 from "../../images/category/cat-1.png";
import Cat2 from "../../images/category/cat-2.png";

const Catg = () => {
    const data = [
        {
            cateImg: Cat1,
            cateName: "Apple",
        },
        {
            cateImg: Cat2,
            cateName: "Samasung",
        },
        {
            cateImg: Cat1,
            cateName: "Oppo",
        },
        {
            cateImg: Cat2,
            cateName: "Vivo",
        },
        {
            cateImg: Cat1,
            cateName: "Redimi",
        },
        {
            cateImg: Cat2,
            cateName: "Sony",
        },
    ];
    return (
        <>
            <div className="category">
                <div className="chead d_flex">
                    <h1>Brands </h1>
                    <h1>Shops </h1>
                </div>
                {data.map((value, index) => {
                    return (
                        <div className="box f_flex" key={index}>
                            <img src={value.cateImg} alt="" />
                            <span>{value.cateName}</span>
                        </div>
                    );
                })}
                <div className="box box2">
                    <button>View All Brands</button>
                </div>
            </div>
        </>
    );
};

export default Catg;
