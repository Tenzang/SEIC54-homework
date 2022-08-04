class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.text :title
      t.text :year
      t.text :genre
      t.integer :author_id
      t.integer :length
      t.text :image
      t.timestamps
    end
  end
end
