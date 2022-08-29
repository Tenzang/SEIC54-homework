class CreateArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :artists do |t|
      t.text :name
      t.text :record_label
      t.integer :number_of_albums
      t.date :dob
      t.text :image
      t.timestamp
    end
  end
end
