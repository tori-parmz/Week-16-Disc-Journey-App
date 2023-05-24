import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions, Button } from "@mui/material";
import ProfilePhotoIcon from "./ProfilePhotoIcon";
import CardHeader from "@mui/material/CardHeader";
import Badge from "react-bootstrap/Badge";
import { useSelector } from "react-redux";
import Stack from "@mui/material/Stack";
import EditModal from "./EditModal";

export default function AlbumReview(props) {
  const firstName = useSelector((store) => store.userdata.firstName);
  const lastName = useSelector((store) => store.userdata.lastName);
  let { collectionItem } = props;
  const { title, artistName, coverArt, releaseDate, myReview, tags, id } =
    collectionItem;

  return (
    <Card sx={{ display: "flex"}}>
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
          <Button size="small" color="primary">
            Edit
          </Button>
          <Button size="small" color="error">
            Delete
          </Button>
        </CardActions>
      </Box>
      <Box
        sx={{ flex: "1 1 auto", margin: 2, paddingRight: 2 }}
        flexWrap="wrap"
      >
        <CardHeader
          sx={{ width: 'auto'}}
          avatar={<ProfilePhotoIcon />}
          title={firstName}
          subheader={new Date().toLocaleString()}
        />
        <Box sx={{ display: "flex" }}>
          <Stack spacing={{ xs: 1, sm: 2, md: 2 }} direction={{ xs: 'column', sm: 'row' }} useFlexGap>
            {tags.map((tag, index) => {
              return (
                <Badge bg="warning" id="tags" key={index}>
                  {tag}
                </Badge>
              );
            })}
          </Stack>
        </Box>

        <Box sx={{ typography: "body1" }}>{myReview}</Box>
      </Box>
    </Card>
  );
}
