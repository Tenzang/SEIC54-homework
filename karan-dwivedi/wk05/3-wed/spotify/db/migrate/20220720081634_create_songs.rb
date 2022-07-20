class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |f|
        f.text :name
        f.text :artist
        f.date :genre
        f.text :rating
        f.text :embed
        f.timestamps
    end
  end
end
