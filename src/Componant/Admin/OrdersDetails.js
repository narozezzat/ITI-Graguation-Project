import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useLocation } from 'react-router';

function OrdersDetails() {
    
    const location = useLocation()
    const singleProduct = location.state.item ; 
    console.log(singleProduct)
    return (
    <div>
        <h4 className='my-4 pro-text text-center'>Order Details</h4>
        
        <Row className='justify-content-center mt-4 user-data'>

            <Col className='d-flex' xs='12'>
                <div className='admin-content-text py-2'>User Details</div>
            </Col>

            <Col xs='12' className='d-flex'>
                <div style={{color: "#555550", fontFamily: "Almarai", fontSize:"16px"}}>Name:</div>
                <div style={{color: '#979797', fontFamily: "Almarai", fontSize: "16px"}} className='mx-2'>{singleProduct.user.name}</div>
            </Col>

            <Col xs='12' className='d-flex mb-2'>
                <div style={{color: "#555550", fontFamily: "Almarai", fontSize: "16px"}}>Email:</div>
                <div style={{color: "#979797", fontFamily: "Almarai", fontSize: "16px"}} className='mx-2'>{singleProduct.user.email}</div>
            </Col>

            <div className=' d-inline px-4 border text-center pt-2 mb-3 pb-2'>Total {singleProduct.totalOrderPrice} EGY</div>
            
            <div>
                {
                singleProduct.cartItems.map((item,index)=>{
                    return(
                        <>
                            <div className="row m-0" key={index} id={item.product.id}> 
                                <div className="col-lg-2 col-md-2 d-flex">
                                    <sup className=" fw-bold">{index+1}</sup>
                                    <img className="w-100" src={item.product.imageCover} alt=""/>
                                </div>

                                <div className="col-lg-9 col-md-8">
                                    <h6>Product Name : {item.product.title}</h6>
                                    <div>
                                        <span>
                                            <span className="mx-2">Product Quantity : {item.quantity}</span>
                                        </span>

                                    </div>
                                </div>
                                <span className="col-lg-1 col-md-2 fw-bold fs-5">EGP : {item.price }</span>

                            </div>
                            
                            <hr/>
                        </>
                    )
                })
                }
            </div>

            <div className='d-flex mt-2 justify-content-center pt-2 mb-3'>
                <select
                    name= "languages"
                    id= 'lang'
                    className='select input-form-area mt-1 text-center w-50'>
                    <option value="va1">order status</option>
                    <option value="va1">underway</option>
                    <option value="va1">is completed</option>
                    <option value="va1">cancel</option>
                </select>
                <button className='btn-a px-3 d-inline mx-2'>save</button>
            </div>
        </Row>
    </div>
    )
}

export default OrdersDetails