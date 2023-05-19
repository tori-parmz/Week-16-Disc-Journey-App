import Grid from '@mui/material/Unstable_Grid2';
import CovertArtSm from "./CoverArtSm";

export default function CoverArtGrid() {
    return (
        <div className="cover-art-grid">
            <Grid container spacing={3}>
                
                    {/* map cover art */}
                    <CovertArtSm />
                    <CovertArtSm />
                    <CovertArtSm />               
                    <CovertArtSm />
                    <CovertArtSm />
                    <CovertArtSm />
                    <CovertArtSm />
                    <CovertArtSm />

                </Grid>


            


        </div>
    )

}