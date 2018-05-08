@users.each do |user|
  json.set! user.id do
    json.partial! 'user', users: user
  end
end
