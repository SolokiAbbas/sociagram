# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  body       :string           not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord
  validates :title, :body, :author_id, presence: true
  belongs_to :user, primary_key: :id, foreign_key: :author_id, class_name: :User
  has_many :likes
  has_many :comments
  has_attached_file :image, default_url: "sociagramlogo.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
  
end
