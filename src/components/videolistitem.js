import React, { Component } from 'react';

class VideoListItem extends Component {
    constructor(props) {
        super(props);
        this.video = props.video;
        this.onVideoSelect = props.onVideoSelect;
        console.log("video is: " + JSON.stringify(this.video));
        this.state = {
            imageUrl: this.video.snippet.thumbnails.default.url,
            title: this.video.snippet.title
        }
        this.callOnVideoSelect = this.callOnVideoSelect.bind(this);
    }

    callOnVideoSelect = () => {
        this.onVideoSelect(this.video);
        console.log("onclick: " + this.video.id.videoId)
    }
    render() {
        return (
            <li onClick={this.callOnVideoSelect} className="list-group-item">

                <div className="video-list media">
                    <div className="media-left">
                        <img className="media-object" src={this.state.imageUrl} />
                    </div>
                    <div className="media-body">
                        <div className="media-heading">{this.state.title}</div>
                    </div>

                </div>
            </li>
        );
    }
}
export default VideoListItem;

/*

                    <div className="media-left">
                        <img className="media-object" src={video.snippet.thumbnails.default.url} />
                    </div>
                    <div className="media-body">
                        <div className="media-heading">{video.snippet.title}</div>
                    </div>
 */