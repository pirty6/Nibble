defmodule Nibble.Library.Book do
  use Ecto.Schema
  import Ecto.Changeset
  alias Nibble.Library.Book


  schema "books" do
    field :author, :string
    field :code, :integer
    field :description, :string
    field :editorial, :string
    field :genre, :string
    field :title, :string
    field :urlimg, :string
    field :urlpdf, :string
    timestamps()
  end

  @doc false
  def changeset(%Book{} = book, attrs) do
    book
    |> cast(attrs, [:title, :author, :code, :description, :genre, :editorial, :urlimg, :urlpdf])
    |> validate_required([:title, :author, :code, :description, :genre, :editorial, :urlimg, :urlpdf])
  end
end
