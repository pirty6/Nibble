defmodule Nibble.Repo.Migrations.CreateAdminLogs do
  use Ecto.Migration

  def change do
    create table(:admin_logs) do
      add :Usuario, :string
      add :description, :string
      add :id, :num
      add :stamp, :date

      timestamps()
    end

  end
end
