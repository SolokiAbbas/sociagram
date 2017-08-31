class Removefollows < ActiveRecord::Migration[5.0]
  def change
    remove_index :follows, :follower_id, unique: false
    remove_index :follows, :followee_id, unique: false
  end
end
