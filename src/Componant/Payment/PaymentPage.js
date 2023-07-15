
// import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import BaseURL from "../../BaseURL.js";
import { useLocation } from "react-router-dom";

export default function PaymentPage(){
    const location = useLocation()
    const cartId = location.state.cartId; 
    console.log(cartId)

    const token = localStorage.getItem("token");

    const { register, handleSubmit,formState:{errors} } = useForm();

    const onSubmit =async data => {
        console.log(data)
        try {
            
            // const sendDataAdress = await BaseURL.post(`/api/orders/${cartId}`, data ,{ headers:{'Authorization': `Bearer ${token}`}})
            // console.log(sendDataAdress)

            const response = await BaseURL.get(`/api/orders/checkout-session/${cartId}`  ,{ headers:{'Authorization': `Bearer ${token}`}})
            console.log(response.data.session.url)

            // navigate(`response.data.session.url`)
            window.location.href = response.data.session.url

        } catch (error) {
            alert(error.response.data.message)
        }
    }

    return(
        <div className="">
            <div className="text-center text-black fw-semibold py-3 fs-4 ">
                Checkout (<span className="fw-normal" style={{color:"#007185"}}>2 items</span>)
            </div>

            <hr className="m-0"/>

            <div className="container">
                <span className="text-danger fw-bold fs-5 ">1 Enter a new shipping address</span>

                <div className="card-body container">
                    <form id='form' onSubmit={handleSubmit(onSubmit)} className="form-group row col-12 mx-auto mx-md-0 col-md-6 border border-black mt-2 p-2 rounded-2 ">
                        <div className="mb-3">
                            <label  className="form-label"><b>Mobile Number</b></label>
                            <input type="tel" className="form-control" 
                            placeholder="Enter Your Mobile Number"
                            {...register('phone',{required:true,pattern:/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{5})(?: *x(\d+))?\s*$/})}
                            />
                            <div id="emailHelp" className="form-text text-danger" >
                            <small className="form-text text-danger" >
                                {errors.phone?.type === 'required' && "Phone is Required"}  
                                {errors.phone?.type === 'pattern' && "Invalid Mobile Nomber"}
                            </small>
                            </div>
                        </div>

                        {/* <div className="mb-3">
                            <label  className="form-label"><b>Bulding Number</b></label>
                            <input type="text" 
                            className="form-control" 
                            {...register('buldingNumber',{required:true , pattern:/[0-9A-Za-z\s]{1,5}/})}
                            placeholder="Bulding Number"/>
                            <div id="emailHelp" className="form-text text-danger">
                            <small className="form-text text-danger" >
                                {errors.buldingNumber?.type === 'required' && " Bulding Number is Required"}
                                {errors.buldingNumber?.type === 'pattern' && "must include at least 1 to 5 Number or Letter"}
                            </small>
                            </div>
                        </div> */}

                        <div className="mb-3">
                            <label  className="form-label"><b>Street Name</b></label>
                            <input type="text" 
                            className="form-control" 
                            {...register('details',{required:true , pattern:/[A-Za-z\s]{5,}/})}
                            placeholder="Street Name"/>
                            <div id="emailHelp" className="form-text text-danger">
                            <small className="form-text text-danger" >
                                {errors.details?.type === 'required' && "Your Address is required "}
                                {errors.details?.type === 'pattern' && "must include at least 5 letter"}
                            </small>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label"><b>City</b></label>
                            <input type="text" 
                            className="form-control" 
                            {...register('city',{required: true, pattern:/[A-Za-z\s]{2,}/})}
                            placeholder="Your City" />
                            <div id="emailHelp" className="form-text text-danger">
                            <small className="form-text text-danger">
                                {errors.city?.type ==='required' && " City is Required"} 
                                {errors.city?.type ==='pattern' && " must include at least two letter"}
                            </small>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label  className="form-label"><b>Postal Code</b></label>
                            <input type="number" 
                            className="form-control"
                            {...register('postalCode',{ required: true,pattern:/[0-9]{3,}/})}
                            placeholder="Postal Code"
                            />
                            <div id="emailHelp" className="form-text text-danger">
                            <small className="form-text text-danger">
                                {errors.postalCode?.type ==='required' && " Postal Code is Required"} 
                                {errors.postalCode?.type ==='pattern' && " at least three number"}
                            </small>
                            </div>
                        </div>
                        
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-warning">Continue</button>
                        </div>

                    </form>
                </div>


            </div>

        </div>
    )

}