defmodule NibbleWeb.BookView do
  use NibbleWeb, :view
  alias NibbleWeb.BookView

  def render("index.json", %{books: books}) do
    %{type: "library",
      data: render_many(books, BookView, "book.json")}
  end

  def render("show.json", %{book: book}) do
    %{data: render_one(book, BookView, "book.json")}
  end

  def render("book.json", %{book: book}) do
    %{id: book.id,
      title: book.title,
      author: book.author,
      code: book.code,
      description: book.description,
      genre: book.genre,
      editorial: book.editorial,
      urlimg: book.urlimg}
  end
end
