  json.set! @comment.id do
    json.partial! 'comment', comments: @comment
  end
