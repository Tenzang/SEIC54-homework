require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

#ERB: Embedded Ruby

get '/' do 
    erb:home
end

get '/info' do

    #get stock price and render the output
book_link = "https://www.googleapis.com/books/v1/volumes?q=title:#{params[:title]}"
info = HTTParty.get book_link;
@book_cover = info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]

erb :info 
end

