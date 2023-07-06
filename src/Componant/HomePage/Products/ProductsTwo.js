
import React from "react";
import { Link } from "react-router-dom";
import "./Products.css"



function ProductsTwo() {

  const data = [{
    image:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg",
    title: "Shop Laptops & Tablets",
    linkToProductPage : "Shop Now"},
    {
      image:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg",
      title: "Shop activity trackers",
      linkToProductPage : "See more"},
    {
      image:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_StripLighting_379x304_1X_en_US._SY304_CB418597476_.jpg",
      title: "Create with strip lights",
      linkToProductPage : "Shop now"},
    {
    image:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Pets_1X._SY304_CB639746743_.jpg",
    title: "Shop Pet supplies",
    linkToProductPage : "Shop kitchen upgrades"},
  ]
  return (
    <>
      <div className="container mt-5">
        <div className="card-deck row">
          {
            data.map((item, index) => {
              return (
                <div className="card col-12 col-md-6 col-lg-3 bg-light" key={index}>
                  <h5 className="card-title mt-3">{item.title}</h5>
                  <img className="card-img-top mt-3" src={item.image} alt="" />
                  <Link className="my-4 lin">
                    <small>{item.linkToProductPage}</small>
                  </Link>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default ProductsTwo;

