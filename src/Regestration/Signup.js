import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function SignUp() {

    const { register, handleSubmit,watch,formState:{errors} } = useForm();
    const onSubmit = data => console.log(data)
    console.log(watch('name'))
    const password = watch("password");
     // const confirm = watch("confirm");

  const passwordMatch = (value) => {
    return value === password || "Passwords do not match";
  }
    
    return(
        <>
        <div className="container">
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
                <div className="col-md-6">
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
                    <div className="card-footer text-center">
                        <p className="mb-0"><small>Already have account!</small> <Link className="btn btn-primary" to="/Login">
                                    Sing in
                                </Link></p>
                    </div>
                    </div>
                </div>
            </div>    
        </div>
        </>
    )
}

