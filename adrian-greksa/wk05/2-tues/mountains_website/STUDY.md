``` ruby
rails db:create
rails db # to see the database
touch db/create_planets.sql 

sqlite3 development.sqlite3 < create_planets.sql # import sql to database

# go to app/models 
# add
# self.abstract_class = true
# in application_record.rb

# add new file name: planet.rb
# class Planet < ActiveRecord::Base
# end

rails console (repl) # takes you to :irb then you can go to Planet.new

# go to gemfile group: development, :test do
add gem 'pry-rails'
bundle #in console to add it

rails db:seed # add seed data into database

# comment out last line in Gemfile to get rid of the console shit

rails routes # in CLI to check routes

ALL: 
GET  /planets # index
POST /planets # create

SNGLE: 
GET     /planets/:id # show
POST    /planets/:id # update
DELETE  /planets/:id

#InvalidAuthenticityToken error: 