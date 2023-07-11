import { BrowserRouter } from "react-router-dom";
import Footer from "../Componant/Shared/Footer";
import NavBar from "../Componant/Shared/NavBar";
import Router from "./Router";
import { AllQun } from "../context/QunForCart"
import"./App.css" 
import { useState } from "react";

function App() {
  // const localHost = "https://"
  // console.log(localHost)
  const [qun , setQun] = useState(0)
  return (
    <div className="App">
      <BrowserRouter>
        <AllQun.Provider value = {{qun , setQun}}>
          <NavBar/>

            <Router/>

          <Footer/>
        </AllQun.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
