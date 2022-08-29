require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do 
    erb :home
end

get '/info' do 
    @book_title = params[:title]
    @book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@book_title}"
    info = HTTParty.get @book_url

    @cover_url = info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]

    @author = info["items"][0]["volumeInfo"]["authors"]

    @description = info["items"][0]["volumeInfo"]["description"]
                 
    erb :info

end

