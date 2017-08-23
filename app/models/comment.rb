# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  body       :string           not null
#  author_id  :integer          not null
#  post_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
    validates :body, :author_id, :post_id, presence: true
    belongs_to :user, foreign_key: :author_id
    belongs_to :post, foreign_key: :post_id
end
