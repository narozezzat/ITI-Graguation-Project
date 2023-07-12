import { useForm } from "react-hook-form";
import StarsRating from "../Shared/StarsRating";

export default function CoustomerReviews(props){
    const item = props.singleProduct.singleProduct
    // console.log(item)    
    
    const writeReview = ( ) => {
        // alert("hi")
    }

    const { register, handleSubmit,formState:{errors} } = useForm();

    const onSubmit = userData => {
        console.log(userData)
    }
    return(
        <>
        <div className="row m-0">

            <div className="col-4  left">
                <div className=" p-2">
                    <h2>Customer Reviews</h2>
                    <span> <StarsRating Rating={item.ratingAverage}/> {item.ratingAverage} out of 5</span>
                </div>

                <hr/>

                <div className=" p-2">
                    <h2>Review this product</h2>
                    <p>Share your thoughts with other customers</p>
                    {/* <button className="border p-2 w-100" onClick={()=>writeReview()}>Write a customer review </button> */}

                    <button type="button" className="border p-2 w-100" data-bs-toggle="modal" 
                    data-bs-target="#staticBackdrop" onClick={()=>writeReview()}>
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
                                        <label  className="form-label"><b>Rating Average</b></label>
                                        <input type="number" className="form-control" 
                                        placeholder="2...."
                                        {...register('rating',{required:true , min:1 , max:5 })}
                                        />
                                        <div id="emailHelp" className="form-text text-danger" >
                                        <small className="form-text text-danger" >
                                            {errors.rating?.type === 'required' && "Rating is required"}
                                            {errors.rating?.type === 'min' && "Minimum Average 1"}
                                            {errors.rating?.type === 'max' && "Maximum Average 5"}
                                        </small>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label  className="form-label"><b>Your Opinion</b></label>
                                        <input type="text" 
                                        className="form-control" 
                                        {...register('Opinion',{required:true , minLength:3 , maxLength:10 , pattern:/[0-9A-Za-z\s]{1,10}/})}
                                        placeholder="Good....."/>
                                        <div id="emailHelp" className="form-text text-danger">
                                        <small className="form-text text-danger" >
                                            {errors.Opinion?.type === 'required' && "We'll never share your Email with anyone else"}
                                            {errors.Opinion?.type === 'pattern' && "Your Opinion must have only letters and number"}
                                            {errors.Opinion?.type === 'minLength' && "3 letters Minimum"}
                                            {errors.Opinion?.type === 'maxLength' && "10 Average Maximum"}
                                        </small>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label"><b>Comment</b></label>
                                        <input type="text" 
                                        className="form-control" 
                                        {...register('comment',{required: true, pattern:/[0-9A-Za-z\s]{5,}/})}
                                        placeholder="This product helpful ......" />
                                        <div id="emailHelp" className="form-text text-danger">
                                        <small className="form-text text-danger">
                                            {errors.comment?.type ==='required' && " Comment is required"} 
                                            {errors.comment?.type ==='pattern' && " must include at least 5 letter"}
                                        </small>
                                        </div>
                                    </div>

                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"> Not Now </button>
                                        <button type="submit" className="btn btn-warning">Continue</button>
                                    </div>

                                </form>

                            </div>

                            {/* <div className="modal-footer mx-auto">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"> Not Now </button>
                                <button type="button" className="btn btn-primary">submit</button>
                            </div> */}

                        </div>
                    </div>
                    </div>

                </div>
                
                <hr/>


            </div>
            
            <div className="col-8  right">
                <h2>Top reviews from Egypt</h2>

                <div className="comments">

                    <div className=" border col-12 mb-2 p-2">
                        <div>
                            <span className="me-2">
                                <img className="rounded-circle shadow-4-strong"  src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" alt=""/>
                            </span>
                            <span>Mina Onsy</span>
                        </div>
                        
                        <div >
                            {/* <span> <StarsRating Rating={4} /> </span> */}
                            <span>:  Small Review</span>  
                        </div>

                        <div>
                            Reviewed in Egypt 🇪🇬 on 5 May 2023
                        </div>

                        <div>
                            Comment Comment Comment Comment Comment  Comment Comment Comment Comment Comment Comment 
                        </div>
                    </div>

                    <div className="border col-12 mb-2 p-2">
                        <div>
                            <span className="me-2">
                                <img className="rounded-circle shadow-4-strong"  src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" alt=""/>
                            </span>
                            <span>Mina Onsy</span>
                        </div>
                        
                        <div>
                            stars  :  Small Review 
                        </div>

                        <div>
                            Reviewed in Egypt 🇪🇬 on 5 May 2023
                        </div>

                        <div>
                            Comment Comment Comment Comment Comment  
                        </div>
                    </div>

                    <div className="border col-12 mb-2 p-2">
                        <div>
                            <span className="me-2">
                                <img className="rounded-circle shadow-4-strong"  src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" alt=""/>
                            </span>
                            <span>Mina Onsy</span>
                        </div>
                        
                        <div>
                            stars  :  Small Review 
                        </div>

                        <div>
                            Reviewed in Egypt 🇪🇬 on 5 May 2023
                        </div>

                        <div>
                            Comment Comment Comment Comment Comment  
                        </div>
                    </div>

                    <div className="border col-12 mb-2 p-2">
                        <div>
                            <span className="me-2">
                                <img className="rounded-circle shadow-4-strong"  src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" alt=""/>
                            </span>
                            <span>Mina Onsy</span>
                        </div>
                        
                        <div>
                            stars  :  Small Review 
                        </div>

                        <div>
                            Reviewed in Egypt 🇪🇬 on 5 May 2023
                        </div>

                        <div>
                            Comment Comment Comment Comment Comment  
                        </div>
                    </div>

                    <div className="border col-12 mb-2 p-2">
                        <div>
                            <span className="me-2">
                                <img className="rounded-circle shadow-4-strong"  src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" alt=""/>
                            </span>
                            <span>Mina Onsy</span>
                        </div>
                        
                        <div>
                            stars  :  Small Review 
                        </div>

                        <div>
                            Reviewed in Egypt 🇪🇬 on 5 May 2023
                        </div>

                        <div>
                            Comment Comment Comment Comment Comment  
                        </div>
                    </div>


                </div>
            </div>

        </div>
        </>
    )
}