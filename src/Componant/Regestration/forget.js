import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import BaseURL from "../../BaseURL.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Forget() {
    const navigate = useNavigate();

    const { register, handleSubmit,watch,formState:{errors} } = useForm();
    const onSubmit =async userData => {
        try {
            const response = await BaseURL.post('/api/auth/forgetPassword', userData)
            console.log(response)
            
            if(response){
                navigate(`/ResetCode`)
            }
            toast.success('Your email is correct ',{
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
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
    // console.log(watch('name'))
    
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
                            <h4 className="text-center">Password assistance</h4>
                            <p className="text-center">Enter the email address associated with your Amazon account.</p>
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

                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-warning">Continue</button>
                                </div>

                            </form>
                        </div>
                        
                        <div className="card-footer text-center">
                        <div className="mb-3 card-header">
                            <h6 className="text-center">Has your email changed?</h6>
                            <p className="text-center">If you no longer use the email address associated with your Amazon account, you may contact Customer Service for help restoring access to your account.</p>
                        </div>
                            <p className="mb-0"><Link className="btn btn-secondary" to="/SignUp">
                            Create your Amazon account
                                    </Link></p>
                        </div>

                    </div>
                </div>
            </div>    
        </div>
        <ToastContainer/>

        </>
    )
}
