import "./Payment.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import img from "../../assets/Images/Amazon_logo.svg.png"
import img2 from "../../assets/Images/lock.png"

function Payment() {
  const navigate = useNavigate();
  const { register, handleSubmit,formState:{errors}, rest } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // rest();
  };


  
  return (
    <>
      <div className="paymentHeader">

        <div className="logo">
          <Link to="/">
            <img src={img} alt="" />
          </Link>
        </div>

        <h3>Checkout</h3>

        <div className="lockImg">
          <img src={img2} alt="" />
        </div>
      </div>

      {/* Payment Body Left and Right */}

      <div className="paymentBody">
        <div className="paymentLeft bg-light">

          <h1>1 Enter a new shipping address</h1>

          <form onSubmit={handleSubmit(onSubmit)}>

            {/* <h4>Full Name</h4>
            <input className="address" type="text" placeholder="Enter Your Name" 
              {...register('name',{required:true,pattern:/^[a-zA-Z ]*$/})}/>
            <small className="form-text text-danger" >
              {errors.name?.type === 'required' && "Name is Required"}  
              {errors.name?.type === 'pattern' && "Name must allows only alphabets and spaces"}
            </small> */}
    
            <h4>Mobile Number</h4>
            <input className="address" type="text" placeholder="Enter Your Mobile number" 
              {...register("phoneNumber", { required: "Phone is Required",
                pattern: {
                  value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{5})(?: *x(\d+))?\s*$/,
                  message: "Invalid Mobile No",
              },
              })}
            />
            {errors.phoneNumber && (
              <small className="text-danger">{errors.phoneNumber.message}</small>
            )}

            <h4>Country/Region</h4>
            <input className="address" type="text" placeholder="Enter Your Country" 
            {...register("country", {required: "Country is Required"})} />
            {errors.country && (<small className="text-danger">{errors.country.message}</small>)}

            <h4>City</h4>
            <input className="address" type="text" placeholder="Enter Your City Name" 
            {...register("city", {required: "City is Required"})} />
            {errors.city && (<small className="text-danger">{errors.city.message}</small>)}

            <h4>Adderss</h4>
            <input className="address" type="text" placeholder="Street address" 
            {...register("address", {required: "Mobile is Required"})} />
            {errors.address && (<small className="text-danger">{errors.address.message}</small>)}
          
            <label htmlFor="">
                <input type="checkbox" name="" id="" />
                Make this my default address
            </label>

            <button type="submit">Use this Address</button>
          </form>
        </div>

        <div className="right">
          <div className="checkOutRight">

            <div className="subTotal">
              <h2>Order Summery</h2>
              <p>
                Subtotal :<strong>${localStorage.getItem("subTotal")}</strong>
              </p>
              <small className="subTotalGift">
                <input type="checkbox" />
                This Order contains a Gift
              </small>
            </div>

            <button onClick={() => { localStorage.clear(); navigate("/"); alert("Your Order Placed!");}}>
              Place Order
            </button>
          </div>

        </div>
      </div>
    </>
  );
}

export default Payment;
