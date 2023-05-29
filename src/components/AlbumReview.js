import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions, Button } from "@mui/material";
import ProfilePhotoIcon from "./ProfilePhotoIcon";
import CardHeader from "@mui/material/CardHeader";
import Badge from "react-bootstrap/Badge";
import Stack from "@mui/material/Stack";
import Modal from "react-bootstrap/Modal";
import { deleteAlbum } from "../features/collection/collectionSlice";
import EditForm from "./EditForm";

export default function AlbumReview(props) {
  //get firstName from userDataSlice
  const user = useSelector((store) => store.userdata.user);
  const { firstName } = user;
  const dispatch = useDispatch();

  //receives the collectionItem as a prop, then destructures it
  const { collectionItem } = props;
  const {
    title,
    artistName,
    coverArt,
    releaseDate,
    myReview,
    tags,
    id,
    postDate,
  } = collectionItem;

  //useState for edit form modal

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    dispatch(deleteAlbum(id));
  };

  return (
    <Card sx={{ display: "flex" }}>
      <Box
        sx={{ display: "flex", flexDirection: "column", width: "min-content" }}
      >
        <CardMedia
          component="img"
          sx={{ maxWidth: 150, width: "auto", margin: 2 }}
          image={coverArt}
          alt="Album cover"
        />

        <CardContent sx={{ flex: "1 0 auto", min: 200 }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography component="div" variant="h6">
            {artistName}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {releaseDate}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={handleShow}>
            Edit
          </Button>
          <Button size="small" color="error" onClick={handleDelete}>
            Delete
          </Button>
        </CardActions>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditForm
              collectionItem={collectionItem}
              handleClose={handleClose}
            />
          </Modal.Body>
        </Modal>
      </Box>
      <Box
        sx={{ flex: "1 1 auto", margin: 2, paddingRight: 2 }}
        flexWrap="wrap"
      >
        <CardHeader
          sx={{ width: "auto" }}
          avatar={<ProfilePhotoIcon />}
          title={firstName}
          subheader={postDate}
        />
        <Box sx={{ display: "flex" }}>
          <Stack
            spacing={{ xs: 1, sm: 2, md: 2 }}
            direction={{ xs: "column", sm: "row" }}
            useFlexGap
          >
            {tags.map((tag, index) => (
              <Badge bg="warning" id="tags" key={index}>
                {tag}
              </Badge>
            ))}
          </Stack>
        </Box>

        <Box sx={{ typography: "body1" }}>{myReview}</Box>
      </Box>
    </Card>
  );
}
