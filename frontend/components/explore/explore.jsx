import React from 'react';
import ExploreUser from './explore_user';

class Explore extends React.Component{
  constructor(){
    super();
    this.randomUsers = [];
    this.selectRandom = this.selectRandom.bind(this);
  }
  componentDidMount(){
    this.props.fetchAllUsers();
    console.log(this.props);
  }

  selectRandom(){
    let userlength = Object.keys(this.props.users.allUsers).length;
    let randomNum1 = Math.floor(Math.random()*userlength);
    let randomNum2 = Math.floor(Math.random()*userlength);
    console.log(randomNum1);
    console.log(randomNum2);
    while(randomNum1 === randomNum2 && randomNum1 !== 0 && randomNum2 !== 0
    && randomNum1 !== 1 && randomNum2 !== 1 ){
      randomNum2 = Math.floor(Math.random()*userlength);
    }
    this.randomUsers.push(this.props.users[1]);
    this.randomUsers.push(this.props.users[randomNum1]);
    this.randomUsers.push(this.props.users[randomNum2]);
  }

  render(){
    if(typeof this.props.users.allUsers !== 'undefined'){
      this.selectRandom();
    return(
      <div>
        <div>
          <li>Discover People</li>
          <ExploreUser user={this.randomUsers[0]} createAFollow={this.props.createAFollow}
            deleteAFollow={this.props.deleteAFollow} />
          <ExploreUser user={this.randomUsers[1]} createAFollow={this.props.createAFollow}
            deleteAFollow={this.props.deleteAFollow} />
          <ExploreUser user={this.randomUsers[2]} createAFollow={this.props.createAFollow}
            deleteAFollow={this.props.deleteAFollow} />
        </div>
        <div>
          <li>Explore</li>
        </div>
      </div>
    );
  }else {
    return(<div></div>);
  }
  }
}

export default Explore;
