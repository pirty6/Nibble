defmodule NibbleWeb.PlaceView do
  use NibbleWeb, :view
  alias NibbleWeb.PlaceView

  def render("index.json", %{places: places}) do
    %{type: "map",
      data: render_many(places, PlaceView, "place.json")}
  end

  def render("show.json", %{place: place}) do
    %{data: render_one(place, PlaceView, "place.json")}
  end

  def render("place.json", %{place: place}) do
    %{description: place.description,
      name: place.name,
      sector: place.sector,
      url360: place.url360,
      urlthumbimg: place.urlthumbimg}
  end

end
