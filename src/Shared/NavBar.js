import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {

    const [allProduct, setAllProduct] = useState([]);
    const [uniqueCategory, setUniqueCategory] = useState([]);

    const SimilarCategory = allProduct.map((item)=>item.category)

    const fetchAxios = async ()=>{
        const response = await axios.get('https://dummyjson.com/products')
        setAllProduct(response.data.products)
        
    }

    SimilarCategory.forEach((item) => {
        if (!uniqueCategory.includes(item)) {
        // console.log(uniqueCategory)
        uniqueCategory.push(item);
        // setUniqueCategory([...uniqueCategory,item])
        // console.log(uniqueCategory)

        }
    });

    useEffect(() => {
        fetchAxios();
        
    }, []);

return (
<>
    <nav className="navbar navbar-expand-lg bg-black">
        <div className="container-fluid">
            
            <Link to="/MainPage">
                <div className="navbar-brand logoContainer">
                <img
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    className="logo"
                    alt=""
                />
                <span className="dotIn text-light">.in</span>
                </div>
            </Link>

            <Link className="nav-link text-light" to="/ListProduct">
                List Product
            </Link>

            <button className="navbar-toggler bg-light runded-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon "></span>
            </button>
            
            <div className="collapse navbar-collapse " id="navbarSupportedContent">

                <div className="searchBoxContainer m-0 w-100 mx-md-2">

                    <select className="searchSelect">
                        <option>All</option>
                        <option>Arts & Crafts</option>
                        <option>Automotive</option>
                        <option>Baby</option>
                        <option>Books</option>
                        <option>Beauty & Personal Care</option>
                        <option>Deals</option>
                        <option>Electronics</option>
                        <option>Girls' Fashion</option>
                        <option>Health & Household</option>
                        <option>Home & Kitchen</option>
                    </select>

                    <input type="text" placeholder="Search Amazon" className="searchInput" />

                    <div className="searchIcon">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>

                </div>
                        
                <div className="languageContainer borderWhite">
                    <div className="languageImage">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/255px-Flag_of_Egypt.svg.png" alt="" />
                    </div>
                    <p>EN</p>
                </div>

                <div className="nav-item dropdown borderWhite">
                    <a className="nav-link dropdown-toggle text-light" href="#1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Accounts & Lists
                    </a>

                    <ul className="dropdown-menu ps-3 listNavBar">
                        
                        <li>
                            <Link className="" to="/Login">
                                Your Orders
                            </Link>
                        </li>

                        <li>
                            <Link className="" to="/Login">
                                Your Account 
                            </Link>
                        </li>

                        <li>
                            <Link className="" to="/Login">
                                Your Addresses
                            </Link>
                        </li>

                        <li>
                            <Link className="" to="/Login">
                                Your Lists
                            </Link>
                        </li>

                        <li>
                            <Link className="" to="/Login">
                                Your Seller Account
                            </Link>
                        </li>

                        <li>
                            <Link className="" to="/Login">
                                Switch Accounts
                            </Link>
                        </li>

                        <li>
                            <Link className="" to="/Login">
                                Login
                            </Link>
                        </li>

                        <li>
                            <Link className="" to="/SignUp">
                                Sign Up
                            </Link>
                        </li>

                        <li>
                            <Link className="" to="/Login">
                                Sign Out
                            </Link>
                        </li>

                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item text-light" href="#1">Something else here</a></li>
                    </ul>
                </div>

                <Link className="text-light borderWhite" style={{ textDecoration: "none" }} to="/"> Order </Link>

                <Link to="/cart" className="borderWhite">
                    <div>
                        <i className="fa-solid fa-cart-shopping cartIcon "> 
                            <span className=" fw-normal text-warning"> 0 </span> 
                            <span className=" fw-normal cartFont">Cart</span> 
                        </i>
                    </div>
                </Link>
                
            </div>

        </div>
    </nav>

    <div className=" table-responsive text-light pt-2 NavBottom" >
            <ul className="d-flex ">
                {
                    uniqueCategory.map((item,index)=>{
                        return(
                        <button key={index} className="mx-2 list-group-item btn" ><small>{item}</small></button>
                        )
                    })
                }
            </ul>
    </div>

</>
)
}
