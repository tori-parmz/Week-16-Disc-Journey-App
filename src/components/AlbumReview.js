import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActions, Button } from '@mui/material';

export default function AlbumReview() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', width: 'auto' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        sx={{ width: 200 }}
        image="https://i.discogs.com/MCASre9uU0pQ3TdfiNK-6Fsb8HF0WEvm-8iOFNBlo60/rs:fit/g:sm/q:90/h:602/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc1ODYx/ODYtMTQ0NDY2NjQ4/Ny03NTU4LmpwZWc.jpeg"
        alt="Album cover"
      />
      
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Hounds of Love
          </Typography>
          <Typography component="div" variant="h6">
          Kate Bush
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            1985
          </Typography>
          
        </CardContent>
        <CardActions>
        <Button size="small" color="primary">
          Edit
        </Button>
        <Button size="small" color="secondary">
          Delete
        </Button>
      </CardActions>
      
      
      </Box>
      <Box sx={{ flex: '1 0 auto', margin: '1%' }}>
      <Typography variant="h6" component="div">
            User Name
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Date
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br></br>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>

      </Box>
      
    </Card>
  );
}