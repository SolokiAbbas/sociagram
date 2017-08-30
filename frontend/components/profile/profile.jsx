import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Profile extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id: null,
      username: null,
      Fname: null,
      Lname: null,
      email: null,
    imageFile: null,
    imageUrl: null,
    render: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadFile = this.uploadFile.bind(this);

  }

  componentDidMount(){
    const author = this.props.session.currentUser.id;
    if(typeof this.props.users[author] === 'undefined'){
      this.props.fetchAUser(author);
    }
  }

  componentWillReceiveProps(nextProps){
    const author = this.props.session.currentUser.id;
    debugger
      if(JSON.stringify(this.props.session.currentUser.image_url) !== JSON.stringify(nextProps.session.currentUser.image_url))
    {
      this.props.clearUsers();
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

  handleUnfollow(id){
    let followid;
    let other = parseInt(this.props.clicked_user.slice(8));
    this.props.users[other].followees.forEach(follow =>{
      if(follow.follower_id === this.props.session.currentUser.id){
        followid = follow.id;
      }
    });
    this.props.deleteAFollow(followid);
  }

  render(){
    let other = parseInt(this.props.clicked_user.slice(8));
    let current = this.props.users[other];
    let postcounter = 0;
    let followid;

    if(typeof current === 'undefined' && !isNaN(other)){
      this.props.fetchAUser(other);
    }
    if(this.props.allPosts.length === 0){
      this.props.fetchAllPosts();
    }
    if (this.props.clicked_user === "profile"){
          this.props.allPosts.forEach(post =>{
            if(post.author_id === this.props.session.currentUser.id){
              postcounter++;
          }
        });
          let allposts = this.props.allPosts.reverse();
      return(
        <section className="profile-section">

              <div className="profile-upload-button">
                <input className="profile-up-button" type="file" onChange={this.uploadFile}/>
                <div className="fake-upload">
                    <input className="no-input" />
                  <img className="user-pic" src={this.props.session.currentUser.image_url} alt="Profile Pic"/>
                </div>
              </div>

          <div className="profile-stat-rows">
              <div className="profile-user">
                <div>
                  {this.props.session.currentUser.username}
                </div>
                <div>
                  <button className="edit-profile">Edit Profile</button>
                </div>
                <div>
                  <img onClick={this.props.logout} className="logout-profile" src={"https://s3.amazonaws.com/sociagram-dev/posts/icons/logout.png"}/>
                </div>
              </div>

              <div>
                <ul className="stats-user">
                  <li className="post-counter">{postcounter}Posts</li>
                  <li className="follows-counter">Followers</li>
                  <li className="followers-counter">Following</li>
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
                return(
                  <div className="user-posts-container">
                    <img className="user-posts" src={post.image_url}/>
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
    {      this.props.users[other].followees.forEach(follow =>{
            if(follow.follower_id === this.props.session.currentUser.id){
              followid = follow.id;
            }
          });
          this.props.allPosts.forEach(post =>{
            if(post.author_id === current.id){
              postcounter++;
          }
        });
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
                {followid ? <button className="unfollow" onClick={() => this.handleUnfollow()}>UnFollow</button> : <button className="follow" onClick={() => this.handleFollow(current.id)}>Follow</button>}
              </li>
            </div>

            <div>
              <ul className="stats-user">
                <li className="post-counter">{postcounter}Posts</li>
                <li className="follows-counter">Followers</li>
                <li className="followers-counter">Following</li>
              </ul>
            </div>

        </div>
        <div className="profile-posts-container">
          {allposts.map(post => {
            if(post.author_id === current.id){
              return(
                <div className="user-posts-container">
                  <img className="user-posts" src={post.image_url}/>
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
