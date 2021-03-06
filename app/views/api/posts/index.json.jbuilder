@posts.each do |post|
  json.set! post.id do
    json.partial! 'post', post: post
    json.likes do
      json.array! post.likes, :id, :post_id, :liker_id
    end
    json.bookmarks do
      json.array! post.bookmarks, :id, :post_id, :user_id
    end
  end
end
