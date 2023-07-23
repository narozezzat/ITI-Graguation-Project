import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom'

function SellerSideBar() {

    const SignOut = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("userId")
        localStorage.removeItem("Admin")
    }
    
    return (
        <>
            <div className='d-flex flex-column'>
                <div className='seller-text mb-4 mt-2 border-bottom p-2 mx-auto text-center'>
                    <FontAwesomeIcon icon={faHouse}  className='text-warning'/>
                    <span className='mx-1'>Seller DashBoard</span>
                </div>

                <Link to="/Seller/MyProducts" style={{textDecoration: 'none'}}>
                    <div className='admin-side-text my-1 border-bottom p-2 mx-auto text-center'>
                        My Products
                    </div>
                </Link>

                <Link to="/Seller/SellerAddProducts" style={{textDecoration: 'none'}}>
                    <div className='admin-side-text my-1 border-bottom p-2 mx-auto text-center'>
                        Add product
                    </div>
                </Link>

                <Link to="/MainPage" style={{textDecoration: 'none'}} onClick={SignOut}>
                    <div className='seller-text mb-3 mt-4 border-bottom p-2 mx-auto text-center'>
                        SignOut
                    </div>
                </Link>
                

            </div>
            
        </>
    ) 
}

export default SellerSideBar;