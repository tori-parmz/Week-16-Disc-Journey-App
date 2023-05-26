import { Button, Form } from "react-bootstrap";
import { useState } from "react";

export default function UpdateProfileForm() {
  const [newFirstName, setNewFirstName] = useState('');
  const [newLastName, setNewLastName] = useState('');
  const [newProfile, setNewProfile] = useState('');
  var radioValue = null;

  const handleCheck = (e) => {
    radioValue = e.target.checked;
    console.log(radioValue);
  };

  //function for onClick: if radioValue === false: update state
  //if radioValue === true, create new user object, delete data & post user object 
  //default profile photo
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
          Input the image URL
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
      <Button>Submit</Button>
    </div>
    )
}