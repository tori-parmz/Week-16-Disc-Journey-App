import Header from "../Header";
import AlbumReview from "../AlbumReview";
import EditForm from "../EditForm";
import collectionItems from "../../collection";

const MyJourney = () => {
    return (
        <>
        <Header />
        <div className="container-fluid mt-3 mb-3">
            {collectionItems.map((collectionItem, index) => {
                return (
                <div className="row my-3">
                <div className="col-1">
                </div>
                <div className="col-10 align-self-center">
                <AlbumReview 
                key={index}
                collectionItem={collectionItem}
                {...collectionItem}
                />
                </div>
                <div className="col-1">
                </div>
                </div>
                );
            })}

        </div>
            

        <EditForm />
        
        </>
        
    )
};

export default MyJourney;