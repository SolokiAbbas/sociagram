import React from 'react';
import ExploreUser from './explore_user';

class Explore extends React.Component{
  constructor(){
    super();
    this.randomUsers = [];
    this.selectRandom = this.selectRandom.bind(this);
  }

  selectRandom(){
    let userlength = Object.keys(this.props.users).length;
    let randomNum1 = Math.floor(Math.random()*userlength);
    let randomNum2 = Math.floor(Math.random()*userlength);
    while(randomNum1 === randomNum2){
      randomNum2 = Math.floor(Math.random()*userlength);
    }
    this.randomUsers.push(this.props.users[1]);
    this.randomUsers.push(this.props.users[randomNum1]);
    this.randomUsers.push(this.props.users[randomNum2]);
  }

  render(){
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
  }
}

export default Explore;
