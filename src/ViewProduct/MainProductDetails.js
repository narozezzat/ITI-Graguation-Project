// import axios from "axios"
// import { useEffect, useState } from "react"
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
    
    return(
        <>
        <ProductDetails/>
        <CoustomerReviews/>
        </>
    )
    
}
