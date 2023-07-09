import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import BaseURL from "../../BaseURL.js";

export default function NavBar() {
    const navigate = useNavigate();
    
    const [allCategory, setAllCategory] = useState([]);
    const get = async ()=>{
        const response = await BaseURL.get('/api/category')
        setAllCategory(response.data.data)
    }
    useEffect(() => {
        get();
    }, []);


    const SignOut = () => {
        console.log("0")
        document.cookie = `token= `;
        console.log("1")
        navigate(`/MainPage`)
        console.log("2")

    }
    
    return (
        <div className="sticky-top">

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
                                    <Link className="" to="/Login" onClick={SignOut}>
                                        Sign Out
                                    </Link>
                                </li>

                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item text-light" href="#1">Something else here</a></li>
                            </ul>
                        </div>

                        <Link className="text-light borderWhite" style={{ textDecoration: "none" }} to="/"> Order </Link>

                        <Link to="/Cart" className="borderWhite">
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
                <Link  className="mx-2 list-group-item btn fs-5" to="/ListProduct"><small>all</small></Link>
                    {
                    allCategory.map((item,index)=>{
                        return(
                        <Link key={index} className="mx-2 list-group-item btn" to="/ListProduct"><small>{item.name}</small></Link>
                        )
                    })
                    }
                </ul>
            </div>

        </div>
)
}
