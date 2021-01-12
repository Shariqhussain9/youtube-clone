import React from 'react'
import { Grid } from "@material-ui/core";
import youtube from './api/youtube';
import SearchBar from './component/SearchBar';
import VideoDetails from './component/VideoDetails';
import VideoList from './component/VideoList';
class App extends React.Component {
  state = {
    selectedvideo: null,
    videos: []
  }


  componentDidMount() {
    this.handleSubmit("kaka");
  }
  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        part: "snippet",
        maxresult: 5,
        key: 'AIzaSyB1Z-_Lg_csk-GOL6YNz6rlDZDogTEtsLA',
        q: searchTerm
      }
    })

    console.log(response);

    this.setState({
      videos: response.data.items,
      selectedvideo: response.data.items[0]
    })

  }

  onVideoSelect = (video) => {
    this.setState({ selectedvideo: video });
    console.log("SElected", video);
  }
  render() {
    return (
      <Grid justify="center" container spacing={12}>
        <Grid item xs={12}>
          {/* Search Bar */}
          <SearchBar onFormSubmit={this.handleSubmit} />
        </Grid>

        <Grid item xs={8} >
          {/* Selected Video */}
          <VideoDetails video={this.state.selectedvideo} />
        </Grid>
        <Grid item xs={4}>
          {/* Video List */}
          <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
        </Grid>

      </Grid >
    )
  }
}
export default App;