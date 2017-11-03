defmodule Nibble.Repo.Migrations.AddingLog do
  use Ecto.Migration

  def change do
    create table(:log) do
      add :user, :string
      add :description, :string

      timestamps()
    end
  end
end
