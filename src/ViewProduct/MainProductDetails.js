// import axios from "axios"
// import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import CoustomerReviews from "./CoustomerReviews"
import ProductDetails from "./ProductDetails"

export default function MainProductDetails() {

    // const [ allProduct, setAllProduct]=useState([])
    // // console.log(allProduct)

    // const fetchAxios = async ()=>{
    //     const response = await axios.get('https://dummyjson.com/products/1')
    //     setAllProduct(response.data)
    //     // console.log(response.data)
    // }
    
    // useEffect(()=>{
    //     fetchAxios();
    // },[])
    


    const location = useLocation()
    const singleProduct = location.state.item ; 

    // console.log(singleProduct)
    return(
        <>
        <ProductDetails singleProduct={{singleProduct}} />
        <CoustomerReviews/>
        </>
    )
    
}
