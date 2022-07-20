class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.text :name
      t.text :genre
      t.text :rating
      t.date :released
      t.text :spotify
      t.text :image
      t.timestamp
    end
  end
end