import Grid from '@mui/material/Unstable_Grid2';
import CovertArtSm from "./CoverArtSm";
import * as React from 'react';
import Box from '@mui/material/Box';

export default function CoverArtGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
        
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={2} sm={4} md={4}>
            <CovertArtSm />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
            <CovertArtSm />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
            <CovertArtSm />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
            <CovertArtSm />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
            <CovertArtSm />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
            <CovertArtSm />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
            <CovertArtSm />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
            <CovertArtSm />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
            <CovertArtSm />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
            <CovertArtSm />
            </Grid>
            
            
                </Grid>
                </Box>
        
    )

}