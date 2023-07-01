import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import axios from "axios";



export default function ListProduct() {

    const [ allProduct, setAllProduct] = useState([])
    const [uniqueCategory,setUniqueCategory] =  useState([])

    const SimilarCategory = allProduct.map((item)=>item.category)

    SimilarCategory.forEach((item)=>{
        if(!uniqueCategory.includes(item)){
            uniqueCategory.push(item)
        }
    })

    // console.log(uniqueCategory)

    const fetchAxios = async ()=>{
        const response = await axios.get('https://dummyjson.com/products')
        setAllProduct(response.data.products)

    }
    
    useEffect(()=>{
        fetchAxios();
        
    },[])

    return (
        <>
        {/* Start navbar category*/}
            <div className=" table-responsive " >
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
            </div>
        {/* End navbar category*/}

            <SingleProduct/>
        </>
    );
}
