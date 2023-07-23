import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AdminSideBar() {

    const SignOut = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("userId")
        localStorage.removeItem("role")
        
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

    return (
        <>
            <div className='d-flex flex-column'>

                <div className='seller-text mb-3 mt-5 border-bottom p-2 mx-auto text-center'>
                    <FontAwesomeIcon icon={faHouse}  className='text-warning'/>
                    <span className='mx-1'>Admin DashBoard</span>
                </div>

                <Link to="/Admin/Orders" style={{textDecoration: 'none'}}>
                    <div className='admin-side-text mt-3 border-bottom p-2 mx-auto text-center'>
                        Orders management
                    </div>
                </Link>

                <Link to="/Admin/Allproducts" style={{textDecoration: 'none'}}>
                    <div className='admin-side-text my-1 border-bottom p-2 mx-auto text-center'>
                        Products management
                    </div>  
                </Link>

                <Link to="/Admin/AddCategory" style={{textDecoration: 'none'}}>
                    <div className='admin-side-text my-1 border-bottom p-2 mx-auto text-center'>
                        Add category
                    </div>
                </Link>

                <Link to="/Admin/AddProducts" style={{textDecoration: 'none'}}>
                    <div className='admin-side-text my-1 border-bottom p-2 mx-auto text-center'>
                        Add product
                    </div>
                </Link>

                <Link to="/Admin/ShowUsers" style={{textDecoration: 'none'}}>
                    <div className='admin-side-text my-1 border-bottom p-2 mx-auto text-center'>
                        Show Users
                    </div>
                </Link>

                <Link to="/Admin/CreateAdmin" style={{textDecoration: 'none'}}>
                    <div className='admin-side-text my-1 border-bottom p-2 mx-auto text-center'>
                        Create Admin
                    </div>
                </Link>

                <Link to="/MainPage" style={{textDecoration: 'none'}} onClick={SignOut}>
                    <div className='seller-text mb-3 mt-4 border-bottom p-2 mx-auto text-center'>
                        SignOut
                    </div>
                </Link>
                
                
            </div>

            <ToastContainer/>
        </>
    ) 
}

export default AdminSideBar;