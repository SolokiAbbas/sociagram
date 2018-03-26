import { connect } from 'react-redux';
import React from 'react';
import { updateUser } from '../../actions/users/users_action';
import EditItem from './edit_item';

const mapStateToProps = (state) =>{
  return {
    session: state.session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => dispatch(updateUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditItem);
