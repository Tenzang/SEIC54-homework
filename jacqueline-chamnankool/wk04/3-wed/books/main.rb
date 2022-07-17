# title = "Jaws" (actually get from params)
# book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{title}"
# info = HTTParty.get book_url
# TO GET TO THE IMAGE LINK
# info["items"] (check info.keys) => returns an array
# info["items"][1]["volumeInfo"] (check info["items"][1].keys) => returns a hash
# info["items"][1]["volumeInfo"]["imageLinks"] (check info["items"][1]["volumeInfo"].keys) => returns a hash
# info["items"][1]["volumeInfo"]["imageLinks"]["thumbnail"] (check info["items"][1]["volumeInfo"]["imageLinks"].keys) => returns the final image url

require "sinatra"
require "sinatra/reloader"
require "httparty"

get "/" do
    erb :home
end

get "/info" do
    @title = params[:title]
    @book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@title}"
    info = HTTParty.get @book_url
    # cover
    @cover_url = info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    # author
    @author = info["items"][0]["volumeInfo"]["authors"][0]
    # description
    @description = info["items"][0]["volumeInfo"]["description"]

    erb :info
end