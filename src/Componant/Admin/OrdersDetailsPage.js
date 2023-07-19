import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSideBar from './AdminSideBar'
import OrdersDetails from './OrdersDetails'

function OrderDeailsPage() {
  return (
    <>
      <Container className='col'>
        <Row className='py-3'>
          <Col sm="3" xs="2" md="2">
            <AdminSideBar />
          </Col>

          <Col sm="9" xs="10" md="10">
            <OrdersDetails />
          </Col>

        </Row>
      </Container>
    </>
  )
}

export default OrderDeailsPage