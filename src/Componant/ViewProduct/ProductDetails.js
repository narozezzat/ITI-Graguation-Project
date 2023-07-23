import BaseURL from "../../BaseURL.js";
import StarsRating from "../Shared/StarsRating"
import { useContext, useState } from "react";
import { CartContext } from "../../context/QunForCart.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProductDetails(props) {
    const item = props.singleProduct.singleProduct
    const {cartNum , setCartNum} = useContext(CartContext)
    const token = localStorage.getItem("token");


    const AddProduct= async (id)=>{

        try {
            const response = await BaseURL.post('/api/cart',{productId: id},{ headers:{'Authorization': `Bearer ${token}`}})
            // console.log(response)
            toast.success(' Added Successfully:) ', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
                setCartNum(cartNum + 1)
        } catch (error) {
            // setError(error.response.data.message)
            toast.error('You are not login :( ', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }

    }

    return(
        <>
            <div className="row me-0 mt-5 mb-3">

                <div className="col-11 col-lg-5 col-md-8 mx-auto mb-2 mb-lg-0 left border row">

                    {/* <ul className="col-2">
                        {
                            item.imageCover.map((img , index) => {
                                return(
                                        <li key={index} className="mb-2">
                                            <img className="w-100 rounded-1" src={img} alt="" />
                                        </li>
                                    )
                                })
                        }

                    </ul> */}

                    <img className="col-10 rounded-5" src={item.imageCover} alt="" />
                
                </div>

                <div className="col-11 col-lg-5 col-md-7 mx-auto mb-2 mb-lg-0 mb-md-0 center border">
                    <div className="ms-2">   
                        <p className="mb-1 p-2 fw-semibold fs-5">{item.title}</p>
                        {/* <a href="#1">Vist ( Store name ) Store</a> */}
                        <StarsRating Rating={item.ratingAverage} />
                    </div>

                    <hr/>

                    <div className="ms-2">
                        <span className="text-danger me-2 fs-5"> {item.discount === 0? " " :"-" + item.discount } </span>
                        <span>
                            <sup className="" style={{fontSize:"12px"}}> EGP </sup> 
                            <span className="fs-4 fw-semibold">{item.price - item.discount}</span>
                            <sup className="" style={{fontSize:"12px"}}> 00 </sup> 
                        </span>

                        <div>
                            <span>List Price : <del className="">EGP {item.price} .00</del> </span>
                        </div>

                    </div>

                    <hr/>

                    <div className="ms-2">
                        <span className="fw-semibold">About this item</span>
                        <div>
                            {item.describtion}
                        </div>
                    </div>

                </div>

                <div className="col-10 col-lg-2 col-md-4 mx-auto right border py-2">
                    <div>
                        <span>
                            <sup className="" style={{fontSize:"12px"}}> EGP </sup> 
                            <span className="fs-4 fw-semibold">{item.price}</span>
                            <sup className="" style={{fontSize:"12px"}}> 00 </sup> 

                        </span>

                        <div className="dropdown">
                            <a href="#1">FREE Returns</a>

                        </div>

                        <div style={{fontSize:"13px"}} className="my-2 ps-2">
                        Deliver to Mohamed - Giza ‌
                        </div>

                        <div className="mb-2">
                            <div className="text-success fs-5">In Stock</div>
                            <span>Qty 2</span>
                        </div>

                        <button className="btn btn-warning mb-1 col-12" onClick={()=>AddProduct(item._id)}>
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
        <ToastContainer/>

        </>
    )
    
}
