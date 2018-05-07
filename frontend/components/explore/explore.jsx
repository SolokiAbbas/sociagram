import React from 'react';
import ExploreUser from './explore_user';

class Explore extends React.Component{
  constructor(){
    this.randomUsers = [];
    this.selectRandom = this.selectRandom.bind(this);
  }

  selectRandom(){
    let randomNum1 = Math.floor(Math.random()*this.props.users.length);
    let randomNum2 = Math.floor(Math.random()*this.props.users.length);
    let randomNum3 = Math.floor(Math.random()*this.props.users.length);
    while(randomNum1 === randomNum2 || randomNum1 === randomNum3 || randomNum2 === randomNum3){
      randomNum1 = Math.floor(Math.random()*this.props.users.length);
      randomNum2 = Math.floor(Math.random()*this.props.users.length);
      randomNum3 = Math.floor(Math.random()*this.props.users.length);
    }
    this.randomUsers.push(this.props.users[randomNum1]);
    this.randomUsers.push(this.props.users[randomNum2]);
    this.randomUsers.push(this.props.users[randomNum3]);
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
