import { Image } from "react-bootstrap";
import ProfilePhotoLg from "./ProfilePhotoLg";


export default function Header() {
    return(
        <div className="jumbotron jumbotron-fluid text-center" id="profile-header">
        <div className="container">
        <div className="row align-items-center">
            <div className="col mt-5">
                <ProfilePhotoLg />
        
        <p className="lead mt-1">User Name</p>
        <p className="fw-light lh-sm">Join Date</p>
        <p className="fw-light lh-sm">Collection Size</p>
        </div>
        </div>
        </div>
        </div>

    )
};
