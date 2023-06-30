import axios from "axios"
import { useEffect, useState } from "react"
// import Rating from "react-rating"

export default function SingleProduct() {
    const [ allProduct, setAllProduct]=useState([])

    const fetchAxios = async ()=>{
        const response = await axios.get('https://dummyjson.com/products')
        setAllProduct(response.data.products)
    }
    
    useEffect(()=>{
        fetchAxios();
    },[])

    return(
        <>
        <div className="row mx-auto pt-3 ">
            {allProduct.map((item)=>{
                return(
                        <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3 ">
                            <div className="" >
                                <img src={item.images[0]} className="card-img-top" alt="" style={{"height": "15rem"}}/>
                                <div className="card-body">
                                    <div className="">
                                        <p className="card-text m-0">{item.description}</p>
                                        <p className="card-text m-0">
                                        <sup className="fw-bold" style={{fontSize:"12px"}}> EGP </sup> 
                                        <span className="fs-4 fw-bold">{item.price}</span>
                                        </p>
                                        {/* <h5 className="card-title fw-bold text-center">{item.title}</h5> */}
                                        {/* <Rating readonly value={item.rating} /> */}
                                        {/* <Rating
                                            readonly
                                            initialRating={item.rating}
                                        /> */}
                                        <hr/>
                                    </div>
                                    
                                    <div className="position-relative ">
                                            <button className="btn btn-primary col-12"  >Know More</button>
                                            <button className="btn btn-primary col-12" >Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                
                )})}
                
        </div>
        </>
    )
    
}
