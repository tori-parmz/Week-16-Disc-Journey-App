import ProfilePhotoLg from "./ProfilePhotoLg";
import { useSelector } from "react-redux";
import { useState, useEffect } from 'react';



export default function Header() {
    // console.log(useSelector((store)=>{console.log(store);
    // })
    // );
    const collectionSize = useSelector((store => store.collection.collectionSize));
    const { user, joinDate } = useSelector((store => store.userdata));
    const { firstName, lastName } = user;



    return(
        <div className="jumbotron jumbotron-fluid text-center" id="profile-header">
        <div className="container">
        <div className="row align-items-center">
            <div className="col mt-5">
                <ProfilePhotoLg />
        
        <p className="lead mt-1">{firstName}{' '}{lastName}</p>
        <p className="fw-light lh-sm">Joined: {joinDate}</p>
        <p className="fw-light lh-sm">Collection Size: {collectionSize}</p>
        </div>
        </div>
        </div>
        </div>

    )
};
