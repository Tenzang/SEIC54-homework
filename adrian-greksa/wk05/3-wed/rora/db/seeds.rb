Food.destroy_all

Food.create(:name => 'corn', :species => 'Zea mays convar. saccharata var. rugosa', :othername => 'Sweet corn, maize', :density => '1.32 g/cm', :funfact => 'In Malaysia, there exists a variety unique to the region of Cameron highlands named "pearl corn". The kernels are glossy white resembling pearls and can be eaten raw of the cob but often boiled in water and salt.', :image => 'https://en.wikipedia.org/wiki/File:VegCorn.jpg')

puts "#{ Food.count } foods created."

Recip.destroy_all

Recip.create(:name => 'hello', :ingredients => 'my', :serving => '2', :time => '23m', :method => '1.do this 2.do that', :image => 'https://img.taste.com.au/48i6NFNk/w720-h480-cfill-q80/taste/2016/11/creamy-corn-soup-106552-1.jpeg')

puts "#{ Recip.count } recipes created."