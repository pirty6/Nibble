defmodule Nibble.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  @primary_key {:id, :binary_id, autogenerate: true}
  @derive {Phoenix.Param, key: :id}

  def change do
    create_if_not_exists table(:users,primary_key: false) do
      add :id, :uuid, primary_key: true
      add :email, :string
      add :password_hash, :string
      add :user_type_id, references(:user_types, on_delete: :nothing)
      timestamps()
    end

    create_if_not_exists unique_index(:users, [:email])
  end
end
