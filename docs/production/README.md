# Sociagram
=======================================================================

[Sociagram](https://sociagram-app.herokuapp.com/)

Sociagram is a Full-Stack web application based on Instagram. It utilizes Ruby on Rails on the backend, PostgreSQL database, and React.js with Redux framework on the frontend.

### Features and Implementation
=======================================================================

On the database side, users are stored with their avatars user a paperclip gem on ruby. Posts are stored much in the same way. A like table joins posts and likes, while a follows table joins users with other users.

Posts are based on a title, image, and comments.

[Posts](/Users/appacademy/Desktop/w9d4/sociagram/docs/production/Screen Shot 2017-08-31 at 8.34.40 PM.png)

Posts with comments are rendered using React render method:
``` javascript
return(
  <div className="posts-index">
    {allposts.map(post => <PostsIndexItem key={post.id} post={ post }
      session={ session } fetchAUser={this.props.fetchAUser}
      users={users} deleteALike={this.props.deleteALike} createALike={this.props.createALike}
      fetchAPost={this.props.fetchAPost}/>)}
  </div>
```
The props are passed in for each ```<PostsIndexItem>``` which renders a single post.

#### Follows
A user can follow another user when they click on the user's name. Each user carries a follower's id in their slice of state. This can be used to calculate the followers and retrieve data.


### Future Direction for the Project
========================================================================

In addition to these features, I plan to implement more features. I plan to include:

#### Search

Searching is fundamental in apps nowadays. There is so much data that it becomes vital.
