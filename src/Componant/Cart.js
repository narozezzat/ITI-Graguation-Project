import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react"
import BaseURL from "../BaseURL.js";
import { CartContext } from "../context/QunForCart.js";

export default function Cart(){
    const [cart , setCart]= useState([])
    const [TotalPrice , setTotalPrice]= useState([])
    const {cartNum , setCartNum} = useContext(CartContext)

    const token = localStorage.getItem("token");
    // console.log(cart)
    // console.log(TotalPrice)

    if(cart.totalCartPrice){
        setCartNum(cart.totalCartPrice)
    }

    const getProductFromCart = async ()=>{
        try {
            const response = await BaseURL.get('api/cart',
            {
                headers: {
                'Authorization': `Bearer ${token}`
                }
            }) 
            // console.log(response.data.data.cartItems)
            setCart(response.data.data.cartItems)
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    const getTotalPrice = async ()=>{
        try {
            const response = await BaseURL.get('api/cart',
            {
                headers: {
                'Authorization': `Bearer ${token}`
                }
            }) 
            // console.log(response.data.data.cartItems)
            setTotalPrice(response.data.data.totalCartPrice)
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    useEffect(()=>{
        getProductFromCart();
        getTotalPrice()
    },[])

    const deleteProduct = async (id)=> {
        console.log(id)
        try {
            const response = await BaseURL.delete(`api/cart/${id}`,
            {
                headers: {
                'Authorization': `Bearer ${token}`
                }
            })
            console.log(response)
            getProductFromCart()
        } catch (error) {
            console.log(error.response.data.message)
            
        }
    }

    return(
        <>
        <div className="d-flex justify-content-around ">
            <div className="fs-4 fw-bold mb-3">Shopping Cart</div>
            <div className=" mb-3">
                <div className="fs-5">Subtotal (  ): <span className="fw-bold">EGP {TotalPrice === undefined ? "0" : TotalPrice} </span></div>
                <Link className="btn btn-warning w-100"  to="/PaymentPage"> Proceed to Buy </Link>
                {/* {(cart.cartItems).length} */}
            </div>
        </div>

        <hr className="mt-0"/>
        {
            cart.map((item,index)=>{
                return(
                    <>
                        <div className="row m-0" key={index} id={item.product.id}> 
                            <div className="col-lg-2 col-md-2 d-flex">
                                <sup className=" fw-bold">{index+1}</sup>
                                <img className="w-100" src={item.product.imageCover} alt=""/>
                            </div>

                            <div className="col-lg-9 col-md-8">
                                <h6>{item.product.describtion}</h6>
                                <pre className="text-success"> {item.product.stock} in stock</pre>
                                <div>
                                    <span>
                                        <button onClick={() => setCartNum(cartNum - 1)} className="btn btn-danger" >-</button>
                                        <span className="mx-2">{item.quantity}</span>
                                        <button onClick={() => setCartNum(cartNum + 1)} className="btn btn-success" >+</button>
                                    </span>

                                    <a className="ms-3 border-start boeder-black ps-2" href="#1" style={{textDecoration:"none"}} onClick={() => deleteProduct(item.product.id)}>delete</a>

                                </div>
                            </div>
                            <span className="col-lg-1 col-md-2 fw-bold fs-5">EGP : {item.product.price - item.product.discount}</span>
                        </div>
                        <hr/>
                    </>
                )
            })
        }
        
        <h4 className="text-end">Total : {TotalPrice ===undefined ? "0" : TotalPrice} EGP</h4>

        </>
    )
}