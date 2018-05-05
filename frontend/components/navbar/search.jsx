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

  componentWillReceiveProps(nextProps) {
    if (nextProps.props.location !== this.props.location) {
      this.setState({query: '', results: []});
    }
  }

  getInfo(){
    axios.post('/api/search', {username:  this.state.query, authenticity_token: ReactOnRails.authenticityToken(),})
      .then(({ data }) => {
        this.setState({
          results: data
        });
      });
  }

  handleInput(){
    return e => this.setState({query: e.currentTarget.value}, ()=>{
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo();
        }
      } else if (!this.state.query) {
        this.setState({results: []});
      }
      });
  }

  render(){
    return(
        <div className="search-container">
          <input className="navbar-search" placeholder="Search..." value={this.state.query}
              onChange={this.handleInput()}/>
            {this.state.results ? <Suggestions results={this.state.results} /> : <div></div> }
        </div>
      );
    }
}

export default Search;
