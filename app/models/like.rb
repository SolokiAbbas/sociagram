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

  belongs_to :post, foreign_key: :post_id
  belongs_to :liker, primary_key: :id, foreign_key: :liker_id, class_name: :User

end
