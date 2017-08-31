# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
usertest = User.create!({username: "Vegeta2000", password: "password", Fname: "Prince", Lname:"Vegeta", email: "PrinceVegeta@planetvegeta.com", handle: "@vegeta", avatar: "https://s3.amazonaws.com/sociagram-dev/posts/profiles/vegeta-profile.jpg"})

  name = Faker::Name.first_name
  user1=User.create!({username: name, password: "password", Fname: Faker::Name.first_name, Lname: Faker::Name.last_name, email: Faker::Internet.email , handle: "@t"+ name, avatar: "https://s3.amazonaws.com/sociagram-dev/posts/profiles/penguin-profile.jpg"})

  name = Faker::Name.first_name
  user2=User.create!({username: name, password: "password", Fname: Faker::Name.first_name, Lname: Faker::Name.last_name, email: Faker::Internet.email , handle: "@t"+ name, avatar: "https://s3.amazonaws.com/sociagram-dev/posts/profiles/penguin-profile2.jpg" })

  name = Faker::Name.first_name
  user3=User.create!({username: name, password: "password", Fname: Faker::Name.first_name, Lname: Faker::Name.last_name, email: Faker::Internet.email , handle: "@t"+ name, avatar: "https://s3.amazonaws.com/sociagram-dev/posts/profiles/penguin-profile3.jpg" })

  name = Faker::Name.first_name
  user4=User.create!({username: name, password: "password", Fname: Faker::Name.first_name, Lname: Faker::Name.last_name, email: Faker::Internet.email , handle: "@t"+ name, avatar: "https://s3.amazonaws.com/sociagram-dev/posts/profiles/penguin-profile4.jpg" })

  name = Faker::Name.first_name
  user5=User.create!({username: name, password: "password", Fname: Faker::Name.first_name, Lname: Faker::Name.last_name, email: Faker::Internet.email , handle: "@t"+ name, avatar: "https://s3.amazonaws.com/sociagram-dev/posts/profiles/owl-profile.jpg" })

Post.destroy_all
post1 = Post.create!({title: "Testing", body:"Tester again", author_id: usertest.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post1.jpg"})

post2 = Post.create!({title: "Read All about it!!!", body:"There was a cat who was so fat that it ate all the cats", author_id: user1.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post2.jpg"})
post3 = Post.create!({title: "Mission Impossible", body:"I want to be able to create a Chuck Norris Fact with a lot of jokes", author_id: user1.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post3.jpg"})
post4 = Post.create!({title: "What is Love?", body:"Baby dont hurt me, dont hurt me, no more!!!", author_id: user2.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post4.jpg"})
post5 = Post.create!({title: "Brooklyn", body:"We are going to go out to enjoy a beer and some pizza", author_id: user2.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post5.jpg"})
post6 = Post.create!({title: "Journey", body:"The Journey around the world begins in your backyard!", author_id: user2.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post6.jpg"})
post7 = Post.create!({title: "So.....", body:"Like OMG, it happened again! I cant believe it!", author_id: user2.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post7.jpg"})
post8 = Post.create!({title: "The wait is over", body:"The new phone is here and its aamaaazzzinggggggg!!!!", author_id: user3.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post8.jpg"})
post9 = Post.create!({title: "Beach", body:"I am going to the beach again!!! Take some pics and post it later yay!", author_id: user3.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post9.jpg"})
post10 = Post.create!({title: "Who is with me?", body:"Guys, I want to make a stand. Stand with me on this one!", author_id: user4.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post10.jpg"})

Comment.destroy_all
commenttest = Comment.create!({body: "tester", author_id: usertest.id, post_id: post1.id})

comment1 =  Comment.create!({body: Faker::StarWars.quote, author_id: user2.id, post_id: post1.id})
comment2 =  Comment.create!({body: Faker::StarWars.quote, author_id: user2.id, post_id: post1.id})
comment3 =  Comment.create!({body: Faker::StarWars.quote, author_id: user2.id, post_id: post1.id})
comment4 =  Comment.create!({body: Faker::StarWars.quote, author_id: user2.id, post_id: post1.id})
comment5 =  Comment.create!({body: Faker::StarWars.quote, author_id: user2.id, post_id: post1.id})
comment6 =  Comment.create!({body: Faker::StarWars.quote, author_id: user2.id, post_id: post2.id})
comment7 =  Comment.create!({body: Faker::StarWars.quote, author_id: user2.id, post_id: post2.id})
comment8 =  Comment.create!({body: Faker::StarWars.quote, author_id: user2.id, post_id: post2.id})
comment9 =  Comment.create!({body: Faker::StarWars.quote, author_id: user2.id, post_id: post3.id})
comment10 =  Comment.create!({body: Faker::StarWars.quote, author_id: user1.id, post_id: post5.id})
comment11 =  Comment.create!({body: Faker::StarWars.quote, author_id: user3.id, post_id: post6.id})
comment12 =  Comment.create!({body: Faker::StarWars.quote, author_id: user3.id, post_id: post6.id})
comment13 =  Comment.create!({body: Faker::StarWars.quote, author_id: user4.id, post_id: post9.id})
comment14 =  Comment.create!({body: Faker::StarWars.quote, author_id: user5.id, post_id: post9.id})
comment15 =  Comment.create!({body: Faker::StarWars.quote, author_id: user5.id, post_id: post10.id})


Like.destroy_all
liketest = Like.create!({post_id: post1.id, liker_id: user1.id})

like1 = Like.create!({post_id: post10.id, liker_id: user2.id})
like2 = Like.create!({post_id: post10.id, liker_id: user1.id})
like3 = Like.create!({post_id: post10.id, liker_id: user3.id})
like4 = Like.create!({post_id: post10.id, liker_id: user4.id})
like5 = Like.create!({post_id: post10.id, liker_id: user5.id})
like6 = Like.create!({post_id: post2.id, liker_id: user5.id})
like7 = Like.create!({post_id: post3.id, liker_id: user5.id})
like8 = Like.create!({post_id: post4.id, liker_id: user5.id})
like9 = Like.create!({post_id: post5.id, liker_id: user5.id})
like10 = Like.create!({post_id: post2.id, liker_id: user1.id})
like11 = Like.create!({post_id: post5.id, liker_id: user3.id})
like12 = Like.create!({post_id: post6.id, liker_id: user2.id})
like13 = Like.create!({post_id: post7.id, liker_id: user4.id})
like14 = Like.create!({post_id: post8.id, liker_id: user4.id})
like15 = Like.create!({post_id: post1.id, liker_id: user5.id})


Follow.destroy_all
followtest = Follow.create!({followee_id: usertest.id, follower_id: user1.id})

follow1 = Follow.create!({followee_id: user1.id, follower_id: usertest.id})
follow2 = Follow.create!({followee_id: user1.id, follower_id: user2.id})
follow3 = Follow.create!({followee_id: user1.id, follower_id: user3.id})
follow4 = Follow.create!({followee_id: user1.id, follower_id: user4.id})
follow5 = Follow.create!({followee_id: user1.id, follower_id: user5.id})
follow6 = Follow.create!({followee_id: user2.id, follower_id: user3.id})
follow7 = Follow.create!({followee_id: user4.id, follower_id: user3.id})
follow8 = Follow.create!({followee_id: user5.id, follower_id: user3.id})
follow9 = Follow.create!({followee_id: user5.id, follower_id: user4.id})
follow10 = Follow.create!({followee_id: user2.id, follower_id: user4.id})
