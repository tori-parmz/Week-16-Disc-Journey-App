import CoverArtGrid from "../CoverArtGrid";
import Header from "../Header";

const MyCollection = () => {
    return (
        <div id="collection-page">
        <Header />
        <div className="container">
        <CoverArtGrid />
        </div>
        </div>
    )
};

export default MyCollection;