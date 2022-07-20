Ocean.create :name => 'Pacific', :location => 'Australia', :area  => 168723000
Ocean.create :name => 'Atlantic', :location => 'America', :area  => 85133000
Ocean.create :name => 'Indian', :location => 'Asia', :area  => 70560000
Ocean.create :name => 'Southern', :location => 'Antarctica', :area  => 21960000
Ocean.create :name => 'Artic', :location => 'Artic', :area  => 15558000

puts "#{ Ocean.count } oceans counted.."