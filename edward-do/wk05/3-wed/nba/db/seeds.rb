# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Team.destroy_all

Team.create(:name => 'Golden State Warriors', :location => 'San Francisco, California', :conference => 'Western', :division => 'Pacific', :championships => 7, :image => 'https://images.ctfassets.net/a4rx79jcl3n1/139uoz1HBz6PsWh8pEqOCK/eced155325ccb92acf76962ca5d688e5/gsw-logo-1920.png')
Team.create(:name => 'Boston Celtics', :location => 'Boston, Massachusetts', :conference => 'Eastern', :division => 'Atlantic', :championships => 17, :image => 'https://upload.wikimedia.org/wikipedia/en/8/8f/Boston_Celtics.svg')
Team.create(:name => 'Los Angeles Lakers', :location => 'Los Angeles, California', :conference => 'Western', :division => 'Pacific', :championships => 17, :image => 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg')
Team.create(:name => 'Chicago Bulls', :location => 'Chicago, Illinois', :conference => 'Eastern', :division => 'Central', :championships => 6, :image => 'https://upload.wikimedia.org/wikipedia/en/6/67/Chicago_Bulls_logo.svg')
Team.create(:name => 'New York Knicks', :location => 'New York City, New York', :conference => 'Eastern', :division => 'Atlantic', :championships => 2, :image => 'https://upload.wikimedia.org/wikipedia/en/thumb/2/25/New_York_Knicks_logo.svg/1200px-New_York_Knicks_logo.svg.png')

puts "#{ Team.count } teams created."

Player.destroy_all

Player.create(:name => 'Stephen Curry', :nationality => 'American', :dob => '1988-03-14', :height => "6ft 2in", :weight => 84, :position => 'PG', :image => 'https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png')

puts "#{ Player.count } players created."