import React from "react";
import './VideoItem.css';

class VideoListItem extends React.Component{

    render() {
        const { video , getSelectedVideo} = this.props;
        return (
            <div onClick={() => getSelectedVideo(video)} className='item video-item'>
                <img className="ui image"
                     alt={video.snippet.description}
                     src={video.snippet.thumbnails.medium.url}
                />
                  <div className="content">
                      <div className="header">
                        { video.snippet.title }
                      </div>
                  </div>
            </div>
        );
    }
}

export default VideoListItem;