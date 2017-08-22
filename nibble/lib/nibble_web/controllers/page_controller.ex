defmodule NibbleWeb.PageController do
  use NibbleWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
