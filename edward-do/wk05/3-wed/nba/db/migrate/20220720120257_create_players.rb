class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.text :name
      t.text :nationality
      t.date :dob
      t.text :height
      t.integer :weight
      t.text :position
      t.text :image
      t.timestamps
    end
  end
end
