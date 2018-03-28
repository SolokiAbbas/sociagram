import { connect } from 'react-redux';
import React from 'react';
import { updateUser } from '../../../actions/users/users_action';
import EditItem from './edit_item';

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

export default connect(mapStateToProps, mapDispatchToProps)(EditItem);
