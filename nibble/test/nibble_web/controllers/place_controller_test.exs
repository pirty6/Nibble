defmodule NibbleWeb.PlaceControllerTest do
  use NibbleWeb.ConnCase

  alias Nibble.Sections
  alias Nibble.Sections.Place

  @create_attrs %{description: "some description", name: "some name", sector: "some sector", url360: "some url360", urlthumbimg: "some urlthumbimg"}
  @update_attrs %{description: "some updated description", name: "some updated name", sector: "some updated sector", url360: "some updated url360", urlthumbimg: "some updated urlthumbimg"}
  @invalid_attrs %{description: nil, name: nil, sector: nil, url360: nil, urlthumbimg: nil}

  def fixture(:place) do
    {:ok, place} = Sections.create_place(@create_attrs)
    place
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all places", %{conn: conn} do
      conn = get conn, place_path(conn, :index)
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create place" do
    test "renders place when data is valid", %{conn: conn} do
      conn = post conn, place_path(conn, :create), place: @create_attrs
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get conn, place_path(conn, :show, id)
      assert json_response(conn, 200)["data"] == %{
        "id" => id,
        "description" => "some description",
        "name" => "some name",
        "sector" => "some sector",
        "url360" => "some url360",
        "urlthumbimg" => "some urlthumbimg"}
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post conn, place_path(conn, :create), place: @invalid_attrs
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update place" do
    setup [:create_place]

    test "renders place when data is valid", %{conn: conn, place: %Place{id: id} = place} do
      conn = put conn, place_path(conn, :update, place), place: @update_attrs
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get conn, place_path(conn, :show, id)
      assert json_response(conn, 200)["data"] == %{
        "id" => id,
        "description" => "some updated description",
        "name" => "some updated name",
        "sector" => "some updated sector",
        "url360" => "some updated url360",
        "urlthumbimg" => "some updated urlthumbimg"}
    end

    test "renders errors when data is invalid", %{conn: conn, place: place} do
      conn = put conn, place_path(conn, :update, place), place: @invalid_attrs
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete place" do
    setup [:create_place]

    test "deletes chosen place", %{conn: conn, place: place} do
      conn = delete conn, place_path(conn, :delete, place)
      assert response(conn, 204)
      assert_error_sent 404, fn ->
        get conn, place_path(conn, :show, place)
      end
    end
  end

  defp create_place(_) do
    place = fixture(:place)
    {:ok, place: place}
  end
end
