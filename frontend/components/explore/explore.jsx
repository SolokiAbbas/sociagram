import React from 'react';
import ExploreUser from './explore_user';

class Explore extends React.Component{

  render(){
    return(
      <div>
        <div>
          <li>Discover People</li>
          <ExploreUser />
        </div>
        <div>
          <li>Explore</li>
        </div>
      </div>
    );
  }
}

export default Explore;
