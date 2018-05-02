import React from 'react';
import { Link } from 'react-router-dom';
import searchUsers from '../../../util/users/users_api_util';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      query: ''
    };
  }

  render(){
    return(
      <div>
      </div>
    );
  }
}

export default Search;
