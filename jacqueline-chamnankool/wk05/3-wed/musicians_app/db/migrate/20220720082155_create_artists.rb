class CreateArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :artists do |t|
      t.text :name
      t.text :genre
      t.text :label
      t.text :years
      t.text :image
      t.timestamps
    end
  end
end
