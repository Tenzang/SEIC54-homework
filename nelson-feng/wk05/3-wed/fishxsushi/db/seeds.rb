Fish.destroy_all

Fish.create(:name => 'Atlantic Salmon', :max_age => '13', :diet => 'Larvae', :habitat => 'Lake/Ocean', :image => 'https://content.ngv.vic.gov.au/retrieve.php?size=1280&type=image&vernonID=29145')
Fish.create(:name => 'Tuna', :max_age => '45', :diet => 'Fishies', :habitat => 'Ocean', :image => 'https://content.ngv.vic.gov.au/retrieve.php?size=1280&type=image&vernonID=29145')

puts "#{ Fish.count } fishes created."


Dish.destroy_all

Dish.create(:name => 'Salmon Nigiri')
Dish.create(:name => 'Tuna Nigiri')

puts "#{ Dish.count } dishes created."