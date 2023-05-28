import ProfilePhotoLg from "./ProfilePhotoLg";
import { useSelector } from "react-redux";

export default function Header() {
  
  const collectionSize = useSelector(
    (store) => store.collection.collectionSize
  );

  //receives user from userDataSlice, then destructures
  const { user } = useSelector((store) => store.userdata);
  const { firstName, lastName, joinDate } = user;

  return (
    <div className="jumbotron jumbotron-fluid text-center" id="profile-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col mt-5">
            <ProfilePhotoLg />

            <p className="lead mt-1">
              {firstName} {lastName}
            </p>
            <p className="fw-light lh-sm">Joined: {joinDate}</p>
            <p className="fw-light lh-sm">Collection Size: {collectionSize}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
