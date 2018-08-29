import Redux from 'redux';

var videoListReducer = (state = [], action) => ({
  //TODO: define a reducer for the videoList field of our state.
  'CHANGE_VIDEO_LIST': action.videos,
}[action.type] || state);

export default videoListReducer;
