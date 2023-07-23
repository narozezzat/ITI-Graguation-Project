import { useEffect, useState } from "react"
import BaseURL from "../../BaseURL.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { async } from "q";
import { ToastContainer } from "react-toastify";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ShowUsers(){
    const token = localStorage.getItem("token");
    const [ allUsers , setAllUsers ]= useState([])
    // console.log(allUsers)

    const getAllUsers = async ()=>{
        try {
                const response = await BaseURL.get('/api/users',{ headers:{'Authorization': `Bearer ${token}`}})
                setAllUsers(response.data.data)
            } catch (error) {
                console.log(error.response.data.message)
            }
    }
    
    useEffect(()=>{
        getAllUsers();
    },[])

    const deleteProduct =async (id)=>{
        // console.log(id)
        try {
            const response = await BaseURL.delete(`/api/users/${id}`,{ headers:{'Authorization': `Bearer ${token}`}})
            getAllUsers();
        
            toast.success('You deleted successfly', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        } catch (error) {
            // console.log(error.response.data.message)
            toast.error(error.response.data.message, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
        
    } 

    return(
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Remove</th>
                    </tr>
                </thead>
                
                <tbody>
                    {
                        allUsers.map((item,index)=>{
                            return(
                                <tr>
                                    <td  key={index} >{index + 1}</td>
                                    <td >{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                    <td><FontAwesomeIcon icon={faTrashCan} onClick={()=>deleteProduct(item._id)} style={{cursor: "pointer"}}/></td>
                                </tr>
                            )})
                    }
                </tbody>
            </table>
        <ToastContainer/>

        </>
    )
    
}