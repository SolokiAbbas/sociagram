class Bookmark < ApplicationRecord
  belongs_to :post, foreign_key: :post_id
  belongs_to :user_bookmark, primary_key: :id, foreign_key: :user_id, class_name: :User
end
