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
end
