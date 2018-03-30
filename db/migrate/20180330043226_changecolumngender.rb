class Changecolumngender < ActiveRecord::Migration[5.0]
  def change
    change_column :users, :gender, :string, :default => "Not Specified"
  end
end
