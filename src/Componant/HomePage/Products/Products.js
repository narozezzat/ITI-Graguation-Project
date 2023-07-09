// import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css"
// import BaseURL from "../../../BaseURL.js";



function Products() {

  const data = [{
    image:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Toys_1X._SY304_CB639759658_.jpg",
    title: "New arrivals in Toys",
    linkToProductPage : "Shop Now"},
    {
      image:"https://images-na.ssl-images-amazon.com/images/G/01/softlines/shopbop/ingress/2023/March/mp_20230219_ff_desktopsinglecategory_desktop_379x304_1._SY304_CB612639047_.jpg",
      title: "Discover fashion trends",
      linkToProductPage : "See more"},
    {
      image:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_1X._SY304_CB639748186_.jpg",
      title: "For your Fitness Needs",
      linkToProductPage : "Shop now"},
      {
      image:"https://images-na.ssl-images-amazon.com/images/G/01/home/THILGMA/SpringEvent2023/XCM_CUTTLE_1559454_3018199_379x304_1X_en_US._SY304_CB592739737_.jpg",
      title: "Home refresh ideas",
      linkToProductPage : "Shop kitchen upgrades"}
      
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
              {/* <div className="card col-md-3 bg-light" >
                  <h5 className="card-title mt-3">mina</h5>
                  <img className="card-img-top mt-3" src="" alt="" />
                  <Link className="my-4 lin">
                    <small>mina</small>
                  </Link>
                </div> */}

        </div>
      </div>
    </>
  );
}

export default Products;
