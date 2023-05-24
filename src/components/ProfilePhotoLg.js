import { useSelector } from "react-redux";

export default function ProfilePhotoLg() {
    const profilePhoto = useSelector((store => store.userdata.profilePhoto));
    return (
        <img src={profilePhoto} height={'200px'} className="profile-photo"/>
    )

};
