import React from 'react'
import { Link } from 'react-router-dom'

function AdminSideBar() {
  return (
    <>
        <div className='d-flex flex-column'>

            <Link to="/admin/allorders" style={{textDecoration: 'none'}}>
                <div className='admin-side-text mt-3 border-bottom p-2 mx-auto text-center'>
                    Orders management
                </div>
            </Link>

            <Link to="/admin/allproducts" style={{textDecoration: 'none'}}>
                <div className='admin-side-text my-1 border-bottom p-2 mx-auto text-center'>
                    Products management
                </div>  
            </Link>

            <Link to="/addbrand" style={{textDecoration: 'none'}}>
                <div className='admin-side-text my-1 border-bottom p-2 mx-auto text-center'>
                    Add brand
                </div>
            </Link>

            <Link to="/addcategory" style={{textDecoration: 'none'}}>
                <div className='admin-side-text my-1 border-bottom p-2 mx-auto text-center'>
                    Add category
                </div>
            </Link>

            <Link to="/addsubcategory" style={{textDecoration: 'none'}}>
                <div className='admin-side-text my-1 border-bottom p-2 mx-auto text-center'>
                    Add subcategory
                </div>
            </Link>

            <Link to="/addproducts" style={{textDecoration: 'none'}}>
                <div className='admin-side-text my-1 border-bottom p-2 mx-auto text-center'>
                    Add product
                </div>
            </Link>
            

        </div>
        
    </>
  ) 
}

export default AdminSideBar;