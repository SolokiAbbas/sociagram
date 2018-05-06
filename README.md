# Sociagram
=======================================================================

[Sociagram](https://sociagram-app.herokuapp.com/)

Sociagram is a Full-Stack web application based on Instagram. It utilizes Ruby on Rails on the backend, PostgreSQL database, and React.js with Redux framework on the frontend.
Sociagram will allow the users:

* Create an account
* Log in and out
* Create a new posts
* Make comments on posts
* Delete own comments
* Like posts
* Delete own posts
* Follow and unfollow other users
* Check out their current profile
* Check out other user's profile
* Edit Profile
* Change Password or other data
* Profile Modal when Post clicked on in Profile Page
* Posts can be bookmarked
* Saved Posts can be viewed in Profile Page
* Can search for Users while leads to their profile page


### Overall Structure
=======================================================================
**Back End**

This app was built with Ruby on Rails. The database used was PostgreSQL.
The data request were made with AJAX and fulfilled by JSON Jbuilder.

**Front End**

The front end was built completely by React.js and Redux.
Bootstrap styling.

**Libraries and Gems used:**
* React.js
* Redux
* BCrypt
* Paperclip - used to store images to Amazon Web Services
* figaro secure api keys with Amazon Web Services
* PGSearch
* aws-sdk
* faker
* Jbuilder


### Features and Implementation
=======================================================================

On the database side, users are stored with their avatars user a paperclip gem on ruby. Posts are stored much in the same way. A like table joins posts and likes, while a follows table joins users with other users.

Posts are based on a title, image, and comments.

[Posts](/docs/production/Screenshot_of_posts.png)

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
=======================================================================

In addition to these features, I plan to implement more features. I plan to include:

* Explore should have some users in it and random posts 
* Fix initial log in when users log in (first time) and get recommendations

* Add Hashtags to clickable groups on posts
* Add Handles to clickable people
