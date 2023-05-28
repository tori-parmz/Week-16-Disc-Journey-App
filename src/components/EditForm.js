import { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useDispatch } from "react-redux";
import { updatePost } from "../features/collection/collectionSlice";

export default function EditForm(props) {

  // receives collectionItem and the handleClose for the modal as props
  const { collectionItem, handleClose } = props;
  // destructures collectionItem
  const { title, artistName, coverArt, releaseDate, myReview, tags, id } =
    collectionItem;
  const dispatch = useDispatch();

  // form begins default filled with the existing data in state

  const [editedAlbumTitle, setEditedAlbumTitle] = useState(title);
  const [editedArtist, setEditedArtist] = useState(artistName);
  const [editedAlbumArt, setEditedAlbumArt] = useState(coverArt);
  // const [editedTrackList, setEditedTrackList] = useState(trackList.toString());
  const [editedTags, setEditedTags] = useState(tags.toString());
  const [editedReview, setEditedReview] = useState(myReview);
  const [editedReleaseDate, setEditedReleaseDate] = useState(releaseDate);


  const updateCollectionItem = (e) => {
    e.preventDefault();

    if (editedAlbumTitle === "") {
      //find out more about required tag
      alert("Album Title Required");
    } else if (editedArtist === "") {
      alert("Artist Name Required");
    } else if (editedReleaseDate === "") {
      alert("Release Date Required");
    } else if (editedReview === "") {
      alert("Album Review Required");
    } else {

      // creates object to send updated data
      const updatedCollectionItem = {
        title: editedAlbumTitle,
        artistName: editedArtist,
        releaseDate: editedReleaseDate,
        // trackList: editedTrackList.split(","),
        coverArt: editedAlbumArt || "./Assets/default-album-art.png",
        myReview: editedReview,
        tags: editedTags.split(","), //splits up the tag string into an array
        id: id,
      };

      // needs to send id and updatedCollection destructured in an object
      // createAsyncThunk only take one argument, therefore send as an object

      dispatch(updatePost({ id, updatedCollectionItem }));
      handleClose();
    }
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Album Title</Form.Label>
        <Form.Control
          type="text"
          defaultValue={editedAlbumTitle}
          onChange={(e) => {
            setEditedAlbumTitle(e.target.value);
            console.log(editedAlbumTitle);
          }}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Artist Name</Form.Label>
        <Form.Control
          type="text"
          defaultValue={editedArtist}
          onChange={(e) => {
            setEditedArtist(e.target.value);
            console.log(editedArtist);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Album Art</Form.Label>
        <Form.Control
          type="text"
          defaultValue={editedAlbumArt}
          onChange={(e) => {
            setEditedAlbumArt(e.target.value);
            console.log(editedAlbumArt);
          }}
        />
        <Form.Text className="text-muted">Input the image URL</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Release Date</Form.Label>
        <Form.Control
          type="text"
          defaultValue={editedReleaseDate}
          onChange={(e) => {
            setEditedReleaseDate(e.target.value);
            console.log(editedReleaseDate);
          }}
        />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Track List</Form.Label>
        <Form.Control type="text" defaultValue={editedTrackList} onKeyUp={(e)=> {
          if(e.code === 188) {
            if(e.target.value.length < 3) {
              e.target.value = "";
            }

          }
          
        }} onChange={(e)=> {
          const newTrackList = e.target.value.trim();
            if (newTrackList.length === 0) {
              setEditedTrackList([]);
            } else {
              setEditedTrackList(newTrackList);
              console.log(editedTrackList);
            }
          }} />
        <Form.Text className="text-muted">
          Input song titles separated by a commas followed by no spaces.
        </Form.Text>
      </Form.Group> */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <FloatingLabel
          controlId="floatingTextarea"
          label="Review"
          className="mb-3"
        >
          <Form.Control
            as="textarea"
            defaultValue={editedReview}
            onChange={(e) => {
              if (e.target.value.length > 1000) {
                //character limit is 1000
                alert("Character Limit: 1000");
                e.target.value = e.target.value.slice(0, 1000);
              } else {
                setEditedReview(e.target.value);
                console.log(editedReview);
              }
            }}
          />
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Tags</Form.Label>
        <Form.Control
          type="text"
          defaultValue={editedTags}
          onChange={(e) => {
            const newTagList = e.target.value.trim();
            if (newTagList.length === 0) {
              setEditedTags([]); //sets to empty array if no tags
            } else {
              setEditedTags(newTagList);
              // console.log(newTagList);
            }
          }}
        />
        <Form.Text className="text-muted">
          Input tags separated by a commas followed by no spaces.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" onClick={updateCollectionItem}>
        Submit
      </Button>
    </Form>
  );
}
