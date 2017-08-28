# @followers.each do |follower|
#   json.set! follower.id do
#     json.extract! follower, :id, :follower_id, :followee_id
#   end
# end

@followees.each do |followee|
  json.set! followee.id do
    json.extract! followee, :id, :follower_id, :followee_id
  end
end
