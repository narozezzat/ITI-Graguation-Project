import { useEffect, useState } from "react"
import BaseURL from "../BaseURL.js"

// Orders.js
export default function Orders(){
    const token = localStorage.getItem("token");
    const [allOrders , setAllOrders]= useState([])

    const getProductFromCart = async ()=>{
        try {
            const response = await BaseURL.get('/api/orders',
            {
                headers: {
                'Authorization': `Bearer ${token}`
                }
            }) 
            console.log(response.data.data)
            setAllOrders(response.data.data)
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    useEffect(()=>{
        getProductFromCart();
    },[])
    return(
        <>
        your Orders
        </>
    )
    
}