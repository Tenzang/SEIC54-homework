Phone.destroy_all

Phone.create(:name => 'iPhone 13 pro', :price => '1349', :year => '2021', :processor => 'A11' )
Phone.create(:name => 'iPhone 13', :price => '999', :year => '2021', :processor => 'A11mini' )
Phone.create(:name => 'Samsung galaxy s20', :price => '849', :year => '2020', :processor => 'Snapdragon 835' )


Company.destroy_all

Company.create(:name => 'Apple Inc', :country => 'USA')
Company.create(:name => 'Samsung', :country => 'Korea')
Company.create(:name => 'Huawai', :country => 'China')
