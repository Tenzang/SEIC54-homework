class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.text :name
      t.text :nationality
      t.text :team
      t.date :dob
      t.text :image
      t.timestamps 

    end
  end
end
