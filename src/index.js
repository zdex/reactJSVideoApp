import _ from 'lodash';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/searchbar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videolist';
import VideoDetail from './components/videodetails';

const APO_KEY = ''; //gmaheshwari2006
//const APO_KEY = '' //gauravautumn

/*YTSearch({ key: APO_KEY, term: 'Ripple,xrp' }, function (data) {
    console.log(data);
}) */

// 1. create component which will produce HTML
/*const App = () => { // here App is the component class
    return <div>
        <SearchBar/>
    </div>;
}*/
class App extends Component { // here App is the component class
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.onVideoSelect = this.onVideoSelect.bind(this);
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
        this.videoSearch("blockchain");
    }

    videoSearch(term) {
        YTSearch({ key: APO_KEY, term: term }, (videos) => {
            console.log("React videos: " + JSON.stringify(videos));
            //this.setState({videos: videos});
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });                       
        });
    }
    onVideoSelect = (selectedVideo) => {
        this.setState({selectedVideo: selectedVideo }, () => {
            console.log("new Video id is from state: " + this.state.selectedVideo.id.videoId);           
        });
    }

    forceUpdateHandler = () =>{
        this.forceUpdate();
      };

    render() {
        const debounceVideoSearch = _.debounce((term)=>{this.videoSearch(term)}, 1000);
        return <div>
            
            <SearchBar onSearch={debounceVideoSearch} />
            {this.state.selectedVideo != null ? (<VideoDetail video={this.state.selectedVideo} />) : ('Loading the video.....')}
            <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos} />
        </div>;
    }
}
// 2. put this generated HTML in the DOM
//{this.state.selectedVideo != null? (<VideoDetail video={this.state.selectedVideo}/>): ('Loading the video.....')}

//export default App

ReactDom.render(<App />, document.querySelector('.container')); //<App /> is the instance of App component class

/**
 * <SearchBar onSearch={term => {this.videoSearch(term)}} />
 * selectedVideo => {
                   debugger
                    console.log("set new video");
                    this.setState({selectedVideo});
                    console.log("new Video id is: " + this.state.selectedVideo.id.videoId);


 */