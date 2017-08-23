# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.create!({username: "tester", password: "password", Fname: "tester", Lname:"tester", email: "email", handle: "@tester"})




Comment.destroy_all

Post.destroy_all

Follow.destroy_all

Like.destroy_all
