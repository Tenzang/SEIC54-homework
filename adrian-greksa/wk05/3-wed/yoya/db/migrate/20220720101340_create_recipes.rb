class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recips do |t|
      t.text :name
      t.text :ingredients
      t.text :serving
      t.text :time  
      t.text :method
      t.text :image
      t.timestamps
    end
  end
end
