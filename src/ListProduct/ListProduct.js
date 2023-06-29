import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import axios from "axios";



export default function ListProduct() {

    const [ allProduct, setAllProduct] = useState([])
    const [uniqueCategory,setUniqueCategory] =  useState([1,2,3])

    const SimilarCategory = allProduct.map((item)=>item.category)
    console.log(SimilarCategory)
    SimilarCategory.forEach((item)=>console.log(item))


    const fetchAxios = async ()=>{
        const response = await axios.get('https://dummyjson.com/products')
        setAllProduct(response.data.products)
        console.log(uniqueCategory)
        setUniqueCategory(SimilarCategory)
        console.log(uniqueCategory)

    }
    
    useEffect(()=>{
        fetchAxios();
        
    },[])
    return (
        <>
            <div className=" table-responsive" >
                    <ul className="d-flex flex-row " style={{"fontSize": "13px"}}>
                        {
                            uniqueCategory.map((item,index)=>{
                                return(
                                <button key={index} className="me-2  list-group-item" >{item}</button>
                                )
                            })
                        }
                    </ul>
            </div>
            <hr/>
            <SingleProduct/>
        </>
    );
}
