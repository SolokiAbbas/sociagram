import React from 'react';
import ProfileHover from './profile_hover';
import ProfileModal from './profile_modal';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Profile extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hover: false,
      id: null,
      username: null,
      Fname: null,
      Lname: null,
      email: null,
    imageFile: null,
    imageUrl: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  componentDidMount(){
    let authorId = this.props.session.currentUser.id;
    let otherUserId = this.props.clicked_user;
    if(otherUserId){
      this.props.fetchAUser(authorId).then(()=> this.props.fetchAUser(otherUserId)).then(()=> this.props.fetchAllPosts());
    }else {

      this.props.fetchAUser(authorId).then(()=> this.props.fetchAllPosts());

    }
  }

  componentWillReceiveProps(nextProps){
    let otherUserId = this.props.clicked_user;
    let nextUserId = nextProps.clicked_user;
    let authorId = this.props.session.currentUser.id;
    if(otherUserId !== nextUserId && typeof nextUserId !== 'undefined'){
        this.props.fetchAUser(nextUserId);
    }
  }

  uploadFile(e){
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({id: this.props.session.currentUser.id, username: this.props.session.currentUser.username,
        Fname: this.props.session.currentUser.Fname, Lname: this.props.session.currentUser.Lname,
        email: this.props.session.currentUser.email,
        imageFile: file, imageUrl: fileReader.result, imageName: file.name }, this.handleSubmit);
    };
    if (file) { fileReader.readAsDataURL(file);}

  }

  handleSubmit(){
    const formData = new FormData();
    formData.append("user[id]", this.state.id);
    formData.append("user[username]", this.state.username);
    formData.append("user[Fname]", this.state.Fname);
    formData.append("user[Lname]", this.state.Lname);
    formData.append("user[email]", this.state.email);

    if (this.state.imageFile) {
      formData.append("user[avatar]", this.state.imageFile);
    }
    this.props.updateUser(formData, this.state.id);
  }

  handleFollow(id){
    let follow = {followee_id: id};
    this.props.createAFollow(follow);
  }

  handleUnfollow(){
    let currentId =this.props.session.currentUser.id;
    let other = this.props.clicked_user;
    this.props.deleteAFollow(other);
  }

  handleEnter(){
    this.setState({ hover: true});
  }

  handleLeave(){
    this.setState({ hover: false});
  }

  render(){
    let other = this.props.clicked_user;
    let current = this.props.users[other];
    let postcounter = 0;
    let author = this.props.session.currentUser.id;
    let commentsCounter= 0;

    if (typeof this.props.clicked_user === 'undefined' && this.props.users[author]){

          this.props.allPosts.forEach(post =>{
            if(post.author_id === this.props.session.currentUser.id){
              postcounter++;
          }
        });

        let allfollowers = this.props.users[author].followers.length;
        let allfollowings = this.props.users[author].following.length;
        let allposts = this.props.allPosts.reverse();

      return(
        <section className="profile-section">

              <div className="profile-upload-button">
                <input className="profile-up-button" type="file" onChange={this.uploadFile}/>
                <div className="fake-upload">
                    <input className="no-input" />
                  <img className="user-pic" src={this.props.users[author].image_url} alt="Profile Pic"/>
                </div>
              </div>

          <div className="profile-stat-rows">
              <div className="profile-user">
                <div>
                  {this.props.session.currentUser.username}
                </div>
                <div>
                  <img onClick={this.props.logout} className="logout-profile" src={"https://s3.amazonaws.com/sociagram-dev/posts/icons/logout.png"}/>
                </div>
              </div>

              <div>
                <ul className="stats-user">
                  <li className="post-counter">{postcounter} Posts</li>
                  <li className="follows-counter">{allfollowers} Followers</li>
                  <li className="followers-counter">{allfollowings} Following</li>
                </ul>
              </div>

              <div className="profile-name">
                <div className="profile-fname">{this.props.session.currentUser.Fname}</div>
                <div className="profile-lname">{this.props.session.currentUser.Lname}</div>
            </div>
          </div>
          <div className="profile-posts-container">
            {allposts.map(post => {
              if(post.author_id === this.props.session.currentUser.id){
                commentsCounter = 0;
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
                          <ProfileModal post={post} user={this.props.session.currentUser} createALike={this.props.createALike} deleteALike={this.props.deleteALike}/>
                        </div>
                      </div>
                    </div>

                  <div className="user-posts-container">
                    <img className="user-posts" src={post.image_url}/>
                    <div className="profile-hover" data-toggle="modal" data-target={`#bd-example-modal-lg-${post.id}`}>
                      <ProfileHover likes={post.likes.length} comments={commentsCounter} />
                    </div>
                  </div>
                </div>
                  );
                }
              })
            }
          </div>
        </section>
      );
    }else if(!current){
      return(<div></div>);
    }else
    {
      let followid;
      this.props.users[author].following.forEach(id =>{
        if(id.followee_id === current.id){
          followid = id;
        }
      });
          this.props.allPosts.forEach(post =>{
            if(post.author_id === current.id){
              postcounter++;
          }
        });

        let allfollowers = this.props.users[other].followers.length;
        let allfollowings = this.props.users[other].following.length;

        let allposts = this.props.allPosts.reverse();
    return(
      <section className="profile-section">
        <div>
            <img className="user-pic" src={current.image_url}/>
        </div>
        <div className="profile-stat-rows">
            <div className="profile-user">
              <div>
                {current.username}
              </div>
              <li>
                {followid ? <button className="follow" onClick={() => this.handleUnfollow()}>Unfollow</button> : <button className="unfollow" onClick={() => this.handleFollow(current.id)}>Follow</button>}
              </li>
            </div>

            <div className="post-info-container">
              <ul className="stats-user">
                <li className="post-counter">{postcounter} Posts</li>
                <li className="follows-counter">{allfollowers} Followers</li>
                <li className="followers-counter">{allfollowings} Following</li>
              </ul>
            </div>

        </div>
        <div className="profile-posts-container">
          {allposts.map(post => {
            if(post.author_id === current.id){
              commentsCounter = 0;
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
                        <ProfileModal post={post} user={current} createALike={this.props.createALike} deleteALike={this.props.deleteALike}/>
                      </div>
                    </div>
                  </div>

                <div className="user-posts-container">
                  <img className="user-posts" src={post.image_url}/>
                  <div className="profile-hover" data-toggle="modal" data-target={`#bd-example-modal-lg-${post.id}`}>
                    <ProfileHover likes={post.likes.length} comments={commentsCounter} />
                  </div>
                </div>
              </div>
              );
            }
          })
        }
      </div>
      </section>
    );
  }}
}

export default Profile;
