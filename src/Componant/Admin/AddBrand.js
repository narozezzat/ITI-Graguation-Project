import React from 'react'
import { Col, Row } from 'react-bootstrap'
import "./Style.css"

function AddBrand() {
  return (
    <div>
        <Row className='justify-content-start'>
            <div className='admin-content-text pb-4'>Add new brand</div>
            <Col sm='8'>
                <div className='text-form pb-2'>Brand Image</div>
                <img scr="" alt='' height="100px" width="120px" />
                <input
                    type='text'
                    className='input-form d-block mt-3 px-3 border border-2'
                    placeholder='brand name'
                />
            </Col>
        </Row>
        <Row>
            <Col sm='8' className='d-flex justify-content-end'>
                <button className='btn-save d-inline mt-2'>save edit</button>
            </Col>
        </Row>
    </div>
  )
}

export default AddBrand