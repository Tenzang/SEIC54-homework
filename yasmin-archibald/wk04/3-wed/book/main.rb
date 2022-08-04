require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


get '/home' do
    erb :home
end

get '/yourbookhere' do

title = params[:book_title]
book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{title}"

info = HTTParty.get book_url

@cover = info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]

erb :yourbookhere
end