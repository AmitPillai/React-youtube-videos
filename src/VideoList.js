import React from "react";
import VideoListItem from "./VideoListItem";

const VideoList = props => {
        const {videos, getSelectedVideo} = props;
        return (
                videos.map( video => {
                    return (
                        <div key={video.id.videoId} className='ui relaxed divided list'>
                            <VideoListItem
                                video={video}
                                getSelectedVideo={getSelectedVideo}
                            />
                        </div>
                        )
                })
        );
}

export default VideoList;