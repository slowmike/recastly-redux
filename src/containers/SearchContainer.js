import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

const mapDispatchToProps = dispatch => {
  return {
    handleSearchInputChange: value => {
      dispatch(handleSearchChange(value));
    }
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(Search);
