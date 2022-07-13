require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
    erb :home
end

get '/search' do
    title = params[:book]
    book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ title }"
    info = HTTParty.get book_url
    @picture = info["items"][1]["volumeInfo"]["imageLinks"]["thumbnail"]
    @book_title = info["items"][1]["volumeInfo"]["title"]
    @author = info["items"][1]["volumeInfo"]["authors"][0]
    @description = info["items"][1]["volumeInfo"]["description"]

    erb :search
end

# So I have the search bar working with a book that I have found and it prints a url of the picture
# Next I want to convert the url posted on the page at the moment into a img url