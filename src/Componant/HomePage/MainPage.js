import Banner from "./Banner/Banner";
import Deals from "./Deals/Deals";
import PopularProducts from "./Products/PopularProducts";
import Products from "./Products/Products";
import ProductsTwo from "./Products/ProductsTwo";


export default function MainPage() {

    return(
        <>
            <Banner />
            <Products/>
            <Deals/>
            <ProductsTwo />
            <PopularProducts/>
        </>
    )
}
