Song.destroy_all

Song.create(:name => 'Heartless', :genre => 'HipHop/Rap', :rating => '5/5', :released => '2008-10-28', :spotify => '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4EWCNWgDS8707fNSZ1oaA5?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>', :image => 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/808s_%26_Heartbreak.png/220px-808s_%26_Heartbreak.png')

Song.create(:name => 'Clint Eastwood', :genre => 'Alternative Rock', :rating => '5/5', :released => '2001-03-05', :spotify => '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1RKUoGiLEbcXN4GY4spQDx?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>', :image => 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/ClintEastwood.Gorillaz.single.jpg/220px-ClintEastwood.Gorillaz.single.jpg')

puts "#{ Song.count } songs created."

Artist.destroy_all

Artist.create(:name => "Kanye West", :dob => '1997-06-08', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Kanye_West_at_the_2009_Tribeca_Film_Festival_%28cropped%29.jpg/220px-Kanye_West_at_the_2009_Tribeca_Film_Festival_%28cropped%29.jpg')
Artist.create(:name => "Gorillaz", :dob => '1998-01-01', :image => 'https://upload.wikimedia.org/wikipedia/en/f/fc/Gorillaz_Song_Machine_Promo_Art.jpg')

puts "#{ Artist.count } artists created"