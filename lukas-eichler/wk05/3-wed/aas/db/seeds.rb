Artist.destroy_all

Artist.create(:name => 'Kendrick Lamar', :nationality => 'United States of America', :dob => '1987-06-17', :genre => 'Rap', :image => 'https://wallpaperaccess.com/full/49495.jpg')
Artist.create(:name => 'Skepta', :nationality => 'United Kingdom', :dob => '1982-09-19', :genre => 'Rap/Grime', :image => 'https://wallpaperaccess.com/full/1488828.jpg')
Artist.create(:name => 'Dave', :nationality => 'United Kingdom', :dob => '1988-06-05', :genre => 'UK Drill/Rap', :image => 'https://wallpaperaccess.com/full/2268580.jpg')
Artist.create(:name => '21 Savage', :nationality => 'United States of America', :dob => '1992-10-22', :genre => 'Rap', :image => 'https://wallpaperaccess.com/thumb/634938.jpg')
Artist.create(:name => 'A$AP Rocky', :nationality => 'United States of America', :dob => '1988-10-03', :genre => 'Rap', :image => 'https://wallpaperaccess.com/thumb/36764.jpg')
Artist.create(:name => 'ScHoolboy Q', :nationality => 'United States of America', :dob => '1986-10-26', :genre => 'Rap', :image => 'https://wallpaperaccess.com/thumb/144469.jpg')

puts "#{ Artist.count } artists created."

Song.destroy_all

Song.create(:title => 'Humble', :year => '2016')
Song.create(:title => 'Shutdown', :year => '2014')

puts "#{ Song.count } songs created."