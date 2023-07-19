import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AddProducts from './AddProducts'
import AdminSideBar from './AdminSideBar'

const AdminAddProductsPage = () => {
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                    <AddProducts />
                </Col>
            </Row>
        </Container>
    )
}

export default AdminAddProductsPage