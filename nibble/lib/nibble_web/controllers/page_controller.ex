defmodule NibbleWeb.PageController do
  use NibbleWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end

  def app(conn, _params) do
    render conn, "app.html"
  end

  def books(conn, _params) do
    books = Repo.all(Libros)

    render conn, "index.html", books: books
  end
end
