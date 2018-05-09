@users.each do |user|
  json.set! user.id do
    json.partial! 'user', user: user
    json.followers do
      json.array! user.followees, :follower_id
    end

    json.following do
      json.array! user.followers, :followee_id
    end
  end
end
