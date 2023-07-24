import React, { useEffect, useState } from "react";
import "./Deals.css";
import { Link } from "react-router-dom";
import BaseURL from "../../../BaseURL.js";
import imgForDeal from "../../../assets/Images/img6.jpg"

function Deals() {
  const [allCategory, setAllCategory] = useState([]);
  const get = async ()=>{
    try {
      const response = await BaseURL.get('/api/category')
      setAllCategory(response.data.data)
    } catch (error) {
      console.log(error.response.data.message)
    }

  }
  useEffect(() => {
      get();
  }, []);


  return (
    <>
      <div className="todaysDealsContainer text-nowrap">
        <div className="todayDealsHeading">
          <h5 className="mx-3">Exciting Deals</h5>
          <span className="">
            <Link className="deal">See all deals</Link>
          </span>
        </div>
          
        <div className="table-responsive todayDealsProductList mx-3">
          {
            allCategory.map((item, index) => {
              return (
                <span className="" key={index}>
                  <span className="todayDealsProductItem">
                    <img className="dealsImage" src={imgForDeal} alt="" />
                    <div className="discountContainer mx-4">
                      <Link>Upto 35 % off</Link>
                      <Link>Deal of the Day</Link>
                    </div>
                    <p className="mx-4">{item.name}</p>
                  </span>
                </span>
              )
            })
          }
        </div>
        
          </div>
    </>
  );
}

//Deals Slider

export default Deals;
