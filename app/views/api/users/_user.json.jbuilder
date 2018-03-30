json.extract! user, :id, :username, :Fname, :Lname, :email, :handle, :bio, :gender
json.image_url asset_path(user.avatar.url)
