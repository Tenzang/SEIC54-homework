Mountain.destroy_all

Mountain.create :name => 'Mount Everest', :location => 'Nepal', :funfact => 'Mount Everest is the tallest mountain in the world.'
Mountain.create :name => 'Mount Kozciuszko', :height => 2228, :location => 'Snowy Mountains, New South Wales, Australia', :funfact => "Australia's tallest mountain"

puts "#{ Mountain.count } mountains created"
