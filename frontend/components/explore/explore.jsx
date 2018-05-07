import React from 'react';
import ExploreUser from './explore_user';

class Explore extends React.Component{
  constructor(){
    this.randomUsers = []
  }

  selectRandom(){

    
  }

  render(){
    let randomUser1 = this.props.users[Math.floor(Math.random()*this.props.users.length)];
    let randomUser2 = this.props.users[Math.floor(Math.random()*this.props.users.length)];
    let randomUser3 = this.props.users[Math.floor(Math.random()*this.props.users.length)];
    return(
      <div>
        <div>
          <li>Discover People</li>
          <ExploreUser user={this.props.user} createAFollow={this.props.createAFollow}
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
