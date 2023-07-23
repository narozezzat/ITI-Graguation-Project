import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import BaseURL from "../../BaseURL.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignUp() {
    const navigate = useNavigate();

    const { register, handleSubmit,watch,formState:{errors} } = useForm();

    // Show ConfirmPassword
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    function handleConfirmPassword() {
        setShowConfirmPassword(!showConfirmPassword);
    }
        // Show Password
    const [showPassword, setShowPassword] = useState(false);

    function handleTogglePassword() {
        setShowPassword(!showPassword);
    }

    const onSubmit = async userData => {
        console.log(userData)
        try {
            const response = await BaseURL.post('/api/auth/signup', userData)
            console.log(response) 
            toast.success('Your Signup Successfully ', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });

            navigate(`/Login`)
        } catch (error) {
            console.log(error.response)
            toast.error('Something Wrong ', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });

        }
    }

    // console.log(watch('name'))
    const password = watch("password");
     // const confirm = watch("confirm");

    const passwordMatch = (value) => {
    return value === password || "Passwords do not match";
    }
    
    return(
        <>
        <div className="container mb-5">
            <Link to="/MainPage">
                <div className="row d-flex justify-content-center align-items-center">
                <img style={{width:'150px'}} 
                            src="https://marcas-logos.net/wp-content/uploads/2020/01/Amazon-Logo-1-1536x960.jpg"
                            className=" "
                            alt=""
                        />
                </div>
            </Link>

            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="text-center">Create account</h4>
                        </div>

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
                                    <div className="input-group">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    {...register('password',{required: true,minLength : 8 , pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/})}
                                    placeholder="password"/>
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                    onClick={handleTogglePassword}>
                                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                </button>
                                </div>
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
                                    <div className="input-group">
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    {...register('confirmPassword',{ required: true, minLength: 8, validate: passwordMatch })}
                                    placeholder="Confirm password"/>
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                    onClick={handleConfirmPassword}>
                                    <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                                </button>
                                </div>
                                    <div id="emailHelp" className="form-text text-danger">
                                    <small className="form-text text-danger">
                                        {errors.confirmPassword?.type ==='validate' && " Passwords do not match"}
                                    </small>
                                    </div>
                                </div>
                                
                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-warning">Continue</button>
                                </div>

                            </form>
                        </div>

                        <div className="card-footer text-center">
                            <p className="mb-0">
                                <small>Already have account!</small>
                                <Link className="btn btn-primary ms-2" to="/Login">Login </Link>
                            </p>
                        </div>

                    </div>
                </div>
            </div>    
        </div>
        <ToastContainer/>

        </>
    )
}

