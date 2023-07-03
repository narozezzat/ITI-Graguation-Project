import React from 'react'
import { Link } from 'react-router-dom'
import "../Deals/Deals.css"

function PopularProducts() {
    const data = [
        {
            image: 'https://m.media-amazon.com/images/I/715UuCH5OES._AC_SY200_.jpg',
        },
        {
            image: 'https://m.media-amazon.com/images/I/71xWh67sBNL._AC_SY200_.jpg',
        },
        {
            image: 'https://m.media-amazon.com/images/I/719p0eyZiSL._AC_SY200_.jpg',
        },
        {
            image: 'https://m.media-amazon.com/images/I/71hKMkVHYfL._AC_SY200_.jpg',
        },
        {
            image: 'https://m.media-amazon.com/images/I/51RGCmrbyKL._AC_SY200_.jpg',
        },
        {
            image: 'https://m.media-amazon.com/images/I/51D3DrDmwkL._AC_SY200_.jpg',
        },
        {
            image: 'https://m.media-amazon.com/images/I/71jTFnk7XiL._AC_SY200_.jpg',
        },
        {
            image: 'https://m.media-amazon.com/images/I/81uzT1EYOSL._AC_SY200_.jpg',
        },
        {
            image: 'https://m.media-amazon.com/images/I/51gLnYN1W7L._AC_SY200_.jpg',
        },
        
    ]
  return (
    <>
      <div className="todaysDealsContainer text-nowrap">
        <div className="todayDealsHeading">
          <h5 className="mx-3">Popular items this season</h5>
        </div>
          
        <div className="table-responsive todayDealsProductList">
            
          {
            data.map((item, index) => {
              return (
                <span className="" key={index}>
                  <Link className="todayDealsProductItem">
                    <img className="dealsImage" src={item.image} alt="" />
                  </Link>
                </span>
              )
            })
          }
        </div>
        
          </div>
    </>
  )
}

export default PopularProducts