Brand.destroy_all

Brand.create(:name => 'Nong Shim', :country => 'Korea', :year => '1965', :image => 'https://esma.org/wp-content/uploads/2019/01/Nongshim-Logo.png')
Brand.create(:name => 'Samyang', :country => 'Korea', :year => '1961', :image => 'https://en.wikipedia.org/wiki/Samyang_Foods#/media/File:Samyang_Foods_Logo.svg')
Brand.create(:name => 'Indo mie', :country => 'Indonesia', :year => '1972', :image => '')
Brand.create(:name => 'Maggi', :country => 'Switzeland', :year => '1884', :image => '')

puts "#{ Brand.count } brands created."

Product.destroy_all

Product.create(:name => 'Shin Ramyun', :noodle_type => 'soup', :flavour => 'original', :brand_id => '1', :image => 'https://cdn0.woolworths.media/content/wowproductimages/large/785977.jpg')
Product.create(:name => 'Shin Red', :noodle_type => 'soup', :flavour => 'spicy', :brand_id => '1', :image =>'')
Product.create(:name => 'Buldak Ramen', :noodle_type => 'dry', :flavour => 'chicken', :brand_id => '2', :image => 'https://cdn0.woolworths.media/content/wowproductimages/large/805741.jpg')
Product.create(:name => 'Chacharoni', :noodle_type => 'dry', :flavour => 'black bean', :brand_id => '2', :image => '')
Product.create(:name => 'Mi Goreng', :noodle_type => 'dry', :flavour => 'original', :brand_id => '3', :image =>'https://cdn0.woolworths.media/content/wowproductimages/large/177972.jpg')
Product.create(:name => '2 Minute Noodle', :noodle_type => 'soup', :flavour => 'chicken', :brand_id => '4', :image => 'https://cdn0.woolworths.media/content/wowproductimages/large/343890.jpg')


puts "#{ Product.count } products created."