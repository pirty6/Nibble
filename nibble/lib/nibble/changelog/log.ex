defmodule Nibble.Changelog.Log do
  use Ecto.Schema
  import Ecto.Changeset
  alias Nibble.Changelog.Log


  schema "logs" do
    field :change, :string
    field :role, :string
    field :user, :string
    field :userid, :string

    timestamps()
  end

  @doc false
  def changeset(%Log{} = log, attrs) do
    log
    |> cast(attrs, [:user, :userid, :role, :change])
    |> validate_required([:user, :userid, :role, :change])
  end
end
