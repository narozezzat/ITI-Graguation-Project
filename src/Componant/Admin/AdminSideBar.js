import React from 'react'
import { Link } from 'react-router-dom'

function AdminSideBar() {
    return (
        <>
            <div className='d-flex flex-column'>

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
                
            </div>
            
        </>
    ) 
}

export default AdminSideBar;