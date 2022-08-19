class CreateBrands < ActiveRecord::Migration[5.2]
  def change
    create_table :brands do |t|
      t.text :name
      t.text :country
      t.text :year
      t.text :image
      t.timestamps
    end
  end
end
