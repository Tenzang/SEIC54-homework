class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.text :name
      t.text :genre
      t.date :release
      t.text :Box_office
      t.text :image
      t.timestamps 
    end
  end
end
