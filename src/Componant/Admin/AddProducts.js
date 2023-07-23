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
                  <label  className="form-label"><b>category</b></label>
                  <input type="text" 
                  className="form-control w-100" 
                  {...register('category',{required:true , pattern:/[a-zA-Z]{3,}/})}
                  placeholder="category"/>
                  <div id="emailHelp" className="form-text text-danger">
                  <small className="form-text text-danger" >
                      {errors.category?.type === 'required' && "Product title is required"}
                      {errors.category?.type === 'pattern' && "Product title must have at lest 3 letters"}
                  </small>
                  </div>
              </div>

              <div className="mb-3 w-100">
                  <label  className="form-label"><b>Product title</b></label>
                  <input type="text" 
                  className="form-control w-100" 
                  {...register('title',{required:true , pattern:/[a-zA-Z]{3,}/})}
                  placeholder="Product Name"/>
                  <div id="emailHelp" className="form-text text-danger">
                  <small className="form-text text-danger" >
                      {errors.title?.type === 'required' && "Product title is required"}
                      {errors.title?.type === 'pattern' && "Product title must have at lest 3 letters"}
                  </small>
                  </div>
              </div>

              <div className="mb-3 w-100">
                  <label  className="form-label"><b>Product Description</b></label>
                  <input type="text" 
                  className="form-control w-100" 
                  {...register('description',{required:true , pattern:/[a-zA-Z0-9\s]{3,}/})}
                  placeholder="Product Description"/>
                  <div id="emailHelp" className="form-text text-danger">
                  <small className="form-text text-danger" >
                      {errors.description?.type === 'required' && "Product description is required"}
                      {errors.description?.type === 'pattern' && "Product description must have at lest 3 letters"}
                  </small>
                  </div>
              </div>

              <div className="mb-3 w-100">
                  <label  className="form-label"><b>Product price</b></label>
                  <input type="number" 
                  className="form-control w-100" 
                  {...register('price',{required:true ,min:1})}
                  placeholder="Product price"/>
                  <div id="emailHelp" className="form-text text-danger">
                  <small className="form-text text-danger" >
                      {errors.price?.type === 'required' && "Product price is required"}
                      {errors.price?.type === 'min' && "Product price at lest 1 EGP"}
                  </small>
                  </div>
              </div>

              <div className="mb-3 w-100">
                  <label  className="form-label"><b>Product discount</b></label>
                  <input type="number" 
                  className="form-control w-100" 
                  {...register('discount',{required:false })}
                  placeholder="Product discount"/>
                  <div id="emailHelp" className="form-text text-danger">
                  <small className="form-text text-danger" >
                      {errors.discount?.type === 'pattern' && "Product discount must have at lest 1 number"}
                  </small>
                  </div>
              </div>

              <div className="mb-3 w-100">
                  <label  className="form-label"><b>Product Stock</b></label>
                  <input type="number" 
                  className="form-control w-100" 
                  {...register('Stock',{required:true ,min:5 })}
                  placeholder="Product Stock"/>
                  <div id="emailHelp" className="form-text text-danger">
                  <small className="form-text text-danger" >
                      {errors.Stock?.type === 'required' && "Product Stock is required"}
                      {errors.Stock?.type === 'min' && "Product Stock must have at lest 5 pice"}
                  </small>
                  </div>
              </div>

              <div className="mb-3 w-100">
                  <label className="form-label"><b>Product Image</b></label>
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