Author.destroy_all 

Author.create(:name => 'Margaret Atwood', :nationality => 'Canadian', :dob => '11-08-1939', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Margaret_Atwood_2015.jpg/440px-Margaret_Atwood_2015.jpg', :quote => 'Don\'/t let the bastards grind you down.')

Author.create(:name => 'Stephen King', :nationality => 'American', :dob => '21-09-1947', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Stephen_King%2C_Comicon.jpg/440px-Stephen_King%2C_Comicon.jpg', :quote => 'People think that I must be a very strange person.')

Author.create(:name => 'Kurt Vonnegut', :nationality => 'American', :dob => '11-11-1922', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Kurt_Vonnegut_1972.jpg/440px-Kurt_Vonnegut_1972.jpg', :quote => 'So it goes.')

Author.create(:name => 'Toni Morrison', :nationality => 'American', :dob => '18-02-1931', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Toni_Morrison.jpg/440px-Toni_Morrison.jpg', :quote => 'All water has a perfect memory and is forever trying to get back to where it was.')


Author.create(:name => 'Edgar Allan Poe', :nationality => 'American', :dob => '19-01-1809', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Edgar_Allan_Poe%2C_circa_1849%2C_restored%2C_squared_off.jpg/400px-Edgar_Allan_Poe%2C_circa_1849%2C_restored%2C_squared_off.jpg', :quote => 'I became insane, with long intervals of horrible sanity.')

Author.create(:name => 'Gabriel García Márquez', :nationality => 'Columbian', :dob => '6-03-1927', :image => 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Gabriel_Garcia_Marquez.jpg', :quote => 'What matters in life is not what happens to you but what you remember and how you remember it.')

Author.create(:name => 'Rachel Kushner', :nationality => 'American', :dob => '7-10-1968', :image => 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Rachel_Kushner_2015_13.jpg', :quote => 'The thing is you keep existing whether you have a plan to do so or not, until you don\'/t exist, and then your plans are meaningless.')


puts "#{ Author.count } authors created."

Book.destroy_all 

Book.create(:title => 'Life Before Man', :year_published => '1979', :image => 'https://en.wikipedia.org/wiki/Life_Before_Man')

Book.create(:title => 'Misery', :year_published => '1987', :image => 'https://upload.wikimedia.org/wikipedia/en/6/6f/Stephen_King_Misery_cover.jpg')

Book.create(:title => 'Slaughter House Five', :year_published => '1969', :image => 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1440319389l/4981._SY475_.jpg')

Book.create(:title => 'Beloved', :year_published => '1987', :image => 'https://kbimages1-a.akamaihd.net/e1baca56-0d4e-441f-bd3d-4abe2391d082/353/569/90/False/beloved-26.jpg')

Book.create(:title => 'The Black Cat', :year_published => '1843', :image => 'https://m.media-amazon.com/images/I/51XhZqmexiL.jpg')

Book.create(:title => 'One Hundred Years of Solitude', :year_published => '1967', :image => 'https://kbimages1-a.akamaihd.net/b1e75ebc-3e99-421a-be6a-b7317a4f670f/1200/1200/False/one-hundred-years-of-solitude-3.jpg')

Book.create(:title => 'The Mars Room', :year_published => '2018', :image => 'https://cdn2.penguin.com.au/covers/original/9780099589969.jpg')

puts "#{ Book.count } books created."
