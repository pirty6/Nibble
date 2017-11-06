defmodule Nibble.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset
  alias Nibble.Accounts.{User,UserType}

  @primary_key {:id, :binary_id, autogenerate: true}
  schema "users" do
    field :email, :string
    field :password_hash, :string
    field :password, :string, virtual: true
    field :access_key, :string, virtual: true
    belongs_to :user_type, UserType
    timestamps()
  end

  @required_fields ~w(email password)
  @optional_fields ~w(password_hash)

  @doc false
  def changeset(%User{} = user, attrs \\ %{}) do
    user
    |> cast(attrs, [:email, :password])
    |> validate_required([:email, :password])
    |> unique_constraint(:email)
    |> validate_format(:email, ~r/@/)
    |> validate_length(:password, min: 5)
    |> put_password_hash()
  end

  @doc false
  def registration_changeset(%User{} = user, params) do
  user
  |> changeset(params)
  |> cast(params, ~w(password), [])
  |> validate_length(:password, min: 3)
  |> put_password_hash()
  end

  defp put_password_hash(changeset) do
    case changeset do
      %Ecto.Changeset{valid?: true, changes: %{password: pass}} ->
        put_change(changeset, :password_hash,
                   Comeonin.Pbkdf2.hashpwsalt(pass))
        _ ->
          changeset
    end
  end
end
