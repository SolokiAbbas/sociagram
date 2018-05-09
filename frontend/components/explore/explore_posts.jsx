import React from 'react';
import ProfileHover from '../profile/profile_hover';
import ProfileModal from '../profile/profile_modal';
import { Link, Route } from 'react-router-dom';

class ExplorePosts extends React.Component{
  constructor(props){
    super(props);
    this.randoms= [];
    this.allposts = [];
  }

  selectRandom(){
    let postlength = Object.keys(this.props.allPosts).length;
    let randomNum = Math.floor(Math.random()*postlength);
    let redo = true;
    this.randoms.push(randomNum);
    while(redo){
      if(randomNum !== 0 && !this.randoms.includes(randomNum)){
        this.randoms.push(randomNum);
      }
      randomNum = Math.floor(Math.random()*postlength);
      if(this.randoms.length === 9){
        redo = false;
      }
    }
  }

  render(){
    let postcounter = 0;
    let commentsCounter= 1;
    let current = this.props.session.currentUser;
    if(this.randoms.length === 0 ){
      this.selectRandom();
    }
      this.allposts = this.randoms.map(num => this.props.allPosts[num]);
      return(
        <div className="profile-posts-container exp-post">
          {this.allposts.map(post => {
              this.props.comments.map(comment =>{
                if(post.id === comment.post_id){
                  commentsCounter+=1;
                }
              });
            return(
              <div>
                <div className="modal fade" id={`bd-example-modal-lg-${post.id}`} tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <ProfileModal id={post.id} post={post} user={current} session={this.props.session}
                          createALike={this.props.createALike} deleteALike={this.props.deleteALike}
                          fetchAPost={this.props.fetchAPost} createABookmark={this.props.createABookmark}
                          deleteABookmark={this.props.deleteABookmark} saved={false}/>
                    </div>
                  </div>
                </div>

                <div className="user-posts-container">
                  <img className="user-posts" src={post.image_url}/>
                  <div className="profile-hover" data-toggle="modal" data-target={`#bd-example-modal-lg-${post.id}`}>
                    <ProfileHover id={post.id} likes={post.likes.length} comments={commentsCounter} />
                  </div>
                </div>
              </div>
                );
              })
            }
        </div>
      );

  }
}

export default ExplorePosts;
