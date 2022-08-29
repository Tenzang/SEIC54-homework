class AddSoccerIdToTitles < ActiveRecord::Migration[5.2]
  def change
    add_column :titles, :artist_id, :integer
  end
end
