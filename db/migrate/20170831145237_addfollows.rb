class Addfollows < ActiveRecord::Migration[5.0]
  def change
    add_index :follows, [:followee_id, :follower_id], unique: true
  end
end
