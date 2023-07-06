
// import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";

export default function PaymentPage(){

    const { register, handleSubmit,watch,formState:{errors} } = useForm();

    const onSubmit = data => console.log(data)
    // console.log(watch('name'))
    const password = watch("password");
     // const confirm = watch("confirm");

    const passwordMatch = (value) => {
    return value === password || "Passwords do not match";
    }

    return(
        <div className="">
            <div className="text-center text-black fw-semibold py-3 fs-4 ">
                Checkout (<span className="fw-normal" style={{color:"#007185"}}>2 items</span>)
            </div>

            <hr className="m-0"/>

            <div className="container">
                <span className="text-danger fw-bold fs-5">1 Enter a new shipping address</span>

                <div className="card-body">
                            <form id='form' onSubmit={handleSubmit(onSubmit)} className="form-group row">
                                <div className="mb-3">
                                    <label  className="form-label"><b>Your name</b></label>
                                    <input type="text" className="form-control" 
                                    placeholder="First and last name"
                                    {...register('name',{required:true,pattern:/^[a-zA-Z ]*$/})}
                                    />
                                    <div id="emailHelp" className="form-text text-danger" >
                                    <small className="form-text text-danger" >
                                        {errors.name?.type === 'required' && "We'll never share your Name with anyone else"}  
                                        {errors.name?.type === 'pattern' && "Name must allows only alphabets and spaces"}
                                    </small>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label  className="form-label"><b>Email address</b></label>
                                    <input type="text" 
                                    className="form-control" 
                                    {...register('email',{required:true , pattern:/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/})}
                                    placeholder="Enter email"/>
                                    <div id="emailHelp" className="form-text text-danger">
                                    <small className="form-text text-danger" >
                                        {errors.email?.type === 'required' && "We'll never share your Email with anyone else"}
                                        {errors.email?.type === 'pattern' && "Email must   letters ( uppercase and lowercase), Numbers, @ , $ , . , - . EX: abc.12@gmail.com"}
                                    </small>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label"><b>Password</b></label>
                                    <input type="password" 
                                    className="form-control" 
                                    {...register('password',{required: true,minLength : 8 , pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/})}
                                    placeholder="Enter password" />
                                    <div id="emailHelp" className="form-text text-danger">
                                    <small className="form-text text-danger">
                                        {errors.password?.type ==='minLength' && " Your password must be at least 8 characters long"} 
                                        {errors.password?.type ==='required' && " We'll never share your Password with anyone else"} 
                                        {errors.password?.type ==='pattern' && " must include at least one lowercase letter, one uppercase letter, one number, and one special symbol."}
                                    </small>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label  className="form-label"><b>Re-enter password</b></label>
                                    <input type="password" 
                                    className="form-control"
                                    {...register('confirm',{ required: true, minLength: 8, validate: passwordMatch })}
                                    placeholder="Confirm password"
                                    />
                                    <div id="emailHelp" className="form-text text-danger">
                                    <small className="form-text text-danger">
                                        {errors.confirm?.type ==='validate' && " Passwords do not match"}
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