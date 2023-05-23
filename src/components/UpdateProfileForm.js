import { Button, Form } from "react-bootstrap";

export default function UpdateProfileForm() {
    return (
      <div>

      <Form>
      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First Name" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Update Profile Photo</Form.Label>
        <Form.Control type="text" placeholder="" />
        <Form.Text className="text-muted">
          Input the image URL
        </Form.Text>
      </Form.Group>
      </Form>
      <Button>Submit</Button>
    </div>
    )
}