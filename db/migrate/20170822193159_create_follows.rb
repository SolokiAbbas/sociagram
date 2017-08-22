class CreateFollows < ActiveRecord::Migration[5.0]
  def change
    create_table :follows do |t|
      t.integer :followee_id
      t.integer :follower_id

      t.timestamps
    end
    add_index :posts, :followee_id
    add_index :posts, :follower_id
  end
end
