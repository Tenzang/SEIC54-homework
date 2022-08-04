class AddFoodIdToRecips < ActiveRecord::Migration[5.2]
  def change
    add_column :recips, :food_id, :integer
  end
end
