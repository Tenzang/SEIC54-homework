Player.destroy_all

Player.create(:name => 'Ronaldo Fenômeno', :nationality=> 'Brazilian',:team =>'Real Madrid', :dob => '1975-09-22', :image => "https://i.pinimg.com/originals/f2/ee/57/f2ee570fe256ab8023971e561fb15817.jpg")
Player.create(:name => 'Ronaldinho', :nationality=> 'Brazilian', :team => 'Barcelona', :dob => '1980-03-21', :image => "https://i.pinimg.com/236x/8e/92/15/8e921536c7eafb15419e092d429eb03e.jpg") 
Player.create(:name => 'Tim Cahill', :nationality=> 'Australian', :team => 'Everton', :dob=> '1979-12-6', :image => "https://i.pinimg.com/236x/bc/e9/0b/bce90b03bd827bcca782c5d32b83898f.jpg") 
Player.create(:name => 'Didier Drogba', :nationality => 'Ivorian (Ivory Coast)', :team => 'Chelsea', :dob=> '1978-3-11', :image => "https://i.pinimg.com/originals/4b/5d/44/4b5d4472f6bc13d434b6ebdcfa8d5c8d.jpg") 
Player.create(:name => 'Adriano Emperador', :nationality => 'Brazilian', :team => 'Internazionale', :dob=> '1982-02-17', :image =>"https://i.pinimg.com/236x/1c/49/34/1c493462cb8e5384a6479009379049a5--football-soccer-milan.jpg") 

puts "#{Player.count} soccer players created."