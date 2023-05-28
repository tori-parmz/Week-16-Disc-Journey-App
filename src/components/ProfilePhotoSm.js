import { useSelector } from "react-redux";

export default function ProfilePhotoSm() {
  const { user } = useSelector((store) => store.userdata);
  const { profilePhoto } = user;
  return <img src={profilePhoto} height={"120px"} className="profile-photo" />;
}
