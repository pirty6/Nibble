defmodule NibbleWeb.BookController do
  use NibbleWeb, :controller

  alias NibbleWeb.Book

  def index(conn, _params) do
    books = Repo.all(Libros)

    render conn, "index.html", books: books
  end

end
