@bookmark.each do |book|
  json.set! book.id do
    json.partial! 'bookmark', bookmark: book
  end
end
