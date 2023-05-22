import { Button } from "react-bootstrap";

export default function UpdateProfileForm() {
    return (
        <form method="post" enctype="multipart/form-data">
  <div>
    <label for="profile_pic">Choose file to upload</label>
    <input
      type="file"
      id="profile_pic"
      name="profile_pic"
      accept=".jpg, .jpeg, .png" />
  </div>
  <div>
    <Button>Submit</Button>
  </div>
</form>
    )
}