import { connect } from 'react-redux';
import React from 'react';
import { fetchAUser, updateUser, receiveErrors } from '../../../actions/users/users_action';
import EditUser from './edit_user';

const mapStateToProps = (state, ownProps) =>{
  return {
    users: state.entities.users,
    session: state.session,
    path: ownProps.location.pathname,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user, id) => dispatch(updateUser(user, id)),
    fetchAUser: (id) => dispatch(fetchAUser(id)),
    clearErrors: () => dispatch(receiveErrors([])),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
