defmodule NibbleWeb.PlaceControllerTest do
  use NibbleWeb.ConnCase

  alias Nibble.Sections

  @create_attrs %{description: "some description", name: "some name", sector: "some sector", url360: "some url360", urlthumbimg: "some urlthumbimg"}
  @update_attrs %{description: "some updated description", name: "some updated name", sector: "some updated sector", url360: "some updated url360", urlthumbimg: "some updated urlthumbimg"}
  @invalid_attrs %{description: nil, name: nil, sector: nil, url360: nil, urlthumbimg: nil}

  def fixture(:place) do
    {:ok, place} = Sections.create_place(@create_attrs)
    place
  end

  describe "index" do
    test "lists all places", %{conn: conn} do
      conn = get conn, place_path(conn, :index)
      assert html_response(conn, 200) =~ "Listing Places"
    end
  end

  describe "new place" do
    test "renders form", %{conn: conn} do
      conn = get conn, place_path(conn, :new)
      assert html_response(conn, 200) =~ "New Place"
    end
  end

  describe "create place" do
    test "redirects to show when data is valid", %{conn: conn} do
      conn = post conn, place_path(conn, :create), place: @create_attrs

      assert %{id: id} = redirected_params(conn)
      assert redirected_to(conn) == place_path(conn, :show, id)

      conn = get conn, place_path(conn, :show, id)
      assert html_response(conn, 200) =~ "Show Place"
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post conn, place_path(conn, :create), place: @invalid_attrs
      assert html_response(conn, 200) =~ "New Place"
    end
  end

  describe "edit place" do
    setup [:create_place]

    test "renders form for editing chosen place", %{conn: conn, place: place} do
      conn = get conn, place_path(conn, :edit, place)
      assert html_response(conn, 200) =~ "Edit Place"
    end
  end

  describe "update place" do
    setup [:create_place]

    test "redirects when data is valid", %{conn: conn, place: place} do
      conn = put conn, place_path(conn, :update, place), place: @update_attrs
      assert redirected_to(conn) == place_path(conn, :show, place)

      conn = get conn, place_path(conn, :show, place)
      assert html_response(conn, 200) =~ "some updated description"
    end

    test "renders errors when data is invalid", %{conn: conn, place: place} do
      conn = put conn, place_path(conn, :update, place), place: @invalid_attrs
      assert html_response(conn, 200) =~ "Edit Place"
    end
  end

  describe "delete place" do
    setup [:create_place]

    test "deletes chosen place", %{conn: conn, place: place} do
      conn = delete conn, place_path(conn, :delete, place)
      assert redirected_to(conn) == place_path(conn, :index)
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
