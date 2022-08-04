Artist.destroy_all

Artist.create(:name => 'Jody Wisternoff', :nationality => 'Australian', :dob => '1879-02-22', :style => 'techno', :image => 'https://upload.wikimedia.org/wikipedia/commons/3/32/Norman_Lindsay_1931.jpg')
Artist.create(:name => 'James Grant', :nationality => 'Indian', :dob => '1912-02-07', :style => 'techno', :image => 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Russell_Drysdale_Max_Dupain_1945.jpg')
Artist.create(:name => 'Stephan Bodzin', :nationality => 'British', :dob => '1915-11-21', :style => 'techno', :image => 'https://media.artgallery.nsw.gov.au/uploads/artists/James_Gleeson_nla.jpg')
Artist.create(:name => 'Yousef', :nationality => 'Dutch', :dob => '1917-04-22', :style => 'techno', :image => 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Portrait_of_Sidney_Nolan.jpg')



puts "#{ Artist.count } artists created."

Song.destroy_all

Song.create(:name => 'Connect', :artist => 'Metodi Hristov', :genre => 'techno', :rating => '8', :embed => '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/535uSRzWlJbFHpMdAbBtnm?utm_source=generator" width="250" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>')
Song.create(:name => 'Old Child', :artist => 'Pablo Say', :genre => 'techno', :rating => '7', :embed => 'https://open.spotify.com/track/0Wd5ZF6bym0JI94O8sDgcF?si=c284e757004f4e43')
Song.create(:name => 'Alive', :artist => 'Metodi', :genre => 'techno', :rating => '7')


puts "#{ Song.count } songs created."