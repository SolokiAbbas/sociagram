import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
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
    axios.post('/api/search', {username:  this.state.query})
      .then(({ data }) => {
        this.setState({
          results: data.data
        });
      }).then(()=>console.log(this.state));
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

        </form>
      </div>
    );
  }
}

export default Search;
