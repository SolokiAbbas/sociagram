json.extract! @user, :id, :username, :Fname, :Lname, :email, :handle
json.image_url asset_path(@user.avatar.url)
