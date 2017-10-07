defmodule Nibble.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset
  alias Nibble.Accounts.User


  schema "users" do
    field :email, :string
    field :name, :string
    field :password, :string

    timestamps()
  end

  @doc false
  def changeset(%User{} = user, attrs) do
    user
    |> cast(attrs, [:name, :password, :email])
    |> validate_required([:name, :password, :email])
  end
end
