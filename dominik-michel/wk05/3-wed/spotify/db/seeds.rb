Song.destroy_all

Song.create(:name => 'Siren', :language => 'English', :genre => 'Progressiv Techno', :length => '3:37min')
Song.create(:name => 'Return to Oz', :language => 'English', :genre => 'Progressiv Techno', :length => '8:00min')
Song.create(:name => 'Zukunft', :language => 'German', :genre => ' Rap', :length => '2:38min')
Song.create(:name => 'Guapa', :language => 'German', :genre => 'Rap', :length => '2:32min')
Song.create(:name => 'The Last Goodbye', :language => 'English', :genre => 'Progressiv Techno', :length => '5:58min')

puts "#{Song.count} songs created"

Band.destroy_all

Band.create(:name =>'Monolink', :country =>'German', :image =>'https://www.magneticmag.com/.image/ar_8:10%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_620/MTg5NTMxMTYxMTc5OTg5NjAx/monolink.jpg')
Band.create(:name =>'RAF Camora', :country =>'German', :image =>'https://i1.sndcdn.com/avatars-A5ecaV7iUaEZ6zaM-SvNHYQ-t500x500.jpg')
Band.create(:name =>'ODESZA', :country =>'USA', :image =>'https://ninjatune.net/images/artists/odesza-main.jpg')

puts "#{Band.count} bands got created"