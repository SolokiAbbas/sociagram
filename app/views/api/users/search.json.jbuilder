json.array! @users do |user|
  json.id user.id
  json.username user.username
  json.handle user.handle
end
