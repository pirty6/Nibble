defmodule NibbleWeb.LogController do
  use NibbleWeb, :controller
  alias Nibble.Admin
  alias Nibble.Admin.Logs
  alias Nibble.Library
  alias Nibble.Library.Book

  def index(conn, _params)do
    logs = Logs.list_books()
    render(conn, "Index.html", logs: logs)
  end

  def create(conn, %{"idBook" => book.id})do
    case Logs.create_logs(user, description, idBook, stamp) do
      {:ok, logs} ->
        conn
        |> put_flash(:info, "Log updated")
      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

end
