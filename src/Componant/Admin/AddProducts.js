import { Col, Row } from 'react-bootstrap'
import ava from "../../assets/Images/ava1.png"
import { useState } from 'react';
import { useForm } from 'react-hook-form';

function AddProducts() {
  const { register, handleSubmit,formState:{errors} } = useForm();

  const onSubmit = async data=> {
    console.log(data)
    // const dataToApi = {
    //     name:data.name,
    //     image:data.image[0].name
    // }
    // console.log(dataToApi)

    // try {
    //     const response =await  BaseURL.post(`https://amazon-project.onrender.com/api/category`, dataToApi ,{ headers:{'Authorization': `Bearer ${token}`}})
    //     console.log(response.data.data)

    // } catch (error) {
    //     alert(error.response.data.message)
    // }

}


  return (
    <>
      <Row className='justify-content-start'> 
        <div className='admin-content-text pb-4 mt-3'>Add New Product</div>
        <Col sm='8'>
          <form onSubmit={handleSubmit(onSubmit)} >
              <div className="mb-3 w-100">
                  <label  className="form-label"><b>Category Name</b></label>
                  <input type="text" 
                  className="form-control w-100" 
                  {...register('name',{required:true , pattern:/[a-zA-Z]{3,}/})}
                  placeholder="Category Name"/>
                  <div id="emailHelp" className="form-text text-danger">
                  <small className="form-text text-danger" >
                      {errors.name?.type === 'required' && "category name is required"}
                      {errors.name?.type === 'pattern' && "category name must have at lest 3 letters"}
                  </small>
                  </div>
              </div>

              <div className="mb-3 w-100">
                  <label className="form-label"><b>Category Image</b></label>
                  <input type="file" 
                  accept="image/jpeg,image/png,image/gif,image/webp,image/apng"
                  className="form-control" 
                  {...register('image',{required: true })} />
                  <div id="emailHelp" className="form-text text-danger">
                  <small className="form-text text-danger">
                      {errors.image?.type ==='required' && "category image is required"} 
                  </small>
                  </div>
              </div>

              <div className="mb-3 w-100">
                  <label  className="form-label"><b>Product Name</b></label>
                  <input type="text" 
                  className="form-control w-100" 
                  {...register('title',{required:true , pattern:/[a-zA-Z0-9\s]{3,}/})}
                  placeholder="Product Name"/>
                  <div id="emailHelp" className="form-text text-danger">
                  <small className="form-text text-danger" >
                      {errors.title?.type === 'required' && "category name is required"}
                      {errors.title?.type === 'pattern' && "category name must have at lest 3 letters"}
                  </small>
                  </div>
              </div>


              <Col sm='8' className='d-flex justify-content-end'>
                  <button  className='btn-save d-inline mt-2'>save edit</button>
              </Col>
          </form>
        </Col>
      </Row>

    </>
  )
}

export default AddProducts