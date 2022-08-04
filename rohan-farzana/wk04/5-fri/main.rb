require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Book < ActiveRecord::Base
end

class Movie < ActiveRecord::Base
end

get '/' do 
    erb :home
end

#INDEX
get '/books' do 
    @books = Book.all
    erb :books_index
end


#NEW

get '/books/new' do 
    erb :books_new
end

#CREATE 

post '/books/' do 
    book = Book.new
    book.name = params[:name]
    book.author = params[:author]
    book.image = params[:image]
    book.save
    redirect to("/books/#{ book.id }")
end


#SHOW

get '/books/:id' do 
    @book = Book.find params[:id]
    erb :books_show
end 


#EDIT

get '/books/:id/edit' do
    @book = Book.find params[:id]
    erb :books_edit
end 

#UPDATE

post '/books/:id' do 
    book = Book.find params[:id]
    book.name = params[:name]
    book.author = params[:author]
    book.image = params[:image]
    book.save
    redirect to("/books/#{ params[:id] }")
end 

#DESTROY

get '/books/:id/delete' do 
    book = Book.find params[:id]
    book.destroy
    redirect to("/books")
end

# INDEX

get '/movies' do
    @movies = Movie.all
    erb :movies_index
end

# NEW

get '/movies/new' do
    erb :movies_new
end

#CREATE

post '/movies' do
    movie = Movie.new
    movie.name = params[:name]
    movie.image = params[:image]
    movie.director = params[:director]
    movie.save
    redirect to("/movies/#{ movie.id }") 
end

# SHOW

get '/movies/:id' do
    @movie = Movie.find params[:id]
    erb :movies_show
end

# EDIT

get '/movies/:id/edit' do
    @movie = Movie.find params[:id]
    erb :movies_edit
end

# UPDATE

post '/movies/:id' do
    movie = Movie.find params[:id]
    movie.name = params[:name]
    movie.director = params[:director]
    movie.image = params[:image]
    movie.save
    redirect to("/movies/#{ movie.id }")
end

# DELETE

get '/movies/:id/delete' do
    movie = Movie.find params[:id]
    movie.destroy
    redirect to('/movies')
end

after do
    ActiveRecord::Base.connection.close 
end