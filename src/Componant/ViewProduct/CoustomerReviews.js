import StarsRating from "../Shared/StarsRating";

export default function CoustomerReviews(){


    return(
        <>
        <div className="row m-0">

            <div className="col-4  left">
                <div className=" p-2">
                    <h2>Customer Reviews</h2>
                    <span> <StarsRating Rating={4}/>  3.9 out of 5</span>
                </div>

                <hr/>

                <div className=" p-2">
                    <h2>Review this product</h2>
                    <p>Share your thoughts with other customers</p>
                    <button className="border p-2 w-100">Write a customer review </button>
                </div>
                
                <hr/>


            </div>
            
            <div className="col-8  right">
                <h2>Top reviews from Egypt</h2>

                <div className="comments">

                    <div className=" border col-12 mb-2 p-2">
                        <div>
                            <span className="me-2">
                                <img className="rounded-circle shadow-4-strong"  src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" alt=""/>
                            </span>
                            <span>Mina Onsy</span>
                        </div>
                        
                        <div >
                            <span> <StarsRating Rating={4} /> </span>
                            <span>:  Small Review</span>  
                        </div>

                        <div>
                            Reviewed in Egypt 🇪🇬 on 5 May 2023
                        </div>

                        <div>
                            Comment Comment Comment Comment Comment  Comment Comment Comment Comment Comment Comment 
                        </div>
                    </div>

                    <div className="border col-12 mb-2 p-2">
                        <div>
                            <span className="me-2">
                                <img className="rounded-circle shadow-4-strong"  src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" alt=""/>
                            </span>
                            <span>Mina Onsy</span>
                        </div>
                        
                        <div>
                            stars  :  Small Review 
                        </div>

                        <div>
                            Reviewed in Egypt 🇪🇬 on 5 May 2023
                        </div>

                        <div>
                            Comment Comment Comment Comment Comment  
                        </div>
                    </div>

                    <div className="border col-12 mb-2 p-2">
                        <div>
                            <span className="me-2">
                                <img className="rounded-circle shadow-4-strong"  src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" alt=""/>
                            </span>
                            <span>Mina Onsy</span>
                        </div>
                        
                        <div>
                            stars  :  Small Review 
                        </div>

                        <div>
                            Reviewed in Egypt 🇪🇬 on 5 May 2023
                        </div>

                        <div>
                            Comment Comment Comment Comment Comment  
                        </div>
                    </div>

                    <div className="border col-12 mb-2 p-2">
                        <div>
                            <span className="me-2">
                                <img className="rounded-circle shadow-4-strong"  src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" alt=""/>
                            </span>
                            <span>Mina Onsy</span>
                        </div>
                        
                        <div>
                            stars  :  Small Review 
                        </div>

                        <div>
                            Reviewed in Egypt 🇪🇬 on 5 May 2023
                        </div>

                        <div>
                            Comment Comment Comment Comment Comment  
                        </div>
                    </div>

                    <div className="border col-12 mb-2 p-2">
                        <div>
                            <span className="me-2">
                                <img className="rounded-circle shadow-4-strong"  src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" alt=""/>
                            </span>
                            <span>Mina Onsy</span>
                        </div>
                        
                        <div>
                            stars  :  Small Review 
                        </div>

                        <div>
                            Reviewed in Egypt 🇪🇬 on 5 May 2023
                        </div>

                        <div>
                            Comment Comment Comment Comment Comment  
                        </div>
                    </div>


                </div>
            </div>

        </div>
        </>
    )
}