import { useSelector } from "react-redux";

export default function ProfilePhotoIcon() {
    const profilePhoto = useSelector((store => store.userdata.profilePhoto));
    return (
        <img src={profilePhoto} height={'50px'} className="profile-photo-icon"/>
    )

};