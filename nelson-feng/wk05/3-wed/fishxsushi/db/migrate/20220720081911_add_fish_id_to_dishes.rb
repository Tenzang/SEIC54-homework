class AddFishIdToDishes < ActiveRecord::Migration[5.2]
  def change
    add_column :dishes, :fish_id, :integer
  end
end
