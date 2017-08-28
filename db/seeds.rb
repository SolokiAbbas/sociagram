# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.create!({username: "tester", password: "password", Fname: "tester", Lname:"tester", email: "email", handle: "@tester"})


  name = Faker::Name.first_name
  user1=User.create!({username: name, password: "password", Fname: Faker::Name.first_name, Lname: Faker::Name.last_name, email: Faker::Internet.email , handle: "@t"+ name })


  name = Faker::Name.first_name
  user2=User.create!({username: name, password: "password", Fname: Faker::Name.first_name, Lname: Faker::Name.last_name, email: Faker::Internet.email , handle: "@t"+ name })


  name = Faker::Name.first_name
  user3=User.create!({username: name, password: "password", Fname: Faker::Name.first_name, Lname: Faker::Name.last_name, email: Faker::Internet.email , handle: "@t"+ name })


  name = Faker::Name.first_name
  user4=User.create!({username: name, password: "password", Fname: Faker::Name.first_name, Lname: Faker::Name.last_name, email: Faker::Internet.email , handle: "@t"+ name })


  name = Faker::Name.first_name
  user5=User.create!({username: name, password: "password", Fname: Faker::Name.first_name, Lname: Faker::Name.last_name, email: Faker::Internet.email , handle: "@t"+ name })


  Post.destroy_all
  post1=Post.create!({title: "Testing", body:"Tester again", author_id: user2.id})

  5.times do
    Post.create!({title: Faker::FamilyGuy.quote, body: Faker::ChuckNorris.fact, author_id: user1.id})
  end

Comment.destroy_all
Comment.create!({body: "tester", author_id: user5.id, post_id: post1.id})

5.times do
  Comment.create!({body: Faker::StarWars.quote, author_id: user2.id, post_id: post1.id})
end

Like.destroy_all
Like.create!({post_id: post1.id, liker_id: user1.id})


# Follow.destroy_all
# Follow.create!({followee_id: user1.id, follower_id: user2.id})
#
