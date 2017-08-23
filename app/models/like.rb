# == Schema Information
#
# Table name: likes
#
#  id         :integer          not null, primary key
#  post_id    :integer
#  liker_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ApplicationRecord
  validates :post_id, :liker_id, :post_id, presence: true
  belongs_to :post, foreign_key: :post_id
  belongs_to :liker, primary_id: :id, foreign_key: :liker_id, class_name: :User

end
