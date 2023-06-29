import { Route, Routes } from "react-router-dom";
import Login from "../Regestration/Login";
import SignUp from "../Regestration/Signup";
import MainPage from "../HomePage/MainPage";
import ListProduct from "../ListProduct/ListProduct";

export default function Router() {


    
    return(
    <div>
        <Routes>

            <Route path="/Login" element={ <Login/> }></Route>
            <Route path="/SignUp" element={ <SignUp/> }></Route>
            <Route path="/MainPage" element={ <MainPage/> }></Route>
            <Route path="/ListProduct" element={ <ListProduct/> }></Route>
        </Routes>
    </div>
    )
    
}
