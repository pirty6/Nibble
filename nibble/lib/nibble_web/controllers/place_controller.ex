defmodule NibbleWeb.PlaceController do
  use NibbleWeb, :controller

  alias Nibble.Sections
  alias Nibble.Sections.Place

  action_fallback NibbleWeb.FallbackController

  def index(conn, _params) do
    places = Sections.list_places()
    render(conn, "index.json", places: places)
  end

  def create(conn, %{"place" => place_params}) do
    with {:ok, %Place{} = place} <- Sections.create_place(place_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", place_path(conn, :show, place))
      |> render("show.json", place: place)
    end
  end

  def show(conn, %{"id" => id}) do
    place = Sections.get_place!(id)
    render(conn, "show.json", place: place)
  end

  def update(conn, %{"id" => id, "place" => place_params}) do
    place = Sections.get_place!(id)

    with {:ok, %Place{} = place} <- Sections.update_place(place, place_params) do
      render(conn, "show.json", place: place)
    end
  end

  def delete(conn, %{"id" => id}) do
    place = Sections.get_place!(id)
    with {:ok, %Place{}} <- Sections.delete_place(place) do
      send_resp(conn, :no_content, "")
    end
  end
end
