#####################HouseKeeping#################################
require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Author < ActiveRecord::Base
    has_many :books, dependent: :destroy
end 

class Book < ActiveRecord::Base
    belongs_to :author 
end

########################Books###############################
get '/' do
    erb :home
end

get '/books' do
    @books = Book.all
    erb :books_index
end

get '/books/new' do
    erb :books_new
end

post '/books' do
    book = Book.new
    book.name = params[:name]
    book.importance = params[:importance]
    book.image = params[:image]
    book.save
    redirect to("/books/#{ book.id }")
end

get '/books/:id' do
    @book = Book.find params[:id]
    erb :books_show
end

get '/books/:id/edit' do
    @book = Book.find params[:id]
    erb :books_edit
end

post '/books/:id' do
    # @book = Book.create
    book = Book.find params[:id]
    book.name = params[:name]
    book.importance = params[:importance]
    book.image = params[:image]
    book.save
    redirect to("/books/#{ params[:id]}")
end

get '/books/:id/delete' do
    book = Book.find params[:id]
    book.destroy
    redirect to("/books")
end

###########################Authors############################

get '/' do
    erb :home
end

get '/authors' do
    @authors = Author.all
    erb :authors_index
end

get '/authors/new' do
    erb :authors_new
end

post '/authors' do
    authors = Author.new
    authors.name = params[:name]
    authors.image = params[:image]
    authors.save
    redirect to("/authors/#{ authors.id }")
end

get '/authors/:id' do
    @author = Author.find params[:id]
    erb :authors_show
end

get '/authors/:id/edit' do
    @author = Author.find params[:id]
    erb :authors_edit
end

post '/authors/:id' do
    author = Author.find params[:id]
    author.name = params[:name]
    author.image = params[:image]
    author.save
    redirect to("/authors/#{ params[:id]}")
end

get '/authors/:id/delete' do
    author = Author.find params[:id]
    author.destroy
    redirect to("/authors")
end

# bookAuthor = 
# Margaret Atwood