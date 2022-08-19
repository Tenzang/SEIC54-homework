class CreateTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|
      t.text :name
      t.text :location
      t.text :conference
      t.text :division
      t.integer :championships
      t.text :image
      t.timestamps
    end
  end
end
