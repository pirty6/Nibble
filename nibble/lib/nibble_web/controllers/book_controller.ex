defmodule NibbleWeb.BookController do
  use NibbleWeb, :controller

  alias Nibble.Library
  alias Nibble.Library.Book

  action_fallback NibbleWeb.FallbackController

  def indexcms(conn, _params) do
    books = Library.list_books()
    render(conn, "index.html", books: books)
  end

  def new(conn, _params) do
    changeset = Library.change_book(%Book{})
    render(conn, "new.html", changeset: changeset)
  end

  def showcms(conn, %{"id" => id}) do
    book = Library.get_book!(id)
    render(conn, "show.html", book: book)
  end

  def edit(conn, %{"id" => id}) do
    book = Library.get_book!(id)
    changeset = Library.change_book(book)
    render(conn, "edit.html", book: book, changeset: changeset)
  end

  def index(conn, _params) do
    books = Library.list_books()
    render(conn, "index.json", books: books)
  end

  def create(conn, %{"book" => book_params}) do
    with {:ok, %Book{} = book} <- Library.create_book(book_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", book_path(conn, :show, book))
      |> render("show.json", book: book)
    end
  end

  def show(conn, %{"id" => id}) do
    book = Library.get_book!(id)
    render(conn, "show.json", book: book)
  end

  def update(conn, %{"id" => id, "book" => book_params}) do
    book = Library.get_book!(id)

    with {:ok, %Book{} = book} <- Library.update_book(book, book_params) do
      render(conn, "show.json", book: book)
    end
  end

  def delete(conn, %{"id" => id}) do
    book = Library.get_book!(id)
    with {:ok, %Book{}} <- Library.delete_book(book) do
      send_resp(conn, :no_content, "")
    end
  end
end
