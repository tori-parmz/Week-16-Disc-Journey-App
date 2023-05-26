import ProfilePhotoLg from "./ProfilePhotoLg";
import { useSelector } from "react-redux";



export default function Header() {
    // console.log(useSelector((store)=>{console.log(store);
    // })
    // );
    const collectionSize = useSelector((store => store.collection.collectionSize));
    const user = useSelector((store => store.userdata.user));
    const { firstName, lastName, joinDate } = user;
    const joinDateConcat = async (joinDate) => {
        try {
          const formattedDate = joinDate.slice(5, 7) + "/" + joinDate.slice(8, 10) + "/" + joinDate.slice(0, 4);
          return formattedDate;
        } catch (error) {
          console.log(error);
        }
      };

      const formattedJoinDate = joinDateConcat(joinDate);


    return(
        <div className="jumbotron jumbotron-fluid text-center" id="profile-header">
        <div className="container">
        <div className="row align-items-center">
            <div className="col mt-5">
                <ProfilePhotoLg />
        
        <p className="lead mt-1">{firstName}{' '}{lastName}</p>
        <p className="fw-light lh-sm">Joined: {formattedJoinDate}</p>
        <p className="fw-light lh-sm">Collection Size: {collectionSize}</p>
        </div>
        </div>
        </div>
        </div>

    )
};
