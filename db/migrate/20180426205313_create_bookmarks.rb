class CreateBookmarks < ActiveRecord::Migration[5.0]
  def change
    create_table :bookmarks do |t|
      t.integer :post_id
      t.integer :user_id

      t.timestamps
    end
      add_index :bookmarks, :post_id
      add_index :bookmarks, :user_id
  end
end
