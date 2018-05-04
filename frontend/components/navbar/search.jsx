import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactOnRails from "react-on-rails";
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
    axios.post('/api/search', {username:  this.state.query, authenticity_token: ReactOnRails.authenticityToken(),})
      .then(({ data }) => {
        this.setState({
          results: data
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
        <input className="navbar-search" placeholder="Search..." onChange={this.handleInput()}/>
        {this.state.results ? <Suggestions results={this.state.results} /> : "" }
      </div>
    );
  }
}

export default Search;
