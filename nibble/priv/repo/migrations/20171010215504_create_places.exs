defmodule Nibble.Repo.Migrations.CreatePlaces do
  use Ecto.Migration

  def change do
    create table(:places) do
      add :name, :string
      add :description, :string
      add :url360, :string
      add :urlthumbimg, :string
      add :sector, :string

      timestamps()
    end

  end
end
