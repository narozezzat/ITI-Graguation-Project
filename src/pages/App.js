import { BrowserRouter } from "react-router-dom";
import Footer from "../Shared/Footer";
import NavBar from "../Shared/NavBar";
import Router from "./Router";


function App() {
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
