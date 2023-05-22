import Header from "../Header";
import AlbumReview from "../AlbumReview";

const MyJourney = () => {
    return (
        <>
        <Header />
        <div className="container-fluid mt-3 mb-3">
            <div className="row my-3">
                <div className="col-1">

                </div>
                <div className="col-10 align-self-center">
                <AlbumReview />
                </div>
            
            <div className="col-1">
                    
                </div>

            </div>
            <div className="row my-3">
                <div className="col-1">

                </div>
                <div className="col-10 align-self-center">
                <AlbumReview />
                </div>
            
            <div className="col-1">
                    
                </div>

            </div>
            <div className="row my-3">
                <div className="col-1">

                </div>
                <div className="col-10 align-self-center">
                <AlbumReview />
                </div>
            
            <div className="col-1">
                    
                </div>

            </div>
        

        </div>
        
        </>
        
    )
};

export default MyJourney;