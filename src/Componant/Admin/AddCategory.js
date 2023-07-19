import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import "./Style.css"
import ava from "../../assets/Images/ava1.png"
import axios from 'axios'

function AddCategory() {
    
    const [img, setImg] = useState(ava)
    const [name, setName] = useState('')

    const onImageChange = (event) => {
        if(event.target.files && event.target.files[0])
        {
            setImg(URL.createObjectURL(event.target.files[0]))
        }
    }

    const handleSubmit=(event)=> {
        event.preventDefaulat();

        const response = axios.post("https://amazon-project.onrender.com"
        ,{name: "naroz", age: "25"}
        )
    }

  return (
    <div>
        <Row className='justify-content-start'>
            <div className='admin-content-text pb-4'>Add new category</div>
            <Col sm='8'>
                <div className='text-form pb-2'>Category Image</div>
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
                    onChange={(e)=> setName(e.target.value)}
                    value={name}
                    type='text'
                    className='input-form d-block mt-3 px-3 border border-2'
                    placeholder='category name'
                />
            </Col>
        </Row>
        <Row>
            <Col sm='8' className='d-flex justify-content-end'>
                <button onClick={handleSubmit} className='btn-save d-inline mt-2'>save edit</button>
            </Col>
        </Row>
    </div>
  )
}

export default AddCategory