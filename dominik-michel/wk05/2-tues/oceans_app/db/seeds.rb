Ocean.destroy_all

Ocean.create :name => 'Pacific', :temp => 20 , :depth =>4325
Ocean.create :name => 'Atlantik', :temp => 12 , :depth =>7859
Ocean.create :name => 'Indian', :temp => 23 , :depth =>12305


puts "#{ Ocean.count} oceans created"