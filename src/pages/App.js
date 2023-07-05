import { BrowserRouter } from "react-router-dom";
import Footer from "../Componant/Shared/Footer";
import NavBar from "../Componant/Shared/NavBar";
import Router from "./Router";
import"./App.css" 

function App() {
  // const localHost = "https://"
  // console.log(localHost)
  
  return (
    <div className="App">
        
        <BrowserRouter>
          <NavBar/>

            <Router/>

          <Footer/>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
