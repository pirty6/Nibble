defmodule Nibble.Sections do
  @moduledoc """
  The Sections context.
  """

  import Ecto.Query, warn: false
  alias Nibble.Repo

  alias Nibble.Sections.Place

  @doc """
  Returns the list of places.

  ## Examples

      iex> list_places()
      [%Place{}, ...]

  """
  def list_places do
    Repo.all(Place)
  end

  @doc """
  Gets a single place.

  Raises `Ecto.NoResultsError` if the Place does not exist.

  ## Examples

      iex> get_place!(123)
      %Place{}

      iex> get_place!(456)
      ** (Ecto.NoResultsError)

  """
  def get_place!(id), do: Repo.get!(Place, id)

  @doc """
  Creates a place.

  ## Examples

      iex> create_place(%{field: value})
      {:ok, %Place{}}

      iex> create_place(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_place(placeParams) do
    if upload = placeParams["url360"] do
      uuid = upload.filename;
      extension = Path.extname(upload.filename)
      pathbase = Path.absname("lib/nibble_web/static/assets/images")
      filepath = Path.join([pathbase, "/#{uuid}#{extension}"])
      IO.puts(filepath)
      File.cp!(upload.path, filepath)
      newParams = Map.put(placeParams, "url360", filepath)
    else
      newParams = placeParams
    end
    if upload = placeParams["urlthumbimg"] do
        uuid = upload.filename;
        extension = Path.extname(upload.filename)
        pathbase = Path.absname("lib/nibble_web/static/assets/images")
        filepath = Path.join([pathbase, "/#{uuid}#{extension}"])
        IO.puts(filepath)
        File.cp!(upload.path, filepath)
        newParams = Map.put(newParams, "urlthumbimg", filepath)
    end
    place = %Place{}
    |> Place.changeset(newParams)
    |> Repo.insert()
  end
  #def create_place(attrs \\ %{}) do
  #  %Place{}
  #  |> Place.changeset(attrs)
  #  |> Repo.insert()
  #end

  @doc """
  Updates a place.

  ## Examples

      iex> update_place(place, %{field: new_value})
      {:ok, %Place{}}

      iex> update_place(place, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  #def update_place(%Place{} = place, attrs) do
  #  place
  #  |> Place.changeset(attrs)
  #  |> Repo.update()
  #end
  def update_place(%Place{} = place, placeParams) do
    if upload = placeParams["url360"] do
      uuid = upload.filename;
      extension = Path.extname(upload.filename)
      pathbase = Path.absname("360")
      filepath = Path.join([pathbase, "/#{uuid}#{extension}"])
      IO.puts(filepath)
      File.cp!(upload.path, filepath)
      newParams = Map.put(placeParams, "url360", filepath)
    else
      newParams = placeParams
    end
    if upload = placeParams["urlthumbimg"] do
        uuid = upload.filename;
        extension = Path.extname(upload.filename)
        pathbase = Path.absname("thumbimg")
        filepath = Path.join([pathbase, "/#{uuid}#{extension}"])
        IO.puts(filepath)
        File.cp!(upload.path, filepath)
        newParams = Map.put(newParams, "urlthumbimg", filepath)
    end
    place
    |> Place.changeset(newParams)
    |> Repo.update()
  end

  @doc """
  Deletes a Place.

  ## Examples

      iex> delete_place(place)
      {:ok, %Place{}}

      iex> delete_place(place)
      {:error, %Ecto.Changeset{}}

  """
  def delete_place(%Place{} = place) do
    Repo.delete(place)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking place changes.

  ## Examples

      iex> change_place(place)
      %Ecto.Changeset{source: %Place{}}

  """
  def change_place(%Place{} = place) do
    Place.changeset(place, %{})
  end
end
