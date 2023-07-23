import { useForm } from "react-hook-form";
import StarsRating from "../Shared/StarsRating";
import BaseURL from "../../BaseURL.js";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CoustomerReviews(props){
    const item = props.singleProduct.singleProduct 
    const userId = localStorage.getItem("userId")
    const token = localStorage.getItem("token");
    const itemId = item._id
    const [allReview , setAllReview]= useState([])
    const getAllReview = async ()=>{
        try {
            const response = await BaseURL.get(`/api/products/${itemId}/reviews`,
            {
                headers: {
                'Authorization': `Bearer ${token}`
                }
            }) 
            // console.log(response.data.data)
            setAllReview(response.data.data)
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    useEffect(()=>{
        getAllReview()
    },[])


    const { register, handleSubmit,formState:{errors} } = useForm();

    const onSubmit =async userData => {
        const reviewData = {
            ratings:userData.ratings,
            title: userData.title,
            product:itemId,
            user:userId
        };

        try {
                const response = await BaseURL.post(`/api/reviews`,reviewData,
                {
                    headers: {
                    'Authorization': `Bearer ${token}`
                    }
                })
                toast.success('Create Review Successfully :)', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });

                if(response){
                    getAllReview()
                }
            
        }catch (error) {
            // alert('Already Creating Review Before')
            toast.error('Already Creating Review Before', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                })
        }
    }

    return(
        <>
        <div className="row m-0">

            <div className="col-12 col-md-4 left">
                <div className=" p-2">
                    <h2>Customer Reviews</h2>
                    <span> <StarsRating Rating={item.ratingAverage}/> {item.ratingAverage} out of 5</span>
                    <p> Reviews : ( {allReview.length} )</p>
                </div>
                <p></p>
                <hr/>

                <div className=" p-2">
                    <h2>Review this product</h2>
                    <p>Share your thoughts with other customers</p>

                    <button type="button" className="border p-2 w-100" data-bs-toggle="modal" 
                    data-bs-target="#staticBackdrop">
                    Write a customer review
                    </button>

                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h1 className="modal-title fs-5 mx-auto " id="staticBackdropLabel">Write Your review</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div className="modal-body">
                                    
                                <form id='form' onSubmit={handleSubmit(onSubmit)} className="form-group row">

                                    <div className="mb-3">
                                        <label  className="form-label" for='rating'><b>Rating Average</b></label>
                                        <input type="number" className="form-control" name='rating' min="1" max="5"
                                        placeholder="2...."
                                        {...register('ratings',{required:true , min:1 , max:5 })}
                                        />

                                        <div id="emailHelp" className="form-text text-danger">
                                            <small className="form-text text-danger">
                                                {errors.ratings?.type ==='required' && " rating is required"} 
                                                {errors.ratings?.type ==='min' && " minimum 1 letter"}
                                                {errors.ratings?.type ==='max' && " maximum 5 letter"}
                                            </small>
                                        </div>
                                    </div>


                                    <div className="mb-3">
                                        <label className="form-label"><b>Your Comment</b></label>
                                        <input type="text" 
                                        className="form-control" 
                                        {...register('title',{required: true, pattern:/[0-9A-Za-z\s]{5,}/})}
                                        placeholder="This product helpful ......" />
                                        
                                        <div id="emailHelp" className="form-text text-danger">
                                            <small className="form-text text-danger">
                                                {errors.title?.type ==='required' && " Comment is required"} 
                                                {errors.title?.type ==='pattern' && " must include at least 5 letter"}
                                            </small>
                                        </div>
                                    </div>

                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"> Not Now </button>
                                        <button type="submit" className="btn btn-warning">Continue</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                
                <hr/>


            </div>
            
            <div className="col-12 col-md-8 right">
                <h2>Top reviews from Egypt</h2>

                <div className="comments">

                    {allReview.map((review,index)=>{
                        return(
                            <>
                                <div key={index} className=" border col-12 mb-2 p-2">
                                    <div>
                                        <span className="me-2">
                                            <img className="rounded-circle shadow-4-strong"  src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" alt=""/>
                                        </span>
                                        <span>{review.user == null? " User" : review.user.name }</span>
                                    </div>
                                    
                                    <div >
                                        <span> <StarsRating Rating={review.ratings} /> </span>
                                    </div>

                                    <div>
                                        Reviewed in Egypt on {review.createdAt.substring(0, 10)}
                                    </div>

                                    <div>{review.title}</div>
                                </div>
                            </>
                        )
                        })
                    }

                </div>
            </div>

        </div>
        <ToastContainer/>

        </>
    )
}