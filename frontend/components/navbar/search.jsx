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

  handleInput(search){
    this.setState({query: search});
  }

  render(){
    return(
      <div>
        <form>
        </form>
      </div>
    );
  }
}

export default Search;
