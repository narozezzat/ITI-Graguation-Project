import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react"
import BaseURL from "../BaseURL.js";
import { CartContext } from "../context/QunForCart.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Cart(){
    const navigate = useNavigate();
    const [cart , setCart]= useState([])
    const [TotalPrice , setTotalPrice]= useState([])
    const [cartId , setCartId]= useState([])
    const {cartNum , setCartNum} = useContext(CartContext)
    const token = localStorage.getItem("token");

    if(cart.totalCartPrice){
        setCartNum(cart.totalCartPrice)
    }

    const getProductFromCart = async ()=>{
        try {
            const response = await BaseURL.get('/api/cart',
            {
                headers: {
                'Authorization': `Bearer ${token}`
                }
            }) 
            // console.log(response.data.data.cartItems)
            setCart(response.data.data.cartItems)
            // console.log(response.data.data._id)
            setCartId(response.data.data._id)
        } catch (error) {
            // console.log(error.response.data.message)
            toast.error(' Please login To Know Your Cart ', {
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
            setCartNum(response.data.data.totalCartQuantity || 0)
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    useEffect(()=>{
        getProductFromCart();
        getTotalPrice()
    },[cartNum])

    const deleteProduct = async (id)=> {
        // console.log(id)
        try {
            const response = await BaseURL.delete(`/api/cart/${id}`,{ headers:{'Authorization': `Bearer ${token}`}})
            // console.log(response)
            toast.success('delete product Successfully :( !! ', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });

        } catch (error) {
            // alert(error.response.data.message)
            toast.error(error.response.data.message, {
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
        
        getProductFromCart();
        getTotalPrice();
    }

    const addQun= async (id)=>{
        // console.log(id)

        try {
            const response = await BaseURL.post('/api/cart',{productId: id},{ headers:{'Authorization': `Bearer ${token}`}})
            // console.log(response)
            toast.success('added Quantity Successfully :)', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        } catch (error) {
            // alert(error.response.data.message)
            toast.error(error.response.data.message, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                })
        }

        setCartNum(cartNum + 1)
    }

    const removeQun= async (id)=>{
        // console.log({token})
        try {
            const response = await BaseURL.put(`/api/cart/${id}`,null,{ headers:{'Authorization': `Bearer ${token}`}})
            // console.log(response)
            toast.success('delete Quantity Successfully :( !! why ?', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        } catch (error) {
            // alert(error.response.data.message)
            toast.error(error.response.data.message, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                })
        }

        // setCartNum(cartNum - 1)

        getProductFromCart();
        getTotalPrice();
    }

    const proceedToBuy = async()=>{
        try {
            const response = await BaseURL.get(`/api/orders/checkout-session/${cartId}` ,{ headers:{'Authorization': `Bearer ${token}`}})
            // console.log(response.data.session.url)
            window.location.href = response.data.session.url
        } catch (error) {
            // console.log(error.response.data.message)
            toast.error(error.response.data.message, {
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
        <div className="d-flex justify-content-around ">
            <div className="fs-4 fw-bold my-3">Shopping Cart</div>
            <div className="my-3">
                
                <div className="fs-5"> Subtotal ( {cart.length} ): <span className="fw-bold">EGP: {cart ? TotalPrice : "0"} </span></div> 
                <button className="btn btn-warning w-100" onClick={()=>proceedToBuy()} > Proceed To Buy </button>
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
                                        <button onClick={() => removeQun(item.product._id)} className="btn btn-danger" >-</button>
                                        <span className="mx-2">{item.quantity}</span>
                                        <button onClick={() => addQun(item.product._id)} className="btn btn-success" >+</button>
                                    </span>

                                    <a className="ms-3 border-start boeder-black ps-2" href="#1" style={{textDecoration:"none"}} onClick={() => deleteProduct(item.product._id)}>delete</a>

                                </div>
                            </div>
                            <span className="col-lg-1 col-md-2 fw-bold fs-5">EGP : {item.product.price - item.product.discount}</span>
                        </div>
                        <hr/>
                    </>
                )
            })
        }
        
        <h4 className="text-end">Total : {TotalPrice ? TotalPrice : "0"} EGP</h4>
        <ToastContainer/>

        </>
    )
}