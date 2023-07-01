import axios from "axios";
import { useEffect, useState } from "react";
import {
  
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {

    const [allProduct, setAllProduct] = useState([]);
    const [uniqueCategory, setUniqueCategory] = useState([]);

    const SimilarCategory = allProduct.map((item)=>item.category)

    // console.log(uniqueCategory)

    const fetchAxios = async ()=>{
        const response = await axios.get('https://dummyjson.com/products')
        setAllProduct(response.data.products)
    }

    SimilarCategory.forEach((item) => {
        if (!uniqueCategory.includes(item)) {
        uniqueCategory.push(item);
        }
    });

    // console.log(uniqueCategory);

            

    useEffect(() => {
        fetchAxios();
    }, []);

  return (
    <>
        <Navbar expand="lg" className="bg-black header">
            <Container fluid>

                <Navbar.Brand className=" text-light borderWhite">
                    <Link to="/MainPage">
                        <div className="logoContainer">
                        <img
                            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                            className="logo"
                            alt=""
                        />
                        <span className="dotIn">.in</span>
                        </div>
                    </Link>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" className=" text-light"/>
                
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll ></Nav>

                <Navbar.Toggle aria-controls="navbarScroll" className=" text-light" />

                <Navbar.Collapse id="navbarScroll" className="text-light">
                    <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: "100px" }}
                    navbarScroll
                    >

                    <Nav.Link  className="borderWhite">
                        <Link className="nav-link text-light" to="/ListProduct">
                        List Product{" "}
                        </Link>
                    </Nav.Link>
                    {/* <Nav.Link href="#action2" className=" text-light">Link</Nav.Link> */}
                    {/* <NavDropdown title="Link" id="navbarScrollingDropdown" className=" text-light">
                                        link
                                        <NavDropdown.Item href="#action3" className=" text-light">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4" className=" text-light">Another action</NavDropdown.Item>

                                        <NavDropdown.Divider />

                                        <NavDropdown.Item href="#action5" className=" text-light">Something else here</NavDropdown.Item>
                                    
                                    </NavDropdown> */}

                    {/* <Nav.Link href="#" disabled className=" text-light">Link</Nav.Link> */}
                    </Nav>
                    
                    <Form className="d-flex me-2">
                        {/* <Form.Control
                            type="search"
                            placeholder=""
                            className="me-2"
                            aria-label="Search"
                        />

                        <Button className="btn btn-light">Search</Button> */}

                        <div className="searchBoxContainer">
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
                            <input
                            type="text"
                            placeholder="Search Amazon"
                            className="searchInput"
                            />
                            <div className="searchIcon">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </div>
                        
                        <div className="languageContainer borderWhite">
                            <div className="languageImage">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/255px-Flag_of_Egypt.svg.png"
                                alt=""
                            />
                            </div>
                            <p>EN</p>
                        </div>

                            <NavDropdown
                                title="Account & lists"
                                id="navbarScrollingDropdown"
                                className="mx-3 borderWhite"
                            >
                                <NavDropdown.Item href="#action3" className=" ">
                                <Link className=" " to="/SignUp">
                                    Your Account
                                </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4" className=" ">
                                <Link className="" to="/Login">
                                    Your Orders
                                </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4" className=" ">
                                <Link className="" to="/Login">
                                    Your Addresses
                                </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4" className=" ">
                                <Link className="" to="/Login">
                                    Your Lists
                                </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4" className=" ">
                                <Link className="" to="/Login">
                                    Your Seller Account
                                </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4" className=" ">
                                <Link className="" to="/Login">
                                    Switch Accounts
                                </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4" className=" ">
                                <Link className="" to="/Login">
                                    Login
                                </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4" className=" ">
                                <Link className="" to="/SignUp">
                                    SignUp
                                </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4" className=" ">
                                <Link className="" to="/Login">
                                    Sign Out
                                </Link>
                                </NavDropdown.Item>

                                <NavDropdown.Divider />

                                <NavDropdown.Item href="#action5" className=" ">
                                Something else here
                                </NavDropdown.Item>
                            </NavDropdown>

                        <Link className="text-light me-2 borderWhite" style={{ textDecoration: "none" }} to="/">
                            Order
                        </Link>

                        <div className="cartContainer borderWhite text-nowrap">
                            <Link to="/cart">
                                <div>
                                    <i class="fa-solid fa-cart-shopping cartIcon"> 
                                        <span className=" fw-normal text-warning"> 0 </span> 
                                        <span className=" fw-normal cartFont">Cart</span> 
                                    </i>
                                    
                                </div>
                            </Link>
                        </div>
                    </Form>
                </Navbar.Collapse>

            </Container>
        </Navbar>
            
        <div className=" table-responsive text-light pt-2 NavBottom" >
                <ul className="d-flex flex-row fs-5">
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
