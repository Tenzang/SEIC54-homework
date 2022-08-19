require "sinatra"
require "sinatra/reloader"
require 'httparty'  

get "/" do
    erb :home
end

get "/book" do
    book = params[:book]
    book_info = HTTParty.get("https://www.googleapis.com/books/v1/volumes?q=title:#{book}")
    @book_thumbnail = book_info["items"][1]["volumeInfo"]["imageLinks"]["thumbnail"]
    @book_name = book_info["items"][1]["volumeInfo"]["title"]
    @book_author = book_info["items"][1]["volumeInfo"]["authors"]
    erb :book
end