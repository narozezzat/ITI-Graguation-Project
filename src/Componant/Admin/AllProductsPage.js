import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSideBar from './AdminSideBar'
import AdminAllProducts from './AllProducts'

function AdminAllProductsPage() {
  return (
    <>
      <Container className='col'>
        <Row className='py-3'>
          <Col sm="3" xs="2" md="2">
            <AdminSideBar />
          </Col>

          <Col sm="9" xs="10" md="10">
            <AdminAllProducts />
          </Col>

        </Row>
      </Container>
    </>
  )
}

export default AdminAllProductsPage