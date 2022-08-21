
Artist.destroy_all

Artist.create(:name => 'Dr dre', :record_label => 'Death Row Records', :number_of_albums => 3, :dob => '1965-02-18', :image => "https://cdn.britannica.com/23/136323-050-48486CCA/Dr-Dre-2003.jpg")
Artist.create(:name => 'Snoop Dogg', :record_label => 'Doggy Style Records', :number_of_albums => 19, :dob => '1971-10-20', :image => "https://www.udiscovermusic.com/wp-content/uploads/2019/10/Snoop-Dogg-GettyImages-1604471-1000x600.jpg")

puts "#{ Artist.count } artists created."


# ======================= # # ======================= # # ======================= # # ======================= # # ======================= #

Record.destroy_all

Record.create(:name => 'The Chronic', :songs => 22, :length => '68:01', :producer => 'Dr Dre', :release => '1999-12-16', :image => "https://upload.wikimedia.org/wikipedia/en/5/56/DrDre-2001.jpg")
Record.create(:name => 'Doggystyle', :songs => 19, :length => '54:44', :producer => 'Dr Dre', :release => '1993-11-23', :image => "https://i.discogs.com/XEa-UpmXKMLhKjSonpGFUFFrVqaZEd6c1lzZ__TpoqE/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyNjA0/NS0xMjIyNzg3NTI1/LmpwZWc.jpeg")

puts "#{ Record.count } albums created."