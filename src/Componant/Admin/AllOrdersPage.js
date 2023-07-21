import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSideBar from './AdminSideBar'
import AllOrders from './AllOrders'

function AllOrdersPage() {
  return (
    <>
      <Container className='col'>
        <AllOrders />
      </Container>
    </>
  )
}

export default AllOrdersPage