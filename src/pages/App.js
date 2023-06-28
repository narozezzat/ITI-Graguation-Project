import { BrowserRouter } from "react-router-dom";
import Footer from "../Shared/Footer";
import NavBar from "../Shared/NavBar";
import Router from "./Router";


function App() {
  return (
    <div className="App">
      <NavBar/>
        
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
        
      <Footer/>
    </div>
  );
}

export default App;
