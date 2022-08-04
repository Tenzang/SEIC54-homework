class CreatePhones < ActiveRecord::Migration[5.2]
  def change
    create_table :phones do |t|
      t.text :name
      t.text :year
      t.integer :price
      t.text :processor
    end
  end
end
