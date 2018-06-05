defmodule Nibble.Sections.Place do
  use Ecto.Schema
  import Ecto.Changeset
  alias Nibble.Sections.Place


  schema "places" do
    field :description, :string
    field :name, :string
    field :sector, :string
    field :url360, :string
    field :urlthumbimg, :string

    timestamps()
  end

  @doc false
  def changeset(%Place{} = place, attrs) do
    place
    |> cast(attrs, [:name, :description, :url360, :urlthumbimg, :sector])
    |> validate_required([:name, :description, :url360, :urlthumbimg, :sector])
  end
end
