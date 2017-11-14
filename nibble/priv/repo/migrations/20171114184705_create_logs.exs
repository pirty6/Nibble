defmodule Nibble.Repo.Migrations.CreateLogs do
  use Ecto.Migration

  def change do
    create table(:logs) do
      add :user, :string
      add :userid, :string
      add :role, :string
      add :change, :string

      timestamps()
    end

  end
end
