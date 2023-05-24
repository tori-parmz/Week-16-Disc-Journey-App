import { useSelector } from "react-redux";



export default function ProfilePhotoSm() {
    const profilePhoto = useSelector((store => store.userdata.profilePhoto));
    return (
        <img src={profilePhoto} height={'120px'} className="profile-photo"/>
    )

};