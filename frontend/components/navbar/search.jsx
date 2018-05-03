import React from 'react';
import { Link } from 'react-router-dom';
import searchUsers from '../../../util/users/users_api_util';
import Suggestions from './suggestions';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      query: ''
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e){
    this.setState({query: e.currentTarget.value});
  }

  render(){
    return(
      <div>
        <form>
          <input placeholder="Search..." onChange={this.handleInput()}/>
            <Suggestions />
        </form>
      </div>
    );
  }
}

export default Search;
