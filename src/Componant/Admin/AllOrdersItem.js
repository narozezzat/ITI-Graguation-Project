import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import landscape from "../../assets/Images/img8.jpg"
import "./Style.css"

function AllOrdersItem() {
  return (
    <div className=''> 
        <Col sm="12">
        <Link 
            to="/admin/orders/123"
            className='cart-item-body my-2 px-1 d-flex'
            style={{textDecoration: "none"}}>
            <img className='rounded-3' width="160px" height="197px" src={landscape} alt="" />
            <div className='w-100'>
                <Row className='justify-content-between mx-1'>
                    <Col sm="12" className='d-flex flex-row  justify-content-between'>
                        <div className='d-inline pt-2 cat-text'>Number Order #123</div>
                        <div className='d-inline pt-2 cat-text del-text'>delete</div>
                    </Col>
                </Row>
                <Row className='justify-content-center mt-2 mx-1'>
                    <Col sm='12' className='d-flex flex-row justify-content-start'>
                        <div className='d-inline cat-title'>
                            lorem lorem lorem lorem lorem lorem lorem lorem   
                        </div>
                        <div className='d-inline cat-rate'>4.5</div>
                    </Col>
                </Row>
                <Row>
                    <Col sm='12' className='d-flex mx-3'>
                        <div className='mt-2 cat-text d-inline'>Marka :</div>
                        <div className='mt-1 brand-text  d-inline mx-1'>iphone</div>
                        <div className='color mt-1 border' style={{backgroundColor: '#E52c2c'}}></div>
                    </Col>
                </Row>
                <Row className='justify-content-between mx-1'>
                    <Col sm='12' className='d-flex flex-row justify-content-between'>
                        <div className='d-inline pt-2 d-flex'>
                            <div className='cat-text pt-1 d-inline '>Quantity</div>
                            <input 
                                className='mx-2 mt-1'
                                type='number'
                                style={{width: "20px", height: "25px"}}
                            />
                            <div className='d-inline pt-1 brand-text'>200 EGY</div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Link>

    </Col>
    </div>
  )
}

export default AllOrdersItem