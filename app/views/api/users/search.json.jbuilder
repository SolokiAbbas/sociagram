json.array! @users do |user|
  json.id user.id
  json.username user.username
  json.handle user.handle
  json.image_url asset_path(user.avatar.url)
end
