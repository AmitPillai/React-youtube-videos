import axios from 'axios';

const KEY ='AIzaSyDlRbPDCaSP2bVhSL4ML5hle8uZcfJRdcM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
});