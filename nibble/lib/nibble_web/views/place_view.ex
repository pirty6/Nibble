defmodule NibbleWeb.PlaceView do
  use NibbleWeb, :view
  alias NibbleWeb.PlaceView

  def render("index.json", %{places: places}) do
    %{data: render_many(places, PlaceView, "place.json")}
  end

  def render("show.json", %{place: place}) do
    %{data: render_one(place, PlaceView, "place.json")}
  end

  def render("place.json", %{place: place}) do
    %{id: place.id,
      name: place.name,
      description: place.description,
      url360: place.url360,
      urlthumbimg: place.urlthumbimg,
      sector: place.sector}
  end
end
