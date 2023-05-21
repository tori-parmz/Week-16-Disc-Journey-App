//page will have large display album cover component
//table for track listing
//display metadata
//navigation
//side bar>small profile>search bar>profile controls
//footer
//modal review form
import CoverArtLg from "../CoverArtLg";
import AlbumMetadata from "../AlbumMetadata";
import TrackList from "../TrackList";

const AlbumInfo = () => {
    return (
        <div className="container" id="album-info">
        <h1>Album Info</h1>
        <CoverArtLg />
        <AlbumMetadata />
        <TrackList />
        </div>

    )
};

export default AlbumInfo;