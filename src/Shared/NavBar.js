import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container, Form, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../images/amazon-logo(1).png"

export default function NavBar() {

    const [ allProduct, setAllProduct] = useState([])
    const [uniqueCategory,setUniqueCategory] =  useState([])

    const SimilarCategory = allProduct.map((item)=>item.category)
    
    SimilarCategory.forEach((item)=>{
        if(!uniqueCategory.includes(item)){
            uniqueCategory.push(item)
        }
    })

    // console.log(uniqueCategory)

    const fetchAxios = async ()=>{
        const response = await axios.get('https://dummyjson.com/products')
        setAllProduct(response.data.products)

    }
    
    useEffect(()=>{
        fetchAxios();
        
    },[])

    
    return(
        <>

            <Navbar expand="lg" className="bg-black ">
                <Container fluid>
                    <Navbar.Brand className=" text-light">
                        <Link className="nav-link " to="/MainPage">
                            <img src={logo} className="col-12" alt="" style={{width:"120px"}}/>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" className=" text-light"/>
                    <Navbar.Collapse id="navbarScroll" className="text-light">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >

                            <Nav.Link href="#action1" className=" ">
                                <Link className="nav-link text-light" to="/ListProduct">List Product </Link>
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
                            <Form.Control
                                type="search"
                                placeholder=""
                                className="me-2"
                                aria-label="Search"
                            />

                            <Button className="btn btn-light" >Search</Button>
                                
                            <NavDropdown title="Account & lists" id="navbarScrollingDropdown" className="mx-3 ">
                                
                                <NavDropdown.Item href="#action3" className=" ">
                                    <Link className=" " to="/SignUp">Your Account</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4" className=" ">
                                    <Link className="" to="/Login">Your Orders</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4" className=" ">
                                    <Link className="" to="/Login">Your Addresses</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4" className=" ">
                                    <Link className="" to="/Login">Your Lists</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4" className=" ">
                                    <Link className="" to="/Login">Your Seller Account</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4" className=" ">
                                    <Link className="" to="/Login">Switch Accounts</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4" className=" ">
                                    <Link className="" to="/Login">Login</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4" className=" ">
                                    <Link className="" to="/SignUp">SignUp</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4" className=" ">
                                    <Link className="" to="/Login">Sign Out</Link>
                                </NavDropdown.Item>

                                <NavDropdown.Divider />

                                <NavDropdown.Item href="#action5" className=" ">Something else here</NavDropdown.Item>
                            
                            </NavDropdown>


                            <Link className="text-light me-2" style={{textDecoration:"none"}} to="/">Order</Link>

                            <Link className="text-light" style={{textDecoration:"none"}} to="/">
                                {/* <i class="fa-regular fa-cart-shopping"></i> */}
                                Cart
                            </Link>

                        </Form>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
            <div className=" table-responsive bg-dark text-light pt-2" >
                    <ul className="d-flex flex-row   fs-5" style={{"fontSize": "13px"}}>
                        {
                            uniqueCategory.map((item,index)=>{
                                return(
                                <button key={index} className="me-2  list-group-item" >{item}</button>
                                )
                            })
                        }
                    </ul>
            </div>

        </>
    )
}
