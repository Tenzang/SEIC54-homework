Ocean.destroy_all

Ocean.create :name => 'Atlantic', :depth => 200, :size => 4663
Ocean.create :name => 'Artic', :depth => 300, :size => 8763

puts "#{Ocean.count} Oceans created"