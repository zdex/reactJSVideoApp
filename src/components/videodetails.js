import React, { Component } from 'react';

/*   const VideoDetail = ({video}) => {   
   
   if (video == undefined) {
       return <div>Loading...</div>;
   }
   console.log("video list in video detail is: " + JSON.stringify(video));
   if (video != undefined) {
       this.state = {
           title: video.snippet.title,
           description: video.snippet.description
       }
       console.log("title: " + this.state.title);
       console.log("description: " + this.state.description);
       const videoId = video.id.videoId;
       // const url = 'https://www.youtube.com/embed/' + videoId;
       const url = `https://www.youtube.com/embed/${videoId}`;
   }
 

 
  

   return (
       <div className="video-detail col-md-8">
           <div className="embed-responsive embed-responsive-16by9">
               <iframe class="embed-responsive-item" src="{url}"></iframe>
           </div>
           <div className="detail">
               {this.state.title?(<div>{this.state.title}</div>):('Loading title')}
               
               {this.state.description?(<div>{this.state.description}</div>):('Loading desc')}

           </div>
       </div>
   );
 
}; */

class VideoDetail extends Component {
    constructor(props) {
        super(props)
        const video = props.video;
        
        console.log("video detail is: " + JSON.stringify(video));

        this.state = {
            title: '',
            description: '',
            url: ''
        }
        if (video) {
            const videoId = video.id.videoId;
            this.state = {
                title: video.snippet.title,
                description: video.snippet.description,
                url: `https://www.youtube.com/embed/${videoId}`
            };
            console.log("title: " + this.state.title);
            console.log("description: " + this.state.description);
            console.log("urls is: " + this.state.url);
        }
    }

    render() {
        return (
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={this.state.url}></iframe>
                </div>
                <div className="details">
                    <div>{this.state.title}</div>
                    <div>{this.state.description}</div>
                </div>
            </div>
        );

    }
};

export default VideoDetail;

/*
  if (this.video == undefined) {
            return <div>no video</div>;
        }
<div>{this.state.title}</div>
                    <div>{this.state.description}</div>
 {this.state.title ? (<div>{this.state.title}</div>) : ('Loading title')}

                    {this.state.description ? (<div>{this.state.description}</div>) : ('Loading desc')} */