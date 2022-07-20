class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.text :name
      t.text :language
      t.text :genre
      t.text :length
      t.timestamps
    end
  end
end
