defmodule NibbleWeb.UserController do
  use NibbleWeb, :controller

  alias Nibble.Accounts
  alias Nibble.Accounts.User
  alias Nibble.Repo

  def index(conn, _params) do
    users = Accounts.list_users()
    render(conn, "index.html", users: users)
  end

  def new(conn, _params) do
    user_types = Accounts.list_user_types()
    changeset = User.changeset(%User{})
    render(conn, "new.html", changeset: changeset)
  end

  def create(conn, %{"user" => user_params}) do
      # Get the access key from the params
      access_key = user_params["access_key"]
      # Check if it exists
      database_key = Accounts.check_access_key!(access_key)

      case database_key do
        nil ->
          conn
            |> put_flash(:error, "Access Key not found.")
            |> redirect(to: user_path(conn, :index))
        _ ->
          user_type_id = database_key.user_type_id
          case Accounts.create_user(user_params, user_type_id) do
            {:ok, user} ->
              Accounts.delete_access_key(database_key)
              conn
              |> put_flash(:info, "User created successfully.")
              |> redirect(to: user_path(conn, :show, user))
            {:error, %Ecto.Changeset{} = changeset} ->
              render(conn, "new.html", changeset: changeset)
          end
      end
    end

  def show(conn, %{"id" => id}) do
    user = Accounts.get_user!(id)
    changeset = User.changeset(user)
    cond do
      user == Guardian.Plug.current_resource(conn) ->
        conn
        |> render("show.html", user: user, changeset: changeset)
      true ->
        conn
        |> put_flash(:info, "No access rights ")
        |> redirect(to: page_path(conn, :index))
    end
  end

  def edit(conn, %{"id" => id}) do
    user = Accounts.get_user!(id)
    changeset = User.changeset(user)
    cond do
      user == Guardian.Plug.current_resource(conn) ->
        render conn, "edit.html", user: user,changeset: changeset
      true ->
        conn
        |> put_flash(:info, "No access to edit ")
        |> redirect(to: user_path(conn, :index))
    end
  end

  def update(conn, %{"id" => id, "user" => user_params}) do
    user = Accounts.get_user!(id)
    changeset = User.registration_changeset(user, user_params)
    cond do
      user == Guardian.Plug.current_resource(conn) ->
        case Repo.update(changeset) do
          {:ok, _user} ->
            conn
            |> put_flash(:info, "User updated")
            |> redirect(to: page_path(conn, :index,user: user))
          {:error, changeset} ->
            conn
            |> render("show.html", user: user, changeset: changeset)
        end

      true ->
        conn
        |> put_flash(:info, "No access")
        |> redirect(to: page_path(conn, :index))
    end

  end

  def delete(conn, %{"id" => id}) do
    user = Accounts.get_user!(id)
    cond do
      user == Guardian.Plug.current_resource(conn) ->
        case Repo.delete(user) do
          {:ok, _user} ->
            conn
            |> Guardian.Plug.sign_out
            |> put_flash(:info, "Account deleted")
            |> redirect(to: page_path(conn, :index))
          {:error, _} ->
            conn
            |> render("show.html", user: user)
        end
      true ->
        conn
        |> put_flash(:info, "No access")
        |> redirect(to: page_path(conn, :index))
    end
  end
end
