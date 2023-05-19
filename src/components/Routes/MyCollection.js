//navbar
//header>large profile photo>user metadata
//sidebar
//grid
//album art w album/artist name/release date>onClick opens modal
//modal search engine
//modal review form
//modal review with edit/delete
import CoverArtGrid from "../CoverArtGrid";

const MyCollection = () => {
    return (
        <div className="container">
        <h1>My Collection</h1>
        <CoverArtGrid />
        </div>
    )
};

export default MyCollection;