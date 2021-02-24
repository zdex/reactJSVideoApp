import React, {Component} from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) => {

    const videoList = props.videos.map(video => {
        return (
            <VideoListItem  
            onVideoSelect= {props.onVideoSelect}
            key={video.etag} video={video}></VideoListItem>
        );
    });

    return (
        <ul className="col-md-4 list-group">
           {props.videos.length}
           {videoList}
        </ul>
    );
}


export default VideoList;