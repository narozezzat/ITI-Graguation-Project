import { Col, Row } from 'react-bootstrap'
import ava from "../../assets/Images/ava1.png"
import { useState } from 'react';

function AddProducts() {

  const [img, setImg] = useState(ava)

  const onImageChange = (event) => {
    if(event.target.files && event.target.files[0])
      {
        setImg(URL.createObjectURL(event.target.files[0]))
      }
    }
  const onSelect = ()=> {

  }
  const onRemove = ()=> {

  }

  const options = [
    {name: "first category", id: 1},
    {name: "second category", id: 2},
  ]
  return (
    <>
      <Row className='justify-content-start'> 
        <div className='admin-content-text pb-4 mt-3'>Add New Product</div>
        <Col sm='8'>

          <div className='text-form pb-2'>Product Image</div>
          
          <div>
            <label for="upload-photo">
              <img
                src={img}
                alt="fzx"
                height="100px"
                width="100px"
                style={{ cursor: "pointer" }}
              />
            </label>
            <input
              type="file"
              name="photo"
              onChange={onImageChange}
              id="upload-photo"
            />
          </div>

          <input
            type='text'
            className='input-form d-block mt-3 px-3'
            placeholder='product name'
          />

          <textarea
            className='input-form-area p-2 mt-3'
            rows="4"
            cols="50"
            placeholder='product description'
          />

          <input 
            type='number'
            className='input-form d-block mt-3 px-3'
            placeholder='price before discount'
          />

          <input 
            type='number'
            className='input-form d-block mt-3 px-3'
            placeholder='product price'
          />

          {/* <select
            name='languages'
            id='lang'
            className='select input-form-area mt-3 px-2'>
            <option value="val">main category</option>
            <option value="val">first category</option>
            <option value="val2">second category</option>
            <option value="val2">three category</option>
            <option value="val2">four category</option>
          </select> */}

          {/* <select
            name='brand'
            id='brand'
            className='select input-form-area mt-3 px-2'>
            <option value="val">brand</option>
            <option value="val2">category first brand</option>
            <option value="val2">category second brand</option>
            <option value="val2">category four brand</option>

          </select> */}

        </Col>
      </Row>
      <Row className='mb-5'>
        <Col sm='8' className='d-flex justify-content-end'>
          <button className='btn-save d-inline mt-2'>Save</button>
        </Col>
      </Row>
    </>
  )
}

export default AddProducts