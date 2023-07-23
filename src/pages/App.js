import { BrowserRouter } from "react-router-dom";
import Footer from "../Componant/Shared/Footer";
import NavBar from "../Componant/Shared/NavBar";
import Router from "./Router";
import { CartContext, CartProvider } from "../context/QunForCart"
import"./App.css" 
import { useEffect, useState } from "react";
import BaseURL from "../BaseURL.js";
import { Container } from "react-bootstrap";

// import { useState } from "react";

function App() {
  // const localHost = "https://"
  // console.log(localHost)
  // const [qun , setQun] = useState(0)
  const [cartNum, setCartNum] = useState(0);
  const token = localStorage.getItem("token");

  const getTotalPrice = async ()=>{
    try {
        const response = await BaseURL.get('api/cart',
        {
            headers: {
            'Authorization': `Bearer ${token}`
            }
        })
        setCartNum(response.data.data.totalCartQuantity || 0)
        // console.log('Cart Data', response.data.data)
    } catch (error) {
        // console.log(error.response.data.message)
    }
}


useEffect(() => {
  getTotalPrice()
}, [])


  return (
    <div className="App">
    <CartContext.Provider value={{cartNum, setCartNum}}>
      <BrowserRouter>
          <NavBar/>
            <Container>
              <Router/>
            </Container>
          <Footer/>
      </BrowserRouter>
    </CartContext.Provider>
    </div>
  );
}

export default App;
