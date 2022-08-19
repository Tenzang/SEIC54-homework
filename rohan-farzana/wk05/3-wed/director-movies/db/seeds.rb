Movie.destroy_all

Movie.create(:name => 'Alice in Wonderland', :genre => 'Fantasy/Adventure', :release => '4 March 2010', :Box_office => '1.025 billion USD', :image => 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1B4F6D220F89F29096438048CCE0566FA7E7B2A67FEF4332D284138105283D8D/scale?width=1200&aspectRatio=1.78&format=jpeg')
Movie.create(:name => 'Edward Scissorhands', :genre => 'Fantasy/Romance', :release => '21 March 1991 ', :Box_office => '86 million USD', :image => 'https://i.pinimg.com/550x/b0/92/dc/b092dce059ff35257e351df4803f168b.jpg')
Movie.create(:name => 'Dark Shadows ', :genre => 'Fantasy/Horror', :release => '10 May 2012', :Box_office => '245.5 million USD', :image => 'https://www.rottentomatoes.com/m/dark-shadows-2010')
Movie.create(:name => 'Charlie and the Chocolate Factory', :genre => 'Family/Fantasy', :release => '1 September 2005', :Box_office => '475 million USD', :image => 'https://en.wikipedia.org/wiki/Charlie_and_the_Chocolate_Factory_%28film%29')



puts "#{ Movie.count } movies created."
