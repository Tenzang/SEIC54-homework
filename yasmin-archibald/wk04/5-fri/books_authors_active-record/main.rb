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
    #@book = Author.book.name
    erb :authors_show
end

get '/authors/:id/edit' do
    @author = Author.find params[:id]
    # @book = @author.books.create
    erb :authors_edit
end

get '/authors/:id/books/edit' do
    @author = Author.find params[:id]
    @book = @author.books.all
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
########################Books###############################

#### this code is to be deleted and merged into the above.. but I am tired and Idk if it's going to happen rip )': 
 
# get '/books' do
#     @books = Book.all
#     erb :books_index
# end

# get '/books/new' do
#     erb :books_new
# end

# post '/books' do
#     book = Book.new
#     book.name = params[:name]
#     book.importance = params[:importance]
#     book.image = params[:image]
#     book.save # book save via author author.book.save ???
#     redirect to("/books/#{ book.id }")
# end

# get '/books/:id' do
#     @book = Book.find params[:id]
#     erb :books_show
# end

# get '/books/:id/edit' do
#     @book = Book.find params[:id]
#     erb :books_edit
# end

# post '/books/:id' do
#     book = Book.find params[:id]
#     book.name = params[:name]
#     book.importance = params[:importance]
#     book.image = params[:image]
#     book.save
#     redirect to("/books/#{ params[:id]}")
# end

# get '/books/:id/delete' do
#     book = Book.find params[:id]
#     book.destroy
#     redirect to("/books")
# end

def query_db sql_statement
    puts sql_statement
    db = SQLite3::Database.new "database.sqlite3"
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end