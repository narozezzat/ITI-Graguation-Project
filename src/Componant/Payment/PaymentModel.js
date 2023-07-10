import "./Payment.css";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/Images/Amazon_logo.svg.png"
import img2 from "../../assets/Images/lock.png"

function Payment() {
  const navigate = useNavigate();

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

          <form onSubmit={(e) => { e.preventDefault();alert("address saved"); }}>

            <h4>Full Name</h4>
            <input className="address" type="text" placeholder="Enter Your Name" />
    
            <h4>Mobile Number</h4>
            <input className="address" type="text" placeholder="Enter Your Mobile number" />

            <h4>Full Name</h4>
            <input className="address" type="text" placeholder="Enter Your PinCode" />

            <h4>Full Name</h4>
            <input className="address" type="text" placeholder="Enter Shipping Address" />
            
            <h4>City</h4>
            <input className="address" type="text" placeholder="Enter Your City Name" />

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
