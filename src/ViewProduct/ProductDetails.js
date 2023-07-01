// import axios from "axios"
// import { useEffect, useState } from "react"
// import { useLocation } from "react-router-dom";

export default function ProductDetails(props) {


    const item = props.singleProduct.singleProduct
    // console.log(item)


    return(
        <>
        <div className="row me-0 mt-5 mb-3">

            <div className="col-5  left border row">

                <ul className="col-2">
                    {
                        item.images.map((img , index) => {
                            return(
                                    <li key={index} className="mb-2">
                                        <img className="w-100 rounded-1" src={img} alt="" />
                                    </li>
                                )
                            })
                    }

                </ul>

                <img className="col-10 rounded-5" src={item.images[0]} alt="" />
            
            </div>

            <div className="col-5 center border">
                <div className="ms-2">   
                    <p className="mb-1 p-2 fw-semibold fs-5">{item.description}</p>
                    <p>Vist ( Store name ) Store</p>
                    <p>stars</p>
                </div>

                <hr/>

                <div className="ms-2">
                    <span className="text-danger me-2 fs-5"> -9% </span>
                    <span>
                        <sup className="" style={{fontSize:"12px"}}> EGP </sup> 
                        <span className="fs-4 fw-semibold">{item.price}</span>
                        <sup className="" style={{fontSize:"12px"}}> 00 </sup> 
                    </span>

                    <div>
                        <span>List Price : <del className="">EGP {item.price} .00</del> </span>
                    </div>

                </div>

                <hr/>

                <div className="ms-2">
                    <h3 className="text-center">data</h3>
                    <div>
                        <span className="fw-semibold">Color</span> : {item.brand}
                    </div>
                    <div>
                        <span className="fw-semibold">Brand</span> : {item.brand}
                    </div>
                    <div>
                        <span className="fw-semibold">Model</span> : {item.brand}
                    </div>
                </div>
                    
                <hr/>

                <div className="ms-2">
                    <span className="fw-semibold">About this item</span>
                    <ul>
                        <li>Talk from sunrise to sunset - Maximum standby battery life of up to 35 days </li>
                        <li>Talk from sunrise to sunset - Maximum standby battery life of up to 35 days and 15 hours talk time on a single charge</li>
                        <li>Talk from sunrise to sunset -  and 15 hours talk time on a single charge</li>
                    </ul>
                </div>

            </div>

            <div className="col-2  right border">
                <div>
                    <span>
                        <sup className="" style={{fontSize:"12px"}}> EGP </sup> 
                        <span className="fs-4 fw-semibold">{item.price}</span>
                        <sup className="" style={{fontSize:"12px"}}> 00 </sup> 

                    </span>

                    <div className="dropdown">
                        <a href="">FREE Returns</a>
                        {/* <div className="dropdown-content">
                            <p>Easy and Hassle Free Returns You can return this item for FREE within the allowed return period for any reason and without any shipping charges. The item must be returned in new and unused condition.</p>
                        </div> */}
                    </div>

                    <div style={{fontSize:"13px"}} className="my-2 ps-2">
                    Deliver to mina - Giza ‌
                    </div>

                    <div className="mb-2">
                        <div className="text-success fs-5">In Stock</div>
                        <span>Qty 2</span>
                    </div>

                    <button className="btn btn-warning mb-1 col-12">
                        Add To Cart 
                    </button>
                    <br/>
                    <button className="btn btn-warning col-12 mb-2">
                        Buy Now
                    </button>

                </div>

                <div>
                    <div>Payment : Choose way</div>
                    <div>Fulfilled by : Choose</div>
                    <div>Sold by : Mina Store</div>
                </div>
            </div>
        </div>
        </>
    )
    
}
