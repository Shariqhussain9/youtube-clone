import React from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
const VideoItem = props => {
    const { video, onvideoSelect } = props;
    return (
        <Grid item xs={12}>
            <Paper style={{ display: 'Flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => onvideoSelect(video)} >
                <img style={{ marginRight: '20px' }} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
                <Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>
                <h3>{video.snippet.title}</h3>
            </Paper>
        </Grid>
    )
}
export default VideoItem;