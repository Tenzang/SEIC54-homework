require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
    erb :home
end

get '/bookcover' do
    title = params[:title]
    book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{title}"
    info = HTTParty.get book_url
    @cover = info["items"][1]["volumeInfo"]["imageLinks"]["thumbnail"]
    authors = info["items"][1]["volumeInfo"]["authors"]
    @authors = authors[0] if authors.size == 1
    @authors = authors.join(', ') if authors.size > 1 
    @description = info["items"][1]["volumeInfo"]["description"]
    @title = info["items"][1]["volumeInfo"]["title"]

    erb :bookcover
end
