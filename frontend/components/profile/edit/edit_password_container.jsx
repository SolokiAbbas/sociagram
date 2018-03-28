import { connect } from 'react-redux';
import React from 'react';
import { updateUser } from '../../../actions/users/users_action';
import EditPassword from './edit_password';

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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPassword);
