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
  has_many :likes, dependent: :destroy
  has_many :bookmarks, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_one_attached :image
  validates_acceptance_of :image, content_type: /\Aimage\/.*\Z/

end
