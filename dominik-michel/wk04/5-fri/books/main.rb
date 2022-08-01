require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

get '/' do
    erb :home
end

ActiveRecord::Base.establish_connection(
    :adapter =>'sqlite3',
    :database =>'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Book < ActiveRecord::Base 
end

class Author < ActiveRecord::Base
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
post '/books' do
    book = Book.new
    book.book = params[:book]
    book.title = params[:title]
    book.genre = params[:genre]
    book.year = params[:year]
    book.save
    redirect to("/books/#{book.id}")
end

#Show
get '/books/:id' do
    @book= Book.find params[:id]
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
    book.book = params[:book]
    book.title = params[:title]
    book.genre = params[:genre]
    book.year = params[:year]
    book.save
    redirect to("/books/#{book.id}")
end



#DELTE

get '/books/:id/delete' do
    book = Book.find params[:id]
    book.destroy 
    redirect to('/books')
end



#INDEX

get '/authors' do
    @authors = Author.all
    erb :authors_index
end

#NEW

get '/authors/new' do
    erb :authors_new
end

#CREATE
post '/authors' do
    author = Author.new
    author.name = params[:name]
    author.nationality = params[:nationality]
    author.save
    redirect to("/authors/#{author.id}")
end

#Show
get '/authors/:id' do
    @author = Author.find params[:id]
    erb :authors_show
end

#Edit

get '/authors/:id/edit' do
    @author = Author.find params[:id]
    erb :authors_edit
end

#UPDATE

post '/authors/:id' do
    author = Author.find params[:id]
    author.name = params[:name]
    author.nationality = params[:nationality]
    author.save
    redirect to("/authors/#{author.id}")
end

#DELETE
get '/authors/:id/delete' do
    author=Author.find params[:id]
    author.destroy 
    redirect to('/authors')
end


after do
    ActiveRecord::Base.connection.close
end