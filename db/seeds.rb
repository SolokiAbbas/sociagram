# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
usertest = User.create!({username: "Vegeta2000", password: "password", Fname: "Prince", Lname:"Vegeta", email: "PrinceVegeta@planetvegeta.com",
  handle: "@vegeta", avatar: "https://s3.amazonaws.com/sociagram-dev/posts/profiles/vegeta-profile.jpg", bio: "Over 9000????"})

  name = Faker::Name.first_name
  user1=User.create!({username: name+"1", password: "password", Fname: Faker::Name.first_name, Lname: Faker::Name.last_name, email: Faker::Internet.email ,
    handle: "@t"+ name, avatar: "https://s3.amazonaws.com/sociagram-dev/posts/profiles/penguin-profile.jpg", bio:"I like pancakes and brownies"})

  name = Faker::Name.first_name
  user2=User.create!({username: name+"2", password: "password", Fname: Faker::Name.first_name, Lname: Faker::Name.last_name, email: Faker::Internet.email ,
    handle: "@t"+ name, avatar: "https://s3.amazonaws.com/sociagram-dev/posts/profiles/penguin-profile2.jpg", bio:"I love Harry Potter Books!"})

  name = Faker::Name.first_name
  user3=User.create!({username: name+"3", password: "password", Fname: Faker::Name.first_name, Lname: Faker::Name.last_name, email: Faker::Internet.email ,
    handle: "@t"+ name, avatar: "https://s3.amazonaws.com/sociagram-dev/posts/profiles/penguin-profile3.jpg" })

  name = Faker::Name.first_name
  user4=User.create!({username: name+"4", password: "password", Fname: Faker::Name.first_name, Lname: Faker::Name.last_name, email: Faker::Internet.email ,
    handle: "@t"+ name, avatar: "https://s3.amazonaws.com/sociagram-dev/posts/profiles/penguin-profile4.jpg" })

  name = Faker::Name.first_name
  user5=User.create!({username: name+"5", password: "password", Fname: Faker::Name.first_name, Lname: Faker::Name.last_name, email: Faker::Internet.email ,
    handle: "@t"+ name, avatar: "https://s3.amazonaws.com/sociagram-dev/posts/profiles/owl-profile.jpg" })

  name = Faker::Name.first_name
  user6=User.create!({username: name+"101", password: "password", Fname: Faker::Name.first_name, Lname: Faker::Name.last_name, email: Faker::Internet.email ,
    handle: "@t"+ name, avatar: "https://s3.amazonaws.com/sociagram-dev/posts/profiles/owl-profile.jpg" })

  name = Faker::Name.first_name
  user7=User.create!({username: name+"100", password: "password", Fname: Faker::Name.first_name, Lname: Faker::Name.last_name, email: Faker::Internet.email ,
    handle: "@t"+ name, avatar: "https://s3.amazonaws.com/sociagram-dev/posts/profiles/owl-profile.jpg" })

  name = Faker::Name.first_name
  user8=User.create!({username: name+"2000", password: "password", Fname: Faker::Name.first_name, Lname: Faker::Name.last_name, email: Faker::Internet.email ,
    handle: "@t"+ name, avatar: "https://s3.amazonaws.com/sociagram-dev/posts/profiles/owl-profile.jpg" })

  name = Faker::Name.first_name
  user9=User.create!({username: name+"2010", password: "password", Fname: Faker::Name.first_name, Lname: Faker::Name.last_name, email: Faker::Internet.email ,
    handle: "@t"+ name, avatar: "https://s3.amazonaws.com/sociagram-dev/posts/profiles/owl-profile.jpg" })

  name = Faker::Name.first_name
  user10=User.create!({username: name+"2015", password: "password", Fname: Faker::Name.first_name, Lname: Faker::Name.last_name, email: Faker::Internet.email ,
    handle: "@t"+ name, avatar: "https://s3.amazonaws.com/sociagram-dev/posts/profiles/owl-profile.jpg" })

  name = Faker::Name.first_name
  user11=User.create!({username: name+name, password: "password", Fname: Faker::Name.first_name, Lname: Faker::Name.last_name, email: Faker::Internet.email ,
    handle: "@t"+ name })

  name = Faker::Name.first_name
  user12=User.create!({username: name+"Million", password: "password", Fname: Faker::Name.first_name, Lname: Faker::Name.last_name, email: Faker::Internet.email ,
    handle: "@t"+ name })

  name = Faker::Name.first_name
  user13=User.create!({username: name+"Faker", password: "password", Fname: Faker::Name.first_name, Lname: Faker::Name.last_name, email: Faker::Internet.email ,
    handle: "@t"+ name  })

  name = Faker::Name.first_name
  user14=User.create!({username: name+"Glorious", password: "password", Fname: Faker::Name.first_name, Lname: Faker::Name.last_name, email: Faker::Internet.email ,
    handle: "@t"+ name  })

  name = Faker::Name.first_name
  user15=User.create!({username: name+"Genius", password: "password", Fname: Faker::Name.first_name, Lname: Faker::Name.last_name, email: Faker::Internet.email ,
    handle: "@t"+ name })

  name = Faker::Name.first_name
  user16=User.create!({username: name+"Lover", password: "password", Fname: Faker::Name.first_name, Lname: Faker::Name.last_name, email: Faker::Internet.email ,
    handle: "@t"+ name })

  name = Faker::Name.first_name
  user17=User.create!({username: name+"Now", password: "password", Fname: Faker::Name.first_name, Lname: Faker::Name.last_name, email: Faker::Internet.email ,
    handle: "@t"+ name })

  name = Faker::Name.first_name
  user18=User.create!({username: name+"Golden", password: "password", Fname: Faker::Name.first_name, Lname: Faker::Name.last_name, email: Faker::Internet.email ,
    handle: "@t"+ name })

  name = Faker::Name.first_name
  user19=User.create!({username: name+"Car", password: "password", Fname: Faker::Name.first_name, Lname: Faker::Name.last_name, email: Faker::Internet.email ,
    handle: "@t"+ name })

  name = Faker::Name.first_name
  user20=User.create!({username: name+"Rich", password: "password", Fname: Faker::Name.first_name, Lname: Faker::Name.last_name, email: Faker::Internet.email ,
    handle: "@t"+ name })

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
post11 = Post.create!({title: "Who is with me?", body:"I want to make another stand! This one is against Kakarot!!!", author_id: usertest.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post11.png"})
post12 = Post.create!({title: "Failed", body:"WOW! I cannot catch up to Kakarot, He is always a step ahead of me!", author_id: usertest.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post12.png"})
post13 = Post.create!({title: "Next level", body:"Woooooo I just made a breakthrough to SSJ3!!!!!!", author_id: usertest.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post13.png"})
post14 = Post.create!({title: "Powerful", body:"Guys, I feel powerful! I think I can take on Kakarot!", author_id: usertest.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post14.png"})
post15 = Post.create!({title: "Names", body:"Is it just me or is the naming of my family weird?", author_id: usertest.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post15.png"})
post16 = Post.create!({title: "New Stuff", body:"New new new", author_id: user10.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post15.png"})
post17 = Post.create!({title: "What's up", body:"The ceiling", author_id: user10.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post14.png"})
post18 = Post.create!({title: "Just Here", body:"Come here guys", author_id: user10.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post14.png"})
post19 = Post.create!({title: "Riot", body:"Lets start one!", author_id: user12.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post13.png"})
post20 = Post.create!({title: "Beatles", body:"Here they come", author_id: user12.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post13.png"})
post21 = Post.create!({title: "Oasis", body:"You are my wonderwall", author_id: user13.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post13.png"})
post22 = Post.create!({title: "Kid", body:"There's a new kid in town", author_id: user13.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post13.png"})
post23 = Post.create!({title: "Geee", body:"Geeee wiz", author_id: user13.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post13.png"})
post24 = Post.create!({title: "Get my Lawyer", body:"Get a new one", author_id: user14.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post11.png"})
post25 = Post.create!({title: "Frasier", body:"Crane", author_id: user14.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post11.png"})
post26 = Post.create!({title: "Lineage", body:"The ultimate", author_id: user14.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post11.png"})
post27 = Post.create!({title: "New Girl", body:"Theres a new one", author_id: user15.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post12.png"})
post28 = Post.create!({title: "The 90s", body:"The rock band", author_id: user15.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post12.png"})
post29 = Post.create!({title: "Rock Bands", body:"The big rock band", author_id: user15.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post8.jpg"})
post30 = Post.create!({title: "Gives you", body:"Something new", author_id: user16.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post8.jpg"})
post31 = Post.create!({title: "Niles", body:"The Crane", author_id: user16.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post8.jpg"})
post32 = Post.create!({title: "Baby", body:"New born??", author_id: user17.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post11.png"})
post33 = Post.create!({title: "Sword", body:"Where is my Z Sword", author_id: user17.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post12.png"})
post34 = Post.create!({title: "PonyTails", body:"Pigs??", author_id: user18.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post12.png"})
post35 = Post.create!({title: "Hunting", body:"We are hunting Ducks", author_id: user18.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post6.jpg"})
post36 = Post.create!({title: "Dancing", body:"Dancing in September", author_id: user18.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post6.jpg"})
post37 = Post.create!({title: "Games", body:"Are we playing??", author_id: user18.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post7.jpg"})
post38 = Post.create!({title: "Bow", body:"Bow and Arrows", author_id: user18.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post13.png"})
post39 = Post.create!({title: "Town", body:"This is just it", author_id: user18.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post10.jpg"})
post40 = Post.create!({title: "Where", body:"Where are you going", author_id: user18.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post10.jpg"})
post41 = Post.create!({title: "Randoomm", body:"Random Post here!", author_id: user20.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post15.png"})
post42 = Post.create!({title: "Rand", body:"Random Post here!", author_id: user20.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post15.png"})
post43 = Post.create!({title: "Random", body:"Random Post here!", author_id: user20.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post15.png"})
post44 = Post.create!({title: "Randomi", body:"Random Post here!", author_id: user20.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post15.png"})
post45 = Post.create!({title: "Ransack", body:"Random Post here!", author_id: user20.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post15.png"})
post46 = Post.create!({title: "Rando", body:"Random Post here!", author_id: user20.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post15.png"})
post47 = Post.create!({title: "Rraanndd", body:"Random Post here!", author_id: user20.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post15.png"})
post48 = Post.create!({title: "Rindo", body:"Random Post here!", author_id: user20.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post15.png"})
post49 = Post.create!({title: "Rundo", body:"Random Post here!", author_id: user20.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post15.png"})
post50 = Post.create!({title: "Random", body:"Random Post here!", author_id: user20.id, image: "https://s3.amazonaws.com/sociagram-dev/posts/postimages/post15.png"})

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
comment15 =  Comment.create!({body: Faker::StarWars.quote, author_id: user6.id, post_id: post10.id})
comment16 =  Comment.create!({body: Faker::StarWars.quote, author_id: user6.id, post_id: post11.id})
comment17 =  Comment.create!({body: Faker::StarWars.quote, author_id: user9.id, post_id: post12.id})
comment18 =  Comment.create!({body: Faker::StarWars.quote, author_id: user9.id, post_id: post13.id})
comment19 =  Comment.create!({body: Faker::StarWars.quote, author_id: user9.id, post_id: post14.id})
comment20 =  Comment.create!({body: Faker::StarWars.quote, author_id: user10.id, post_id: post15.id})
comment21 =  Comment.create!({body: Faker::StarWars.quote, author_id: user11.id, post_id: post16.id})
comment22 =  Comment.create!({body: Faker::StarWars.quote, author_id: user11.id, post_id: post17.id})
comment23 =  Comment.create!({body: Faker::StarWars.quote, author_id: user12.id, post_id: post18.id})
comment24 =  Comment.create!({body: Faker::StarWars.quote, author_id: user12.id, post_id: post19.id})
comment25 =  Comment.create!({body: Faker::StarWars.quote, author_id: user5.id, post_id: post19.id})
comment26 =  Comment.create!({body: Faker::StarWars.quote, author_id: user5.id, post_id: post20.id})
comment27 =  Comment.create!({body: Faker::StarWars.quote, author_id: user5.id, post_id: post21.id})
comment28 =  Comment.create!({body: Faker::StarWars.quote, author_id: user5.id, post_id: post22.id})
comment29 =  Comment.create!({body: Faker::StarWars.quote, author_id: user5.id, post_id: post25.id})
comment30 =  Comment.create!({body: Faker::StarWars.quote, author_id: user5.id, post_id: post25.id})


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

Bookmark.destroy_all
bookmarktest = Bookmark.create!({post_id: post1.id, user_id: usertest.id})
bookmark1 = Bookmark.create!({post_id: post5.id, user_id: usertest.id})

bookmark2 = Bookmark.create!({post_id: post10.id, user_id: user2.id})
bookmark3 = Bookmark.create!({post_id: post2.id, user_id: user5.id})
bookmark4 = Bookmark.create!({post_id: post8.id, user_id: user4.id})

bookmark5 = Bookmark.create!({post_id: post10.id, user_id: user1.id})
bookmark6 = Bookmark.create!({post_id: post2.id, user_id: user1.id})
bookmark7 = Bookmark.create!({post_id: post13.id, user_id: user1.id})
bookmark8 = Bookmark.create!({post_id: post14.id, user_id: user1.id})



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

follow11 = Follow.create!({followee_id: user10.id, follower_id: usertest.id})
follow12 = Follow.create!({followee_id: user11.id, follower_id: usertest.id})
