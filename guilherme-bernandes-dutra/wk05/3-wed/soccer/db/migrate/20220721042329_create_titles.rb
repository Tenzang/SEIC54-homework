class CreateTitles < ActiveRecord::Migration[5.2]
  def change
    
    create_table :titles do |t|
      t.text :name 
      t.text :type_of_title
      t.text :year
      t.text :image
      t.timestamps

    end
  end
end
