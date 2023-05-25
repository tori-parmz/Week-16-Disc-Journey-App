import { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { postAlbumReview } from "../features/collection/collectionSlice";
import FloatingLabel from 'react-bootstrap/FloatingLabel';

//needs to dispatch create method

export default function EntryForm(){
    const [albumTitle, setAlbumTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [albumArt, setAlbumArt] = useState('');
    const [trackList, setTrackList] = useState([]);
    const [releaseDate, setReleaseDate] = useState('')
    const [tags, setTags] = useState([]);
    const [newReview, setNewReview] = useState('');
    const dispatch = useDispatch();

    const postToCollection = (e) => {
      e.preventDefault();
      const newCollectionItem = {
      title: albumTitle,
      artistName: artist,
      releaseDate: releaseDate,
      tracklist: trackList,
      coverArt: albumArt,
      myReview: newReview
      };

      dispatch(postAlbumReview(newCollectionItem));
      setAlbumTitle('');
      setAlbumArt('');
      setArtist('');
      setReleaseDate('');
      setTags([]);
      setNewReview('');
      setTrackList('');




    }
    return (
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Album Title</Form.Label>
        <Form.Control type="text" placeholder="Album Title" value={albumTitle} onChange={(e) => {
          setAlbumTitle(e.target.value);
        }} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Artist Name</Form.Label>
        <Form.Control type="text" placeholder="Artist Name" value={artist} onChange={(e) => {
          setArtist(e.target.value);
        }} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Album Art</Form.Label>
        <Form.Control type="text" placeholder="" value={albumArt} onChange={(e) => {
          setAlbumArt(e.target.value);
        }} />
        <Form.Text className="text-muted">
          Input the image URL
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Release Date</Form.Label>
        <Form.Control type="text" placeholder="Ex: 2023" value={releaseDate} onChange={(e) => {
          setReleaseDate(e.target.value);
        }} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Track List</Form.Label>
        <Form.Control type="text" placeholder="" value={trackList.join(', ')} onKeyUp={(e)=> {
          if(e.code === "Comma") {
            if(e.target.value.length < 3) {
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
        <Form.Control as="textarea" value={newReview} onChange={(e)=>{
          if(e.target.value.length > 1000){
            alert('Character Limit: 1000');
            e.target.value = e.target.value.slice(0, 1000);
          } else {

            setNewReview(e.target.value);

          }

        }}/>
      </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Tags</Form.Label>
        <Form.Control type="text" placeholder=""
        value={tags.join(', ')} 
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
        }} />
        <Form.Text className="text-muted">
          Input tags separated by commas with no spaces.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={postToCollection}>
        Submit
      </Button>
    </Form>
    )


};