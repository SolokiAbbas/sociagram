class Addlikes < ActiveRecord::Migration[5.0]
  def change
    add_index :likes, [:post_id, :liker_id], unique: true
  end
end
