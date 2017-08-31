class Addfollowcon < ActiveRecord::Migration[5.0]
  def change
    remove_index :follows, :followee_id
    remove_index :follows, :follower_id
  end
end
