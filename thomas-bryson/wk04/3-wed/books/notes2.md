require 'httparty'
title # this will come from params
book_url = "https://www.googleapis.com/books/v1/volumes?q=title#{ title }"
info = HTTParty.get book_url;
info.class 
info.keys
info["items"].class
info["items"].keys
info["items"][1]["volumeInfo"].class
info["items"][1]["volumeInfo"].keys
info["items"][1]["volumeInfo"]["imageLinks"]
info["items"][1]["volumeInfo"]["imageLinks"]["thumbnail"]

get link, description etc from the same paths




title = 'Alien' IRL this will come from params

book_url = http://www.googleapis.com/books/v1/volumes?q=title:#{ title }"
info = HTTParty.get book_url;
info["kind"]
info["totalItems"]
info["items"].class
info["items"][0].class
info["items"][0].keys
info["items"][0]["volumeInfo"].class
info["items"][0]["volumeInfo"].keys
info["items"][0]["volumeInfo"]["imageLinks"]
info["items"][0]["volumeInfo"]["imageLinks"][thumbnail]