defmodule NibbleWeb.LogController do
  use NibbleWeb, :controller

  alias Nibble.Changelog
  alias Nibble.Changelog.Log

  def index(conn, _params) do
    logs = Changelog.list_logs()
    render(conn, "index.html", logs: logs)
  end

  def new(conn, _params) do
    changeset = Changelog.change_log(%Log{})
    render(conn, "new.html", changeset: changeset)
  end

  def create(conn, %{"log" => log_params}) do
    
    case Changelog.create_log(log_params) do
      {:ok, log} ->
        conn
        |> put_flash(:info, "Log created successfully.")
        |> redirect(to: log_path(conn, :show, log))
      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    log = Changelog.get_log!(id)
    render(conn, "show.html", log: log)
  end

  def edit(conn, %{"id" => id}) do
    log = Changelog.get_log!(id)
    changeset = Changelog.change_log(log)
    render(conn, "edit.html", log: log, changeset: changeset)
  end

  def update(conn, %{"id" => id, "log" => log_params}) do
    log = Changelog.get_log!(id)

    case Changelog.update_log(log, log_params) do
      {:ok, log} ->
        conn
        |> put_flash(:info, "Log updated successfully.")
        |> redirect(to: log_path(conn, :show, log))
      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "edit.html", log: log, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    log = Changelog.get_log!(id)
    {:ok, _log} = Changelog.delete_log(log)

    conn
    |> put_flash(:info, "Log deleted successfully.")
    |> redirect(to: log_path(conn, :index))
  end
end
