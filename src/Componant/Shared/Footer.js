import "./Footer.css"
import { Link } from "react-router-dom";

function Footer() {
  const BackToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="footer">

        <Link onClick={BackToTop} className="lie">
          {/* after this link fixed-bottom in div classname */}
          <div className="footerBottomToTop m-0">
            <p className="m-0">Back to Top</p>
          </div>
        </Link>

        <div className="footerVerticalRow row m-0 pb-0">

          <div className="footerVerticalColumn col-12 col-md-6 col-lg-3 text-center">
            <div className="footerVerticalColumnHead">Get to Know Us</div>
            <ul>
              <li>Careers</li>
              <li>Blog</li>
              <li>About Amazon</li>
              <li>Investor Relations</li>
              <li>Amazon Devices</li>
              <li>Amazon Science</li>
            </ul>
          </div>

          <div className="footerVerticalColumn col-12 col-md-6 col-lg-3 text-center">
            <div className="footerVerticalColumnHead">Make Money With Us</div>
            <ul>
              <li>Sell products on Amazon</li>
              <li>Sell on Amazon Business</li>
              <li>Sell apps on Amazon</li>
              <li>Become An Affiliate</li>
              <li>Advertise Your Products</li>
              <li>Self-Publish with Us</li>
              <li>Host an Amazon Hub</li>
            </ul>
          </div>

          <div className="footerVerticalColumn col-12 col-md-6 col-lg-3 text-center">
            <div className="footerVerticalColumnHead">Amazon Payment Products</div>
            <ul>
              <li>Amazon Business Card</li>
              <li>Shop with Points</li>
              <li>Rload Your Balance</li>
              <li>Amazon Currency Converter</li>
            </ul>
          </div>

          <div className="footerVerticalColumn col-12 col-md-6 col-lg-3 text-center">
            <div className="footerVerticalColumnHead">Let Us Help You</div>
            <ul>
              <li>COVID-19 and Amazon</li>
              <li>Your Accounts</li>
              <li>Your Orders</li>
              <li>Shipping Rates & Policies</li>
              <li>Returns & Replacment</li>
              <li></li>
              <li>Amazon Assistant</li>
              <li>Help</li>
            </ul>
          </div>

        </div>
        <hr />

        <div className="footerLast pb-5">
          <div className="footerMessage">here for anything </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
