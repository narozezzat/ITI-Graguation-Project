import React from "react";
import img1 from "../../assets/Images/img1.jpg";
import img2 from "../../assets/Images/img2.jpg";
import img3 from "../../assets/Images/img3.jpg";
import img4 from "../../assets/Images/img4.jpg";
import { Link } from "react-router-dom";
import "./Products.css"

function Products() {
  return (
    <>
      <div className="container mt-5">
        <div className="card-deck row">
          <div className="card col-md-3 bg-light">
          <h5 className="card-title mt-3">New arrivals in Toys</h5>
            <img className="card-img-top mt-3" src={img1} alt="" />
            <Link className="my-4 lin">
                <small>Shop Now</small>
            </Link>
          </div>
          <div className="card col-md-3 bg-light">
            <h5 className="card-title mt-3">Discover fashion trends</h5>
            <img className="card-img-top mt-3" src={img2} alt="" />
            <Link className="my-4 lin">
                <small>See more</small>
            </Link>
          </div>
          <div className="card col-md-3 bg-light">
            <h5 className="card-title mt-3">For your Fitness Needs</h5>
            <img className="card-img-top mt-3" src={img3} alt="" />
            <Link className="my-4 lin">
                <small>Shop now</small>
            </Link>
          </div>
          <div className="card col-md-3 bg-light">
            <h5 className="card-title mt-3">Home refresh ideas</h5>
            <img className="card-img-top mt-3" src={img4} alt="" />
            <Link className="my-4 lin">
                <small>Shop kitchen upgrades</small>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
