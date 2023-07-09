import axios from "axios"
import { Link } from "react-router-dom";

import { useEffect, useState } from "react"
import BaseURL from "../BaseURL.js";

export default function Cart(){
    const [ cart, setCart]=useState([])

    const token = document.cookie.split(';').find(cookie => cookie.startsWith('token')).split('=')[1];

    const fetchAxios = async ()=>{
        const response = await BaseURL.get('api/cart',
        {
            headers: {
            'Authorization': `Bearer ${token}`
            }
        })
        // console.log(response.data.data.cartItems.forEach(item => {
        //     item
        // }))
    }

    const getSpacifcProduct = async ()=>{
        const response = await BaseURL.get(`/api/products`,
        {
            headers: {
            'Authorization': `Bearer ${token}`
            }
        })
        setCart(response.data.data)
    }

    useEffect(()=>{
        fetchAxios();
        getSpacifcProduct()
    },[])



    return(
        <>
        <div className="d-flex justify-content-around ">
            <div className="fs-4 fw-bold mb-3">Shopping Cart</div>
            <div className=" mb-3">
                <div className="fs-5">Subtotal (lenght): <span className="fw-bold">EGP 170.00</span></div>
                {/* <button className="btn btn-warning w-100" >Proceed to Buy</button> */}
                <Link className="btn btn-warning w-100"  to="/PaymentPage"> Proceed to Buy </Link>

            </div>
        </div>

        <hr className="mt-0"/>
        {/* {
            cart.map((item,index)=>{
                return(
                    <>
                        <div className="row m-0" key={item.id} id={item.id}> 
                            <div className="col-lg-2 col-md-2 d-flex">
                                <sup className=" fw-bold">{index+1}</sup>
                                <img className="w-100" src={item.images[0]} alt=""/>
                            </div>

                            <div className="col-lg-9 col-md-8">
                                <h6>{item.description}</h6>
                                <pre className="text-success"> {item.stock} in stock</pre>
                                <div>
                                    <span>
                                        <a className="btn btn-danger" href="#1" >-</a>
                                        <span className="mx-2">1</span>
                                        <a className="btn btn-success" href="#1">+</a>
                                    </span>

                                    <a className="ms-3 border-start boeder-black ps-2" href="#1" style={{textDecoration:"none"}}>delete</a>

                                </div>
                            </div>
                            <span className="col-lg-1 col-md-2 fw-bold fs-5">EGP : {item.price}</span>
                        </div>
                        <hr/>
                    </>
                )
            })
        } */}



        <h4 className="text-end">Total : total Price EGP</h4>




                {/* <table className="table table-bordered">
                <thead className="text-center">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Prodact description</th>
                    <th scope="col">image</th>
                    <th scope="col">Prodact Name</th>
                    <th scope="col">Price </th>
                    <th scope="col">Quantity</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody >

                        {
                            cart.map((item,index)=>{
                                return(
                                <tr key={item.id}>
                                    <td >{index}</td>
                                    <td >{item.description}</td>
                                    <td >
                                        <img src={item.images[0]} alt="" className="w-100"/>
                                    </td>
                                    <td >{item.title}</td>
                                    <td>{item.price}</td>
                                    <td className="text-center">
                                        <a className="btn btn-danger" href="#1" >-</a>
                                        <span className="mx-2">qun</span>
                                        <a className="btn btn-success" href="#1">+</a>
                                    </td>
                                    <td className="text-center btn fw-bold text-danger" >Remove</td>
                                </tr>
                                )
                            })
                        }
                </tbody>
                </table>
        */}

        </>
    )
}