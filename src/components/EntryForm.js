import React, { useState } from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { postAlbumReview } from "../features/collection/collectionSlice";

// import './Assets/defalut-album-art.png'

export default function EntryForm() {
  const [albumTitle, setAlbumTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [albumArt, setAlbumArt] = useState("");
  // const [trackList, setTrackList] = useState([]);
  const [releaseDate, setReleaseDate] = useState("");
  const [tags, setTags] = useState([]);
  const [newReview, setNewReview] = useState("");
  const dispatch = useDispatch();

  const postToCollection = (e) => {
    e.preventDefault();

    if (albumTitle === "") {
      alert("Album Title Required");
    } else if (artist === "") {
      alert("Artist Name Required");
    } else if (releaseDate === "") {
      alert("Release Date Required");
    } else if (newReview === "") {
      alert("Album Review Required");
    } else {
      const newCollectionItem = {
        title: albumTitle,
        artistName: artist,
        releaseDate: releaseDate,
        // trackList: trackList.split(" ,"),
        coverArt: albumArt || "./Assets/default-album-art.png",
        myReview: newReview,
        tags: tags.split(" ,"),
      };

      dispatch(postAlbumReview(newCollectionItem));

      setAlbumTitle("");
      setAlbumArt("");
      setArtist("");
      setReleaseDate("");
      setTags([]);
      setNewReview("");
      // setTrackList([]);
    }
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Album Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Album Title"
          value={albumTitle}
          onChange={(e) => setAlbumTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Artist Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Artist Name"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Album Art</Form.Label>
        <Form.Control
          type="text"
          placeholder=""
          value={albumArt}
          onChange={(e) => setAlbumArt(e.target.value)}
        />
        <Form.Text className="text-muted">Input the image URL</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Release Date</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ex: 2023"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
        />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Track List</Form.Label>
        <Form.Control
          type="text"
          placeholder=""
          value={trackList}
          onChange={(e) => {
            const newTrackList = e.target.value;
            if (newTrackList.length === 0) {
              setTrackList([]);
            } else {
              setTrackList(newTrackList);
            }
          }}
        />
        <Form.Text className="text-muted">
          Input song titles separated by a comma and space.
        </Form.Text>
      </Form.Group> */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <FloatingLabel controlId="floatingTextarea" label="Review" className="mb-3">
          <Form.Control
            as="textarea"
            value={newReview}
            onChange={(e) => {
              if (e.target.value.length > 1000) {
                alert("Character Limit: 1000");
                e.target.value = e.target.value.slice(0, 1000);
              } else {
                setNewReview(e.target.value);
              }
            }}
          />
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Tags</Form.Label>
        <Form.Control
          type="text"
          placeholder=""
          value={tags}
          onChange={(e) => {
            const newTagList = e.target.value;
            if (newTagList.length === 0) {
              setTags([]);
            } else {
              setTags(newTagList);
            }
          }}
        />
        <Form.Text className="text-muted">
          Input tags separated by a comma and space.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={postToCollection}>
        Submit
      </Button>
    </Form>
  );
}
