import { Link } from "react-router-dom";

export default function CheckoutSuccessed(){



    return(
        <>
            <div className="container text-center" style={{height: "300px", marginTop: "100px"}}>
                <Link to="/MainPage">
                    <div className="row d-flex justify-content-center align-items-center">
                        <img style={{width:'100px'}} 
                            src="https://marcas-logos.net/wp-content/uploads/2020/01/Amazon-Logo-1-1536x960.jpg"
                            className="logo"
                            alt=""
                        />
                    </div>
                </Link>
                <h3 className="my-4 text-secondary">Basket is empty</h3>
                <Link to="/ListProduct">
                    <button className="btn btn-info px-5 my-2">Go shopping</button>
                </Link>
            </div>
        </>
    )
    
}