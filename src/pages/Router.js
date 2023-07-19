import { Route, Routes } from "react-router-dom";
import Login from "../Componant/Regestration/Login";
import SignUp from "../Componant/Regestration/Signup";
import MainPage from "../Componant/HomePage/MainPage";
import ListProduct from "../Componant/ListProduct/ListProduct";
import MainProductDetails from "../Componant/ViewProduct/MainProductDetails";
import Forget from "../Componant/Regestration/forget";
import Cart from "../Componant/Cart";
import PaymentPage from "../Componant/Payment/PaymentPage";
import ResetCode from "../Componant/Regestration/ResetCode";
import ResetPassword from "../Componant/Regestration/ResetPassword";
import PaymentModel from "../Componant/Payment/PaymentModel"
import ProdctFiltretion from "../Componant/ListProduct/ProdctFiltretion";
import Profile from "../Componant/Shared/Profile";
import CheckoutSuccessed from "../Componant/Payment/CheckoutSuccessed";
import AllProductsPage from "../Componant/Admin/AllProductsPage";
import AllOrders from "../Componant/Admin/AllOrdersPage";
import OrdersDetailsPage from "../Componant/Admin/OrdersDetailsPage"
import AddBrandPage from "../Componant/Admin/AddBrandPage";
import AddCategoryPage from './../Componant/Admin/AddCategoryPage';
import AddProductsPage from "../Componant/Admin/AddProductsPage";


export default function Router() {


    
    return(
    <div>
        <Routes>

            <Route path="/" element={ <MainPage/> }></Route>
            <Route path="/Login" element={ <Login/> }></Route>
            <Route path="/SignUp" element={ <SignUp/> }></Route>
            <Route path="/Forget" element={ <Forget/>}></Route>
            <Route path="/ResetCode" element={ <ResetCode/>}></Route>
            <Route path="/ResetPassword" element={ <ResetPassword/>}></Route>
            <Route path="/ListProduct" element={ <ListProduct/> }></Route>
            <Route path="/MainProductDetails/:id" element={ <MainProductDetails/> }></Route>
            <Route path="/MainPage" element={ <MainPage/> }></Route>
            <Route path="/Cart" element={ <Cart/> }></Route>
            <Route path="/PaymentPage" element={ <PaymentPage/> }></Route>
            <Route path="/PaymentModel" element={ <PaymentModel/> }></Route>
            <Route path="/ProdctFiltretion" element={ <ProdctFiltretion/> }></Route>
            <Route path="/Profile" element={ <Profile/> }></Route>
            <Route path="/CheckoutSuccessed" element={ <CheckoutSuccessed/> }></Route>
            <Route path="/admin/allproducts" element={ <AllProductsPage /> }></Route>
            <Route path="/admin/allorders" element={ <AllOrders/> }></Route>
            <Route path="/admin/orders/:id" element={ <OrdersDetailsPage /> }></Route>
            <Route path="/addbrand" element={ <AddBrandPage /> }></Route>
            <Route path="/addcategory" element={ <AddCategoryPage /> }></Route>
            <Route path="/addproducts" element={ <AddProductsPage /> }></Route>
            
        </Routes>
    </div>
    )
    
}
