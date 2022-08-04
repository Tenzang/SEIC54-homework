Artist.destroy_all

Artist.create(:name => "hitorie (ヒトリエ)", :genre => "J-rock, alternative rock, pop rock", :label => "Sony Music Associated Records", :years => "2011-present", :image => "https://www.otaquest.com/wp-content/uploads/2019/04/Screenshot-2019-04-08-at-12.41.59-1024x429.png")
Artist.create(:name => "Tatsuya Kitani (キタニタツヤ)", :genre => "J-pop", :label => "Sony Music Labels Inc.", :years => "2014-present", :image => "https://cdn-us.anidb.net/images/main/235951.jpg")
Artist.create(:name => "TUYU", :genre => "J-pop", :label => "TUYU Records", :years => "2020-present", :image => "https://popnable.com/images/singers/temp/tuyu_japan_top_100_114.jpg")
Artist.create(:name => "Dreamcatcher", :genre => "K-pop", :label => "Happyface Entertainment", :years => "2014-present", :image => "https://static.wikia.nocookie.net/kpop/images/8/82/Dreamcatcher_Apocalypse_Save_us_group_teaser_photo_1.png")
Artist.create(:name => "Sakuzyo", :genre => "Drum and bass, classical piano, filmscore, house", :label => "Diverse System", :years => "2012-present", :image => "https://i.discogs.com/LmIQeQrLuwVZnhVwBFS77IpAwA_Lf1Qfpos-9Yd8Spc/rs:fit/g:sm/q:90/h:800/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTI5NTQ1/MTMtMTUxNTI1MTgz/NS04MjQ2LmpwZWc.jpeg")

puts "#{ Artist.count } artists created."

Album.destroy_all

Album.create(:title => "HOWLS", :date => "2019-02-27", :num_tracks => 10, :image => "https://e.snmc.io/i/600/w/30800aa4c09febd408d973d6284f0368/7307492/%E3%83%92%E3%83%88%E3%83%AA%E3%82%A8-hitorie-howls-Cover-Art.jpg")
Album.create(:title => "PHARMACY", :date => "2022-06-22", :num_tracks => 10, :image => "https://e.snmc.io/i/600/w/88aeea110857f0a25c24166ce6e10a5b/9983049/%E3%83%92%E3%83%88%E3%83%AA%E3%82%A8-hitorie-pharmacy-Cover-Art.jpg")
Album.create(:title => "DEMAGOG", :date => "2020-08-26", :num_tracks => 7, :image => "https://i1.sndcdn.com/artworks-Nn0lE7LTa70q-0-t500x500.jpg")
Album.create(:title => "I'll put you in misery (貴方を不幸に誘いますね)", :date => "2021-07-14", :num_tracks => 12, :image => "https://www.suruga-ya.jp/database/pics_light/game/186162755.jpg")
Album.create(:title => "Dystopia: The Tree of Language", :date => "2020-02-18", :num_tracks => 14, :image => "https://images-na.ssl-images-amazon.com/images/I/61-oBHmEeVL._SY445_SX342_QL70_ML2_.jpg")
Album.create(:title => "WARZ0NE", :date => "2020-03-20", :num_tracks => 9, :image => "https://is2-ssl.mzstatic.com/image/thumb/Music113/v4/c9/b7/67/c9b76721-99e5-dbcf-4588-6dedfc34962f/859755525036_cover.png/600x600bf-60.jpg")

puts "#{ Album.count } albums created."
