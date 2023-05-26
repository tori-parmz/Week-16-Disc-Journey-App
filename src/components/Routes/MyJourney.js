import Header from "../Header";
import AlbumReview from "../AlbumReview";
import { useSelector } from "react-redux";

const MyJourney = () => {
    const collectionItems = useSelector((store) => store.collection.collectionItems);
    return (
        <>
        <Header />
        <div className="container-fluid mt-3 mb-3">
            {
            
            collectionItems.map((collectionItem, index) => {
                return (
                <div className="row my-4" key={index}>
                <div className="col-1">
                </div>
                <div className="col-10 align-self-center">
                <AlbumReview 
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
        
        </>
        
    )
};

export default MyJourney;