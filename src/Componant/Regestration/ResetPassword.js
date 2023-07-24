import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import BaseURL from "../../BaseURL.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ResetPassword() {
    const navigate = useNavigate();
    const { register, handleSubmit,formState:{errors} } = useForm();
    const onSubmit =async userData => {
        console.log(userData)
        try {
            const response = await BaseURL.put('/api/auth/resetPassword', userData)
            // console.log(response)
            toast.success(' Your password changed successfully', {
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
                navigate(`/Login`)
            }
        } catch (error) {
            // alert(error.response.data.message)
            toast.error(error.response.data.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }

    
    }
    return(
        <>
        <div className="container mb-5">
            <Link to="/MainPage">
                <div className="row d-flex justify-content-center align-items-center">
                <img style={{width:'150px'}} 
                            src="https://marcas-logos.net/wp-content/uploads/2020/01/Amazon-Logo-1-1536x960.jpg"
                            className="logo"
                            alt=""
                        />
                </div>
            </Link>

            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-12">
                    <div className="card">
                    <div className="card-header">
                        <h4 className="text-center">Reset Password</h4>
                    </div>
                    <div className="card-body">
                        <form id='form' onSubmit={handleSubmit(onSubmit)} className="form-group row">
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
                            <label className="form-label"><b>New Password</b></label>
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
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-warning">Continue</button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>    
        </div>
        <ToastContainer/>

        </>
    )
}
