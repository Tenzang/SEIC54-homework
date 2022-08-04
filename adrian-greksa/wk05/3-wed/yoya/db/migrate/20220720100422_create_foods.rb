class CreateFoods < ActiveRecord::Migration[5.2]
  def change
    create_table :foods do |t|
      t.text :name
      t.text :species
      t.text :othername
      t.text :density
      t.text :funfact
      t.text :image
      t.timestamps
    end
  end
end
