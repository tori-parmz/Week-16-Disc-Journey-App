import { useSelector } from "react-redux";

export default function ProfilePhotoIcon() {
  const { user } = useSelector((store) => store.userdata);
  const { profilePhoto } = user;

  return (
    <img src={profilePhoto} height={"50px"} className="profile-photo-icon" />
  );
}
