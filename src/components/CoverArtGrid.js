import Grid from '@mui/material/Unstable_Grid2';
import CovertArtSm from "./CoverArtSm";
import * as React from 'react';
import Box from '@mui/material/Box';
import collectionItems from '../collection';

export default function CoverArtGrid() {

    return (
        <Box sx={{ flexGrow: 1 }} id="cover-art-grid">
        
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {collectionItems.map((collectionItem, index) => {
                return (
                    <Grid item xs={2} sm={4} md={4}>
            <CovertArtSm 
            key={index}
            collectionItem={collectionItem}
            {...collectionItem}
            />
            </Grid>
                )

            })}

                </Grid>
                </Box>


            
        
    )

}