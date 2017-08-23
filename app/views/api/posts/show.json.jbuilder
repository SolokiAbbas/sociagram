json.extract! @post, :id, :body, :title

json.comments do
  json.extract! @post.comments, :id, :body, :post_id
end
