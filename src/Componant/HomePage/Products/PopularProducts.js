import React from 'react'
import { Link } from 'react-router-dom'
import "../Deals/Deals.css"
import img1 from '../../../assets/Images/img1.jpg'
import img2 from '../../../assets/Images/img2.jpg'
import img3 from '../../../assets/Images/img3.jpg'
import img4 from '../../../assets/Images/img4.jpg'
import img5 from '../../../assets/Images/img5.jpg'
import img6 from '../../../assets/Images/img6.jpg'
import img7 from '../../../assets/Images/img7.jpg'

function PopularProducts() {
    const data = [
        {
            image: img1,
        },
        {
            image: img2,
        },
        {
            image: img3,
        },
        {
            image: img4,
        },
        {
            image: img5,
        },
        {
            image: img6,
        },
        {
            image: img7,
        },
        {
            image: img1,
        },
        {
            image: img2,
        },
    ]

    // console.log(data[0])
  return (
    <>
      <div className="todaysDealsContainer text-nowrap">
        <div className="todayDealsHeading">
          <h5 className="mx-3">Popular items this season</h5>
        </div>
          
        <div className="table-responsive todayDealsProductList mx-3">
            
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