require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do 
    erb :home 
end 

#INDEX 

get '/books' do
    @books = query_db 'SELECT * FROM books'
    erb :books_index 
end 

#NEW
get 'books/new' do 
    erb :books_new
end

#SHOW 

get '/books/:id' do 
    @book = query_db "SELECT * FROM books WHERE id=#{ params[:id] }" 
    @book = @book.first 
    erb :books_show
end 





#CREATE 

post '/books' do 
    query_db "INSERT INTO books (name, author, image) VALUES ('#{ params[:name]}', '#{ params[:author]}', '#{ params[:image]}')"
    redirect to('/books')
end

#EDIT

get '/books/:id/edit' do 
    @book = query_db "SELECT * FROM books WHERE id=#{ params[:id] }"
    @book = @book.first
    erb :books_edit
end 
#Update 

post '/books/:id' do 
    query_db "UPDATE books SET name='#{ params[:name] }', author='#{ params[:author] }, image='#{ params[:image] }' WHERE id=#{ params[:id] }"
    redirect to("books/#{ params[:id] }")
end 

#DISTROY 

get '/books/:id/delete' do 
    query_db "DELETE FROM books WHERE id=#{ params[:id] }"
    redirect to('/books')
end


def query_db(sql_statement)
    puts sql_statement
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close 
    results
end



