@comments.each do |comment|
  json.set! comment.id do
    json.partial! 'comment', comments: comment
  end
end
