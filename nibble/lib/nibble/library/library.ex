defmodule Nibble.Library do
  @moduledoc """
  The Library context.
  """

  import Ecto.Query, warn: false
  alias Nibble.Repo

  alias Nibble.Library.Book

  @doc """
  Returns the list of books.

  ## Examples

      iex> list_books()
      [%Book{}, ...]

  """
  def list_books do
    Repo.all(Book)
  end

  @doc """
  Gets a single book.

  Raises `Ecto.NoResultsError` if the Book does not exist.

  ## Examples

      iex> get_book!(123)
      %Book{}

      iex> get_book!(456)
      ** (Ecto.NoResultsError)

  """
  def get_book!(id), do: Repo.get!(Book, id)

  @doc """
  Creates a book.

  ## Examples

      iex> create_book(%{field: value})
      {:ok, %Book{}}

      iex> create_book(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  #def create_book(attrs \\ %{}) do
  #  %Book{}
  #  |> Book.changeset(attrs)
  def create_book(bookParams) do
    #IO.inspect(bookParams)
    #IO.puts("=============")
    if upload = bookParams["urlimg"] do
      uuid = upload.filename;
      extension = Path.extname(upload.filename)
      pathbase = Path.absname("lib/nibble_web/static/assets/images")
      filepath = Path.join([pathbase, "/#{uuid}-img#{extension}"])
      IO.puts(filepath)
      File.cp!(upload.path, filepath)
      newParams = Map.put(bookParams, "urlimg", filepath)
    else
      newParams = bookParams
    end
    if upload = bookParams["urlpdf"] do
        uuid = upload.filename;
        extension = Path.extname(upload.filename)
        pathbase = Path.absname("lib/nibble_web/static/assets/pdf") 
        filepath = Path.join([pathbase, "/#{uuid}-pdf#{extension}"])
        IO.puts(filepath)
        File.cp!(upload.path, filepath)
        newParams = Map.put(newParams, "urlpdf", filepath)
    end
    book = %Book{}
    |> Book.changeset(newParams)
    |> Repo.insert()
  end

  @doc """
  Updates a book.

  ## Examples

      iex> update_book(book, %{field: new_value})
      {:ok, %Book{}}

      iex> update_book(book, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_book(%Book{} = book, bookParams) do
    if upload = bookParams["urlimg"] do
      uuid = upload.filename;
      extension = Path.extname(upload.filename)
      pathbase = Path.absname("media")
      filepath = Path.join([pathbase, "/#{uuid}-img#{extension}"])
      IO.puts(filepath)
      File.cp!(upload.path, filepath)
      newParams = Map.put(bookParams, "urlimg", filepath)
    else
      newParams = bookParams
    end
    if upload = bookParams["urlpdf"] do
        uuid = upload.filename;
        extension = Path.extname(upload.filename)
        pathbase = Path.absname("pdf")
        filepath = Path.join([pathbase, "/#{uuid}-pdf#{extension}"])
        IO.puts(filepath)
        File.cp!(upload.path, filepath)
        newParams = Map.put(newParams, "urlpdf", filepath)
    end
    book
    |> Book.changeset(newParams)
    |> Repo.update()
    #book
    #|> Book.changeset(bookParams)
    #|> Repo.update()
  end

  @doc """
  Deletes a Book.

  ## Examples

      iex> delete_book(book)
      {:ok, %Book{}}

      iex> delete_book(book)
      {:error, %Ecto.Changeset{}}

  """
  def delete_book(%Book{} = book) do
    Repo.delete(book)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking book changes.

  ## Examples

      iex> change_book(book)
      %Ecto.Changeset{source: %Book{}}

  """
  def change_book(%Book{} = book) do
    Book.changeset(book, %{})
  end
end
