Mountain.destroy_all
Mountain.create :name => "Mount Everest", :location => "Nepal, China", :summit => 29029
Mountain.create :name => "K2", :location => "Pakistan, China", :summit => 8611
Mountain.create :name => "	Kangchenjunga", :location => "Nepal, India", :summit => 8586

puts "#{Mountain.count} Mountain's created"