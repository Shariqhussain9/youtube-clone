import React from 'react';
import { Paper, Typography } from '@material-ui/core';
const videoDetails = (props) => {
    const { video } = props;
    if (!video) return <div>Loading.....</div>
    const videosrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <React.Fragment>
            <Paper elevation={6} >
                <iframe frameBorder="0" height="100%" width="100%" title="VideoTitle" src={videosrc} />

            </Paper>
            <Paper elevation={6} style={{ padding: '15px' }}>
                <Typography varient="h3" >{video.snippet.title}</Typography>
                <Typography varient="h5" >{video.snippet.title}</Typography>
                <Typography varient="h5" >{video.snippet.title}</Typography>
            </Paper>
        </React.Fragment>
    )

}
export default videoDetails;