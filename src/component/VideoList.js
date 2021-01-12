import React from 'react';
import { Grid } from '@material-ui/core';
import VideoItem from './VideoItem';
const VideoList = props => {


    const { videos, onVideoSelect } = props;
    const listofvideo = videos.map((video, id) =>
        <VideoItem video={video} key={id} onvideoSelect={onVideoSelect} />
    )
    return (
        <Grid container spacing={10}>
            { listofvideo}
        </Grid>
    )

}

export default VideoList;