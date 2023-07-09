import { useLocation } from "react-router-dom";
import CoustomerReviews from "./CoustomerReviews"
import ProductDetails from "./ProductDetails"
// import Rating from "react-rating";
// import StarsRating from "../Shared/StarsRating";

export default function MainProductDetails() {

    const location = useLocation()
    const singleProduct = location.state.item ; 

    return(
        <>
        <ProductDetails singleProduct={{singleProduct}} />
        <CoustomerReviews singleProduct={{singleProduct}}/>
        </>
    )
    
}
