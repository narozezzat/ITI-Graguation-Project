import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react"
import BaseURL from "../BaseURL.js";
import { AllQun } from "../context/QunForCart.js";

export default function Cart(){
    const [cart , setCart]= useState([])
    const {qun , setQun} = useContext(AllQun)

    const token = localStorage.getItem("token");

    console.log(cart)
    if(cart.totalCartPrice){
        setQun(cart.totalCartPrice)
    }

    // console.log(cart.cartItems[0].quantity)
    // console.log((cart.cartItems).length)

    const getProductFromCart = async ()=>{
        try {
            const response = await BaseURL.get('api/cart',
            {
                headers: {
                'Authorization': `Bearer ${token}`
                }
            }) 
            // console.log(response.data.data)
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
                <div className="fs-5">Subtotal (  ): <span className="fw-bold">EGP {cart.totalCartPrice ===undefined ? "0" : cart.totalCartPrice} </span></div>
                <Link className="btn btn-warning w-100"  to="/PaymentPage"> Proceed to Buy </Link>
                {/* {(cart.cartItems).length} */}
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
                                        <span className="mx-2">{item.quantity}</span>
                                        <a className="btn btn-success" href="#1">+</a>
                                    </span>

                                    <a className="ms-3 border-start boeder-black ps-2" href="#1" style={{textDecoration:"none"}}>delete</a>

                                </div>
                            </div>
                            <span className="col-lg-1 col-md-2 fw-bold fs-5">EGP : {item.product.price - item.product.discount}</span>
                        </div>
                        <hr/>
                    </>
                )
            })
        } */}
        
        <h4 className="text-end">Total : {cart.totalCartPrice ===undefined ? "0" : cart.totalCartPrice} EGP</h4>

        </>
    )
}