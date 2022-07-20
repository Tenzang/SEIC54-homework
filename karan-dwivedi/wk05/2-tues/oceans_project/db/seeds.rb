Ocean.destroy_all

Ocean.create :name => 'Pacific', :volume => 100000, 
Ocean.create :name => 'Atlantic', :volume => 200000, 
Ocean.create :name => 'Indian', :volume => 300000, 


puts "#(Ocean.count) Oceans Created"