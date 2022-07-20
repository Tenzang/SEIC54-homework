Mountain.destroy_all

Mountain.create :name => "Mount Fuji", :image => "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002532/img/basic/a0002532_main.jpg", :country => "Japan", :elevation => 3778.23, :isolation => 2077
Mountain.create :name => "Mount Kilimanjaro", :image => "https://cdn.britannica.com/33/153433-050-F76BDF75/Sunrise-Mount-Kilimanjaro-Tanzania.jpg", :country => "Tanzania", :elevation => 5895, :isolation => 5510
Mountain.create :name => "Mount Everest", :image => "https://cdn.britannica.com/33/153433-050-F76BDF75/Sunrise-Mount-Kilimanjaro-Tanzania.jpg", :country => "China", :elevation => 8848.86

puts "#{ Mountain.count } mountains created."