import React from 'react'
import { Row } from 'react-bootstrap'
import AllOrdersItem from './AllOrdersItem'

function AllOrders() {
  return (
    <div>
        <div className='my-4 pro-text'>Manage all Orders</div>
        <Row className='justify-content-start'>
            <AllOrdersItem />
            <AllOrdersItem />
            <AllOrdersItem />
        </Row>
    </div>
  )
}

export default AllOrders