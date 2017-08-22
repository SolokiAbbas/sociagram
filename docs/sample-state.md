```js
{
  entities: {
    users: {
      1: {
        id: 1,
        username: 'Guest',
        handle: '@guest',
	follow_id: [7,8],
	like_id: [1,2,3],
        posts_ids: [1, 3],
      },
      7: {
        id: 2,
        username: 'FluffyBear',
        handle: '@floof',
	follow_id: [7,8],
	like_id: [1,2,3],
        posts_ids: [2, 10, 11],
      }
    },
    comments: {
      1: {
        id : 1,
        body: "oh hai!",
        user_id: 1
      },
      2: {
        id : 2,
        body: "my floooof is amaaazing!",
        user_id: 7
      },
      3: {
        id : 3,
        body: "my guest tweets are dull",
        user_id: 1
      },
      10: {
        id : 10,
        body: "I like snacking on berries!",
        user_id: 7
      },
      11: {
        id : 11,
        body: "mayhaps I will sleep for the winter",
        user_id: 7
      }
    },
    posts: {
      1: {
	id: 1,
	body: "this is google",
	image: "www.google.com",
	comments_id: [6,9],
	user_id: 1
	},
      2: {
	id: 2,
	image: "www.yahoo.com",
	body: "this is yahoo",
	comments_id: [1,2],
	user_id: 2
	}

  },
  ui: {
    loading: true/false,
  },
  errors: {
    login: ["Incorrect username/password combination"],
    commentForm: ["Comment body cannot be blank"],
  },
  session: {
    id: 1,
    username: 'Guest',
    handle: '@guest'
    avatar_url: 'www.imgssss.com/guest.jpg'
  }
}
```
