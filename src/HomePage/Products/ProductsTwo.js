import React from "react";
import img5 from "../../assets/Images/img5.jpg";
import img6 from "../../assets/Images/img6.jpg";
import img7 from "../../assets/Images/img7.jpg";
import img9 from "../../assets/Images/img9.jpg";
import { Link } from "react-router-dom";
import "./Products.css"

function ProductsTwo() {
  return (
    <>
      <div className="container mt-5">
        <div className="card-deck row">
          <div className="card col-md-3 bg-light">
          <h5 className="card-title mt-3">Shop Laptops & Tablets</h5>
            <img className="card-img-top mt-3" src={img5} alt="" />
            <Link className="my-4 lin">
                <small>Shop Now</small>
            </Link>
          </div>
          <div className="card col-md-3 bg-light">
            <h5 className="card-title mt-3">Shop activity trackers</h5>
            <img className="card-img-top mt-3" src={img6} alt="" />
            <Link className="my-4 lin">
                <small>See more</small>
            </Link>
          </div>
          <div className="card col-md-3 bg-light">
            <h5 className="card-title mt-3">Create with strip lights</h5>
            <img className="card-img-top mt-3" src={img7} alt="" />
            <Link className="my-4 lin">
                <small>Shop now</small>
            </Link>
          </div>
          <div className="card col-md-3 bg-light">
            <h5 className="card-title mt-3">Shop Pet supplies</h5>
            <img className="card-img-top mt-3" src={img9} alt="" />
            <Link className="my-4 lin">
                <small>Shop kitchen upgrades</small>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsTwo;
