@comments.each do |comment|
  json.set! post.id do
    json.partial! 'comment', comment: comment
  end
end
