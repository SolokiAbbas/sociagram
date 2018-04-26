# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  Fname           :string           not null
#  Lname           :string           not null
#  handle          :string           not null
#  email           :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, :Fname, :Lname, :password_digest, :email, :session_token, presence: true, uniqueness: true
  scope :ci_find, lambda { |attribute, value| where("lower(#{attribute}) = ?", value.downcase) }
  validates_with GenderValidator

  has_many :followees, foreign_key: :followee_id, class_name: :Follow
  has_many :followers, foreign_key: :follower_id, class_name: :Follow
  has_many :posts
  has_many :comments, through: :posts

  has_attached_file :avatar, default_url: "https://s3.amazonaws.com/sociagram-dev/posts/icons/add-button.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

  attr_reader :password

  after_initialize :ensure_session_token

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def self.find_by_credentials(username, password)
    user = User.ci_find('username',  username).first
    return nil unless user && user.valid_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
