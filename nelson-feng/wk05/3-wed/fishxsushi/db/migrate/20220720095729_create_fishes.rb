class CreateFishes < ActiveRecord::Migration[5.2]
  def change
    create_table :fishes do |t|
      t.text :name
      t.integer :max_age
      t.text :diet
      t.text :habitat
      t.text :image
    end
  end
end
