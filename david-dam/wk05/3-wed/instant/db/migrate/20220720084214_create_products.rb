class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.text :name
      t.text :noodle_type
      t.text :flavour
      t.integer :brand_id
      t.text :image
      t.timestamps
    end
  end
end
