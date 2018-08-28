import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
 
  //TODO:  Write an asynchronous action to handle a video search!
  const cb = videos => {
    changeVideoList(videos);
    changeVideo(videos[0]);
  }
  searchYouTube({key: YOUTUBE_API_KEY, query: q}, cb);
  return cb;
};

export default handleVideoSearch;
