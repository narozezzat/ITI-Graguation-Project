import axios from "axios"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"
import BaseURL from "../BaseURL.js";

export default function Cart(){
    const [cart , setCart]= useState()
    const token = localStorage.getItem("token");
    console.log(cart)
    const getProductFromCart = async ()=>{
        try {
            const response = await BaseURL.get('api/cart',
            {
                headers: {
                'Authorization': `Bearer ${token}`
                }
            })
            console.log(response.data.data)
            setCart(response.data.data)
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(()=>{
        getProductFromCart();
    },[])



    return(
        <>
        <div className="d-flex justify-content-around ">
            <div className="fs-4 fw-bold mb-3">Shopping Cart</div>
            <div className=" mb-3">
                {/* <div className="fs-5">Subtotal (lenght): <span className="fw-bold">EGP {cart.totalCartPrice} </span></div> */}
                {/* <button className="btn btn-warning w-100" >Proceed to Buy</button> */}
                <Link className="btn btn-warning w-100"  to="/PaymentPage"> Proceed to Buy </Link>

            </div>
        </div>

        <hr className="mt-0"/>
        {/* {
            cart.cartItems.map((item,index)=>{
                return(
                    <>
                        <div className="row m-0" key={item.product.id} id={item.product.id}> 
                            <div className="col-lg-2 col-md-2 d-flex">
                                <sup className=" fw-bold">{index+1}</sup>
                                <img className="w-100" src={item.product.imageCover} alt=""/>
                            </div>

                            <div className="col-lg-9 col-md-8">
                                <h6>{item.product.describtion}</h6>
                                <pre className="text-success"> {item.product.stock} in stock</pre>
                                <div>
                                    <span>
                                        <a className="btn btn-danger" href="#1" >-</a>
                                        <span className="mx-2">1</span>
                                        <a className="btn btn-success" href="#1">+</a>
                                    </span>

                                    <a className="ms-3 border-start boeder-black ps-2" href="#1" style={{textDecoration:"none"}}>delete</a>

                                </div>
                            </div>
                            <span className="col-lg-1 col-md-2 fw-bold fs-5">EGP : {item.product.price}</span>
                        </div>
                        <hr/>
                    </>
                )
            })
        } */}
        
        {/* <h4 className="text-end">Total :{cart.totalCartPrice} EGP</h4> */}

        </>
    )
}