import { useEffect, useState } from "react"
import BaseURL from "../BaseURL.js"
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router";

// Orders.js
export default function Orders(){
    const token = localStorage.getItem("token");
    const [allOrders , setAllOrders]= useState([])
    const navigate = useNavigate();

    const getProductFromCart = async ()=>{
        try {
            const response = await BaseURL.get('/api/orders',
            {
                headers: {
                'Authorization': `Bearer ${token}`
                }
            }) 
            console.log(response.data.data)
            setAllOrders(response.data.data)
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    useEffect(()=>{
        getProductFromCart();
    },[])
    
    const showDetalisItem = ((item) => {
        // navigate(`/Admin/Orders/${item._id}`, {
        //     state: {
        //         item
        //     }
        // })
    })
    
    return(
        <>
            <div className="row mx-auto pt-3 ">
                {
                allOrders.map((item , index)=>{
                    return(
                        
                            <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3 ">
                                <hr/>
                                <div className="" >
                                    <img src={item.cartItems[0].product.imageCover} className="card-img-top " style={{"height": "15rem"}}
                                    alt="" 
                                    onClick={() => showDetalisItem(item)}/>
                                    <div className="card-body">
                                        <div className="">
                                            <p className="card-text m-0">Order num {index + 1}</p>
                                            
                                            <p className="card-text m-0">
                                                <sup className="" style={{fontSize:"12px"}}> EGP </sup> 
                                                <span className="fs-4 fw-semibold">{item.totalOrderPrice}</span>
                                                <sup className="" style={{fontSize:"12px"}}> 00 </sup> 
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                    
                    )})
                }
            </div>
        </>
    )
    
}