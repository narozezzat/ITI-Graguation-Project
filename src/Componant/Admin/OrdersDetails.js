import React from 'react'
import { Col, Row } from 'react-bootstrap'

function OrdersDetails() {
  return (
    <div>
        <div className='my-4 pro-text'>Order Details No#123</div>
        {/* Details */}

        <Row className='justify-content-center mt-4 user-data'>
            <Col className='d-flex' xs='12'>
                <div className='admin-content-text py-2'>User Details</div>
            </Col>
            <Col xs='12' className='d-flex'>
                <div style={{color: "#555550", fontFamily: "Almarai", fontSize:"16px"}}>Name:</div>
                <div style={{color: '#979797', fontFamily: "Almarai", fontSize: "16px"}} className='mx-2'>Naroz Ezzat</div>
                <div style={{color: '#555550', fontFamily: "Almarai", fontSize: "16px"}}>Phone No:</div>
                <div style={{color: '#979797', fontFamily: "Almarai", fontSize: "16px"}} className='mx-2'>0021313432423</div>
            </Col>

            <Col xs='12' className='d-flex'>
                <div style={{color: "#555550", fontFamily: "Almarai", fontSize: "16px"}}>Email:</div>
                <div style={{color: "#979797", fontFamily: "Almarai", fontSize: "16px"}} className='mx-2'>Naroz@gmail.com</div>
            </Col>

            <div className=' d-inline px-4 border text-center pt-2'>Total 49 EGY</div>
            <div className='d-flex mt-2 justify-content-center pt-2'>
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