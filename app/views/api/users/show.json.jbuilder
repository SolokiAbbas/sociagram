json.extract! @user, :id, :username, :Fname, :Lname, :email, :handle
json.image_url asset_path(@user.avatar.url)
# json.followers do
#   json.array! @user.followers, :id, :follower_id, :followee_id
# end

json.followers do
  json.array! @user.followees, :follower_id
end

json.following do
  json.array! @user.followers, :followee_id
end
