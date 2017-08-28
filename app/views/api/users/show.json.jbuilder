json.extract! @user, :id, :username, :Fname, :Lname, :email, :handle
json.image_url asset_path(@user.avatar.url)
# json.followers do
#   json.array! @user.followers, :id, :follower_id, :followee_id
# end

json.followees do
  json.array! @user.followees, :id, :follower_id, :followee_id
end
