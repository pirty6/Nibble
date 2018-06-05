defmodule Nibble.SectionsTest do
  use Nibble.DataCase

  alias Nibble.Sections

  describe "places" do
    alias Nibble.Sections.Place

    @valid_attrs %{description: "some description", name: "some name", sector: "some sector", url360: "some url360", urlthumbimg: "some urlthumbimg"}
    @update_attrs %{description: "some updated description", name: "some updated name", sector: "some updated sector", url360: "some updated url360", urlthumbimg: "some updated urlthumbimg"}
    @invalid_attrs %{description: nil, name: nil, sector: nil, url360: nil, urlthumbimg: nil}

    def place_fixture(attrs \\ %{}) do
      {:ok, place} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Sections.create_place()

      place
    end

    test "list_places/0 returns all places" do
      place = place_fixture()
      assert Sections.list_places() == [place]
    end

    test "get_place!/1 returns the place with given id" do
      place = place_fixture()
      assert Sections.get_place!(place.id) == place
    end

    test "create_place/1 with valid data creates a place" do
      assert {:ok, %Place{} = place} = Sections.create_place(@valid_attrs)
      assert place.description == "some description"
      assert place.name == "some name"
      assert place.sector == "some sector"
      assert place.url360 == "some url360"
      assert place.urlthumbimg == "some urlthumbimg"
    end

    test "create_place/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Sections.create_place(@invalid_attrs)
    end

    test "update_place/2 with valid data updates the place" do
      place = place_fixture()
      assert {:ok, place} = Sections.update_place(place, @update_attrs)
      assert %Place{} = place
      assert place.description == "some updated description"
      assert place.name == "some updated name"
      assert place.sector == "some updated sector"
      assert place.url360 == "some updated url360"
      assert place.urlthumbimg == "some updated urlthumbimg"
    end

    test "update_place/2 with invalid data returns error changeset" do
      place = place_fixture()
      assert {:error, %Ecto.Changeset{}} = Sections.update_place(place, @invalid_attrs)
      assert place == Sections.get_place!(place.id)
    end

    test "delete_place/1 deletes the place" do
      place = place_fixture()
      assert {:ok, %Place{}} = Sections.delete_place(place)
      assert_raise Ecto.NoResultsError, fn -> Sections.get_place!(place.id) end
    end

    test "change_place/1 returns a place changeset" do
      place = place_fixture()
      assert %Ecto.Changeset{} = Sections.change_place(place)
    end
  end
end
