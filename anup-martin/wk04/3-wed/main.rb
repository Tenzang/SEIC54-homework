
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


get '/' do
    erb :home
end


get '/cover' do
    book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ params[:title] }"
    info = HTTParty.get book_url;
    @cover_photo = info["items"][1]["volumeInfo"]["imageLinks"]["thumbnail"]

    erb :cover
end

