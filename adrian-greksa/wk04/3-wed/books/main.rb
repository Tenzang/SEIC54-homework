require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do 
    erb :home
end

get '/info' do
    @title = params[:book_name]

    book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @title }"

    info = HTTParty.get book_url

    @thumbnail = info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]

    erb :info
end

