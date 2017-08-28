json.set! @like.id do
  json.partial! 'like', like: @like
end
