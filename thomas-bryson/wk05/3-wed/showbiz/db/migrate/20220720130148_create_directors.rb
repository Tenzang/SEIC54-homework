class CreateDirectors < ActiveRecord::Migration[5.2]
  def change
    create_table :directors do |t|
      t.string :name
      t.string :nationality
      t.date :dob
      t.text :style
      t.text :image
      t.timestamps # created_at, updated_at
    end
  end
end