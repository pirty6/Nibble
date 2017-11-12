defmodule NibbleWeb.PlaceController do
  use NibbleWeb, :controller

  alias Nibble.Sections
  alias Nibble.Sections.Place

  action_fallback NibbleWeb.FallbackController


##################################### CMS ##########################################


  def index(conn, _params) do
    places = Sections.list_places()
    render(conn, "index.html", places: places)
  end

  def new(conn, _params) do
    changeset = Sections.change_place(%Place{})
    render(conn, "new.html", changeset: changeset)
  end

  def create(conn, %{"place" => place_params}) do
    IO.inspect place_params
    case Sections.create_place(place_params) do
      {:ok, place} ->
        conn
        |> put_flash(:info, "Place created successfully.")
        |> redirect(to: place_path(conn, :show, place))
      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    place = Sections.get_place!(id)
    render(conn, "show.html", place: place)
  end

  def edit(conn, %{"id" => id}) do
    place = Sections.get_place!(id)
    changeset = Sections.change_place(place)
    render(conn, "edit.html", place: place, changeset: changeset)
  end

  def update(conn, %{"id" => id, "place" => place_params}) do
    IO.inspect place_params
    place = Sections.get_place!(id)
    case Sections.update_place(place, place_params) do
      {:ok, place} ->
        conn
        |> put_flash(:info, "Place updated successfully.")
        |> redirect(to: place_path(conn, :show, place))
      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "edit.html", place: place, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    place = Sections.get_place!(id)
    {:ok, _place} = Sections.delete_place(place)

    conn
    |> put_flash(:info, "Place deleted successfully.")
    |> redirect(to: place_path(conn, :index))
  end

###################################### json #########################################

def indexjson(conn, _params) do
    places = Sections.list_places()
    render(conn, "index.json", places: places)
  end

  def createjson(conn, %{"place" => place_params}) do
    with {:ok, %Place{} = place} <- Sections.create_place(place_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", place_path(conn, :show, place))
      |> render("show.json", place: place)
    end
  end

  def showjson(conn, %{"id" => id}) do
    place = Sections.get_place!(id)
    render(conn, "show.json", place: place)
  end

  def updatejson(conn, %{"id" => id, "place" => place_params}) do
    place = Sections.get_place!(id)

    with {:ok, %Place{} = place} <- Sections.update_place(place, place_params) do
      render(conn, "show.json", place: place)
    end
  end

  def deletejson(conn, %{"id" => id}) do
    place = Sections.get_place!(id)
    with {:ok, %Place{}} <- Sections.delete_place(place) do
      send_resp(conn, :no_content, "")
    end
  end



end
