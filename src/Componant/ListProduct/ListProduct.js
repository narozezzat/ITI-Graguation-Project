import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { useLocation } from "react-router-dom";
import BaseURL from "../../BaseURL.js";



export default function ListProduct() {
    const location = useLocation()
    const objectIdForCategory = location.state; 
    // console.log(objectIdForCategory);

    const [ allProduct , setAllProduct ]= useState([])
    // console.log(allProduct)

    const getAlProduct = async ()=>{
        try {
            if(objectIdForCategory){
                const onlyId = objectIdForCategory.id;
                const response =await  BaseURL.get(`/api/products/category/${onlyId}`)
                setAllProduct(response.data.data)
                // console.log("id true")
            }else{
                const response = await BaseURL.get('/api/products')
                setAllProduct(response.data.data)
                // console.log("id falce")
            }
        } catch (error) {
            console.log(error.response.data.message)
        }
    }
    // getAlProduct()
    
    useEffect(()=>{
        getAlProduct();
    },[allProduct])


    return (
        <>
        {/* Start navbar category*/}
            {/* <div className=" table-responsive " >
                    <ul className="d-flex flex-row pt-3 " style={{"fontSize": "13px"}}>
                        {
                            uniqueCategory.map((item,index)=>{
                                return(
                                <button key={index} className="me-2  list-group-item" >{item}</button>
                                )
                            })
                        }
                    </ul>
                    <hr/>
            </div> */}
        {/* End navbar category*/}

            <SingleProduct products={allProduct}/>
        </>
    );
}
