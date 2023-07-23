import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BaseURL from "../../BaseURL.js";
import StarsRating from "../Shared/StarsRating.js";

export default function ProdctFiltretion(){
    const navigate = useNavigate();
    const location = useLocation()
    const [productsAfteSearch, setProductsAfteSearch] = useState([]);

    const getProductsAfteSearch = async ()=>{
        const locationState = location.state; 
        const keyword = locationState.data.keyword; 
    
        console.log(keyword);

        console.log(productsAfteSearch);


        try {
            const response = await BaseURL.get('/api/products',{
                params:{
                    keyword:keyword
                }
            })
            setProductsAfteSearch(response.data.data)
        } catch (error) {
            console.log(error.response.data.message)
        }

    }

    useEffect(() => {
        getProductsAfteSearch();
    }, []);

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
                
                {
                productsAfteSearch.map((item)=>{
                    return(
                        
                            <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3 ">
                                <hr/>
                                <div className="" >
                                    <img src={item.imageCover} className="card-img-top " style={{"height": "15rem"}}
                                    alt="" 
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
                    )})
                }
                    
            </div>
        </>
    )
    
}