import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfile, createNewUser } from "../features/userdata/userDataSlice";


export default function UpdateProfileForm(props) {
  const { handleClose } = props;
  const [newFirstName, setNewFirstName] = useState('');
  const [newLastName, setNewLastName] = useState('');
  const [newProfile, setNewProfile] = useState('');
  var radioValue = null;
  const dispatch = useDispatch();

  const handleCheck = (e) => {
    radioValue = e.target.checked;
    console.log(radioValue);
  };
  const handleSubmit = (e) => {

    if (newFirstName === "") {
      alert("First Name Required");
    } else if (newLastName === "") {
        alert("Last Name Required")
    } else if (radioValue === true) {

      e.preventDefault();

      const newDate = new Date();

      const newUserData = {
        firstName: newFirstName,
        lastName: newLastName,
        profilePhoto: newProfile || "./Assets/default-profile-photo.png",
        joinDate: newDate.toDateString()

      }
      dispatch(createNewUser(newUserData));
      handleClose();

    } else {
      const updatedUser = {
        firstName: newFirstName,
        lastName: newLastName,
        profilePhoto: newProfile || "./Assets/default-profile-photo.png",
      }
      dispatch(updateProfile(updatedUser));
      handleClose();
    }
    //function for onClick: if radioValue === false: update state

  }
    return (
      <div>

      <Form>
      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First Name" onChange={(e) => {
          setNewFirstName(e.target.value);
        }}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" onChange={(e) => {
          setNewLastName(e.target.value);
        }}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Update Profile Photo</Form.Label>
        <Form.Control type="text" placeholder="" onChange={(e) => {
          setNewProfile(e.target.value)
        }}/>
        <Form.Text className="text-muted">
          Input the image URL — optional
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Check 
        type="switch"
        id="custom-switch"
        label="New user"
        onChange={(e) => {handleCheck(e)
      }}

      />
        
        <Form.Text className="text-muted">
          Checking this will create a new join date.
        </Form.Text>
      </Form.Group>
      
      </Form>
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
    )
}