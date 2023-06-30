import axios from "axios"
import { useEffect, useState } from "react"

export default function ProductDetails() {

    const [ allProduct, setAllProduct]=useState([])
    // console.log(allProduct)

    const fetchAxios = async ()=>{
        const response = await axios.get('https://dummyjson.com/products/2')
        setAllProduct(response.data)
        // console.log(response.data)
    }
    
    useEffect(()=>{
        fetchAxios();
    },[])
    
    return(
        <>
        <div className="row m-0">
            <div className="col-5 left border">
                <img src={allProduct.images} alt="" className="w-100"/>
            </div>

            <div className="col-5 center border">
                <div>   
                    <p className="mb-1">{allProduct.description}</p>
                    <a href="" >Vist Store</a>
                    <p>stars</p>
                </div>

                <hr/>

                <div>
                    <span className="text-danger me-2 fs-5"> -9% </span>
                    <span>
                        <sup className="" style={{fontSize:"12px"}}> EGP </sup> 
                        <span className="fs-4 fw-bold">{allProduct.price}</span>
                    </span>
                    <p>
                        <span>List Price</span>
                        <sup className="" style={{fontSize:"12px"}}> EGP </sup> 
                        <del className="fs-4 fw-bold">{allProduct.price}</del>
                    </p>
                </div>

                <hr/>

                    <div>
                        <h3 className="text-center">data</h3>
                        <div>Color : {allProduct.brand}</div>
                        <div>Brand : {allProduct.brand}</div>
                        <div>Model : {allProduct.brand}</div>
                    </div>
                    
                <hr/>

                    <div>
                    About this item
                        <ul>
                            <li>Talk from sunrise to sunset - Maximum standby battery life of up to 35 days and 15 hours talk time on a single charge</li>
                            <li>Talk from sunrise to sunset - Maximum standby battery life of up to 35 days and 15 hours talk time on a single charge</li>
                            <li>Talk from sunrise to sunset - Maximum standby battery life of up to 35 days and 15 hours talk time on a single charge</li>
                        </ul>
                    </div>

            </div>

            <div className="col-2 right border">
                <div>
                    <span>
                        <sup className="" style={{fontSize:"12px"}}> EGP </sup> 
                        <span className="fs-4 fw-bold">{allProduct.price}</span>
                    </span>

                    <div className="dropdown">
                        <span>FREE Returns</span>
                        {/* <div className="dropdown-content">
                            <p>Easy and Hassle Free Returns You can return this item for FREE within the allowed return period for any reason and without any shipping charges. The item must be returned in new and unused condition.</p>
                        </div> */}
                    </div>

                    <div>
                    Deliver to mina - Giza ‌
                    </div>

                    <div>
                        <div>in stock</div>
                        <span>Qty 2</span>
                    </div>
                    <button className="btn btn-primary mb-1 col-12">
                        Add To Cart 
                    </button>
                    <br/>
                    <button className="btn btn-primary col-12">
                        Buy Now
                    </button>

                </div>

                <div>
                    <div>Payment : Choose way</div>
                    <div>Fulfilled by : Choose</div>
                    <div>Sold by : Mina Store</div>
                </div>
            </div>
        </div>
        </>
    )
    
}
