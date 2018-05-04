import React from 'react';
import { Link } from 'react-router-dom';
import searchUsers from '../../util/users/users_api_util';
import Suggestions from './suggestions';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      query: '',
      results: [],
    };
    this.handleInput = this.handleInput.bind(this);
    this.getInfo = this.getInfo.bind(this);
  }

  getInfo(){
    searchUsers(this.state.query).then((data)=>{this.setState({results: data});});
  }

  handleInput(){
    return e => this.setState({query: e.currentTarget.value}, ()=>{
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo();
        }
      }else if (!this.state.query) {
      }
    });
  }

  render(){
    return(
      <div>
        <form>
            <input className="navbar-search" placeholder="Search..." onChange={this.handleInput()}/>
            <button onClick={()=>this.getInfo()}>Click</button>
        </form>
      </div>
    );
  }
}

export default Search;
