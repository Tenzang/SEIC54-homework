require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
    erb :home
end

get '/info' do
    title = params[:title]
    book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ title }"
    inform = HTTParty.get book_url
    @img_url = inform["items"][1]["volumeInfo"]["imageLinks"]["thumbnail"]
    erb:info

end