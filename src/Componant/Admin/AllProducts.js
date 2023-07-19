import React from 'react'
import AdminAllProductsCard from './AllProductsCard'
import { Row } from 'react-bootstrap'

function AdminAllProducts() {
  return (
    <div>
        <div className='my-4 pro-text'>Manage all products</div>
        <Row className='justify-content-start'>
            <AdminAllProductsCard />
            <AdminAllProductsCard />
            <AdminAllProductsCard />
            <AdminAllProductsCard />
            <AdminAllProductsCard />
            <AdminAllProductsCard />
            <AdminAllProductsCard />
        </Row>
    </div>
  )
}

export default AdminAllProducts