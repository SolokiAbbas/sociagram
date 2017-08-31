# == Schema Information
#
# Table name: follows
#
#  id          :integer          not null, primary key
#  followee_id :integer
#  follower_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Follow < ApplicationRecord
  validates :follower_id, uniqueness: { scope: :followee_id }
  belongs_to :follower, foreign_key: :follower_id, class_name: :User
  belongs_to :followee, foreign_key: :followee_id, class_name: :User

end
