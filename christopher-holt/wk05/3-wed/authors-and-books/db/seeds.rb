Author.destroy_all

Author.create(:name => 'Sara Douglass', :nationality => 'Australian', :dob => '1957-06-02', :image => 'https://images.gr-assets.com/authors/1404249116p5/82540.jpg')

puts "#{ Author.count } authors created."

Book.destroy_all

Book.create(:title => 'Battleaxe', :year => '1995', :genre => 'Fantasy', :length => '674', :image => 'https://www.booktopia.com.au/covers/big/9780732258658/0000/battleaxe.jpg')

puts "#{ Book.count } books created."