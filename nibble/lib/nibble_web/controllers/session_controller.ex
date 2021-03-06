defmodule NibbleWeb.SessionController do
  use NibbleWeb, :controller

  def new(conn, _) do
    if Nibble.Session.logged_in?(conn), do: redirect(conn,to: "/sessions/new"), else: render(conn,"new.html")
  end

  def create(conn, %{"session" => %{"email" => user, "password" => pass}}) do
    case Nibble.Auth.login_by_email_and_pass(conn, user, pass, repo: Nibble.Repo) do
      {:ok, conn} ->
        user = Guardian.Plug.current_resource(conn)
        conn
        |> put_flash(:info, "Login Successful")
        |> redirect(to: user_path(conn, :show, user.id ))

      {:error, _reason, conn} ->
        conn
        |> put_flash(:error, "Wrong username/password")
        |> redirect(to: "/sessions/new")
    end
  end

  def delete(conn, _) do conn
    |> Guardian.Plug.sign_out
    |> put_flash(:info, "Your session is end ")
    |> redirect(to: "/sessions/new")
  end
end
