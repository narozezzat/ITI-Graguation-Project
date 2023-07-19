import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import landscape from '../../assets/Images/img1.jpg'
import "./Style.css"

function AdminAllProductsCard() {


 return (
    <Col xs="12" md="5" lg="4" className='d-flex'>
        <Card 
            className='my-2'
            style={{ width: "100%", height: "350px", borderRadius: "8px", backgroundColor: "#ffffff" }}>
            <Row className='d-flex justify-content-center px-2'>
                <Col className='d-flex justify-content-between'>
                    <div className='d-inline item-delete-edit'>delete</div>
                    <div className='d-inline item-delete-edit'>edit</div>
                </Col>
            </Row>  
            <Link to="/products/:id0" style={{textDecoration: "none"}}>
                <Card.Img style={{height:"228px", width: "100%"}} src={landscape} />
                <Card.Body>
                    <Card.Title>
                        <div className='card-title'>
                            iphone {""}
                        </div>
                    </Card.Title>
                    <Card.Text>
                        <div  className='d-flex justify-content-between'>
                            <div className='card-rate'>4</div>
                            <div className='d-flex'>
                                <div className='card-currency mx-1'>Egy</div>
                                <div className='card-price'>400</div>
                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Link>
        </Card>

    </Col>
  )
}

export default AdminAllProductsCard