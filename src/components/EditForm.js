import { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useSelector } from "react-redux";

export default function EditForm(){
    const [albumTitle, setAlbumTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [albumArt, setAlbumArt] = useState('');
    const [trackList, setTrackList] = useState([]);
    const [tags, setTags] = useState([]);
    const [newReview, setNewReview] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const { collectionItem } = useSelector((store) => store.collection);

    

    



    return (
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Album Title</Form.Label>
        <Form.Control type="text" defaultValue={collectionItem.title}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Artist Name</Form.Label>
        <Form.Control type="text" defaultValue={collectionItem.artistName} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Album Art</Form.Label>
        <Form.Control type="text" defaultValue={collectionItem.coverArt} />
        <Form.Text className="text-muted">
          Input the image URL
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Release Date</Form.Label>
        <Form.Control type="text" defaultValue={collectionItem.releaseDate} onChange={(e) => {
          setReleaseDate(e.target.value);
        }} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Track List</Form.Label>
        <Form.Control type="text" defaultValue={collectionItem.trackList} onKeyUp={(e)=> {
          if(e.code === "Comma") {
            if(e.target.value.length < 2) {
              e.target.value = "";
            }

          }
          
        }} onChange={(e)=> {
          var newTrackList = e.target.value;
              setTrackList(newTrackList.split(', '))
              console.log(trackList)
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
        <Form.Control as="textarea" defaultValue={collectionItem.myReview} onChange={(e)=>{
          if(e.target.value.length > 1000){
            alert('Character Limit: 1000');
            e.target.value.slice(-1);
          } else {
            
          }

        }}/>
      </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Tags</Form.Label>
        <Form.Control type="text" defaultValue={collectionItem.tags} 
        onKeyUp={(e)=> {
          if(e.code === "Comma") {
            if(e.target.value.length < 2) {
              e.target.value = "";
            }

          }
          
        }} 
        onChange={(e)=> {
          var newTagList = e.target.value;
              setTags(newTagList.split(', '))
              console.log(tags)
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