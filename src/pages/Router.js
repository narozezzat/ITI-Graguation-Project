import { Route, Routes } from "react-router-dom";
import Login from "../Componant/Regestration/Login";
import SignUp from "../Componant/Regestration/Signup";
import MainPage from "../Componant/HomePage/MainPage";
import ListProduct from "../Componant/ListProduct/ListProduct";
import MainProductDetails from "../Componant/ViewProduct/MainProductDetails";
import Forget from "../Componant/Regestration/forget";

export default function Router() {


    
    return(
    <div>
        <Routes>

            <Route path="/" element={ <MainPage/> }></Route>
            <Route path="/Login" element={ <Login/> }></Route>
            <Route path="/SignUp" element={ <SignUp/> }></Route>
            <Route path="/Forget" element={ <Forget/>}></Route>

            <Route path="/ListProduct" element={ <ListProduct/> }></Route>
            <Route path="/MainProductDetails/:id" element={ <MainProductDetails/> }></Route>
            {/* <Route path="/MainProductDetails" element={ <MainProductDetails/> }></Route> */}
            <Route path="/MainPage" element={ <MainPage/> }></Route>
            
        </Routes>
    </div>
    )
    
}
