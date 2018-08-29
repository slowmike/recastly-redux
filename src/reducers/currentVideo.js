import Redux from 'redux';

var currentVideoReducer = (state = null, action) => ({
  //TODO: define a reducer for the currentVideo field of our state.
  'CHANGE_VIDEO': action.video,
}[action.type] || state);


export default currentVideoReducer;
