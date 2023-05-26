import { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useSelector } from "react-redux";

export default function EditForm(props){
  const { collectionItem, trackList } = props;
  const { title, artistName, coverArt, releaseDate, myReview, tags, id } = collectionItem;
    const [editedAlbumTitle, setEditedAlbumTitle] = useState(`${title}`);
    const [editdArtist, setEditedArtist] = useState(`${artistName}`);
    const [editedAlbumArt, setEditedAlbumArt] = useState(`${coverArt}`);
    const [editedTrackList, setEditedTrackList] = useState(trackList);
    const [editedTags, setEditedTags] = useState(tags);
    const [editedReview, setEditedReview] = useState(`${myReview}`);
    const [editedReleaseDate, setEditedReleaseDate] = useState(`${releaseDate}`);

    console.log(trackList);
    console.log(tags);


    // const postToCollection = (e) => {
    //   e.preventDefault();
  
    //   if (albumTitle === "") {
    //     alert("Album Title Required");
    //   } else if (artist === "") {
    //     alert("Artist Name Required");
    //   } else if (releaseDate === "") {
    //     alert("Release Date Required");
    //   } else if (newReview === "") {
    //     alert("Album Review Required");
    //   } else {
    //     const newCollectionItem = {
    //       title: albumTitle,
    //       artistName: artist,
    //       releaseDate: releaseDate,
    //       tracklist: trackList.split(","),
    //       coverArt: albumArt || "./Assets/default-album-art.png",
    //       myReview: newReview,
    //       tags: tags.split(","),
    //     };
  
    //     dispatch(postAlbumReview(newCollectionItem));
  
    //     setAlbumTitle("");
    //     setAlbumArt("");
    //     setArtist("");
    //     setReleaseDate("");
    //     setTags([]);
    //     setNewReview("");
    //     setTrackList([]);
    //   }
    // };

    return (
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Album Title</Form.Label>
        <Form.Control type="text" value={editedAlbumTitle}
        onChange={(e) => {
          setEditedAlbumTitle(e.target.value);}}
          />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Artist Name</Form.Label>
        <Form.Control type="text" value={editdArtist}
        onChange={(e) => {
          setEditedArtist(e.target.value);
        }} 
        
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Album Art</Form.Label>
        <Form.Control type="text" value={editedAlbumArt}
        onChange={(e) => {
          setEditedAlbumArt(e.target.value);
        }}
        
        />
        <Form.Text className="text-muted">
          Input the image URL
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Release Date</Form.Label>
        <Form.Control type="text" value={editedReleaseDate} onChange={(e) => {
          setEditedReleaseDate(e.target.value);
        }} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Track List</Form.Label>
        <Form.Control type="text" value={editedTrackList} onKeyUp={(e)=> {
          if(e.code === "Comma") {
            if(e.target.value.length < 3) {
              e.target.value = "";
            }

          }
          
        }} onChange={(e)=> {
          var newTrackList = e.target.value;
          setEditedTrackList(newTrackList)
        }} />
        <Form.Text className="text-muted">
          Input song titles separated by commas with no spaces.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <FloatingLabel
        controlId="floatingTextarea"
        label="Review"
        className="mb-3"
        >
        <Form.Control as="textarea" value={editedReview} onChange={(e)=>{
          if(e.target.value.length > 1000){
            alert('Character Limit: 1000');
            e.target.value = e.target.value.slice(0, 1000);
          } else {
            setEditedReview(e.target.value);  
          }

        }}/>
      </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Tags</Form.Label>
        <Form.Control type="text" value={editedTags}
        onKeyUp={(e)=> {
          if(e.code === "Comma") {
            if(e.target.value.length < 3) {
              e.target.value = "";
            }

          }
          
        }} 
        onChange={(e)=> {
          var newTagList = e.target.value;
          setEditedTags(newTagList)
        }} />
        <Form.Text className="text-muted">
          Input tags separated by commas with no spaces.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    )


};