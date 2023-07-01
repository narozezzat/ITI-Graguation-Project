import React from "react";
import "./Deals.css";
import { Link } from "react-router-dom";

function Deals() {
  const data = [{
    image: 'https://m.media-amazon.com/images/I/31f7nuANQNL._AC_SY200_.jpg',
    title:'Amazon Prime Video - Free Movies',
    sell: '49' },
    {
      image: 'https://m.media-amazon.com/images/I/31f7nuANQNL._AC_SY200_.jpg',
      title:'Amazon Prime Video - Free Movies!',
      sell: '49' },
      {
      image: 'https://m.media-amazon.com/images/I/31f7nuANQNL._AC_SY200_.jpg',
      title:'Amazon Prime Video - Free Movie',
      sell: '49' },
      {
      image: 'https://m.media-amazon.com/images/I/31f7nuANQNL._AC_SY200_.jpg',
      title:'Amazon Prime Video - Free Movie',
      sell: '49' },
      {
      image: 'https://m.media-amazon.com/images/I/31f7nuANQNL._AC_SY200_.jpg',
      title:'Amazon Prime Video - Free Movie',
      sell: '49' },
      {
      image: 'https://m.media-amazon.com/images/I/31f7nuANQNL._AC_SY200_.jpg',
      title:'Amazon Prime Video - Free Movie',
      sell: '49' },
      {
      image: 'https://m.media-amazon.com/images/I/31f7nuANQNL._AC_SY200_.jpg',
      title:'Amazon Prime Video - Free Movie',
      sell: '49' }
  
  ]
  return (
    <>
      <div className="todaysDealsContainer text-nowrap">
        <div className="todayDealsHeading">
          <h5 className="mx-3">Exciting Deals</h5>
          <span className="mx-3">
            <Link className="deal">See all deals</Link>
          </span>
        </div>
          
        <div className="table-responsive todayDealsProductList">
          {
            data.map((item, index) => {
              return (
                <span className="" key={index}>
                  <span className="todayDealsProductItem">
                    <img className="dealsImage" src={item.image} alt="" />
                    <div className="discountContainer">
                      <Link>Upto {item.sell} off</Link>
                      <Link>Deal of the Day</Link>
                    </div>
                    <p>{item.title}</p>
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
