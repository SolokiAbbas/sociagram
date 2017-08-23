json.extract! post, :id, :body, :title

json.comments do
  json.partial! 'api/comments/comment', comments: post.comments
end
