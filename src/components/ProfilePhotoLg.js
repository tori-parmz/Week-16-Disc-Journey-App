import { useSelector } from "react-redux";

export default function ProfilePhotoLg() {
  const { user } = useSelector((store) => store.userdata);
  const { profilePhoto } = user;
  return <img src={profilePhoto} height={"200px"} className="profile-photo" />;
}
