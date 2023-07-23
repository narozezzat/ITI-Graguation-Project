import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import BaseURL from "../../BaseURL.js";
import { CartContext } from "../../context/QunForCart";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function NavBar() {
    const navigate = useNavigate();
    const [allCategory, setAllCategory] = useState([]);
    const { cartNum, setCartNum} = useContext(CartContext)
    const { register, handleSubmit} = useForm();

    const getAllCategory = async ()=>{
        try {
            const response = await BaseURL.get('/api/category')
            setAllCategory(response.data?.data || [])
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    useEffect(() => {
        getAllCategory();
    }, []);

    const SignOut = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("userId")
        localStorage.removeItem("role")
        localStorage.removeItem("name")
        
        toast.success(' Log Out Success', {
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

    const showProductByCategory = ((id) => {
        console.log(id)
        navigate(`/ListProduct`, {
            state: {
                id
            }
        })
    })

    const sarch = (data)=>{
        navigate(`/ProdctFiltretion`, {
            state: { data }
        })
        }
        
    return (
        <div className="sticky-top">

            <nav className="navbar navbar-expand-lg bg-black">
                <div className="container-fluid text-center">
                    
                    <Link to="/">
                        <div className="navbar-brand logoContainer">
                        <img
                            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                            className="logo"
                            alt=""
                        />
                        <span className="dotIn text-light">.in</span>
                        </div>
                    </Link>
                    {
                        localStorage.getItem('name') ? <p className="text-light pt-3 ">Hi {localStorage.getItem('name').toUpperCase()} </p> : ""
                    }
                    
                
                    <button className="navbar-toggler bg-light runded-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">

                        <form className="p-1 w-100 mx-md-2 d-flex flex-row rounded-2 borderWhite gap-0"
                        onSubmit={handleSubmit(sarch)}>

                            <select className="col-1 rounded-start" style={{height: "33px"}}>
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

                            <input type="text" placeholder="   Search Amazon" className="col-10  " 
                            {...register('keyword',{required:false})} style={{height: "33px"}}
                            />

                            <button type="submit" className="py-0 rounded-0 rounded-end col-1" style={{height: "33px"}}> 
                                {/* Serach */}
                                <i className="fa-solid fa-magnifying-glass col-1"> </i>
                            </button>


                        </form>

                        <div className="">
                            <Link to= "/Admin " className="text-light">
                                {localStorage.getItem("role") === "admin" ? "Admin" : "" }
                            </Link>
                        </div>

                        <div className="">
                            <Link to= "/Seller " className="text-light">
                                {localStorage.getItem("role") === "seller" ? "seller" : "" }
                            </Link>
                        </div>

                        <div className="languageContainer borderWhite m-0 rounded-2 text-center mx-auto">
                            <div className="languageImage ">
                                <img className="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/255px-Flag_of_Egypt.svg.png" alt="" />
                            </div>
                            <p>EN</p>
                        </div>

                        <div className="nav-item dropdown borderWhite rounded-2 text-center mx-auto">
                            <a className="nav-link dropdown-toggle text-light" href="#1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Accounts & Lists
                            </a>

                            <ul className="dropdown-menu ps-3 listNavBar text-center">
                                
                                <li>
                                    Your Orders
                                </li>

                                <li>
                                    Your Account 
                                </li>

                                <li>
                                    Your Addresses
                                </li>

                                <li>
                                    Your Lists
                                </li>

                                <li>
                                    Your Seller Account
                                </li>

                                <li>
                                    <Link className="" to="/SignUpAsSeller">
                                        Sign up as a seller
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
                                    <Link className="" to="/MainPage" onClick={SignOut}>
                                        Sign Out
                                    </Link>
                                </li>

                                <li><hr className="dropdown-divider"/></li>
                                <li><Link className="dropdown-item text-light" to="/Profile" >
                                        <i className="fa-solid fa-user"></i>
                                        Your Profile
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <Link className="text-light borderWhite rounded-2" style={{ textDecoration: "none" }} to="/Orders"> Order </Link>

                        <Link to="/Cart" className="borderWhite rounded-2">
                            <div>
                                <i className="fa-solid fa-cart-shopping cartIcon pt-1"> 
                                    <span className=" fw-normal text-warning"> <sup>{cartNum}</sup> </span> 
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
                        <button key={index} className="mx-2 list-group-item btn"><small onClick={()=>showProductByCategory(item._id)}>{item.name}</small></button>
                        )
                    })
                    }
                </ul>
            </div>
            
            <ToastContainer/>
        </div>
)
}
