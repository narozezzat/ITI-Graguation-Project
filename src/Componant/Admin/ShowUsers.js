import { useEffect, useState } from "react"
import BaseURL from "../../BaseURL.js"

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

    return(
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
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
                                </tr>
                            )})
                    }
                </tbody>
            </table>
        </>
    )
    
}