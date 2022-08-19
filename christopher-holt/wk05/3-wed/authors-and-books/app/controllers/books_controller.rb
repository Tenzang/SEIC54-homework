class BooksController < ApplicationController
  def index
    @books = Book.all
  end

  def new
    @book = Book.new
  end

  def create
    book = Book.create book_params
    redirect_to book # GET book/:id
  end

  def edit
    @book = Book.find params[:id]
  end

  def update
    book = Book.find params[:id]
    book.update book_params
    redirect_to book
  end

  def show
    @book = Book.find params[:id]
  end

  def destroy
    book = Book.find params[:id]
    book.destroy
    redirect_to books_path
  end

  private
  # Strong params
  def book_params
    params.require(:book).permit(:title, :year, :genre, :length, :image, :author_id)
  end
end
