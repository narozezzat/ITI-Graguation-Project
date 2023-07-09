import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import StarsRating from "../../Componant/Shared/StarsRating"
import BaseURL from "../../BaseURL.js"

export default function SingleProduct() {
    const [ allProduct, setAllProduct]=useState([])

    const fetchAxios = async ()=>{
        const response = await BaseURL.get('/api/products')
        setAllProduct(response.data.data)
    }
    
    useEffect(()=>{
        fetchAxios();
    },[])

    const navigate = useNavigate();
    
    const singleMove = ((item) => {
        navigate(`/MainProductDetails/${item.id}`, {
            state: {
                item
            }
        })
    })

    return(
        <>
        <div className="row mx-auto pt-3 ">
            {allProduct.map((item)=>{
                return(
                    
                        <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3 ">
                            <hr/>
                            <div className="" >
                                <img src={item.imageCover} className="card-img-top" 
                                alt="" style={{"height": "15rem"}}
                                onClick={() => singleMove(item)}/>
                                <div className="card-body">
                                    <div className="">
                                        <p className="card-text m-0">{item.title}</p>
                                        
                                        <p className="card-text m-0">
                                            <sup className="" style={{fontSize:"12px"}}> EGP </sup> 
                                            <span className="fs-4 fw-semibold">{item.price}</span>
                                            <sup className="" style={{fontSize:"12px"}}> 00 </sup> 
                                        </p>
                                        <StarsRating Rating={item.ratingAverage}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                
                )})}
                
        </div>
        </>
    )
    
}
