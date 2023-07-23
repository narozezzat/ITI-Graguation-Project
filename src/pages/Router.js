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
import AllOrders from "../Componant/Admin/AllOrders";
import AdminAllProducts from "../Componant/Admin/AllProducts";
import Admin from "../Componant/Admin/Admin";
import AddCategory from "../Componant/Admin/AddCategory";
import AddProducts from "../Componant/Admin/AddProducts";
import NotFoundPage from "../Componant/NotFoundPage";
import OrdersDetails from "../Componant/Admin/OrdersDetails";
import Seller from './../Componant/Seller/Seller';
import MyProducts from './../Componant/Seller/MyProducts';
import SellerAddProducts from "../Componant/Seller/SellerAddProducts";
import ShowUsers from "../Componant/Admin/ShowUsers";
import CreateAdmin from "../Componant/Admin/CreateAdmin";
import Orders from "../Componant/Orders";
import SignUpAsSeller from "../Componant/Seller/SignUpAsSeller";


export default function Router() {


    
    return(
    <div>
        <Routes>

            <Route path="/" element={ <MainPage/> }></Route>
            <Route path="*" element={ <NotFoundPage /> }></Route>
            <Route path="/Login" element={ <Login/> }></Route>
            <Route path="/SignUp" element={ <SignUp/> }></Route>
            <Route path="/SignUpAsSeller" element={ <SignUpAsSeller/> }></Route>
            <Route path="/Forget" element={ <Forget/>}></Route>
            <Route path="/ResetCode" element={ <ResetCode/>}></Route>
            <Route path="/ResetPassword" element={ <ResetPassword/>}></Route>
            <Route path="/ListProduct" element={ <ListProduct/> }></Route>
            <Route path="/MainProductDetails/:id" element={ <MainProductDetails/> }></Route>
            <Route path="/MainPage" element={ <MainPage/> }></Route>
            <Route path="/Cart" element={ <Cart/> }></Route>
            <Route path="/Orders" element={ <Orders/> }></Route>
            <Route path="/PaymentPage" element={ <PaymentPage/> }></Route>
            <Route path="/PaymentModel" element={ <PaymentModel/> }></Route>
            <Route path="/ProdctFiltretion" element={ <ProdctFiltretion/> }></Route>
            <Route path="/Profile" element={ <Profile/> }></Route>
            <Route path="/CheckoutSuccessed" element={ <CheckoutSuccessed/> }></Route>
            <Route path="/Admin" element={ <Admin/> }>
                <Route path="/Admin/Allproducts" element={ <AdminAllProducts /> }></Route>
                <Route index element={ <AdminAllProducts /> }></Route>
                <Route path="/Admin/Orders" element={ <AllOrders/> }></Route>
                <Route path="/Admin/Orders/:id" element={ <OrdersDetails  /> }></Route>
                <Route path="/Admin/AddCategory" element={ <AddCategory /> }></Route>
                <Route path="/Admin/AddProducts" element={ <AddProducts /> }></Route>
                <Route path="/Admin/ShowUsers" element={ <ShowUsers /> }></Route>
                <Route path="/Admin/CreateAdmin" element={ <CreateAdmin /> }></Route>
            </Route>

            <Route path="/Seller" element={ <Seller /> }>
                <Route path="/Seller/MyProducts" element ={<MyProducts />} ></Route>
                <Route index element ={<SellerAddProducts />} ></Route>
                <Route path="/Seller/SellerAddProducts" element ={<SellerAddProducts />} ></Route>
            </Route>
            
        </Routes>
    </div>
    )
    
}
