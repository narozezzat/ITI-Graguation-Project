import React, { useEffect, useState } from "react";
import "./Deals.css";
import { Link } from "react-router-dom";
import BaseURL from "../../../BaseURL.js";

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


  // const data = [{
  //   image: 'https://m.media-amazon.com/images/I/31f7nuANQNL._AC_SY200_.jpg',
  //   title:'Crocs Footwear',
  //   sell: '53' },
  //   {
  //     image: 'https://m.media-amazon.com/images/I/41-+itFyZlL._AC_SY200_.jpg',
  //     title:'Grand Gaming Days - Game o..',
  //     sell: '35' },
  //     {
  //     image: 'https://m.media-amazon.com/images/I/31RwE3ltrQL._AC_SY200_.jpg',
  //     title:'Exciting offers on One Plus Mobi..',
  //     sell: '46' },
  //     {
  //     image: 'https://m.media-amazon.com/images/I/4151aOEWqAL._AC_SY200_.jpg',
  //     title:'Lava Blaze 5G (6GB) available at..',
  //     sell: '27' },
  //     {
  //     image: 'https://m.media-amazon.com/images/I/61QQtY6qtHL._AC_SY200_.jpg',
  //     title:"Levi's, Allen Solly, ANNI Designer..",
  //     sell: '87' },
  //     {
  //     image: 'https://m.media-amazon.com/images/I/41Jzbjg6TpL._AC_SY200_.jpg',
  //     title:'ROCCAT Tusko Across-The-Board Flat...',
  //     sell: '21' },
  //     {
  //     image: 'https://m.media-amazon.com/images/I/31Ypgh5SJyL._AC_SY200_.jpg',
  //     title:'Sunny Health & Fitness Exercise Vinyl...',
  //     sell: '49' }
  
  // ]

  return (
    <>
      <div className="todaysDealsContainer text-nowrap">
        <div className="todayDealsHeading">
          <h5 className="mx-3">Exciting Deals</h5>
          <span className="">
            <Link className="deal">See all deals</Link>
          </span>
        </div>
          
        <div className="table-responsive todayDealsProductList">
          {
            allCategory.map((item, index) => {
              return (
                <span className="" key={index}>
                  <span className="todayDealsProductItem">
                    <img className="dealsImage" src={item.image} alt="" />
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
